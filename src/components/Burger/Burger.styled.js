import styled from 'styled-components'
import { device } from '../devices'
import { color } from '../colors'

export const StyledBurger = styled.button`
    position: absolute;
    top: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    outline: 0;

    @media ${device.mobileS}{
        left: 17rem;
    }

    @media ${device.mobileM}{
        left: 20rem;
    }

    @media ${device.mobileL}{
        left: 23rem;
    }

    @media ${device.tablet}{
        left: -10rem;
    }

    @media ${device.laptop}{
        left: -10rem;
    }

    @media ${device.laptopL}{
        left: -10rem;
    }

    span {
        width: 1.6rem;
        height: 0.25rem;
        background: ${color.PRIMARY};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) =>
		open
			? 'rotate(45deg)'
			: 'rotate(0)'
};
        }

        :nth-child(2){
            opacity: ${({ open }) =>
		open
			? '0'
			: '1'
};

            transform: ${({ open }) =>
		open
			? 'translateX(20px)'
			: 'translateX(0)'
};

        }

        :nth-child(3){
            transform: ${({ open }) =>
		open
			? 'rotate(-45deg)'
			: 'rotate(0)'
};
        }
    }
`

