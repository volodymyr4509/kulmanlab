---
sidebar_position: 4
title: Editor de Texto — Formato de Texto Enriquecido en KulmanLab CAD
description: El editor de texto de KulmanLab CAD permite colocar etiquetas MTEXT multilínea con formato enriquecido con negrita, cursiva, tachado, anulaciones de fuente y altura por carácter, ajuste de línea y navegación completa con cursor.
keywords: [editor de texto CAD, MTEXT, negrita cursiva CAD, formato de texto CAD, texto multilínea CAD, ajuste de línea CAD, kulmanlab]
---

# Editor de Texto

El editor de texto se abre cuando colocas una nueva etiqueta de texto con el comando `text` o al hacer doble clic en una entidad de texto existente. Admite contenido multilínea, formato por carácter y ajuste de línea.

## Abrir el editor

| Acción | Resultado |
|--------|-----------|
| Comando `text` → hacer clic en la posición | Crea una nueva entidad de texto y abre el editor |
| Doble clic en una entidad de texto existente | Reabre el editor para esa entidad |
| `Escape` dentro del editor | Cierra el editor y guarda todos los cambios |

## Barra de herramientas

La barra de herramientas flota sobre el cuadro delimitador del texto y permanece anclada a la entidad al desplazarse o hacer zoom.

### Negrita · Cursiva · Tachado

| Botón | Atajo | Qué hace |
|-------|-------|----------|
| **B** | — | Alternar negrita |
| *I* | — | Alternar cursiva |
| ~~S~~ | — | Alternar tachado |

**Cómo se aplica la alternancia:**

- **Con una selección de texto** — el estilo se aplica exactamente a los caracteres seleccionados únicamente.
- **Sin selección, cursor en texto existente** — alterna el estilo en toda la entidad (todos los segmentos).
- **Texto vacío o nueva entidad** — el estilo se almacena en el segmento vacío y se aplica a cada carácter que escribas a partir de ese momento.

El botón aparece resaltado (activo) cuando todos los caracteres de la selección actual — o el carácter inmediatamente a la izquierda del cursor — tienen ese estilo establecido.

### Fuente

El desplegable lista un conjunto seleccionado de tipos de letra multiplataforma (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). La opción superior **Arial** es la predeterminada.

- **Con una selección** — anula la fuente solo para los caracteres seleccionados.
- **Sin selección** — aplica la fuente a toda la entidad.

El desplegable refleja la fuente del carácter a la izquierda del cursor cuando no hay selección.

### Altura

El campo numérico establece la **altura de caja** (altura de una letra mayúscula) en unidades de dibujo.

- **Con una selección** — anula la altura para los caracteres seleccionados, independientemente de la altura base de la entidad.
- **Sin selección** — cambia la altura base de la entidad (se aplica a todos los caracteres que no tienen una anulación de altura individual).

El campo refleja la altura del carácter a la izquierda del cursor. Déjalo en blanco para usar el valor predeterminado de la entidad.

## Cursor y navegación

| Tecla | Acción |
|-------|--------|
| `←` / `→` | Mover el cursor un carácter a la izquierda o derecha |
| `Home` | Saltar al inicio de la línea dura actual |
| `End` | Saltar al final de la línea dura actual |
| `Shift` + `←` / `→` | Extender o reducir la selección |
| `Backspace` | Borrar el carácter a la izquierda (o la selección) |
| `Delete` | Borrar el carácter a la derecha (o la selección) |
| `Enter` | Insertar un salto de línea |
| `Escape` | Cerrar el editor |

La altura del cursor coincide automáticamente con la altura de caja del carácter adyacente, incluyendo el tamaño más pequeño usado para subíndice y superíndice.

## Ajuste de línea

Cuando una entidad de texto tiene un **ancho de referencia** establecido, las líneas largas se ajustan automáticamente en los límites de las palabras para caber dentro de ese ancho.

Para establecer o cambiar el ancho de referencia mientras la entidad está seleccionada, arrastra los **agarres de redimensionamiento** — los rectángulos delgados en los bordes izquierdo y derecho del cuadro delimitador discontinuo. El contenido se redistribuye en tiempo real mientras arrastras.

Establecer el ancho de referencia en cero (arrastra los agarres juntos o elimina el valor en el panel de propiedades) elimina el ajuste de línea y permite que las líneas crezcan libremente.

## Texto multilínea

Pulsa `Enter` para insertar un salto de línea duro. Cada línea dura es independiente — `Home` y `End` navegan dentro de la línea dura actual únicamente.

Los saltos de línea duros y el formato por carácter se almacenan usando el formato MTEXT y sobreviven a un ciclo DXF completo.

## Compatibilidad con DXF

Las entidades de texto se almacenan como **MTEXT** en los archivos DXF. La negrita y la cursiva se codifican como `\L`, `\K`, `\O` y conmutadores de fuente en línea (`\f`). La altura por carácter se codifica como `\H`. Todo el formato se conserva al exportar y es legible por LibreCAD, FreeCAD y otras aplicaciones compatibles con DXF.
