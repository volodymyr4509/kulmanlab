---
sidebar_position: 13
title: Comando Dimension Linear — Cotas Horizontales y Verticales en KulmanLab CAD
description: El comando Dimension Linear mide la distancia horizontal o vertical entre dos puntos. La línea de cota siempre está alineada con los ejes — presiona H o V para bloquear la orientación, o deja que la posición del cursor lo decida automáticamente. Exportación completa a DXF como entidades DIMENSION.
keywords: [cota lineal CAD, cota horizontal CAD, cota vertical CAD, dimlinear, bloqueo de orientación H V, desplazamiento de cota, kulmanlab]
---

# Dimension Linear

El comando `dimlinear` coloca una cota horizontal o vertical entre dos orígenes de líneas de extensión. La línea de cota siempre corre perfectamente horizontal o perfectamente vertical — no puede colocarse en un ángulo arbitrario. Usa [Dimension Aligned](../dim-aligned/) cuando necesites una cota paralela a una línea diagonal.

## Anatomía de una cota lineal

```
  |←————— 5.00 —————→|
  |                   |
  ●  (línea ext. 1)   ●  (línea ext. 2)
  p1                  p2
```

- **Líneas de extensión** — descienden desde cada punto medido perpendiculares a la línea de cota.
- **Línea de cota** — horizontal (mide distancia X) o vertical (mide distancia Y).
- **Valor** — la distancia proyectada a lo largo del eje elegido, no la distancia real punto a punto.

## Colocar una cota lineal

1. Escribe `dimlinear` en el terminal o haz clic en el botón **Dimension Linear** de la barra de herramientas.
2. **Haz clic en el origen de la primera línea de extensión** (p1), o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el origen de la segunda línea de extensión** (p2). La entrada de coordenadas también funciona aquí.
4. **Mueve el cursor** para posicionar la línea de cota. La orientación se detecta automáticamente según la posición del cursor.
5. **Haz clic** para colocar, o escribe una distancia de desplazamiento y presiona **Enter** para una colocación precisa.

## Detección automática de orientación

Cuando no se fuerza ninguna orientación, el comando lee la posición del cursor relativa a los dos puntos medidos:

| Posición del cursor | Orientación detectada | Qué se mide |
|---------------------|-----------------------|-------------|
| Arriba o abajo de los puntos | Horizontal | Δ X entre p1 y p2 |
| A la izquierda o derecha de los puntos | Vertical | Δ Y entre p1 y p2 |

Presiona **H** para bloquear horizontal o **V** para bloquear vertical en cualquier momento durante la fase de colocación. Una vez bloqueada, la orientación no cambia al mover el cursor.

## Distancia de desplazamiento escrita

Escribe un número durante la colocación para fijar la línea de cota a una distancia exacta desde los puntos medidos:

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar dígito a la distancia de desplazamiento |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` / `Space` | Colocar a la distancia escrita |

El lado del cursor (arriba/abajo para horizontal, izquierda/derecha para vertical) determina el signo — la línea de cota aparece en el lado donde está actualmente el cursor.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X (fases p1/p2), o distancia de desplazamiento (fase de colocación) |
| `,` | Bloquear X y pasar a la entrada Y (fases p1/p2) |
| `H` | Bloquear orientación horizontal (solo en la fase de colocación) |
| `V` | Bloquear orientación vertical (solo en la fase de colocación) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` / `Space` | Confirmar coordenada escrita o desplazamiento |
| `Escape` | Cancelar |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Eje | Siempre H o V | Paralela a la línea medida |
| Mide | Solo componente X o Y | Distancia euclidiana real |
| Teclas H/V | Sí — bloquear orientación | No — siempre sigue p1→p2 |
| Mejor para | Composiciones ortogonales, planos | Elementos diagonales, cortes en ángulo |

## Editar la etiqueta — simple mode

**Haz doble clic** en una cota lineal colocada para abrir el editor de texto en **simple** mode. El editor se precarga con el valor renderizado actual para que puedas posicionar el cursor y editarlo directamente.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Font / Height | Se aplica a la **etiqueta completa** a la vez |
| Formato por carácter | No compatible |
| `Enter` | Confirma el valor y cierra el editor |
| Multilínea | No compatible |

Consulta [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para la referencia completa.

## Encadenar cotas

Para agregar más cotas continuando desde la última línea de extensión, usa [Dimension Continue](../dim-continue/) inmediatamente después de colocar esta.

## DXF — entidad DIMENSION

Las cotas lineales se guardan como entidades `DIMENSION` con `rotationDeg` establecido en `0` (horizontal) o `90` (vertical). Los orígenes de las líneas de extensión, la posición de la línea de cota, la posición del texto, el valor medido, el estilo de flecha, la altura de texto y todos los indicadores de visualización se exportan sin pérdida.
