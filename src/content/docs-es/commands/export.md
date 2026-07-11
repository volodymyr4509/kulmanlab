---
title: Export — Descargar Dibujos como DXF o JSON en KulmanLab CAD
description: El comando Export descarga el dibujo actual como archivo DXF (compatible) o JSON (nativo). JSON preserva todas las entidades incluyendo cotas y directores; DXF es compatible con otras herramientas CAD.
keywords: [exportar DXF, exportar archivo CAD, descargar DXF en el navegador, guardar DXF en línea, exportar JSON CAD, exportación KulmanLab, descarga de archivo CAD, exportación DXF, guardar dibujo en archivo, descarga DXF]
group: file
order: 5
---

# Export

El comando **Export** descarga el dibujo actual a tu sistema de archivos. Hay dos formatos disponibles: **DXF** para compatibilidad con otras herramientas CAD y **JSON** para guardados de máxima fidelidad dentro de KulmanLab CAD.

## Cómo exportar

1. Haz clic en el botón **Export** de la barra de herramientas (icono de descarga) en el panel de Archivo.
2. Se abre la ventana emergente **Administrador de exportación**.
3. Haz clic en una tarjeta de formato para seleccionarlo — **JSON** o **DXF**.
4. Haz clic en el botón **Export**. El archivo se descarga automáticamente a tu carpeta de descargas predeterminada.

## Elegir un formato

| Formato | Extensión | Mejor para | Limitaciones |
|---------|-----------|------------|--------------|
| **JSON** *(nativo)* | `.json` | Guardar trabajo para reabrir en KulmanLab CAD | No compatible con otras herramientas CAD |
| **DXF** | `.dxf` | Compartir con FreeCAD, LibreCAD, etc. | Las cotas y directores no se exportan |

**Cuándo usar JSON:** siempre que quieras guardar una copia completa de tu trabajo. JSON es el formato nativo de KulmanLab y preserva cada entidad exactamente — incluyendo cotas, directores y todos los datos de capas.

**Cuándo usar DXF:** cuando necesitas entregar el dibujo a alguien que usa otra aplicación CAD. El archivo exportado usa el formato DXF AC1012 y puede abrirse en la mayoría de herramientas compatibles con DXF.

## Qué se exporta por formato

### Exportación JSON

Se incluyen todos los tipos de entidades:

- Líneas, círculos, arcos, elipses, polilíneas, splines, texto
- Cotas (lineal, alineada, continua, radio, diámetro)
- Multidirectores
- Definiciones de capas y tablas de tipos de línea

### Exportación DXF

Se incluyen entidades de solo geometría:

- Líneas, círculos, arcos, elipses, polilíneas (exportadas como `LWPOLYLINE`), splines, texto
- Definiciones de capas y tablas de tipos de línea

**No incluido en DXF:** entidades de cota y multidirectores. Estas usan estructuras de datos específicas de KulmanLab que no pueden representarse fielmente en DXF estándar. Si tu dibujo tiene anotaciones, usa JSON o [Print](../print/) para capturarlas visualmente.

## Nombre del archivo exportado

El archivo descargado lleva el nombre del archivo de dibujo actual (p. ej. `myplan_May22_14:30:00.json`). La extensión cambia para coincidir con el formato elegido.

## Diferencia entre Export y Print

| Característica | Export | Print |
|----------------|--------|-------|
| Salida | Archivo fuente vectorial (.dxf / .json) | Imagen rasterizada (.png / .jpeg / .webp / .pdf) |
| Editable en otras herramientas | Sí (DXF) | No |
| Preserva capas y tipos de línea | Sí | No (renderizado plano) |
| Captura cotas y directores | Solo JSON | Sí |

Usa **Export** cuando necesites un archivo editable. Usa [Print](../print/) cuando necesites una instantánea visual.

## Comandos relacionados

- [Import](../import/) — abrir un archivo DXF o JSON
- [Print](../print/) — exportar el lienzo como imagen PNG, JPEG, WebP o PDF
- [Files](../files/) — explorar dibujos guardados en el almacenamiento del navegador
