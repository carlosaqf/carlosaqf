/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Buttons/Button'
import  Card from '../Cards/Card'
import {
	StyledProjects,
	ProjectsHeading,
	ProjectsCardsContainer,
	ProjectsButton
} from './Projects.styled'
import carlos from '../../images/carlos2.jpeg'


const Projects = ({ data }) => (
	<StyledProjects id='projects'>

		<ProjectsHeading>PROJECTS</ProjectsHeading>

		<ProjectsCardsContainer>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<Card
					key={node.id}
					title={node.frontmatter.title}
					desc={(node.frontmatter.description) ? node.frontmatter.description : node.excerpt}
					text='More Information'
					to={node.fields.slug}
					src={node.frontmatter.image ? node.frontmatter.image : carlos}
					tags={node.frontmatter.tags}
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