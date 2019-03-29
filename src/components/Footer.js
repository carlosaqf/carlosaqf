import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const FooterContainer = styled.div`
    margin: 0 auto;
    display: grid;
    background: #616161;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
    grid-template-areas:
    "links";
    height: 2em;
    
`;

const FooterLinks = styled.ul`
  margin: 0 1em;
  list-style: none;
  grid-area: links;
  justify-self: center;
  font-family: Helvetica;
  font-size: 0.8em;
  font-weight: 200;
  text-decoration: none;
  @media (max-width: 768px){
    font-size: 0.8em;
  }
  a{
    text-decoration: none;
    color: white;
    padding: 0.5em;
  }
`;

const Footer = () => (
    <FooterContainer>
        <FooterLinks>
            <a href="/">Carlos Fegurgur &copy; {new Date().getFullYear()}</a>
            <a href="https://www.github.com/carlosaqf">Github</a>
            <a href="https://www.linkedin.com/in/cfegurgur">Linkedin</a>
        </FooterLinks>
    </FooterContainer>
)

export default Footer