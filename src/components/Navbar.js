import React from 'react'
import { Link } from "gatsby"
import logo from "../../public/icons/icon-48x48.png"
import styled from "styled-components"

// NAVBAR
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
  @media (max-width: 768px){
    grid-template-areas:
    "logo links"
    ;
    grid-template-columns: repeat(2, 1fr);
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

  @media (max-width: 768px){
    font-size: 1em;
    padding-top: 0.2em;
  }

  a{
    color: #c8a415;
    text-decoration: none;
  }
`;

// LINKS
const NavbarLinks = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  align-items: center;
  font-family: Helvetica;
  grid-area: links;
  font-size: 1em;
  @media (max-width: 768px){
    font-size: 0.8em;
  }

  a{
    color: #616161;
  }
`;

const Navbar = () => (
    <NavbarContainer>  
        
      {/* LOGO */}
      <NavbarLogo>
        <Link to="/">
          Carlosaqf
        </Link>
      </NavbarLogo>

      {/* LINKS */}
      <NavbarLinks>

        {/* ABOUT */}
        <li><Link to="/about" style={{
          textDecoration: `none`,
          padding: `0 0.8em 0 0`,
          textTransform: `uppercase`,
          letterSpacing: `1.5px`,
        }}>About</Link></li>

        {/* WORK */}
        <li><Link to="/work" style={{
          textDecoration: `none`,
          padding: `0 0.8em 0 0.8em`,
          textTransform: `uppercase`,
          letterSpacing: `1.5px`,
        }}>Work</Link></li>

        {/* BLOG */}
        <li><Link to="/blog" style={{
          textDecoration: `none`,
          padding: `0 0.8em 0 0.8em`,
          textTransform: `uppercase`,
          letterSpacing: `1.5px`,
        }}>Blog</Link></li>

        {/* CONNECT */}
        <li><Link to="/contact" style={{
          textDecoration: `none`,
          padding: `0 0 0 0.8em`,
          textTransform: `uppercase`,
          letterSpacing: `1.5px`,
        }}>Connect</Link></li>

      </NavbarLinks>

  </ NavbarContainer>
)


export default Navbar