/* eslint-disable linebreak-style */
import React from 'react'
import Button from '../Buttons/Button'
import { HeroContainer, HeroText, ButtonContainer, StyledHero } from './Hero.styled'

const Hero = () => {

	return(
		<HeroContainer>
			<StyledHero>
				<HeroText>
					<h3>Take your ideas</h3>
					<h1>From Concept to <span>Code</span>.</h1>
					<h4>Whether it's redesigning, rebranding or creating something new. 
						I can help transform your ideas into code with clean, SEO-driven, UX friendly websites.
					</h4>
					<ButtonContainer>
						<Button
							text='View Work'
							to='#projects'
							primary
						/>
						<Button
							text='Learn More'
							to='#about'
							secondary
						/>

					</ButtonContainer>
				</HeroText>
			</StyledHero>

		</HeroContainer>
	)
}


export default Hero
