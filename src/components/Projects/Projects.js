/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Buttons'
import  Card from '../Cards'
import {
	ProjectsContainer,
	CardsContainer
} from './Projects.styled'


const Projects = ({ data }) => (
	<ProjectsContainer>

		<h2>PROJECTS</h2>

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

		<Button
			text='See my Work'
			to='/work'
			primary
		/>

	</ProjectsContainer>
)


export default Projects