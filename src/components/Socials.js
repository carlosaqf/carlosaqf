import React from 'react'
import styled from 'styled-components'
import { device } from './devices'
import { TwitterSocial, InstagramSocial, LinkedinSocial, GithubSocial } from './Icons/Icons'

const SocialContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 1em;
    padding-bottom: 4em;
`

const IconContainer = styled.div`
    display: flex;

    a{
        color: black;
    }

    @media ${device.mobileS}{
        flex-direction: column;
    }

    @media ${device.tablet}{
        flex-direction: row;
    }
`

const Socials = () => (

	<SocialContainer>
		<IconContainer>
			<a href="https://www.github.com/carlosaqf" target="_blank" rel="noopener noreferrer"><GithubSocial /></a>
			<a href="https://www.linkedin.com/in/cfegurgur" target="_blank" rel="noopener noreferrer"><LinkedinSocial /></a>
		</IconContainer>
		<IconContainer>
			<a href="https://www.instagram.com/cfegurgur" target="_blank" rel="noopener noreferrer"><InstagramSocial /></a>
			<a href="https://www.twitter.com/cfegurgur_" target="_blank" rel="noopener noreferrer"><TwitterSocial /></a>
		</IconContainer>
	</SocialContainer>

)

export default Socials