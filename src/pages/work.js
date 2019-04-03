import React from "react"
import { Link } from "gatsby"
import styled, { css } from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button } from '../components/button'
import { device } from '../components/devices'

const WorkWrapper = styled.div`
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
      text-align: center;
      text-transform: uppercase;
  }
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 90vw;
    // justify-content: center;

    @media ${device.mobileS}{
        grid-template-columns: 1fr;
    }

    @media ${device.tablet}{
      grid-template-columns: 1fr 1fr;
    }

    @media ${device.laptop}{
      grid-template-columns: repeat(3, 1fr);
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
        background-postion: center;
    `}

    ${props => props.project3 && css`
        background: url("https://source.unsplash.com/random/402x400");
        background-size: cover;
        background-postion: center;
    `}
    
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




const Work = () => (
  <Layout>
    <SEO title="Work" />
    <WorkWrapper>
      <h2>Work</h2>
      <CardsContainer>
        
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

        <Card project2>
          <CardInfo>
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
              <CardButton primary>Visit Demo</CardButton>
              <a href="https://www.github.com/carlosaqf/notes" target="_blank">
                  <CardButton left="1">View Code</CardButton>
              </a>
          </CardInfo>
        </Card>

        <Card project3>
          <CardInfo>
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
              <CardButton primary>Visit Demo</CardButton>
              <a href="https://www.github.com/carlosaqf/notes" target="_blank">
                  <CardButton left="1">View Code</CardButton>
              </a>
          </CardInfo>
        </Card>

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

        <Card project2>
          <CardInfo>
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
              <CardButton primary>Visit Demo</CardButton>
              <a href="https://www.github.com/carlosaqf/notes" target="_blank">
                  <CardButton left="1">View Code</CardButton>
              </a>
          </CardInfo>
        </Card>

        <Card project3>
          <CardInfo>
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
              <CardButton primary>Visit Demo</CardButton>
              <a href="https://www.github.com/carlosaqf/notes" target="_blank">
                  <CardButton left="1">View Code</CardButton>
              </a>
          </CardInfo>
        </Card>

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

        <Card project2>
          <CardInfo>
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
              <CardButton primary>Visit Demo</CardButton>
              <a href="https://www.github.com/carlosaqf/notes" target="_blank">
                  <CardButton left="1">View Code</CardButton>
              </a>
          </CardInfo>
        </Card>

        <Card project3>
          <CardInfo>
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magnam.</p>
              <CardButton primary>Visit Demo</CardButton>
              <a href="https://www.github.com/carlosaqf/notes" target="_blank">
                  <CardButton left="1">View Code</CardButton>
              </a>
          </CardInfo>
        </Card>

      </CardsContainer>
    </WorkWrapper>
    
  </Layout>
)

export default Work

