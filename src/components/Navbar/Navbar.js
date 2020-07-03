import React, { useState } from 'react'
import { Burger, Menu } from '../../components'
import Link from '../Links/index'
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import {
	NavbarContainer,
	NavbarLogo,
	NavbarLinks,
} from './Navbar.styled'


const Navbar = () => {

	const [open, setOpen] = useState(false)
	const menuId = 'main-menu'
	const { menuLinks } = useSiteMetadata()

	return(
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
				/>
				<Link
					page={menuLinks[2].link}
					text={menuLinks[2].name}
				/>
				<Link
					page={menuLinks[3].link}
					text={menuLinks[3].name}
				/>
				<Link
					page={menuLinks[4].link}
					text={menuLinks[4].name}
				/>
			</NavbarLinks>

			<Burger 
				open={open}
				setOpen={setOpen}
				aria-controls={menuId}
			/>
		</ NavbarContainer>
	)
}


export default Navbar