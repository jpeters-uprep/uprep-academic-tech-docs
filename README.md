# UPrep Academic Tech Docs

This repo powers **[makers.universityprep.org](https://makers.universityprep.org/)**, the Academic Tech / Makers wiki for students, faculty, and staff. It's a [Docusaurus](https://docusaurus.io/) site — content is written in Markdown/MDX, and Docusaurus builds it into a static site that's published to GitHub Pages.

Maintained by June Peters (jpeters@universityprep.org).

## How it works

- The actual Docusaurus project lives in the `website/` subfolder (not the repo root). All commands below are run from inside `website/`.
- Pages are Markdown/MDX files under `website/docs/`. Each folder in `docs/` becomes a section of the site (e.g. `docs/it-support/`, `docs/software-and-vr/`).
- The sidebar/navigation is defined manually in `website/sidebars.ts` — adding a new `.mdx` file doesn't automatically add it to the nav; it has to be added to `sidebars.ts` too.
- Site-wide settings (title, nav bar, footer, URL, GitHub link) live in `website/docusaurus.config.ts`.
- Images and static assets go in `website/static/`.
- The live site is served from the `gh-pages` branch, which is generated output — don't edit it directly. It gets overwritten every time someone runs the deploy command (see below).

## Requirements

- **Node.js 20+** (repo currently developed on Node 22)
- **npm** (this project uses `package-lock.json`; note the `website/README.md` boilerplate mentions `yarn`, but npm is what's actually used here — ignore the yarn references)
- Git access to [github.com/jpeters-uprep/uprep-academic-tech-docs](https://github.com/jpeters-uprep/uprep-academic-tech-docs)

## Setting up in VS Code

1. Clone the repo:
   ```bash
   git clone https://github.com/jpeters-uprep/uprep-academic-tech-docs.git
   cd uprep-academic-tech-docs
   ```
2. Open the folder in VS Code.
3. Install the recommended extension: **Prettier - Code formatter** (`esbenp.prettier-vscode`). The repo's `.vscode/settings.json` already turns on format-on-save and Prettier for Markdown files, so once the extension is installed, formatting is automatic.
4. Install dependencies:
   ```bash
   cd website
   npm install
   ```
5. Start the local dev server:
   ```bash
   npm start
   ```
   This opens the site at `http://localhost:3000` and live-reloads as you edit files.

## Common tasks

**Add or edit a page**
Edit or create an `.mdx` file under `website/docs/`. Every page needs frontmatter at the top, e.g.:
```md
---
title: Page Title
sidebar_position: 1
---
```
Then add the new file's path to `website/sidebars.ts` so it shows up in navigation.

**Add an image**
Drop it in `website/static/img/` and reference it as `/img/your-file.png`.

**Check formatting**
```bash
npm run format:md
```

**Type-check the config files**
```bash
npm run typecheck
```

**Build locally (sanity check before deploying)**
```bash
npm run build
```
Output goes to `website/build/`. Docusaurus is configured with `onBrokenLinks: "throw"`, so a broken internal link will fail the build — fix these before deploying.

## Deploying

There's no CI/CD pipeline — deployment is a manual command run locally, which pushes a static build to the `gh-pages` branch:

```bash
cd website
GIT_USER=<your-github-username> npm run deploy
```

You'll be prompted for GitHub credentials (use a personal access token, not your password, if prompted). This builds the site and force-pushes it to `gh-pages`, which GitHub Pages serves at the custom domain configured in `website/static/CNAME` (`makers.universityprep.org`).

If you have SSH set up with GitHub instead:
```bash
USE_SSH=true npm run deploy
```

## Repo structure at a glance

```
uprep-academic-tech-docs/
├── website/                    # the actual Docusaurus project
│   ├── docs/                   # all wiki content (Markdown/MDX)
│   ├── src/css/custom.css      # theme overrides
│   ├── static/                 # images, favicon, CNAME
│   ├── docusaurus.config.ts    # site-wide config
│   ├── sidebars.ts             # nav structure
│   └── package.json            # scripts (start, build, deploy, etc.)
├── .vscode/settings.json       # shared editor/formatting settings
└── .prettierrc                 # formatting rules (80-char width, prose wrap)
```

## Questions

Contact June Peters (jpeters@universityprep.org) for access or questions about site structure.
