/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Buttons/Button'
import {
	StyledCard,
	CardImg,
	CardInfo,
	CardInfoHeader,
	CardInfoDescription,
	CardInfoStack,
	CardButtonContainer
} from './Card.styled'
import { StackIcon } from '../Icons/StackIcons'
import { color } from '../colors'
import { SocialLink } from '../Icons/Icons'

const Card = ({ title, desc, ...props }) => {

	return (

		<StyledCard>

			<CardImg src={props.src} />

			<CardInfo>

				<CardInfoHeader>
					{title}

					{(props.tags) ? (
						<CardInfoStack>
							{props.tags.map((tag, i) => (
								<StackIcon
									key={i}
									stack={tag}
									color={color.ACCENT_LIGHT}
								/>
							))}
						</CardInfoStack>
					):(null)}

				</CardInfoHeader>

				<CardInfoDescription>{desc}</CardInfoDescription>

				<CardButtonContainer>
					<Button {...props}/>
					<SocialLink
						social='External'
						link={props.repo}
						color={color.SHADE_DARK}
						hover={color.MAIN_BRAND}
					/>
					{/* {props.repo && <Button secondary inverse text='Source Code' to={props.repo} />} */}
					<SocialLink
						social='Github'
						link={props.repo}
						color={color.SHADE_DARK}
						hover={color.MAIN_BRAND}
					/>
				</CardButtonContainer>

			</CardInfo>

		</StyledCard>

	)
}

export default Card