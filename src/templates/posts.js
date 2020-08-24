import React, { useState } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LastPostsMenu from "../components/LastPostsMenu"

// style
import "../style/blog.scss"

const NavLink = props => {
  console.log(props.test)
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ data, pathContext }) => {
  const [menu, openMenu] = useState(false)
  const { group, index, first, last, pageCount } = pathContext
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  // console.log(group)
  // console.log(index)
  // console.log(pageCount)

  return (
    <Layout>
      <SEO
        title="jakiś tytuł
"
      />
      <div className="blog__wrapper">
        <h1 id="anchorForScrolling">Blog</h1>
        <section className="blog__main">
          <section className="posts">
            {group.map(({ node }) => (
              <div key={node.slug} className={"post"}>
                {/* foto start  */}
                <Link
                  to={node.link.replace("https://blog.barejastudio.pl/", "")}
                >
                  {node.featured_media && (
                    <img
                      src={
                        node.featured_media.localFile.childImageSharp.fluid.src
                      }
                    />
                  )}
                </Link>
                {/* foto stop  */}
                <Link
                  style={{
                    textDecoration: "none",
                    marginBottom: "30px",
                    display: "block",
                  }}
                  to={node.link.replace("https://blog.barejastudio.pl/", "")}
                >
                  <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
                  <span style={{ color: "#414141" }}>
                    Przeczytasz w{" "}
                    <span>{Math.ceil(node.fields.readingTime.minutes)}</span>{" "}
                    min.
                  </span>
                </Link>

                <div
                  className={"post__excerpt"}
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt.substring(0, 100).concat("..."),
                  }}
                />

                <Link
                  to={node.link.replace("https://blog.barejastudio.pl/", "")}
                >
                  <p className="post__cta">Czytaj dalej</p>
                </Link>
                {node.date}
              </div>
            ))}
          </section>
          <div className="pagination">
            <div className="previousLink">
              <NavLink
                test={first}
                url={previousUrl}
                text="<< Poprzednia strona"
              />
            </div>
            <span>
              Strona: {index}/{pageCount}
            </span>
            <div className="nextLink">
              <NavLink test={last} url={nextUrl} text="Następna strona >>" />
            </div>
          </div>
        </section>

        <section
          className={menu ? "menuBlog--open" : "menuBlog--closed"}
          onClick={() => openMenu(!menu)}
        >
          <div className="menuBlog__inner">
            <LastPostsMenu />
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default IndexPage
