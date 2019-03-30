import React from 'react'
import { Link } from "gatsby"
import logo from "../../public/icons/icon-48x48.png"
import styled from "styled-components"
import { device } from './devices'

// NAVBAR CONTAINER
const NavbarContainer = styled.div`
  width: 100vw;
  height: 7vh;
  margin: 0 auto;
  display: grid;
  background: white;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
  "logo logo . links"
  ;
  padding: 0.5em 0.8em 0 0.8em;
  align-content: center;
  
  @media ${device.mobileS}{
    grid-template-areas:
    "logo links";
    grid-template-columns: 1fr 1fr;
    padding-right: 0;
  }
  
  
`;

// LOGO
const NavbarLogo = styled.h1`
  
  margin: 0;
  font-size: 1.3em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  grid-area: logo;

  @media ${device.mobileS}{
    font-size: 1em;
    padding-top: 0.2em;
  }

  @media ${device.tablet}{
    font-size: 1em;
    padding-top: 0.2em;
  }

  a{
    color: #c8a415;
    text-decoration: none;
  }
`;

const MenuName = styled(Link)`
  
  @media ${device.mobileS}{
    ::after{
        content: "F";
    }
  }

  @media ${device.mobileL}{
    ::after{
      content: "AQF"
    }
  }

  @media ${device.tablet}{
    ::after{
      content: "arlosaqf"
    }
  }
`;


// LINKS
const NavbarLinks = styled.ul`
  margin: 0 0 0 auto;
  list-style: none;
  display: flex;
  align-items: center;
  font-family: Helvetica;
  grid-area: links;
  font-size: 1em;
  a{
    text-decoration: none;
    color: #616161;
  }
  @media ${device.mobileS}{
    font-size: 0.8em;
    a{
      padding: 0.4em;
    }
  }

  @media ${device.tablet}{
    a{
      padding: 1em;
    }
  }


`;

// LINK STYLES
const MenuLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-top: ${props => props.top || 0}em;
  padding-right: ${props => props.right || 0}em;
  padding-bottom: ${props => props.bottom || 0}em;
  padding-left: ${props => props.left || 0}em;
`;

const Navbar = ({ menuLinks }) => {
  return(
    <NavbarContainer>  
        
      {/* LOGO */}
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
        <li><MenuLink to={menuLinks[3].link} right="0.8" left="0.8">{menuLinks[3].name}</MenuLink></li>
        {/* CONNECT */}
        <li><MenuLink to="/contact" left="0.8">Connect</MenuLink></li>
      </NavbarLinks>

    </ NavbarContainer>
  )
}


export default Navbar