---
title: Comando ViewportCopy — Duplicar una Ventana Gráfica en KulmanLab CAD
description: El comando ViewportCopy duplica una ventana gráfica seleccionada a una nueva posición en el mismo diseño, preservando la escala y la configuración de la vista del modelo. Admite entrada de coordenadas exactas, bloqueo de ángulo y entrada de distancia escrita.
keywords: [copiar ventana gráfica, duplicar viewport, copiar viewport en diseño, bloqueo de ángulo viewport, coordenada exacta viewport, kulmanlab]
---

# ViewportCopy

El comando `ViewportCopy` copia una ventana gráfica a una nueva posición, preservando su escala y centro del modelo. Solo disponible en el espacio de diseño.

## Copiar una ventana gráfica

1. Cambia a una pestaña de diseño de papel.
2. Opcionalmente haz clic en una ventana gráfica para preseleccionarla.
3. Escribe `ViewportCopy` en el terminal o haz clic en el botón de la barra de herramientas **Viewport Copy**.
4. Si no se preseleccionó ninguna ventana gráfica, **haz clic en la ventana gráfica** a copiar.
5. **Haz clic en el punto base** — la referencia para el desplazamiento. O escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
6. **Haz clic en el destino** — la ventana gráfica se coloca en el desplazamiento base→destino. O usa entrada de coordenadas / bloqueo de ángulo.

Después de colocarla, el comando permanece activo — haz clic en otro destino para colocar otra copia de la misma ventana gráfica. Pulsa **Enter**, **Space** o **Escape** para terminar.

## Entrada de coordenadas

En los pasos de punto base y destino puedes escribir una coordenada exacta en lugar de hacer clic:

1. Escribe el valor X.
2. Pulsa `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Pulsa **Enter** para confirmar.

## Bloqueo de ángulo y distancia exacta

Después de establecer el punto base, el comando se ajusta a ejes de 45° (0°, 45°, 90°, 135°, …) cuando el cursor se alinea. Mientras está bloqueado:

- La vista previa se ajusta al eje.
- Escribe una distancia y pulsa **Enter** para colocar la copia exactamente a ese desplazamiento a lo largo de la dirección bloqueada.

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Añadir dígito al valor de distancia |
| `-` | Distancia negativa (invierte la dirección; solo como primer carácter) |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Colocar copia a la distancia escrita |

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X, o distancia cuando el ángulo está bloqueado |
| `,` | Fijar X y pasar a entrada Y |
| `Enter` | Confirmar coordenada o distancia escrita |
| `Enter` / `Space` | Terminar (cuando no hay entrada en curso) |
| `Escape` | Cancelar y reiniciar |

## Notas

- ViewportCopy solo está disponible cuando una pestaña de diseño de papel está activa.
- La ventana gráfica copiada hereda la misma escala, centro del modelo, estado de bloqueo y dimensiones que la original.
- Para crear una nueva ventana gráfica desde cero, usa [ViewportRectangle](../viewport-rectangle/).
