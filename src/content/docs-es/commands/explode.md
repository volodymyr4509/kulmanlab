---
title: "Comando Explode — descomponer una polilínea o un bloque en sus partes"
description: "El comando Explode descompone una polilínea en sus entidades Line y Arc, o una referencia a bloque en las entidades que dibuja su bloque, en su sitio. Las piezas se ven exactamente como el original."
keywords: [comando explode CAD, explotar polilínea CAD, descomponer polilínea en líneas, convertir polilínea en línea y arco, kulmanlab]
group: edit
order: 19
---

# Explode

El comando `Descomponer` descompone una [Polilínea](../polyline/) en sus entidades [Línea](../line/) y [Arco](../arc/) individuales — una por segmento, exactamente donde estaban los propios vértices de la polilínea. Las piezas reemplazan a la polilínea en su lugar y conservan su grosor de línea, color, capa y tipo de línea.

Explode funciona con entidades **Polyline** y **referencias a bloque**.

## Usar explode

Dos formas de ejecutarlo, el mismo patrón que [Delete](../delete/):

**Selecciona primero, luego explota** — el camino más rápido:

1. Selecciona una o más polilíneas en el lienzo.
2. Escribe `Descomponer` en el terminal o elige **Explode** en el desplegable del panel Edit.

Las polilíneas seleccionadas se explotan al instante — sin paso de confirmación separado, ya que algo ya está seleccionado.

**Activa, luego selecciona**:

1. Escribe `Descomponer` o elige **Explode** en el desplegable sin nada seleccionado.
2. **Selecciona polilíneas o referencias a bloque**: haz clic para alternar o arrastra para seleccionar por área.
3. Presiona **Enter** o **Espacio** para confirmar y explotar las polilíneas seleccionadas.

Durante la selección solo se recogen polilíneas y referencias a bloque: hacer clic en una Line, un Circle o cualquier otra entidad no hace nada, y un arrastre de área ignora todo lo demás que quede dentro o lo cruce.

## Qué resulta de ello

Cada segmento de la polilínea se convierte en su propia entidad:

- Un **segmento recto** se convierte en una **Línea**.
- Un **segmento de arco** (de la [opción Arc](../polyline/) de Polyline) se convierte en un **Arco**, que coincide exactamente con el centro, radio y barrido de la curva original.

Cada Línea y Arco resultante hereda el **grosor de línea, color, capa, tipo de línea y escala de tipo de línea** de la polilínea de origen — nada cambia sobre cómo se ve la geometría, solo que ahora son varias entidades independientes en lugar de una polilínea conectada.

Una **referencia a bloque** se convierte en las entidades que dibuja su bloque, colocadas donde la referencia las mostraba. Se omiten las entidades que el bloque mantiene ocultas —los otros estados de un bloque dinámico—; cada atributo pasa a ser un Text simple con su valor; las piezas dibujadas ByBlock toman el color de la referencia y las de la capa 0, su capa. Un bloque anidado sale como una referencia a bloque propia, que puedes descomponer a su vez. Una referencia escalada distinto en X y en Y no se recoge, porque sus círculos tendrían que convertirse en elipses.

El explode se puede deshacer como un único paso con [Undo](../undo/), igual que cualquier otra edición.

## Selección durante el comando

| Método | Comportamiento |
|--------|-----------------|
| **Clic** | Añade o quita de la selección la polilínea o referencia a bloque bajo el cursor; hacer clic en otra entidad no hace nada |
| **Arrastrar a la derecha** (estricto) | Selecciona solo polilíneas y referencias a bloque totalmente dentro del recuadro |
| **Arrastrar a la izquierda** (cruce) | Selecciona polilíneas y referencias a bloque que cortan el borde del recuadro |
| **Enter** / **Space** | Confirma y descompone la selección |

## Entidades compatibles

| Entidad | Compatible |
|---------|------------|
| Polyline / Rectangle | Sí |
| Referencia a bloque | Sí, salvo si está escalada distinto en X y en Y |
| Line, Arc, Circle, Ellipse | No — nada que explotar |
| Text, Spline, Dimension, Leader, Hatch | No |
