---
sidebar_position: 1
title: Cuadrícula y Ajuste — Alinear Dibujos a una Cuadrícula Regular en KulmanLab CAD
description: Los controles de Cuadrícula y Ajuste en KulmanLab CAD superponen una cuadrícula de referencia en el lienzo y bloquean el movimiento del cursor a los puntos de la cuadrícula. El espaciado de la cuadrícula se adapta automáticamente al nivel de zoom actual para que siempre muestre valores de modelo redondos.
keywords: [cuadrícula CAD, ajuste a cuadrícula, espaciado de cuadrícula, ayudas de dibujo, kulmanlab, puntos de cuadrícula, ajuste ortogonal]
---

# Cuadrícula y Ajuste

Dos botones de alternancia en la barra de control permiten superponer una cuadrícula de referencia y bloquear el cursor a sus intersecciones mientras se dibuja.

| Botón | Qué hace |
|-------|----------|
| **Grid** | Muestra una cuadrícula visual de puntos o líneas en el lienzo |
| **Snap** | Bloquea el cursor al punto de cuadrícula más cercano cuando no hay ningún ajuste de geometría más cercano |

Los dos controles son independientes — puedes mostrar la cuadrícula sin ajuste, ajustar sin mostrar la cuadrícula, o usar ambos juntos.

## Activar cuadrícula y ajuste

Haz clic en **Grid** o **Snap** en la barra de herramientas del panel de control. El estado activo aparece resaltado. Los ajustes se conservan entre sesiones.

Cuando **Snap** está activado, la cuadrícula cambia automáticamente su visualización de líneas a **puntos** — los puntos marcan los puntos exactos a los que se ajustará el cursor.

## Espaciado adaptativo de la cuadrícula

El espaciado de la cuadrícula se ajusta automáticamente al hacer zoom para que las líneas de la cuadrícula siempre estén a una distancia cómoda en pantalla (~40 px). El paso es siempre un número "redondo" — un múltiplo de 1, 2 o 5 a cualquier potencia de diez:

| Ejemplo de zoom / escala de modelo | Paso de cuadrícula |
|------------------------------------|-------------------|
| Alejado (área grande) | 100, 500, 1000 … |
| Zoom medio | 10, 20, 50 … |
| Acercado (detalle fino) | 1, 2, 5 … |
| Muy cerca | 0,1, 0,2, 0,5 … |

Esto significa que cada punto de ajuste cae en una coordenada redonda en el espacio del modelo — no se acumulan desplazamientos de punto flotante.

## Prioridad de ajuste

**Los ajustes a extremos e intersecciones siempre tienen prioridad sobre la cuadrícula.** El cursor se ajusta a un punto de cuadrícula solo cuando no está cerca de ningún candidato de ajuste de geometría (extremo, punto medio, centro o intersección).

Esto significa que puedes dibujar con el ajuste a cuadrícula activado y aún así ajustarte con precisión a la geometría existente cuando el cursor pase suficientemente cerca. La cuadrícula es un recurso alternativo, no una anulación.

## Modo de diseño

- **Espacio modelo** — los puntos o líneas llenan toda el área del lienzo visible.
- **Espacio de diseño (papel)** — los puntos están recortados al rectángulo del papel y no se extienden fuera de él.
- **Dentro de una ventana gráfica** — la cuadrícula sigue el sistema de coordenadas del modelo a la escala de la ventana gráfica, de modo que los puntos se alinean con las mismas unidades del modelo independientemente de la ampliación de la ventana gráfica.

## Flujo de trabajo típico

1. Activa **Grid** y **Snap** antes de comenzar un dibujo que requiera espaciado regular.
2. Haz zoom al nivel donde el paso de la cuadrícula coincida con tu incremento deseado (p. ej. zoom hasta que los puntos estén a 10 unidades de distancia).
3. Dibuja — el cursor se ajusta automáticamente a los puntos de la cuadrícula. La geometría existente sigue ajustándose normalmente cuando estás cerca de ella.
4. Desactiva **Snap** cuando necesites movimiento libre del cursor o quieras ajustarte solo a la geometría.
