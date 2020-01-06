import React, { useState } from 'react'
import { 
    NavbarContainer,
    NavbarLogo,
    MenuName,
    NavbarLinks, 
} from './Navbar.styled'
import { Burger, Menu } from '../../components'
import Link from '../../components/Links'

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
          <Link
            page={menuLinks[1].link} 
            text={menuLinks[1].name} 
          />

          {/* WORK */}
          <Link 
            page={menuLinks[2].link} 
            text={menuLinks[2].name} 
          />
          
          {/* BLOG */}
          <Link 
            page={menuLinks[3].link}
            text={menuLinks[3].name}
          />
          
          {/* CONNECT */}
          <Link 
            page={menuLinks[4].link}
            text={menuLinks[4].name} 
          />

        </NavbarLinks>
  
      </ NavbarContainer>
    )
  }
  
  
export default Navbar