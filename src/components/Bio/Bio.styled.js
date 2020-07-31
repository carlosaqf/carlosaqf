import styled from 'styled-components'
import { color } from '../colors'
import { device } from '../devices'

const StyledBio = styled.div`
    margin: 5em auto;
    display: flex;
    flex-direction: column;
    max-width: 66em;
    
`

const BioHeading = styled.h2`
    font-size: 2em;
    font-weight: 200;
    letter-spacing: 0.8em;
    text-align: right;
    text-transform: uppercase;
    color: ${color.SHADE_DARK};
    position: relative;
    padding-bottom: 0.5em;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        right: 1em;
        background: ${color.MAIN_BRAND};
        height: 0.08em;
        width: 3em;
    }
`

const BioInfo = styled.div`
    max-width: 66em;
    display: flex;
    flex-direction: column;
    margin: 1em;

    @media ${device.tablet}{
        margin: 0;
    }

    @media ${device.laptop}{

    }
`

const BioImage = styled.img`
    margin-bottom: 0;
    border-radius: 1em 1em 0 0;

    @media ${device.tablet}{
        border-radius: 0 1em 1em 0;
        height: 50%;
        width: 70%;
        z-index: 1;
    }

    @media ${device.laptop}{
        border-radius: 1em;
    }
`

const BioText = styled.div`
    background: ${color.SHADE_DARK};
    color: ${color.SHADE_LIGHT};
    padding: 3em 2em;
    max-width: 66em;
    border-radius: 0 0 1em 1em;
    box-shadow: ${color.SHADOWTWO};
    
    @media ${device.tablet}{
        align-self: flex-end;
        width: 80%;
        margin-top: -4em;
        /* z-index: -1; */
        border-radius: 1em 0 0 1em;

        h3{
            margin-top: 2em;
        }

    }

    @media ${device.laptop}{
        max-width: 100%;
        border-radius: 1em;
    }

    button {
        margin: 0.5em 0;
    }

    h3 {
        margin-bottom: 0.5em;
    }

    p a{
        color: ${color.SHADE_LIGHT};
    }
`

const BioTag = styled.span`
    border-radius: 1em;
    color: ${color.SHADE_DARK};
    margin: 0.3em;
    padding: 0.25em 1em;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: ${color.SHADOWTWO};
    background: ${color.SHADE_LIGHT};
    font-size: 0.7em;
    display: inline-block;
`

export {
	StyledBio,
	BioHeading,
	BioImage,
	BioText,
	BioInfo,
	BioTag
}

