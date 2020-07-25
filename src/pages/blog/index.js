/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Card from '../../components/Cards/Card'
import { color } from '../../components/colors'

const BlogContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
  max-width: 66em;
`

const BlogHeading = styled.h2`
	font-size: 2em;
	font-weight: 200;
	letter-spacing: 0.8em;
	text-transform: uppercase;
	color: ${color.SHADE_DARK};
	position: relative;
	padding-bottom: 0.5em;
	width: 100%;
	margin-top: 1.5em;
	margin-left: 0.5em;

	&:after{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		background: ${color.MAIN_BRAND};
		height: 0.08em;
		width: 3em;	
	}
`

const BlogBriefing = styled.p`
	margin-left: 0.5em;
	margin-bottom: 2em;
	max-width: 75ch;
	align-self: flex-start;

	h4 {
		margin-top: 1em;
	}
`

const BlogCardsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	max-width: 66em;
	justify-content: center;
`

const Blog = ({ data }) => (
	<Layout>
		<SEO title="Blog" />

		<BlogContainer>

			<BlogHeading>Blog</BlogHeading>

			<BlogBriefing>
				Welcome to the Blog Page. Here I will explain who I am and what it is I hope to accomplish with this blog. Get to know me through my writings on various topics and ideas!
				<h4>
					{data.allMarkdownRemark.totalCount} Posts
				</h4>
			</BlogBriefing>

			<BlogCardsContainer>

				{data.allMarkdownRemark.edges.map(({ node }) => (
					(node.frontmatter.type === 'blog') ? (
						<Card
							key={node.id}
							title={node.frontmatter.title}
							desc={(node.frontmatter.description) ? node.frontmatter.description : node.excerpt}
							text='Read Article'
							to={node.fields.slug}
							src={node.frontmatter.image}
						/>
					) : (null)
				))}

			</BlogCardsContainer>

		</BlogContainer>

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