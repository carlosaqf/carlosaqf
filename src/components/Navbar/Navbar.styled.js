import styled from 'styled-components'
import { color } from '../colors'
import { device } from '../devices'
import { Link } from 'gatsby'

// NAVBAR CONTAINER
const NavbarContainer = styled.div`
    width: 100vw;
    height: 7.0vh;
    margin: 0 auto;
    display: grid;
    background: transparent;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
    "logo logo . links"
    ;
    padding: 0.9rem 1.8rem 0rem 1.8rem;
    align-content: center;
    position: fixed;
    z-index: 1;
    top: 0;
    background:
        linear-gradient(
            rgba(0,0,0,0.2),
            rgba(0,0,0,0.2)
        );
    
    @media ${device.mobileS}{
    grid-template-areas:
    "logo links";
    grid-template-columns: 100% 0;
    height: 3.5em;
    }

    @media ${device.tablet}{
    grid-template-areas: "logo links";
    height: 3.3rem;
    grid-template-columns: 1fr 4fr;
    }
`

// LOGO
const NavbarLogo = styled.h1`
  
  margin: 0;
  font-size: 1.3em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 3px;
  grid-area: logo;

  @media ${device.mobileS}{
    font-size: 1.6em;
    justify-self: center;
    padding-bottom: 1rem;
  }

  @media ${device.tablet}{
    font-size: 1em;
  }

  a{
    color: ${color.PRIMARY};
    text-decoration: none;
  }
`

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
`

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
    padding-left: 2rem;
  }

  @media ${device.tablet}{
    a{
      padding: 1em;
      font-weight: 300;
    }
    padding-left: 0;
  }

`

export {
	NavbarContainer,
	NavbarLogo,
	MenuName,
	NavbarLinks
}