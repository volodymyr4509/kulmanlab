---
title: Export Manager — 将图形下载为 DXF 或 JSON
description: 将图纸下载为 DXF 或 JSON，按实体类型勾选哪些内容进入文件。两种格式都承载几何、文字、标注、引线和填充，连同图层和线型。
keywords: [CAD DXF 导出, CAD 文件导出, 浏览器下载 DXF, 在线保存 DXF, JSON CAD 导出, KulmanLab 导出, 下载 CAD 文件, DXF 导出, 将图形保存为文件, DXF 下载]
group: file
order: 6
---

# Export Manager

`exportmanager` 命令把当前图纸下载到你的文件系统。两种格式并排排列——用于与其他 CAD 工具兼容的 **DXF**，以及用于在 KulmanLab CAD 内完整保存的 **JSON**——每种都有自己的清单，决定放什么进文件。

## 如何导出

1. 点击文件面板中工具栏的 **Export** 按钮（下载图标），或在命令行中输入 `exportmanager`。
2. **Export Manager** 弹窗以两列打开，**JSON** 和 **DXF**，每列列出图纸中的实体类型，附带复选框和数量。
3. 取消勾选你想排除的内容。初始状态下全部勾选。
4. 点击 **Export JSON** 或 **Export DXF**。文件下载到你的默认下载文件夹，弹窗随即关闭。

按 `Escape` 可关闭弹窗而不导出。

## 选择导出内容

两列列出相同的实体类型，每一项都带有图纸中的数量：

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

弹窗打开时全部处于勾选状态，因此直接导出就能得到整张图纸。取消某一类型的勾选，它就只会从这一个文件中排除。

- **两列彼此独立。**在 DXF 一侧取消勾选 Hatches，不会改变 **Export JSON** 的产出——每种格式各自保留自己的选择。
- **你没有的类型会变灰。**数量为 `0` 的行无法勾选，因此这份清单同时也是图纸内容的快速盘点。
- **数量是一次快照。**它在弹窗打开时统计，图纸在背后发生变化也不会更新。关闭后重新打开即可刷新。
- **不会删除任何东西。**取消勾选只塑造导出的文件，图纸本身原封不动。

**Linear Dimensions** 涵盖线性、对齐和连续标注：同一种实体类型，由三条不同的命令创建。半径、直径和角度各占一行。

要做切割文件，取消勾选 Text、四行标注、Leaders 和 Hatches，然后点击 **Export DXF**——参见[为激光切割准备 DXF](/zh/blog/prepare-dxf-for-laser-cutting/)。

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
- 标注（线性、对齐、连续、半径、直径、角度）
- Leaders（多重引线）
- Hatches，包括其图案、比例、角度和原点
- Layers 和 Linetypes

### DXF 导出

包含每种图元类型：

- Lines、Circles、Arcs、Ellipses、Polylines（导出为 `LWPOLYLINE`）、Splines
- Text
- 标注（线性、对齐、连续、半径、直径、角度）
- Leaders（多重引线）
- Hatches，包括其图案、比例、角度和原点
- Layers 和 Linetypes

文件按 AC1032 版 DXF 写出，因此从 KulmanLab 导出的图纸在其他支持 DXF 的工具中打开时注释仍在，而不是只剩光秃秃的几何。

至于每个接收端软件拿到之后怎么处理，仍然各不相同——各家对 DXF 的支持程度有别，较旧的版本可能忽略较新版本能读的实体。如果图纸必须在任何地方看起来完全一致，改用 [打印管理器](../print-manager/) 把它存成 PDF 或图片。

## 导出的文件名

下载的文件以当前图形文件命名（例如 `myplan.json`）。扩展名会根据所选格式而改变。 从未命名过的图纸会以 `drawing.dxf` 或 `drawing.json` 导出。

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
