---
title: KulmanLab CAD — 命令参考
description: KulmanLab CAD 命令参考 — 完整涵盖 KulmanLab CAD 中每一个绘图、编辑、标注、图层、测量和文件命令的使用指南。
keywords: [KulmanLab, KulmanLab CAD, CAD 命令, 免费浏览器 CAD, DXF 在线编辑器, 绘图命令, kulmanlab 命令, kulmanlab]
---

# KulmanLab CAD — 命令参考

欢迎使用 **KulmanLab CAD** 命令参考。[KulmanLab CAD](https://kulmanlab.com) 是一款免费的基于浏览器的 CAD 工具，用于绘制、编辑和导出 DXF 文件，无需安装。使用侧边栏可按面板分类浏览所有可用命令。

## 形状

| 命令 | 功能 |
|---------|-------------|
| [Line](./commands/line/) | 在两点之间绘制直线 |
| [Polyline](./commands/polyline/) | 绘制多段开放路径 |
| [Rectangle](./commands/rectangle/) | 绘制轴对齐矩形 |
| [Circle](./commands/circle/) | 通过圆心和半径绘制圆 |
| [Arc](./commands/arc/) | 通过三点绘制圆弧 |
| [Ellipse](./commands/ellipse/) | 通过圆心和两轴绘制椭圆 |
| [Text](./commands/text/) | 在画布上放置文字标签 |
| [Spline CV](./commands/spline-cv/) | 通过放置控制顶点绘制样条线 |
| [Spline Fit](./commands/spline-fit/) | 绘制穿过所有单击点的样条线 |

## 编辑

| 命令 | 功能 |
|---------|-------------|
| [Move](./commands/move/) | 将选中图元移动到新位置 |
| [Copy](./commands/copy/) | 将选中图元复制到新位置 |
| [Rotate](./commands/rotate/) | 将选中图元绕基点旋转 |
| [Mirror](./commands/mirror/) | 将选中图元沿直线镜像 |
| [Scale](./commands/scale/) | 将选中图元绕基点缩放 |
| [Delete](./commands/delete/) | 从图形中删除选中图元 |
| [Trim](./commands/trim/) | 在交点处修剪线段 |
| [Extend](./commands/extend/) | 将直线延伸到最近的边界交点 |
| [Offset](./commands/offset/) | 以指定距离创建图元的平行副本 |
| [Fillet](./commands/fillet/) | 用切弧将两条直线的角连接为圆角 |
| [Chamfer](./commands/chamfer/) | 在两条直线或多段线之间切出直线斜角 |
| [Undo](./commands/undo/) | 撤销上一步操作 |
| [Redo](./commands/redo/) | 重做上一步撤销的操作 |

## 标注

| 命令 | 功能 |
|---------|-------------|
| [Leader](./commands/leader/) | 绘制带箭头和文字的多重引线标注 |
| [Leader+](./commands/leader-add/) | 向已有多重引线添加额外的引线臂 |
| [Leader−](./commands/leader-remove/) | 从已有多重引线中删除一条引线臂 |
| [Dimension Linear](./commands/dim-linear/) | 添加水平或垂直标注 |
| [Dimension Aligned](./commands/dim-aligned/) | 添加与两点对齐的标注 |
| [Dimension Continue](./commands/dim-continue/) | 从上一个标注链接新标注 |
| [Dimension Radius](./commands/dim-radius/) | 为圆或圆弧添加半径标注 |
| [Dimension Diameter](./commands/dim-diameter/) | 为圆添加直径标注 |
| [Dimension Angular](./commands/dim-angular/) | 为两条直线、圆弧或圆添加角度标注 |

## 图层

| 命令 | 功能 |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | 将单击图元所在图层设为当前图层 |
| [LayerMatch](./commands/layer-match/) | 将选中图元的图层重新指定为与源图元相同 |
| [LayerIsolate](./commands/layer-isolate/) | 冻结除选中图元所在图层以外的所有图层 |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | 一键解冻所有图层 |

## 布局

| 命令 | 功能 |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | 通过拾取两个角点在图纸布局中创建视口 |
| [ViewportCopy](./commands/viewport-copy/) | 将视口复制到新位置 |
| [PageManager](./commands/page-manager/) | 编辑当前布局的图纸大小和比例 |

## 导航

| 命令 | 功能 |
|---------|-------------|
| [Pan](./commands/pan/) | 点击并拖动以移动视口 |
| [Zoom In](./commands/zoom-in/) | 放大视口 |
| [Zoom Out](./commands/zoom-out/) | 缩小视口 |
| [Fit](./commands/fit/) | 将所有图元适应到视口中 |

## 测量

| 命令 | 功能 |
|---------|-------------|
| [Distance](./commands/distance/) | 测量两点之间的距离 |
| [Angle](./commands/angle/) | 测量三点构成的角度 |

## 样式

| 命令 | 功能 |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | 将颜色、图层及其他特性从一个图元复制到其他图元 |
| [Font Manager](./commands/font-manager/) | 浏览、选择字体，并上传自定义 TTF 字体 |

## 文件

| 命令 | 功能 |
|---------|-------------|
| [Import](./commands/import/) | 打开 DXF 或 JSON 图形文件 |
| [New File](./commands/new-file/) | 开始一个全新的空白图形 |
| [Files](./commands/files/) | 浏览并恢复最近的图形 |
| [Print](./commands/print/) | 将图形区域导出为图像或 PDF |
| [Export](./commands/export/) | 以 DXF 或 JSON 格式下载图形 |
| [Wipe Storage](./commands/wipestorage/) | 清除浏览器存储中的所有图形 |

## 恢复

如果应用程序在每次启动时崩溃（例如，在处理极大坐标后），可以在 URL 末尾追加 `?reset` 以清除所有本地存储数据：

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

这将删除浏览器本地数据库中的所有内容并开始一个全新的空白图形。`?reset` 参数会自动从 URL 中移除。当[Wipe Storage](./commands/wipestorage/)命令因应用无法加载而无法访问时，请使用此方法作为最后手段。

## 命令的工作方式

每个命令遵循相同的模式：

1. **激活** — 单击工具栏按钮，或在屏幕底部的命令行中输入命令名称。
2. **按提示操作** — 命令行显示下一步所需的输入内容。
3. **完成或取消** — 大多数命令在最后一次输入后自动完成。随时按 **Escape** 键可取消。

## 选择对象

几个编辑命令（Move、Copy、Rotate、Mirror、Scale、Delete）共用相同的选择行为：

- **单击**图元以选择或取消选择。
- **向右拖动**（从左到右）进行严格选择 — 只有完全在框内的图元才会被选中。
- **向左拖动**（从右到左）进行交叉选择 — 与选框相交的任何图元都会被选中。
- 按 **Enter** 或**空格**确认选择并进入下一步。
