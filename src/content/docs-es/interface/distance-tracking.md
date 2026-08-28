---
title: Seguimiento de distancia — Escribir una longitud exacta desde un punto fijado
description: El interruptor Dist permite que el último pin vectorial actúe como el ancla desde el que mide el seguimiento angular, de modo que puedas escribir una longitud exacta y situar un punto a una distancia y un ángulo precisos de un punto existente — incluido el primer punto de una forma.
keywords: [entrada de distancia CAD, escribir distancia exacta CAD, interruptor Dist, seguimiento de distancia desde pines, seguimiento polar CAD, entrada directa de distancia, kulmanlab]
group: interface
order: 3
---

# Seguimiento de distancia

**El seguimiento de distancia** te permite situar un punto escribiendo una longitud exacta en lugar de hacer clic. Se controla con el interruptor **Dist** de la barra de control, junto a [Pins](../vector-pins/) y ANGL, y está **activado por defecto**, conservándose el ajuste entre sesiones.

Lo que añade es acotado pero útil: deja que el **pin vectorial más reciente** actúe como el ancla desde el que mide el seguimiento angular. Sin él, un comando solo puede medir desde un punto que ya haya recogido él mismo — lo que significa que el *primer* punto de una forma no tiene nada desde lo que medir.

## Los tres interruptores trabajan juntos

El seguimiento de distancia no se basta a sí mismo. Otros dos interruptores deben estar en el estado correcto antes de que puedas escribir una longitud:

| Interruptor | Función |
|-------------|---------|
| **Pins** | Aporta el punto de referencia. Pasa el cursor sobre un punto de referencia durante 500 ms para fijarlo — véase [Vector Pins](../vector-pins/). |
| **ANGL** | Aporta el ángulo. El seguimiento de distancia solo queda disponible cuando el cursor está bloqueado en ángulo, así que ANGL debe estar en un paso (10°, 20°, 30°, 45°, 90°) y no en Off. |
| **Dist** | Permite usar el pin como ancla en vez de solo el propio punto del comando. |

Si tienes Pins y Dist activados pero ANGL en **Off**, no pasará nada: no hay dirección bloqueada a lo largo de la cual medir una longitud.

## Cómo se acoplan Pins y Dist

El seguimiento de distancia carece de sentido con los pines desactivados, así que ambos interruptores se mantienen sincronizados:

- **Activar Pins** activa también **Dist**.
- **Desactivar Pins** desactiva también **Dist**.
- **Activar Dist** activa **Pins** si no lo estaba ya.
- **Desactivar Dist** deja **Pins activado**.

Así, Dist nunca puede estar activo mientras Pins está inactivo, pero puedes conservar el seguimiento por pines para alinear y desactivar el seguimiento de distancia — útil si quieres líneas de referencia sin que el cursor se bloquee en un pin cuando querías bloquearlo en tu propio último punto.

## Situar un punto a una distancia exacta

1. Activa **Pins** y **Dist**, y pon **ANGL** en un paso angular.
2. Inicia un comando que pida un punto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/), etcétera.
3. **Fija un punto de referencia**: pasa el cursor sobre un punto de referencia existente hasta que el marcador se convierta en un cuadrado relleno.
4. Aleja el cursor del pin aproximadamente en el ángulo que quieras. Cuando se acerque a uno de los pasos de ANGL, la dirección se **bloquea** — aparece un indicador de seguimiento desde el pin.
5. **Escribe la longitud** y pulsa **Enter** o **Space**. El punto se sitúa exactamente a esa distancia del pin, a lo largo del ángulo bloqueado.

El indicador de la terminal te dice cuándo puedes escribir. Mientras está bloqueado se lee:

```
pick start point or enter length: [ ]
```

y el valor que escribes aparece entre los corchetes.

## Por qué importa el primer punto

Este es el caso que de otro modo sería imposible. Supón que quieres empezar una línea exactamente 250 unidades a la derecha de una esquina existente:

1. Inicia [Line](../../commands/line/).
2. Fija la esquina existente.
3. Muévete a la derecha hasta que la dirección se bloquee a 0°.
4. Escribe `250` y pulsa **Enter**.

La línea empieza ahora en un punto a 250 unidades de la esquina, sin geometría auxiliar y sin cálculos. Sin Dist, el comando Line no ha recogido ningún punto todavía, así que no hay nada *desde lo que* medir una longitud escrita — solo podrías hacer clic aproximadamente, o trazar una línea auxiliar y borrarla después.

Para el **segundo punto y siguientes**, el comando ya tiene su propia ancla (el punto anterior) y esa es la que se usa primero. El pin se consulta como alternativa solo cuando tu propia ancla no está bloqueada, de modo que fijar algo no secuestra un bloqueo que ya tienes.

## Escribir congela el bloqueo

En cuanto empiezas a escribir dígitos, el ancla deja de cambiar. El punto que estuviera bloqueado cuando llegó el primer dígito sigue siendo el ancla hasta que confirmes o vacíes el campo — mover el ratón a media entrada no cambiará en silencio la medición a otro pin ni al propio punto del comando.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Añadir a la longitud |
| `-` | Longitud negativa — invierte la dirección a lo largo del ángulo bloqueado (solo como primer carácter) |
| `Backspace` | Borrar el último carácter |
| `Enter` / `Space` | Situar el punto a la longitud escrita |
| `Escape` | Cancelar el comando; se borran el bloqueo y el valor escrito |

Escribir una longitud es opcional. Con la dirección bloqueada aún puedes hacer clic, y el punto se proyecta sobre el ángulo bloqueado.

## Dónde funciona

El seguimiento de distancia está disponible en todos los comandos que te piden elegir puntos:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) y [ViewportCopy](../../commands/viewport-copy/).

## Véase también

- [Vector Pins](../vector-pins/) — fijar puntos y seguir sus líneas de referencia
- [Grid & Snap](../grid-snap/) — las demás ayudas de precisión de la barra de control
- [Distance](../../commands/distance/) — medir una distancia existente en vez de escribir una nueva
