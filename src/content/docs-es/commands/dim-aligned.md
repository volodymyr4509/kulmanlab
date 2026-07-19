---
title: Dimension Aligned — Cotas de Distancia Real a Cualquier Ángulo
description: El comando Dimension Aligned mide la distancia real en línea recta entre dos puntos. La línea de cota corre paralela a la línea p1→p2 a cualquier ángulo — a diferencia de Dimension Linear que está restringida a horizontal o vertical. Exportación completa a DXF como entidades DIMENSION.
keywords: [cota alineada CAD, dimaligned, cota diagonal CAD, cota de distancia real, cota en ángulo CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

El comando `dimaligned` coloca una cota que mide la **distancia real en línea recta** entre dos puntos. La línea de cota corre paralela a la línea que conecta los dos puntos, por lo que puede estar en cualquier ángulo. Esta es la diferencia clave con [Dimension Linear](../dim-linear/), que está restringida a horizontal o vertical.

## Anatomía de una cota alineada

```
     ●  p2
    /|
   / |  (línea de extensión 2, perpendicular a la línea de cota)
  /  |
 /←5.00→/
/  /
●  /  (línea de extensión 1, perpendicular a la línea de cota)
p1
```

- **Líneas de extensión** — perpendiculares a la línea de cota, trazadas desde cada punto medido.
- **Línea de cota** — paralela a p1→p2, desplazada a un lado según la posición del cursor.
- **Valor** — la distancia euclidiana real `|p1 – p2|`.

## Colocar una cota alineada

1. Escribe `dimaligned` en el terminal o haz clic en el botón **Dimension Aligned** de la barra de herramientas.
2. **Haz clic en el origen de la primera línea de extensión** (p1), o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el origen de la segunda línea de extensión** (p2). La entrada de coordenadas también funciona aquí.
4. **Mueve el cursor** hacia un lado para establecer el desplazamiento perpendicular de la línea de cota.
5. **Haz clic** para colocar, o escribe una distancia de desplazamiento y presiona **Enter** para una colocación precisa.

## Distancia de desplazamiento escrita

Escribe un número durante la colocación para fijar la línea de cota a una distancia perpendicular exacta de la línea p1→p2:

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar dígito al desplazamiento |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` / `Space` | Colocar al desplazamiento escrito |

El lado del cursor determina en qué lado aparece la línea de cota.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X (fases p1/p2), o distancia de desplazamiento (fase de colocación) |
| `,` | Bloquear X y pasar a la entrada Y (fases p1/p2) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` / `Space` | Confirmar coordenada escrita o desplazamiento |
| `Escape` | Cancelar |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Ángulo de la línea de cota | Paralela a p1→p2 — cualquier ángulo | Siempre horizontal o vertical |
| Mide | Distancia euclidiana real | Solo componente X o Y |
| Bloqueo de orientación H/V | No | Sí — teclas `H` y `V` |
| Mejor para | Elementos diagonales, cortes en ángulo | Composiciones ortogonales, piezas alineadas en cuadrícula |

## Editar la etiqueta — simple mode

**Haz doble clic** en una cota alineada colocada para abrir el editor de texto en **simple** mode. El editor se precarga con el valor renderizado actual para que puedas posicionar el cursor y editarlo directamente.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Font / Height | Se aplica a la **etiqueta completa** a la vez |
| Formato por carácter | No compatible |
| `Enter` | Confirma el valor y cierra el editor |
| Multilínea | No compatible |

Consulta [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para la referencia completa.

## Encadenar cotas

Para agregar más cotas continuando desde la segunda línea de extensión de esta, usa [Dimension Continue](../dim-continue/) — se bloquea al mismo ángulo de medición que esta cota alineada.

## DXF — entidad DIMENSION (tipo alineado)

Las cotas alineadas se guardan como entidades `DIMENSION` con `dimType = 1` (alineado). Los orígenes de las líneas de extensión, la posición de la línea de cota, la posición del texto, el valor medido, la rotación, el estilo de flecha y todos los indicadores de visualización se exportan sin pérdida.
