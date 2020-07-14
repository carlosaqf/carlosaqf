/* eslint-disable react/prop-types */
import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {
	BlogWrapper,
	BlogPost,
	BlogImg
} from './Posts.styled'


const Blog = ({ data }) => (
	<Layout>
		<SEO title="Blog" />
		<BlogWrapper>
			<h2>Blog</h2>
			<p>Welcome to the Blog Page. Here I will explain who I am and what
          it is I hope to accomplish with this blog. Get to know me!
			</p>
			<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				(node.frontmatter.type === 'blog') ? (
					<BlogPost key={node.id}>
						<Link
							to={node.fields.slug}
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}>
							<BlogImg src={node.frontmatter.image} />
							<h3 style={{
								textAlign: 'left',
								paddingTop: '0.5em',
								paddingLeft: '0.5em',
							}}>
								{node.frontmatter.title} - {node.frontmatter.date}
							</h3>
							<p>{node.excerpt}</p>
						</Link>
					</BlogPost>
				) : (
					null
				)
			))}
		</BlogWrapper>
	</Layout>
)


export default Blog

export const query = graphql`
  query{
    allMarkdownRemark(
		filter: { frontmatter: { type: {eq: "blog"} } },
		sort: { fields: [frontmatter___date], order: DESC }
	){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
            author
            type
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