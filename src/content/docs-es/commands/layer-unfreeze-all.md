---
title: LayerUnfreezeAll — Descongelar todas las capas en KulmanLab CAD
description: El comando LayerUnfreezeAll elimina el indicador de congelación en todas las capas del dibujo en un solo paso.
keywords: [descongelar capa, descongelar todas las capas CAD, gestión de capas kulmanlab]
group: layer
order: 4
---

# LayerUnfreezeAll

El comando `LayerUnfreezeAll` elimina el indicador de congelación en **todas las capas** del dibujo al instante. No se necesita selección ni confirmación — se ejecuta y finaliza en un solo paso.

## Uso

Escribe `LayerUnfreezeAll` en el terminal o haz clic en el botón **Unfreeze All** de la barra de herramientas (icono de sol). Todas las capas congeladas se vuelven visibles de inmediato.

## Cuándo usarlo

Se usa habitualmente después de [LayerIsolate](../layer-isolate/) para restaurar todas las capas a su estado visible normal.

## Detalles de comportamiento

- Se aplica a todas las capas independientemente de su estado actual.
- No afecta los indicadores de bloqueo o trazado — solo se cambia el indicador de congelación.
- El comando finaliza de inmediato sin indicaciones.
