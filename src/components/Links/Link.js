import React from 'react'
import { StyledLink } from './Link.styled'
import PropTypes from 'prop-types'

const Link = ({ page, text }) => {
	return(
		<li>
			<StyledLink to={page}>{text}</StyledLink>
		</li>
	)
}

Link.propTypes = {
	page: PropTypes.string,
	text: PropTypes.string
}

export default Link
