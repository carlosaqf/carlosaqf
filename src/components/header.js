import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import Navbar from "./Navbar"

const HeaderWrapper = styled.div`
  background: #ffff81;
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-areas:"
  logo logo . links
  ";
  justify-content: space-between;
  max-width: 1440px;
  background: #ffff81;
  align-items: center;
`;

const NavContainer = styled.div`
  margin-top: auto;
  display: flex;
  grid-area: links;
  align-items: center;
  ul{
    margin: 0 auto;
    display:flex;
    list-style: none;
    li{
    }
  }
`;

const LinkStyle = {
  color: `#616161`,
  textDecoration: `none`,
  padding: `0 5em 0 2em `
};

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0, gridArea: `logo` }}>
        <Link to="/" style={LinkStyle}>
          {siteTitle}
        </Link>
      </h1>
      <NavContainer>
        <Navbar />
      </NavContainer>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
