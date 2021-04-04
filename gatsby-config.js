/* eslint-disable quotes */
/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Me",
    description: "A personal website for me, Ben Silverman!",
    author: "@bensilverman_",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {
    //       "@components": "src/components",
    //       "@content": "src/content",
    //       "@theme": "src/theme",
    //       "@images": "src/images",
    //     },
    //   },
    // },
  ],
};
