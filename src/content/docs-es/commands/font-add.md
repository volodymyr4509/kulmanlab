---
title: FontAdd — Subir una fuente TTF personalizada desde el terminal
description: El comando FontAdd abre el selector de archivos del sistema para subir una fuente .ttf, sin abrir antes el diálogo Font Manager. Es la misma subida que activa el botón «Add Font» del Font Manager, disponible aquí como comando de terminal independiente.
keywords: [comando font add, comando fontadd, subir ttf terminal, fuente personalizada CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

El comando `AñadirFuente` abre el selector de archivos del sistema para subir una fuente `.ttf` personalizada, sin abrir antes el diálogo [Font Manager](../font-manager/). Es la misma subida que activa el botón **Add Font** del Font Manager — FontAdd es solo un acceso directo desde el terminal.

## Subir una fuente

1. Escribe `AñadirFuente` en el terminal, o haz clic en **Add Font** en la parte inferior del diálogo [Font Manager](../font-manager/).
2. Elige un archivo `.ttf` en el selector del sistema. Solo se admiten fuentes TrueType — `.otf` y `.woff`/`.woff2` no son compatibles.

El comando termina en cuanto se abre el selector de archivos — no hay clic ni entrada de terminal adicional. La fuente se registra y aparece en el grupo **User** en cuanto se elige el archivo.

## Qué ocurre al subir

- El nombre del archivo (sin la extensión) se convierte en el nombre de la fuente. Subir `MyFont.ttf` añade una fuente llamada `MyFont`.
- Subir un archivo cuyo nombre coincide con una fuente personalizada existente la **reemplaza**.
- La fuente se guarda de forma permanente en el navegador (IndexedDB) y se recarga automáticamente la próxima vez que abras KulmanLab CAD — no está ligada al dibujo actual.

## Referencia de teclado

FontAdd no tiene interacción de teclado propia — todo el comando consiste en el selector de archivos nativo del navegador. Cancelar ese diálogo (o no elegir ningún archivo) deja la lista de fuentes sin cambios.

## Comandos relacionados

| Comando | Qué hace |
|---------|----------|
| [Font Manager](../font-manager/) | Explora, previsualiza, selecciona y elimina fuentes, incluidas tus propias subidas |
| [Text](../text/) | Coloca las etiquetas de texto a las que se aplican las opciones de fuente |
