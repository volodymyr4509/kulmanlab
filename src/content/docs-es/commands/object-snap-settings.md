---
title: "Comando ObjectSnapSettings — Todos los ajustes de la barra de control"
description: "El comando ObjectSnapSettings abre una ventana con todos los ajustes de la barra de control —referencia a objetos, tangente, rastreo de ángulo, pines, entrada escrita, lazo y visualización—, cada uno explicado junto a la lista con un pequeño dibujo."
keywords: ["ajustes de referencia a objetos CAD", "referencia tangente CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

El comando `AjustesDeReferencia` abre una ventana que reúne todos los ajustes de la barra de control. Cada ajuste se explica junto a la lista, con un pequeño dibujo. Ábrela con el botón del engranaje de la barra de control o escribe `AjustesDeReferencia`. Cambiar un ajuste aquí equivale a pulsar su botón en la barra.

## Los ajustes

### Dónde cae el cursor

| Barra de control | Qué hace |
|---|---|
| `Snap` | El cursor salta al punto de rejilla más cercano, así los puntos que eliges caen en coordenadas redondas. Una referencia a un objeto cerca del cursor sigue teniendo prioridad. El paso de la rejilla sigue al zoom. |
| `TANG` | Mientras se dibuja una línea desde un punto, acerca el cursor a donde tocaría justo un círculo, arco, elipse o spline y se ajusta ahí. Funciona en Línea, Polilínea y otros comandos, y al arrastrar el extremo de una línea o polilínea. |

### Guías al dibujar

| Barra de control | Qué hace |
|---|---|
| `ANGL` | Cuando el cursor se acerca a uno de estos ángulos desde el último punto, se bloquea en esa dirección, mostrada como un rayo discontinuo. Mientras está bloqueado, escribe una longitud y pulsa Intro para colocar el punto a esa distancia. |
| `Pins` | Deja el cursor un momento sobre un punto de referencia para fijarlo. Un punto fijado lanza líneas guía horizontales y verticales, y el cursor se ajusta a ellas y a donde se cruzan. |
| `Dist` | El último punto fijado actúa como punto de inicio: cuando el cursor se bloquea en un ángulo desde él, escribe una longitud y pulsa Intro para colocar el punto a esa distancia. Requiere los pines vectoriales. |

### Entrada y selección

| Barra de control | Qué hace |
|---|---|
| `Rel` | Un punto X,Y escrito se mide desde el último punto elegido, como si empezara por @. Retroceso quita la @ para un punto en las coordenadas del dibujo. Desactivado, escribe tú la @ para un desplazamiento. |
| `Lasso` | Pulsa y arrastra en un espacio vacío para trazar un lazo libre alrededor de lo que quieras, en lugar de un rectángulo. Lo que el lazo abarca queda seleccionado. |

### Visualización

| Barra de control | Qué hace |
|---|---|
| `Grid` | Muestra la rejilla de fondo. Su espaciado cambia al hacer zoom. Desactivarla no detiene el ajuste a la rejilla. |
| `LWT` | Dibuja las líneas con su grosor, así las más pesadas se ven más gruesas. Desactivado, todas las líneas se dibujan finas, lo que puede hacer más legible un dibujo denso. |

**ANGL** tiene su propia fila para el paso: elige 10°, 20°, 30°, 45° o 90°, o elige **Personalizado** y escribe cualquier ángulo de 1° a 180°.

La referencia tangente, la entrada relativa y el lazo están desactivados por defecto. **Restablecer valores** devuelve todos los ajustes a su estado inicial.

---

*Relacionado: [Vector Pins](../../interface/vector-pins/), [Seguimiento de distancia](../../interface/distance-tracking/), [Cuadrícula y Ajuste](../../interface/grid-snap/), [Entrada de coordenadas](../../interface/coordinate-entry/)*
