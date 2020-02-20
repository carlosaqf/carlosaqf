import React from 'react'
import { StyledMenu } from './Menu.styled'
import Link from '../Links'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import PropTypes from 'prop-types'

const Menu = ({ open, ...props }) => {

	const isHidden = open ? true : false
	const { menuLinks } = useSiteMetadata()

	return (
		<StyledMenu
			open={open}
			aria-hidden={!isHidden}
			{...props}
		>
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
		</StyledMenu>
	)
}

Menu.propTypes = {
	open: PropTypes.boolean
}

export default Menu