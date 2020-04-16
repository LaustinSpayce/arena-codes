import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Footer = ({ data }) => {
  return (
    <footer
      style={{
        background: `#343a40`,
        marginTop: `1.45rem`,
        paddingTop: `1rem`,
        color: `white`,
      }}
    >
      <Container>
        <Row>
          <Col md={8}>
            <h5 style={{ textTransform: "uppercase" }}>Boring Notices</h5>
            <p>
              <strong>MTG Arena Codes</strong> is unofficial Fan Content
              permitted under the Fan Content Policy. Not approved/endorsed by
              Wizards. Portions of the materials used are property of Wizards of
              the Coast. ©Wizards of the Coast LLC.
            </p>
            <p>
              We also make use of the excellent resources provided by{" "}
              <a href="https://scryfall.com/" style={{ color: `white` }}>
                Scryfall
              </a>
              . We are also not affiliated with, or endorsed by Scryfall in any
              way.
            </p>
          </Col>
          <Col md={4}>
            <h5 style={{ textTransform: "uppercase" }}>Some stuff to know</h5>
            <ul style={{}}>
              <li>
                <Link
                  to="/privacy"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
