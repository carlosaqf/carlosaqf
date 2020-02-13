import React from 'react'
import Button from '../Buttons'
import  Card from '../Cards'
import {
	ProjectsContainer,
	CardsContainer
} from './Projects.styled'


const Projects = () => (
	<ProjectsContainer>

		<h2>PROJECTS</h2>

		<CardsContainer>

			<Card
				project
				title='Project 1'
				desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
				text='View Demo'
				text2='Source'
				to='https://www.github.com/carlosaqf/notes'
			/>

			<Card
				project
				title='Project 2'
				desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
				text='Visit Demo'
				text2='Source'
				to='https://www.github.com/carlosaqf/notes'
			/>

			<Card
				project
				title='Project 3'
				desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
				text='Visit Demo'
				text2='Source'
				to='https://www.github.com/carlosaqf/notes'
			/>

		</CardsContainer>


		<Button
			text='See my Work'
			to='/work'
			primary
		/>

	</ProjectsContainer>
)


export default Projects