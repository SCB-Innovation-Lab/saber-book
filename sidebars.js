/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    {
      type: 'category',
      label: 'Overview',
      items: ['overview/about-us', 'overview/our-services', 'overview/contact'],
    },
    /* {
      type: 'category',
      label: 'Insights',
      items: [
        'insights/travel-wallet',
        'insights/ssi-dids',
        'insights/cdbc-pov-and-multi-currency-gateway-solution',
        'insights/bnpl',
      ],
    }, */
    {
      type: 'category',
      label: 'Our Projects',
      items: [
        'our-projects/saber-flutter-ui',
        'our-projects/techx-badge',
        {
          type: 'category',
          label: 'Dex',
          items: [
            'our-projects/test/overview',
            'our-projects/test/components',
            'our-projects/test/glossary',
            'our-projects/test/technical-ref',
            'our-projects/test/address'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'link',
          label: 'GitHub',
          href: 'https://github.com/scb-techx',
        },
        {
          type: 'link',
          label: 'Medium',
          href: 'https://medium.com/scb-techx',
        },
        {
          type: 'link',
          label: 'SCB TechX',
          href: 'https://scbtechx.io',
        },
      ],
    },
  ],
};
