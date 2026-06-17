---
title: Comando ViewportRectangle — Crear una Ventana Gráfica en un Diseño en KulmanLab CAD
description: El comando ViewportRectangle crea una ventana gráfica en un diseño de papel seleccionando dos esquinas opuestas. La ventana gráfica muestra las entidades del espacio modelo a la escala predeterminada del diseño.
keywords: [viewport rectangle, crear viewport, viewport de diseño, viewport en espacio papel, kulmanlab]
---

# ViewportRectangle

El comando `ViewportRectangle` crea una nueva ventana gráfica en el diseño de papel activo seleccionando dos esquinas opuestas. Solo disponible en el espacio de diseño.

## Crear una ventana gráfica

1. Cambia a un diseño de papel usando la pestaña en la parte inferior de la pantalla.
2. Escribe `ViewportRectangle` en el terminal o haz clic en el botón de la barra de herramientas **Viewport Rectangle**.
3. **Haz clic en la primera esquina**, o escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
4. **Haz clic en la esquina opuesta** — la ventana gráfica se coloca inmediatamente. La entrada de coordenadas también funciona aquí.

La nueva ventana gráfica muestra el modelo completo a la escala predeterminada del diseño. Usa la rueda del ratón dentro de la ventana gráfica para hacer zoom, o arrastra con el botón central para desplazar la vista del modelo.

## Entrada de coordenadas

En cualquier paso de esquina puedes escribir una coordenada exacta:

1. Escribe el valor X.
2. Pulsa `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Pulsa **Enter** para colocar el punto.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X |
| `,` | Fijar X y pasar a entrada Y |
| `Enter` | Confirmar coordenada escrita |
| `Escape` | Cancelar |

## Editar una ventana gráfica

Después de colocar una ventana gráfica, haz clic en ella para seleccionarla:

- **Arrastra los bordes o esquinas** para cambiar el tamaño.
- **Arrastra el agarre central** para moverla.
- Usa el **selector de escala** en la barra de control para establecer una escala exacta (p. ej. 1:50). Para introducir una escala que no esté en la lista, escríbela directamente en el campo de entrada en la parte inferior del desplegable — acepta formato de proporción (`1:200`, `5:1`) o un decimal simple (`0.005`), luego pulsa **Enter**.
- Haz clic derecho en una ventana gráfica y usa **Lock** para evitar cambios accidentales.

## Notas

- ViewportRectangle solo está disponible cuando una pestaña de diseño de papel está activa. Ejecutarlo en el espacio modelo muestra un mensaje de error y sale.
- Para copiar una ventana gráfica existente, usa [ViewportCopy](./viewport-copy).
