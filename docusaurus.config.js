const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'POROS Study Group Docs',
  tagline: 'Material Docs',
  url: 'https://porosub.github.io/',
  baseUrl: '/study-group/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'porosub', // Usually your GitHub org/user name.
  projectName: 'study-group', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Study Group',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'cys/intro',
          position: 'left',
          label: 'Cyber Security',
        },
				{
          type: 'doc',
          docId: 'ops/intro',
          position: 'left',
          label: 'Operation',
        },
				{
          type: 'doc',
          docId: 'dev/intro',
          position: 'left',
          label: 'Developer',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/porosub/study-group',
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
              label: 'Cyber Security',
              to: '/docs/cys/intro',
            },
						{
              label: 'Operation',
              to: '/docs/ops/intro',
            },
						{
              label: 'Developer',
              to: '/docs/dev/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://medium.com/porosfilkom',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/porosub/study-group',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
