import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardDescription from "../components/carddescription"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This site is literally two pages.</p>
    <p>You're more lost than <CardDescription description="[[Fblthp, the Lost]]" placement={'right'}/>.</p>
    <p>Go back <Link to="/">the main page already.</Link></p>
  </Layout>
)

export default NotFoundPage
