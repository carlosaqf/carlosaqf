import React, { useState } from 'react'
import { 
    NavbarContainer,
    NavbarLogo,
    MenuName,
    NavbarLinks,
    MenuLink,
    ConnectLink 
} from './Navbar.styled'
import { Burger, Menu } from '../../components'

const Navbar = ({ menuLinks }) => {
  
    const [open, setOpen] = useState(false)
    const menuId = "main-menu"
    
    return(
      <NavbarContainer>  
          
        {/* LOGO */}
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
        <NavbarLogo>
          <MenuName to="/">
            C
          </MenuName>
        </NavbarLogo>
  
        {/* LINKS */}
        <NavbarLinks>
          {/* ABOUT */}
          <li><MenuLink to={menuLinks[1].link} right="0.8">{menuLinks[1].name}</MenuLink></li>
          {/* WORK */}
          <li><MenuLink to={menuLinks[2].link} right="0.8" left="0.8">{menuLinks[2].name}</MenuLink></li>
          {/* BLOG */}
          {/* <li><MenuLink to={menuLinks[3].link} right="0.8" left="0.8">{menuLinks[3].name}</MenuLink></li> */}
          {/* CONNECT */}
          <li><ConnectLink style={{paddingRight: `0.8em`}} href="https://carlosaqf.netlify.com/#connect">Connect</ConnectLink></li>
        </NavbarLinks>
  
      </ NavbarContainer>
    )
  }
  
  
  export default Navbar