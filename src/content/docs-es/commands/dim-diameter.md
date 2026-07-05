---
sidebar_position: 17
title: "Comando Dimension Diameter — Anotar Diámetros Completos de Círculos y Arcos en KulmanLab CAD"
description: "El comando Dimension Diameter coloca una cota de diámetro (con prefijo del símbolo de diámetro) a través de un arco o círculo pasando por el centro. Mueve el cursor para rotar la línea de cota a cualquier ángulo. Exportación completa a DXF como entidades DIMENSION de tipo diámetro."
keywords: [cota de diámetro CAD, dimdiameter, anotar diámetro de círculo, cota de diámetro de arco, símbolo de diámetro CAD, kulmanlab]
---

# Dimension Diameter

El comando `dimdiameter` coloca una cota de diámetro en un arco o círculo. La línea de cota abarca el diámetro completo — pasando por el centro entre dos puntos diametralmente opuestos del arco — y se etiqueta `⌀ <valor>`. Para anotar solo el radio desde el centro hasta un borde, usa [Dimension Radius](../dim-radius/).

## Anatomía de una cota de diámetro

```
  ●──────────── ⌀ 10.00 ────────────●
  (punto del arco lejano)              (punto del arco cercano / lado del texto)
```

- **Línea de cota** — abarca el diámetro completo, con puntas de flecha en ambos puntos de intersección del arco.
- **Punto del arco cercano** — el punto de la circunferencia en el lado del cursor (donde se coloca la etiqueta de texto).
- **Punto del arco lejano** — el punto diametralmente opuesto.
- **Etiqueta** — `⌀` seguido del valor del diámetro.

## Colocar una cota de diámetro

1. Escribe `dimdiameter` en el terminal o haz clic en el botón **Dimension Diameter** de la barra de herramientas.
2. **Haz clic en un arco o círculo** para seleccionarlo.
3. **Mueve el cursor** para rotar la línea de cota al ángulo deseado.
4. **Haz clic** para colocar la cota.

Solo se pueden seleccionar entidades **Arc** y **Circle**.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Escape` | Cancelar |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Mide | Diámetro completo (2 × radio) | Radio (centro al borde) |
| Línea de cota | Borde → borde pasando por el centro | Centro → punto del arco |
| Prefijo de etiqueta | `⌀` | `R` |
| Puntas de flecha | Dos (en ambos puntos del arco) | Una (en el punto del arco) |
| Mejor para | Dimensiones de agujeros o ejes circulares completos | Anotar un lado de un elemento curvo |

## Editar la etiqueta — simple mode

**Haz doble clic** en una cota de diámetro colocada para abrir el editor de texto en **simple** mode. El editor se precarga con el valor renderizado actual (p. ej. `⌀ 10.00`) para que puedas posicionar el cursor y editarlo directamente.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Font / Height | Se aplica a la **etiqueta completa** a la vez |
| Formato por carácter | No compatible |
| `Enter` | Confirma el valor y cierra el editor |
| Multilínea | No compatible |

Consulta [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para la referencia completa.

## DXF — entidad DIMENSION de tipo diámetro

Las cotas de diámetro se guardan como entidades `DIMENSION` con geometría de tipo diámetro, almacenando ambas posiciones de los puntos del arco y el valor del diámetro medido (2 × radio). Todas las propiedades se exportan sin pérdida.
