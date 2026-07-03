---
sidebar_position: 12
title: Comando Leader+ — Añadir un brazo de punta de flecha a una multireferencia existente en KulmanLab CAD
description: El comando Leader+ añade un nuevo brazo de punta de flecha a una multireferencia existente. El nuevo brazo comparte el quiebre, el texto y todo el estilo de la referencia seleccionada. Dos clics — selecciona la referencia, coloca la nueva punta.
keywords: [añadir brazo a referencia CAD, comando leader+, añadir flecha a referencia, brazo de multireferencia, kulmanlab]
---

# Leader+

El comando `leader+` añade un nuevo brazo de punta de flecha a una multireferencia existente. El nuevo brazo apunta desde el quiebre existente de la referencia hacia una nueva punta de flecha que haces clic. Todo el estilo — posición del quiebre, texto, tipo de punta de flecha y tamaño — se hereda de la referencia seleccionada.

## Añadir un brazo

1. Escribe `leader+` en el terminal.
2. **Haz clic en una multireferencia existente** para seleccionarla.
3. **Haz clic en la nueva punta de flecha**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta. Una línea de vista previa se muestra desde el cursor hasta el quiebre de la referencia.

El brazo se coloca y el comando permanece activo — puedes hacer clic de inmediato en otra referencia para añadir más brazos. Presiona **Enter**, **Space** o **Escape** para terminar.

```
  Antes:                         Después:
  ◄── brazo 1                    ◄── brazo 1
       \                               \
        ●──── quiebre ──── texto        ●──── quiebre ──── texto
                                       /
                              brazo 2 ──►  (nueva punta en la que hiciste clic)
```

## Entrada de coordenadas para la punta

En lugar de hacer clic, puedes escribir una posición exacta:

1. Escribe el valor X.
2. Presiona `,` — el terminal confirma que X está bloqueado.
3. Escribe el valor Y.
4. Presiona **Enter** para colocar.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.`, `-` | Comenzar a escribir la coordenada X |
| `,` | Bloquear X y pasar a la entrada de Y |
| `Enter` | Confirmar la coordenada escrita y colocar el brazo |
| `Enter` / `Space` | Terminar (cuando no hay entrada en progreso) |
| `Escape` | Cancelar y restablecer |

## Notas

- Solo se pueden seleccionar entidades **Multireferencia** — hacer clic en cualquier otro tipo de entidad no hace nada.
- El nuevo brazo se origina en el quiebre existente; solo eliges dónde va la punta de flecha.
- No hay límite en el número de brazos que puede tener una multireferencia.

## Comandos relacionados

| Comando | Qué hace |
|---------|-------------|
| [Leader](../leader/) | Crear una nueva multireferencia desde cero |
| [Leader−](../leader-remove/) | Eliminar un brazo de una multireferencia que tiene dos o más |
