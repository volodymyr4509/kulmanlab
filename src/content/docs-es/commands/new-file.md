---
sidebar_position: 2
title: New File — Iniciar un dibujo en blanco en KulmanLab CAD
description: El comando New File limpia el lienzo y abre un nuevo dibujo en blanco. Se genera automáticamente un nombre de archivo con marca de tiempo y se guarda en el almacenamiento del navegador.
keywords: [nuevo archivo CAD, nuevo dibujo, lienzo en blanco CAD, crear nuevo dibujo en línea, iniciar nuevo DXF, nuevo archivo KulmanLab, restablecer lienzo, limpiar dibujo]
---

# New File

El comando **New File** limpia el lienzo y comienza un nuevo dibujo en blanco. Se genera automáticamente un nombre de archivo único con una marca de tiempo.

## Cómo crear un nuevo archivo

Haz clic en el botón **New File** de la barra de herramientas (icono de página nueva) en el panel File. El lienzo se limpia de inmediato — sin indicaciones ni diálogos de confirmación.

## Qué contiene el nuevo archivo

Un archivo recién creado comienza con:

- **Sin entidades** en el lienzo.
- **Una capa predeterminada** llamada `0` con color blanco y tipo de línea `Continuous`.
- Un **nombre de archivo generado** con el formato `kulman-Mon01_HH:MM:SS.dxf` (p. ej. `kulman-May22_14:30:00.dxf`).

El archivo se guarda automáticamente en el almacenamiento del navegador y aparece en [Archivos Recientes](./files).

## Advertencia — el trabajo no guardado se descarta

Hacer clic en **New File** descarta todas las entidades del lienzo actual sin advertencia. Si deseas conservar el dibujo actual, [expórtalo](./export) primero.

## Cuándo usar New File vs Import

| Situación | Acción recomendada |
|-----------|-------------------|
| Comenzar un dibujo desde cero | **New File** |
| Abrir un archivo DXF o JSON existente | [Import](./import) |
| Copiar un dibujo para trabajar en una variante | [Exporta](./export) el archivo actual, luego [importa](./import) la copia |

## Comandos relacionados

- [Import](./import) — abrir un dibujo DXF o JSON existente
- [Export](./export) — descargar el dibujo antes de comenzar uno nuevo
- [Files](./files) — restaurar un dibujo anterior desde el almacenamiento del navegador
