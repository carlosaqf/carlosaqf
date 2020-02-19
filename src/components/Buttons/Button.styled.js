import styled, { css } from 'styled-components'
import { color } from '../colors'

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${color.DARK};
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,0.5);
    outline: 0;

    &:active{
        box-shadow: 0 3px 4px 0 rgba(0,0,0,0.5) inset;
        outline: 0;
    }



    /* DEFINE BUTTON STYLES THROUGH PROPS */
    ${props => props.primary && css`
        background: ${color.DARK};
        color: #white;
    `}

    ${props => props.secondary && css`
        background: ${color.BLUE};
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