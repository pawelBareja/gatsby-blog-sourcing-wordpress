import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LastPostsMenu from "../components/blog/BlogMenu"

// css
import "../style/layout.scss"

export default ({ data }) => {
  // console.log(data.allWordpressPost.edges)
  return (
    <Layout>
      <SEO title="home" />
      <div className="container">
        <div className="container__70">
          <h4>Posts</h4>
          {data.allWordpressPost.edges.map(({ node }) => (
            <div>
              <span style={{ color: "#414141" }}>
                Czas czytania{" "}
                <span>{Math.ceil(node.fields.readingTime.minutes)}</span> min.
              </span>
              <Link to={node.slug}>
                <p>{node.title}</p>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div>
        <div className="container__30">
          <p>
            <strong>Ostatnie posty</strong>
            <LastPostsMenu />
          </p>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          fields {
            readingTime {
              minutes
            }
          }
        }
      }
    }
  }
`
