/* eslint-disable linebreak-style */
import { ReactLogo, Html5 } from 'styled-icons/boxicons-logos'
import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const StackIcon = (props) => {

	let stackLogo
	switch (props.stack){
	case 'React':
		stackLogo = ReactLogo
		break
	case 'HTML':
		stackLogo = Html5
		break
	}

	const StackLogo = styled(stackLogo)`
		color: ${props => props.color || null};
		height: 1.5em;
		width: 1.5em;

		& :hover{
			color: ${props.hover};
		}
`

	return (
		<StackLogo
			color={props.color}
			hover={props.hover}
		/>
	)
}

StackIcon.propTypes = {
	color: PropTypes.string,
	stack: PropTypes.string.isRequired,
	hover: PropTypes.string,
}


export {
	StackIcon
}