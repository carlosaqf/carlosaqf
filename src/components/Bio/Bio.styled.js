import styled, { css } from 'styled-components'
import { device } from '../devices'
import { color } from '../colors'

const StyledBio = styled.div`
    margin: 0 auto;
    display: flex;
    background: ${color.WHITE};
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
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

const StyledBioCard = styled.div`
    display: grid;
    justify-content: center;
    max-width: 75vw;
    min-height: auto;
    padding: 1em;

    background-color: #DDD;
    border-radius: 5px;

    /* grid-template-columns: 1fr 1fr; */
    

    @media ${device.mobileS}{
        grid-template-columns: 1fr;
    }
    @media ${device.tablet}{
        grid-template-columns: 1fr;
    }

    @media ${device.laptop}{
        grid-template-columns: 1fr 1fr;
    }

`;

const StyledBioCardInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    
    a{
        align-self: center;
    }

    h3{
        // EDIT BIO HEADLINE
    }

    p{
        max-width: 90vw;
    }

    @media ${device.mobileS}{
        h3{
            text-align: center;
        }
        a{
            align-self: center;
        }
    }

    @media ${device.mobileL}{
        // align-self: start;
    }

    @media ${device.tablet}{
        align-self: start;
        h3{
            text-align: left;
        }
        a{
            align-self: center;
        }
    }

    @media ${device.laptop}{
        align-self: start;
        padding-top: 0;
        h3{
            text-align: left;
        }
        a{
            align-self: flex-end;
        }
    }
`;

const StyledBioCardImg = styled.img`
    /* max-height: 500px;
    max-width: 500px; */
    /* clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%); */
   
`;

const StyledBioCardImgContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
`

export {
    StyledBio,
    StyledBioCard,
    StyledBioCardInfo,
    StyledBioCardImg,
    StyledBioCardImgContainer
}

