---
title: Administrador de Exportación — Descargar Dibujos como DXF o JSON
description: El Administrador de Exportación descarga el dibujo actual como archivo DXF o JSON (nativo). Cada formato lista exactamente qué tipos de entidad transporta, uno junto al otro, para que veas antes de descargar qué deja fuera DXF — actualmente hatches, cotas, líderes y texto.
keywords: [exportar DXF, exportar archivo CAD, descargar DXF navegador, guardar DXF online, exportar JSON CAD, exportar KulmanLab, descargar archivo CAD, exportar DXF, guardar dibujo en archivo, descargar DXF]
group: file
order: 6
---

# Administrador de Exportación

El comando `exportmanager` descarga el dibujo actual a tu sistema de archivos. Hay dos formatos disponibles, mostrados como tarjetas una junto a la otra: **DXF** para compatibilidad con otras herramientas CAD y **JSON** para guardados de fidelidad completa dentro de KulmanLab CAD — cada tarjeta lista exactamente qué tipos de entidad transporta ese formato.

## Cómo exportar

1. Haz clic en el botón **Export** de la barra de herramientas (icono de descarga) en el panel de archivos, o escribe `exportmanager` en el terminal.
2. Se abre la ventana emergente **Administrador de Exportación**, mostrando las tarjetas JSON y DXF una junto a la otra, cada una listando qué se exporta (y, para DXF, qué se deja fuera).
3. Haz clic en una tarjeta para seleccionar el formato — **JSON** o **DXF**.
4. Haz clic en el botón **Export \<FORMAT\>**. El archivo se descarga automáticamente a tu carpeta de descargas predeterminada.

Presiona `Escape` para cerrar la ventana emergente sin exportar.

## Elegir un formato

| Formato | Extensión | Mejor para | Limitaciones |
|---------|-----------|------------|--------------|
| **JSON** *(nativo)* | `.json` | Guardar el trabajo para reabrirlo en KulmanLab CAD | No compatible con otras herramientas CAD |
| **DXF** | `.dxf` | Compartir con FreeCAD, LibreCAD, etc. | Los hatches, cotas, líderes y texto no se exportan |

**Cuándo usar JSON:** siempre que quieras guardar una copia completa de tu trabajo. JSON es el formato nativo de KulmanLab y conserva cada entidad exactamente — incluyendo cotas, líderes, hatches y todos los datos de capas.

**Cuándo usar DXF:** cuando necesites entregar el dibujo a alguien que use otra aplicación CAD. El archivo exportado usa el formato DXF AC1032 y puede abrirse en la mayoría de las herramientas compatibles con DXF.

## Qué se exporta por formato

### Exportación JSON

Se incluye cada tipo de entidad:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Cotas (lineal, alineada, continuada, radio, diámetro)
- Leaders (multileaders)
- Hatches, incluyendo su patrón, escala, ángulo y origen
- Layers y Linetypes

### Exportación DXF

Solo se incluyen entidades geométricas:

- Lines, Circles, Arcs, Ellipses, Polylines (exportadas como `LWPOLYLINE`), Splines
- Layers y Linetypes

**No se exporta a DXF:** hatches, cotas, leaders y texto. Las cotas y los leaders usan estructuras de datos específicas de KulmanLab que no pueden representarse fielmente en DXF estándar; los hatches todavía no se exportan a DXF en absoluto, aunque sí se importan desde él; la exportación de texto tampoco está implementada aún. Si tu dibujo tiene alguno de estos, usa JSON o el [Administrador de Impresión](../print-manager/) para capturarlos.

## Nombre del archivo exportado

El archivo descargado se nombra según el archivo de dibujo actual (p. ej. `myplan.json`). La extensión cambia para coincidir con el formato elegido.

## Diferencia entre el Administrador de Exportación y el Administrador de Impresión

| Función | Administrador de Exportación | Administrador de Impresión |
|---------|-------------------------------|------------------------------|
| Salida | Archivo fuente vectorial (.dxf / .json) | Imagen ráster (.png / .jpeg / .webp / .pdf) |
| Editable en otras herramientas | Sí (DXF) | No |
| Conserva layers y linetypes | Sí | No (se renderiza plano) |
| Captura cotas y leaders | Solo JSON | Sí |

Usa el **Administrador de Exportación** cuando necesites un archivo editable. Usa el [Administrador de Impresión](../print-manager/) cuando necesites una instantánea visual.

## Comandos relacionados

- [Import](../import/) — abrir un archivo DXF o JSON
- [Administrador de Impresión](../print-manager/) — exportar el lienzo como una imagen PNG, JPEG, WebP o PDF
- [File Manager](../file-manager/) — explorar dibujos guardados en el almacenamiento del navegador
