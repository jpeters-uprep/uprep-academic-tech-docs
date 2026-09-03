# Contributing to UPrep Academic Tech Docs

Standards for writing and editing pages on this site, so new pages stay
consistent with the rest of the wiki by default. This is aimed at both human
editors and AI tools working on the repo. If you're an AI coding agent, also see
[AGENTS.md](AGENTS.md) for repo commands, verification steps, and git/PR
conventions — this file is about page content, that one is about how to work in
the repo.

## Frontmatter — required on every page

Every `.mdx` page needs frontmatter with at least these fields:

```yaml
---
title: Short Sidebar Title
description: One sentence. Feeds search, link previews, and AI retrieval.
owner: Academic Technology # who decides the content is correct
maintainer: June Peters
audience: [faculty] # faculty | students | families | staff
tags: [schoology, gradebook]
sidebar_position: 2 # only where order matters within a folder
---
```

- `description` should be a genuinely useful one-sentence summary — it's what
  search results and AI tools see, not filler.
- `owner` is whoever actually decides if the content is correct (e.g. `SLT`,
  `Registrar / IT`, `Academic Technology`) — not necessarily the same as
  `maintainer`, who keeps the page technically up to date.
- Add `reviewers: [Name, Name]` when a page has named subject-matter reviewers
  beyond the owner (see `chromebook-access-control.mdx` for an example).
- Add `ai_editing: suggest-only` plus an `ai_edit_note` explaining why, on any
  page an AI tool should propose changes to rather than edit directly (policy
  pages, SLT-owned content, canon software/hardware lists). See
  [Policy and suggest-only pages](#policy-and-suggest-only-pages) below.

## Titles and headings

Docusaurus renders the frontmatter `title` as the page's H1 automatically.
**Never add a `# Heading` in the page body** — it duplicates the title. Start
body content at `##`.

## Links

The site mixes two link styles on purpose, not by accident:

- **Root-absolute** (`/software/fully-supported`) for links that cross into a
  different section of the site (families → software, faculty → students, etc.).
  These are validated at build time by `onBrokenLinks: "throw"`.
- **File-relative without the extension** (`./add-section`,
  `../schoology-manager`) for links to a sibling or nearby page within the same
  section/folder.

Do **not** add a `.mdx` extension to a relative link — every other link on the
site omits it, and Docusaurus resolves and validates the extensionless form just
fine. Also avoid ambiguous relative paths like `](../.)` — if a link needs more
than one or two `../` segments to reach its target, use a root-absolute link
instead.

## FAQ pages

FAQ pages (see `docs/*/faq/`) follow one pattern — keep new ones consistent with
it:

- **Title is the question itself**, phrased as a genuine, grammatically complete
  question — "How do I add a section to my class?", not "Add a Section" and not
  a sentence fragment with a question mark tacked on ("Add a Section?").
- `## Question` restates the title (can add detail the title can't fit).
- `## Answer` leads with the answer in the first sentence, then detail, then a
  link to the authoritative source (vendor docs, or another page on this site).
- `## Related` at the end, linking to 1–3 other pages a reader with this
  question might also need. This turns each FAQ into a hub instead of a dead end
  — every FAQ page should have one.

## One fact, one place

Every factual claim should live on exactly one page. Every other page that needs
it links to that page instead of restating it. Before adding a fact, check
whether it's already documented elsewhere — if so, link to it rather than
copying it. This is what keeps a correction from needing to be applied in two or
three places (and inevitably missing one).

## Naming and contact hygiene

- **"UPrep"** in prose; **"University Prep"** only in formal/legal contexts.
  Never "U Prep" (two words).
- **Domain is `@universityprep.org`**, never `@uprep.org`.
- **Schoology** in prose; note once, where it's first introduced, that the
  vendor's current product name is "Schoology Learning."
- **Fusion** or **Autodesk Fusion** in prose, never "Fusion 360" — Autodesk
  dropped "360" from the product name in a January 2024 rebrand. Autodesk's own
  URL slugs still say `fusion-360` (e.g.
  `/learn/ondemand/curated/sheet-metal-with-fusion-360`); leave those alone,
  only the display text changes.
- **June Peters' pronouns are they/them.** Never "she/her/herself."
- Contact info (June's email, IT support, the Registrar) should point to one
  canonical source rather than being retyped on every page, so a typo or a
  staffing change is a one-line fix, not a site-wide hunt.

## Policy and suggest-only pages

A page marked `ai_editing: suggest-only` in its frontmatter should not be edited
directly by an AI tool — propose the change in conversation instead and let a
human apply it. This is a convention, not a filesystem-level lock: it doesn't
stop a human editing the file, and it doesn't stop a careless tool that skips
reading frontmatter first. Treat it as a clearly posted sign, not a lock — and
always read a file's frontmatter before editing it.

## Before you commit

- [ ] `npm run build` succeeds (`onBrokenLinks: "throw"` — a bad link blocks the
      deploy, so build before you commit, not after).
- [ ] `npm run typecheck` passes.
- [ ] `npm run format:md` produces no diff.
- [ ] Any moved or renamed page has a redirect entry, and you've clicked at
      least one old URL to confirm it forwards correctly.
- [ ] No page body starts with a duplicate `#` heading.
