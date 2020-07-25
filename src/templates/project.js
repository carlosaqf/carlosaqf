/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { color } from '../components/colors'
import Button from '../components/Buttons/Button'
import gif from '../images/randomQuoteGenerator.gif'


const ProjectDiv = styled.div`
	padding: 1em;
	max-width: 66em;
	margin: 0 auto;
	font-family: Arial, Helvetica, sans-serif;
`

const ProjectImg = styled.img`
  width: 100%;
  display: block;
  max-height:50vh;
`

const ProjectCaption = styled.figcaption`
	color: ${color.ACCENT_LIGHT};
	font-size: 0.8em;
	text-align: center;

	a {
		text-decoration: none;
		color: ${color.ACCENT_LIGHT};
	}

`

const ProjectInfo = styled.h4`
	font-weight: 300;

`

const ProjectBody = styled.div`
	margin-bottom: 2em;
`

const ProjectButtonContainer = styled.div`
	button {
		margin: 1em;
		margin-left: 0;
	}
	margin-bottom: 2em;
`

const ProjectTag = styled.span`
	padding: 0.5em;
	margin: 0.3em;
	background: ${color.ACCENT_DARK};
	border-radius: 0.5em;
	color: ${color.SHADE_LIGHT};
	font-family: Arial, Helvetica, sans-serif;
	font-size: 0.7em;

	:nth-child(1){
		margin-left: 0;
	}
`

const ProjectTagDiv = styled.div`
	margin-bottom: 1em;
`

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout>
			<ProjectDiv>
				<h1>{post.frontmatter.title}</h1>
				<ProjectInfo>{post.frontmatter.date}</ProjectInfo>

				{/* Displays array of tags as spans if any exist in the project markdown */}
				{(post.frontmatter.tags) ? (
					<ProjectTagDiv>
						{post.frontmatter.tags.map((tag, key) => (
							<ProjectTag key={key}>{tag}</ProjectTag>
						))}
					</ProjectTagDiv>
				):(null)}

				{(post.frontmatter.gif === 'use gif') ? (
					<figure style={{ maxWidth: '66em' }}>
						<ProjectImg src={gif}></ProjectImg>
					</figure>
				):(
					<figure style={{ maxWidth: '66em' }}>
						<ProjectImg src={post.frontmatter.image}></ProjectImg>
						<ProjectCaption>Image courtesy of <a href="https://unsplash.com">Unsplash</a></ProjectCaption>
					</figure>
				)}
				<ProjectBody dangerouslySetInnerHTML={{ __html: post.html }} />

				<ProjectButtonContainer>
					<Button
						text='View Source Code'
						to={post.frontmatter.repo}
						primary
					/>
					<Button
						text='Back to all Projects'
						to='/work'
						primary
					/>
				</ProjectButtonContainer>

			</ProjectDiv>
		</Layout>
	)
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
				image
				gif
                date(formatString: "MMMM DD YYYY")
				author
				tags
				repo
            }
        }
    }
`