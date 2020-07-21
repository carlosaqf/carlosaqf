import React from 'react'
import { StyledMenu, MenuLinks } from './Menu.styled'
import Link from '../Links'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import PropTypes from 'prop-types'
import { StyledFooterLinks } from '../Footer/Footer.styled'
import { SocialLink } from '../Icons/Icons'
import { color } from '../colors'

const Menu = ({ open, ...props }) => {

	const { menuLinks } = useSiteMetadata()
	const { socialLinks } = useSiteMetadata()

	return (
		<StyledMenu
			open={open}
			{...props}
		>
			<MenuLinks>
				<Link
					page={menuLinks[1].link}
					text={menuLinks[1].name}
				/>
				<Link
					page={menuLinks[2].link}
					text={menuLinks[2].name}
				/>
				<Link
					page={menuLinks[3].link}
					text={menuLinks[3].name}
				/>
				<Link
					page={menuLinks[4].link}
					text={menuLinks[4].name}
				/>
			</MenuLinks>

			<StyledFooterLinks>
				<SocialLink
					social='Github'
					link={socialLinks.find(s => s.name === 'Github').link}
					color={color.MAIN_BRAND}
					hover={color.SHADE_DARK}
					footer
				/>
				<SocialLink
					social='Twitter'
					link={socialLinks.find(s => s.name === 'Twitter').link}
					color={color.MAIN_BRAND}
					hover={color.SHADE_DARK}
					footer
				/>
				<SocialLink
					social='Linkedin'
					link={socialLinks.find(s => s.name === 'Linkedin').link}
					color={color.MAIN_BRAND}
					hover={color.SHADE_DARK}
					footer
				/>
				<SocialLink
					social='Email'
					link={socialLinks.find(s => s.name === 'Email').link}
					color={color.MAIN_BRAND}
					hover={color.SHADE_DARK}
					footer
				/>
			</StyledFooterLinks>

		</StyledMenu>
	)
}

Menu.propTypes = {
	open: PropTypes.boolean
}

export default Menu