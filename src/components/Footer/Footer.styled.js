/* eslint-disable linebreak-style */
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-top: 1px solid rgba(0,0,0,0.2); */
  background: #29282A;
`

const StyledFooterLinks = styled.ul`
  margin-bottom: 1em;
  margin-top: 1em;

  a {
    margin: 1em;
    padding: 0.5em;
  }
`

const StyledFooterName = styled.a`
  text-decoration: none;
  font-size: 0.8em;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: ${prop => prop.color};
  
  & :hover{
    color: ${prop => prop.hover};
  }
`

export {
	StyledFooter,
	StyledFooterLinks,
	StyledFooterName
}