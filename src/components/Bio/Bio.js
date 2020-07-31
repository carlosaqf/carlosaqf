import React from 'react'
import Button from '../Buttons/Button'
import carlos from '../../images/carlos2.jpeg'
import {
	StyledBio,
	BioHeading,
	BioImage,
	BioText,
	BioInfo,
	BioTag
} from './Bio.styled'

const Bio = () => (
	<StyledBio id="about">
		<BioHeading>About</BioHeading>

		<BioInfo>
			<BioImage src={carlos} />
			<BioText>
				<h3>Who am I?</h3>
				<p>Hafa Adai, you can call me Los! I was born and raised on the island of Guam and moved to Chicago in 2018, 
				a couple of years after graduating with a double major in Mathematics and Computer Science.<br/><br/>
				I play Rugby (back three) as often as I can and generally enjoy finding new ways of staying active. <br/><br/>
				I&apos;m always looking for a <a href='https://www.goodreads.com/user/show/93571528-carlos-fegurgur'>good read</a> so send me your recommendations! <br/><br/>
				I have too many interests and hobbies (listed below), but above all else I enjoy solving problems and use programming as a way to do so!
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
					text='Let&apos;s Talk!'
					to='/#connect'
					primary
				/>

			</BioText>
		</BioInfo>
	</StyledBio>
)

export default Bio
