---
title: Comando Extend — Estirar un Extremo de Línea hasta el Límite Más Cercano en KulmanLab CAD
description: El comando Extend estira el extremo más cercano de una línea sobre la que se pasa el cursor hasta la intersección más próxima con otra entidad. Una vista previa en vivo muestra la línea extendida antes de hacer clic. Extend funciona solo con entidades Line e ignora Text, Spline y Multileader como límites.
keywords: [comando extend CAD, extender línea CAD, estirar línea hasta límite, extremo de línea extend, vista previa extend al pasar el cursor, kulmanlab]
group: edit
order: 9
---

# Extend

El comando `extend` estira el extremo más cercano de una [Line](../line/) hasta la intersección más próxima que formaría con otra entidad del dibujo. Pasa el cursor cerca del extremo que quieres extender — una vista previa muestra la línea extendida — luego haz clic para aplicar.

Extend funciona **solo con entidades Line**. Los límites hacia los que se extiende la línea pueden ser cualquier otro tipo de entidad excepto Text, Mtext, Multileader y Spline.

## Extender una línea

1. Escribe `extend` en el terminal o haz clic en el botón **Extend** de la barra de herramientas.
2. **Pasa el cursor cerca de un extremo de una línea** — la vista previa muestra la línea extendida hasta el límite más cercano en esa dirección.
3. **Haz clic** para aplicar la extensión.

El comando permanece activo después de cada extensión para que puedas extender múltiples líneas en secuencia. Presiona **Escape** para salir.

```
  Antes:                       Después:

  ──────           |           ──────────────|
  (línea corta)    (límite)    (extendida al límite)
```

## Cómo se elige el extremo

El comando observa qué extremo está más cerca del cursor:

- El cursor está **más cerca del punto final** → el final se extiende hacia adelante en la dirección de la línea.
- El cursor está **más cerca del punto inicial** → el inicio se extiende hacia atrás (en la dirección opuesta).

Se lanza un rayo desde el extremo elegido en la dirección de la línea, y la **intersección más cercana** a lo largo de ese rayo con cualquier otra entidad (excluyendo la propia línea y los tipos ignorados) se convierte en el nuevo extremo.

Si no se encuentra ninguna intersección en esa dirección, no aparece ninguna vista previa y hacer clic no hace nada.

## Exclusiones de límites

Los siguientes tipos de entidades se ignoran como límites — una línea no se extiende para encontrarlos:

- Text / Mtext
- Multileader
- Spline

Todos los demás tipos (Line, Arc, Circle, Ellipse, Polyline, Dimension) sirven como límites válidos.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Escape` | Salir del modo extend |

## Entidades compatibles

| Entidad | ¿Se puede extender? |
|---------|---------------------|
| Line | Sí |
| Arc, Circle, Ellipse | No |
| Polyline / Rectangle | No |
| Text, Spline, Dimension, Leader | No |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| Qué hace | Estira un extremo de línea hasta un límite | Elimina un segmento de una línea |
| Activación | Pasar el cursor cerca del extremo a estirar | Pasar el cursor sobre el segmento a cortar |
| Resultado | El extremo de la línea se mueve hacia afuera | La línea se divide o acorta |
| Ambos | Solo líneas | Solo líneas |
