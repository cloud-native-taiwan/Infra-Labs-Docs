/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'intro',
    {
      type: 'category',
      label: '基礎教學',
      link: {
        type: 'generated-index',
        description: "5 分鐘內熟悉 Openstack 並且建立 VM。"
      },
      items: [
        'tutorial-basics/upload-ssh-key',
        'tutorial-basics/create-security-group',
        'tutorial-basics/create-vm',
        'tutorial-basics/congratulations',
      ]
    },
    {
      type: 'category',
      label: '進階教學',
      link: {
        type: 'generated-index',
      },
      items: [
        'tutorial-extra/create-private-network',
        'tutorial-extra/floating-ip',
        'tutorial-extra/create-volume',
      ]
    },
    'faq',
  ],
  architecture: [
    'architecture/network',
    'architecture/iaas',
  ],
  self_paced_labs: [
    'self-paced-labs',
    {
      type: 'category',
      label: 'Network',
      collapsed: true,
      link: {
        type: 'generated-index',
      },
      items: [
        'self-paced-labs/frr_bgp'
      ]
    },
    {
      type: 'category',
      label: 'Container',
      collapsed: true,
      link: {
        type: 'generated-index',
      },
      items: [
        'self-paced-labs/kaniko/index',
      ]
    },
    {
      type: 'category',
      label: 'Kubernetes',
      collapsed: true,
      link: {
        type: 'generated-index',
      },
      items: [
        'self-paced-labs/kops/index'
      ]
    },
  ],
};

module.exports = sidebars;
