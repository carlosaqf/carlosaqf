import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const AboutContainer = styled.div`
  margin: 0 auto;
`;

const AboutTitle = styled.h1`
  text-align: center;
  padding-top: 1.5em;
  color: white;
`;

const AboutParagraph = styled.p`
  text-indent: 2em;
  padding: 2em 1em 0 1em;
`;

const AboutPicture = styled.div`
  background: url("https://source.unsplash.com/random/1920x1080");
  background-size: cover;
  background-position: center;
  height: 25vh;
  width: 100vw;
`;

const AboutSubheading = styled.h3`
  font-size: 1.5em;
  padding-top: 1em;

`;

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutContainer>
      <AboutPicture>
        <AboutTitle>Hafa Adai! My name is Carlos Fegurgur!</AboutTitle>
      </AboutPicture>
      <AboutParagraph>

        <AboutSubheading>From Guam to Chicago</AboutSubheading>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, fugit!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia atque illo ab sunt consequatur sapiente ad ratione tempora doloremque sint. Fugiat, deserunt. Minima laudantium mollitia quisquam, inventore cum eum itaque magni impedit ullam voluptates sequi architecto ratione molestiae? Quisquam nobis omnis illum blanditiis fugiat consequuntur expedita cumque eaque sint nulla.
        
        <AboutSubheading>Looking Forward</AboutSubheading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis autem praesentium, error quia voluptatem beatae. Soluta sint dicta tenetur deserunt, exercitationem unde commodi dolorem praesentium magni doloremque ab dolor delectus aspernatur voluptas nam in minus beatae veniam natus et quia rerum itaque quasi odio! Voluptatibus iusto ipsum ullam? Ipsam deleniti non reprehenderit voluptatem necessitatibus reiciendis corrupti! Delectus perferendis ullam minus perspiciatis, magni molestias nisi? Aperiam nulla dolore corporis fuga dolores libero laborum non harum.

      </AboutParagraph>
    </AboutContainer>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
