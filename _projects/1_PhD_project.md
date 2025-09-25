---
# Required
title: "Robotic Needle Guidance with Multi sensing Fusion for Sub-millimetre Accuracy"
# You can use either a single date or a date range:
# 1) Single date (fallback if no range):
# date: 2025-01-01
# 2) Date range:
start: 2024-03-01
end: 'now' # or 'present' / 'now' for ongoing
# Date shown under the title: if start/end present, shows "YYYY.MM — Until now/End YYYY.MM";
# otherwise shows the single date as YYYY.MM.DD.
# If you prefer custom order on /projects, you can add:
order: 1

# Optional: short one-line used for card preview; falls back to excerpt/content
summary: "Real-time, tissue-aware robotic needle guidance via bioimpedance, ultrasound, and haptic fusion, achieving sub-mm accuracy."

# Optional: cover image path. Recommend placing under /images/projects/
# Example: /images/projects/your-cover.jpg
cover: /images/projects/binh.svg
tags: [PhD]
funding: "EPSRC"
---

## Project overview

<div class="project-funding-inline"><strong>Funding:</strong>
	{%- assign funds = page.funding | split: ';' -%}
	{%- for f in funds -%}
		{%- assign item = f | strip -%}
		{%- if item != '' -%}<span class="funding-chip">{{ item }}</span>{%- endif -%}
	{%- endfor -%}
</div>

Conventional image-guided needle insertion with US/CT/MRI still relies heavily on operator interpretation, which can lead to vessel puncture, pneumothorax, or nerve injury—particularly for less-experienced users. This project builds an active guidance system that fuses bioimpedance (BIOZ) sensing, robotic haptic feedback, and ultrasound signal processing to characterise tissue in real time and provide sub-millimetre guidance during deep insertions.

## Key research thrusts

- Electrodes and front-end design: minimise impedance drift and expand the effective sensitivity zone beyond the immediate electrode surface.
- Real-time tissue classification: high-rate, robust BIOZ acquisition and rapid calibration for continuous estimation of local tissue states.
- Sensor fusion with ultrasound: combine BIOZ features with ultrasound cues to infer target proximity and safe trajectories.
- Closed-loop robotic guidance: force/feedback-enabled motion control for precise tip placement and stable advancement.
- Workflow integration: sterile form-factor and compatibility with standard instruments and clinical practice.

## Early validation (CVC example)

- 100% venous entry success rate along the z-axis.
- 86.7% central positioning accuracy.
- Sub-millimetre precision across 24 trials with 0.66 mm RMS error.
- Real-time feedback at >100 Hz sampling.

## Hardware Recording

The project involved progressive hardware development from single-channel to multi-channel bioimpedance measurement systems:

### Version 1: Four-wire Single Channel
Initial prototype implementing standard four-wire bioimpedance measurement with dedicated excitation and sensing paths for baseline tissue characterization.

<div class="project-image">
  <img src="/images/projects/pcbs/binh_1_v1.png" alt="BINH v1 PCB - Single channel four-wire measurement" style="max-width: 100%; height: auto;">
</div>

### Version 2: 16-Channel Multiplexed System
Advanced multi-channel design enabling independent channel selection across 16 measurement points, allowing for spatial bioimpedance mapping and enhanced tissue discrimination.

<div class="project-image">
  <img src="/images/projects/pcbs/binh_16_v2.png" alt="BINH v2 PCB - 16-channel multiplexed measurement system" style="max-width: 100%; height: auto;">
</div>



## Impact

The platform establishes the foundation for next-generation minimally invasive procedures. It targets CVC, targeted drug delivery, biopsy guidance, and neuro-interventions, aiming to reduce workflow complexity while improving patient safety and outcomes.

## Documents

<a class="btn btn-google" href="https://bioimpedance.uk/" target="_blank" rel="noopener">
	<span class="btn-icon" aria-hidden="true">&#8599;</span>
	<span>Visit the Project Website</span>
</a>

<a class="btn btn-google" href="/files/transfer_report.pdf" target="_blank" rel="noopener">
	<span class="btn-icon" aria-hidden="true">&#8599;</span>
	<span>Download Transfer Report (PDF)</span>
</a>




