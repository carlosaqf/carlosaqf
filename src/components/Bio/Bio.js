import React from 'react'
import Button from '../Buttons'
import carlos from '../../images/carlos2.jpeg'
import {
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
} from './Bio.styled'

const Bio = () => (
	<StyledBio id="bio">
		<BioHeading>About</BioHeading>

		<BioInfo>
			<BioImage src={carlos} />
			<BioText>
				<h3>Timeline</h3>
				<p>
					2016: Graduated from University w/ double major in Computer Science &amp; Mathematics <br/>
					2017: Year abroad in England (East Yorkshire) <br/>
					2018: Moved to Chicago <br/>
					2019: Promotion to Application Support Analyst<br/>
					2020: Started new position at Strata
				</p>
				<h3>Hobbies / Interests</h3>
				<p>
					<BioTag>Anime</BioTag>
					<BioTag>Rugby</BioTag>
					<BioTag>Coffee</BioTag>
					<BioTag>Fitness</BioTag>
					<BioTag>Math</BioTag>
					<BioTag>Programming</BioTag>
					<BioTag>Reading</BioTag>
					<BioTag>Writing</BioTag>
					<BioTag>Graphic Design</BioTag>
					<BioTag>Illustration</BioTag>
					<BioTag>Photography</BioTag>
				</p>
				<Button
					text='Learn More'
					to='/about'
					primary
				/>
			</BioText>
		</BioInfo>
	</StyledBio>
)


/* <h2>ABOUT ME</h2>


		<StyledBioCard>


			<StyledBioCardImgContainer>
				<StyledBioCardImg src={carlos} />
			</StyledBioCardImgContainer>

			<StyledBioCardInfo>
				<h3>From the Pacific Ocean to the Great Lakes</h3>
				<p>Hafa Adai! My name is Carlos Fegurgur and I was born and raised on the island of Guam.
                I have recently relocated to the city of Chicago with the hopes of breaking in to the tech industry
                and ultimately become a full time web developer. I enjoy working on side projects and solving problems in general,
                however, you can also catch me going to the gym, playing board games / sports, or looking for the next best cup of coffee. Learn
                more about me, what I have done and what I could potentially do for you below!
				</p>
				<Button
					text='Read More'
					to='/about'
					primary
				/>
			</StyledBioCardInfo>

		</StyledBioCard> */


export default Bio
