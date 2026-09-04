---
title: Administrador de Exportación — Descargar Dibujos como DXF o JSON
description: Descarga el dibujo como DXF o JSON, marcando por tipo de entidad qué entra. Ambos llevan geometría, texto, cotas, directrices y sombreados, más capas y tipos de línea.
keywords: [exportar DXF, exportar archivo CAD, descargar DXF navegador, guardar DXF online, exportar JSON CAD, exportar KulmanLab, descargar archivo CAD, exportar DXF, guardar dibujo en archivo, descargar DXF]
group: file
order: 6
---

# Administrador de Exportación

El comando `exportmanager` descarga el dibujo actual a tu sistema de archivos. Dos formatos conviven lado a lado — **DXF** para compatibilidad con otras herramientas CAD y **JSON** para guardados de fidelidad completa dentro de KulmanLab CAD — y cada uno tiene su propia lista de qué poner en el archivo.

## Cómo exportar

1. Haz clic en el botón **Export** de la barra de herramientas (icono de descarga) en el panel de archivos, o escribe `exportmanager` en el terminal.
2. La ventana **Export Manager** se abre con dos columnas, **JSON** y **DXF**, cada una listando los tipos de entidad del dibujo con una casilla y un recuento.
3. Desmarca lo que quieras dejar fuera. Todo empieza marcado.
4. Pulsa **Export JSON** o **Export DXF**. El archivo se descarga a tu carpeta de descargas y la ventana se cierra.

Presiona `Escape` para cerrar la ventana emergente sin exportar.

## Elegir qué se exporta

Ambas columnas listan los mismos tipos de entidad, cada uno con cuántos hay en el dibujo:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Todo está marcado al abrir la ventana, así que exportar de inmediato te da el dibujo entero. Desmarca un tipo para dejarlo fuera de ese archivo concreto.

- **Las dos columnas son independientes.** Desmarcar Hatches en DXF no cambia lo que produce **Export JSON**: cada formato guarda su propia selección.
- **Lo que no tienes aparece atenuado.** Una fila con recuento `0` no se puede marcar, así que la lista sirve además de inventario rápido del dibujo.
- **Los recuentos son una instantánea.** Se toman al abrir la ventana y no se actualizan si el dibujo cambia por detrás. Cierra y vuelve a abrir para refrescarlos.
- **No se borra nada.** Desmarcar solo da forma al archivo exportado; el dibujo queda intacto.

**Linear Dimensions** abarca cotas lineales, alineadas y continuadas: un mismo tipo de entidad creado por tres comandos distintos. Radio, diámetro y ángulo tienen cada uno su fila.

Para un archivo de corte, desmarca Text, las cuatro filas de cotas, Leaders y Hatches y pulsa **Export DXF**; consulta [preparar un DXF para corte láser](/es/blog/prepare-dxf-for-laser-cutting/).

## Elegir un formato

| Formato | Extensión | Mejor para | Limitaciones |
|---------|-----------|------------|--------------|
| **JSON** *(nativo)* | `.json` | Guardar el trabajo para reabrirlo en KulmanLab CAD | No compatible con otras herramientas CAD |
| **DXF** | `.dxf` | Compartir con FreeCAD, LibreCAD, etc. | Cuánto sobrevive depende de la aplicación que lo reciba |

**Cuándo usar JSON:** siempre que quieras guardar una copia completa de tu trabajo. JSON es el formato nativo de KulmanLab y conserva cada entidad exactamente — incluyendo cotas, líderes, hatches y todos los datos de capas.

**Cuándo usar DXF:** cuando necesites entregar el dibujo a alguien que use otra aplicación CAD. El archivo exportado usa el formato DXF AC1032 y puede abrirse en la mayoría de las herramientas compatibles con DXF.

## Qué se exporta por formato

### Exportación JSON

Se incluye cada tipo de entidad:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Cotas (lineal, alineada, continuada, radio, diámetro, ángulo)
- Leaders (multileaders)
- Hatches, incluyendo su patrón, escala, ángulo y origen
- Layers y Linetypes

### Exportación DXF

Se incluye cada tipo de entidad:

- Lines, Circles, Arcs, Ellipses, Polylines (exportadas como `LWPOLYLINE`), Splines
- Text
- Cotas (lineal, alineada, continuada, radio, diámetro, ángulo)
- Leaders (multileaders)
- Hatches, incluyendo su patrón, escala, ángulo y origen
- Layers y Linetypes

El archivo se escribe como DXF AC1032, así que un dibujo exportado desde KulmanLab se abre con su anotación intacta en otras herramientas compatibles con DXF, en lugar de llegar como geometría desnuda.

Lo que cada aplicación receptora haga después con él sigue variando: el soporte de DXF difiere entre herramientas, y una más antigua puede ignorar entidades que otra más reciente sí lee. Si un dibujo tiene que verse idéntico en todas partes, [Administrador de Impresión](../print-manager/) lo captura como PDF o imagen.

## Nombre del archivo exportado

El archivo descargado se nombra según el archivo de dibujo actual (p. ej. `myplan.json`). La extensión cambia para coincidir con el formato elegido. Un dibujo que nunca se ha nombrado se exporta como `drawing.dxf` o `drawing.json`.

## Diferencia entre el Administrador de Exportación y el Administrador de Impresión

| Función | Administrador de Exportación | Administrador de Impresión |
|---------|-------------------------------|------------------------------|
| Salida | Archivo fuente vectorial (.dxf / .json) | Imagen ráster (.png / .jpeg / .webp / .pdf) |
| Editable en otras herramientas | Sí (DXF) | No |
| Conserva layers y linetypes | Sí | No (se renderiza plano) |
| Captura cotas y leaders | Sí | Sí |

Usa el **Administrador de Exportación** cuando necesites un archivo editable. Usa el [Administrador de Impresión](../print-manager/) cuando necesites una instantánea visual.

## Comandos relacionados

- [Import](../import/) — abrir un archivo DXF o JSON
- [Administrador de Impresión](../print-manager/) — exportar el lienzo como una imagen PNG, JPEG, WebP o PDF
- [File Manager](../file-manager/) — explorar dibujos guardados en el almacenamiento del navegador
