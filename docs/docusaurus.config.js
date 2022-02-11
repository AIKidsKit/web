// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Kids Kit',
  tagline: 'Artificial Intelligence 101 for kids and their grown-ups',
  url: 'https://polite-wave-072dd570f.1.azurestaticapps.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AIKidsKit', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/AIKidsKit/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AIKidsKit/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AI Kids Kit',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ai-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'learn',
            position: 'left',
            label: 'Learn',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/resources', label: 'Resources', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/AIKidsKit/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Kids Corner',
            items: [
              {
                label: 'MakeCode',
                href: 'https://www.microsoft.com/makecode',
              },
            ],
          },
          {
            title: 'Parents Corner',
            items: [
              {
                label: 'Lobe.AI',
                href: 'https://www.lobe.ai/',
              },
            ],
          },
          {
            title: 'Teachers Corner',
            items: [
              {
                label: 'Learn CS',
                href: 'https://docs.microsoft.com/en-us/learn/modules/teach-ap-computer-science-principles-makecode/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
