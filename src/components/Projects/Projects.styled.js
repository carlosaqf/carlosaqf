import styled from 'styled-components'
import { device }  from '../devices'
import { color } from '../colors'

const StyledProjects = styled.div`
    margin: 5em auto;
    display: flex;
    flex-direction: column;
    max-width: 66em;
`

const ProjectsHeading = styled.h2`
    font-size: 1.5em;
    font-weight: 200;
    letter-spacing: 0.8em;
    text-align: left;
    text-transform: uppercase;
    color: ${color.SHADE_DARK};
    position: relative;
    padding-bottom: 0.5em;
    padding-left: 0.5em;

    @media ${device.mobileM}{
        font-size: 1.8em;
    }
    @media ${device.mobileL}{
        font-size: 2em;
    }

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0.5em;
        background: ${color.MAIN_BRAND};
        height: 0.08em;
        width: 3em;
    }
`

const ProjectsCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
    /* max-width: 66em; */
    /* justify-content: center;
    align-content: center; */

    /* @media ${device.laptop}{
        flex-direction: column;
    } */
`

const ProjectsButton = styled.div`
    align-self: center;
    margin-top: 3em;
`

export {
	StyledProjects,
	ProjectsHeading,
	ProjectsCardsContainer,
	ProjectsButton
}