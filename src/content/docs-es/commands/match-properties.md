---
sidebar_position: 1
title: Match Properties — Copiar propiedades de entidades en KulmanLab CAD
description: El comando MatchProperties copia el color, la capa y otras propiedades compartidas de una entidad fuente a una o más entidades de destino. Iguala las propiedades de la misma manera que las herramientas CAD de escritorio.
keywords: [igualar propiedades CAD, copiar propiedades de entidad, MATCHPROP, igualar capa y color, transferir propiedades, igualar propiedades kulmanlab, pintar propiedades, copiar capa CAD]
---

# Match Properties

El comando `MatchProperties` copia **propiedades visuales y de capa** de una entidad fuente a una o más entidades de destino. Solo se transfieren las propiedades que son compartidas entre los tipos de entidad fuente y destino — la geometría nunca se cambia.

## Cómo activarlo

Haz clic en el botón **Match Properties** de la barra de herramientas (icono de rodillo de pintura) en el panel Style, o escribe `MatchProperties` en el terminal.

## Flujo de trabajo

**Activar primero, luego seleccionar la fuente:**

1. Escribe `MatchProperties` o haz clic en el botón de la barra de herramientas sin nada preseleccionado.
2. **Haz clic en la entidad fuente** — aquella cuyas propiedades quieres copiar.
3. **Haz clic en cada entidad de destino** para aplicar las propiedades de la fuente. Puedes hacer clic en múltiples entidades una a una.
4. Para aplicar a un grupo a la vez, **arrastra un cuadro de selección** sobre los destinos.
5. Presiona **Enter** o **Escape** para terminar.

**Pre-seleccionar la fuente y luego activar:**

1. Haz clic en una sola entidad para seleccionarla.
2. Activa `MatchProperties`. La entidad seleccionada se usa automáticamente como fuente.
3. Haz clic en las entidades de destino o arrastra para seleccionar, luego **Enter** o **Escape** para terminar.

## Qué propiedades se copian

MatchProperties copia propiedades que pertenecen a una clase base compartida entre la fuente y el destino. Como mínimo, **todos los tipos de entidad** comparten estas propiedades:

| Propiedad | Descripción |
|----------|-------------|
| **Color** | El índice de color de la entidad (incluye "Por Capa" / "Por Bloque") |
| **Layer** | La capa a la que pertenece la entidad |

Cuando la fuente y el destino son del mismo tipo de entidad (p. ej. ambos son dimensiones), también se copian propiedades adicionales específicas del tipo — por ejemplo, la altura del texto, el tamaño de la flecha, la configuración de las líneas de extensión.

La geometría (coordenadas, radio, longitud, etc.) nunca se ve afectada.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Confirmar la selección de área o terminar el comando |
| `Escape` | Terminar de aplicar (si la fuente está establecida) o cancelar |

## Detalles de comportamiento

- La entidad fuente nunca se modifica.
- Cada clic o arrastre aplica las propiedades de la fuente de inmediato — no hay paso de confirmación.
- La selección por área sigue las reglas estándar: arrastra a la **derecha** para selección estricta (totalmente encerrado), arrastra a la **izquierda** para selección cruzada (cualquier intersección).
- Hacer clic en la entidad fuente como destino se ignora.

## Comandos relacionados

- [LayerMatch](./layer-match) — mover las entidades seleccionadas a la misma capa que una fuente (solo propiedad de capa)
- [LayerMakeCurrent](./layer-make-current) — establecer la capa de dibujo actual desde una entidad en la que se hace clic
