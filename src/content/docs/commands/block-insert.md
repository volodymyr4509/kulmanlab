---
title: "BlockInsert Command — Place a Block from the Drawing's Blocks"
description: "The BlockInsert command opens a palette of previews of the drawing's blocks. Pick one, set its scale and rotation, and click or type a point to place it, once or again and again."
keywords: ["insert block CAD", "block palette CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

The `blockinsert` command opens a palette of previews of every block in the drawing and places the one you pick. Make blocks with [Block Create](../block-create/), or open a DXF file that has them.

## Placing a block

1. Type `blockinsert` or click **Block Insert** in the **Blocks** panel. The palette docks at the left with a preview tile for each block, twelve to a page; the arrows below the tiles turn the page.
2. Type in **Search blocks** to narrow the tiles by name.
3. Set **Scale** (it must be greater than 0) and **Rotation** in degrees. **Repeat placement** is on by default.
4. Click a block's tile. The block follows the cursor: click to place it by its base point, or type X,Y for an exact position. Once the cursor is locked to an angle, you can type a length instead.
5. With **Repeat placement** on, the block keeps following the cursor for the next copy until you press **Escape**. With it off, the command ends after one copy.

## Good to know

- To delete a block, click the bin on its tile and confirm. A block that has references in the drawing can't be deleted: its tile says **In use, can't be deleted**.
- A drawing with no blocks shows **This drawing has no blocks** in the palette.
- **Escape** closes the palette when nothing is being placed. It is one of the docked panels, which show one at a time at the left.

---

*Related: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
