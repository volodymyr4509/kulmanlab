---
sidebar_position: 5
title: Comando print — Exportar el dibujo como PNG, JPEG, WebP o PDF en KulmanLab CAD
description: El comando print abre el Administrador de Impresión — una ventana de exportación dedicada con vista previa en tiempo real, selector de formato, opción de escala de grises y selección opcional de área. Exporta hasta 2000×2000 px. Admite PNG, JPEG, WebP y PDF.
keywords: [exportar PNG CAD, exportar PDF CAD, imprimir dibujo CAD, administrador de impresión, exportar en escala de grises, exportar kulmanlab]
---

# Print

El comando `print` abre el **Administrador de Impresión** — una ventana de exportación dedicada con un lienzo de vista previa en tiempo real, selector de formato (PNG / JPEG / WebP / PDF), opción de escala de grises y recorte opcional de área. Nada se envía a una impresora física; el resultado se descarga como archivo.

## Abrir el Administrador de Impresión

Haz clic en el botón **Print** de la barra de herramientas o escribe `print` en el terminal. El Administrador de Impresión se abre de inmediato mostrando una vista previa del viewport actual.

## Diseño del Administrador de Impresión

La ventana tiene dos paneles:
- **Barra lateral izquierda** — todos los controles de exportación.
- **Panel derecho** — lienzo de vista previa en tiempo real que se actualiza al cambiar la configuración.

### Controles de la barra lateral

| Control | Descripción |
|---------|-------------|
| **Change Area** | Recortar a un rectángulo personalizado en el lienzo (ver más abajo) |
| Botón **Monochrome** | Convierte todas las líneas de color a negro — activado por defecto para una salida de impresión limpia |
| Lista desplegable **Format** | PNG, JPEG, WebP o PDF |
| Botón **Export** | Genera y descarga el archivo |

## Seleccionar un área de exportación personalizada

De forma predeterminada, la vista previa muestra exactamente lo que era visible en el lienzo cuando abriste el Administrador de Impresión. Para exportar una región específica:

1. Haz clic en **Change Area** — el Administrador de Impresión se oculta y el lienzo se vuelve interactivo.
2. **Haz clic en la primera esquina** del rectángulo de exportación.
3. **Haz clic en la esquina opuesta** — el Administrador de Impresión se reabre con el área seleccionada en la vista previa.

Presiona `Escape` durante la selección de área para cancelar y restaurar el área anterior.

El lienzo de vista previa se redimensiona dinámicamente para coincidir con la **relación de aspecto exacta** del área seleccionada, por lo que la vista previa es precisa a nivel de píxel.

## Formatos de exportación

| Formato | Mejor para | Notas |
|--------|----------|-------|
| **PNG** | Sin pérdida, líneas nítidas | Fondo blanco, sin transparencia |
| **JPEG** | Archivo más pequeño para compartir | Calidad del 95%, ligera compresión |
| **WebP** | Archivo más pequeño para la web | Misma calidad del 95%, mejor compresión que JPEG |
| **PDF** | Documentos listos para imprimir | Imagen incrustada a 150 DPI dentro de un contenedor PDF |

El archivo exportado se llama `kulman-<timestamp>.<ext>` y se descarga automáticamente.

## Resolución y fondo de exportación

- Resolución máxima: **2000 × 2000 píxeles**, escalada proporcionalmente al área seleccionada.
- El fondo es siempre **blanco**.
- Las capas marcadas como **no trazables** se excluyen de la exportación.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Escape` (durante la selección de área) | Cancelar la selección de área, restaurar el área anterior |
| `Escape` (en el Administrador de Impresión) | Cerrar el Administrador de Impresión |
