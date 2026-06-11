import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  plugins: [
    require.resolve('./plugins/howto-schema'),
  ],
  title: 'KulmanLab CAD Docs',
  tagline: 'Learn how to use KulmanLab CAD commands',
  favicon: 'img/favicon.ico',
  headTags: [
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/svg+xml', href: '/docs/img/favicon.svg' } },
    { tagName: 'link', attributes: { rel: 'alternate', type: 'text/plain', href: '/docs/llms.txt', title: 'LLM-readable site index' } },
    { tagName: 'link', attributes: { rel: 'alternate', type: 'text/plain', href: '/docs/llms-full.txt', title: 'LLM-readable full content' } },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'KulmanLab CAD',
        alternateName: 'KulmanLab',
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Web Browser',
        url: 'https://kulmanlab.com',
        description: 'KulmanLab CAD is a free browser-based CAD application for drawing, editing, and exporting DXF files. No installation required.',
        author: { '@type': 'Organization', name: 'KulmanLab', url: 'https://kulmanlab.com' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: [
          'Draw lines, circles, arcs, ellipses, polylines, splines, and text',
          'Edit with move, copy, rotate, scale, mirror, trim, extend, offset, fillet, chamfer',
          'Add dimensions: linear, aligned, continue, radius, diameter, angular',
          'Multileader annotations',
          'Layer management: isolate, match, make current',
          'Paper layouts and viewports with custom scale',
          'Import and export DXF files',
          'Print to PNG or PDF',
          'Runs offline in any modern browser',
          'Grid overlay with adaptive spacing and snap-to-grid',
          'Linetype picker: ByLayer, Continuous, and named DXF dash patterns',
          'Lineweight picker: ByLayer, Default, and fixed widths from 0.00 to 2.11 mm',
        ],
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'KulmanLab CAD Docs',
        url: 'https://kulmanlab.com/docs/',
        description: 'Complete command reference for KulmanLab CAD — free browser-based DXF editor.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://kulmanlab.com/docs/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],

  future: {
    v4: true,
  },

  url: 'https://kulmanlab.com',
  baseUrl: '/docs/',

  trailingSlash: false,
  onBrokenLinks: 'throw',

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
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'KulmanLab, KulmanLab CAD, CAD, drawing, commands, DXF, line, circle, arc, polyline, rectangle, free CAD browser'},
      {property: 'og:site_name', content: 'KulmanLab CAD'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KulmanLab CAD',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'commandsSidebar',
          position: 'left',
          label: 'Commands',
        },
        {
          href: 'https://kulmanlab.com',
          label: 'Open App',
          position: 'right',
        },
        {
          href: 'https://github.com/volodymyr4509/kulmanlab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Commands',
          items: [
            {label: 'Line', to: '/commands/line'},
            {label: 'Circle', to: '/commands/circle'},
            {label: 'Arc', to: '/commands/arc'},
            {label: 'Rectangle', to: '/commands/rectangle'},
            {label: 'Polyline', to: '/commands/polyline'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Open App', href: 'https://kulmanlab.com'},
            {label: 'GitHub', href: 'https://github.com/volodymyr4509/kulmanlab'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KulmanLab. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
