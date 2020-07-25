/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'HackaTalk',
  tagline: 'Opensource chat app that works on iOS, android and web',
  url: 'https://website.hackatalk.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'dooboolab',
  projectName: 'hackatalk-website',
  themeConfig: {
    navbar: {
      title: 'HackaTalk',
      logo: {
        alt: 'HackaTalk',
        src: 'img/logo.png',
      },
      items: [
        { to: 'docs/client-doc1', label: 'Client', position: 'left' },
        { to: 'docs/server-doc1', label: 'Server', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/dooboolab/hackatalk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Client',
              to: 'client-doc1',
            },
            {
              label: 'Server',
              to: 'server-doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://dooboolab.com/joinSlack',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/dooboolab',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
