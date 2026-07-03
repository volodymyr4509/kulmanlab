---
sidebar_position: 2
title: Comando Distance — Medir la Distancia en Línea Recta Entre Dos Puntos en KulmanLab CAD
description: El comando Distance mide la distancia euclidiana entre dos puntos seleccionados y muestra el resultado con 4 decimales. Haz clic de nuevo después del resultado para encadenar una nueva medición desde el último punto.
keywords: [medir distancia CAD, comando distance, medición punto a punto, distancia en línea recta, medición CAD kulmanlab]
---

# Distance

El comando `distance` mide la distancia en línea recta (euclidiana) entre dos puntos seleccionados e imprime el resultado en el terminal con 4 decimales. Es uno de los dos comandos de medición — [Angle](../angle/) mide la apertura angular en un vértice.

## Anatomía de una medición de distancia

```
  ● primer punto
   \
    \  línea de vista previa (en vivo)
     \
      ● segundo punto    →  terminal: "Distance: 12.3456"
```

- **Primer punto** — origen de la medición.
- **Segundo punto** — punto final; al colocarlo se imprime el resultado inmediatamente.
- **Resultado** — mostrado en el terminal, no colocado en el lienzo.

## Medir una distancia

1. Escribe `distance` en el terminal o haz clic en el botón **Distance** de la barra de herramientas.
2. **Haz clic en el primer punto**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el segundo punto** — la distancia medida aparece en el terminal. La entrada de coordenadas también funciona aquí.
4. **Haz clic de nuevo** (opcional) para iniciar una nueva medición. El comando permanece activo.

Presiona `Escape` en cualquier momento para volver al paso 2.

## Encadenar mediciones

Después de mostrar el resultado, hacer clic inmediatamente inicia la siguiente medición — el punto seleccionado se convierte en el nuevo primer punto. Esto permite medir una secuencia de distancias sin reactivar el comando.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Qué mide | Longitud en línea recta | Ángulo interior en un vértice |
| Número de clics | 2 | 3 |
| Formato del resultado | `12.3456` (unidades) | `45.0000°` |
| Vista previa en el lienzo | Línea desde el primer punto al cursor | Dos líneas desde el vértice al cursor |
| Mejor para | Longitud de un espacio o segmento | Ángulo de apertura entre dos elementos |

## Entrada de coordenadas

En lugar de hacer clic, escribe una posición exacta para cualquiera de los puntos:

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
- El resultado se expresa en las mismas unidades que las coordenadas del dibujo (sin conversión de unidades).
- La precisión es siempre de 4 decimales.
