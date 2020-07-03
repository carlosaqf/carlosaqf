import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/Buttons'
import { device } from '../components/devices'
import Card from '../components/Cards'

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  padding-bottom: 10px;
  margin: 0 auto;
  min-height: 96.5vh;
  h2{
      font-size: 2em;
      letter-spacing: 0.8em;
      font-weight: 200;
      padding-top: 1em;
      text-align: center;
      text-transform: uppercase;
  }
`

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 90vw;
    // justify-content: center;

    @media ${device.mobileS}{
        grid-template-columns: 1fr;
    }

    @media ${device.tablet}{
      grid-template-columns: 1fr 1fr;
    }

    @media ${device.laptop}{
      grid-template-columns: repeat(3, 1fr);
    }
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
				<Card
					title='Project 6'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>
				<Card
					title='Project 7'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>
				<Card
					title='Project 8'
					desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
					text='Visit Demo'
					to='https://www.github.com/carlosaqf/notes'
				/>

			</CardsContainer>
		</WorkContainer>

	</Layout>
)

export default Work

