import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const title = "UPrep Academic Tech Docs";

const config: Config = {
  title: title,
  favicon: "img/TreesLogoFavicon.png",
  trailingSlash: true,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://makers.universityprep.org/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jpeters-uprep", // Usually your GitHub org/user name.
  projectName: "uprep-academic-tech-docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          // sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: title,
      logo: {
        alt: "UPrep Tree Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://github.com/jpeters-uprep/uprep-academic-tech-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: `Copyright © ${new Date().getFullYear()} UPrep`,
        },
        {
          title: "Feedback or Questions?",
          items: [
            {
              label: "Email June",
              href: "mailto:jpeters@universityprep.org",
            },
            {
              label: "Meet with June",
              href: "https://outlook.office.com/bookwithme/user/e2af8d4993df4d598f17a7a09eeb0ee6@universityprep.org?anonymous&ismsaljsauthenabled&ep=plink",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Schoology",
              href: "https://schoology.com",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
