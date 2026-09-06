---
title: "Por qué tu DXF se abrió con el tamaño equivocado (y cómo arreglarlo)"
description: "Un DXF que abre 25,4 veces más pequeño o 1000 veces más grande es un desajuste de unidades, no un archivo dañado. Identifica la proporción, reescala y comprueba."
keywords: [DXF escala incorrecta, DXF tamaño incorrecto, unidades DXF, DXF mm o pulgadas, DXF importado muy pequeño, factor de escala DXF, DXF 25.4, corregir escala DXF, unidades DXF no coinciden, reescalar DXF]
date: 2026-09-04
author: KulmanLab
tag: Guía
---

Se abre un DXF y la pieza que debería medir 40 mm de ancho mide 1,575. O llega un plano del tamaño de una manzana entera. El archivo no está roto y nadie hizo nada mal: el dibujo está bien, y lo que se perdió por el camino es el número que lo acompañaba.

Conviene entenderlo antes de reescalar nada, porque la corrección lleva diez segundos en cuanto sabes ante qué proporción estás, y adivinarla es la forma de cortar dos veces el tamaño equivocado.

## El DXF apenas transporta unidades

Un DXF guarda coordenadas como números pelados. Una línea de `0,0` a `40,0` mide cuarenta *algos*. El formato no adjunta una unidad a una coordenada, ni tendría dónde hacerlo: el número *es* la geometría.

Lo más parecido es una variable de cabecera llamada `$INSUNITS`, un único código para todo el archivo: `1` para pulgadas, `4` para milímetros, `6` para metros, y así. Dos cosas la debilitan más de lo que parece. Es un solo valor para un dibujo entero, así que no puede describir un archivo montado a partir de fuentes mezcladas. Y es orientativa, no vinculante: muchas aplicaciones solo la leen al *insertar* un dibujo dentro de otro y la ignoran cuando simplemente abres el archivo, con el argumento razonable de que quien abre un dibujo suele saber qué dibujó.

Así que «40» viaja intacto y «milímetros» no. Cada DXF con el tamaño equivocado que recibas en tu vida cabe en esa frase.

## Primero identifica la proporción

Mide un elemento cuyo tamaño real conozcas de verdad: un diámetro de taladro, el borde de una chapa, una distancia entre centros normalizada. Divide el tamaño que debería tener entre el que mide. El resultado casi siempre es uno de estos:

| Proporción | Qué ocurrió |
|---|---|
| **25,4** | Dibujado en pulgadas, leído como milímetros |
| **0,03937** | Dibujado en milímetros, leído como pulgadas |
| **1000** | Dibujado en metros, leído como milímetros |
| **0,001** | Dibujado en milímetros, leído como metros |
| **12** | Pies leídos como pulgadas |
| **304,8** | Pies leídos como milímetros |

Si tu número está ahí, tienes un desajuste de unidades y nada más, y lo que queda lleva un minuto.

Si no está —1,37, pongamos, o 3,2— párate. Eso no es un problema de unidades, y reescalar producirá un dibujo equivocado de una forma mucho más difícil de detectar. Salta a la última sección.

## La corrección

Necesitas algo que mida y algo que escale. Cualquier herramienta CAD lo hace; aquí está en [KulmanLab](https://kulmanlab.com/es/), que abre un DXF en una pestaña del navegador sin instalar nada:

1. Abre el archivo: arrástralo a la página o usa [Import](/es/docs/commands/import/).
2. Ejecuta [Distance](/es/docs/commands/distance/) y marca los dos extremos de tu elemento conocido. El forzado importa aquí: coge los puntos finales reales, no algo cercano, o incorporarás tu propio error al factor.
3. Divide. Tamaño conocido ÷ tamaño medido. Un taladro de 40 mm que marca 1,575 da 40 ÷ 1,575 ≈ **25,4**.
4. Selecciona todo, ejecuta [Scale](/es/docs/commands/scale/), elige un punto base y escribe el factor.

El punto base queda fijo mientras todo lo demás se mueve, así que ponlo donde puedas razonarlo: una esquina de la pieza, o el origen. Para un dibujo que va camino del corte, el origen suele ser la opción sensata.

Ayuda que KulmanLab no tenga ajuste de unidades propio. Las coordenadas son solo números, que es justo el estado en el que quieres un dibujo mientras averiguas qué significan sus números. No hay ninguna conversión ocurriendo a tus espaldas ni nada contra lo que pelear.

## Comprueba la corrección antes de fiarte de ella

Mide un *segundo* elemento, en otro punto del dibujo, cuyo tamaño real también conozcas. Y luego compruébalo.

Este es el paso que la gente se salta, y el único que atrapa el caso malo. Si la segunda medida ahora sale bien, el dibujo estaba uniformemente en las unidades equivocadas y ahora lo está uniformemente en las correctas. Listo.

Si la segunda medida *sigue* estando mal, y mal por una cantidad distinta, nunca fue un simple desajuste de unidades. Acabas de escalar un dibujo incoherente, que es peor que el punto de partida, porque el error ya no es una proporción limpia que alguien pueda detectar.

[Area](/es/docs/commands/area/) es una buena segunda opinión aquí, sobre todo en tableros. El área escala con el *cuadrado* del factor, así que un error de longitud de 25,4 aparece como un error de área de 645: una discrepancia difícil de justificar.

## Que no vuelva a pasar

Las unidades se pierden entre personas, así que la solución vive ahí también.

**Di la unidad al enviar el archivo.** Una línea en el mensaje. «Todas las cotas en mm.» No cuesta nada y elimina el problema entero.

**Manda una cota de referencia con él.** Di una medida real: «la placa exterior mide 300 mm de ancho». Ahora quien recibe puede verificar el archivo en lugar de suponerlo, y si algo salió mal lo arregla en un minuto sin volver a preguntarte.

**Pregunta, cuando el que recibe eres tú.** Si llega un archivo sin unidades declaradas y vas a cortar material con él, un mensaje sale más barato que un tablero arruinado.

**Dibuja en las unidades que espera tu salida.** El corte láser, el CNC y casi todos los flujos de fabricación esperan milímetros. Si el archivo va ahí, dibújalo en milímetros y no queda conversión que fallar. Consulta [preparar un DXF para corte láser](/es/blog/prepare-dxf-for-laser-cutting/).

## Cuando no es un problema de unidades

Si tu proporción no era una conversión de unidades limpia, las causas probables son de otro tipo:

- **El dibujo mezcla escalas.** Alguien dibujó una parte a 1:1 y pegó un detalle a 1:5, o se insertó un bloque con un factor de escala que nunca se corrigió. Arregla la geometría culpable, no el archivo entero.
- **Mediste geometría del espacio papel.** Un cajetín o un marco de anotación se dibuja al tamaño de la hoja, no del modelo. Mide algo que forme parte del objeto real.
- **Mediste lo que no era.** Un taladro nominal de 40 mm puede estar dibujado a 39,8 por el ajuste, y un panel de «300 mm» puede medir 300 hasta el exterior de un rebaje que no ves. Elige un elemento con un borde inequívoco.

En todos esos casos la respuesta es averiguar qué es el dibujo en realidad, no escalarlo. Un dibujo cuyas partes se contradicen entre sí seguirá costándote material hasta que alguien lo abra y mire.

---

*Relacionado: [Distance](/es/docs/commands/distance/) para medir, [Scale](/es/docs/commands/scale/) para la corrección, [Area](/es/docs/commands/area/) para la segunda opinión, y [Export Manager](/es/docs/commands/export-manager/) para lo que lleva cada formato cuando lo devuelves.*
