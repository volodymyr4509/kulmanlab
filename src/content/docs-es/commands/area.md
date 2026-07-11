---
title: Comando Area — Medir el Área y el Perímetro de un Polígono en KulmanLab CAD
description: El comando Area mide el área encerrada y el perímetro de un polígono definido por 3 o más puntos seleccionados, usando la fórmula del área de Gauss. Admite entrada direccional con bloqueo de ángulo y un resaltado persistente del resultado en el lienzo.
keywords: [medir área CAD, comando area, calculadora de área de polígono, medición de perímetro, fórmula del área de Gauss, medición CAD kulmanlab]
group: measure
order: 3
---

# Area

El comando `area` mide el área encerrada y el perímetro de un polígono definido por tres o más puntos seleccionados, e imprime ambos resultados en el terminal con 4 decimales. Es el tercer comando de medición, junto con [Distance](../distance/) (longitud en línea recta) y [Angle](../angle/) (ángulo interior en un vértice).

## Anatomía de una medición de área

```
  ● primer punto
   \
    \
     ● segundo punto
      \
       \             (discontinua) vista previa de la arista de cierre
        ●───────────────┐
      tercer punto      │  (discontinua) vista previa de la siguiente arista al cursor
                        ✕ cursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vértices** — cada punto seleccionado (o escrito) se convierte en un vértice del polígono; las aristas confirmadas se dibujan sólidas y el interior se rellena con un resaltado translúcido.
- **Aristas de vista previa** — líneas discontinuas muestran la arista pendiente desde el último vértice hasta el cursor, y la arista de cierre desde el cursor de vuelta al primer vértice.
- **Arista de cierre** — nunca vuelves a hacer clic en el primer punto; presionar Enter cierra el polígono automáticamente.

## Medir un área

1. Escribe `area` en el terminal o haz clic en el botón **Area** de la barra de herramientas (fila inferior del panel Measure).
2. **Haz clic en el primer punto**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en cada vértice adicional** en orden alrededor de la forma. La entrada de coordenadas funciona en cada paso.
4. Una vez colocados al menos **3 puntos**, presiona **Enter** (sin una entrada de coordenada o distancia pendiente) para cerrar el polígono y calcular el resultado.
5. El terminal imprime `Area: <valor>  Perimeter: <valor>`, y el polígono cerrado — relleno, contorno y controladores de vértice — permanece resaltado en el lienzo.
6. **Haz clic en cualquier lugar, presiona cualquier tecla o presiona `Escape`** para descartar el resultado y finalizar el comando.

## Bloqueo de ángulo y distancia exacta

Después de colocar el primer vértice, moverse hacia uno de los incrementos de seguimiento de ángulo configurados (10°, 15°, 20°, 30°, 45° o 90°, ajustables en el menú desplegable de la barra de herramientas) bloquea la siguiente arista en esa dirección:

- La vista previa de la arista se ajusta a la dirección bloqueada, y se dibuja un indicador de seguimiento de ángulo en el vértice de anclaje.
- Escribe una longitud y presiona **Enter** para colocar el siguiente vértice exactamente a esa distancia a lo largo de la dirección bloqueada.
- Hacer clic mientras está bloqueado (sin longitud escrita) coloca el vértice en la proyección del cursor sobre la dirección bloqueada.

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Añadir al valor de longitud de la arista |
| `-` | Longitud negativa (solo como primer carácter) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Colocar el siguiente vértice a la longitud escrita |

## Cerrar el polígono

- Enter solo cierra la forma una vez que se colocan **3 o más** vértices — con menos, no tiene efecto.
- La arista desde el último vértice de vuelta al primero se añade automáticamente y se cuenta tanto en el área como en el perímetro.
- Los puntos pueden colocarse en cualquier orden (en sentido horario o antihorario) — el resultado es idéntico.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Qué mide | Área encerrada y perímetro de un polígono | Longitud en línea recta | Ángulo interior en un vértice |
| Número de clics | 3 o más, cerrado con Enter | 2 | 3 |
| Formato del resultado | `12.3456  Perimeter: 45.6789` | `12.3456` (unidades) | `45.0000°` |
| Vista previa en el lienzo | Polígono relleno con arista de cierre discontinua | Línea desde el primer punto al cursor | Dos líneas desde el vértice al cursor |
| Después del resultado | Se descarta con cualquier entrada y el comando finaliza | Un clic encadena una nueva medición | Un clic encadena una nueva medición |
| Mejor para | Regiones encerradas, área de una habitación o panel | Longitud de un espacio o segmento | Ángulo de apertura entre dos elementos |

## Entrada de coordenadas

En lugar de hacer clic, escribe una posición exacta para cualquier vértice:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para confirmar.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X, o entrada de longitud de arista con bloqueo de ángulo activo |
| `,` | Bloquear X y pasar a la entrada Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar una coordenada o longitud escrita; con 3 o más vértices y sin entrada pendiente, cierra el polígono |
| `Escape` | Mientras se seleccionan vértices: descarta los puntos y reinicia en el primer punto; una vez mostrado el resultado: lo descarta y finaliza el comando |

## Notas

- El área se calcula con la [fórmula del área de Gauss](https://es.wikipedia.org/wiki/F%C3%B3rmula_del_%C3%A1rea_de_Gauss) y siempre se reporta como un valor positivo, independientemente del orden de los clics.
- Los polígonos autointersecantes (aristas que se cruzan) siguen produciendo un resultado numérico, pero el valor puede no coincidir con la región visualmente encerrada — mantén un orden de clics sin cruces para un área con significado.
- Los resultados se muestran solo en el **terminal y como un resaltado temporal en el lienzo** — no se agrega nada permanente al dibujo.
- A diferencia de Distance y Angle, Area **no** encadena automáticamente una nueva medición — después de descartar el resultado, ejecuta `area` de nuevo para medir otro polígono.
- La precisión es siempre de 4 decimales tanto para el área como para el perímetro, en las mismas unidades que las coordenadas del dibujo (sin conversión de unidades).
