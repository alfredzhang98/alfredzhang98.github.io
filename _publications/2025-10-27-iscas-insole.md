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
citation: 'J. Chi, Z. Zhang, Q. Zhang, A. Demosthenous, and Y. Wu. &quot;Multimodal Smart Insole with Crossbar Crosstalk Compensation for Fall-Risk Prediction.&quot; <i>Submitted to IEEE International Symposium on Circuits and Systems (ISCAS)</i>, 2025.'
order: 102
---

**Status:** This paper has been submitted to IEEE International Symposium on Circuits and Systems (ISCAS) and is currently under review.

We present a portable multimodal smart insole that fuses a 253‑sensor plantar pressure array with a 6‑DoF IMU and an end‑to‑end deep learning pipeline for fall‑risk prediction. A double‑frame sensing scheme with offset calibration extends dynamic range and stabilizes initial resistance. To suppress crossbar sneak‑path crosstalk a compact U‑Net (33×15 input) reconstructs clean pressure maps (R² = 0.9307). The denoised pressure maps and IMU signals feed a 3D‑CNN + Transformer encoder for joint pose regression (13×3) and fall‑risk prediction, achieving up to 91% accuracy and enabling time‑aware early warnings when a person's fall probability steadily increases.

## My Role in This Work

1. Surpervised the two students on the first and second authors to design the insole hardware and develop the deep learning algorithms.
2. Contributed to the idea of using U-Net for crosstalk removal in the crossbar array.
3. Assisted in paper structuring and writing and drawing figures.