// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CNTUG Infra Labs 說明文件',
  tagline: '',
  url: 'https://docs.cloudnative.tw',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cloud-native-taiwan', // Usually your GitHub org/user name.
  projectName: 'Infra-Labs-Docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant-TW',
    locales: ['zh-Hant-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/',
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
        title: 'CNTUG Infra Labs 說明文件',
        logo: {
          alt: 'CNTUG',
          src: 'img/cntug.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'self-paced-labs',
            label: 'Labs',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'architecture/network',
            position: 'left',
            label: "Architecture"
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/usecase',
            label: 'Usecase',
            position: 'left'
          },
          {
            href: 'https://github.com/cloud-native-taiwan/Infra-Labs-Docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
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
                label: '開始使用 Openstack',
                to: '/docs/intro',
              },
              {
                label: '基礎教學',
                to: '/docs/category/基礎教學',
              },
              {
                label: '進階教學',
                to: '/docs/category/進階教學',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'CNTUG 社群',
            items: [
              {
                label: 'CNTUG 官方網站',
                href: 'https://cloudnative.tw/',
              },
              {
                label: 'Facebook 社團',
                href: 'https://fb.cloudnative.tw/',
              },
              {
                label: 'Telegram 群組',
                href: 'https://t.me/cntug',
              },
              {
                label: 'Meetup 活動',
                href: 'https://www.meetup.com/CloudNative-Taiwan/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cloud-native-taiwan/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CNTUG, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
