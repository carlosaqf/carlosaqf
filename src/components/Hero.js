import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'


// CONTAINER
const HeroContainer = styled.div`
    background: url("https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-position: center;
    background-size: cover;
    
    height: 93vh;
    width: 100vw;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    color: white;
    text-align: center;

    h1{
        text-transform: uppercase;
        font-size: 6em;
        margin-bottom: 0;
        color: #c8a415;
    }

    h2{
        text-transform: uppercase;
        letter-spacing: 0.4em;
        font-weight: 400;
        margin-bottom: 0;
        font-size: 2em;
    }

    p{
        font-size: 1.4em;
        letter-spacing: 0.08em;
    }
`;

// BUTTON DIV
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;

// BUTTONS 
const HeroButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #c8a415;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ${props => props.primary && css`
        background: #c8a415;
        color: #white;
    `}
`;


const Hero = () => (
    <HeroContainer>

        <h2>Hafa Adai</h2>
        <h1>Carlos Fegurgur</h1>
        <p>Front End Web Developer | Chicago, IL</p>
        
        <ButtonContainer>
            {/* PRIMARY CTA */}
            <a href="#bio">
                <HeroButton primary>
                    Learn More
                </HeroButton>
            </a>

            {/* SECONDARY CTA */}
            <a href="#connect">
                <HeroButton>
                    Reach Out
                </HeroButton>
            </a>

        </ButtonContainer>

    </HeroContainer>
)


export default Hero
