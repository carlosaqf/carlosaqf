import styled from 'styled-components'
import { color } from '../colors'
import { device } from '../devices'

const StyledCard = styled.div`
    margin: 0.5em;
    display: flex;
    flex-direction: column;
    box-shadow: ${color.SHADOWTWO};
    background: ${color.SHADE_LIGHT};
    color: ${color.SHADE_DARK};
    
    @media ${device.tablet}{
        flex-direction: row;
    }

    @media ${device.laptopL}{
        min-width: 66em;
    }
`

const CardImg = styled.img`
    margin: 0;

`

const CardInfo = styled.div`
    margin: 0;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    
    
    @media ${device.laptop}{
        justify-content: center;
    }

`

const CardInfoHeader = styled.h3`
    text-transform: capitalize;
`

const CardInfoDescription = styled.p`

`

export {
	StyledCard,
	CardImg,
	CardInfo,
	CardInfoHeader,
	CardInfoDescription
}