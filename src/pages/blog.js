import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  padding-bottom: 10px;
  margin: 0 auto;
  h2{
      font-size: 2em;
      letter-spacing: 0.8em;
      font-weight: 200;
      padding-top: 1em;
      text-align: center;
      text-transform: uppercase;
  }
`;


const Blog = () => (
  <Layout>
    <SEO title="Blog" />
      <BlogWrapper>
        <h2>Blog</h2>
        <p>Welcome to the Blog Page. Here I will explain who I am and what
          it is I hope to accomplish with this blog. Get to know me!
        </p>
      </BlogWrapper>
  </Layout>
)

export default Blog
