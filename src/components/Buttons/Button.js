import React from 'react'
import { StyledButton } from './Button.styled'
import PropTypes from 'prop-types'

const Button = ({ text, to, ...props }) => {
	return(
		<a href={to}>
			<StyledButton {...props}>{text}</StyledButton>
		</a>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	to: PropTypes.string
}

export default Button
