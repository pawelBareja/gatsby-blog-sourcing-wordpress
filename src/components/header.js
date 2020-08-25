// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React, { useState, useEffect } from "react"

// CSS
// import "../style/layout.scss"
// import { TRUE } from "node-sass"

// const Header = ({ siteTitle }) => {
//   const [menuVisible, setMenuVisible] = useState(true)

//   useEffect(() => {
//     window.addEventListener("scroll", scrollListener)
//   })

//   const scrollListener = e => {
//     let scrollDepth = window.pageYOffset
//     if (scrollDepth > 50) {
//       setMenuVisible(false)
//     } else {
//       setMenuVisible(true)
//     }
//   }

//   return (
//     <header className={menuVisible ? "menu__visible" : "menu__hidden"}>
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `1.45rem 1.0875rem`,
//         }}
//       >
//         <h1 style={{ margin: 0 }}>
//           <Link
//             to="/"
//             // style={{
//             //   color: `white`,
//             //   textDecoration: `none`,
//             // }}
//           >
//             {siteTitle}
//           </Link>
//         </h1>
//       </div>
//     </header>
//   )
// }

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header

import React, { Component } from "react"
import { Link } from "gatsby"

import "../style/layout.scss"

// style
import "../style/layout.scss"

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
      </nav>
    )
  }
}
