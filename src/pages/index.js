/* eslint-disable react/prop-types */
import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero/Hero'
import Bio from '../components/Bio/Bio'
import Projects from '../components/Projects/Projects'
import Connect from '../components/Connect/Connect'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
	<Layout style={{
		overflow: 'hidden',
	}}>
		<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
		<Hero />
		<Projects data={data} />
		<Bio />
		<Connect />
	</Layout>
)

export default IndexPage

export const query = graphql`
query{
	allMarkdownRemark(
		filter: { frontmatter: { type: {eq: "project"} } },
		sort: { fields: [frontmatter___date], order: DESC }
	){
		edges {
			node {
				id
				frontmatter {
					title
					date(formatString: "DD MMMM, YYYY")
					image
					author
					type
					description
					tags
					repo
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