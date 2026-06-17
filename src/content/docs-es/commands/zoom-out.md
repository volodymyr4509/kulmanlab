---
sidebar_position: 3
title: "Comando Zoom Out — Reducir el Zoom de la Ventana Gráfica 1,5× por Paso en KulmanLab CAD"
description: "El comando Zoom Out divide el nivel de zoom actual por 1,5× y sale inmediatamente. Centrado en el punto medio de la ventana gráfica. Usa la rueda del ratón para alejar el zoom hacia el cursor para un control más preciso."
keywords: [CAD zoom out, reducir zoom ventana gráfica, comando zoom out, vista general CAD, paso de zoom 1,5x, kulmanlab]
---

# Zoom Out

El comando `zoomout` divide el nivel de zoom actual por **1,5×** (equivalente a multiplicar por ~0,667) y sale inmediatamente, centrado en el punto medio de la ventana gráfica. Es el inverso de [Zoom In](./zoom-in).

## Hacer zoom de alejamiento

Haz clic en el botón de la barra de herramientas **Zoom Out** o escribe `zoomout` en el terminal. El zoom se aplica instantáneamente y el comando sale — no se requiere clic en el lienzo.

## Cómo funciona el paso de 1,5×

| Zoom actual | Tras un Zoom Out |
|-------------|-----------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (límite mínimo) |

El nivel de zoom siempre se muestra en la **esquina inferior derecha** del lienzo. El límite inferior es **0,01×**; los pasos posteriores no hacen nada.

## Botón Zoom Out vs rueda del ratón

| | Botón Zoom Out | Rueda del ratón |
|---|----------------|----------------|
| Centro de zoom | Punto medio de la ventana gráfica | Posición del cursor |
| Tamaño del paso | 1,5× por clic | ~1,1× por tick |
| Requiere activación | No | No — funciona siempre |
| Ideal para | Retroceder para ver más contexto | Zoom de alejamiento suave anclado al cursor |

## Referencia de teclado

No hay atajos de teclado para este comando. Usa la rueda del ratón en su lugar — funciona en cualquier momento sin activar ningún comando.

## Comandos de vista relacionados

| Comando | Qué hace |
|---------|----------|
| [Zoom In](./zoom-in) | Multiplica el zoom por 1,5× por paso |
| [Fit](./fit) | Restablece el zoom para mostrar todas las entidades |
| [Pan](./pan) | Desplaza la ventana gráfica sin hacer zoom |
