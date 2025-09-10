---
# Required
title: "Smart Insole: Lab-Grade Gait Analytics for Home Rehabilitation"
# You can use either a single date or a date range:
# 1) Single date (fallback if no range):
# date: 2025-01-01
# 2) Date range:
start: 2025-03-01
end: 2025-09-01
# Date shown under the title: if start/end present, shows "YYYY.MM — Until now/End YYYY.MM";
# otherwise shows the single date as YYYY.MM.DD.
# If you prefer custom order on /projects, you can add:
order: 2

# Optional: short one-line used for card preview; falls back to excerpt/content
summary: "Lab-grade gait and joint monitoring at home with a 253-sensor insole and AI (60 Hz)."

# Optional: cover image path. Recommend placing under /images/projects/
# Example: /images/projects/your-cover.jpg
cover: /images/projects/insole.svg
tags: [RA]
funding: "UCL IHE; Rosetress Trust; NNTI funding"
---

## Project overview

<div class="project-funding-inline"><strong>Funding:</strong>
	{%- assign funds = page.funding | split: ';' -%}
	{%- for f in funds -%}
		{%- assign item = f | strip -%}
		{%- if item != '' -%}<span class="funding-chip">{{ item }}</span>{%- endif -%}
	{%- endfor -%}
</div>

Each year, over 100,000 knee replacements are performed in the United Kingdom, mostly for people aged over 50, and recovery can take up to a year. At the same time, many older adults face reduced strength, balance, and mobility: key signs of frailty that increase the risk of falls and long-term disability. While regular exercise and rehabilitation can help, there is currently no practical way to monitor physical recovery or daily movement quality with the high accuracy of lab-based systems. This limits both clinical care and safe self-managed exercise at home.

This project aims to develop a next-generation smart insole system that brings lab-grade gait analysis and body motion monitoring into daily life. Using a dense pressure sensor array and AI-based movement prediction, the system provides real-time, high-resolution data on walking patterns and joint function. It is designed for two user groups: patients recovering from surgeries such as total knee arthroplasty (TKA), and individuals aiming to improve exercise form and reduce injury risk. For clinicians, it supports remote monitoring and informed decision-making; for general users, it acts as a personalised digital coach. Scalable, low-cost, and clinically relevant, this system could offer a new tool to support healthy ageing, reduce hospital visits, and prevent movement-related complications.

Gait analysis is a crucial method for evaluating and monitoring an individual's health. A critical aspect of this analysis is understanding how forces are distributed across the foot while walking. Existing plantar pressure insole systems often lack the resolution needed for detailed foot analysis. To address this, a real-time insole system is presented with 253 high-density resistive pressure sensors (4 sensors per cm²) for each foot with a wireless transfer rate of 60 Hz. In addition, our work combines the insole hardware with a custom AI to predict six lower body joint landmark positions. This system provided accurate, high-resolution plantar foot pressures and insights into 3D joint movements in the lower body. It is a promising tool for applications in rehabilitation and sports performance optimisation.

## What I have done in this project?

- Designed the initial prototype electronics and baseline firmware (insole_pcb1).
- Building on the prototype, supervised two students (one MSc and one undergraduate) who used it to complete their theses; the work was published at ISCAS 2025: [paper link](https://ieeexplore.ieee.org/abstract/document/11044303).
- In the application‑specific integrated circuit (ASIC) phase, developed FPGA test and application code, and supervised another MSc to mitigate resistive‑matrix crosstalk using ML methods.
- Subsequently designed a lighter ASIC‑based PCB and firmware (insole_pcb2) and co‑authored (2nd author) a paper submitted to ISSCC (submitted 03/09/2025).

<figure>
	<img src="/images/projects/pcbs/insole_pcb1.png" alt="Insole PCB v1 prototype" loading="lazy" />
	<figcaption>Insole PCB v1 prototype (insole_pcb1)</figcaption>
</figure>

<figure>
	<img src="/images/projects/pcbs/insole_pcb2.png" alt="Insole PCB v2 (ASIC-based)" loading="lazy" />
	<figcaption>Insole PCB v2 (ASIC-based) (insole_pcb2)</figcaption>
</figure>

## Future work

- Refine the ASIC-based PCB system and firmware.
- Expand application-layer analytics and evaluation.
