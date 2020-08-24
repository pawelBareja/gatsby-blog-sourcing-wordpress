import React, { Component } from "react"

class ProgressBar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.scrolled)
  }

  scrolled = e => {
    const windowWidth = window.innerWidth

    const windowTotalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = window.scrollY
    const progress = scrolled / windowTotalHeight

    this.setState({
      width: progress * windowWidth,
    })
  }

  state = {
    width: "0",
  }

  render() {
    const style = {
      barContainer: {
        zIndex: "100",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "5px",
        backgroundColor: "#4e96f8",
        backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
        width: this.state.width,
      },
    }

    return (
      <>
        <div style={style.barContainer}></div>
      </>
    )
  }
}

export default ProgressBar
