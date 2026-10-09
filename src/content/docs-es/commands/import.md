---
title: Import — Abrir archivos DXF o JSON en KulmanLab CAD
description: Usa el comando Import para abrir archivos DXF o JSON de KulmanLab en KulmanLab CAD. Admite líneas, círculos, arcos, polilíneas, splines, texto, dimensiones y líneas de referencia.
keywords: [importar archivo DXF, abrir DXF en navegador, importar archivo CAD en línea, abrir archivo DXF, visor DXF en navegador, importar JSON CAD, importar KulmanLab, visor CAD DXF gratuito, cargar dibujo, DXF en navegador]
group: file
order: 1
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
| **DXF** | `.dxf` | Dibujos de FreeCAD, LibreCAD u otras herramientas CAD |
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
| Hatch | `HATCH` | Se leen el nombre, la escala y el ángulo del patrón; un nombre que no esté en tu biblioteca de patrones recurre a ANSI31. Consulta [Hatch](../hatch/) |

Las definiciones de capas y las tablas de tipos de línea también se importan del archivo DXF cuando están presentes.

Las entidades que usan tipos DXF no admitidos se omiten silenciosamente — el resto del dibujo se carga igualmente.

## Nombre y almacenamiento de archivos

El archivo importado conserva su nombre original. Si ese nombre ya está en uso por otro dibujo guardado, se añade automáticamente un sufijo al estilo Finder/Explorer (`myplan (2)`, `myplan (3)`, …) para que la entrada existente nunca se sobrescriba. Puedes renombrar el archivo después desde el [File Manager](../file-manager/#renombrar-un-archivo).

El dibujo se guarda automáticamente en el almacenamiento del navegador (IndexedDB) tras la importación, por lo que aparece en el panel [File Manager](../file-manager/) y sobrevive a las recargas de página.

## Qué ocurre con el dibujo actual

Importar reemplaza el lienzo actual. No hay fusión ni añadido. Si tienes cambios sin guardar, [exporta](../export-manager/) el dibujo actual primero.

## Al iniciar

KulmanLab reabre automáticamente el archivo editado más recientemente cuando se carga la página. Si no existen archivos guardados, se carga un dibujo de muestra predeterminado.

## Solución de problemas

| Problema | Causa probable | Solución |
|---------|-------------|-----|
| El lienzo está vacío tras importar | Las entidades DXF usan tipos no admitidos (p. ej. INSERT) | Las entidades fueron omitidas — el terminal lista cada tipo omitido con su número, por ejemplo `Could not read INSERT: 12`. Un archivo que no es un dibujo válido informa `Could not read <file>: not a valid drawing file` |
| El botón Import no hace nada | El navegador bloqueó el selector de archivos | Haz clic en el botón una vez más; algunos navegadores requieren un nuevo gesto del usuario |
| Las dimensiones se ven incorrectas | DXF de una herramienta que escribe geometría de dimensiones no estándar | Vuelve a exportar desde la aplicación de origen usando una versión DXF actual |

## Comandos relacionados

- [Export Manager](../export-manager/) — descargar el dibujo actual como DXF o JSON
- [File Manager](../file-manager/) — explorar y restaurar dibujos guardados en el navegador
- [New File](../new-file/) — iniciar un dibujo en blanco
