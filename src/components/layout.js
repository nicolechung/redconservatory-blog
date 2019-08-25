import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <><h1
          style={{
            ...scale(1.5),
            fontFamily: `Amatic SC, sans-serif`,
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
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
        </h1>
        <div>
        <Link style={{ color: `#e02222`, marginRight: `20px`}} to="about">About</Link> | <Link style={{ color: `#e02222`, marginLeft: `20px` , marginRight: `20px` }} to="speaking">Speaking</Link>
        </div>
        </>
      )
    } else {
      header = (
        <h1
          style={{
            fontFamily: `Amatic SC, sans-serif`,
            marginTop: 0,
          }}
        >
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
        </h1>
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
        <footer>
          © {new Date().getFullYear()}  <Link style={{ color: `#e02222`, marginLeft: `20px` , marginRight: `20px`}} to="about">About</Link> | <Link style={{ color: `#e02222`, marginLeft: `20px` , marginRight: `20px` }} to="speaking">Speaking</Link>
        </footer>
      </div>
    )
  }
}

export default Layout
