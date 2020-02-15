import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { device } from '../components/devices'

const AboutContainer = styled.div`
  margin: 0 auto;
  min-height: 96.5vh;
`

const AboutTitle = styled.h1`
  text-align: center;
  padding-top: 1.5em;
  color: white;

  @media ${device.mobileS}{
    font-size: 0.7em;
    font-weight: 300;
    letter-spacing: 3px;
    text-align: end;
    padding-top: 11em;
    padding-right: 0.5em;
  }
`

const AboutParagraph = styled.p`
  padding: 2em 1em 0 1em;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
`

const AboutPicture = styled.div`
  background: url("https://lh3.googleusercontent.com/_3DMiHGpuiWhiQmy2-zBnsHUx15bn-584wHHnyBTZnVWtIR9JTeiGEaWNYaExF1zJ4DdkJC4MsMgYAyRN8LaRnaHopLvepUoDga7EWcbRNF6BoAOGWBe_p3eF4X14j3ZQ-xgA6LxAZfBk0xgM4Er7v9WrTUYEiCcydJmxzuuAmpKHfpDfdzMbMbNjhIp3-EzyrXlUA8oi09j7rg_VrNsE6pUujVuAZ2nOemIV6hKc-l3GLCeqGxoEQDw60I3INv01hF8E7kdb9pycq_-JFaIfV3llKxZXpIhCUVjPBH3e-BbM5JgrVWX-jIvOJxP1y23wZQlDSmJzZkezOR6syGomlL2N0FBpOB4XWRy_si7wjD9CoO_T3h0Vhnlsum1WO7cPxMj6UR78GJyzkIGE3Q0uvmHFyxbewISwu5jFILf6jAOrXRS2AkpwxJgVZNGrcXx4Q0q4dN3Nq5Qz7Zqb_xbDMxMSKpEkaSjigEwrJjmV8cBJPl39yWgGDbX7g9ps0H3lYKmI8db2dd7K98XXWtYHR_pvBkWjt5p5LARWgxbSpN1Xmt5QX-qpLDSysR5V3hIP6vJB6hWf4JWN75Bo3CKM2nqVOzDXA5wLM5y=s2364-w2364-h1332-no");
  background-size: cover;
  background-position: center;
  height: 25vh;
  width: 100vw;
`

const AboutSubheading = styled.h3`
  @media ${device.mobileS}{
    text-align: start;
    padding-top: ${props => props.top || 0}em;
  }
`

const About = () => (
	<Layout>
		<SEO title="About" />
		<AboutContainer>
			<AboutPicture>
				<AboutTitle>Tumon, Guam</AboutTitle>
			</AboutPicture>
			<AboutParagraph>

				<AboutSubheading>A Brief History</AboutSubheading>
        In 2016, I graduated with a double major in Mathematics and Computer Science from the University of Guam.
        I then spent the next year living and playing rugby in England and travelling the globe.
        I returned home to Guam in late 2017, made the decision to move to the continental United States, and by Summer 2018,
        I had fully relocated to the city of Chicago.

				<AboutSubheading top="1">Looking Forward</AboutSubheading>

			</AboutParagraph>
		</AboutContainer>
	</Layout>
)

export default About
