import styled from 'styled-components'
import { color } from '../colors'
import { device } from '../devices'

const NavbarContainer = styled.div`

  max-width: 66em;
  margin: 0 auto; 
  display: flex;

  justify-content: center;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;

`

// LOGO
const NavbarLogo = styled.h1`
  
  margin: 0 auto 0 0;
  font-size: 1em;
  text-transform: uppercase;
  align-self: center;
  font-weight: 600;
  
  a {
    letter-spacing: 0.4em;
    color: ${color.MAIN_BRAND};
    text-decoration: none;
    padding: 0.6em;
    padding-left: 0;
  }

  li {
    list-style-type: none;
  }

  .displayInitials {
    display: inline-block;
  }

  .displayFullName {
    display: none;
  }

  @media ${device.tablet}{

    .displayInitials{
      display:none;
    }

    .displayFullName{
      display:inline-block;
    }
  }


`

// LINKS
const NavbarLinks = styled.ul`
  margin:0 0 0 auto;
  list-style: none;
  display: none;
  align-items: center;
  font-family: Helvetica;
  font-size: 1em;
  
  a{
    text-decoration: none;
    color: ${color.MAIN_BRAND};
    padding: 0.6em;
    font-weight: 300;
    font-size: 1em;
    transition: all 300ms linear 0s;
  }
  
  & li:nth-child(4){
    a{
      padding-right: 0;
    }
  }

  @media ${device.tablet}{
    display: flex;
  }

`

export {
	NavbarContainer,
	NavbarLogo,
	NavbarLinks
}