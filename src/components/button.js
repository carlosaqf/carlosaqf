import styled, { css } from 'styled-components'

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #c8a415;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ${props => props.primary && css`
        background: #c8a415;
        color: #white;
    `}
`;
