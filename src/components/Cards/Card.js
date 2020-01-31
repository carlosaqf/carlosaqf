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
                    
                    {props.text2 ? (
                        <>
                            <Button text={props.text} to={props.to} />
                            <Button text={props.text2} to={props.to} />
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