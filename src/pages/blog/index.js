import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  padding: 0 1em 0.8em 1em;
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

const BlogImg = styled.img`
  width: 60vw;
  height: 40vh;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
`;


const Blog = ({ data }) => {
  return (
  <Layout>
    <SEO title="Blog" />
      <BlogWrapper>
        <h2>Blog</h2>
        <p>Welcome to the Blog Page. Here I will explain who I am and what
          it is I hope to accomplish with this blog. Get to know me!
        </p>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{
            margin: `1em 2em`,
            textAlign: `center`,
            background: `#c7c7c7`,
            padding: `1em`,
            borderRadius: `0.5em`,
            width: `60vw`
          }}>
            <Link
              to={node.fields.slug}
              style={{
                textDecoration: `none`,
                color: `inherit`,
              }} >
              <BlogImg src={node.frontmatter.image}></BlogImg>
              <h3 style={{
                textAlign: `left`,
                paddingTop: `0.5em`,
              }}>{node.frontmatter.title} - {node.frontmatter.date}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </BlogWrapper>
  </Layout>
  )
}

export default Blog

export const query = graphql`
  query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
            author
          }
          fields {
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`