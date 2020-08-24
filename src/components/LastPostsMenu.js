import React from "react"
import Link from "gatsby-link"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      {
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
    `}
    render={data => (
      <ul>
        {data.allWordpressMenusMenusItems.edges[1].node.items
          .slice(0, 4)
          .map(item => (
            <li>
              <Link
                key={item.slug}
                to={item.url.replace("https://blog.barejastudio.pl", "")}
              >
                {item.title.length < 50
                  ? item.title
                  : item.title.substring(0, 50).concat("...")}
              </Link>
            </li>
          ))}
      </ul>
    )}
  />
)
