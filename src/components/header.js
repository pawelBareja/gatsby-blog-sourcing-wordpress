import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import "../style/layout.scss"

// style
import "../style/layout.scss"

const Header = () => {
  const [menu, showMenu] = useState(true)

  useEffect(e => {
    let distanceFromTop = window.pageYOffset

    window.addEventListener("scroll", () => {
      let newDistanceFromTop = window.pageYOffset
      let difference = distanceFromTop - newDistanceFromTop

      if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
        showMenu(true)
      } else {
        showMenu(false)
      }

      difference = distanceFromTop - newDistanceFromTop
      distanceFromTop = newDistanceFromTop
    })
  })

  return <nav className={menu ? "navbar" : "navbar hide"}>menu</nav>
}

export default Header
