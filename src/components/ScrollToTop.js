import React, { Component } from "react"
import { FiChevronUp } from "react-icons/fi"

// style
import "../style/scrollToTop.scss"

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_visible: false,
    }
  }

  componentDidMount() {
    var scrollComponent = this
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility()
    })
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      })
    } else {
      this.setState({
        is_visible: false,
      })
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    const { is_visible } = this.state

    return (
      <>
        <div
          className="scroll-to-top"
          style={{ display: is_visible ? "block" : "none" }}
        >
          <div onClick={() => this.scrollToTop()}>
            <div className="scroll__container">
              <div className="arrow">
                <span>Do góry</span>
                <FiChevronUp />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
