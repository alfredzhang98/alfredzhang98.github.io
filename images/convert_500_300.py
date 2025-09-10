import cv2
import numpy as np
import os

def resize_with_padding(img, target_w=500, target_h=300, color=(255, 255, 255)):
    h, w = img.shape[:2]
    scale = min(target_w / w, target_h / h)
    new_w, new_h = int(w * scale), int(h * scale)
    resized = cv2.resize(img, (new_w, new_h))

    top = (target_h - new_h) // 2
    bottom = target_h - new_h - top
    left = (target_w - new_w) // 2
    right = target_w - new_w - left

    padded = cv2.copyMakeBorder(
        resized, top, bottom, left, right,
        cv2.BORDER_CONSTANT, value=color
    )
    return padded


# 获取脚本目录
script_dir = os.path.dirname(os.path.abspath(__file__))
source_path = os.path.join(script_dir, "projects")
name = "BiNH.png"

# 检查文件存在
img_path = os.path.join(source_path, name)
if not os.path.exists(img_path):
    raise FileNotFoundError(f"{img_path} not found.")

# 读取图像
img = cv2.imread(img_path)

# #fdfcfd
# convert hex to BGR
color_setting = tuple(int("fdfcfd"[i:i+2], 16) for i in (4, 2, 0))

# 调整尺寸 + 填充
out = resize_with_padding(img, 500, 300, color=color_setting)

# 保存结果
output_dir = os.path.join(source_path, "output")
os.makedirs(output_dir, exist_ok=True)
out_path = os.path.join(output_dir, name)

cv2.imwrite(out_path, out)
print(f"✅ 已输出结果到: {out_path}")
