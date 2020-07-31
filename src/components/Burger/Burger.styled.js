import styled from 'styled-components'
import { device } from '../devices'
import { color } from '../colors'

const StyledBurger = styled.div`
	
	display: flex;
    flex-direction: column;
    justify-content: space-around;
	cursor: pointer;
	
`

const BurgerLine = styled.span`
	
	background: ${({ open }) => open ? `${color.MAIN_BRAND}` : `${color.SHADE_LIGHT}`};
	width: 1.7em;
	height: 0.16em;
	border-radius: 0.5em;
	transition: transform 0.3s linear;
	transform-origin: 0.25em;
	z-index: 2;

	:first-child {
		transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
		
    }

	:nth-child(2){
		opacity: ${ ({ open }) => open ? '0' : '1' };
		transform: ${ ({ open }) => open ? 'translateX(20px)' : 'translateX(0)' }
	}

	:nth-child(3){
		transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)' };
		margin-bottom: 0.5em;
	}

	@media ${device.tablet}{
		display: none;
	}
	
`

export {
	StyledBurger,
	BurgerLine
}