---
title: "Point 命令 — 在 KulmanLab CAD 中向图纸放置点"
description: "Point 命令在每次单击、输入的 X,Y，或沿锁定方向的距离处放置一个点，直到按 Enter、Space 或 Escape。点以圆点绘制，带有当前图层和颜色，并以 DXF POINT 图元的形式往返。"
keywords: ["CAD 点命令", "放置点 CAD", "DXF POINT 图元", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

`point` 命令在每次指定时放置一个点，并保持活动，直到你按 Enter、Space 或 Escape。点是没有大小的位置：以小圆点绘制，带有当前图层和颜色，并存为 `POINT` 图元。

## 放置点

1. 在命令行中输入 `point`，或单击 Shapes 面板的最后一个按钮 **Point**。
2. 在点要放置的位置**单击**，或输入 `X,Y` 并按 **Enter** 指定精确位置。每次指定都会放置一个点，命令行会记录其坐标；命令保持活动以放置下一个。
3. 或者从[矢量图钉](../../interface/vector-pins/)锁定一个方向并输入距离——点会恰好落在沿该方向相应距离处。
4. 按 **Enter**、**Space** 或 **Escape** 结束。Enter 和 Space 仅在没有正在输入内容时才会结束。

## 点的外观

点在任何缩放级别下都绘制为半径 1 px 的圆点，因此缩小时仍可见，放大时也不会变大。图纸的点样式（`$PDMODE` 和 `$PDSIZE`）尚未读取，所以无论 DXF 怎么说，每个点都是圆点。

## 编辑点

选中的点有一个夹点，可用来移动它。框选在点位于框内时会选中它，无论向哪个方向拖动。

[Move](../move/)、[Copy](../copy/)、[Rotate](../rotate/)、[Mirror](../mirror/) 和 [Scale](../scale/) 对点的作用与对其他图元相同。属性窗口显示 Position X 和 Position Y，以及颜色和图层。

## DXF — POINT 图元

点作为 `POINT` 图元以位置、颜色和图层（组码 10/20、62 和 8）读入和写出 DXF，也会通过保存的 JSON 往返。以前导入时会被跳过。[Export Manager](../export-manager/) 把 Points 列为单独一行，因此可以将它们排除在导出之外。

---

*相关：相同的坐标输入见 [Line](../line/)，沿某方向按固定距离放置点见 [Vector Pins](../../interface/vector-pins/)。*
