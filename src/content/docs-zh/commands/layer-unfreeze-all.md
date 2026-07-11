---
title: LayerUnfreezeAll — 在 KulmanLab CAD 中解冻所有图层
description: 解冻所有图层命令一步清除图形中每个图层的冻结标志。
keywords: [解冻图层, 解冻所有图层 CAD, kulmanlab 图层管理, kulmanlab]
group: layer
order: 4
---

# LayerUnfreezeAll

`LayerUnfreezeAll`（解冻所有图层）命令立即清除图形中**每个图层**的冻结标志。无需选择或确认 — 一步运行完成。

## 使用方法

在命令行中输入 `LayerUnfreezeAll`，或单击工具栏中的**LayerUnfreezeAll**按钮（太阳图标）。所有冻结图层立即变为可见。

## 使用时机

通常在[LayerIsolate](../layer-isolate/)之后使用，以将所有图层恢复到正常可见状态。

## 行为详情

- 适用于所有图层，无论其当前状态如何。
- 不影响锁定或打印标志 — 只更改冻结标志。
- 命令立即完成，无提示。
