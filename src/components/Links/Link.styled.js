import styled from 'styled-components'
import { color } from '../colors'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-top: ${props => props.top || 0}em;
    padding-right: ${props => props.right || 0}em;
    padding-bottom: ${props => props.bottom || 0}em;
    padding-left: ${props => props.left || 0}em;

    :hover{
        color: ${color.PRIMARY};
    }
    
`
export {
	StyledLink
}

// const MenuLink = styled(Link)`
//   text-transform: uppercase;
//   letter-spacing: 1.5px;
//   padding-top: ${props => props.top || 0}em;
//   padding-right: ${props => props.right || 0}em;
//   padding-bottom: ${props => props.bottom || 0}em;
//   padding-left: ${props => props.left || 0}em;
// `;

// const ConnectLink = styled.a`
//   text-transform: uppercase;
//   letter-spacing: 1.5px;
// `;