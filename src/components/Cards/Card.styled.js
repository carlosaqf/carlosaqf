import styled, { css } from 'styled-components'
import { color } from '../colors'
import { animated } from 'react-spring'

const StyledCard = styled(animated.div)`
    background: url("https://source.unsplash.com/random/400x400");
    background-size: cover;
    background-position: center;
    margin: 0.5em;
    height: 20em;
    padding: 0.8em 0.8em 0 0.8em;
    display: flex;
    align-items: flex-end;
    /* box-shadow: ${color.SHADOW}; */
    box-shadow: ${color.SHADOWTWO};
    max-width: 90vw;
    min-width: 25vw;
    will-change: transform, opacity;


    button{
        margin-bottom: 0.5em;
    }
`

const StyledText = styled(animated.p)`
    will-change: transform, opacity;
`



const CardInfo = styled.div`
    color: white;
    text-align: left;
    
    h3{
        margin-bottom: 0.5em;
    }
    
    button{
        margin-left: 0;
        box-shadow: none;
    }
    
    ${props => props.project && css`
        
    `}
`

export {
	StyledCard,
	CardInfo,
	StyledText
}