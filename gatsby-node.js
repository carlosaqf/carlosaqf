/* eslint-disable no-undef */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({ node, getNode, basePath: 'pages' })
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		})
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// List templates
	const blogPostTemplate = path.resolve('./src/templates/blog-post.js')
	const projectTemplate = path.resolve('./src/templates/project.js')

	return graphql(`
	    {
	        allMarkdownRemark{
	            edges{
	                node{
	                    fields{
	                        slug
						}
						frontmatter{
							title
							date
							type
						}
	                }
	            }
	        }
		}
	`).then(result => {

		result.data.allMarkdownRemark.edges.forEach(edge => {
			if (edge.node.frontmatter.type === 'blog') {
				createPage({
					path: edge.node.fields.slug,
					component: blogPostTemplate,
					context: {
						slug: edge.node.fields.slug
					}
				})
			} else if (edge.node.frontmatter.type === 'project') {
				createPage({
					path: edge.node.fields.slug,
					component: projectTemplate,
					context: {
						slug: edge.node.fields.slug
					}
				})
			}
		})
	})
	// `).then(result => {
	// 	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
	// 		createPage({
	// 			path: node.fields.slug,
	// 			component: blogPostTemplate,
	// 			context: {
	// 				// Data passed to context is available
	// 				// in page queries as GraphQL variables.
	// 				slug: node.fields.slug,
	// 			},
	// 		})
	// 	})
	// })
}