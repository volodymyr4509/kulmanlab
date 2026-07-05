---
sidebar_position: 7
title: Comando Text — Colocar Etiquetas MTEXT en KulmanLab CAD
description: El comando Text coloca una etiqueta MTEXT multilínea con formato enriquecido. Haz clic en una posición, escribe en el editor emergente y pulsa Escape para confirmar. Haz doble clic en cualquier etiqueta existente para reabrir el editor.
keywords: [comando text CAD, MTEXT, colocar etiqueta de texto CAD, anotación de texto CAD, negrita cursiva CAD, texto multilínea CAD, kulmanlab]
---

# Text

El comando `text` coloca una etiqueta de texto multilínea. Tras hacer clic en una posición del lienzo, se abre un editor emergente en **rich** mode — puedes escribir contenido, aplicar negrita/cursiva/tachado por carácter, cambiar fuentes y alturas, e insertar saltos de línea. Pulsa **Escape** para confirmar y cerrar el editor.

Consulta la página del [Editor de Texto](../../interface/text-editor/) para la referencia completa del editor, incluyendo una comparación de los modos **rich** y **simple**.

## Colocar una etiqueta de texto

1. Escribe `text` en el terminal o haz clic en el botón de la barra de herramientas **Text**.
2. **Haz clic en la posición de anclaje** en el lienzo. O escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
3. El **editor de texto emergente** se abre sobre la nueva etiqueta. Escribe tu contenido.
4. Pulsa **Escape** para confirmar la etiqueta y cerrar el editor.

La altura predeterminada es de **12 unidades de dibujo**.

## Editar una etiqueta existente

**Haz doble clic** en cualquier etiqueta de texto del lienzo para reabrir el editor de esa etiqueta.

## Entrada de coordenadas para el anclaje

En lugar de hacer clic, escribe una posición exacta:

1. Escribe el valor X.
2. Pulsa `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Pulsa **Enter** para colocar el anclaje y abrir el editor.

## Referencia de teclado

**Fase de anclaje**

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X |
| `,` | Fijar X y pasar a entrada Y |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita |

**Fase del editor de texto** (consulta el [Editor de Texto](../../interface/text-editor/) para la referencia completa)

| Tecla | Acción |
|-------|--------|
| Cualquier carácter imprimible | Insertar en la posición del cursor |
| `Backspace` / `Delete` | Borrar el carácter adyacente o la selección |
| `Enter` | Insertar un salto de línea |
| `←` / `→` | Mover el cursor |
| `Home` / `End` | Saltar al inicio / fin de la línea dura |
| `Escape` | Confirmar y cerrar el editor |

## Edición de agarres — reposicionar

Una etiqueta de texto seleccionada expone un agarre en el punto de anclaje:

| Agarre | Posición | Qué hace |
|--------|----------|----------|
| **Anclaje** | Parte inferior izquierda del texto | Arrastrar para reposicionar la etiqueta |

## Seleccionar texto

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Selecciona si el clic cae dentro del cuadro delimitador rotado del texto |
| **Arrastrar a la derecha** (estricto) | Las cuatro esquinas del cuadro delimitador deben estar dentro del área de selección |
| **Arrastrar a la izquierda** (cruzado) | Cualquier solapamiento entre el cuadro delimitador del texto y el área de selección lo selecciona |

## Comandos de edición compatibles

| Comando | Qué ocurre con el texto |
|---------|------------------------|
| [Move](../move/) | Mueve el punto de anclaje |
| [Copy](../copy/) | Crea una etiqueta idéntica en una nueva posición |
| [Rotate](../rotate/) | Rota la posición del anclaje y suma el ángulo a Rotation Degree |
| [Mirror](../mirror/) | Refleja el punto de anclaje respecto al eje de simetría (la cadena de texto no se voltea) |
| [Scale](../scale/) | Escala la posición del anclaje y multiplica la altura por el factor de escala |
| [Delete](../delete/) | Elimina la etiqueta |

Text no admite **Offset**, **Trim** ni **Extend**.

## Propiedades

Cuando una etiqueta de texto está seleccionada, el panel de propiedades muestra:

**General**

| Propiedad | Valor predeterminado | Significado |
|-----------|---------------------|-------------|
| Color | 256 (ByLayer) | Índice de color ACI |
| Capa | `0` | Asignación de capa |

**Geometría**

| Propiedad | Significado |
|-----------|-------------|
| Position X / Position Y | Coordenadas del punto de anclaje |
| Height | Altura base del texto en unidades de dibujo (predeterminado: **12**) |
| Rotation Degree | Rotación antihoraria en grados |

**Propiedades**

| Propiedad | Significado |
|-----------|-------------|
| Content | La cadena de texto (códigos en línea MTEXT conservados) |
| Attachment Point | Código de alineación (1 = superior izquierda … 9 = inferior derecha) |

Text no tiene propiedades Linetype, Linetype Scale ni Thickness.

## DXF — entidad MTEXT

Las etiquetas de texto se almacenan como entidades **MTEXT** en el archivo DXF. La negrita y la cursiva se codifican usando `\L`, `\K`, `\O` y conmutadores de fuente en línea (`\f`). La altura por carácter se codifica como `\H`. Todo el formato sobrevive a un ciclo DXF completo y es legible por LibreCAD, FreeCAD y otras aplicaciones compatibles con DXF.
