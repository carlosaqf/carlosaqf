import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Socials from './Socials'
import { device } from './devices'
import { Button } from '../components/button'
import { color } from './colors'

const ConnectContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;

    h2{
        font-size: 2em;
        letter-spacing: 0.8em;
        font-weight: 200;
        padding-top: 1em;
    }

    @media ${device.mobileS}{
        h2{
            font-size: 1.5em;
            letter-spacing: 0.6em;
            text-align: center;
        }
    }

    p a{
        text-decoration: none;
        color: ${color.PRIMARY};
    }

`;

const Connect = () => (
    <ConnectContainer id="connect">
        <h2>CONNECT</h2>
        <Socials />

        <p>Email me at: <a href="mailto:carlosfegurgur@gmail.com" target="_top">carlosfegurgur@gmail.com</a></p>

    </ConnectContainer>
      
    
)

export default Connect


