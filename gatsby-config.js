/* eslint-disable no-undef */
module.exports = {
	siteMetadata: {
		title: 'Carlos Fegurgur | Portfolio',
		menuLinks:[
			{
				name:'home',
				link:'/'
			},
			{
				name:'about',
				link:'/#about'
			},
			{
				name:'work',
				link:'/#projects'
			},
			{
				name:'blog',
				link:'/blog'
			},
			{
				name:'connect',
				link:'/#connect'
			}
		],
		socialLinks:[
			{
				name:'Github',
				link:'https://www.github.com/carlosaqf'
			},
			{
				name:'Twitter',
				link:'https://www.twitter.com/cfegurgur_'
			},
			{
				name:'Instagram',
				link:'https://www.instagram.com/cfegurgur'
			},
			{
				name:'Linkedin',
				link:'https://www.linkedin.com/in/cfegurgur'
			},
			{
				name:'Email',
				link:'mailto:carlosfegurgur@gmail.com'
			}
		],
		description: 'Personal website of Carlos Fegurgur. A showcase of projects, thoughts and ideas. An insight in to the man behind the screen.',
		author: '@cfegurgur',
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/
				}
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				display: 'minimal-ui',
				icon: 'src/images/personalLogoMk3-512.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	],
}
