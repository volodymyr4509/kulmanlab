---
title: Comando move — Trasladar entidades seleccionadas por punto base
description: El comando move traslada una o más entidades seleccionadas por un punto base y un destino. Admite preselección, bloqueo de ángulo y entrada de distancia exacta. Después del movimiento, las entidades permanecen seleccionadas en su nueva posición. Se admite todo tipo de entidad.
keywords: [comando move CAD, trasladar entidades CAD, mover objetos CAD, bloqueo de ángulo al mover, distancia exacta al mover, mover con agarre CAD, kulmanlab]
group: edit
order: 1
---

# Move

El comando `move` traslada las entidades seleccionadas desde un punto base hasta un punto de destino. El desplazamiento aplicado a cada entidad seleccionada es el vector desde la base hasta el destino. Después del movimiento, todas las entidades permanecen seleccionadas en su nueva posición, listas para seguir editando.

## Dos formas de iniciarlo

**Pre-seleccionar y luego mover** — selecciona las entidades primero y luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `move` en el terminal o haz clic en el botón **Move** de la barra de herramientas.
3. **Haz clic en el punto base**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
4. **Haz clic en el destino** — todas las entidades seleccionadas se desplazan por el vector base→destino. La entrada de coordenadas también funciona aquí.

**Activar y luego seleccionar** — inicia el comando sin nada seleccionado:

1. Escribe `move` o haz clic en el botón de la barra de herramientas.
2. **Selecciona objetos** — haz clic para alternar entidades individuales, o arrastra para seleccionar por área.
3. Presiona **Enter** o **Space** para confirmar la selección.
4. **Haz clic en el punto base**, luego **haz clic en el destino** (la entrada de coordenadas está disponible en ambos pasos).

```
  Antes:                    Después:
  ● base                       → ● destino
  [entidad A]                      [entidad A movida]
  [entidad B]                      [entidad B movida]
```

Una vista previa fantasma de todas las entidades seleccionadas sigue al cursor desde el punto base hasta el destino, mostrando el resultado antes de hacer clic.

## Entrada de coordenadas

En el paso del punto base o del destino, escribe una posición exacta en lugar de hacer clic:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para confirmar.

## Bloqueo de ángulo y distancia exacta

Después de establecer el punto base, el comando busca un eje de ajuste de 45° (0°, 45°, 90°, 135°, …). La dirección se **bloquea** cuando el cursor está suficientemente lejos de la base y dentro de un ancho de agarre del eje. Mientras está bloqueado:

- La vista previa fantasma se ajusta al eje.
- Escribe una distancia y presiona **Enter** para mover exactamente esa distancia a lo largo de la dirección bloqueada.
- Hacer clic proyecta sobre el eje, por lo que el destino siempre queda exactamente sobre él.

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.` | Añadir al valor de distancia |
| `-` | Distancia negativa — invierte la dirección a lo largo del eje (solo primer carácter) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Aplicar el movimiento a la distancia escrita |

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Confirmar selección y avanzar a la fase del punto base |
| `0`–`9`, `.`, `-` | Iniciar la entrada de coordenada X, o distancia cuando el ángulo está bloqueado |
| `,` | Bloquear X y pasar a la entrada de Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar coordenada o aplicar movimiento a la distancia escrita |
| `Escape` | Cancelar y restablecer |

## Activar Move desde un agarre

Hacer clic en el **agarre de punto medio** de una [Line](../line/) seleccionada lanza Move automáticamente, con el punto medio ya establecido como punto base y la fase de movimiento activa. Esta es la forma más rápida de reposicionar una sola línea sin pasar por el paso de selección.

## Selección durante el comando

Cuando el comando comienza en la fase de selección:

| Método | Comportamiento |
|--------|-----------|
| **Clic** | Alterna la entidad bajo el cursor dentro/fuera de la selección |
| **Arrastrar a la derecha** (estricto) | Añade entidades totalmente dentro del cuadro |
| **Arrastrar a la izquierda** (cruzado) | Añade entidades que intersectan el límite del cuadro |
| **Enter** / **Space** | Confirma la selección y pasa a la fase del punto base |

## Después del movimiento

Las entidades movidas permanecen seleccionadas en su nueva posición. Esto significa que puedes inmediatamente:
- Ejecutar **Move** de nuevo para ajustarlas más.
- Ejecutar [Copy](../copy/), [Rotate](../rotate/) o [Scale](../scale/) sin volver a seleccionar.
- Presionar **Delete** para eliminarlas.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Posición original | Vacía — las entidades ya no están allí | Conservada — los originales permanecen en su lugar |
| Cantidad de resultado | El mismo número de entidades | Un conjunto adicional por operación |
| Selección después | Entidades movidas seleccionadas en la nueva posición | Entidades copiadas seleccionadas en la nueva posición |
| Mejor para | Reposicionar geometría | Duplicar geometría |

## Entidades admitidas

Move funciona con todo tipo de entidad: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader y todas las demás. Todas las entidades implementan `translate(dx, dy)` por lo que ninguna queda excluida.
