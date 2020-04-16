import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "react-bootstrap/Table"
import TableRow from "../components/tablerow"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"

const IndexPage = ({ data }) => {
  const [alertShow, setAlertShow] = useState(false)

  const tableRows = data.allCodesCsv.nodes.map((entry, index) => {
    return <TableRow data={entry} key={index} />
  })

  const buttonClick = () => {
    setAlertShow(!alertShow)
  }

  return (
    <Layout>
      <SEO title="Free Magic The Gathering Arena Promo Codes" />
      <h1>Free Stuff for Magic The Gathering: Arena</h1>
      <small>Last updated: {data.currentBuildDate.currentDate}</small>
      <p>
        Wizards of the Coast are quite generous with their game, yes yes! Use
        the codes below to get some free packs, cosmetics, or XP for Magic The
        Gathering Arena.
      </p>
      <Button onClick={buttonClick} show={!alertShow}>
        How to redeem promo codes
      </Button>
      <Alert
        show={alertShow}
        variant="success"
        onClick={() => setAlertShow(false)}
        className="my-4"
        dismissable
      >
        <Alert.Heading>How to redeem promo codes</Alert.Heading>
        <p>
          <ol>
            <li key="step-1">Open the 'Store' tab in MTGA</li>
            <li key="step-2">In the top-right corner, click 'Redeem Code'</li>
            <li key="step-3">Enter one of the codes from below.</li>
          </ol>
          <Img fluid={data.file.childImageSharp.fluid} />
        </p>
      </Alert>
      <div className="m-4"></div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Expires</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    allCodesCsv {
      nodes {
        Code
        Date_Added
        Description
        Expiry
      }
    }
    currentBuildDate {
      currentDate
    }
    file(relativePath: { eq: "store.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1068) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
