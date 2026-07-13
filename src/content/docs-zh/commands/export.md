---
title: Export — 在 KulmanLab CAD 中将图形下载为 DXF 或 JSON
description: Export 命令将当前图形下载为 DXF 或 JSON（原生）文件。JSON 保留所有图元（包括标注和引线）；DXF 与其他 CAD 工具兼容。
keywords: [导出 DXF, 导出 CAD 文件, 浏览器下载 DXF, 在线保存 DXF, 导出 JSON CAD, KulmanLab 导出, CAD 文件下载, DXF 导出, 保存图形到文件, DXF 下载, kulmanlab]
group: file
order: 5
---

# Export

**Export** 命令将当前图形下载到您的文件系统。提供两种格式：**DXF** 用于与其他 CAD 工具兼容，**JSON** 用于在 KulmanLab CAD 中完整保存。

## 如何导出

1. 在文件面板中单击**Export** 工具栏按钮（下载图标）。
2. 弹出**Export Manager**。
3. 单击格式卡片选择格式 — **JSON** 或 **DXF**。
4. 单击**Export** 按钮。文件自动下载到您的默认下载文件夹。

## 选择格式

| 格式 | 扩展名 | 最适用于 | 限制 |
|--------|-----------|----------|-------------|
| **JSON**（原生） | `.json` | 保存工作以在 KulmanLab CAD 中重新打开 | 与其他 CAD 工具不兼容 |
| **DXF** | `.dxf` | 与 FreeCAD、LibreCAD 等共享 | 标注和引线不被导出 |

**何时使用 JSON：** 任何时候想要保存完整副本的工作。JSON 是 KulmanLab 的原生格式，完整保留每个图元 — 包括标注、引线和所有图层数据。

**何时使用 DXF：** 需要将图形移交给使用其他 CAD 应用程序的人时。导出的文件使用 AC1012 DXF 格式，可以在大多数支持 DXF 的工具中打开。

## 每种格式导出的内容

### JSON 导出

包含所有图元类型：

- 直线、圆、圆弧、椭圆、多段线、样条线、文字
- 标注（线性、对齐、连续、半径、直径）
- 多重引线
- 图层定义和线型表

### DXF 导出

包含仅几何图元：

- 直线、圆、圆弧、椭圆、多段线（导出为 `LWPOLYLINE`）、样条线、文字
- 图层定义和线型表

**DXF 中不包含：** 标注图元和多重引线。这些使用 KulmanLab 特定的数据结构，无法在标准 DXF 中准确表示。如果您的图形有注释，请使用 JSON 或[Print](../print/)以可视方式捕获它们。

## 导出的文件名

下载的文件以当前图形文件命名（例如 `myplan_May22_14:30:00.json`）。扩展名根据所选格式更改。

## Export vs Print 的区别

| 功能 | Export | Print |
|---------|--------|-------|
| 输出 | 矢量源文件（.dxf / .json） | 光栅图像（.png / .jpeg / .webp / .pdf） |
| 可在其他工具中编辑 | 是（DXF） | 否 |
| 保留图层和线型 | 是 | 否（渲染为平面） |
| 捕获标注和引线 | 仅 JSON | 是 |

需要可编辑文件时使用**Export**。需要可视快照时使用[Print](../print/)。

## 相关命令

- [Import](../import/) — 打开 DXF 或 JSON 文件
- [Print](../print/) — 将画布导出为 PNG、JPEG、WebP 或 PDF 图像
- [Files](../files/) — 浏览保存在浏览器存储中的图形
