---
title: "Comando PointInterval — colocar puntos a una distancia fija a lo largo de un objeto"
description: "El comando PointInterval coloca puntos a la distancia que escribes a lo largo de una línea, polilínea, arco, círculo, elipse o spline, empezando por el extremo junto al que haces clic, y los muestra en vista previa mientras escribes la longitud."
keywords: ["puntos a intervalos CAD", "puntos a distancia fija sobre una línea CAD", "medir a lo largo de un objeto CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

El comando `PuntosPorIntervalo` coloca [puntos](../point/) a una distancia fija a lo largo de un objeto, como al marcar estaciones sobre un trazado. El objeto no cambia: los puntos son entidades nuevas en la capa y el color actuales, útiles para forzar el cursor.

## Colocar puntos a intervalos

1. Escribe `PuntosPorIntervalo` en el terminal o elige **Point Interval** en el desplegable de matrices del panel Edit.
2. **Haz clic en el objeto cerca del extremo desde el que empezar**: una línea, polilínea, arco, círculo, elipse o spline. Cualquier otra cosa se rechaza y puedes volver a elegir.
3. **Escribe la longitud del intervalo.** Los puntos se previsualizan sobre el objeto mientras escribes.
4. Pulsa **Enter** o **Space** para colocarlos. El comando termina.

## Dónde caen los puntos

- El primer punto va a un intervalo del inicio y los demás siguen a un intervalo de distancia, medidos a lo largo del objeto, curvas incluidas. En el inicio mismo no se pone ningún punto.
- En un objeto abierto —línea, polilínea abierta, arco, elipse parcial o spline abierto— se mide desde el extremo junto al que hiciste clic. Lo que sobra en el extremo lejano queda sin marcar: ese extremo solo recibe un punto cuando el intervalo cabe exactamente.
- En un objeto cerrado —círculo, polilínea cerrada, elipse completa o spline cerrado— se mide desde el inicio propio del objeto, hagas clic donde hagas clic: un círculo desde el ángulo 0 en sentido antihorario y una polilínea cerrada desde su primer vértice. Los puntos se detienen antes del inicio.
- Una longitud de 0 o menos, mayor que el objeto o que daría más de 32767 puntos se rechaza: el terminal dice por qué y la borra para que vuelvas a escribir.

Retroceso borra el último carácter. Escape empieza de nuevo, para elegir otro objeto. Enter o Space antes de elegir un objeto termina el comando.

---

*Relacionado: [Point Divide](../point-divide/) para dividir un objeto en un número de longitudes iguales y [Point](../point/) para puntos sueltos.*
