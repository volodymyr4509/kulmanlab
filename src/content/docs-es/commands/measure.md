---
title: "Comando Measure — leer distancias, longitudes, ángulos y áreas alrededor del cursor"
description: "El comando Measure lee el dibujo alrededor del cursor mientras lo mueves — la distancia hasta la geometría más cercana, la longitud o el radio de lo que encuentra, el ángulo donde se encuentran las líneas — y con un clic da el área y el perímetro de una zona cerrada. No cambia nada en el dibujo."
keywords: ["comando medir CAD", "medir área y perímetro CAD", "medición de distancia en vivo CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

El comando `measure` lee el dibujo alrededor del cursor mientras lo mueves, sin puntos que elegir: a qué distancia está la geometría más cercana, cuánto mide o cuán redonda es esa geometría y el ángulo donde se encuentran las líneas. Un clic dentro de una zona cerrada da su área y su perímetro. No cambia nada en el dibujo.

## Medir

1. Escribe `measure` en el terminal o haz clic en **Measure**, el primer botón del panel Measure.
2. **Mueve el cursor.** Desde él, el comando mira a la derecha, arriba, a la izquierda y abajo en busca de la geometría más cercana y muestra lo que encuentra.
3. **Haz clic dentro de una zona cerrada** para rellenarla y leer su área y su perímetro — véase abajo.
4. Pulsa **Enter**, **Space** o **Escape** para terminar.

## Qué muestra

- **Distancia de lado a lado** — de lo que el cursor encuentra a un lado a lo que encuentra al otro, en horizontal y en vertical. Si solo un lado tiene algo, la distancia parte del cursor. Cada extremo que encuentra algo lleva un pequeño punto relleno; un extremo en el cursor no lo lleva.
- **Longitud o radio** — cada objeto al que llega el comando se destaca con su longitud, o su radio cuando forma parte de un círculo.
- **Ángulo** — donde se encuentran dos rectas alcanzadas, se escribe el ángulo entre ellas; un ángulo recto se marca con un pequeño cuadrado.

Las longitudes y los ángulos se escriben como los escribe el [DimensionStyle](../dimension-style/) actual, con su formato de unidades y su precisión.

## Área y perímetro

Un clic dentro de una zona cerrada la rellena y pone su área y su perímetro en la solicitud y el historial. La región se halla como la halla [Hatch](../hatch/): líneas sueltas que se encuentran extremo con extremo cierran una zona igual que una polilínea, y todo lo cerrado en su interior se deja fuera como isla — su borde cuenta en el perímetro y su área se resta.

El área es un número simple de unidades de dibujo cuadradas — los pies y las pulgadas no pueden escribir un área — mientras que el perímetro sigue el formato de unidades. Haz clic dentro de otra zona para medirla. Si nada cerrado rodea el punto, el terminal dice por qué, con los mismos mensajes que Hatch: no boundary found, point is not enclosed o boundary is open.

## Conviene saber

- Mide respecto a líneas, arcos, círculos, elipses, polilíneas y splines; las longitudes y las áreas son exactas, también para elipses y splines.
- Se ignoran los objetos de capas congeladas; se miden los de capas bloqueadas.
- En un dibujo grande solo mira lo que está cerca del cursor, así que sigue siendo ágil.

---

*Relacionado: [Distance](../distance/), [Angle](../angle/) y [Area](../area/) para medidas entre puntos que eliges, y [Hatch](../hatch/) para saber cómo se hallan las zonas cerradas.*
