---
title: Comando Explode — Descomponer una Polilínea en Entidades Línea y Arco
description: El comando Explode descompone una polilínea en sus entidades Línea y Arco individuales, una por segmento, en su lugar. Cada pieza conserva el grosor de línea, color, capa y tipo de línea de la polilínea de origen. Funciona solo con entidades Polilínea.
keywords: [comando explode CAD, explotar polilínea CAD, descomponer polilínea en líneas, convertir polilínea en línea y arco, kulmanlab]
group: edit
order: 16
---

# Explode

El comando `Descomponer` descompone una [Polilínea](../polyline/) en sus entidades [Línea](../line/) y [Arco](../arc/) individuales — una por segmento, exactamente donde estaban los propios vértices de la polilínea. Las piezas reemplazan a la polilínea en su lugar y conservan su grosor de línea, color, capa y tipo de línea.

Explode funciona solo con entidades **Polilínea**.

## Usar explode

Dos formas de ejecutarlo, el mismo patrón que [Delete](../delete/):

**Selecciona primero, luego explota** — el camino más rápido:

1. Selecciona una o más polilíneas en el lienzo.
2. Escribe `Descomponer` en el terminal, o haz clic en el botón **Explode** del panel Edit.

Las polilíneas seleccionadas se explotan al instante — sin paso de confirmación separado, ya que algo ya está seleccionado.

**Activa, luego selecciona**:

1. Escribe `Descomponer` o haz clic en el botón de la barra de herramientas sin nada seleccionado.
2. **Selecciona polilíneas** — clic para alternar, o arrastra para seleccionar por área.
3. Presiona **Enter** o **Espacio** para confirmar y explotar las polilíneas seleccionadas.

Durante la selección solo se recogen polilíneas — hacer clic en una Línea, Círculo o cualquier otra entidad no hace nada, y un arrastre de área ignora todo excepto las polilíneas dentro o que cruzan el área.

## Qué resulta de ello

Cada segmento de la polilínea se convierte en su propia entidad:

- Un **segmento recto** se convierte en una **Línea**.
- Un **segmento de arco** (de la [opción Arc](../polyline/) de Polyline) se convierte en un **Arco**, que coincide exactamente con el centro, radio y barrido de la curva original.

Cada Línea y Arco resultante hereda el **grosor de línea, color, capa, tipo de línea y escala de tipo de línea** de la polilínea de origen — nada cambia sobre cómo se ve la geometría, solo que ahora son varias entidades independientes en lugar de una polilínea conectada.

El explode se puede deshacer como un único paso con [Undo](../undo/), igual que cualquier otra edición.

## Selección durante el comando

| Método | Comportamiento |
|--------|-----------------|
| **Clic** | Alterna la polilínea bajo el cursor dentro/fuera de la selección; hacer clic en una entidad que no sea polilínea no hace nada |
| **Arrastrar a la derecha** (estricto) | Selecciona solo las polilíneas completamente dentro del recuadro |
| **Arrastrar a la izquierda** (cruce) | Selecciona las polilíneas que cruzan el límite del recuadro |
| **Enter** / **Espacio** | Confirma y explota las polilíneas seleccionadas |

## Entidades compatibles

| Entidad | Compatible |
|---------|------------|
| Polyline / Rectangle | Sí |
| Line, Arc, Circle, Ellipse | No — nada que explotar |
| Text, Spline, Dimension, Leader, Hatch | No |
