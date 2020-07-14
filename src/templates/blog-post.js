/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import { device } from '../components/devices'


const BlogDiv = styled.div`
    width: 70vw;
    margin: 0 auto;
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    @media ${device.mobileS}{
        width: 90vw;
    }

    @media ${device.laptop}{
        width: 75vw;
    }
`

const BlogImg = styled.img`
  width: 70vw;
  height: 40vh;
  background-position: center;
  background-size: cover;
  margin: 1em auto 0 auto;
`

const ImgCaption = styled.figcaption`
    font-size: 0.5em;
    font-family: Arial;
    letter-spacing: 0.08em;
    float: right;
`

const BlogInfo = styled.p`
    font-size: 0.8em;
    letter-spacing: 0.08em;
    margin-top: 0;
    padding-top: 0;
`

export default ({ data }) => {
	const post = data.markdownRemark
	return (
		<Layout>
			<BlogDiv>
				<h1>{post.frontmatter.title}</h1>
				<figure>
					<BlogImg src={post.frontmatter.image}></BlogImg>
					<ImgCaption>Image courtesy of <a href="https://unsplash.com">Unsplash</a></ImgCaption>
				</figure>
				<BlogInfo>{post.frontmatter.author} - {post.frontmatter.date}</BlogInfo>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</BlogDiv>
		</Layout>
	)
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                image
                date(formatString: "DD MMMM, YY")
                author
            }
        }
    }
`