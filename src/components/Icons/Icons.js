/* eslint-disable linebreak-style */
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'
import { Instagram } from 'styled-icons/boxicons-logos/Instagram'
import  { Github }  from 'styled-icons/boxicons-logos/Github'
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin'
import { color } from '../colors'
import styled from 'styled-components'

const TwitterSocial = styled(Twitter)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    :hover{
        color: ${color.PRIMARY};
    }
    
`

const InstagramSocial = styled(Instagram)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    :hover{
        color: ${color.PRIMARY};
    }
`

const LinkedinSocial = styled(Linkedin)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    :hover{
        color: ${color.PRIMARY};
    }
`

const GithubSocial = styled(Github)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    font-size: 1em;
    :hover{
        color: ${color.PRIMARY};
    }
`

const TwitterFooter = styled(Twitter)`
    color: white;
    height: 2em;
`

const InstagramFooter = styled(Instagram)`
    color: white;
    height: 2em;
`

const LinkedinFooter = styled(Linkedin)`
    color: white;
    height: 2em;
`

const GithubFooter = styled(Github)`
    color: white;
    height: 2em;
`


export {
	TwitterSocial,
	InstagramSocial,
	LinkedinSocial,
	GithubSocial,
	TwitterFooter,
	InstagramFooter,
	LinkedinFooter,
	GithubFooter
}