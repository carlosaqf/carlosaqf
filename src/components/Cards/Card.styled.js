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
    border-radius: 1em;
    
    @media ${device.tablet}{
        flex-direction: row;
    }

    @media ${device.laptopL}{
        max-width: 66em;
    }
`

const CardImg = styled.img`
    margin: 0;
    border-radius: 1em 1em 0 0;
    
    @media ${device.tablet}{
        max-width: 400px;
        border-radius: 1em 0 0 1em;
    }
`

const CardInfo = styled.div`
    margin: 0;
    width: 100%;
    display:flex;
    flex-direction: column;
    padding: 1em;
    
    
    @media ${device.tablet}{
        justify-content: center;
        align-items: center;
    }

`

const CardInfoHeader = styled.h3`
    text-transform: capitalize;
    margin-bottom: 0.5em;
    display: flex;
`

const CardInfoDescription = styled.p`
`

const CardInfoStack = styled.span`
    margin-left: auto;
`

const CardButtonContainer = styled.div`
    display: flex;
    flex-direction: column;

    a {
        margin: 0.5em 0;
    }

    @media ${device.tablet}{
        flex-direction: row;
        a {
            margin: 0 0.5em;
        }
    }
`

export {
	StyledCard,
	CardImg,
	CardInfo,
	CardInfoHeader,
	CardInfoDescription,
	CardInfoStack,
	CardButtonContainer
}