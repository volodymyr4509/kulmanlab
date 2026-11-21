---
title: "BlockCreate Command — Make a Block from Objects"
description: "The BlockCreate command makes a named block from the objects you select, with a base point of your choice, and replaces them with one reference to it. The block can then be placed again and again with BlockInsert."
keywords: ["create block CAD", "make block from objects CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

The `blockcreate` command makes a **block**: a named group of objects stored once in the drawing and placed as often as you like with [Block Insert](../block-insert/). The objects you choose become the block, and in the drawing they are replaced by one reference to it, so nothing looks different.

## Making a block

1. Select the objects first if you like, then type `blockcreate` or click **Block Create** in the **Blocks** panel. A popup opens with the selection already in it.
2. Type a **Name**. It can't be empty, can't contain any of `< > / \ " : ; ? * | , =` or a backtick, and can't be the name of another block.
3. Click **Select objects** to add or take away objects: the popup hides, and you click objects or drag an area. Press **Enter** or **Space** to go back to the popup, where **Objects** shows how many are in.
4. Set the **Base point**, the point the block is placed by: type its X and Y, or click **Pick point** and click on the canvas (or type X,Y there). It starts at 0,0.
5. Click **OK**. The block is stored, the objects give way to one reference to it at the base point, and the terminal logs the block's name and how many objects it holds.

## Good to know

- **OK** stays disabled while something is wrong, and the message under the fields says what: an empty or unusable name, a name already in use, or no objects.
- **Escape** while choosing objects or the base point goes back to the popup with the block as it was. **Escape** in the popup cancels the command.
- The block is saved with the drawing and written to DXF along with its references.

---

*Related: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
