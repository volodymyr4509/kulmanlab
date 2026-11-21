---
title: "Comando BlockCreate — Crear un bloque a partir de objetos"
description: "El comando BlockCreate crea un bloque con nombre a partir de los objetos seleccionados, con el punto base que elijas, y los sustituye por una referencia a él. El bloque se puede colocar después una y otra vez con BlockInsert."
keywords: ["crear bloque CAD", "bloque a partir de objetos CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

El comando `CrearBloque` crea un **bloque**: un grupo de objetos con nombre que se guarda una sola vez en el dibujo y se coloca tantas veces como quieras con [Block Insert](../block-insert/). Los objetos elegidos pasan a ser el bloque y en el dibujo se sustituyen por una referencia a él, así que nada cambia de aspecto.

## Crear un bloque

1. Selecciona antes los objetos si quieres, y escribe `CrearBloque` o haz clic en **Crear bloque** en el panel **Bloques**. Se abre una ventana con la selección ya incluida.
2. Escribe un **Nombre**. No puede estar vacío, no puede contener ninguno de `< > / \ " : ; ? * | , =` ni una comilla invertida, y no puede ser el nombre de otro bloque.
3. Haz clic en **Seleccionar objetos** para añadir o quitar objetos: la ventana se oculta y haces clic en objetos o arrastras un área. Pulsa **Enter** o **Space** para volver a la ventana, donde **Objetos** muestra cuántos hay.
4. Define el **Punto base**, el punto por el que se coloca el bloque: escribe su X e Y, o haz clic en **Indicar punto** y luego en el lienzo (o escribe X,Y allí). Empieza en 0,0.
5. Haz clic en **OK**. El bloque se guarda, los objetos dejan paso a una referencia a él en el punto base y el terminal registra el nombre del bloque y cuántos objetos contiene.

## Conviene saber

- **OK** permanece desactivado mientras algo falle, y el mensaje bajo los campos dice qué: un nombre vacío o inutilizable, un nombre ya en uso o ningún objeto.
- **Escape** al elegir objetos o el punto base vuelve a la ventana con el bloque como estaba. **Escape** en la ventana cancela el comando.
- El bloque se guarda con el dibujo y se escribe en DXF junto con sus referencias.

---

*Relacionado: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
