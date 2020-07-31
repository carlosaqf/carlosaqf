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
        border-radius: 1.5em;
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
`

const CardInfoHeader = styled.h3`
    text-transform: capitalize;
    margin-bottom: 0.5em;
    display: flex;
    padding: 0.5em;
    color: ${color.SHADE_DARK};
    background: rgba(0,0,0,0.08);
    
    @media ${device.tablet}{
        border-radius: 0 1em 0 0;
    }
    
`

const CardInfoDescription = styled.p`
    padding: 1em 1em;
    max-width: 75ch;

`

const CardInfoStack = styled.span`
    margin-left: auto;
`

const CardButtonContainer = styled.div`
    display: flex;
    padding: 0 1em 2em 1em;

    button{
        margin-right: 1em;
    }

    a{
        margin-right: 0.5em;
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