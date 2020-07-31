import React from 'react'
import { StyledButton } from './Button.styled'
import PropTypes from 'prop-types'

const Button = ({ text, to, ...props }) => {
	return(
		<a href={to} download={props.download}>
			<StyledButton {...props}>
				{text}
			</StyledButton>
		</a>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	to: PropTypes.string,
	download: PropTypes.string
}

export default Button
