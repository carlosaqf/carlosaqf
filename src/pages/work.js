/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/Cards/Card'
import { color } from '../components/colors'
import Button from '../components/Buttons/Button'

const WorkContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
  max-width: 66em;
`

const WorkHeading = styled.h2`
	font-size: 2em;
	font-weight: 200;
	letter-spacing: 0.8em;
	text-align: left;
	text-transform: uppercase;
	color: ${color.SHADE_DARK};
	position: relative;
	padding-bottom: 0.5em;
	width: 100%;
	margin-top: 1.5em;
	margin-bottom: 2em;
	margin-left: 0.5em;

	&::after{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		background: ${color.MAIN_BRAND};
		height: 0.08em;
		width: 3em;
	}
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 66em;
	justify-content: center;
`

const WorkConnectSection = styled.div`
	margin-top: 4em;
	display: flex;
	flex-direction: column;
	align-items: center;
	h3{

	}
`

const Work = ({ data }) => (
	<Layout>
		<SEO title="Work" />

		<WorkContainer>

			<WorkHeading>Work</WorkHeading>

			<CardsContainer>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<Card
						key={node.id}
						title={node.frontmatter.title}
						desc={(node.frontmatter.description) ? node.frontmatter.description : node.excerpt}
						text='More Information'
						to={node.fields.slug}
						src={node.frontmatter.image}
						tags={node.frontmatter.tags}
						repo={node.frontmatter.repo}
					/>
				))}
			</CardsContainer>

			<WorkConnectSection>
				<h3>Interested in working with me?</h3>
				<Button
					to='/#connect'
					text='Let&apos;s Connect'
					primary
				/>
			</WorkConnectSection>

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