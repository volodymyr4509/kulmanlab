---
title: "Entrada de coordenadas — escribir puntos exactos, relativos y polares"
description: "Siempre que un comando pida un punto, escríbelo en lugar de hacer clic: X,Y para una posición exacta, @X,Y para medir desde el último punto y distancia<ángulo para un punto polar. El interruptor Rel hace relativo cada punto escrito."
keywords: ["entrada de coordenadas CAD", "coordenadas relativas CAD", "coordenadas polares CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Entrada de coordenadas

Siempre que un comando pida un punto —el inicio de una [Line](../../commands/line/), una esquina de un [Rectangle](../../commands/rectangle/), el punto base de un [Move](../../commands/move/) o un pinzamiento que arrastras—, puedes escribirlo en lugar de hacer clic. Empieza a escribir un número y el terminal muestra lo que escribes; pulsa **Enter** o **Space** para colocar el punto.

## Cuatro formas de escribir un punto

| Escribes | El punto está |
|---|---|
| `100,50` | En X 100, Y 50 |
| `@100,50` | 100 en X y 50 en Y desde el último punto |
| `100<45` | A 100 del origen, a 45° |
| `@100<45` | A 100 del último punto, a 45° |

Los ángulos van en grados, en sentido antihorario desde el eje X, así que `@50<90` es 50 hacia arriba y `@50<180` es 50 hacia la izquierda. Cualquiera de los dos valores puede ser negativo.

## El último punto

`@` mide desde el último punto designado o escrito en cualquier comando: cuenta el último clic del comando anterior, y también un pinzamiento que acabas de arrastrar. Si aún no hay último punto, `@100,50` se lee como `100,50`. El último punto se olvida al cambiar entre el espacio modelo y una presentación, y al abrir un dibujo.

## Rel: relativo por defecto

El interruptor **Rel** de la barra de control hace relativo cada punto escrito: en cuanto escribes la primera cifra, se pone un `@` delante, así `100,50` pasa a ser `@100,50`. Pulsa **Retroceso** sobre el `@` para que ese punto sea absoluto. Si aún no hay último punto, no se añade `@`. Rel está desactivado por defecto y se recuerda con los demás interruptores de la barra de control.

## Teclas al escribir

| Tecla | Efecto |
|---|---|
| `0`–`9`, `.`, `-` | Escribir el número; `-` solo al principio |
| `@` | Hacer relativo el punto, al principio de X |
| `,` o **Space** | Terminar X y pasar a Y |
| `<` | Terminar X como distancia y pasar a su ángulo |
| **Enter** o **Space** | Colocar el punto, cuando Y tiene valor |
| **←** **→** **Home** **End** | Mover el cursor dentro del valor que se escribe |
| **Backspace** | Borrar antes del cursor; al principio de una Y vacía, volver a X |

Un punto que no se puede leer como números se queda en el terminal para que lo corrijas. Cada punto escrito deja una línea en el historial del terminal tal como lo escribiste —`Introducido @100<45`—, antes de la línea del comando con dónde quedó.

## Puntos escritos y rastreo de ángulo

Cuando el cursor está fijado a un rayo de rastreo de ángulo, escribir un número da una distancia a lo largo de ese rayo en vez de una X. Si escribes `@` primero, empiezas un punto completo, así que `@100,50` sigue funcionando sobre un rayo fijado.

---

*Relacionado: [Seguimiento de distancia](../distance-tracking/) para escribir una longitud en una dirección fijada, y [Vector Pins](../vector-pins/) para medir desde un punto fijado.*
