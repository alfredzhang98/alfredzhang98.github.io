---
layout: single
title: "PyTorch Study Repo: Quick Tour and Index (alfredzhang98/PyTorch_study)"
date: 2025-10-28
tags: [Study, ML]
author_profile: true
toc: true
---

This post summarizes my learning repository "PyTorch_study" based on notes and examples from the book/course “PyTorch 深度学习实战”, so I can quickly review it later.

- Repo links:
  - GitHub: <https://github.com/alfredzhang98/PyTorch_study>
  - README: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Readme.md>

## Repository structure

As described in the README, the repo is organized into three parts:

1) Basic: PyTorch prerequisites and fundamentals (NumPy basics, Tensor basics and advanced usage)
2) Training: Building and training neural networks with PyTorch (autograd, nn module, optim module, and the end-to-end training loop)
3) Application: Practical projects (e.g., computer vision, LSTM motion prediction)

Currently, the Basic, Training and Application parts are complete.

## Basic

- Environment sanity check
  - 00_test.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Basic/00_test.ipynb>
    - Print PyTorch/CUDA versions and GPU info; quick CPU vs GPU timing.

- NumPy basics
  - 01_numpy.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Basic/01_numpy.ipynb>
    - Array creation; shape/ndim; reshape; arange/linspace; axis-wise reductions; simple plotting.

- NumPy for images
  - 02_numpy_pics.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Basic/02_numpy_pics.ipynb>
    - PIL/OpenCV interop; channel split/merge; argsort, top-k, and mask generation mini tasks.

- Tensor basics and advanced
  - 03_tensor.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Basic/03_tensor.ipynb>
    - Scalar/vector/matrix concepts; core Tensor operations.
  - 04_tensor_advanced.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Basic/04_tensor_advanced.ipynb>
    - Indexing/index_select; unbind; chunk/split; and more practical snippets.

## Training

- Data pipeline
  - 05_dataset_dataload.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/05_dataset_dataload.ipynb>
    - Dataset/DataLoader; MNIST example; transform parameters explained.

- Vision preprocessing
  - 06_torchvision.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/06_torchvision.ipynb>
    - torchvision.transforms: Resize/CenterCrop/RandomCrop/FiveCrop/Flip/Normalize/RandomErasing; PIL ↔ Tensor conversions.

- Pretrained models and fine-tuning
  - 07_models.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/07_models.ipynb>
    - torchvision.models (e.g., GoogLeNet); transfer learning; utils.make_grid/save_image visualization.

- Convolution and visualization
  - 08_conv01.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/08_conv01.ipynb>
    - Conv2d parameters (kernel/stride/padding/dilation/groups/bias); manual convolution; dilated conv; channel-wise pseudo-color visualization.

- Loss functions
  - 10_loss.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/10_loss.ipynb>
    - Squared loss, MSE/MAE recap and derivation snippets.

- Autograd and gradients
  - 11_grad.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/11_grad.ipynb>
    - Feedforward networks; derivatives/partials and an intuition for autograd.

- Optimization methods
  - 12_optimise.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/12_optimise.ipynb>
    - BGD/SGD/Mini-batch; Momentum, RMSProp, Adam; NumPy-only demos (shuffle indices, batch splits, parameter updates); common pitfalls and references.

- Training visualization
  - 14_visual.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/14_visual.ipynb>
    - wandb/tensorboard usage; SummaryWriter for logging loss; suggested log directory structure and commands.

- Speeding up training and distributed
  - 15_train_fast.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Training/15_train_fast.ipynb>
    - Single-/multi-GPU and multi-node setups; nccl/gloo backends; init_process_group/env vars; enumerating devices; DDP best practices.

## Application

- Image Classification
  - 16_image_classification_basic.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/16_image_classification_basic.ipynb>
    - Basics of image classification tasks.
  - 17_image_cllssification_code.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/17_image_cllssification_code.ipynb>
    - Practical code examples for image classification.

- Image Segmentation
  - 18_image_segmentation_basic.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/18_image_segmentation_basic.ipynb>
    - Introduction to image segmentation concepts.
  - 19_image_segmentation_code.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/19_image_segmentation_code.ipynb>
    - Implementation of segmentation models (UNet etc.) and training scripts.
    - 19_image_segmentation_train.py: Training script for image segmentation.
    - 19_image_segmentation_val.py: Validation script for image segmentation.

- NLP Basics
  - 20_nlp_basic.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/20_nlp_basic.ipynb>
    - Natural Language Processing fundamentals.
  - 21_nlp_attention.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/21_nlp_attention.ipynb>
    - Understanding Attention mechanisms.

- Advanced NLP Applications
  - 22_lstm_emotion.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/22_lstm_emotion.ipynb>
    - Emotion classification using LSTM.
    - 22_lstm_emotion.py: Python script version of the LSTM emotion classification.
  - 23_bert_emotion.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/23_bert_emotion.ipynb>
    - Emotion classification using BERT.
  - 24_bart_abstract.ipynb: <https://github.com/alfredzhang98/PyTorch_study/blob/main/Application/24_bart_abstract.ipynb>
    - Text summarization/abstract generation using BART.
    - 24_bart_main.py: Main execution script for BART summarization.
    - 24_bert_test.py: Test script for BERT/BART models.

## How to use

- Browse online: click the GitHub links above to open each .ipynb.
- Run locally: create a fresh Conda env; install PyTorch, torchvision, numpy, matplotlib, Pillow, etc.; then open in Jupyter or VS Code.

## Next steps

The learning phase is now complete. The next major update will focus on implementing modern architectures from scratch:

- **Hand-rolled Implementations**: Implementing Transformer, ViT (Vision Transformer), and other key frameworks from scratch to understand their inner workings.
- **Minimal Testing**: Performing minimal testing to verify the correctness of these implementations.
- Keep refining training/tuning/visualization patterns into reusable templates.

If you're also learning PyTorch, feel free to star and discuss!

