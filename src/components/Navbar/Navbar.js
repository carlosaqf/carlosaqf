import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import Burger from '../Burger/Burger'
import Link from '../Links/Link'
import { color } from '../colors'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import {
	NavbarContainer,
	NavbarLogo,
	NavbarLinks,
	StyledNavbar
} from './Navbar.styled'


const Navbar = () => {

	const [open, setOpen] = useState(false)
	const menuId = 'main-menu'
	const { menuLinks } = useSiteMetadata()

	return(
		<StyledNavbar>
			<NavbarContainer>

				<Menu open={open} setOpen={setOpen} id={menuId} />

				<NavbarLogo>
					<span className="displayInitials">
						<Link
							page={menuLinks[0].link}
							text={'CF'}
						/>
					</span>

					<span className="displayFullName">
						<Link
							page={menuLinks[0].link}
							text={'CFEGURGUR'}
						/>
					</span>
				</NavbarLogo>

				<NavbarLinks>
					<Link
						page={menuLinks[1].link}
						text={menuLinks[1].name}
						activeStyle={color.MAIN_BRAND}
					/>
					<Link
						page={menuLinks[2].link}
						text={menuLinks[2].name}
						activeStyle={color.MAIN_BRAND}
					/>
					{/* <Link
						page={menuLinks[3].link}
						text={menuLinks[3].name}
						activeStyle={color.MAIN_BRAND}
					/> */}
					<Link
						page={menuLinks[4].link}
						text={menuLinks[4].name}
						activeStyle={color.MAIN_BRAND}
					/>
				</NavbarLinks>

				<Burger
					open={open}
					setOpen={setOpen}
					aria-controls={menuId}
				/>
			</ NavbarContainer>
		</StyledNavbar>
	)
}


export default Navbar