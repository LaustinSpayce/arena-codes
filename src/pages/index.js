import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import Table from "react-bootstrap/Table"
import TableRow from "../components/tablerow"

const IndexPage = ({ data }) => {
  const tableRows = data.allCodesCsv.nodes.map((entry) => {
    return <TableRow data={entry} />
  })
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Free Stuff for Magic The Gathering: Arena</h1>
      <p>
        Replace this paragraph with some pop up or modal to show how to redeem
        these codes in MTGA.
      </p>
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
  }
`

export default IndexPage
