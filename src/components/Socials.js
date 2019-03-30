import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from './devices'
import  {Github}  from 'styled-icons/boxicons-logos/Github'
import {Linkedin} from 'styled-icons/boxicons-logos/Linkedin'
import {Codepen} from 'styled-icons/boxicons-logos/Codepen'
import {Twitter} from 'styled-icons/boxicons-logos/Twitter'

const TwitterLogo = styled(Twitter)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
`;

const CodepenLogo = styled(Codepen)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
`;

const LinkedinLogo = styled(Linkedin)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
`;

const GithubLogo = styled(Github)`
    height: 3em;
    width: 3em;
    margin: 10px 3em;
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

    @media ${device.mobileS}{
        flex-direction: column;
    }

    @media ${device.tablet}{
        flex-direction: row;
    }
`;

const SocialIcon = styled.div`
    padding: 10px;
    height: 3em;
    width: 3em;
    background: url("https://source.unsplash.com/random/70x70");
    margin: 10px 3em;
    border-radius: 50%;
`;


const Socials = () => (

    <SocialContainer>
        <IconContainer>
            <GithubLogo />
            <LinkedinLogo />
        </IconContainer>
        <IconContainer>
            <CodepenLogo />
            <TwitterLogo />
        </IconContainer>
    </SocialContainer>

)

export default Socials