/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  decashSidebar: [
    // Getting Started
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Getting Started',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Welcome to DDRPC',
      id: 'getting-started/welcome-to-ddrpc',
    },
    {
      type: 'doc',
      label: 'Create an Account',
      id: 'getting-started/concepts',
    },
    {
      type: 'doc',
      label: 'Obtaining API keys',
      id: 'getting-started/concepts',
    },
    {
      type: 'doc',
      label: 'Quick start guide',
      id: 'getting-started/concepts',
    },
    // Network Endpoints
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Network Endpoints',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Ethereum',
      id: 'about/what-is-decash',
    },
    {
      type: 'doc',
      label: 'Polygon',
      id: 'about/roadmap',
    },
    {
      type: 'doc',
      label: 'Arbitrum',
      id: 'about/polygon-agglayer',
    },
    // Tutorials
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Tutorials',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Connect your dApp',
      id: 'user-guide/create-link',
    },
    // Community and Support
    {
      type: 'html',
      className: 'sidebar-title',
      value: 'Community and Support',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Discord',
      id: 'community/discord',
    },
    {
      type: 'doc',
      label: 'FAQ',
      id: 'community/faq',
    },
  ],
};

export default sidebars;
