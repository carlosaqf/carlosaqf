import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import Bio from "../components/Bio"
import Projects from "../components/Projects"
import Connect from "../components/Connect"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components";


const IndexPage = () => (
  <Layout style={{
    overflow: `hidden`
  }}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Bio />
    <Projects />
    <Connect />
  </Layout>
)

export default IndexPage
