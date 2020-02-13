/* eslint-disable linebreak-style */
import styled from 'styled-components'

const StyledFooter = styled.div`
    margin: 0 auto;
    display: grid;
    background: #616161;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
    grid-template-areas:
    "links";
    height: 2em;
    
`

const StyledFooterLinks = styled.ul`
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
`


export {
	StyledFooter,
	StyledFooterLinks
}