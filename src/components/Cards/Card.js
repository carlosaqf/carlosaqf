import React from 'react'
import Button from '../Buttons'
import { StyledCard, CardInfo } from './Card.styled'

const Card = ({ title, desc }) => {
    return(
        <StyledCard>
            <CardInfo>
                <h3>{title}</h3>
                <p>{desc}</p>
            </CardInfo>
        </StyledCard>
    )
}

export default Card