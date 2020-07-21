/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Buttons'
import  Card from '../Cards'
import {
	StyledProjects,
	ProjectsHeading,
	ProjectsCardsContainer,
	ProjectsButton
} from './Projects.styled'


const Projects = ({ data }) => (
	<StyledProjects id='projects'>

		<ProjectsHeading>PROJECTS</ProjectsHeading>

		<ProjectsCardsContainer>
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
		</ProjectsCardsContainer>

		<ProjectsButton>
			<Button
				text='View Work'
				to='/work'
				primary
			/>
		</ProjectsButton>

	</StyledProjects>
)


export default Projects