---
title: "Comando PointDivide — colocar puntos a longitudes iguales a lo largo de un objeto"
description: "El comando PointDivide divide una línea, polilínea, arco, círculo, elipse o spline en tramos de igual longitud y coloca un punto en cada división, mostrándolos en vista previa mientras escribes el número de tramos."
keywords: ["comando dividir CAD", "dividir línea en partes iguales CAD", "puntos a lo largo de un objeto CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

El comando `DividirConPuntos` coloca [puntos](../point/) que dividen un objeto en tramos de igual longitud. El objeto no cambia: los puntos son entidades nuevas en la capa y el color actuales, útiles para forzar el cursor.

## Dividir un objeto

1. Escribe `DividirConPuntos` en el terminal o elige **Point Divide** en el desplegable de matrices del panel Edit.
2. **Haz clic en el objeto**: una línea, polilínea, arco, círculo, elipse o spline. Cualquier otra cosa se rechaza y puedes volver a elegir.
3. **Escribe el número de tramos**, un entero de 2 a 32767. Los puntos se previsualizan sobre el objeto mientras escribes.
4. Pulsa **Enter** o **Space** para colocarlos. El comando termina.

## Dónde caen los puntos

- La separación es por longitud a lo largo del objeto, no por ángulo, así que una elipse o un spline se corta en piezas de igual longitud. Los tramos de arco de una polilínea se siguen a lo largo de su curva.
- En un objeto abierto —línea, polilínea abierta, arco, elipse parcial o spline abierto— los puntos van entre los tramos, nunca en los extremos: 5 tramos dan 4 puntos.
- En un objeto cerrado —círculo, polilínea cerrada, elipse completa o spline cerrado— los puntos dan toda la vuelta desde su inicio, que también recibe un punto: un círculo empieza en el ángulo 0 y una polilínea cerrada en su primer vértice. 5 tramos dan 5 puntos.
- Un número fuera de 2–32767 se rechaza: el terminal dice por qué y lo borra para que vuelvas a escribir.

Retroceso borra el último dígito. Escape empieza de nuevo, para elegir otro objeto. Enter o Space antes de elegir un objeto termina el comando.

---

*Relacionado: [Point Interval](../point-interval/) para puntos a una distancia fija, [Point](../point/) para puntos sueltos y [ArrayPolar](../array-polar/) para repetir objetos en vez de puntos.*
