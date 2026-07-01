---
sidebar_position: 4
title: Editor de Texto — Modos Rich y Simple en KulmanLab CAD
description: El editor de texto de KulmanLab CAD tiene dos modos — rich (formato por carácter, multilínea, ajuste de línea para Text y Multileader) y simple (estilo uniforme, una línea para entidades de cota). Un mode chip en el encabezado muestra qué modo está activo.
keywords: [editor de texto CAD, MTEXT, negrita cursiva CAD, formato de texto CAD, texto multilínea CAD, ajuste de línea CAD, editor de texto rich, editor de texto simple, editor texto cota, kulmanlab]
---

# Editor de Texto

El editor de texto se abre cuando colocas o haces doble clic en una entidad editable. Un pequeño **mode chip** en el encabezado — **rich** (color de acento) o **simple** (atenuado) — muestra qué modo está activo para la entidad actual.

## Modos del editor

### Rich mode

Usado por: **Text** (etiquetas MTEXT) y anotaciones **Multileader**.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Strikethrough | Por carácter (aplica a la selección, o a toda la entidad si no hay selección) |
| Font y Height | Anulación por carácter, o valor predeterminado de toda la entidad |
| `Enter` | Inserta un salto de línea duro |
| `Shift+←/→` | Extiende o reduce una selección de texto |
| `Home` / `End` | Saltar al inicio / fin de la línea dura actual |
| Ajuste de línea | Compatible mediante grips de redimensionamiento de anchura de referencia |

### Simple mode

Usado por: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

El editor se precarga con la etiqueta renderizada actual de la cota para que puedas posicionar el cursor y editar el valor directamente.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Font / Height | Disponible — se aplica a la **etiqueta completa** a la vez |
| Formato por carácter | No compatible |
| `Enter` | **Confirma** el valor y cierra el editor (sin salto de línea) |
| Multilínea | No compatible |
| Ajuste de línea | No compatible |

## Abrir el editor

| Acción | Resultado |
|--------|-----------|
| Comando `text` → hacer clic en la posición | Crea una nueva entidad de texto y abre el editor (**rich**) |
| Doble clic en una entidad **Text** existente | Reabre el editor en **rich** mode |
| Doble clic en un **Multileader** existente | Abre el editor en **rich** mode |
| Doble clic en una entidad de **cota** | Abre el editor en **simple** mode |
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

## Copiar, cortar y pegar

| Tecla | Acción |
|-------|--------|
| `Ctrl+C` / `Cmd+C` | Copiar el texto seleccionado |
| `Ctrl+X` / `Cmd+X` | Cortar el texto seleccionado |
| `Ctrl+V` / `Cmd+V` | Pegar en el cursor |

Copiar y cortar requieren una selección de texto activa. El texto pegado siempre es texto plano — adopta el formato (negrita, cursiva, fuente, altura) ya presente en el cursor en lugar de conservar el formato que tenía al copiarlo.

En **Rich mode**, los saltos de línea en el texto pegado se conservan. En **Simple mode**, los saltos de línea se eliminan, ya que las etiquetas de cota son de una sola línea.

## Ajuste de línea

Cuando una entidad de texto tiene un **ancho de referencia** establecido, las líneas largas se ajustan automáticamente en los límites de las palabras para caber dentro de ese ancho.

Para establecer o cambiar el ancho de referencia mientras la entidad está seleccionada, arrastra los **agarres de redimensionamiento** — los rectángulos delgados en los bordes izquierdo y derecho del cuadro delimitador discontinuo. El contenido se redistribuye en tiempo real mientras arrastras.

Establecer el ancho de referencia en cero (arrastra los agarres juntos o elimina el valor en el panel de propiedades) elimina el ajuste de línea y permite que las líneas crezcan libremente.

## Texto multilínea

Pulsa `Enter` para insertar un salto de línea duro. Cada línea dura es independiente — `Home` y `End` navegan dentro de la línea dura actual únicamente.

Los saltos de línea duros y el formato por carácter se almacenan usando el formato MTEXT y sobreviven a un ciclo DXF completo.

## Compatibilidad con DXF

Las entidades de texto se almacenan como **MTEXT** en los archivos DXF. La negrita y la cursiva se codifican como `\L`, `\K`, `\O` y conmutadores de fuente en línea (`\f`). La altura por carácter se codifica como `\H`. Todo el formato se conserva al exportar y es legible por LibreCAD, FreeCAD y otras aplicaciones compatibles con DXF.
