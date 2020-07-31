import styled, { css } from 'styled-components'
import { color } from '../colors'

const StyledButton = styled.button`
    background: ${color.MAIN_BRAND};
    border-radius: 0.5em;
    border: none;
    padding: 0.5em 1.25em;
    box-shadow: ${color.SHADOWTWO};
    font-family: 'Roboto', sans-serif;
    a{
        text-decoration: none;
        color: ${color.SHADE_DARK};  
    }
    &:hover{
        color: ${color.SHADE_LIGHT};
        transition: all 200ms linear 0s;
    }

    &:active{
        box-shadow: ${color.SHADOWTWO} inset;
    }

    :focus:not(:focus-visible) { 
        outline: 0; 
    }



    /* DEFINE BUTTON STYLES THROUGH PROPS */
    ${props => props.secondary && css`
        background: transparent;
        box-shadow: none;
        color: ${color.SHADE_LIGHT};
        & :hover{
            color: ${color.MAIN_BRAND};
        }
    `}
    
    ${props => props.inverse && css`
        background: transparent;
        box-shadow: none;
        border: 1px solid ${color.SHADE_DARK};
        color: ${color.SHADE_DARK};

        & :hover{
            color: ${color.MAIN_BRAND};
            border: 1px solid ${color.MAIN_BRAND};
        }
    `}

`

export {
	StyledButton
}