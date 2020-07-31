import React from 'react'
import { StyledLink } from './Link.styled'
import PropTypes from 'prop-types'

const Link = ({ page, text, activeStyle, onClick }) => {

	return(
		<li onClick={onClick}>
			<StyledLink to={page} activeStyle={{ color: activeStyle }} >{text}</StyledLink>
		</li>
	)
}

Link.propTypes = {
	page: PropTypes.string,
	text: PropTypes.string,
	activeStyle: PropTypes.string
}

export default Link
