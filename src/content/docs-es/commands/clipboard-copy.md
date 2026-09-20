---
title: Comando ClipboardCopy — Copiar entidades al portapapeles del sistema
description: El comando ClipboardCopy escribe las entidades seleccionadas en el portapapeles del sistema como texto JSON, junto con las capas y tipos de línea a los que hacen referencia, para pegarlas en otro dibujo u otra pestaña del navegador con ClipboardPaste.
keywords: [copiar portapapeles CAD, copiar entidades entre dibujos, copiar objetos CAD al portapapeles, Ctrl+C CAD, copiar entre pestañas, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

El comando `CopiarAlPortapapeles` escribe las entidades seleccionadas en el **portapapeles del sistema** como texto JSON. Como utiliza el portapapeles real y no un búfer interno, la geometría copiada sobrevive fuera del dibujo: péguela en otro archivo, en una segunda pestaña del navegador o en una ventana que abra más tarde con [ClipboardPaste](../clipboard-paste/).

Esta es la diferencia con [Copy](../copy/): Copy duplica entidades dentro del dibujo actual en un solo gesto, mientras que ClipboardCopy las deja en un sitio del que pueden recuperarse desde un dibujo completamente distinto.

## Dos formas de empezar

**Preseleccionar y copiar** — la vía rápida:

1. Seleccione una o más entidades en el lienzo.
2. Pulse `Ctrl+C` (`Cmd+C` en macOS), o escriba `CopiarAlPortapapeles` en la terminal.
3. Las entidades se escriben en el portapapeles de inmediato y el comando termina.

**Activar y luego seleccionar** — empezar sin nada seleccionado:

1. Pulse `Ctrl+C` o escriba `CopiarAlPortapapeles` con la selección vacía.
2. El indicador muestra **pick objects to copy — Enter or Space to confirm**.
3. **Seleccione objetos** — haga clic para alternar entidades individuales, o arrastre para seleccionar por área.
4. Pulse **Enter** o **Space** para copiar la selección y salir.

Pulsar **Enter** o **Space** sin nada seleccionado simplemente termina el comando sin tocar el portapapeles.

## Qué se copia

La carga del portapapeles lleva más que geometría en bruto, para que un pegado en un dibujo ajeno siga viéndose bien:

| Parte | Función |
|-------|---------|
| **Entidades** | La forma serializada completa de cada entidad seleccionada |
| **Punto de referencia** | La esquina inferior izquierda de los límites combinados de la selección — lo que ClipboardPaste ancla al cursor |
| **Capas** | Solo las capas a las que realmente hacen referencia las entidades copiadas, por nombre |
| **Tipos de línea** | Solo los tipos de línea a los que realmente hacen referencia las entidades copiadas, por nombre |

Solo viajan las entradas de tabla *referenciadas*, no las tablas completas de capas y tipos de línea del dibujo de origen. Los patrones de sombreado no se incluyen y no hace falta: la tabla de patrones de un dibujo es el conjunto predeterminado incorporado, y los archivos `.pat` que haya subido viven en un almacén por usuario que ya se comparte entre pestañas, de modo que un sombreado pegado resuelve su patrón por sí solo.

## Confirmación

Si tiene éxito, la terminal informa de cuántas entidades se escribieron:

```
3 entities copied to clipboard
```

Si el navegador deniega el acceso al portapapeles, la terminal muestra **Copy failed: clipboard access denied** y no se escribe nada. Es una decisión de permisos del navegador, no un error del dibujo — vea [Permisos del portapapeles](#permisos-del-portapapeles) más abajo.

## Selección durante el comando

| Método | Comportamiento |
|--------|----------------|
| **Clic** | Alterna la entidad bajo el cursor dentro/fuera de la selección |
| **Arrastrar a la derecha** (estricta) | Añade entidades totalmente dentro del recuadro |
| **Arrastrar a la izquierda** (captura) | Añade entidades que cruzan el borde del recuadro |
| **Enter** / **Space** | Confirma la selección y copia |

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Ctrl+C` / `Cmd+C` | Activar ClipboardCopy |
| `Enter` / `Space` | Copiar la selección actual, o salir si no hay nada seleccionado |
| `Escape` | Cancelar sin copiar |

## Permisos del portapapeles

Escribir en el portapapeles del sistema requiere permiso del navegador. En la práctica, una copia lanzada con una pulsación de tecla se concede sin preguntar en los navegadores de escritorio actuales, pero una página que ha perdido el foco, o un navegador con ajustes estrictos de portapapeles, puede denegarla. Si ve el mensaje de acceso denegado, haga clic una vez en el lienzo para dar el foco a la página e inténtelo de nuevo.

Como la carga es texto JSON corriente, cualquier otra cosa que copie después la sustituye — una línea de texto, una URL. Vuelva a copiar antes de pegar si ha usado el portapapeles para otra cosa entretanto.

## Entidades admitidas

ClipboardCopy funciona con todos los tipos de entidad. Las entidades se serializan con el mismo mecanismo que usa la exportación nativa `.json`, así que no se pierde nada por el camino.

## Véase también

- [ClipboardPaste](../clipboard-paste/) — leer el portapapeles y colocar las entidades
- [Copy](../copy/) — duplicar entidades dentro del dibujo actual
- [Export Manager](../export-manager/) — guardar un dibujo completo en DXF o JSON
