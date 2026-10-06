---
title: Comando Trim — Cortar Segmentos en Intersecciones
description: El comando Trim elimina la porción de una Line, Arc, Circle, Ellipse o Polyline entre dos puntos de intersección adyacentes más cercanos al cursor. Una vista previa muestra exactamente qué segmento se cortará antes de hacer clic.
keywords: [comando trim CAD, recortar línea CAD, recortar círculo CAD, recortar arco CAD, recortar elipse CAD, recortar polilínea CAD, cortar línea intersección, vista previa hover trim, kulmanlab]
group: edit
order: 8
---

# Trim

El comando `Recortar` elimina la porción de una [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) o [Polyline](../polyline/) que se encuentra entre dos puntos de intersección adyacentes, dividiendo la entidad en una o más partes restantes. El segmento a cortar se determina por la posición del cursor — pasa el cursor sobre la parte que deseas eliminar y haz clic para recortarla.

## Recortar una entidad

1. Escribe `Recortar` en el terminal o haz clic en el botón de la barra de herramientas **Trim**.
2. **Pasa el cursor sobre el segmento** que deseas eliminar — una vista previa resalta exactamente la porción que se cortará.
3. **Haz clic** para eliminar ese segmento.

El comando permanece activo después de cada recorte, por lo que puedes continuar pasando el cursor y haciendo clic para cortar más segmentos — en la misma entidad o en otra. Pulsa **Enter**, **Space** o **Escape** para salir.

```
  Antes:                      Después de recortar el segmento del medio:

  ──────●──────●──────        ──────●          ●──────
      intersec  intersec       (parte izqda)  (parte dcha)
                               (segmento del medio eliminado)
```

## Cómo se determina el segmento a recortar

El comando proyecta la posición del cursor sobre la entidad sobre la que se pasa el cursor y encuentra todos los puntos de intersección que tiene con otras entidades. Estas intersecciones dividen la entidad en segmentos — en una Line, Arc o Polyline abierta, los propios extremos de la entidad actúan como límites fijos adicionales. Un Circle o una Ellipse completos, o una Polyline cerrada (incluido un Rectangle), no tienen extremos propios, por lo que se necesitan al menos dos puntos de intersección antes de poder recortarlos. El segmento cuyo intervalo contiene la proyección del cursor se resalta y se eliminará al hacer clic.

- **Line, Arc y Polyline abierta** — el segmento eliminado puede ser la porción inicial (antes de la primera intersección), una porción intermedia (entre dos intersecciones, dividiendo la entidad en dos partes) o la porción final (después de la última intersección).
- **Circle, Ellipse y Polyline cerrada/Rectangle** — como no hay un inicio o fin fijo, solo se puede eliminar el arco entre dos *puntos de intersección*. Con menos de dos intersecciones, no aparece vista previa y hacer clic no hace nada. El resto de la forma se convierte en la única parte restante.

## Qué produce el recorte

| Entidad | Resultado tras recortar |
|--------|------------------------|
| Line | Hasta dos entidades Line más cortas |
| Arc | Hasta dos entidades Arc más cortas |
| Circle | Una entidad [Arc](../arc/) — la forma cerrada del círculo desaparece, por lo que la parte restante se almacena como arco |
| Ellipse | Una entidad Ellipse con ángulo inicial y final — la parte restante sigue siendo una Ellipse, ahora parcial |
| Polyline (abierta) | Hasta dos entidades Polyline más cortas |
| Polyline (cerrada) / Rectangle | Una entidad Polyline abierta — la forma cerrada desaparece, por lo que la parte restante se almacena abierta |
| Spline | Hasta dos objetos Spline más cortos: cada tramo es la misma curva sobre una parte de sí misma, almacenada por vértices de control (los puntos de ajuste de un spline de ajuste se descartan); un spline cerrado deja un tramo abierto |

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Space` | Salir del modo trim |
| `Escape` | Salir del modo trim |

## Entidades compatibles

| Entidad | ¿Se puede recortar? |
|---------|---------------------|
| Line | Sí |
| Arc | Sí |
| Circle | Sí — requiere 2 o más puntos de intersección |
| Ellipse | Sí — requiere 2 o más puntos de intersección |
| Polyline (abierta) | Sí |
| Polyline (cerrada) / Rectangle | Sí — requiere 2 o más puntos de intersección |
| Spline | Sí — un spline cerrado requiere 2 o más puntos de intersección; un spline también se corta donde se cruza consigo mismo |
| Text, Dimension, Leader | No |

Los objetos usados como **límites de corte** pueden ser Line, Arc, Circle, Ellipse, Polyline o Spline. Los objetos Text, Dimension y Leader nunca registran intersecciones, por lo que tampoco pueden actuar como límites.

Los **segmentos de arco** de una Polyline (dibujados con el interruptor Arc, o importados) se recortan exactamente igual que sus segmentos rectos — pasa el cursor sobre la parte del arco entre dos intersecciones y haz clic. El borde recortado conserva su curvatura; solo cambia su longitud.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| Qué hace | Elimina un segmento de una entidad | Estira un extremo de línea hasta un borde |
| Activación | Pasar cursor sobre el segmento a cortar | Pasar cursor cerca del extremo a extender |
| Resultado | La entidad se divide o acorta | El extremo de la línea se mueve hasta el borde |
| Entidades compatibles | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
