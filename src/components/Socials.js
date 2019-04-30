import React from 'react'
import styled from 'styled-components'
import { color } from '../components/colors'
import { device } from './devices'
import  {Github}  from 'styled-icons/boxicons-logos/Github'
import {Linkedin} from 'styled-icons/boxicons-logos/Linkedin'
import {Codepen} from 'styled-icons/boxicons-logos/Codepen'
import {Twitter} from 'styled-icons/boxicons-logos/Twitter'

const TwitterLogo = styled(Twitter)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    :hover{
        color: ${color.PRIMARY};
    }
    
`;

const CodepenLogo = styled(Codepen)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    :hover{
        color: ${color.PRIMARY};
    }
`;

const LinkedinLogo = styled(Linkedin)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    :hover{
        color: ${color.PRIMARY};
    }
`;

const GithubLogo = styled(Github)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
    font-size: 1em;
    :hover{
        color: ${color.PRIMARY};
    }
`;


const SocialContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 1em;
    padding-bottom: 4em;
`;

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
`;

const Socials = () => (

    <SocialContainer>
        <IconContainer>
            <a href="https://www.github.com/carlosaqf" target="_blank"><GithubLogo /></a>
            <a href="https://www.linkedin.com/in/cfegurgur" target="_blank"><LinkedinLogo /></a>
        </IconContainer>
        <IconContainer>
            <a href="https://www.codepen.com" target="_blank"><CodepenLogo /></a>
            <a href="https://www.twitter.com" target="_blank"><TwitterLogo /></a>
        </IconContainer>
    </SocialContainer>

)

export default Socials