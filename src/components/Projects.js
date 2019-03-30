import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device }  from './devices'

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
    padding-bottom: 10px;
    margin: 0 auto;
    h2{
        font-size: 2em;
        letter-spacing: 0.8em;
        font-weight: 200;
        padding-top: 1em;   
    }

    @media ${device.mobileS}{
        h2{
            font-size: 1.5em;
            letter-spacing: 0.6em;
            text-align: center;
        }
    }
`;

const CardsContainer = styled.div`
    display: flex;
    max-width: 90vw;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const Card = styled.div`
    text-align: center;
    background: url("https://source.unsplash.com/random/400x400");
    background-size: cover;
    background-position: center;
    margin: 0.5em;
    height: 400px;
    padding: 0.8em 0.8em 0 0.8em;
    display: flex;
    align-items: flex-end;

    ${props => props.project2 && css`
        background: url("https://source.unsplash.com/random/401x400");
        background-size: cover;
        background-position: center;
    `}

    ${props => props.project3 && css`
        background: url("https://source.unsplash.com/random/402x400");
        background-size: cover;
        background-position: center;
    `}
    
`;

const CardInfo = styled.div`
    text-align: left;

`;

const WorkButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #c8a415;
    color: white;
    margin: 1em 1em;
    padding: 0.25em 1em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    ${props => props.primary && css`
        background: #c8a415;
        color: #white;
    `}
`;


const Projects = () => (
    <ProjectsContainer>
        <h2>PROJECTS</h2>
        <CardsContainer>
            {/* PROJECT 1 */}
            <Card>
                <CardInfo>
                    <h3>Project 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                </CardInfo>
            
            </Card>
            {/* PROJECT 2 */}
            <Card project2>
                <CardInfo>
                    <h3>Project 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                </CardInfo>
            </Card>

            {/* PROJECT 3 */}
            <Card project3>
                <CardInfo>
                    <h3>Project 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                </CardInfo>
            </Card>
        </CardsContainer>
        <Link to="/work">
            <WorkButton primary>
                See my Work
            </WorkButton>
        </Link>
    </ProjectsContainer>
)


export default Projects