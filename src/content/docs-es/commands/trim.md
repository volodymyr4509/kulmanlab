---
title: Comando Trim — Cortar Segmentos de Línea en Intersecciones
description: El comando Trim elimina la porción de una Line entre los dos puntos de intersección adyacentes más cercanos al cursor. Una vista previa al pasar el cursor en rojo muestra exactamente qué segmento se cortará antes de hacer clic. Trim funciona solo en entidades Line — no en arcos, círculos ni polilíneas.
keywords: [comando trim CAD, recortar línea CAD, cortar línea intersección, vista previa hover trim, solo líneas trim, kulmanlab]
group: edit
order: 8
---

# Trim

El comando `trim` elimina la porción de una [Line](../line/) que se encuentra entre dos puntos de intersección adyacentes, dividiendo la línea en uno o dos segmentos más cortos. El segmento a cortar se determina por la posición del cursor — pasa el cursor sobre la parte que deseas eliminar y haz clic para recortarla.

Trim funciona **solo en entidades Line**. Para arcos, círculos, polilíneas y otros tipos de entidades, usa [Delete](../delete/) o la edición de agarres en su lugar.

## Recortar una línea

1. Escribe `trim` en el terminal o haz clic en el botón de la barra de herramientas **Trim**.
2. **Pasa el cursor sobre el segmento de línea** que deseas eliminar — una vista previa en rojo resalta exactamente la porción que se cortará.
3. **Haz clic** para eliminar ese segmento.

El comando permanece activo después de cada recorte, por lo que puedes continuar pasando el cursor y haciendo clic para cortar más segmentos. Pulsa **Escape** para salir.

```
  Antes:                      Después de recortar el segmento del medio:

  ──────●──────●──────        ──────●          ●──────
      intersec  intersec       (parte izqda)  (parte dcha)
                               (segmento del medio eliminado)
```

## Cómo se determina el segmento a recortar

El comando proyecta la posición del cursor sobre la línea sobre la que se pasa el cursor y encuentra todos los puntos de intersección que la línea tiene con otras entidades. Estos parámetros de intersección dividen la línea en segmentos. El segmento cuyo intervalo contiene la proyección del cursor se resalta y se eliminará al hacer clic.

- Si el cursor está **antes de la primera intersección**: se elimina esa porción inicial de la línea.
- Si el cursor está **entre dos intersecciones**: se elimina esa porción del medio; la línea se divide en dos.
- Si el cursor está **después de la última intersección**: se elimina esa porción final.
- Si la línea **no tiene intersecciones** con ninguna otra entidad: no se muestra vista previa y hacer clic no hace nada.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Escape` | Salir del modo trim |

## Entidades compatibles

| Entidad | ¿Se puede recortar? |
|---------|---------------------|
| Line | Sí |
| Arc, Circle, Ellipse | No |
| Polyline / Rectangle | No |
| Text, Spline, Dimension, Leader | No |

Las entidades usadas como **bordes de corte** pueden ser de cualquier tipo — solo la línea que se recorta debe ser una entidad Line.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Qué hace | Elimina un segmento de una línea | Estira un extremo de línea hasta un borde |
| Activación | Pasar cursor sobre el segmento a cortar | Pasar cursor cerca del extremo a extender |
| Resultado | La línea se divide o acorta | El extremo de la línea se mueve hasta el borde |
| Ambos | Solo líneas | Solo líneas |
