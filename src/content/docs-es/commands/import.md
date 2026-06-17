---
sidebar_position: 1
title: Import — Abrir archivos DXF o JSON en KulmanLab CAD
description: Usa el comando Import para abrir archivos DXF o JSON de KulmanLab en KulmanLab CAD. Admite líneas, círculos, arcos, polilíneas, splines, texto, dimensiones y líneas de referencia.
keywords: [importar archivo DXF, abrir DXF en navegador, importar archivo CAD en línea, abrir archivo DXF, visor DXF en navegador, importar JSON CAD, importar KulmanLab, visor CAD DXF gratuito, cargar dibujo, DXF en navegador]
---

# Import

El comando **Import** carga un dibujo existente desde el sistema de archivos local en KulmanLab CAD. Se admiten tanto el formato estándar **DXF** como el formato **JSON** propio de KulmanLab.

## Cómo importar un archivo

1. Haz clic en el botón **Import** de la barra de herramientas (icono de carpeta) en el panel File en la parte superior de la pantalla.
2. Se abre el selector de archivos del navegador. Navega hasta tu archivo de dibujo y selecciónalo.
3. El dibujo se carga en el lienzo de inmediato. La vista se ajusta automáticamente a todas las entidades.

Como alternativa, puedes arrastrar y soltar un archivo directamente sobre el lienzo.

## Formatos de archivo admitidos

| Formato | Extensión | Cuándo usarlo |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Dibujos de , FreeCAD, LibreCAD u otras herramientas CAD |
| **JSON** *(nativo)* | `.json` | Dibujos guardados previamente desde KulmanLab CAD — fidelidad total |

## Qué se importa desde DXF

KulmanLab analiza los siguientes tipos de entidades DXF:

| Tipo de entidad | Código DXF | Notas |
|-------------|----------|-------|
| Línea | `LINE` | |
| Círculo | `CIRCLE` | |
| Arco | `ARC` | |
| Elipse | `ELLIPSE` | |
| Polilínea | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Texto | `TEXT`, `MTEXT` | |
| Dimensión | `DIMENSION` | |
| Multireferencia | `MULTILEADER` | |

Las definiciones de capas y las tablas de tipos de línea también se importan del archivo DXF cuando están presentes.

Las entidades que usan tipos DXF no admitidos se omiten silenciosamente — el resto del dibujo se carga igualmente.

## Nombre y almacenamiento de archivos

Cuando importas un archivo, se añade una marca de tiempo al nombre del archivo (por ejemplo, `myplan_May22_14:30:00.dxf`). Esto permite mantener múltiples versiones del mismo dibujo en [Archivos Recientes](./files) sin conflictos de nombre. Si el nombre del archivo ya contiene una marca de tiempo, se usa tal cual.

El dibujo se guarda automáticamente en el almacenamiento del navegador (IndexedDB) tras la importación, por lo que aparece en el panel [Files](./files) y sobrevive a las recargas de página.

## Qué ocurre con el dibujo actual

Importar reemplaza el lienzo actual. No hay fusión ni añadido. Si tienes cambios sin guardar, [exporta](./export) el dibujo actual primero.

## Al iniciar

KulmanLab reabre automáticamente el archivo editado más recientemente cuando se carga la página. Si no existen archivos guardados, se carga un dibujo de muestra predeterminado.

## Solución de problemas

| Problema | Causa probable | Solución |
|---------|-------------|-----|
| El lienzo está vacío tras importar | Las entidades DXF usan tipos no admitidos (p. ej. HATCH, INSERT) | Las entidades fueron omitidas — comprueba el mensaje "no entities found" en el terminal |
| El botón Import no hace nada | El navegador bloqueó el selector de archivos | Haz clic en el botón una vez más; algunos navegadores requieren un nuevo gesto del usuario |
| Las dimensiones se ven incorrectas | DXF de una herramienta que escribe geometría de dimensiones no estándar | Vuelve a exportar desde la aplicación de origen usando una versión DXF actual |

## Comandos relacionados

- [Export](./export) — descargar el dibujo actual como DXF o JSON
- [Files](./files) — explorar y restaurar dibujos guardados en el navegador
- [New File](./new-file) — iniciar un dibujo en blanco
