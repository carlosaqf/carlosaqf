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
					<Button primary {...props}/>
					{(props.repo) ? (
						<Button primary text='Source Code' to={props.repo} />
					):(null)}
				</CardButtonContainer>

			</CardInfo>

		</StyledCard>

	)
}








// const [show, setShow] = useState(false)

// const contentProps = useSpring({
// 	opacity: show ? 1 : 0,
// 	marginTop: show ? 0 : -500
// })

// const [flipped, set] = useState(false)
// const { opacity } = useSpring({
// 	opacity: flipped ? 1 : 0,
// 	transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
// 	config: { mass: 5, tension: 500, friction: 80 }
// })


// return(
// <div>
// <StyledCard
// 	// onClick={() => setShow(!show)}
// >

// 	{/* { !show ? (
// 		<StyledText></StyledText>
// 	) : (
// 		<CardInfo {...props}>
// 			<h3>{title}</h3>
// 			<StyledText style={contentProps}>
// 				{desc}
// 			</StyledText>
// 			{props.text2 ? (
// 				<>
// 					<Button text={props.text} to={props.to} />
// 					<Button text={props.text2} to={props.to} />
// 				</>
// 			) : (
// 				<Button {...props}/>
// 			)
// 			}
// 		</CardInfo>
// 	)} */}

// 	<CardInfo {...props}>
// 		<h3>{title}</h3>
// 		<StyledText>
// 			{desc}
// 		</StyledText>
// 		{props.text2 ? (
// 			<>
// 				<Button text={props.text} to={props.to} />
// 				<Button text={props.text2} to={props.to} />
// 			</>
// 		) : (
// 			<Button {...props}/>
// 		)
// 		}
// 	</CardInfo>


// </StyledCard>
// )


{/* <StyledCard className='c front' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
		<CardInfo {...props}>
			<h3>{title}</h3>
			<p>{desc}</p>

			{props.text2 ? (
				<>
					<Button text={props.text} to={props.to} />
					<Button text={props.text2} to={props.to} />
				</>
			) : (
				<Button {...props}/>
			)
			}


		</CardInfo>
	</StyledCard>
	</div> */}


export default Card