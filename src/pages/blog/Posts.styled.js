/* eslint-disable linebreak-style */
import styled from 'styled-components'
import { device } from '../../components/devices'

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
  padding: 0 1em 0.8em 1em;
  margin: 0 auto;
  h2{
      font-size: 2em;
      letter-spacing: 0.8em;
      font-weight: 200;
      padding-top: 1em;
      text-align: center;
      text-transform: uppercase;
  }
`

const BlogPost = styled.div`
  margin: 1em 2em;
  text-align: center;
  background: #c7c7c7;
  border-radius: 0.5em;
  width: 60vw;

  @media ${device.mobileS}{
    width: 90vw;
  }

  @media ${device.laptop}{
    width: 45vw;
  }
`

const BlogImg = styled.img`
  width: 100vw;
  height: 40vh;
  margin: 0 auto;
  padding: 0;
  border-radius: 0.5em 0.5em 0 0;
`

export {
	BlogWrapper,
	BlogPost,
	BlogImg
}