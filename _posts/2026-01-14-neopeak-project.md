---
layout: single
title: "NeoPeak: Smart Terminal on ESP32 with LVGL (alfredzhang98/NeoPeak)"
date: 2026-01-14
tags: [Hardware, AIOT, GUI]
author_profile: true
toc: true
---

I'm excited to announce the completion of NeoPeak, a compact smart terminal built on ESP32. This project ports the original Peak project to ESP32 ecosystem, integrating LVGL graphics library and modular firmware architecture.

![NeoPeak](/images/projects/pcbs/neopeak.png)

- Repository: <https://github.com/alfredzhang98/NeoPeak>

## Project Overview

NeoPeak is an ultra-compact intelligent terminal featuring:
- **LVGL Graphics Framework** (v8.1) - Embedded GUI library
- **MVC Architecture** - Modular firmware design
- **Message Framework** - Pub/Sub event system  
- **WiFi/Bluetooth** - ESP32 wireless capabilities
- **3D Engine** (in development) - 3D model visualization
- **Display**: 240×240 16-bit color TFT, 60fps target

## Key Technical Highlights

### Hardware Platform: ESP32-Pico-V3-02

MCU selection requires:
- Main frequency > 150MHz
- RAM ≥ 200KB (112KB for LVGL buffer)
- SPI speed ≥ 50Mbps (for 60fps refresh)

ESP32-Pico-V3-02 chosen for:
- Dual-core, built-in WiFi/Bluetooth
- Arduino ecosystem friendly
- Cost and availability

### Firmware Architecture

Three-layer design:
- **HAL**: Low-level drivers, sensors, MCU peripherals
- **Framework**: LVGL display, page lifecycle, message system
- **Application**: UI pages and business logic

### Display Integration

- Driver: ST7789 (240×240, 16-bit) via TFT_eSPI
- SPI clock: > 50MHz (IOMUX required for maximum speed)
- LVGL buffer: 112KB, dynamically allocated
- Memory: ESP32's fragmented 300KB dataRAM requires careful allocation order

### Page Scheduling

Inspired by iOS ViewController, implements structured page lifecycle:
- **onViewLoad**: Initialize views
- **onViewDidAppear**: Transition animations
- **onViewWillDisappear/onViewDidDisappear**: Cleanup
- **onViewDidUnload**: Resource cleanup

### Message Framework

Pub/Sub system for sensor data and events:
- HAL publishes sensor events (GPS, IMU, barometer)
- Data processors subscribe and compute metrics
- UI pages subscribe to processed data
- Reactive updates on event changes

### Key Implementation Details

- **LVGL Porting**: Display/File/Input port implementations
- **SPI Config**: HSPI MISO pin remap to GPIO26 (avoid GPIO12 flash boot conflict)
- **Memory**: Dynamic allocation for display buffer, careful initialization order
- **File System**: `lv_fs_drv_t` must be static/global (not stack-allocated)

## References

- [Peak](https://github.com/peng-zhihui/Peak) - Original hardware and firmware
- [X-Track](https://github.com/FASTSHIFT/X-Track) - Framework architecture and LVGL integration
- [LVGL](https://github.com/lvgl/lvgl) - Graphics library
- [TFT_eSPI](https://github.com/Bodmer/TFT_eSPI) - SPI display driver
- [ESP32 Docs](https://docs.espressif.com/) - Microcontroller resources

Check out the repository and contribute!
