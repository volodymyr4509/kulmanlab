---
sidebar_position: 1
title: Comando Angle — Medir el Ángulo Interior en un Vértice Usando Tres Puntos en KulmanLab CAD
description: El comando Angle mide el ángulo interior (0°–180°) en un vértice definido por tres puntos seleccionados. Haz clic en el primer extremo, el vértice y el segundo extremo. El resultado se muestra en el terminal con 4 decimales.
keywords: [medición de ángulo CAD, ángulo de tres puntos, ángulo interior CAD, comando medir ángulo, ángulo de vértice, kulmanlab]
---

# Angle

El comando `angle` mide el ángulo interior en un vértice formado por dos segmentos de línea a través de tres puntos seleccionados. El resultado — siempre entre 0° y 180° — se muestra en el terminal con 4 decimales. Es uno de los dos comandos de medición — [Distance](./distance) mide la longitud en línea recta.

## Anatomía de una medición de ángulo

```
  ● primer punto (extremo del primer rayo)
   \
    \  vista previa del primer rayo
     \
      ● vértice (paso 3)
     /
    /  vista previa del segundo rayo (hacia el cursor)
   /
  ● tercer punto  →  terminal: "Angle: 45.0000°"
```

- **Primer punto** — un extremo del ángulo (paso 2).
- **Vértice** — la esquina donde se mide el ángulo (paso 3).
- **Tercer punto** — el otro extremo del ángulo (paso 4).

## Medir un ángulo

1. Escribe `angle` en el terminal o haz clic en el botón **Angle** de la barra de herramientas.
2. **Haz clic en el primer punto** — un extremo del ángulo. O escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el vértice** — la esquina donde se unen los dos brazos. La entrada de coordenadas también funciona aquí.
4. **Haz clic en el tercer punto** — el segundo extremo del ángulo. La entrada de coordenadas también funciona aquí. Al colocar este punto se imprime el resultado.
5. **Haz clic de nuevo** (opcional) para iniciar una nueva medición desde ese clic como nuevo primer punto.

## Convención de ángulo interior

El comando calcula el ángulo usando el producto escalar de los dos rayos desde el vértice:

- **Siempre interior**: el resultado es el ángulo menor, entre 0° y 180°.
- El orden en que haces clic en los extremos no afecta el resultado — solo importa la posición del vértice.
- Los puntos colineales (los tres en una misma línea) devuelven 0° o 180°.

## Encadenar mediciones

Después de que aparece el resultado, hacer clic inmediatamente inicia la siguiente medición — el punto seleccionado se convierte en el nuevo primer punto. El comando nunca sale automáticamente hasta que presiones `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Qué mide | Ángulo interior en un vértice | Longitud en línea recta |
| Número de clics | 3 | 2 |
| Formato del resultado | `45.0000°` | `12.3456` (unidades) |
| Vista previa en el lienzo | Dos líneas desde el vértice a los extremos | Línea desde el primer punto al cursor |
| Mejor para | Ángulo de apertura entre dos elementos | Longitud de un espacio o segmento |

## Entrada de coordenadas

En lugar de hacer clic, escribe una posición exacta para cualquiera de los tres puntos:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para confirmar.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X |
| `,` | Bloquear X y pasar a la entrada Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita |
| `Escape` | Cancelar y volver al paso 2 |

## Notas

- Los resultados se muestran solo en el **terminal** — no se agrega nada al dibujo.
- La precisión es siempre de 4 decimales en grados.
