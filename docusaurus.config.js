/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'HackaTalk',
  tagline: 'A website for testing',
  url: 'https://dooboolab.github.io',
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
      links: [
        {to: 'docs/doc2', label: 'Component', position: 'left'},
        {to: 'docs/doc1', label: 'API', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/dooboolab/hackatalk-mobile',
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
              label: 'Docs',
              to: 'docs/doc1',
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
              to: 'blog',
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
