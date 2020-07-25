import styled, { css } from 'styled-components'
import { color } from '../colors'

const StyledButton = styled.button`
    background: transparent;
    border-radius: 1em;
    border: 0.1em solid ${color.MAIN_BRAND};
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: ${color.SHADOWTWO};
    
    &:hover{
        color: ${color.MAIN_BRAND};
    }

    &:active{
        box-shadow: ${color.SHADOWTWO} inset;
    }

    :focus:not(:focus-visible) { 
        outline: 0; 
    }



    /* DEFINE BUTTON STYLES THROUGH PROPS */
    ${props => props.primary && css`
        background: ${color.MAIN_BRAND};
        color: ${color.SHADE_DARK};
        margin: 0;
        & :hover{
            color: ${color.SHADE_LIGHT};
        }
    `}

`

export {
	StyledButton
}