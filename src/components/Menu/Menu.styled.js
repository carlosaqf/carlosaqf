import styled from 'styled-components'
import { color } from '../colors'

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${color.SECONDARY};
    transform: ${({ open }) => 
        open 
            ? 'translateX(0)' 
            : 'translateX(-100%)'
    };
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    list-style-type: none;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;

    @media (max-width: '768px'){
        width: 100%;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        /* padding: 2rem 0; */
        font-weight: 500;
        letter-spacing: 0.5rem;
        color: ${color.DARK};
        text-decoration: none;
        transition: color 0.3s linear;
        
        
        @media (max-width: '768px'){
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover{
            color: ${color.LIGHT}
        }
    }
`