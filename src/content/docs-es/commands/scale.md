---
title: Comando Scale — Redimensionar Entidades Uniformemente Alrededor de un Punto Base en KulmanLab CAD
description: El comando Scale redimensiona las entidades seleccionadas uniformemente mediante un factor escrito alrededor de un punto base fijo. El factor siempre se introduce por teclado — no hay escala por clic. Un factor mayor que 1 agranda; menor que 1 reduce. Se admiten todos los tipos de entidades.
keywords: [comando scale CAD, redimensionar entidades CAD, escalar objetos CAD, escala uniforme CAD, factor de escala CAD, agrandar reducir CAD, kulmanlab]
group: edit
order: 5
---

# Scale

El comando `scale` redimensiona las entidades seleccionadas uniformemente alrededor de un punto base. Todas las distancias desde el punto base se multiplican por el factor de escala — un factor de `2` duplica todas las dimensiones, `0.5` las reduce a la mitad. El factor siempre se introduce escribiéndolo; no hay escala por clic.

## Dos formas de empezar

**Preseleccionar y luego escalar** — selecciona las entidades primero y luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `scale` en el terminal o haz clic en el botón de la barra de herramientas **Scale**.
3. **Haz clic en el punto base** — el punto fijo que no se mueve durante el escalado. O escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
4. **Escribe el factor de escala** y pulsa **Enter**.

**Activar y luego seleccionar** — inicia el comando sin nada seleccionado:

1. Escribe `scale` o haz clic en el botón de la barra de herramientas.
2. **Selecciona objetos** — haz clic para alternar, o arrastra para seleccionar por área.
3. Pulsa **Enter** o **Space** para confirmar la selección.
4. **Haz clic en el punto base** (entrada de coordenadas disponible) y luego escribe el factor.

```
  Base ●                Base ●
        [entidad]  →          [entidad mayor]
  factor = 2 → las distancias desde ● se duplican
```

## Escribir el factor de escala

Después de colocar el punto base, el terminal muestra `enter scale factor:` y espera la entrada del teclado:

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Añadir dígito al factor |
| `-` | Factor negativo (solo como primer carácter — invierte y luego escala) |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Aplicar la escala al factor escrito |

El factor debe ser distinto de cero. Valores habituales:

| Factor | Efecto |
|--------|--------|
| `2` | Duplica todas las dimensiones |
| `0.5` | Reduce todas las dimensiones a la mitad |
| `1.5` | Aumenta un 50% |
| `-1` | Refleja respecto al punto base (equivale a una rotación de 180°) |

No hay vista previa en vivo mientras se escribe — el resultado escalado aparece solo después de pulsar **Enter**.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Space` | Confirmar selección |
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X (fase de punto base), o factor de escala (fase de factor) |
| `,` | Fijar X y pasar a entrada Y (fase de punto base) |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Confirmar coordenada o aplicar escala |
| `Escape` | Cancelar y reiniciar |

## Selección durante el comando

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Alterna la entidad bajo el cursor |
| **Arrastrar a la derecha** (estricto) | Añade entidades completamente dentro del cuadro |
| **Arrastrar a la izquierda** (cruzado) | Añade entidades que se intersectan con el cuadro |
| **Enter** / **Space** | Confirma la selección |

## Qué se escala

Se admiten todos los tipos de entidades. Cada entidad escala su geometría relativa al punto base:

| Entidad | Qué cambia |
|---------|-----------|
| Line | Ambos extremos escalados desde el punto base |
| Circle | Centro escalado desde el punto base; radio multiplicado por el factor |
| Arc | Centro escalado; radio multiplicado por el factor; ángulos sin cambio |
| Ellipse | Centro escalado; ambas longitudes de semiejes multiplicadas por el factor |
| Polyline / Rectangle | Cada vértice escalado desde el punto base |
| Text | Punto de anclaje escalado; altura multiplicada por el factor |
| Spline | Todos los vértices de control / puntos de ajuste escalados |
