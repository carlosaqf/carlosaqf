import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { device } from '../components/devices'
import { color } from '../components/colors'
// import carlos from '../images/carlos2.jpeg'

const AboutContainer = styled.div`
	margin: 0 auto;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	margin-bottom: 5em;
  	max-width: 66em;
`

const AboutHeading = styled.h2`
	font-size: 2em;
	font-weight: 200;
	letter-spacing: 0.8em;
	text-transform: uppercase;
	color: ${color.SHADE_DARK};
	position: relative;
	padding-bottom: 0.5em;
	width: 100%;
	margin-top: 1.5em;
	margin-bottom: 2em;
	margin-left: 0.5em;

	&:after{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		background: ${color.MAIN_BRAND};
		height: 0.08em;
		width: 3em;
	}
`

const AboutParagraph = styled.p`
  max-width: 66em;
  margin: 0.5em;

`

// const AboutPicture = styled.div`
// 	/* background: url('https://lh3.googleusercontent.com/KHqDj8-xQ7QUQlSP_9zeJ2yjgwnotdDikNVlKBaD9H-xflulhh2AAB3vEpr3xZxM9IWVQCXn3pCGfddqk2-GvHLWzaaeHus_0CnNG5W-0QHR_hi6-OqYwXUlRm1HVxY9o916HWmBiPOBOwQAnBoTL0By15t1lcTZmL9o5dq_5xyFuL8ZD4JEsc7iyd17aMJMg-VcjtMvla0QPYZEmxk-Q97ZZ07KjykDABo5OmEaKDHjrbQy0gnNo1aR8-bBFtOQlNXfaRohKb3K-f12e4KCq91PO-Mvz8nKPHkdqIt4F1dHRF7-UxDDgeoXrV5dSnhMZqdhdB8YpIxDJL4vOBslQYLw_36J0vcNIqeAf65Ou1yR8888rrhhepWnFiRl7Gv9y6eag1ZS_TZIQS-wEAbwzH_B7pVSCo9xq67Yb2XzSakqwx4VuyPpQfZKvlZd_A9GG4X1-5pHG0kX6wASifk94MrT4hXJV6HUV7d-SRzLZuzd3Hn6bUk1StcWvV2RuRDPLOXtFQ1b0gj-LuKJnwMHh1J-CiY83dXBimQXQlvRkiEhUqqz4Osd45vdliTKgfaitykeWxgOkd02lmaBsBVQl0M3XVA5SJ5ASkPGWETCb92ky_NTmbJuAQ9Mg3rotUjyt58bbifbiT_lKh_0ymQ0ZZwe8q4yl3_9p52_nUy0zSm0hzgKguPtZs7wq5em7wiqvQYcvVZieQ=s2364-w2364-h1332-no');	 */
// 	background: url(${carlos});
// 	background-size: cover;
//   	background-position: center;
// 	height: 400px;
// 	width: 100%;
// 	margin-bottom: 2em;
// `

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

			<AboutHeading>About</AboutHeading>

			<AboutParagraph>
				<AboutSubheading>COMING SOON!</AboutSubheading>
				Please pardon my progress as this site undergoes some much needed updates.
				{/* <AboutPicture /> */}
				{/* I am an aspiring Web Developer currently based in Chicago, IL.
				Eiusmod cillum voluptate laboris incididunt et amet dolore pariatur reprehenderit proident. Culpa eiusmod laborum sunt occaecat labore cupidatat tempor minim exercitation tempor in culpa minim est. Esse nisi cupidatat do aliqua minim pariatur est proident non culpa.
				Consectetur anim dolore officia excepteur cupidatat fugiat adipisicing minim consectetur do. Occaecat nulla laboris voluptate excepteur Lorem mollit. Sit mollit veniam Lorem consectetur commodo labore eu enim mollit. Dolor pariatur nulla occaecat ullamco nisi esse nulla Lorem exercitation.
				Aliquip consectetur do nostrud in. Ullamco amet ullamco officia aliquip qui. */}
			</AboutParagraph>

		</AboutContainer>

	</Layout>
)

export default About
