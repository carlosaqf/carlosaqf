/* eslint-disable linebreak-style */
import React from 'react'
import Button from '../Buttons'
import { HeroContainer, ButtonContainer } from './Hero.styled'

const Hero = () => {

	return(
		<HeroContainer>

			<h2>Hafa Adai, I'm</h2>
			<h1>Carlos Fegurgur</h1>
			<p>Front End Web Developer | Chicago, IL</p>


			<ButtonContainer>
				<Button
					text='Learn More'
					to='#bio'
					primary
				/>

				<Button
					text='Reach Out'
					to='#connect'
				/>

			</ButtonContainer>

		</HeroContainer>
	)
}


export default Hero
