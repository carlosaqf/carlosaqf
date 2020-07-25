import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './layout.css'

const Layout = ({ children }) => (
	<>
		<Navbar />
		<div
			style={{
				margin: '0 auto',
				overflow: 'hidden',
				padding: '0',
				minHeight: '100vh',
			}}
		>
			<main>{children}</main>
		</div>
		<Footer />
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
