import React from 'react'
import { StyledFooter, StyledFooterLinks, StyledFooterName } from './Footer.styled'
import { SocialLink } from '../Icons/Icons'
import { color } from '../colors'
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const Footer = () => {

	const { socialLinks } = useSiteMetadata()

	return (
		<StyledFooter id='connect'>

			<StyledFooterLinks>

				<SocialLink
					social='Github'
					link={socialLinks.find(s => s.name === 'Github').link}
					color={color.SHADE_LIGHT}
					hover={color.MAIN_BRAND}
				/>
				<SocialLink
					social='Twitter'
					link={socialLinks.find(s => s.name === 'Twitter').link}
					color={color.SHADE_LIGHT}
					hover={color.MAIN_BRAND}
				/>
				<SocialLink
					social='Linkedin'
					link={socialLinks.find(s => s.name === 'Linkedin').link}
					color={color.SHADE_LIGHT}
					hover={color.MAIN_BRAND}
				/>
				<SocialLink
					social='Email'
					link={socialLinks.find(s => s.name === 'Email').link}
					color={color.SHADE_LIGHT}
					hover={color.MAIN_BRAND}
				/>

			</StyledFooterLinks>

			<StyledFooterName
				href="/"
				color={color.SHADE_LIGHT}
				hover={color.MAIN_BRAND}
			>
				Carlos Fegurgur &copy; {new Date().getFullYear()}
			</StyledFooterName>

		</StyledFooter>
	)
}

export default Footer