import styled, { css } from 'styled-components'
import { device } from '../devices'
import { color } from '../colors'

const BioWrapper = styled.div`
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

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 88.6vw;
    padding: 1.3em 0 0 0;


    @media ${device.mobileS}{
        flex-direction: column;
        align-items: center;
        img{
            // padding-right: 0;
        }
    }
    @media ${device.tablet}{
        flex-direction: column;
    }

    @media ${device.laptop}{
        flex-direction: column;
    }

`;

const BioInfo = styled.div`
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
            align-self: center;
        }
    }
`;

const AboutImg = styled.img`
        max-height: 500px;
        max-width: 500px;
        padding-right: 1.5em;
        clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
        
        
`;

export {
    BioWrapper,
    BioInfo,
    AboutWrapper,
    AboutImg
}