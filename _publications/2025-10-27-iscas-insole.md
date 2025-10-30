---
title: "Multimodal Smart Insole with Crossbar Crosstalk Compensation for Fall-Risk Prediction"
collection: publications
category: conferences
permalink: /publication/2025-10-27-iscas-insole
show_excerpt: false
excerpt: 'We present a portable multimodal smart insole (253 pressure sensors + 6‑DoF IMU) with a U‑Net crossbar crosstalk remover and a 3D‑CNN + Transformer pipeline that jointly regresses pose and predicts fall risk with up to 91% accuracy.'
date: 2025-10-27
venue: 'IEEE International Symposium on Circuits and Systems (ISCAS)'
# slidesurl: ''
# paperurl: ''
# bibtexurl: ''
citation: 'J. Chi, Z. Zhang, Q. Zhang, A. Demosthenous, and Y. Wu. &quot;Multimodal Smart Insole with Crossbar Crosstalk Compensation for Fall-Risk Prediction.&quot; <i>Submitted to IEEE Int. Symp. Circuits Syst. (ISCAS)</i>, 2026.'
order: 195
---

**Status:** This paper has been submitted to IEEE International Symposium on Circuits and Systems (ISCAS) and is currently under review.

Gait analysis has always relied on latent indicators that can provide early warnings about underlying health conditions. Fall-risk prediction is one of the most important applications. In this paper, we present a portable smart insole system that couples a 253-sensor plantar pressure array with a 6-DoF IMU and an end-to-end deep learning fall risk prediction pipeline. A double-frame sensing scheme with offset calibration expands the sensor's dynamic range and improves the initial resistance distribution. To suppress sneak path crosstalk, a compact U-Net (33×15 input) reconstructs a crosstalk-free matrix from a cross-bar array, achieving R² = 0.9307. The clean pressure map and IMU signals are input into a 3D-CNN + Transformer encoder for joint pose regression (13×3) and fall-risk prediction, achieving accuracy of up to 91%. With this indicator, we can determine whether the cumulative probability of a person falling is steadily increasing over time. This further suggests that their physical health status may warrant additional examination, allowing the system to issue an early warning to the user. Fall itself is instantaneous, but the factors that lead to a fall are issues worth monitoring over the long term.

## My Role in This Work

1. Surpervised the two students on the first and second authors to design the insole hardware and develop the deep learning algorithms.
2. Contributed to the idea of using U-Net for crosstalk removal in the crossbar array.
3. Assisted in paper structuring and writing and drawing figures.