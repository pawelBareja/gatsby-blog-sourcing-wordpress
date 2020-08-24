const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const createPaginatedPages = require("gatsby-paginate")

const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        excerpt
        fields {
          readingTime {
            minutes
          }
        }
        id
        slug
        status
        template
        format
        link
        title
        date(formatString: "MM.DD.YYYY")
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 700, quality: 100) {
   src
              }
            }
          }
        }
      }
    }
  }
  allWordpressMenusMenusItems {
    edges {
      node {
        id
        name
        items {
          title
          slug
          post_title
          url
        }
      }
    }
  }
}

`

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    // Pages
    graphql(pageQuery).then(() => {
      graphql(postsQuery).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const postTemplate = path.resolve("./src/templates/post.js")
        const postsTemplate = path.resolve("./src/templates/posts.js")

        createPaginatedPages({
          edges: result.data.allWordpressPost.edges,
          createPage: createPage,
          pageTemplate: "src/templates/posts.js",
          pageLength: 5, // This is optional and defaults to 10 if not used
          pathPrefix: "", // This is optional and defaults to an empty string if not used
        })

        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            path: edge.node.slug,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
        resolve()
      })
    })
    // ==== END POSTS ====
  })
}
