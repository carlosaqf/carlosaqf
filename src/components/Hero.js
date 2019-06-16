import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device } from './devices'
import { Button } from './button'
import { color } from './colors'

// CONTAINER
const HeroContainer = styled.div`
    background: url("https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-position: center;
    background-size: cover;
    
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    color: white;
    text-align: center;
    
    @media ${device.mobileS}{
        h1{
            text-transform: uppercase;
            font-size: 3em;
            margin-bottom: 0;
            color: #c8a415;
        }
        
        h2{
            text-transform: uppercase;
            letter-spacing: 0.4em;
            font-weight: 400;
            margin-bottom: 0;
            font-size: 1em;
        }
        
        p{
            font-size: 0.9em;
            letter-spacing: 0.08em;
        }
    }
    @media ${device.tablet}{

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
        
    }
    @media ${device.laptop}{

        h1{
            text-transform: uppercase;
            font-size: 6em;
            margin-bottom: 0.1em;
            color: ${color.DARK};
        }
        
        h2{
            text-transform: uppercase;
            letter-spacing: 0.4em;
            font-weight: 400;
            margin-bottom: 0;
            font-size: 2.7em;
        }
        
        p{
            font-size: 2em;
            letter-spacing: 0.08em;
        }
        
    }
`;

// BUTTON DIV
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    @media ${device.mobileS}{
        flex-direction: column;
    
        a{
            margin-top: 1em;
        }
    }

    @media ${device.tablet}{
        flex-direction: row;
    } 
`;

// BUTTONS 
const HeroButton = styled(Button)``;

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
