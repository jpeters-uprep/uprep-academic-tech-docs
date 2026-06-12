import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "home",
    {
      type: "category",
      label: "Software and VR",
      items: [
        {
          type: "category",
          label: "Fully Supported Software",
          link: {
            type: "doc",
            id: "software-and-vr/fully-supported-software",
          },
          items: [
            "software-and-vr/adobe-create-cloud",
            "software-and-vr/autodesk",
          ],
        },
        "software-and-vr/recommended-free-software",
        "software-and-vr/vr-software",
        "software-and-vr/unsupported-software",
      ],
    },
    "makers-tools",
    "programs-teams-and-clubs",
    "accessibility",
  ],
};

export default sidebars;
