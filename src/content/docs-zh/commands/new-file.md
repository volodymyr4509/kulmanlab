---
title: New File — 在 KulmanLab CAD 中开始空白图形
description: New File 命令清空画布并开始一个全新的空白图形。带时间戳的文件名自动生成并保存到浏览器存储。
keywords: [新建 CAD 文件, 新建图形, 空白画布 CAD, 在线创建新图形, 开始新 DXF, KulmanLab 新建文件, 重置画布, 清空图形, kulmanlab]
group: file
order: 2
---

# New File

**New File** 命令清空画布并开始一个全新的空白图形。带时间戳的唯一文件名自动生成。

## 如何创建新文件

单击文件面板中的**新建文件**工具栏按钮（新建页面图标）。画布立即清空 — 无提示或确认对话框。

## 新文件包含的内容

新创建的文件开始时包含：

- 画布上**没有图元**。
- **一个默认图层**，名称为 `0`，颜色为白色，线型为 `Continuous`（连续）。
- 格式为 `kulman-Mon01_HH:MM:SS.dxf` 的**自动生成文件名**（例如 `kulman-May22_14:30:00.dxf`）。

文件自动保存到浏览器存储，并出现在[最近文件](../files/)中。

## 警告 — 未保存的工作将被丢弃

单击**New File**会在无警告的情况下丢弃当前画布上的所有图元。如果要保留当前图形，请先[Export](../export/)。

## 何时使用 New File vs Import

| 情况 | 推荐操作 |
|-----------|-------------------|
| 从头开始绘制 | **New File** |
| 打开现有 DXF 或 JSON 文件 | [Import](../import/) |
| 复制图形以处理变体 | [Export](../export/)当前文件，然后[Import](../import/)副本 |

## 相关命令

- [Import](../import/) — 打开现有 DXF 或 JSON 图形
- [Export](../export/) — 在开始新文件前下载图形
- [Files](../files/) — 从浏览器存储恢复以前的图形
