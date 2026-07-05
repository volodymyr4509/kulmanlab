---
sidebar_position: 16
title: Comando Dimension Radius — Anotar Radios de Arcos y Círculos en KulmanLab CAD
description: El comando Dimension Radius coloca una cota radial con prefijo R en un arco o círculo. Haz clic en la entidad, luego mueve el cursor para orientar la línea de cota desde el centro hasta la circunferencia. Exportación completa a DXF como entidades DIMENSION de tipo radio.
keywords: [cota de radio CAD, dimradius, anotar radio de círculo, cota de radio de arco, cota con prefijo R, kulmanlab]
---

# Dimension Radius

El comando `dimradius` coloca una cota de radio en un arco o círculo. La línea de cota va desde el centro hasta un punto en la circunferencia en la dirección del cursor, etiquetada `R <valor>`. Para acotar un diámetro completo, usa [Dimension Diameter](../dim-diameter/).

## Anatomía de una cota de radio

```
  ● (centro)
   \
    \  R 5.00
     \
      ●────── texto (lado del cursor)
   (punto del arco)
```

- **Línea de cota** — desde el centro a través de un punto del arco hacia el cursor, con una punta de flecha en el arco.
- **Etiqueta** — `R` seguido del valor del radio.

## Colocar una cota de radio

1. Escribe `dimradius` en el terminal o haz clic en el botón **Dimension Radius** de la barra de herramientas.
2. **Haz clic en un arco o círculo** para seleccionarlo.
3. **Mueve el cursor** para orientar la línea de cota — el punto del arco sigue la dirección del cursor desde el centro.
4. **Haz clic** para colocar la cota.

Solo se pueden seleccionar entidades **Arc** y **Circle**. Hacer clic en cualquier otro tipo de entidad no hace nada.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Escape` | Cancelar |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Mide | Radio (centro al borde) | Diámetro (borde a borde pasando por el centro) |
| Línea de cota | Centro → punto del arco | Punto del arco → punto del arco (pasando por el centro) |
| Prefijo de etiqueta | `R` | `⌀` |
| Puntas de flecha | Una (en el punto del arco) | Dos (en ambos puntos del arco) |
| Mejor para | Anotar un lado de un elemento curvo | Anotar dimensiones circulares completas |

## Editar la etiqueta — simple mode

**Haz doble clic** en una cota de radio colocada para abrir el editor de texto en **simple** mode. El editor se precarga con el valor renderizado actual (p. ej. `R 5.00`) para que puedas posicionar el cursor y editarlo directamente.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Font / Height | Se aplica a la **etiqueta completa** a la vez |
| Formato por carácter | No compatible |
| `Enter` | Confirma el valor y cierra el editor |
| Multilínea | No compatible |

Consulta [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para la referencia completa.

## DXF — entidad DIMENSION de tipo radio

Las cotas de radio se guardan como entidades `DIMENSION` con geometría de tipo radio, almacenando las coordenadas del centro, la posición del punto del arco y el valor del radio medido. Todas las propiedades se exportan sin pérdida.
