import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Socials from './Socials'

const ConnectContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    h2{
        font-size: 2em;
        letter-spacing: 0.8em;
        font-weight: 200;
        padding-top: 1em;
        
    }

`;

const FormContainer = styled.div`
    margin: 0 auto;
    background: #fafafa;
    width: 75vw;
    padding: 1em;
    border-radius: 10px;
    
    @media (max-width: 768px){
        height: 60vh;
        width: 70vw;
    }

`;

const Form = styled.div`
    width: 70%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    
    label{
        align-self: flex-start;
    }

    input{
        margin-bottom: 1em;
    }

    textarea{
        resize: none;
        
    }
`;

const ConnectButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #c8a415;
    color: white;
    padding: 0.25em 1em;
    margin-top: 2em;
    width: 250px;
    align-self: flex-end;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: #c8a415;
    color: #white;
    
`;




const Connect = () => (
    <ConnectContainer id="connect">
        <h2>CONNECT</h2>
        <Socials />

        <FormContainer>
            <Form>
                <label for="name">Name</label>
                <input type="text" name="name" id="name"/>
                
                <label for="email">Email</label>
                <input type="email" name="email" id="email"/>
                
                <label for="comment">Comment</label>
                <textarea name="comment" id="comment" cols="30" rows="10"></textarea>

                <ConnectButton type="submit">Message Me</ConnectButton>
            </Form>
        </FormContainer>

    </ConnectContainer>
      
    
)

export default Connect


