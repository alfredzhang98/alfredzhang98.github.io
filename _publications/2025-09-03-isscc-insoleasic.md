---
title: "A 0.62 μW/sensor 82 fps Time-to-Digital Impedance Measurement IC with Unified Excitation/Readout Front-End for Large-Scale Piezo-Resistive Sensor Array"
collection: publications
category: conferences
permalink: /publication/2025-09-03-isscc-insoleasic
show_excerpt: false
excerpt: 'This paper presents a highly efficient time-to-digital impedance measurement IC featuring unified excitation/readout front-end for large-scale piezo-resistive sensor arrays.'
date: 2025-09-03
venue: 'IEEE International Solid-State Circuits Conference (ISSCC)'
publish_year: 2026
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
# paperurl: 'http://alfredzhang98.github.io/files/2025-09-03-isscc-insoleasic.pdf'
# bibtexurl: 'http://alfredzhang98.github.io/files/isscc26-insoleasic.bib'
citation: 'J. Li, Q. Zhang, D. Jiang, S. Ha, A. Demosthenous, and Y. Wu. &quot;A 0.62 μW/sensor 82 fps Time-to-Digital Impedance Measurement IC with Unified Excitation/Readout Front-End for Large-Scale Piezo-Resistive Sensor Array.&quot; <i>Submitted to IEEE Int. Solid-State Circuits Conf. (ISSCC)</i>, 2026.'
order: 49
---

**Status:** This paper has been submitted to IEEE ISSCC 2026 and is currently under review. Results will be announced once the review process is complete.

This work presents a highly energy-efficient time-to-digital impedance measurement integrated circuit designed specifically for large-scale piezo-resistive sensor arrays. The proposed IC achieves remarkable performance with only 0.62 μW power consumption per sensor while maintaining a high sampling rate of 82 fps. The unified excitation/readout front-end architecture enables scalable sensor interfacing for applications requiring dense sensor arrays with real-time impedance monitoring capabilities.


# My Role in This Work
1. Basic on the designed IC, I used FPGA to verify the functionality of the whole system including the insole sensor array, the readout IC, and the data processing unit.
2. Design the way to calibrate the measured impedance to ensure accurate readings across all sensors in the array.
3. Design the readout algorithm to process the raw data from the IC and convert it into meaningful impedance values for further analysis.
4. Apply the converted impedance data in downstream applications, such as gait analysis and health monitoring, to demonstrate the practical utility of the sensor array system.
5. Design related hardware and software system on a portable platform (NRF52840 + ASIC + IMU + power management).