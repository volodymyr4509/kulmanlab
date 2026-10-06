---
title: Extend — Estirar una Entidad hasta el Límite Más Cercano
description: El comando Extend estira el extremo más cercano de una Line, Arc, Ellipse o Polyline abierta sobre la que se pasa el cursor hasta la intersección más próxima con otra entidad. Una vista previa en vivo muestra la entidad extendida antes de hacer clic.
keywords: [comando extend CAD, extender línea CAD, extender arco CAD, extender elipse CAD, extender polilínea CAD, estirar entidad hasta límite, vista previa extend al pasar el cursor, kulmanlab]
group: edit
order: 9
---

# Extend

El comando `Alargar` estira el extremo más cercano de una [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) o Polyline abierta sobre la que se pasa el cursor hasta la intersección más próxima que formaría con otra entidad del dibujo. Pasa el cursor cerca del extremo que quieres extender — una vista previa muestra la entidad extendida — luego haz clic para aplicar.

Solo las entidades con un extremo real pueden extenderse. Un [Circle](../circle/) y una Ellipse completa (360°) son siempre formas cerradas sin extremo, así que nunca pueden extenderse — lo mismo ocurre con una Polyline cerrada o un Rectangle. Una Ellipse parcial (un arco elíptico) y un Arc sí tienen extremos y se extienden igual que una Line.

## Extender una entidad

1. Escribe `Alargar` en el terminal o haz clic en el botón **Extend** de la barra de herramientas.
2. **Pasa el cursor cerca de un extremo** de la entidad que quieres extender — la vista previa la muestra extendida hasta el límite más cercano en esa dirección.
3. **Haz clic** para aplicar la extensión.

El comando permanece activo después de cada extensión, así que puedes seguir pasando el cursor y haciendo clic para extender más entidades. Presiona **Enter**, **Space** o **Escape** para salir.

```
  Antes:                       Después:

  ──────           |           ──────────────|
  (línea corta)    (límite)    (extendida al límite)
```

## Cómo se elige el extremo

El comando observa de qué extremo está más cerca el cursor:

- **Line y Polyline abierta** — cursor más cerca del punto final extiende el final hacia adelante; cursor más cerca del punto inicial extiende el inicio hacia atrás.
- **Arc y Ellipse parcial** — cursor más cerca de uno de los extremos angulares hace crecer el arco en esa dirección, recorriendo el mismo centro y radio (o la misma forma de elipse) hasta alcanzar el siguiente límite.

Se lanza un rayo — o, en el caso de Arc y Ellipse, la propia circunferencia o curva subyacente de la entidad — desde el extremo elegido, y la **intersección más cercana** con cualquier otra entidad (excluyendo la propia entidad y los tipos ignorados) se convierte en el nuevo extremo.

Si no se encuentra ninguna intersección en esa dirección, no aparece ninguna vista previa y hacer clic no hace nada.

## Exclusiones de límites

Los siguientes tipos de entidades se ignoran como límites — una entidad no se extiende para encontrarlos:

- Text / Mtext
- Multileader

Todos los demás tipos (Line, Arc, Circle, Ellipse, Polyline, Spline, Dimension) sirven como límites válidos.

Si el primer o último segmento de una Polyline es en sí un segmento de arco (dibujado con el interruptor Arc), extenderlo hace crecer el arco a lo largo de su propio círculo — igual que al extender un Arc independiente — en lugar de tratarlo como un segmento recto.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Space` | Salir del modo extend |
| `Escape` | Salir del modo extend |

## Entidades compatibles

| Entidad | ¿Se puede extender? |
|---------|---------------------|
| Line | Sí |
| Arc | Sí |
| Ellipse | Sí — solo si ya es un arco parcial; una elipse completa no tiene extremo |
| Circle | No — siempre es una forma cerrada sin extremo |
| Polyline (abierta) | Sí |
| Polyline (cerrada) / Rectangle | No — siempre es una forma cerrada sin extremo |
| Text, Spline, Dimension, Leader | No |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Qué hace | Estira el extremo de una entidad hasta un límite | Elimina un segmento de una entidad |
| Activación | Pasar el cursor cerca del extremo a estirar | Pasar el cursor sobre el segmento a cortar |
| Resultado | El extremo se mueve hacia afuera | La entidad se divide o acorta |
| Entidades compatibles | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
