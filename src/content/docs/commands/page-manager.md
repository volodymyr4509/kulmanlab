---
title: PageManager Command — Edit Layout Paper Size and Scale
description: The PageManager command opens the page settings panel for the active layout, where you can change paper format, orientation, and drawing units scale.
keywords: [page manager, layout settings, paper size, drawing scale, layout space, kulmanlab]
group: layouts
order: 3
---

# PageManager

The `PageManager` command opens the page settings dialog for the active layout, letting you change the paper format, orientation, and the scale between drawing units and millimetres.

## Opening the Page Manager

- Type `PageManager` in the terminal, **or**
- Right-click a layout tab at the bottom and choose **Page Manager**.

## Settings

| Setting | Description |
|---------|-------------|
| **Paper format** | Standard sheet size (A4, A3, A2, Letter, etc.) |
| **Orientation** | Portrait or Landscape |
| **Scale** | Drawing units per mm — controls how model coordinates map to paper |

Changing the paper size or scale rescales all existing viewports in the layout proportionally so their positions remain correct.

## Notes

- PageManager only applies to paper layouts. It is not available in model space.
- To add a new layout, click the **+** button in the tab bar at the bottom.
- To rename or delete a layout, right-click its tab.
