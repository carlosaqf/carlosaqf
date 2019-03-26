import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby';

const BioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 2em;
        letter-spacing: 0.8em;
        font-weight: 200;
        padding-top: 1em;
        
    }
`;

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 90vw;

    padding: 1.3em 0 0 0;
    img{
        max-height: 400px;
        max-width: 400px;
        padding-right: 1.5em;
    }
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        img{
            padding-right: 0;
        }
    }

    @media (min-width: 1440px){
        max-width: 54vw;
    }

`;

const BioInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    
    a{
        align-self: flex-end;
    }

    h3{
        // EDIT BIO HEADLINE
    }

    p{
        max-width: 90vw;
    }

    @media (max-width: 768px){
        h3{
            text-align: center;
        }
        a{
            align-self: center;
        }
    }
`;

const BioButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #c8a415;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ${props => props.primary && css`
        background: #c8a415;
        color: #white;
    `}
`;


const Bio = () => (
    <BioWrapper id="bio">
        <h2>ABOUT ME</h2>
        <AboutWrapper>
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" alt="Professional Carlos"/>
            <BioInfo>
                <h3>CATCHY HEADLINE</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed cupiditate harum veniam eaque? Perspiciatis dolorum adipisci dolor consequuntur temporibus suscipit aliquam eligendi voluptatem vero amet. Quisquam quae exercitationem, tempora, laudantium provident culpa totam qui odit dicta recusandae autem ullam consequuntur quasi dolorum animi rem fuga, atque ipsa! Iure, odio animi...</p>
                <Link to="/about">
                    <BioButton primary>
                        Read More
                    </BioButton>
                </Link>
            </BioInfo>
        </AboutWrapper>
    </BioWrapper>
)

export default Bio

