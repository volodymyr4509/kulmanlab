---
title: Dimension Angular — Medir Ángulos Entre Líneas, Arcos y Círculos
description: El comando DimensionAngular coloca una anotación de cota angular en líneas, arcos o círculos. Admite el ángulo entre dos líneas, el arco de extensión y los modos de sector de círculo.
keywords: [cota angular CAD, cota de ángulo, medir ángulo entre líneas, DimensionAngular, cota de arco, anotación de ángulo, anotación de ángulo CAD, cota angular kulmanlab]
group: markup
order: 9
---

# Dimension Angular

El comando `DimensionAngular` coloca una anotación de **cota angular** en arco en el dibujo. Mide y etiqueta el ángulo entre dos líneas, la extensión de un arco o el sector de un círculo.

## Cómo activar

Haz clic en el botón **Dimension Angular** de la barra de herramientas en el panel de Anotaciones, o escribe `DimensionAngular` en el terminal.

## Tres modos de entrada

El primer clic determina qué modo se usa:

### Dos líneas

1. **Haz clic en la primera línea.** La posición del cursor determina qué lado de la línea se usa.
2. **Haz clic en la segunda línea.** Las dos líneas deben intersectarse (la intersección se calcula automáticamente; no necesita ser visible en pantalla).
3. **Haz clic para colocar** el arco de cota. Mueve el cursor para elegir el radio y qué sector angular se etiqueta — la anotación sigue el cursor hacia el lado del vértice donde estés.

Las líneas paralelas no pueden formar una cota angular; el comando ignora el segundo clic si las líneas no se intersectan.

### Arco

1. **Haz clic en un arco.** La cota se crea inmediatamente desde el ángulo de inicio hasta el ángulo de fin del arco, usando el centro del arco como vértice.
2. **Haz clic para colocar** el arco de cota al radio deseado.

### Círculo

1. **Haz clic en un círculo.** El primer extremo del ángulo se ajusta al punto más cercano en el círculo.
2. **Haz clic en un segundo punto** del círculo para definir el segundo extremo del ángulo.
3. **Haz clic para colocar** el arco de cota.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Escape` | Cancelar y volver a la primera selección |

## Detalles de comportamiento

- El arco de cota siempre se dibuja en el lado del vértice donde lo colocas — mueve el cursor al otro lado del vértice para cambiar al ángulo suplementario.
- El ángulo medido se muestra en grados y se actualiza en vivo mientras mueves el cursor durante la colocación.
- La anotación resultante es una entidad `DimensionAngular` completa almacenada en la capa actual. Sus propiedades de apariencia (tamaño de flecha, altura de texto, longitud de línea de extensión) se pueden ajustar en el panel de Propiedades.
- Las cotas angulares se incluyen en la exportación JSON pero no son compatibles con el exportador de DXF.

## Editar la etiqueta — simple mode

**Haz doble clic** en una cota angular colocada para abrir el editor de texto en **simple** mode. El editor se precarga con el valor renderizado actual para que puedas posicionar el cursor y editarlo directamente.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Font / Height | Se aplica a la **etiqueta completa** a la vez |
| Formato por carácter | No compatible |
| `Enter` | Confirma el valor y cierra el editor |
| Multilínea | No compatible |

Consulta [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para la referencia completa.

## Comandos relacionados

- [Dimension Linear](../dim-linear/) — cota horizontal o vertical
- [Dimension Aligned](../dim-aligned/) — cota alineada a dos puntos
- [Dimension Radius](../dim-radius/) — cota de radio para arcos y círculos
- [Dimension Diameter](../dim-diameter/) — cota de diámetro para círculos
