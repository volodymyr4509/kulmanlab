---
title: LayerIsolate — Congelar todas las capas excepto las seleccionadas en KulmanLab CAD
description: El comando LayerIsolate congela todas las capas excepto las usadas por los objetos seleccionados, permitiéndote centrarte en geometría específica sin eliminar nada.
keywords: [aislar capa, congelar capas CAD, aislar capa kulmanlab, gestión de capas CAD]
group: layer
order: 3
---

# LayerIsolate

El comando `LayerIsolate` congela todas las capas **excepto** las que pertenecen a los objetos seleccionados. Úsalo para enfocarte rápidamente en geometría específica sin ocultar ni eliminar nada permanentemente — descongela con [LayerUnfreezeAll](../layer-unfreeze-all/) cuando termines.

## Dos formas de iniciarlo

**Pre-seleccionar y luego aislar** — selecciona las entidades primero y luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `LayerIsolate` en el terminal o haz clic en el botón **Layer Isolate** de la barra de herramientas.
3. Las capas de las entidades seleccionadas permanecen visibles; todas las demás se congelan de inmediato.

**Activar y luego seleccionar**:

1. Escribe `LayerIsolate` o haz clic en el botón de la barra de herramientas.
2. **Elige objetos** — haz clic en entidades individuales o arrastra para seleccionar por área.
3. Presiona **Enter** o **Space** para confirmar — se aplica el aislamiento.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Confirmar selección y aplicar aislamiento |
| `Escape` | Cancelar y limpiar la selección |

## Detalles de comportamiento

- Todas las capas que **no** están representadas en la selección se establecen como congeladas.
- Las capas que **sí** están representadas permanecen descongeladas, incluso si estaban congeladas antes.
- La selección se borra después de aplicar el aislamiento.
- El comando finaliza automáticamente después de aplicar.

## Deshacer el aislamiento

Ejecuta [LayerUnfreezeAll](../layer-unfreeze-all/) para restaurar todas las capas a visibles en un solo paso.
