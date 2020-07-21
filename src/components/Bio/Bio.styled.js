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
    
    @media ${device.laptop}{
        /* position: relative; */
        /* border: 3px solid pink; */
    }
`

const BioImage = styled.img`
    margin-bottom: 0;
    border-radius: 1em 1em 0 0;
`

const BioText = styled.div`
    background: ${color.SHADE_DARK};
    color: ${color.SHADE_LIGHT};
    padding: 3em 2em;
    max-width: 75ch;
    border-radius: 0 0 1em 1em;
    box-shadow: ${color.SHADOWTWO};
    
    @media ${device.laptop}{
        /* position: absolute;
        background: rgba(41, 40, 42, 0.8);
        border-radius: 1em 0 1em 1em;
        top: 60%;
        left: 40%;
        height: auto;
        z-index: 2; */
        max-width: 100%;
    }

    h3 {
        margin-bottom: 0.5em;
    }
`

const BioTag = styled.span`
    border-radius: 1em;
    color: ${color.SHADE_DARK};
    margin: 0.3em;
    padding: 0.25em 1em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    box-shadow: ${color.SHADOWTWO};
    background: ${color.SHADE_LIGHT};
    font-size: 0.7em;
    display: inline-block;
`

// const StyledBioCard = styled.div`
//     display: grid;
//     justify-content: center;
//     max-width: 66em;
//     min-height: auto;
//     padding: 1em;
//     border: 2px solid green;

//     /* grid-template-columns: 1fr 1fr; */


//     @media ${device.mobileS}{
//         grid-template-columns: 1fr;
//     }
//     @media ${device.tablet}{
//         grid-template-columns: 1fr;
//     }

//     @media ${device.laptop}{
//         grid-template-columns: 1fr;
//     }

// `

// const StyledBioCardInfo = styled.div`
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     border: 2px solid blue;

//     a{
//         align-self: center;
//     }

//     h3{
//         /* EDIT BIO HEADLINE */
//     }

//     p{
//         max-width: 90vw;
//     }

//     @media ${device.mobileS}{
//         h3{
//             text-align: center;
//         }
//         a{
//             align-self: center;
//         }
//     }

//     @media ${device.mobileL}{
//         // align-self: start;
//     }

//     @media ${device.tablet}{
//         align-self: start;
//         h3{
//             text-align: left;
//         }
//         a{
//             align-self: center;
//         }
//     }

//     @media ${device.laptop}{
//         align-self: start;
//         padding-top: 0;
//         h3{
//             text-align: left;
//         }
//         a{
//             align-self: flex-end;
//         }
//     }
// `

// const StyledBioCardImg = styled.img`
//     max-height: 500px;
//     max-width: 500px;
// `

// const StyledBioCardImgContainer = styled.div`
//     display: block;
//     width: auto;
//     height: auto;
// `

export {
	StyledBio,
	BioHeading,
	BioImage,
	BioText,
	BioInfo,
	BioTag
	// StyledBioCard,
	// StyledBioCardInfo,
	// StyledBioCardImg,
	// StyledBioCardImgContainer
}

