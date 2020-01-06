import React from 'react'
import { StyledButton } from './Button.styled'

const Button = ({ text, to, ...props }) => {
    return(
        <a href={to}>
            <StyledButton {...props}>{text}</StyledButton>
        </a>
    )
}

export default Button
