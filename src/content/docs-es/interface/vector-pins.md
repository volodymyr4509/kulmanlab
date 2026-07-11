---
title: Vector Pins — Ajustar a Líneas de Referencia a Través de Puntos Fijados en KulmanLab CAD
description: Los Vector Pins permiten fijar un punto de ajuste manteniendo el cursor sobre él medio segundo, y luego rastrear el cursor a lo largo de líneas de referencia horizontales y verticales discontinuas que pasan por el punto fijado — alinea geometría nueva con puntos existentes sin líneas de construcción.
keywords: [vector pins, rastreo de referencia a objetos, líneas de referencia, rastreo de alineación, rastreo de ajuste CAD, líneas de construcción, kulmanlab]
group: interface
order: 2
---

# Vector Pins

Los **Vector Pins** son una ayuda de dibujo que permite alinear geometría nueva con puntos existentes sin dibujar líneas de construcción. Mantén el cursor sobre un punto de ajuste durante medio segundo para *fijarlo* — el pin proyecta entonces líneas de referencia horizontales y verticales invisibles, y el cursor se ajusta a ellas cada vez que se acerca. Es el equivalente en KulmanLab CAD al rastreo de referencia a objetos de las aplicaciones CAD de escritorio.

La función se controla con el conmutador **Pins** de la barra de control (junto a Grid, Snap y ANGL). Está **activada por defecto**, y el ajuste persiste entre sesiones.

## Fijar un punto

1. Inicia un comando que pida un punto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), etcétera.
2. Mueve el cursor sobre un punto de ajuste de la geometría existente — un marcador de extremo, punto medio o centro.
3. **Mantén el cursor quieto durante 500 ms.** El marcador se convierte en un **cuadrado** relleno de color de acento — el punto queda fijado.
4. Repite para fijar tantos puntos como necesites. Cada pin sigue proyectando sus líneas de referencia.

Fijar también funciona fuera de un comando: pasar el cursor sobre un **agarre** de una entidad seleccionada lo fija de la misma manera.

## Rastreo a lo largo de las líneas de referencia

Cada punto fijado proyecta dos líneas de referencia invisibles — una **horizontal** y una **vertical** — a través de sus coordenadas exactas. Al mover el cursor:

- A menos de **12 px** de la línea vertical de un pin, el cursor se ajusta a ella: se dibuja una línea discontinua de color de acento a través del pin por toda la vista, y un **marcador X** muestra la posición ajustada. Tu coordenada X es ahora *exactamente* la X del pin.
- Lo mismo se aplica a la línea horizontal para la coordenada Y del pin.
- Cerca de una línea de cada orientación — incluso de **dos pins distintos** — el cursor se ajusta a su **intersección**, y se muestran ambas líneas discontinuas. Esto coloca un punto exactamente en (X del pin A, Y del pin B).

```
                    ┆ (discontinua, línea vertical del pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← cursor ajustado a la intersección:
                    ┆    X del pin B, Y del pin A
                    ┆
                    ■ pin B
```

Las coordenadas ajustadas se toman directamente del pin, por lo que la alineación es exacta — sin redondeo ni deriva de coma flotante.

## Prioridad de ajuste

Los ajustes de geometría normales — extremo, punto medio, centro e intersección — **tienen prioridad** sobre las líneas de referencia de los pins. Si el cursor está más cerca de un ajuste de punto que de una línea de referencia, gana el ajuste de punto. El rastreo de pins llena los huecos entre la geometría; nunca bloquea el ajuste a la propia geometría.

## Combinación con el bloqueo de ángulo

Los vector pins funcionan junto con el seguimiento de ángulo (el conmutador **ANGL** de la barra de control). Cuando un comando ha bloqueado el cursor a un rayo de seguimiento de ángulo:

- El cursor permanece restringido a la dirección bloqueada.
- El ajuste de pins pasa a apuntar a las **intersecciones del rayo bloqueado con las líneas de referencia de los pins** (solo por delante del origen del rayo).

Esto responde a preguntas como *"¿dónde cruza la dirección de 45° desde mi último punto la altura del centro de ese círculo?"* — bloquea el ángulo, y el cursor encaja en el punto de cruce. El ajuste al rayo funciona en todos los comandos con bloqueo de ángulo: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader y ViewportCopy.

## Ciclo de vida de los pins

Los pins están pensados para la operación en curso, no como marcadores permanentes. Todos los pins se borran cuando:

| Evento | Motivo |
|--------|--------|
| Se dispara un **nuevo comando** | Cada operación empieza con un conjunto limpio de referencias |
| Se pulsa **Escape** | Comportamiento estándar de cancelarlo todo |
| Se desactiva el conmutador **Pins** | Apagar la función elimina su estado |
| Se cambia entre **espacio modelo y papel** | Las coordenadas de los pins son específicas de un espacio |

Dentro de un mismo comando puedes fijar, dibujar, fijar de nuevo y seguir — los pins sobreviven a cada clic de un comando multipunto como Polyline.

## Flujo de trabajo típico

Dibujar una línea que empiece directamente debajo del centro de un círculo:

1. Escribe `line` (o haz clic en el botón Line).
2. Mantén el cursor sobre el **marcador de centro** del círculo medio segundo — se convierte en un cuadrado de color de acento.
3. Mueve el cursor hacia abajo: cerca de la vertical del círculo, el cursor se engancha a la línea de referencia discontinua.
4. Haz clic — la línea empieza exactamente en la coordenada X del círculo.
5. Continúa la línea como de costumbre; el pin sigue disponible para los siguientes puntos.

## Notas

- La espera de 500 ms funciona sobre cualquier marcador de ajuste que el cursor pueda alcanzar — incluidos los puntos de ajuste que aparecen a mitad de comando.
- Pasar el cursor sobre un punto ya fijado no hace nada; no existe el des-fijado por hover. Borra los pins con **Escape** o desactivando **Pins**.
- La distancia de ajuste de las líneas de referencia es la misma de 12 píxeles de pantalla que usa el ajuste de puntos normal, así que la sensación es consistente a cualquier nivel de zoom.
- Los puntos fijados se dibujan como cuadrados de color de acento en lugar de sus marcadores de ajuste normales.
