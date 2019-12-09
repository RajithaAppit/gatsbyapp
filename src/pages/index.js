import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ProfilePlaceHolder from "../components/image"
import SEO from "../components/seo"
import "./index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div className="profileContainer">
      <div className="topWrapper">
        <section className="topSection"></section>
      </div>
      <div className="bottomWrapper">
        <section className="bottomSection"></section>
      </div>
      <div className="logoContainer">
        <div className="image"></div>
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
