import React from 'react'
import { StyledMenu } from './Menu.styled'


const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false
    const tabIndex = isHidden ? 0 : -1

    return (
        <StyledMenu 
            open={open}
            aria-hidden={!isHidden}
            {...props}
        >
            <a href="/"
                tabIndex={tabIndex}
            >About</a>
            <a href="/"
                tabIndex={tabIndex}
            >Work</a>
            <a href="/"
                tabIndex={tabIndex}
            >Contact</a>

        </StyledMenu>
    )
}

export default Menu