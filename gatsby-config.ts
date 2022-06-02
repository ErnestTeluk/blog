import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'blog',
    siteUrl: 'https://www.yourdomain.tld',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: './src/components/',
      },
      __key: 'components',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'hooks',
        path: './src/hooks/',
      },
      __key: 'hooks',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'theme',
        path: './src/theme/',
      },
      __key: 'theme',
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Fira Code\:300,400,500,700', 'lato\:300,400,400i,700'],
        display: 'swap',
      },
    },
  ],
};

export default config;
