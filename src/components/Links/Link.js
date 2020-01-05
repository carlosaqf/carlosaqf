import React from 'react'
import { StyledLink } from './Link.styled'

const Link = ({ page, text }) => {
    return(
        <li>
            <StyledLink to={page}>{text}</StyledLink>
        </li>
    )
}

export default Link
