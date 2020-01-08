import styled, { css } from 'styled-components'
import { color } from '../colors'

const StyledCard = styled.div`
    background: url("https://source.unsplash.com/random/400x400");
    background-size: cover;
    background-position: center;
    margin: 0.5em;
    height: 20em;
    padding: 0.8em 0.8em 0 0.8em;
    display: flex;
    align-items: flex-end;
    
    max-width: 90vw;
    
    button{
        margin-bottom: 0.5em;
    }
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
    CardInfo
}