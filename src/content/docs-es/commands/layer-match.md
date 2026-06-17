---
sidebar_position: 1
title: LayerMatch — Reasignar capas de entidades para que coincidan con una fuente en KulmanLab CAD
description: El comando LayerMatch reasigna la capa de una o más entidades de destino para que coincida con la capa de una entidad fuente en la que haces clic.
keywords: [coincidir capa, igualar capa CAD, reasignar capa kulmanlab, gestión de capas CAD]
---

# LayerMatch

El comando `LayerMatch` reasigna la capa de las entidades seleccionadas para que coincida con la capa de una entidad fuente en la que haces clic. Es la forma más rápida de mover un grupo de objetos a la capa correcta sin abrir el Administrador de Capas.

## Flujo de trabajo

**Pre-seleccionar y luego igualar**:

1. Selecciona las entidades cuya capa quieres cambiar.
2. Escribe `LayerMatch` o haz clic en el botón **Layer Match** de la barra de herramientas (icono de pintura).
3. **Haz clic en el objeto fuente** — aquel cuya capa quieres copiar.
4. Todas las entidades seleccionadas se mueven a la capa del objeto fuente de inmediato.

**Activar y luego seleccionar**:

1. Escribe `LayerMatch` o haz clic en el botón de la barra de herramientas sin nada seleccionado.
2. **Elige los objetos de destino** — haz clic para alternar entidades individuales o arrastra para seleccionar por área.
3. Presiona **Enter** o **Space** para confirmar la selección.
4. **Haz clic en el objeto fuente** — su capa se aplica a todos los destinos.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Confirmar la selección de destino y avanzar a la fase de selección de fuente |
| `Escape` | Restablecer — volver a la selección de destino o cancelar por completo |

## Detalles de comportamiento

- Solo se cambia la propiedad `layer` — el color, el tipo de línea, el grosor de línea y la geometría no se modifican.
- El objeto fuente en sí no se modifica.
- El comando finaliza después de hacer clic en la fuente.
- Hacer clic en el lienzo vacío durante la fase de selección de fuente no hace nada.
