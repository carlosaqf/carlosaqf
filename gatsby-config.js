module.exports = {
  siteMetadata: {
    title: `Carlos Fegurgur | Web Developer | Chicago, IL`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'about',
        link:'/about'
      },
      {
        name:'work',
        link:'/work'
      },
      {
        name:'blog',
        link:'/blog'
      }
    ],
    description: `Personal website of Carlos Fegurgur. A showcase of projects, thoughts and ideas. As well as an insight in to the man behind the screen.`,
    author: `@carlosaqf`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
