---
sidebar_position: 8
title: Comando Spline CV — Dibujar B-Splines Colocando Vértices de Control en KulmanLab CAD
description: El comando Spline CV dibuja una B-spline cúbica colocando vértices de control. La curva es atraída hacia los vértices pero pasa solo por el primero y el último (nudos fijados). Cada agarre CV puede arrastrarse para reformar la curva tras la colocación. Compatibilidad total con DXF como entidades SPLINE.
keywords: [comando spline CAD, B-spline vértices de control, spline fijada CAD, dibujar spline CAD, entidad SPLINE DXF, edición de agarres spline, kulmanlab]
---

# Spline CV

El comando `splinecv` dibuja una **B-spline cúbica** colocando vértices de control (CVs). La curva resultante es atraída hacia cada CV pero no pasa por ellos — excepto en el primer y último vértice, donde los **nudos fijados** anclan la curva exactamente. Esto proporciona un control intuitivo de la forma: acerca un vértice para empujar la curva hacia él sin obligarla a tocar cada punto.

## Dibujar una spline por vértices de control

1. Escribe `splinecv` en el terminal o haz clic en el botón de la barra de herramientas **Spline CV**.
2. **Haz clic para colocar vértices de control** — cada clic añade un vértice. O escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
3. Pulsa **Enter** para terminar (se requieren al menos 2 vértices).

```
  CV ●         ● CV
      \       /
       \     /    ← curva atraída hacia los CVs
        \   /         pero sin pasar por ellos
  CV ●   ●   ● CV (inicio/fin: la curva toca aquí)
```

La vista previa en vivo se actualiza al mover el cursor después de cada vértice, mostrando cómo quedará la spline con el siguiente punto en la posición del cursor. Pulsa **Escape** para descartar todos los vértices colocados y salir.

## Entrada de coordenadas

En lugar de hacer clic, escribe una posición exacta para cualquier vértice de control:

1. Escribe el valor X.
2. Pulsa `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Pulsa **Enter** para colocar el vértice.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X |
| `,` | Fijar X y pasar a entrada Y |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita, o terminar la spline si no hay entrada en curso y existen ≥ 2 vértices |
| `Escape` | Descartar todos los vértices y salir |

## Edición de agarres — reformar mediante vértices de control

Una spline CV seleccionada expone un agarre por vértice de control:

| Agarre | Posición | Qué hace |
|--------|----------|----------|
| **Vértice de control** | En cada posición CV | Arrastrar para mover ese CV — la curva se reforma hacia la nueva posición |

No hay un agarre de "mover toda la spline". Para trasladar la spline completa, usa el comando [Move](../move/).

## Seleccionar splines CV

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Selecciona si el clic cae cerca de cualquier punto de la curva |
| **Arrastrar a la derecha** (estricto) | Todos los puntos de muestra a lo largo de la curva deben estar dentro del cuadro de selección |
| **Arrastrar a la izquierda** (cruzado) | Cualquier parte de la curva que cruce el límite del cuadro de selección la selecciona |

## Comandos de edición compatibles

| Comando | Qué ocurre con la spline |
|---------|--------------------------|
| [Move](../move/) | Traslada todos los vértices de control con el mismo desplazamiento |
| [Copy](../copy/) | Crea una spline idéntica en una nueva posición |
| [Rotate](../rotate/) | Rota todos los CVs alrededor del punto base elegido |
| [Mirror](../mirror/) | Refleja todos los CVs respecto al eje de simetría |
| [Scale](../scale/) | Escala todos los CVs uniformemente desde el punto base |
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
| Control Vertices | Coordenadas de todos los CVs |
| Fit Points | Vacío para splines CV; poblado solo para splines de puntos de ajuste |

## Spline CV vs Spline Fit — cuál usar

| | Spline CV | Spline Fit |
|---|-----------|------------|
| La curva pasa por los puntos | Solo el primero y el último (fijados) | Exactamente en cada punto clicado |
| Control de forma | Acercar CVs hacia una región | Mover puntos de ajuste que la curva debe tocar |
| Efecto de edición de agarres | CV se mueve → curva atraída | Punto de ajuste se mueve → curva reinterpolada |
| Ideal para | Curvas estéticas suaves, trayectorias libres | Curvas que deben pasar por coordenadas específicas |

## DXF — entidad SPLINE (forma de vértices de control)

Las splines CV se guardan como entidades `SPLINE` en el archivo DXF, almacenando el grado, el vector de nudos y todas las coordenadas de los vértices de control. Todas las propiedades — color, capa, tipo de línea, escala de tipo de línea y grosor — se conservan sin pérdida. El `splineFlag` se establece en `9` (spline CV) para que la forma se preserve al recargar. Cualquier aplicación DXF que admita entidades `SPLINE` con datos CV las leerá correctamente.
