import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device }  from './devices'
// import { Button } from './button'
import Button from '../components/Buttons'
// import Card from './Card'
import  Card from '../components/Cards'
import { color } from './colors'

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

const Projects = () => (
    <ProjectsContainer>
        <h2>PROJECTS</h2>
        

        <CardsContainer>
            {/* PROJECT 1 */}

            <Card 
                project
                title='Project 1'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
                text='Visit Demo'
                text2='Source'
                to='https://www.github.com/carlosaqf/notes'
            />

            <Card
                title='Project 2'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
                text='Visit Demo'
                to='https://www.github.com/carlosaqf/notes'
            />

            <Card
                title='Project 3'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.'
                text='Visit Demo'
                to='https://www.github.com/carlosaqf/notes'
            />
                
           
            


            {/* <Card>
                <CardInfo>
                    <h3>Project 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                    <Button
                        text='Visit Demo'
                        primary
                    />
                    <Button
                        text='View Code'
                        to='https://www.github.com/carlosaqf/notes'
                    />
                </CardInfo>
            
            </Card> */}

            {/* PROJECT 2 */}
            {/* <Card project2>
                <CardInfo>
                    <h3>Project 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                    <Button
                        text='Visit Demo'
                        primary
                    />
                    <Button
                        text='View Code'
                        to='https://www.github.com/carlosaqf/notes'
                    />
                </CardInfo>
            </Card> */}

            {/* PROJECT 3 */}
            {/* <Card>
                <CardInfo>
                    <h3>Project 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
                    <Button
                        text='Visit Demo'
                        primary
                    />
                    <Button
                        text='View Code'
                        to='https://www.github.com/carlosaqf/notes'
                    />
                </CardInfo>
            </Card> */}


        </CardsContainer>
        <Link to="/work">
            <Button
                text='See my Work'
                primary
            />
        </Link>
    </ProjectsContainer>
)


export default Projects