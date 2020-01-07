import React from 'react'
import Button from '../Buttons'
import { StyledCard, CardInfo } from './Card.styled'

const Card = ({ title, desc, ...props }) => {
    return(
        <div>
            <StyledCard>
               <CardInfo {...props}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    
                    {props.project ? (
                        <>
                            <Button text={props.text} />
                            <Button text={props.text2} />
                        </>
                    ) : (
                            <Button {...props}/>
                    )
                    }
                    
                    
               </CardInfo>
            </StyledCard>
        </div>
    )
}


export default Card