---
title: "Cómo dibujar un hexágono o un círculo de pernos en CAD (Polygon y matriz polar)"
description: "Dibuja un polígono regular desde un centro y un radio o desde un lado, y luego repite agujeros en un círculo de pernos con una matriz polar — gratis en tu navegador, con valores exactos escritos."
keywords: [dibujar hexágono en CAD, polígono regular CAD, matriz polar CAD, círculo de pernos plano, patrón de agujeros CAD, patrón circular CAD, dibujo de tuerca hexagonal, dibujar octógono CAD, círculo primitivo PCD, herramienta polígono CAD gratis]
date: 2026-10-11
author: KulmanLab
tag: Guía
---

Para dibujar un polígono regular en CAD, indica el número de lados, elige el centro y luego un radio — o elige un lado y el resto se deduce. Para dibujar un círculo de pernos, dibuja un agujero y repítelo alrededor del centro con una matriz polar. Esta guía hace ambas cosas, con números exactos, en un navegador en [app.kulmanlab.com](https://app.kulmanlab.com) — gratis, sin instalar nada, y el archivo nunca sale de tu ordenador.

Nosotros creamos [KulmanLab](https://kulmanlab.com), así que los pasos siguientes usan sus comandos. Las ideas — entre caras frente a entre esquinas, diámetro del círculo primitivo, si las copias giran al dar la vuelta — son las mismas en cualquier programa CAD.

## Dibujar un polígono regular

Un polígono regular tiene lados y ángulos iguales: un hexágono para una tuerca, un octógono para una señal, un pentágono para un recorte decorativo. En KulmanLab es el comando **Polygon**.

1. Escribe `Polígono` en el terminal, o usa el botón Polygon del panel Shapes.
2. Introduce el **número de lados** — cualquier entero de 3 a 1024 — y pulsa **Enter**. La solicitud viene rellenada con el número que usaste la última vez.
3. **Haz clic en el centro**, o escribe `X,Y` para un punto exacto.
4. **Haz clic en el radio**, o escríbelo y pulsa **Enter**.

El resultado es una única polilínea cerrada, así que todo lo que puedes hacer con una polilínea — mover, girar, desfasar, escalar — funciona con ella.

### ¿Entre caras o entre esquinas?

Aquí es donde la gente se tropieza. «Radio» puede significar dos distancias distintas, y un hexágono se especifica con una u otra según lo que dibujes:

| | Medido hasta | Uso típico |
|---|---|---|
| **Inside activado** (predeterminado) | Las esquinas | Una forma que debe caber dentro de un círculo dado |
| **Inside desactivado** | El punto medio de cada lado | Una forma con un ancho entre caras dado — tuercas, cabezas de tornillo, tamaños de llave |

Pulsa `I` en la solicitud del radio para cambiar. Una tuerca hexagonal se vende por su ancho entre caras, así que usa **Inside desactivado** y escribe la *mitad*. Para una tuerca M8 de 13 mm entre caras:

1. `Polígono`, luego `6` para los lados, luego haz clic o escribe el centro.
2. Pulsa `I` para desactivar Inside.
3. Escribe `6.5` y pulsa **Enter**.

Las caras quedan exactamente a 13 mm; las esquinas llegan a 7,51 mm del centro, unos 15 mm entre esquinas. Si escribes el radio en lugar de hacer clic, el polígono queda con su lado más bajo horizontal, plano por abajo. Si haces clic, toma la orientación del punto donde hagas clic.

### Desde un lado

A veces conoces la longitud de un lado, no un radio — por ejemplo, un tablero octogonal con lados de 20 mm. Pulsa `E` en la solicitud del primer punto para cambiar al modo **Edge** y elige los dos extremos de un lado. El resto de vértices se construye en sentido antihorario, a la izquierda de ese lado. Escribir `0,0` y luego `20,0` coloca un lado de 20 mm a lo largo del eje X con el polígono encima.

## Dibujar un círculo de pernos

Un círculo de pernos — o círculo primitivo, «PCD» en los planos — es un anillo de agujeros equiespaciados alrededor de un centro. Dibujas un agujero y lo repites. En KulmanLab eso es **ArrayPolar**.

Toma seis agujeros de 6,6 mm en un círculo primitivo de 50 mm de diámetro, centrado en el origen:

1. **Dibuja el primer agujero.** Ejecuta `Círculo`, escribe el centro como `25` `,` `0` — la mitad del PCD a lo largo del eje X —, pulsa **Enter**, escribe el radio `3.3` y pulsa **Enter**.
2. **Selecciónalo** haciendo clic en el círculo.
3. **Ejecuta la matriz polar.** Escribe `MatrizPolar`, o usa el botón ArrayPolar del panel Edit.
4. **Elige el centro del patrón** — escribe `0,0`.
5. El terminal muestra la matriz tal como está — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — y las cinco copias se previsualizan en vivo. Pulsa **Enter** para aceptar.

Ese es todo el círculo de pernos. Para otro número, pulsa `I` antes de confirmar y escribe el número de elementos — el original cuenta como uno y el ángulo entre ellos se calcula solo. O pulsa `A` y escribe en su lugar la separación en grados; el ángulo de relleno se reformula para coincidir.

Algunos detalles que importan:

- **Fill** es el ángulo del primer elemento al último. Los 360° predeterminados reparten los elementos por todo el círculo; un número menor los reparte en un arco — una fila de agujeros en un cuarto de vuelta, por ejemplo. Un ángulo negativo va en sentido horario.
- **Rotate** decide si cada copia gira al dar la vuelta. Para agujeros circulares no cambia nada. Para una ranura, un diente o un soporte sí: activado, cada copia mira al centro como lo hacía el original; desactivado, cada copia conserva la orientación del original y solo se desplaza a su sitio. Pulsa `R` para cambiarlo antes de confirmar.
- La matriz crea **copias** — el original se queda donde está, y cada elemento es una entidad normal que puedes editar después.

## Todo junto: una brida

Dibuja un hexágono como contorno, un círculo en el centro para el taladro y un círculo de pernos para los agujeros de montaje. Tres comandos, cada cota escrita con exactitud y nada que medir en la pantalla.

Si la pieza va a un cortador láser, borra cualquier círculo auxiliar que hayas dibujado para hallar el círculo primitivo — se cortaría como todo lo demás — y revisa el archivo con nuestra guía de [preparación de un DXF para corte láser](/es/blog/prepare-dxf-for-laser-cutting/). El polígono es una trayectoria cerrada por construcción, que es lo que más a menudo hace que los servicios de corte rechacen archivos.

## Lo que esto no hace

- **Solo polígonos regulares.** Todos los lados son iguales. Un contorno irregular — una forma con algunos lados más largos — es una [polilínea](/es/docs/commands/polyline/) que dibujas punto por punto.
- **Solo 2D.** Dibuja contornos planos. No te dará una tuerca modelada ni un tornillo roscado.
- **Solo navegadores de escritorio** — Chrome, Firefox, Safari y Edge. No hay versión móvil.

---

*Relacionado: [Polygon](/es/docs/commands/polygon/) y [ArrayPolar](/es/docs/commands/array-polar/) para todas las opciones y teclas, [Circle](/es/docs/commands/circle/) para escribir radios exactos y [ArrayGrid](/es/docs/commands/array-grid/) para repetir objetos en filas y columnas en vez de alrededor de un centro.*
