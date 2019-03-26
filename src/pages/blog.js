import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog Us</h1>
    <p>Welcome to the Blog Page. Here I will explain who I am and what
    it is I hope to accomplish with this blog. Get to know me!
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
