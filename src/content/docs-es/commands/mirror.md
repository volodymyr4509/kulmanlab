---
sidebar_position: 4
title: Comando mirror — Reflejar entidades a través de un eje de dos puntos en KulmanLab CAD
description: El comando mirror refleja las entidades seleccionadas a través de una línea de espejo definida por dos clics. Los originales siempre se conservan — Mirror crea nuevas copias reflejadas. El eje de espejo puede estar en cualquier ángulo y se ajusta a incrementos de 45°.
keywords: [comando mirror CAD, reflejar entidades CAD, simetría espejo CAD, voltear objetos CAD, eje de espejo CAD, kulmanlab]
---

# Mirror

El comando `mirror` crea copias reflejadas de las entidades seleccionadas a través de un eje de dos puntos. Los originales **siempre se conservan** — a diferencia de [Move](./move) o [Rotate](./rotate), Mirror nunca modifica las entidades existentes; solo añade nuevas.

## Dos formas de iniciarlo

**Pre-seleccionar y luego reflejar** — selecciona las entidades primero y luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `mirror` en el terminal o haz clic en el botón **Mirror** de la barra de herramientas.
3. **Haz clic en el primer punto** del eje de espejo, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
4. **Haz clic en el segundo punto** — las copias reflejadas se colocan y el comando termina. La entrada de coordenadas también funciona aquí.

**Activar y luego seleccionar** — inicia el comando sin nada seleccionado:

1. Escribe `mirror` o haz clic en el botón de la barra de herramientas.
2. **Selecciona objetos** — haz clic para alternar, o arrastra para seleccionar por área.
3. Presiona **Enter** o **Space** para confirmar la selección.
4. **Haz clic en el primer punto**, luego **haz clic en el segundo punto** del eje de espejo (la entrada de coordenadas está disponible en ambos pasos).

```
  Original:          Eje de espejo:      Resultado:
                     |
  [entidad A]    →   |    →    [entidad A] + [entidad A reflejada]
                     |
```

Una vista previa en tiempo real de las copias reflejadas sigue al cursor mientras posicionas el segundo punto del eje.

## Eje de espejo

El eje es una línea infinita a través de los dos puntos en los que se hizo clic. Puede estar en cualquier ángulo:

- Mueve el cursor cerca de un **eje de ajuste de 45°** (0°, 45°, 90°, 135°, …) y el eje se bloquea en ese ángulo — útil para reflexiones horizontales, verticales o diagonales limpias.
- Haz clic fuera de la zona de ajuste para un eje de ángulo libre.

## Entrada de coordenadas

En cualquier paso de punto del eje, escribe una posición exacta en lugar de hacer clic:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para confirmar.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Confirmar selección |
| `0`–`9`, `.`, `-` | Iniciar la entrada de coordenada X |
| `,` | Bloquear X y pasar a la entrada de Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar la coordenada escrita |
| `Escape` | Cancelar y restablecer |

## Selección durante el comando

| Método | Comportamiento |
|--------|-----------|
| **Clic** | Alterna la entidad bajo el cursor |
| **Arrastrar a la derecha** (estricto) | Añade entidades totalmente dentro del cuadro |
| **Arrastrar a la izquierda** (cruzado) | Añade entidades que intersectan el cuadro |
| **Enter** / **Space** | Confirma la selección |

## Qué se refleja

Se admite todo tipo de entidad. La geometría se refleja a través del eje matemáticamente:

| Entidad | Qué cambia |
|--------|-------------|
| Line | Ambos puntos finales reflejados |
| Circle | Centro reflejado; radio sin cambios |
| Arc | Centro reflejado; ángulos de inicio y fin recalculados a través del eje |
| Ellipse | Centro reflejado; dirección del eje mayor invertida a través del eje |
| Polyline / Rectangle | Cada vértice reflejado |
| Text | Punto de ancla reflejado; la cadena de texto **no** se invierte |
| Spline | Todos los vértices de control / puntos de ajuste reflejados |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Originales | Siempre conservados | Siempre conservados |
| Posición de la nueva entidad | Reflejada a través de un eje | Desplazada por un vector de traslación |
| Mejor para | Diseños simétricos, características bilaterales | Repetir geometría en cualquier dirección |
