import React from "react"
import PropTypes from "prop-types"
import "semantic-ui-css/semantic.min.css"
import "./layout.css"

const Layout = ({ children, backgroundColor, fontFamily, style }) => {
  return (
    <div
      style={{
        backgroundColor,
        fontFamily,
        height: "100%",
        overflow: "auto",
        ...style
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0 1.0875rem 1.45rem",
        }}
        className="main-body-segment"
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
