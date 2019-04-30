import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device }  from './devices'
import { Button } from './button'
import Card from './Card'

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const CardInfo = styled.div`
    color: white;
    text-align: left;
    h3{
        margin-bottom: 0.5em;
    }
`;

const CardButton = styled(Button)`
    margin: 0 auto 1em auto;
    margin-left: ${props => props.left || 0}em;
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
                    <CardButton primary>Visit Demo</CardButton>
                    <a href="https://www.github.com/carlosaqf/notes" target="_blank">
                        <CardButton left="1">View Code</CardButton>
                    </a>
                </CardInfo>
            
            </Card>
            {/* PROJECT 2 */}
            <Card project2>
                <CardInfo>
                    <h3>Project 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                    <CardButton primary>Visit Demo</CardButton>
                    <a href="https://www.github.com/carlosaqf/carlosaqf" target="_blank">
                        <CardButton left="1">View Code</CardButton>
                    </a>
                </CardInfo>
            </Card>

            {/* PROJECT 3 */}
            <Card project3>
                <CardInfo>
                    <h3>Project 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                    <CardButton primary>Visit Demo</CardButton>
                    <a href="https://www.github.com/carlosaqf/freeCodeCampProjects" target="_blank">
                        <CardButton left="1">View Code</CardButton>
                    </a>
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