import styled from 'styled-components'
import { color } from '../colors'
import { device } from '../devices'
import { Link } from "gatsby"

// NAVBAR CONTAINER
const NavbarContainer = styled.div`
    width: 100vw;
    height: 7.0vh;
    margin: 0 auto;
    display: grid;
    background: ${color.GRAY};
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
    "logo logo . links"
    ;
    padding: 0.5em 1.8em 0em 1.8em;
    align-content: center;
    position: fixed;
    top: 0;
    
    @media ${device.mobileS}{
    grid-template-areas:
    "logo links";
    grid-template-columns: 1fr 1fr;
    height: 3.5em;
    }

    @media ${device.tablet}{
    grid-template-areas: "logo links";
    height: 3.5em;
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
    color: ${color.PRIMARY};
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
    color: ${color.WHITE};
  }

  @media ${device.mobileS}{
    font-size: 1em;
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

const ConnectLink = styled.a`
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;


export {
    NavbarContainer,
    NavbarLogo,
    MenuName,
    NavbarLinks,
    MenuLink,
    ConnectLink
}