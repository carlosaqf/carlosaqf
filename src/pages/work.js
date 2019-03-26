import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Work Us</h1>
    <p>Welcome to the Work Page. Here I will explain who I am and what
    it is I hope to accomplish with this blog. Get to know me!
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Work

