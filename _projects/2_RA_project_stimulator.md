---
# Required
title: "Developing the ultra‑low‑power embedded system for in vivo stimulation"
# You can use either a single date or a date range:
# 1) Single date (fallback if no range):
# date: 2025-01-01
# 2) Date range:
start: 2024-11-01
end: 2025-04-01
# Date shown under the title: if start/end present, shows "YYYY.MM — Until now/End YYYY.MM";
# otherwise shows the single date as YYYY.MM.DD.
# If you prefer custom order on /projects, you can add:
order: 3

# Optional: short one-line used for card preview; falls back to excerpt/content
summary: "Miniaturized implantable stimulator with wireless charging and BLE control for selective peripheral nerve stimulation."

# Optional: cover image path. Recommend placing under /images/projects/
# Example: /images/projects/your-cover.jpg
cover: /images/projects/soma.svg
tags: [RA]
funding: "Horizon 2020"
---



## Project overview

<div class="project-funding-inline"><strong>Funding:</strong>
	{%- assign funds = page.funding | split: ';' -%}
	{%- for f in funds -%}
		{%- assign item = f | strip -%}
		{%- if item != '' -%}<span class="funding-chip">{{ item }}</span>{%- endif -%}
	{%- endfor -%}
</div>

Damage to the central or peripheral nervous system, or limb amputation, causes severe functional deficits. Peripheral neuroprostheses can partially restore function by selectively stimulating peripheral axons via implanted nerve electrodes (del Valle & Navarro, 2018). Modern neural interfaces range from extraneural cuffs/flat‑interface electrodes to intraneural arrays placed within fascicles, trading invasiveness for selectivity and lower thresholds (Navarro et al., 2005; Schultz & Kuiken, 2011; Badia et al., 2011; 2016).

This project targets a fully functional neuroprosthesis for delivering sensory feedback and motor control within the SOMA program. The system centers on a miniaturized implantable stimulator that delivers selective stimulation to different nerve fascicles. Commands and charging are designed to be wireless for daily‑life usability. Within SOMA, US is explored as a system‑level link; the implant developed here provides BLE for configuration/communication and supports wireless charging.


<a class="btn btn-google" href="https://www.soma-fetproject.eu/" target="_blank" rel="noopener">
	<span class="btn-icon" aria-hidden="true">&#8599;</span>
	<span>Visit the Project Website</span>
</a>

## Key features
- Selective peripheral nerve stimulation.
- Wireless charging and control for implantable hardware.
- Low‑power BLE for control and communication.

## What I have done in this project?

- Power subsystem hardware: on top of predecessors’ work, extended the power/charging part circuits design and related firmware.
- System control and communication protocol and firmware: designed the overall control and BLE‑based communication protocol for the stimulator.

<figure>
	<img src="/images/projects/pcbs/soma_pcb.png" alt="SOMA stimulator PCB" loading="lazy" />
	<figcaption>Miniaturized implantable stimulator PCB (wireless charging and BLE control support).</figcaption>
  
</figure>