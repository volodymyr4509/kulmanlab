---
title: Export Manager — 将图形下载为 DXF 或 JSON
description: 将当前图纸下载为 DXF 或 JSON。两种格式都承载所有实体类型——几何、文字、标注、引线和填充——连同图层和线型。
keywords: [CAD DXF 导出, CAD 文件导出, 浏览器下载 DXF, 在线保存 DXF, JSON CAD 导出, KulmanLab 导出, 下载 CAD 文件, DXF 导出, 将图形保存为文件, DXF 下载]
group: file
order: 6
---

# Export Manager

`exportmanager` 命令将当前图形下载到你的文件系统。有两种格式可用，以并排卡片形式展示：**DXF** 用于与其他 CAD 工具兼容，**JSON** 用于在 KulmanLab CAD 内进行完全保真的保存——每张卡片都精确列出该格式携带哪些图元类型。

## 如何导出

1. 点击文件面板中工具栏的 **Export** 按钮（下载图标），或在命令行中输入 `exportmanager`。
2. **Export Manager** 弹窗打开，并排显示 JSON 和 DXF 卡片，每张卡片列出导出内容。
3. 点击一张卡片选择格式——**JSON** 或 **DXF**。
4. 点击 **Export \<FORMAT\>** 按钮。文件会自动下载到你的默认下载文件夹。

按 `Escape` 可关闭弹窗而不导出。

## 选择格式

| 格式 | 扩展名 | 最适合 | 限制 |
|------|--------|--------|------|
| **JSON**（原生） | `.json` | 保存工作以便在 KulmanLab CAD 中重新打开 | 与其他 CAD 工具不兼容 |
| **DXF** | `.dxf` | 与 FreeCAD、LibreCAD 等共享 | 能保留多少取决于接收端的软件 |

**何时使用 JSON：** 只要你想保存一份完整的工作副本。JSON 是 KulmanLab 的原生格式，能精确保留每一个图元——包括标注、引线、hatch 以及所有图层数据。

**何时使用 DXF：** 当你需要将图形交给使用其他 CAD 应用程序的人时。导出的文件使用 AC1032 DXF 格式，可在大多数兼容 DXF 的工具中打开。

## 每种格式导出的内容

### JSON 导出

包含每种图元类型：

- Lines、Circles、Arcs、Ellipses、Polylines、Splines
- Text
- 标注（线性、对齐、连续、半径、直径）
- Leaders（多重引线）
- Hatches，包括其图案、比例、角度和原点
- Layers 和 Linetypes

### DXF 导出

包含每种图元类型：

- Lines、Circles、Arcs、Ellipses、Polylines（导出为 `LWPOLYLINE`）、Splines
- Text
- 标注（线性、对齐、连续、半径、直径）
- Leaders（多重引线）
- Hatches，包括其图案、比例、角度和原点
- Layers 和 Linetypes

文件按 AC1032 版 DXF 写出，因此从 KulmanLab 导出的图纸在其他支持 DXF 的工具中打开时注释仍在，而不是只剩光秃秃的几何。

至于每个接收端软件拿到之后怎么处理，仍然各不相同——各家对 DXF 的支持程度有别，较旧的版本可能忽略较新版本能读的实体。如果图纸必须在任何地方看起来完全一致，改用 [打印管理器](../print-manager/) 把它存成 PDF 或图片。

## 导出的文件名

下载的文件以当前图形文件命名（例如 `myplan.json`）。扩展名会根据所选格式而改变。

## Export Manager 与打印管理器的区别

| 特性 | Export Manager | 打印管理器 |
|------|-----------------|------------|
| 输出 | 矢量源文件（.dxf / .json） | 位图图像（.png / .jpeg / .webp / .pdf） |
| 可在其他工具中编辑 | 是（DXF） | 否 |
| 保留 layers 和 linetypes | 是 | 否（渲染为平面） |
| 捕获标注和引线 | 是 | 是 |

需要可编辑文件时使用 **Export Manager**。需要可视化快照时使用[打印管理器](../print-manager/)。

## 相关命令

- [Import](../import/) — 打开 DXF 或 JSON 文件
- [打印管理器](../print-manager/) — 将画布导出为 PNG、JPEG、WebP 或 PDF 图像
- [File Manager](../file-manager/) — 浏览保存在浏览器存储中的图形
