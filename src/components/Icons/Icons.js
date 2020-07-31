/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import  { Github, Linkedin, Twitter }  from 'styled-icons/boxicons-logos'
import { MailSend, LinkExternal } from 'styled-icons/boxicons-regular'
import styled, { css } from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const SocialLink = (props) => {

	let logo
	switch (props.social){
	case 'Github':
		logo = Github
		break
	case 'Linkedin':
		logo = Linkedin
		break
	case 'Twitter':
		logo = Twitter
		break
	case 'Email':
		logo = MailSend
		break
	case 'External':
		logo = LinkExternal
		break
	}

	const SocialLogo = styled(logo)`
		color: ${props => props.color || null};
		height: 3em;
		width: 2em;

		& :hover{
			color: ${props.hover};
		}

		${props => props.footer && css`
			width: 2em;
			height: 2em;
    	`}
	`

	return (
		<a
			href={props.link}
			target='_blank'
			rel='noopener noreferrer'
		>
			<SocialLogo
				color={props.color}
				hover={props.hover}
				footer={props.footer}
			/>
		</a>
	)
}

SocialLink.propTypes = {
	link: PropTypes.string,
	color: PropTypes.string,
	social: PropTypes.string.isRequired,
	hover: PropTypes.string,
}


export {
	SocialLink
}