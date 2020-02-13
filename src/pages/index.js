import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero/Hero'
import Bio from '../components/Bio/Bio'
import Projects from '../components/Projects/Projects'
import Connect from '../components/Connect'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout style={{
		overflow: 'hidden',
	}}>
		<SEO title="Home" keywords={['gatsby', 'application', 'react']} />
		<Hero />
		<Bio />
		<Projects />
		<Connect />
	</Layout>
)

export default IndexPage
