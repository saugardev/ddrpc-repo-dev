import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fe2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2d5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '61f'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'db0'),
                exact: true,
                sidebar: "decashSidebar"
              },
              {
                path: '/docs/about/polygon-agglayer',
                component: ComponentCreator('/docs/about/polygon-agglayer', '794'),
                exact: true,
                sidebar: "decashSidebar"
              },
              {
                path: '/docs/about/roadmap',
                component: ComponentCreator('/docs/about/roadmap', '922'),
                exact: true,
                sidebar: "decashSidebar"
              },
              {
                path: '/docs/about/what-is-decash',
                component: ComponentCreator('/docs/about/what-is-decash', '78f'),
                exact: true,
                sidebar: "decashSidebar"
              },
              {
                path: '/docs/community/discord',
                component: ComponentCreator('/docs/community/discord', '4f7'),
                exact: true,
                sidebar: "decashSidebar"
              },
              {
                path: '/docs/community/faq',
                component: ComponentCreator('/docs/community/faq', '61e'),
                exact: true,
                sidebar: "decashSidebar"
              },
              {
                path: '/docs/getting-started/concepts',
                component: ComponentCreator('/docs/getting-started/concepts', '0c3'),
                exact: true,
                sidebar: "decashSidebar"
              },
              {
                path: '/docs/user-guide/claim-link',
                component: ComponentCreator('/docs/user-guide/claim-link', '0d4'),
                exact: true
              },
              {
                path: '/docs/user-guide/create-link',
                component: ComponentCreator('/docs/user-guide/create-link', '1d5'),
                exact: true,
                sidebar: "decashSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
