import React from 'react'
import { StyledBurger, BurgerLine } from './Burger.styled'
import PropTypes from 'prop-types'

const Burger = ({ open, setOpen, ...props }) => {


	return (
		<StyledBurger
			open={open}
			onClick={() => {
				setOpen(!open)
			}}
			{...props}
		>

			<BurgerLine open={open}/>
			<BurgerLine open={open}/>
			<BurgerLine open={open}/>

		</StyledBurger>
	)
}

Burger.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.bool
}

export default Burger