import React from 'react'
import Button from '../Buttons'
import {
	StyledBio,
	StyledBioCard,
	StyledBioCardInfo } from './Bio.styled'

const Bio = () => (
	<StyledBio id="bio">
		<h2>ABOUT ME</h2>

		{/* Grid Container */}
		<StyledBioCard>

			{/* Grid Item */}
			{/* <StyledBioCardImgContainer>
                <StyledBioCardImg src={carlos} />
            </StyledBioCardImgContainer> */}

			{/* Grid Item */}
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

		</StyledBioCard>

	</StyledBio>
)

export default Bio

// https://lh3.googleusercontent.com/sUdA70dubPlc8CoLYEgvl6Nch5g2XPcGBfiUcVJUGXIiP_ZcY5Esj6w3RzyVg3l04reGyjSTxib4mOTEov9tmI6V3g8fvceyVVzcWnUbrk-j97MNIOYxmuUdS-QBpA3JBpQdRABlYTBJrFEj7skkJePcAO1I1qNvi69nRH5JuLlrr8FI2PZmvinDbs7NJ0Aj7IPyjD8sHgPadAoxtFVq7-Dtr72R3XK6EOea7L9KW-DVnjgWBInueaAK1t9m62T_OEBmKQTvw-xRZiyTIxG66JobYvWSWYn5sAfnvftI43U4cxBeCb7DzaicTPWVo2LmESK3OfZHMRAaPivOgEGhMYCsmIzfjKkd7vZaRnBDUJdjJIqUHA5FrQxiFOR2S4egwuwH0ffntR-PguX4SSYQm0SENBMDSTtX4ak5h30nPTlSGLUwX6F-GeBUD_Qd5ez_5wHpBGnHwFsqwkOSfx7b9fqs1Inr_pX-CGTvGS5-oULs2B9no1C5Hyoz3Yel6oOrU-vsoVJRctezjPXHmPgMrhEKjFVplCtQFqWeaLLk1j_4xT_E92EgfSjDdh8YXlVx9SjLq3ZpIp5zrUcNNpfBl_iRYV2L7lhz7h2I=s1332-w1000-h1332-no