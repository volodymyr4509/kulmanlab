---
sidebar_position: 10
title: Comando leader — Dibujar anotaciones multireferencia con punta de flecha y texto en KulmanLab CAD
description: "El comando leader dibuja una anotación multireferencia en cuatro fases: punta de flecha, codo de quiebre, posición del texto y etiqueta escrita. La dirección del texto se ajusta automáticamente según la posición del quiebre. Solo importación en DXF — las referencias no se escriben al guardar."
keywords: [comando leader CAD, anotación multireferencia, referencia CAD, anotación con etiqueta y flecha, referencia con quiebre, dirección de texto CAD, kulmanlab]
---

# Leader

El comando `leader` dibuja una anotación multireferencia en cuatro pasos: una punta de flecha que toca una característica, una línea de referencia que se dobla en un quiebre, un ancla de texto y una etiqueta escrita. De todos los comandos de anotación, Leader es el único que incluye una fase interactiva de entrada de texto con una vista previa de cursor parpadeante.

## Anatomía de una multireferencia

```
  ◄── punta de flecha  (paso 2 — toca la característica)
      \
       \  línea de referencia
        \
         ●──── quiebre (paso 3) ──── ancla de texto (paso 4)
                                    Texto de etiqueta  (paso 5)
```

- **Punta de flecha** — el extremo en punta colocado en la característica que se anota.
- **Quiebre** — el codo donde la línea de referencia se dobla hacia el texto.
- **Ancla de texto** — donde se posiciona la etiqueta. El texto se alinea a la izquierda o derecha automáticamente.

## Dibujar una referencia

1. Escribe `leader` en el terminal o haz clic en el botón **Leader** de la barra de herramientas.
2. **Haz clic en la punta de flecha**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el quiebre** — el doblez en la referencia. El ángulo se bloquea en incrementos de 45°; escribe una longitud y presiona **Enter** para una colocación precisa. O escribe `X,Y` para introducir una coordenada absoluta.
4. **Haz clic en la posición del texto** — donde se ancla la etiqueta. Se aplican las mismas opciones: clic, bloqueo de ángulo + longitud, o `X,Y`.
5. **Escribe el texto de la etiqueta** — la vista previa en el lienzo se actualiza en tiempo real con un cursor parpadeante. Presiona **Enter** para colocar.

## Entrada de coordenadas (todas las fases de puntos)

En cualquier paso de selección de punto (punta, quiebre, posición del texto) puedes escribir una coordenada exacta en lugar de hacer clic:

1. Escribe el valor X (dígitos, `.` o `-`).
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]` confirmando que X está bloqueado.
3. Escribe el valor Y.
4. Presiona **Enter** para colocar el punto.

## Bloqueo de ángulo (pasos 3 y 4)

Después de cada punto colocado, el comando se ajusta a ejes de 45° cuando el cursor está suficientemente lejos. Mientras está bloqueado:
- La vista previa se ajusta al eje.
- Escribe una longitud y presiona **Enter** para colocar el siguiente punto a esa distancia exacta.

El bloqueo de ángulo y la entrada de coordenadas son mutuamente excluyentes — una vez que escribes un dígito sin una `,` previa, el comando lo interpreta como una distancia (el bloqueo de ángulo debe estar activo). Para introducir una coordenada absoluta en cambio, comienza con el número X seguido de una coma.

## Edición de la etiqueta de texto

Mientras escribes la etiqueta en el paso 5, puedes navegar y editar el texto antes de colocarlo:

| Tecla | Acción |
|-----|--------|
| Cualquier carácter imprimible | Insertar en la posición del cursor |
| `←` / `→` | Mover el cursor a la izquierda o derecha |
| `Backspace` | Eliminar el carácter a la izquierda del cursor |
| `Delete` | Eliminar el carácter a la derecha del cursor |
| `Enter` | Colocar la referencia |

## Dirección automática del texto

La alineación del texto se ajusta según la posición del cursor en relación con el quiebre:

| Posición del cursor | Dirección del texto |
|-----------------|---------------|
| A la **derecha** del quiebre | De izquierda a derecha desde el ancla de texto |
| A la **izquierda** del quiebre | De derecha a izquierda (anclado en el lado derecho) |

No se necesita ajuste manual — mueve el cursor al lado donde quieres la etiqueta y se alinea correctamente.

## Referencia de teclado

**Fases de puntos (punta, quiebre, posición del texto)**

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.`, `-` | Comenzar a escribir la coordenada X (luego `,` para bloquear X e introducir Y) |
| `,` | Confirmar X y pasar a la entrada de Y |
| `0`–`9`, `.`, `-` | Acumular distancia cuando el ángulo está bloqueado |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar la coordenada o distancia escrita |

**Fase de entrada de texto**

| Tecla | Acción |
|-----|--------|
| Carácter imprimible | Insertar en el cursor |
| `←` / `→` | Mover el cursor |
| `Backspace` | Eliminar a la izquierda |
| `Delete` | Eliminar a la derecha |
| `Enter` | Colocar la referencia |

| Tecla | Acción |
|-----|--------|
| `Escape` | Cancelar y restablecer al paso 2 |

## Editar una referencia existente

**Haz doble clic** en una multireferencia colocada para reabrir el editor de texto en **rich** mode. En rich mode puedes aplicar negrita, cursiva y anulaciones de fuente o altura por carácter, e insertar saltos de línea con `Enter`. Pulsa **Escape** para confirmar y cerrar.

Consulta [Editor de Texto — rich mode](../interface/text-editor#rich-mode) para la referencia completa.

## Añadir y eliminar brazos

- Para añadir un brazo de punta de flecha extra a una referencia existente: [Leader+](./leader-add)
- Para eliminar un brazo de una referencia que tiene dos o más: [Leader−](./leader-remove)

## DXF — solo importación

**Las referencias son solo de importación.** Las entidades `MLEADER` de los archivos DXF se leen y muestran correctamente, pero las referencias dibujadas en el editor **no se escriben** al guardar un archivo DXF. Usa las referencias para anotaciones visuales; evita depender de ellas para flujos de trabajo de ida y vuelta.
