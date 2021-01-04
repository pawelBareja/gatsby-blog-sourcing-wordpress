import React, { useState, useEffect } from "react"

// style
import "../style/layout.scss"

const Header = () => {
  const [menu, showMenu] = useState(true)

  const toggleMenu = () => {
    let distanceFromTop = window.pageYOffset

    return function () {
      let newDistanceFromTop = window.pageYOffset
      if (newDistanceFromTop < 50 || distanceFromTop >= newDistanceFromTop) {
        showMenu(true)
      } else {
        showMenu(false)
      }
      distanceFromTop = newDistanceFromTop
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleMenu())
    return window.removeEventListener("scroll", toggleMenu())
  }, [])

  return <nav className={menu ? "navbar" : "navbar hide"}>menu</nav>
}

export default Header
