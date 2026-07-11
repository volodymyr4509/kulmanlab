---
title: "Comando Zoom In — Ampliar la Ventana Gráfica 1,5× por Paso en KulmanLab CAD"
description: "El comando Zoom In multiplica el nivel de zoom actual por 1,5× y sale inmediatamente. Centrado en el punto medio de la ventana gráfica. Rango de zoom 0,01–10.000. Usa la rueda del ratón para hacer zoom hacia el cursor en su lugar."
keywords: [CAD zoom in, ampliar ventana gráfica, comando zoom CAD, paso de zoom 1,5x, kulmanlab]
group: navigate
order: 2
---

# Zoom In

El comando `zoomin` multiplica el nivel de zoom actual por **1,5×** y sale inmediatamente, centrado en el punto medio de la ventana gráfica. Es el equivalente en la barra de herramientas de un tick de rueda del ratón con zoom hacia el centro de la pantalla en lugar de hacia el cursor.

## Hacer zoom de acercamiento

Haz clic en el botón de la barra de herramientas **Zoom In** o escribe `zoomin` en el terminal. El zoom se aplica instantáneamente y el comando sale — no se requiere clic en el lienzo.

## Cómo funciona el paso de 1,5×

| Zoom actual | Tras un Zoom In |
|-------------|----------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6.667× | 10.000× (límite máximo) |

El nivel de zoom siempre se muestra en la **esquina inferior derecha** del lienzo junto a la etiqueta `zoom`. El límite superior es **10.000×**; los pasos posteriores no hacen nada.

## Botón Zoom In vs rueda del ratón

| | Botón Zoom In | Rueda del ratón |
|---|--------------|----------------|
| Centro de zoom | Punto medio de la ventana gráfica | Posición del cursor |
| Tamaño del paso | 1,5× por clic | ~1,1× por tick |
| Requiere activación | No | No — funciona siempre |
| Ideal para | Navegación gruesa | Zoom preciso hacia el cursor |

## Referencia de teclado

No hay atajos de teclado para este comando. Usa la rueda del ratón en su lugar — funciona en cualquier momento sin activar ningún comando.

## Comandos de vista relacionados

| Comando | Qué hace |
|---------|----------|
| [Zoom Out](../zoom-out/) | Divide el zoom por 1,5× por paso |
| [Fit](../fit/) | Restablece el zoom para mostrar todas las entidades |
| [Pan](../pan/) | Desplaza la ventana gráfica sin hacer zoom |
