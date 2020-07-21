import styled, { css } from 'styled-components'
import { color } from '../colors'

const StyledButton = styled.button`
    background: transparent;
    border-radius: 1em;
    border: 0.1em solid ${color.MAIN_BRAND};
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    box-shadow: ${color.SHADOWTWO};
    

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
    `}

`

export {
	StyledButton
}



// const WorkButton = styled(Button)`
//     background: transparent;
//     border-radius: 3px;
//     border: 2px solid #c8a415;
//     color: white;
//     margin: 1em 1em;
//     padding: 0.25em 1em;
//     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

//     ${props => props.primary && css`
//         background: #c8a415;
//         color: #white;
//     `}
// `;

// const CardButton = styled(Button)`
//     margin: 0 auto 1em auto;
//     margin-left: ${props => props.left || 0}em;
// `;