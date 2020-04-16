import React from "react"
import Layout from "../components/layout"

const PrivacyPage = ({ data }) => {
  return (
    <Layout>
      <h1>Privacy Stuff</h1>
      <p>
        This simple privacy policy lets you know what data we collect and track
        and all that good stuff.
      </p>
      <p>
        To the best of our (that is the people operating MTG Arena Codes)
        knowledge, we don't collect any data about you.
      </p>
      <h3>Third Party Ads</h3>
      <p>
        To help with the costs of hosting this website, we may run adverts on
        the site. These adverts will be provided by some third party provider.
      </p>
      <p>
        Third party vendors, including Google, use cookies to serve ads based on
        a user's prior visits to your website or other websites.
      </p>
      <p>
        Google's use of advertising cookies enables it and its partners to serve
        ads to your users based on their visit to your sites and/or other sites
        on the Internet.
      </p>
      <p>
        Users may opt out of personalized advertising by visiting{" "}
        <a href="https://www.google.com/settings/ads">Google Ads Settings</a>.
        (Alternatively, users can opt out of a third-party vendor's use of
        cookies for personalized advertising by visiting{" "}
        <a href="www.aboutads.info">www.aboutads.info</a>.)
      </p>
    </Layout>
  )
}

export default PrivacyPage
