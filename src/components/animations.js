/* eslint-disable linebreak-style */
import { keyframes } from 'styled-components'

const keyFrameExampleOne = keyframes`

    0% {
        height: 200px;
    }
    100% {
        height: 600px;
        background: orange;
    }
`

const wordFadeIn = keyframes`

    0% {
        opacity: 0;
        transform: translateY(3rem);
        
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }

`

export {
	keyFrameExampleOne,
	wordFadeIn
}