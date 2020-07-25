import styled from 'styled-components'
import { color } from '../colors'

const StyledMenu = styled.div`

    display: ${({ open }) =>
		open
			? 'flex'
			: 'none'
};
    flex-direction: column;
    justify-content: center;
    background: ${color.SHADE_LIGHT};

    height: 30vh;
    width: 100vw;
    text-align: left;
    padding: 2rem;
    position: absolute;
    z-index: 1;
    top: 0;
    transition: transform 0.3s ease-in-out;
    list-style-type: none;
    font-weight: 300;

    ul {
        align-self: center;
    }

`

const MenuLinks = styled.ul`
    margin: 0 auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Helvetica;
    font-size: 1em;
    
    a{
        text-decoration: none;
        color: ${color.SHADE_DARK};
        :hover{
            color: ${color.MAIN_BRAND};
        }
        padding: 0.6em;
        font-weight: 300;
        font-size: 1em;
        /* transition: all 300ms linear 0s; */
    }

`

export {
	StyledMenu,
	MenuLinks
}