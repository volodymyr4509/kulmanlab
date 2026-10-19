---
title: "Comando Point — colocar puntos en el dibujo en KulmanLab CAD"
description: "El comando Point coloca un punto en cada clic, X,Y escrito o distancia a lo largo de una dirección bloqueada, hasta Enter, Space o Escape. Los puntos se dibujan como un punto pequeño, llevan la capa y el color actuales y viajan como entidades DXF POINT."
keywords: ["comando punto CAD", "colocar punto CAD", "entidad DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

El comando `Punto` coloca un punto en cada selección y sigue activo hasta que pulsas Enter, Space o Escape. Un punto es una posición sin tamaño: se dibuja como un punto pequeño y lleva la capa y el color actuales. Se guarda como una entidad `POINT`.

## Colocar puntos

1. Escribe `Punto` en el terminal o haz clic en **Point**, el último botón del panel Shapes.
2. **Haz clic** donde va el punto, o escribe `X,Y` y pulsa **Enter** para una posición exacta. Cada selección coloca un punto y el terminal registra sus coordenadas; el comando sigue activo para el siguiente.
3. O bloquea una dirección desde un [pin de vector](../../interface/vector-pins/) y escribe una distancia: el punto cae exactamente a esa distancia a lo largo de ella.
4. Pulsa **Enter**, **Space** o **Escape** para terminar. Enter y Space solo terminan cuando no se está escribiendo nada.

## Cómo se ve un punto

Un punto se dibuja como un punto de 1 px de radio en cualquier nivel de zoom, así que sigue visible al alejar y no crece al acercar. El estilo de punto del dibujo (`$PDMODE` y `$PDSIZE`) aún no se lee, así que todo punto es un punto pequeño, diga lo que diga un DXF.

## Editar puntos

Un punto seleccionado tiene un tirador, que lo mueve. Una selección por ventana toma un punto cuando está dentro de la ventana, arrastres en la dirección que arrastres.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) y [Scale](../scale/) funcionan con puntos como con cualquier otra entidad. La ventana de propiedades muestra Position X y Position Y, además del color y la capa.

## DXF — entidad POINT

Los puntos se leen y escriben en DXF como entidades `POINT` con posición, color y capa (códigos de grupo 10/20, 62 y 8) y viajan también por el JSON guardado. Antes se omitían al importar. [Export Manager](../export-manager/) lista Points en su propia fila, así que puedes dejarlos fuera de una exportación.

---

*Relacionado: [Line](../line/) para la misma entrada de coordenadas y [Vector Pins](../../interface/vector-pins/) para colocar un punto a una distancia fija a lo largo de una dirección.*
