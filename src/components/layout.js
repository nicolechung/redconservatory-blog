import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <div
            style={{
              marginBottom: rhythm(1),
            }}
          >
            <Link style={{ marginRight: `20px` }} to="/about">
              about
            </Link>
            <Link
              style={{ marginLeft: `20px`, marginRight: `20px` }}
              to="/speaking"
            >
              speaking
            </Link>
          </div>
        </>
      )
    } else {
      header = (
        <h2>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    )
  }
}

export default Layout
