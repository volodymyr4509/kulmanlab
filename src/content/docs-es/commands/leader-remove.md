---
title: "Leader− — Eliminar un brazo de flecha de una multireferencia"
description: "El comando Leader− elimina un brazo de punta de flecha de una multireferencia que tiene dos o más. Sitúa el cursor cerca del brazo a eliminar — el brazo más cercano se resalta. El quiebre, el texto y los brazos restantes se conservan."
keywords: [eliminar brazo de referencia CAD, comando leader-, eliminar flecha de referencia, eliminar brazo de multireferencia, kulmanlab]
group: markup
order: 3
---

# Leader−

El comando `leader-` elimina un brazo de punta de flecha de una multireferencia existente. La etiqueta de texto, el quiebre y todos los brazos restantes se conservan — solo se elimina el brazo seleccionado. Una multireferencia con un solo brazo no puede tener su brazo eliminado.

## Eliminar un brazo

1. Escribe `leader-` en el terminal.
2. **Haz clic en una multireferencia** que tenga dos o más brazos. Si la referencia en la que hiciste clic tiene solo un brazo, el terminal muestra un error y espera una selección válida.
3. **Mueve el cursor cerca del brazo** que deseas eliminar — el brazo más cercano se resalta con un marcador.
4. **Haz clic** para eliminar ese brazo.

El brazo se elimina y el comando permanece activo — puedes hacer clic de inmediato en otra referencia (o en la misma) para eliminar más brazos. Presiona **Enter**, **Space** o **Escape** para terminar.

```
  Antes:                   Después:
  ◄── brazo 1              ◄── brazo 1
       \                         \
        ●──── quiebre ──── texto   ●──── quiebre ──── texto
       /
  brazo 2 ──►  ← este brazo eliminado
```

## Cómo se determina el brazo más cercano

El comando mide la distancia perpendicular desde el cursor hasta los segmentos de línea de cada brazo (incluido el segmento desde el último punto del brazo hasta el quiebre). El brazo con la distancia más pequeña se resalta y se eliminará al hacer clic.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Terminar de eliminar brazos |
| `Escape` | Cancelar y restablecer |

## Notas

- Una referencia con **solo un brazo** está protegida — debes añadir un brazo primero antes de eliminar uno.
- La posición del quiebre y el contenido del texto siempre se conservan independientemente del brazo que se elimine.

## Comandos relacionados

| Comando | Qué hace |
|---------|-------------|
| [Leader](../leader/) | Crear una nueva multireferencia desde cero |
| [Leader+](../leader-add/) | Añadir un brazo a una multireferencia existente |
