import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import styled from 'styled-components';


const BlogDiv = styled.div`
    width: 70vw;
    margin: 0 auto;
    padding-top: 1em;
`;


export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <BlogDiv>
                <h1>{post.frontmatter.title}</h1>
                <img src={post.frontmatter.image} />
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
            }
        }
    }
`