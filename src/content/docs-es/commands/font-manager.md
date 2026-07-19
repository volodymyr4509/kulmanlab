---
title: Font Manager — Subir y Gestionar Fuentes TTF Personalizadas
description: El comando Font Manager abre un diálogo para explorar, previsualizar y seleccionar fuentes, y para subir tus propios archivos .ttf. Las fuentes subidas se guardan en el navegador y se incrustan por nombre en las exportaciones DXF.
keywords: [font manager, fuente personalizada CAD, subir ttf, tipografía personalizada CAD, google fonts CAD, fuente de texto CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

El comando `FontManager` abre un diálogo para explorar y seleccionar fuentes, y para subir tus propios archivos `.ttf` para usarlos en entidades [Text](../text/) y [Multileader](../leader/).

## Abrir el Font Manager

- Escribe `FontManager` en el terminal, **o**
- Haz clic en el botón **Font Manager** de la barra de herramientas del [editor de texto](../../interface/text-editor/).

## Grupos de fuentes

| Grupo | Contenido |
|-------|-----------|
| **Default** | La fuente sans-serif integrada — siempre disponible |
| **User** | Tus propias fuentes `.ttf` subidas (solo se muestra una vez que hayas añadido una) |
| **Free** | 15 Google Fonts incluidas (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Fuentes comunes del sistema operativo (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Haz clic en cualquier fuente de la lista para ver su vista previa a la derecha — nombre, muestra del alfabeto, un pangrama y dígitos.

## Subir una fuente personalizada

1. Haz clic en **Add Font** en la parte inferior del diálogo (o escribe `Font+` en el terminal para abrir el selector de archivos directamente).
2. Elige un archivo `.ttf`. Solo se admiten fuentes TrueType — `.otf` y `.woff`/`.woff2` no son compatibles.
3. El nombre del archivo (sin la extensión) se convierte en el nombre de la fuente dentro del grupo **User**. Por ejemplo, al subir `MyFont.ttf` se añade una fuente llamada `MyFont`.

Las fuentes subidas se guardan de forma permanente en el navegador (IndexedDB) y se recargan automáticamente la próxima vez que abras KulmanLab CAD.

## Eliminar una fuente personalizada

Pasa el cursor sobre una fuente del grupo **User** y haz clic en el botón **×** que aparece junto a ella. Las fuentes integradas (Default, Free, System) no se pueden eliminar.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `↑` / `↓` | Mover la selección hacia arriba o hacia abajo en la lista de fuentes |
| `Escape` | Cerrar el Font Manager |

## Compatibilidad con DXF

El nombre de la fuente se incrusta en las entidades **MTEXT** exportadas como un código de formato en línea, de modo que un DXF que se exporta y se vuelve a importar en KulmanLab CAD conserva su asignación de fuente. Los *archivos* de fuente personalizados no se incrustan en el DXF — solo se incrusta el *nombre* de la fuente. Si vuelves a importar un dibujo que hace referencia a una fuente personalizada que no has subido en este dispositivo, el texto se renderiza con la fuente predeterminada hasta que subas una fuente con ese mismo nombre.

## Comandos relacionados

- [Text](../text/) — coloca las etiquetas de texto a las que se aplican las opciones de fuente
- [Match Properties](../match-properties/) — copia la altura del texto, pero no la fuente, entre entidades
