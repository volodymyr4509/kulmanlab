---
title: Comando ClipboardPaste — Pegar entidades desde el portapapeles del sistema
description: El comando ClipboardPaste lee del portapapeles del sistema las entidades escritas previamente por ClipboardCopy y las coloca en un punto de inserción elegido, añadiendo las capas y tipos de línea que falten en el dibujo de destino.
keywords: [pegar portapapeles CAD, pegar entidades entre dibujos, pegar objetos CAD, Ctrl+V CAD, pegar entre pestañas, fusionar capas al pegar, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

El comando `PegarDelPortapapeles` lee las entidades que [ClipboardCopy](../clipboard-copy/) escribió en el **portapapeles del sistema** y las coloca en el dibujo actual en un punto que usted elige. Como el portapapeles es el real del sistema, el origen puede ser otro dibujo, otra pestaña del navegador o una sesión de antes ese mismo día.

## Cómo pegar

1. Pulse `Ctrl+V` (`Cmd+V` en macOS), o escriba `PegarDelPortapapeles` en la terminal.
2. El indicador muestra **reading clipboard…** mientras el navegador entrega el texto del portapapeles.
3. Una vez cargado, el indicador cambia a **pick insertion point** y una vista previa de la geometría sigue al cursor.
4. **Haga clic** para colocar las entidades. Se añaden al dibujo y quedan seleccionadas.

La vista previa se ancla por el **punto de referencia** de la copia — la esquina inferior izquierda de los límites combinados de la selección original. Esa esquina queda bajo el cursor, de modo que la disposición relativa de las entidades copiadas se conserva exactamente.

## Qué ocurre al pegar

| Paso | Comportamiento |
|------|----------------|
| **Identidades nuevas** | Cada entidad pegada recibe un id nuevo, así que pegar dos veces da dos conjuntos independientes |
| **Traslación** | Las entidades se desplazan según cursor − punto de referencia |
| **Fusión de capas** | Toda capa referenciada que falte en el dibujo de destino se añade por nombre |
| **Fusión de tipos de línea** | Todo tipo de línea referenciado que falte en el dibujo de destino se añade por nombre |
| **Selección** | La selección anterior se borra y las entidades pegadas pasan a ser la selección |

### Fusión de capas y tipos de línea

Las entradas de tabla que faltan se añaden; **las existentes se dejan intactas**. Si el portapapeles trae una capa llamada `WALLS` en rojo y el destino ya tiene una capa `WALLS` en azul, gana la definición del destino y las entidades pegadas se incorporan a ella — serán azules. Un pegado no redefine nada en el dibujo de destino.

Esto importa al copiar entre dibujos con distintas convenciones de capas: revise el [Layer Manager](../layer-manager/) tras un pegado entre dibujos si los colores no son los que esperaba.

## Cuando el portapapeles no tiene nada que pegar

ClipboardPaste solo acepta cargas producidas por ClipboardCopy. Cualquier otra cosa en el portapapeles — texto plano, una URL, una imagen, JSON de otra aplicación — se rechaza y la terminal informa:

```
Clipboard has no copied entities
```

Si el navegador deniega por completo el acceso al portapapeles, el mensaje es **Blocked by the browser: allow clipboard in site settings, by the address bar**. Ambos terminan el comando sin modificar el dibujo.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Ctrl+V` / `Cmd+V` | Activar ClipboardPaste |
| `Escape` | Cancelar — las entidades se descartan y no se añade nada |

Cancelar durante la fase de lectura es seguro: si el portapapeles responde después de que ya haya cancelado o iniciado otro comando, el resultado tardío se descarta en lugar de interrumpir lo que esté activo para entonces.

## Copiar entre pestañas

El flujo habitual entre dibujos:

1. Abra el dibujo de origen, seleccione la geometría, pulse `Ctrl+C`.
2. Cambie a la otra pestaña — o abra una segunda pestaña de la aplicación y cargue otro archivo.
3. Pulse `Ctrl+V` y haga clic en un punto de inserción.

Ambas pestañas tienen el mismo origen y comparten el portapapeles del sistema, así que no se sube nada ni interviene ningún servidor. La carga es texto JSON en su propio portapapeles todo el tiempo.

## Entidades admitidas

Todo tipo de entidad que ClipboardCopy pueda escribir, ClipboardPaste puede leerlo de vuelta — con la misma serialización que usa el formato nativo `.json`.

## Véase también

- [ClipboardCopy](../clipboard-copy/) — escribir la selección en el portapapeles
- [Copy](../copy/) — duplicar entidades dentro del dibujo actual
- [Layer Manager](../layer-manager/) — inspeccionar las capas que trajo un pegado
