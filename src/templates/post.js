import React, { useEffect, useState } from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import LastPostsMenu from "../components/LastPostsMenu"
import SEO from "../components/seo"
import ViewCounter from "../components/ViewCounter"

// style
import "../style/blog.scss"

const PostTemplate = props => {
  const [menu, openMenu] = useState(false)

  const post = props.data.wordpressPost
  const data = props.data
  console.log(props.data.wordpressPost)

  return (
    <Layout>
      <SEO
        // title={metaTitle || "Post blogowy"}
        // description={metaDescription || "Wpis na blogu"}
        title={"Post blogowy"}
        description={"Wpis na blogu"}
      />
      <div className="blog__wrapper">
        <section className="blog__main">
          <h1 id="anchorForScrolling">Blog</h1>

          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>
        <section
          className={menu ? "menuBlog--open" : "menuBlog--closed"}
          onClick={() => openMenu(!menu)}
        >
          <div className="menuBlog__inner">
            <LastPostsMenu />
          </div>
        </section>
        <ViewCounter id={post.id} />
      </div>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      id
    }
    site {
      siteMetadata {
        title
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
