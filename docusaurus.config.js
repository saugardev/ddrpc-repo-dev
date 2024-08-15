// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
 
  title: 'D_D RPC',
  tagline: 'D_D RPC Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rpc.developerdao.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'ddrpc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/saugardev/decash.link/tree/main/docs',
        },       
        theme: {
          customCss: './src/css/custom.css',
        },
      }), 
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'D_D RPC',        
        logo: {
          alt: 'D_D RPC Logo',
          src: 'img/developer_dao_logo.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'decashSidebar',
            position: 'left',
            label: 'Documentation',
          },
            
          {
            href: 'https://github.com/saugardev/decash.link',
            src: 'img/github-mark-white.svg',
            position: 'right',
            alt: 'Github logo',

          },
          {
            href: 'https://github.com/saugardev/decash.link',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;
