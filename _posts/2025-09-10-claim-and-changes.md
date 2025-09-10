---
layout: single
title: "Claim: This site and key changes versus the original template"
date: 2025-09-10
tags: [Changelog]
author_profile: true
---

This post documents, in English, the changes made on top of AcademicPages/Minimal Mistakes, the rationale, and compatibility measures. It also credits the original work.

Acknowledgment & Reference
- The site is based on AcademicPages (MIT). Repository: [link](https://github.com/academicpages/academicpages.github.io)
- The theme is Minimal Mistakes (MIT). Many thanks to the authors and community.

Why these changes
- Better project presentation for research: ordering, date ranges, ongoing highlights, and readable funding.
- Bilingual browsing (EN/中文) while preserving the correct author name across translations.
- Layout stability across very short and very long pages; avoid footer “floating” and translation UI layout shifts.

Key changes (features and UX)
- Projects index and cards
  - Sorting: primary by front matter `order` (ascending), then by date (descending).
  - Ongoing detection based on start/end (supports `present/now`); subtle green glow on ongoing cards.
  - Media area fixed at 5:3; SVG covers use contain (no crop, full view).
  - Tighter preview text and spacing.
  - Date range normalized as “YYYY.MM — Until now/End time”.
- Funding rendering
  - Funding shown as non-wrapping chips on cards and project pages.
  - On cards, show up to two chips; overflow summarized as “+N”, with a tooltip listing the rest.
- Publications UX
  - Citation lines standardized (IEEE-like) with a copy-to-clipboard button.
  - Small spacing/presentation refinements; no noisy “read more” by default.
- Content authoring
  - PhD project: concise overview and research thrusts; links to the project website and transfer report; normalized dates/tags/cover.
  - RA (insole) project: summary written; contributions and future work clarified; images added; paper link included; metadata normalized.
  - RA (stimulator) project: limited to confirmed facts (stimulation, wireless charging, BLE); contributions summarized; PCB image included.
- Language switching and Chinese fit
  - EN / 中文 switch at top-right (Google Translate underneath); choice persisted via localStorage.
  - Tag “RA” mapped to the Chinese label “研究助理”.
  - Author name enforced: "Qingyu Zhang" ↔ "张清宇"; auto-fixes common mistranslations (e.g., “张庆余”, “Qinyu Zhang”).
  - The switch labels are protected from translation and auto-reset to “EN | 中文”.
  - A MutationObserver catches late DOM changes from the translator to keep labels/names correct.
- Layout and stability
  - Force-hide Google Translate banner/iframes to prevent layout shifts.
  - Footer reworked to a flex-based sticky layout:
    - When content is short, the footer sticks to the bottom.
    - When content is long, it follows naturally after content.
    - No absolute positioning; avoids “floating in the middle”.
  - CV page: stays centered and at a sensible width even with `author_profile: false`; the PDF viewer has a fallback link.

Compatibility and fallbacks
- Language switching applies run-time text corrections only; it does not modify source Markdown.
- If embedded PDF is blocked, the CV page provides an “Open in new tab” link.
- Sticky footer uses `body{display:flex;min-height:100vh;flex-direction:column}` and `#main{flex:1}`; works with and without the sidebar.

Key files (selected)
- Pages and layouts:
  - `_pages/projects.html` (projects index, ordering/filtering, funding on cards)
  - `_layouts/cv-layout.html` (CV layout with centered title and content area)
  - `_layouts/single.html`, `_layouts/archive.html` (based on Minimal Mistakes structure)
- Styles (Sass):
  - `_sass/layout/_custom_overrides.scss` (project cards, funding chips, PDF viewer, sticky-footer structure)
  - `_sass/layout/_footer.scss` (flex-based footer; no floats)
  - `_sass/layout/_navigation.scss` (language switch styling and interaction)
- Scripts:
  - `assets/js/lang-switch.js` (load translator, hide banner, switch logic, name correction, tag mapping, delayed fixes)
  - `_includes/scripts.html` (script includes)

Development & deployment
- Docker files are provided for quick local preview (Docker Desktop + docker compose).
- Ruby/Jekyll workflows also remain viable, consistent with AcademicPages.

Licensing & attribution
- MIT licenses from AcademicPages and Minimal Mistakes are preserved, along with acknowledgments.
- This document is an incremental changelog over the original template to help future maintainers.

Notes to readers
- If you see translation-induced issues on specific pages, please open an issue with page URL and browser details.

This post publicly claims authorship for the current site implementation and summarizes deltas from the original template.
