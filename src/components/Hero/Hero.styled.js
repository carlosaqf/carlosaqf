/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { color } from '../colors'
import { device } from '../devices'

const HeroContainer = styled.div`
    background: ${color.SHADE_DARK};
    
    /* WAVE */
    &::after{
        content: '';
        display: block;
        width: 100vw;
        height: 4em;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: %23fff;' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill: %2329282A;'%3E%3C/path%3E%3C/svg%3E");
    }
`

const StyledHero = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column; 
    max-width: 66em;
`

const HeroText = styled.div`
    margin-top: 5em;
    margin-bottom: 5em;
    padding: 1em;
    color: ${color.SHADE_LIGHT};
    align-self: flex-start;
    
    h1 {
        text-transform: uppercase;
        font-size: 4em;
        color: ${color.SHADE_LIGHT};
        margin-bottom: 0.25em;

        span{
            border-bottom: 0.08em solid ${color.MAIN_BRAND};
        }

    }
    
    h3 {
        text-transform: uppercase;
        font-weight: 200;
        font-size: 1.25em;
        margin: 0;
        letter-spacing: 0.2em;
    }
    
    h4 {
        font-size: 1em;
        font-weight: 200;
        line-height: 1.25em;
        max-width: 75ch;
        padding-top: 1em;
        margin-bottom: 3em;
        letter-spacing: 0.1em;
    }

    @media ${device.tablet}{
        margin-top: 7em;
        margin-bottom: 10em;
    }
`

const ButtonContainer = styled.div`
    align-self: flex-start;
    
    button {
        margin-right: 0.5em;
    }

`

export {
	HeroContainer,
	ButtonContainer,
	HeroText,
	StyledHero,
}
