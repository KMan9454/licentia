import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Licentia NEXT',
  tagline: 'Licentia NEXT: Unleash Power, Indulge Desire, Leave Heads Rolling. Skyrim Modlist with LotD, OStim, lots of fun and variety!',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://licentia.quest',
  baseUrl: '/',

  organizationName: 'akzar-dev',
  projectName: 'licentia',
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
          routeBasePath: '/',
          // editUrl:
          //   'https://github.com/akzar-dev/licentia/edit/main/website/',
          // showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/licentia-social-card.jpg',
    colorMode: {
      // defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      // style: 'dark', # follows the color mode
      title: '',
      logo: {
        alt: 'Licentia NEXT Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'installationAndSetupSidebar',
          position: 'left',
          label: 'Installation & Setup',
        },
        {
          to: '/how-to-update',
          position: 'left',
          label: 'How to Update',
        },
        {
          to: '/changelog',
          position: 'left',
          label: 'Changelog',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faqsSidebar',
          position: 'left',
          label: 'FAQs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://github.com/akzar-dev/licentia',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      // style: 'dark',
      logo: {
        alt: 'Licentia NEXT Logo',
        src: 'img/logo.png',
        height: 48,
      },
      links: [
        {
          label: 'Discord',
          href: 'https://discord.gg/vermishub',
        },
        {
          label: 'Nexus Mods',
          href: 'https://www.nexusmods.com/skyrimspecialedition/mods/132744',
        },
        {
          label: 'Load Order Library',
          href: 'https://loadorderlibrary.com/lists/licentia-next',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/akzar-dev">akzar</a> and Licentia NEXT team`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      // selector: '.markdown img',
      selector: 'img.zoomable',
      background: {
        light: 'rgba(255, 255, 255, 0.8)',
        dark: 'rgba(50, 50, 50, 0.7)'
      },
      config: {
        margin: 80,
      }
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
