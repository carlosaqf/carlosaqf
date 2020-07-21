/* eslint-disable linebreak-style */
import React from 'react'
import Button from '../Buttons'
import { HeroContainer, HeroText, ButtonContainer, StyledHero } from './Hero.styled'

const Hero = () => {

	return(
		<HeroContainer>
			<StyledHero>
				<HeroText>
					<h3>Hafa Adai, I&apos;m</h3>
					<h1>Carlos Fegurgur</h1>
					<p>I am a Front End Web Developer originally from the island of Guam, now living in Chicago.
				I am passionate about solving problems and constantly looking for new challenges or ways to
				learn and improve! I&apos;d love to learn about how I can solve your problems, especially if the
				solution involves a web application of some kind. I&apos;m only an email away!
					</p>
					<ButtonContainer>
						<Button
							text='Learn More'
							to='/about'
							primary
						/>
						<Button
							text='View Work'
							to='#projects'
						/>

					</ButtonContainer>
				</HeroText>
			</StyledHero>

		</HeroContainer>
	)
}


export default Hero
