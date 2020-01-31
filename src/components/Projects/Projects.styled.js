import styled from 'styled-components'
import { device }  from '../devices'

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
    margin: 0 auto;
    
    a{
        padding-top: 2rem;
    }
    
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

export {
    ProjectsContainer,
    CardsContainer
}