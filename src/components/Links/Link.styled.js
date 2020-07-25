import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-top: ${props => props.top || 0}em;
    padding-right: ${props => props.right || 0}em;
    padding-bottom: ${props => props.bottom || 0}em;
    padding-left: ${props => props.left || 0}em;    
`
export {
	StyledLink
}
