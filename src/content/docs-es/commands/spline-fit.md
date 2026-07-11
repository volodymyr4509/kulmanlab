---
title: Comando Spline Fit — Dibujar Splines Interpoladas a Través de Puntos Clicados en KulmanLab CAD
description: El comando Spline Fit dibuja una spline cúbica que pasa exactamente por cada punto clicado. Internamente la curva se almacena con puntos de ajuste y vértices de control calculados. Arrastrar un agarre de punto de ajuste reinterrpola toda la curva. Compatibilidad total con DXF como entidades SPLINE.
keywords: [comando spline fit CAD, spline interpolada CAD, spline a través de puntos, dibujar curva suave CAD, puntos de ajuste SPLINE DXF, edición de agarres spline, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

El comando `splinefit` dibuja una spline cúbica que pasa por cada punto que hagas clic — una curva interpolada. A diferencia de [Spline CV](../spline-cv/), donde la curva solo es atraída hacia los vértices de control, aquí la curva está obligada a pasar exactamente por cada coordenada clicada. Internamente el editor ajusta los vértices de control para lograrlo, y esos CVs se almacenan junto con los puntos de ajuste en el archivo DXF.

## Dibujar una spline a través de puntos de ajuste

1. Escribe `splinefit` en el terminal o haz clic en el botón de la barra de herramientas **Spline Fit**.
2. **Haz clic para colocar puntos de ajuste** — la curva pasará por cada uno. O escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
3. Pulsa **Enter** para terminar (se requieren al menos 2 puntos).

```
  ●──────●──────●──────●  ← la curva pasa exactamente por cada clic
  p1     p2     p3     p4
```

La vista previa en vivo muestra la curva interpolada actual al mover el cursor, incluyendo el siguiente punto prospectivo en la posición del cursor. Pulsa **Escape** para descartar todos los puntos colocados y salir.

## Entrada de coordenadas

En lugar de hacer clic, escribe una posición exacta para cualquier punto de ajuste:

1. Escribe el valor X.
2. Pulsa `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Pulsa **Enter** para colocar el punto de ajuste.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X |
| `,` | Fijar X y pasar a entrada Y |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita, o terminar la spline si no hay entrada en curso y existen ≥ 2 puntos |
| `Escape` | Descartar todos los puntos y salir |

## Edición de agarres — reformar mediante puntos de ajuste

Una spline de ajuste seleccionada expone un agarre por punto de ajuste:

| Agarre | Posición | Qué hace |
|--------|----------|----------|
| **Punto de ajuste** | En cada posición clicada | Arrastrar para mover ese punto de ajuste — toda la curva se reinterrpola para pasar por la nueva posición |

Arrastrar un agarre reajusta toda la curva, no solo los segmentos adyacentes. Esto difiere de la edición de agarres de polilíneas, donde mover un vértice solo reforma los dos segmentos adyacentes.

No hay un agarre de "mover toda la spline". Para trasladar la spline completa, usa el comando [Move](../move/).

## Seleccionar splines de ajuste

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Selecciona si el clic cae cerca de cualquier punto de la curva |
| **Arrastrar a la derecha** (estricto) | Todos los puntos de muestra a lo largo de la curva deben estar dentro del cuadro de selección |
| **Arrastrar a la izquierda** (cruzado) | Cualquier parte de la curva que cruce el límite del cuadro de selección la selecciona |

## Comandos de edición compatibles

| Comando | Qué ocurre con la spline |
|---------|--------------------------|
| [Move](../move/) | Traslada todos los puntos de ajuste y los CVs recalculados con el mismo desplazamiento |
| [Copy](../copy/) | Crea una spline idéntica en una nueva posición |
| [Rotate](../rotate/) | Rota todos los puntos de ajuste alrededor del punto base elegido |
| [Mirror](../mirror/) | Refleja todos los puntos de ajuste respecto al eje de simetría |
| [Scale](../scale/) | Escala todos los puntos de ajuste uniformemente desde el punto base |
| [Delete](../delete/) | Elimina la spline |

Las splines no admiten **Offset**, **Trim** ni **Extend**.

## Propiedades

**General**

| Propiedad | Valor predeterminado | Significado |
|-----------|---------------------|-------------|
| Color | 256 (ByLayer) | Índice de color ACI |
| Capa | `0` | Asignación de capa |
| Linetype | ByLayer | Patrón de tipo de línea con nombre |
| Linetype Scale | 1 | Factor de escala del patrón de tipo de línea |
| Thickness | 0 | Grosor de extrusión |

**Geometría**

| Propiedad | Significado |
|-----------|-------------|
| Degree | Grado polinomial — siempre 3 (cúbico) |
| Fit Points | Coordenadas de todos los puntos de paso clicados |
| Control Vertices | CVs calculados internamente usados para renderizar la curva |

## Spline Fit vs Spline CV — cuál usar

| | Spline Fit | Spline CV |
|---|------------|-----------|
| La curva pasa por los puntos | Exactamente en cada punto clicado | Solo el primero y el último (fijados) |
| Efecto de edición de agarres | Punto de ajuste se mueve → toda la curva reinterpolada | CV se mueve → curva atraída hacia la nueva posición |
| Predictibilidad de forma | Alta — la curva sigue los clics | Menor — la curva va por detrás de los CVs |
| Ideal para | Curvas que deben pasar por coordenadas específicas | Curvas estéticas suaves, trayectorias libres |

## DXF — entidad SPLINE (forma de puntos de ajuste)

Las splines de ajuste se guardan como entidades `SPLINE` en el archivo DXF, almacenando tanto las coordenadas de los puntos de ajuste como los vértices de control calculados. El `splineFlag` se establece en `8` (spline de puntos de ajuste) para que una aplicación que recargue el archivo sepa qué conjunto de puntos mostrar como agarres editables. Todas las propiedades — color, capa, tipo de línea, escala de tipo de línea y grosor — se conservan sin pérdida. Las aplicaciones DXF que admiten splines de puntos de ajuste (LibreCAD, FreeCAD) mostrarán los puntos de ajuste como los datos editables principales.
