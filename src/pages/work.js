/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/Cards'

const WorkContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
	font-size: 2em;
	letter-spacing: 0.8em;
	font-weight: 200;
	padding-top: 1em;
  }
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 66em;
	justify-content: center;
`

const Work = ({ data }) => (
	<Layout>
		<SEO title="Work" />

		<WorkContainer>

			<h2>Work</h2>

			<CardsContainer>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<Card
						key={node.id}
						title={node.frontmatter.title}
						desc={(node.frontmatter.description) ? node.frontmatter.description : node.excerpt}
						text='More Info'
						to={node.fields.slug}
						src={node.frontmatter.image}
					/>
				))}
			</CardsContainer>

		</WorkContainer>

	</Layout>
)


export default Work

export const query = graphql`
  query{
    allMarkdownRemark(
		filter: { frontmatter: { type: {eq: "project"} } },
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
			description
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