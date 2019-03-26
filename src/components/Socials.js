import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const SocialContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 1em;
    padding-bottom: 4em;
`;

const IconContainer = styled.div`
    display: flex;
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
            <SocialIcon></SocialIcon>
            <SocialIcon></SocialIcon>
        </IconContainer>
        <IconContainer>
            <SocialIcon></SocialIcon>
            <SocialIcon></SocialIcon>
        </IconContainer>
    </SocialContainer>

)

export default Socials