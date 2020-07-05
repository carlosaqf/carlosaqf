/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { device } from '../devices'
import { color } from '../colors'
import carlos from '../../images/carlos2.jpeg'
import { wordFadeIn } from '../animations'

// CONTAINER
const HeroContainer = styled.div`
    background:
        linear-gradient(
            rgba(0,0,0,0.5),
            rgba(0,0,0,0.5)
        ),
        url(${carlos});
    background-position: center;
    background-size: cover;
    
    /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%); */
    /* THIS IS A COMMENT! */
    
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    padding-left: 2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    color: white;
    text-align: center;

   
   h1,h2 {
       margin-bottom: 0;
   }
    
    @media ${device.mobileS}{
        
        padding-left: 0.5rem;
        
        h1{
            text-transform: uppercase;
            font-size: 2rem;
            color: ${color.MAIN_BRAND};
            text-align: left;
        }
        
        h2{
            text-transform: uppercase;
            letter-spacing: 0.4em;
            font-weight: 400;
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
            font-size: 3rem;
            color: ${color.MAIN_BRAND};
        }
        
        h2{
            text-transform: uppercase;
            letter-spacing: 0.4rem;
            font-weight: 400;
            font-size: 1.5rem;
        }
        
        p{
            font-size: 1.4em;
            letter-spacing: 0.08em;
            font-weight: 300;
        }
        
    }
    @media ${device.laptop}{

        h1{
            text-transform: uppercase;
            font-size: 5em;
            margin-bottom: 0.1em;
            color: ${color.MAIN_BRAND};
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
`

// BUTTON DIV
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    animation: ${wordFadeIn} 1.5s ease-in-out;

    @media ${device.mobileS}{
        flex-direction: column;
    
        a{
            margin-top: 1em;
        }
    }

    @media ${device.tablet}{
        flex-direction: row;
    } 
`

export {
	HeroContainer,
	ButtonContainer,
}
