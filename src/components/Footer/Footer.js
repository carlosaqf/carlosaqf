import React from 'react'
import { StyledFooter, StyledFooterLinks } from './Footer.styled'
import {
	TwitterFooter,
	InstagramFooter,
	LinkedinFooter,
	GithubFooter } from '../Icons/Icons'

const Footer = () => (
	<StyledFooter>
		<StyledFooterLinks>
			<a href="/">Carlos Fegurgur &copy; {new Date().getFullYear()}</a>
			<a href="https://www.github.com/carlosaqf" target="_blank" rel="noopener noreferrer"><GithubFooter /></a>
			<a href="https://www.linkedin.com/in/cfegurgur" target="_blank" rel="noopener noreferrer"><LinkedinFooter /></a>
			<a href="https://www.instagram.com/cfegurgur" target="_blank" rel="noopener noreferrer"><InstagramFooter /></a>
			<a href="https://www.twitter.com/cfegurgur_" target="_blank" rel="noopener noreferrer"><TwitterFooter /></a>
		</StyledFooterLinks>
	</StyledFooter>
)

export default Footer