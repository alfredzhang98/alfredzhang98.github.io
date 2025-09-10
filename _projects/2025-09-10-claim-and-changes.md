---
layout: single
title: "Claim: This site and key changes versus the original template"
date: 2025-09-10
tags: [Changelog]
author_profile: true
---

Below is a concise, factual list of what was changed or added on top of the original AcademicPages/Minimal Mistakes template.

- Projects index and cards
  - Sorting: primary by front matter `order` (ascending), then by date (descending).
  - Ongoing projects detection and subtle green glow on the card edge.
  - Media aspect ratio fixed to 5:3; SVG covers use contain (no crop, full view).
  - Preview text truncation and cleaner spacing.
  - Date range rendering normalized (e.g., “YYYY.MM — Until now”).

- Funding rendering
  - Funding displayed as non-wrapping chips on cards and single pages.
  - Show at most two chips on cards; overflow summarized as "+N" with tooltip listing the rest.

- Publications UX
  - Citations standardized (IEEE-like) and copy-to-clipboard button added.
  - Spacing/presentation refinements for entries; optional read-more kept off by default.

- Content authoring
  - PhD project: concise overview and research thrusts; links to project website and transfer report; normalized dates/tags/cover.
  - RA (insole) project: summary written; contributions and future work clarified; images added; paper link included; dates/cover normalized.
  - RA (stimulator) project: simplified to verified facts (stimulation, wireless charging, BLE); contributions summarized; PCB image added.

- Language switching (replaces theme toggle)
  - Top-right EN / 中文 switch powered by Google Translate; selection persisted via localStorage.
  - RA tag mapped to Chinese label “研究助理”.
  - Author name enforced: "Qingyu Zhang" ↔ "张清宇"; common mistranslation variants corrected automatically.
  - Switch labels protected from translation and auto-reset to “EN | 中文”.
  - DOM MutationObserver ensures late content is also corrected.

- Layout robustness
  - Google Translate banner/iframe force-hidden to prevent layout shift.
  - Footer converted to flex-based sticky layout (always at the bottom, no absolute positioning).

- General hygiene
  - Leading slashes and asset paths normalized where needed.
  - Dark theme UI removed; site operates with a light look. (Dark stylesheet import left in place to avoid build issues.)
  - The generic text-corrections framework was deliberately removed on request.

- Dev environment
  - Docker-based local development verified (Docker Desktop + docker compose).

This post serves as a public claim of authorship for the current site and a transparent summary of the delta from the original template.
