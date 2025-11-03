---
layout: single
title: "atom_aiot: AIoT Hardware Research Notes (alfredzhang98/atom_aiot)"
date: 2025-11-03
tags: [Hardware, AIoT]
author_profile: true
toc: true
---

This post collects my notes and experiments on AIoT (Artificial Intelligence of Things) hardware. Code, hardware files, and bring‑up logs are maintained in the open-source repository atom_aiot for reuse and future expansion.

- Repository:
	- GitHub: <https://github.com/alfredzhang98/atom_aiot>

## What this repo is for

Hands-on “edge intelligence + hardware,” including:
- Power‑up (“bring‑up”) of common development boards and peripheral drivers (UART, I2C/SPI, timers, PWM, DMA, ADC, etc.)
- Sensor/actuator integration and debugging (IMU, barometer, motors/servos, displays, radios, etc.)
- Reusable firmware scaffolding and drivers (primarily C/C++)
- Measurements and tuning logs (power, timing, link robustness, debouncing and filtering)

## Repository structure (growing)

- `iot_developboards/`: PCB development boards hardware folder
	- Schematics, layouts (e.g., Altium), BOM, test points, power domains
	- Board bring‑up notes, self‑test checklist, minimal working examples

- `iot_items/`: Interface code folder
	- Peripheral interface/driver code (GPIO, UART, I2C, SPI, PWM, ADC, DMA)
	- Device modules (IMU, pressure/force, displays, motors/servos, radios)
	- Small reference demos with comments
