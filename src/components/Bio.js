import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device } from './devices'
import { Button as BioButton } from './button'

const BioWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 88.6vw;
    padding: 1.3em 0 0 0;
    img{
        max-height: 400px;
        max-width: 400px;
        padding-right: 1.5em;
    }
    @media ${device.mobileS}{
        flex-direction: column;
        align-items: center;
        img{
            // padding-right: 0;
        }
    }
    @media ${device.tablet}{
        flex-direction: row;
    }

    @media ${device.laptop}{
        flex-direction: row;
    }

`;

const BioInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    
    a{
        align-self: flex-end;
    }

    h3{
        // EDIT BIO HEADLINE
    }

    p{
        max-width: 90vw;
    }

    @media ${device.mobileS}{
        h3{
            text-align: center;
        }
        a{
            align-self: center;
        }
    }

    @media ${device.mobileL}{
        // align-self: start;
    }

    @media ${device.tablet}{
        align-self: start;
        h3{
            text-align: left;
        }
        a{
            align-self: flex-end;
        }
    }

    @media ${device.laptop}{
        align-self: start;
        padding-top: 0;
        h3{
            text-align: left;
        }
        a{
            align-self: flex-end;
        }
    }
`;



const Bio = () => (
    <BioWrapper id="bio">
        <h2>ABOUT ME</h2>
        <AboutWrapper>
            <img src="https://lh3.googleusercontent.com/sUdA70dubPlc8CoLYEgvl6Nch5g2XPcGBfiUcVJUGXIiP_ZcY5Esj6w3RzyVg3l04reGyjSTxib4mOTEov9tmI6V3g8fvceyVVzcWnUbrk-j97MNIOYxmuUdS-QBpA3JBpQdRABlYTBJrFEj7skkJePcAO1I1qNvi69nRH5JuLlrr8FI2PZmvinDbs7NJ0Aj7IPyjD8sHgPadAoxtFVq7-Dtr72R3XK6EOea7L9KW-DVnjgWBInueaAK1t9m62T_OEBmKQTvw-xRZiyTIxG66JobYvWSWYn5sAfnvftI43U4cxBeCb7DzaicTPWVo2LmESK3OfZHMRAaPivOgEGhMYCsmIzfjKkd7vZaRnBDUJdjJIqUHA5FrQxiFOR2S4egwuwH0ffntR-PguX4SSYQm0SENBMDSTtX4ak5h30nPTlSGLUwX6F-GeBUD_Qd5ez_5wHpBGnHwFsqwkOSfx7b9fqs1Inr_pX-CGTvGS5-oULs2B9no1C5Hyoz3Yel6oOrU-vsoVJRctezjPXHmPgMrhEKjFVplCtQFqWeaLLk1j_4xT_E92EgfSjDdh8YXlVx9SjLq3ZpIp5zrUcNNpfBl_iRYV2L7lhz7h2I=s1332-w1000-h1332-no" alt="Professional Carlos"/>
            <BioInfo>
                <h3>From the Pacific Ocean to the Great Lakes</h3>
                <p>Hafa Adai! My name is Carlos Fegurgur. 
                    I am a 24 year old Front End Web Developer from the island of Guam.
                    A recent transplant to the city of Chicago looking to get his start in the tech industry.
                    My passion for tech lies in problem solving and how we can use ideas and technology to help others. 
                </p>
                <Link to="/about">
                    <BioButton primary>
                        Read More
                    </BioButton>
                </Link>
            </BioInfo>
        </AboutWrapper>
    </BioWrapper>
)

export default Bio

