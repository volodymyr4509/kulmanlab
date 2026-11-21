---
title: "Comando BlockInsert — Colocar un bloque de los bloques del dibujo"
description: "El comando BlockInsert abre una paleta con vistas previas de los bloques del dibujo. Elige uno, define su escala y giro, y haz clic o escribe un punto para colocarlo, una vez o una y otra vez."
keywords: ["insertar bloque CAD", "paleta de bloques CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

El comando `InsertarBloque` abre una paleta con vistas previas de todos los bloques del dibujo y coloca el que elijas. Crea bloques con [Block Create](../block-create/) o abre un archivo DXF que los tenga.

## Colocar un bloque

1. Escribe `InsertarBloque` o haz clic en **Insertar bloque** en el panel **Bloques**. La paleta se acopla a la izquierda con una tarjeta de vista previa por bloque, doce por página; las flechas bajo las tarjetas cambian de página.
2. Escribe en **Buscar bloques** para filtrar las tarjetas por nombre.
3. Define **Escala** (debe ser mayor que 0) y **Rotación** en grados. **Repetir colocación** viene activado.
4. Haz clic en la tarjeta de un bloque. El bloque sigue al cursor: haz clic para colocarlo por su punto base, o escribe X,Y para una posición exacta. Con el cursor fijado a un ángulo, puedes escribir una longitud.
5. Con **Repetir colocación** activado, el bloque sigue al cursor para la siguiente copia hasta que pulses **Escape**. Desactivado, el comando termina tras una copia.

## Conviene saber

- Para eliminar un bloque, haz clic en la papelera de su tarjeta y confirma. Un bloque con referencias en el dibujo no se puede eliminar: su tarjeta dice **En uso, no se puede eliminar**.
- Un dibujo sin bloques muestra **Este dibujo no tiene bloques** en la paleta.
- **Escape** cierra la paleta cuando no se está colocando nada. Es uno de los paneles acoplados, que se muestran de uno en uno a la izquierda.

---

*Relacionado: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
