import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default function BlogMenu() {
  const data = useStaticQuery(graphql`
    query menuQuery {
      allWordpressMenusMenusItems(filter: { name: { eq: "posty" } }) {
        edges {
          node {
            id
            name
            items {
              slug
              title
            }
          }
        }
      }
    }
  `)
  console.log(data.allWordpressMenusMenusItems.edges[0].node.items)
  const postItems = data.allWordpressMenusMenusItems.edges[0].node.items

  const styles = {
    sideMenu: {
      background: "#4ce4c3",
      padding: "15px 5px",
      borderRadius: "4px",
      listStyleType: "none",
      textDecoration: "none",
    },
    items: {
      textDecoration: "none",
      color: "#444",
    },
  }
  return (
    <>
      <ul style={styles.sideMenu}>
        {postItems
          .map(item => (
            <li>
              <Link style={styles.items} key={item.slug} to={item.slug}>
                {item.title}
              </Link>
            </li>
          ))
          .slice(0, 5)}
      </ul>
    </>
  )
}
