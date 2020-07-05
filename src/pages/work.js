import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/Cards'

const WorkContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;

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

const Work = () => (

	<Layout>
		<SEO title="Work" />

		<WorkContainer>

			<h2>Work</h2>

			<CardsContainer>

				<Card
					title='Project 1'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>
				<Card
					title='Project 2'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>
				<Card
					title='Project 3'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>
				<Card
					title='Project 4'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>
				<Card
					title='Project 5'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>

			</CardsContainer>

		</WorkContainer>

	</Layout>
)

export default Work

