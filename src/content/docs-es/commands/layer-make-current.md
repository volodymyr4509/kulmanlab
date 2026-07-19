---
title: LayerMakeCurrent — Establecer la capa de una entidad como actual
description: El comando LayerMakeCurrent establece la capa de dibujo actual para que coincida con la capa de la entidad en la que se hace clic.
keywords: [establecer capa actual, capa actual CAD, gestión de capas kulmanlab]
group: layer
order: 1
---

# LayerMakeCurrent

El comando `LayerMakeCurrent` establece la **capa de dibujo actual** a la capa a la que pertenece la entidad en la que se hace clic. Las nuevas entidades se dibujarán automáticamente en esa capa.

## Uso

1. Escribe `LayerMakeCurrent` en el terminal o haz clic en el botón **Make Current** de la barra de herramientas (icono de cuentagotas).
2. **Haz clic en cualquier entidad** del lienzo.
3. La capa actual se actualiza para coincidir con la capa de esa entidad. El comando finaliza de inmediato.

## Detalles de comportamiento

- Si haces clic en el lienzo vacío (sin entidad), el terminal muestra `no object found` y el comando permanece activo para que puedas intentarlo de nuevo.
- Solo se cambia la configuración de la capa actual — no se modifican entidades.
- La capa actualizada se refleja en el selector de capas de la barra de herramientas.
