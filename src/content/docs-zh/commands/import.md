---
title: Import — 在 KulmanLab CAD 中打开 DXF 或 JSON 文件
description: 使用导入命令在 KulmanLab CAD 中打开 DXF 或 KulmanLab JSON 文件。支持直线、圆、圆弧、多段线、样条线、文字、标注和引线。
keywords: [导入 DXF 文件, 在浏览器中打开 DXF, 在线导入 CAD 文件, 打开 DXF 文件, DXF 浏览器查看器, 导入 JSON CAD, KulmanLab 导入, 免费 CAD DXF 查看器, 加载图形, DXF 到浏览器, kulmanlab]
group: file
order: 1
---

# Import

**导入**命令从您的本地文件系统将现有图形加载到 KulmanLab CAD 中。支持标准 **DXF** 格式和 KulmanLab 的原生 **JSON** 格式。

## 如何导入文件

1. 单击屏幕顶部文件面板中的**导入**工具栏按钮（文件夹图标）。
2. 浏览器文件选择器打开。导航到您的图形文件并选择它。
3. 图形立即加载到画布上。视口自动适应所有图元。

或者，您可以将文件直接拖放到画布上。

## 支持的文件格式

| 格式 | 扩展名 | 使用时机 |
|--------|-----------|-------------|
| **DXF** | `.dxf` | 来自 FreeCAD、LibreCAD 或其他 CAD 工具的图形 |
| **JSON**（原生） | `.json` | 以前从 KulmanLab CAD 保存的图形 — 完整保真 |

## 从 DXF 导入的内容

KulmanLab 解析以下 DXF 图元类型：

| 图元类型 | DXF 代码 | 备注 |
|-------------|----------|-------|
| 直线 | `LINE` | |
| 圆 | `CIRCLE` | |
| 圆弧 | `ARC` | |
| 椭圆 | `ELLIPSE` | |
| 多段线 | `LWPOLYLINE` | |
| 样条线 | `SPLINE` | |
| 文字 | `TEXT`、`MTEXT` | |
| 标注 | `DIMENSION` | |
| 多重引线 | `MULTILEADER` | |
| Hatch | `HATCH` | 会读取图案的名称、比例和角度；图案库中不存在的名称会回退为 ANSI31。参阅 [Hatch](../hatch/) |

DXF 文件中存在的图层定义和线型表也会被导入。

使用不支持的 DXF 类型的图元将被静默跳过 — 图形的其余部分仍然加载。

## 文件命名和存储

导入的文件会保留其原始名称。如果该名称已被另一个已保存的图形使用，系统会自动添加类似 Finder/资源管理器风格的后缀（`myplan (2)`、`myplan (3)`，……），确保现有条目永远不会被覆盖。您之后可以从 [File Manager](../file-manager/#重命名文件) 重命名该文件。

导入后，图形自动保存到浏览器存储（IndexedDB），因此它出现在 [File Manager](../file-manager/) 面板中并在页面重新加载后仍然存在。

## 对当前图形的影响

导入会替换当前画布。没有合并或追加功能。如果您有未保存的更改，请先[Export Manager](../export-manager/)当前图形。

## 启动时

当页面加载时，KulmanLab 自动重新打开最近编辑的文件。如果没有已保存的文件，则加载默认示例图形。

## 故障排除

| 问题 | 可能原因 | 解决方法 |
|---------|-------------|-----|
| 导入后画布为空 | DXF 图元使用不支持的类型（例如 INSERT） | 图元被跳过 — 命令行会列出每个被跳过的类型及其数量，例如`Could not read INSERT: 12`。完全不是有效图形的文件则显示`Could not read <file>: not a valid drawing file` |
| 导入按钮无效 | 浏览器阻止了文件选择器 | 再次单击按钮；某些浏览器需要全新的用户操作 |
| 标注显示有误 | 来自使用非标准标注几何的工具的 DXF | 使用当前 DXF 版本从源应用程序重新导出 |

## 相关命令

- [Export Manager](../export-manager/) — 将当前图形下载为 DXF 或 JSON
- [File Manager](../file-manager/) — 浏览并恢复保存在浏览器中的图形
- [New File](../new-file/) — 开始空白图形
