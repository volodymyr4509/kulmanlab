---
title: Administrador de Impresión — Exportar el dibujo como PNG, JPEG, WebP o PDF
description: El comando PrintManager abre el Administrador de Impresión — una ventana de exportación dedicada con una vista previa en vivo que coincide exactamente con el archivo exportado, un ajuste de Calidad/DPI, selector de formato, un estilo de impresión Default/Monochrome/Blueprint y selección opcional de área. Admite PNG, JPEG, WebP y PDF.
keywords: [exportar PNG CAD, exportar PDF CAD, imprimir dibujo CAD, administrador de impresión, calidad de impresión DPI, exportar en escala de grises, estilo de impresión blueprint, exportar kulmanlab]
group: file
order: 4
---

# Administrador de Impresión

El comando `GestorDeImpresión` abre el **Administrador de Impresión** — una ventana de exportación dedicada con un lienzo de vista previa en tiempo real, selector de formato (PNG / JPEG / WebP / PDF), un selector de Estilo (Default / Monochrome / Blueprint) y recorte opcional de área. Nada se envía a una impresora física; el resultado se descarga como archivo.

## Abrir el Administrador de Impresión

Haz clic en el botón **Print** de la barra de herramientas o escribe `GestorDeImpresión` en el terminal. El Administrador de Impresión se abre de inmediato mostrando una vista previa del viewport actual.

La vista previa se renderiza mediante exactamente la misma ruta de código, a exactamente la misma resolución en píxeles, que el archivo que finalmente exportarás — cambiar la Calidad, el Estilo o el área de exportación vuelve a renderizar la vista previa de inmediato, así que lo que ves es lo que se descarga, no una aproximación.

## Diseño del Administrador de Impresión

La ventana tiene dos paneles:
- **Barra lateral izquierda** — todos los controles de exportación.
- **Panel derecho** — lienzo de vista previa en tiempo real que se actualiza al cambiar la configuración.

### Controles de la barra lateral

| Control | Descripción |
|---------|-------------|
| **Change Area** | Recortar a un rectángulo personalizado en el lienzo (ver más abajo) — recorta realmente la imagen exportada, incluso en un layout con espacio de papel, no solo la vista previa en pantalla |
| Lista desplegable **Quality** | Define la resolución de exportación (ver más abajo) |
| Lista desplegable **Style** | Default, Monochrome o Blueprint — ver *Estilos de impresión* más abajo. Monochrome por defecto para una salida de impresión limpia |
| Lista desplegable **Format** | PNG, JPEG, WebP o PDF |
| Botón **Export** | Genera y descarga el archivo |

## Estilos de impresión

La lista desplegable **Style** controla tanto el color de tinta con el que se dibujan las entidades como el fondo de la página:

| Estilo | Tinta | Fondo de página |
|--------|-------|------------------|
| **Default** | El color propio de cada entidad | Blanco |
| **Monochrome** *(por defecto)* | Negro sólido, sin importar el color de la entidad/capa | Blanco |
| **Blueprint** | Blanco sólido, sin importar el color de la entidad/capa | Azul prusia profundo, con una cuadrícula de referencia tenue |

Blueprint reproduce el aspecto de una impresión arquitectónica cianotipia tradicional — líneas blancas sobre una hoja azul oscuro. Su cuadrícula de referencia está dimensionada en relación con la página, no con el DPI, por lo que se ve con la misma densidad en cualquier ajuste de Calidad en lugar de volverse más densa al aumentar la resolución.

## Calidad y resolución

El menú desplegable **Quality** define el DPI al que se renderiza la exportación:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(por defecto)* | 150 |
| Presentation | 300 |
| Max | 600 |

Una Calidad más alta produce una imagen más grande y nítida al mismo tamaño físico — los grosores de línea escalan junto con la resolución, por lo que una línea mantiene el mismo grosor *físico* en papel en cualquier ajuste de Calidad, en lugar de verse más delgada al aumentar el DPI. La única excepción es una línea capilar (grosor `0`), convencionalmente definida como "la línea más delgada que el dispositivo de salida puede dibujar" — permanece con un ancho fijo de 1 píxel en cualquier nivel de Calidad, igual que se comporta en el lienzo en vivo.

Cambiar la Calidad vuelve a renderizar la vista previa de inmediato, para que veas la nitidez real (y el compromiso de tamaño de archivo) antes de exportar.

## Seleccionar un área de exportación personalizada

Por defecto la vista previa muestra el cuadro delimitador de todas las entidades del espacio Modelo — la misma extensión a la que hace zoom [Fit](../fit/) — o la hoja completa en una presentación. Para exportar una región concreta:

1. Haz clic en **Change Area** — el Administrador de Impresión se oculta y el lienzo se vuelve interactivo.
2. **Haz clic en la primera esquina** del rectángulo de exportación.
3. **Haz clic en la esquina opuesta** — el Administrador de Impresión se reabre con el área seleccionada en la vista previa.

Presiona `Escape` durante la selección de área para cancelar y restaurar el área anterior.

El lienzo de vista previa se redimensiona dinámicamente para coincidir con la **relación de aspecto exacta** del área seleccionada, por lo que la vista previa es precisa a nivel de píxel.

El área elegida se recuerda por separado para el espacio Modelo y para cada presentación hasta que recargues la página — consulta [ChangePrintArea](../change-print-area/).

## Formatos de exportación

| Formato | Mejor para | Notas |
|--------|----------|-------|
| **PNG** | Sin pérdida, líneas nítidas | Fondo de página del Estilo incrustado, sin transparencia |
| **JPEG** | Archivo más pequeño para compartir | Calidad del 95%, ligera compresión |
| **WebP** | Archivo más pequeño para la web | Misma calidad del 95%, mejor compresión que JPEG |
| **PDF** | Documentos listos para imprimir | Imagen incrustada en un contenedor PDF al DPI de la Calidad seleccionada, dimensionada para que la página se imprima a escala física real |

El archivo exportado se llama `kulman-<timestamp>.<ext>` y se descarga automáticamente.

## Resolución y fondo de exportación

- **Exportación de espacio modelo / viewport**: limitada a 2000 × 2000 píxeles con la calidad Normal predeterminada (150 DPI), escalada proporcionalmente al área seleccionada; el límite también escala con la Calidad — Draft tiene un límite más bajo, Presentation y Max uno más alto (hasta 8000 × 8000 en Max/600 DPI).
- **Exportación de layout (espacio de papel)**: dimensionada directamente a partir de las dimensiones de papel del layout al DPI seleccionado — p. ej. una hoja A4 (210 × 297 mm) a calidad Normal se exporta a aproximadamente 1240 × 1754 px — por lo que no está sujeta al límite de 2000 px del viewport.
- El fondo sigue el **Style** de impresión seleccionado — blanco para Default y Monochrome, azul prusia profundo para Blueprint (ver *Estilos de impresión* arriba).
- Las capas marcadas como **no trazables** se excluyen de la exportación.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Escape` (durante la selección de área) | Cancelar la selección de área, restaurar el área anterior |
| `Escape` (en el Administrador de Impresión) | Cerrar el Administrador de Impresión |
