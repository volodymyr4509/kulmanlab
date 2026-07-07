---
title: Font Manager命令 — 在 KulmanLab CAD 中上传和管理自定义 TTF 字体
description: Font Manager 命令打开一个对话框，用于浏览、预览和选择字体，以及上传您自己的 .ttf 文件。已上传的字体保存在浏览器中，并在 DXF 导出时按名称嵌入。
keywords: [字体管理器, 自定义字体 CAD, 上传 TTF, 自定义字体样式 CAD, google 字体 CAD, 文字字体 CAD, kulmanlab]
---

# Font Manager

`FontManager` 命令打开一个对话框，用于浏览和选择字体，以及上传您自己的 `.ttf` 文件，供 [Text](../text/) 和 [Multileader](../leader/) 图元使用。

## 打开 Font Manager

- 在命令行中输入 `FontManager`，**或**
- 单击[文字编辑器](../../interface/text-editor/)工具栏中的 **Font Manager** 按钮。

## 字体分组

| 分组 | 内容 |
|------|------|
| **Default** | 内置无衬线字体 — 始终可用 |
| **User** | 您自己上传的 `.ttf` 字体（仅在添加至少一个后才显示） |
| **Free** | 15 种内置 Google Fonts 字体（EB Garamond、Fira Code、Inter、Lato、Merriweather、Montserrat、Nunito、Open Sans、Oswald、Playfair Display、Poppins、Raleway、Roboto、Roboto Condensed、Source Code Pro） |
| **System** | 常见的操作系统字体（Courier New、Georgia、Helvetica、Impact、Lucida Console、Tahoma、Times New Roman、Trebuchet MS、Verdana） |

单击列表中的任意字体，即可在右侧预览它 — 名称、字母样本、一个全字母句和数字。

## 上传自定义字体

1. 单击对话框底部的 **Add Font**（或在命令行中输入 `Font+` 直接打开文件选择器）。
2. 选择一个 `.ttf` 文件。仅支持 TrueType 字体 — 不支持 `.otf` 和 `.woff`/`.woff2`。
3. 文件名（不含扩展名）将成为 **User** 分组中该字体的名称。例如，上传 `MyFont.ttf` 会添加一个名为 `MyFont` 的字体。

已上传的字体会永久保存在浏览器中（IndexedDB），并在您下次打开 KulmanLab CAD 时自动重新加载。

## 删除自定义字体

将鼠标悬停在 **User** 分组中的字体上，然后单击其旁边的 **×** 按钮。内置字体（Default、Free、System）无法删除。

## 键盘参考

| 按键 | 操作 |
|-----|------|
| `↑` / `↓` | 在字体列表中上下移动选择项 |
| `Escape` | 关闭 Font Manager |

## DXF 兼容性

字体名称会作为内联格式代码嵌入到导出的 **MTEXT** 图元中，因此经过 KulmanLab CAD 往返处理的 DXF 会保留其字体分配。自定义字体*文件*不会嵌入到 DXF 中 — 只有字体*名称*会嵌入。如果您重新导入的图纸引用了尚未在此设备上上传的自定义字体，文字将以 Default 字体渲染，直到您上传同名字体为止。

## 相关命令

- [Text](../text/) — 放置应用字体选择的文字标签
- [Match Properties](../match-properties/) — 在图元之间复制文字高度，但不复制字体
