import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WePLi',
  tagline: 'Share Your Sound, Unite in Harmony',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://wepli-test.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // url: 'https://wepli.site',
  // baseUrl: '/',
  url: 'https://wepli-team.github.io/WePLi-Document',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WePLi-Test', // Usually your GitHub org/user name.
  projectName: 'WePLi-Document', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],


  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'techblog',
        routeBasePath: 'techblog',
        path: './techblog',
        include: ['**/*.{md,mdx}'],
        editUrl:
          'https://github.com/facebook/docusaurus/edit/master/website/my-blog',
        postsPerPage: 2,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      disableSwitch: true // 다크 모드 스위치 비활성화
    },
    navbar: {
      title: 'WePLi',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Document',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/techblog', label: 'Tech Blog', position: 'left'},
        {
          href: 'https://github.com/dongx0915/WePLi-Android',
          label: 'Download',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'WebSite',
          items: [
            {
              label: 'Document',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Channel',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/dongx._.2/',
            },
          ],
        },
        {
          title: 'Development',
          items: [
            {
              label: 'Github-Android',
              href: 'https://github.com/dongx0915/WePLi-Android',
            },
            {
              label: 'GitHub-Server',
              href: 'https://github.com/dongx0915/WePLi-Android',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
