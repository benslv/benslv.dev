/* eslint-disable quotes */
/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Me",
    description: "A personal website for me, Ben Silverman!",
    author: "@bensilverman_",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@content": "src/content",
          "@theme": "src/theme",
          "@images": "src/images",
        },
      },
    },
  ],
};
