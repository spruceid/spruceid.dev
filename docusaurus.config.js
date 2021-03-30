const remarkImportPartial = require('remark-import-partial');

module.exports = {
  title: 'Spruce Developer Portal',
  tagline: '$sudo grok spruce --asap',
  url: 'https://spruceid.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/logo.png',
  organizationName: 'spruceid', // Usually your GitHub org/user name.
  projectName: 'spruceid.dev', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Spruce',
      logo: {
        alt: 'Spruce Site Logo',
        href: "https://spruceid.com/",
        src: 'assets/logo.png',
      },
      items: [
        {
          label: '.dev Portal',
          to: '/docs/',
          useBaseUrl: "/docs/",
          position: 'left',
        },
        {
          to: '/docs/didkit/', 
          label: 'DIDKit',
          useBaseUrl: "/didkit/",
          position: 'left'
        },
        {
          to: '/docs/credible', 
          label: 'Credible',
          useBaseUrl: "/credible/",
          position: 'left'
        },
        {
          href: 'https://sprucesystems.medium.com/',
          label: 'Blog',
          useBaseUrl: "/blog/",
          position: 'left'
        },
        {
          href: 'https://github.com/spruceid/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'SpruceID.com',
              to: 'https://spruceid.com',
            },
          ],
        },
        {
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/sprucesystems',
            },
          ],
        },
        {
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/sprucesystemsinc/',
            },
          ],
        },
        {
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/spruceid/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spruce Systems. Built with Docusaurus.`,
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
            'https://github.com/spruceid/',
          remarkPlugins: [remarkImportPartial],
        },
        blog: {
          blogSidebarTitle: 'Titles',
          blogSidebarCount: 'ALL',  
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/spruceid/spruceid.dev/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
