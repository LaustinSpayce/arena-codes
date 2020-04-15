import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import { FaGithub } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#343a40`,
      marginBottom: `1.45rem`,
    }}
  >
    <Container
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {" "}
      <div className="row">
        <h1 style={{ margin: 0 }} className="col-11">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h1 style={{ margin: 0 }} className="col-1">
          <a
            href="https://github.com/LaustinSpayce/arena-codes"
            style={{
              color: `white`,
              textDecoration: `none`,
              alignContent: `right`,
            }}
          >
            <FaGithub />
          </a>
        </h1>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
