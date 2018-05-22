module.exports = {
  siteMetadata: {
    title: 'Better Day',
    author: 'konsumer',
    authorLink: 'https://github.com/konsumer',
    disqus: 'gatsby-starter-blog'// put your disqus ID here
    
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Better Day",
          short_name: "Better Day",
          start_url: "/",
          background_color: "#2F3E51",
          theme_color: "#2F3E51",
          display: "minimal-ui",
          icon: "src/images/icon.png", // This path is relative to the root of the site.
        }
        },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
