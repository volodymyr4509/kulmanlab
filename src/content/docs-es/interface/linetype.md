---
sidebar_position: 2
title: Selector de Tipo de Línea en la Barra de Herramientas — Controlar Patrones de Guiones en KulmanLab CAD
description: El selector de tipo de línea en la barra de herramientas de KulmanLab CAD establece el patrón de guiones aplicado a todas las nuevas entidades dibujadas. Admite todos los tipos de línea cargados desde el archivo DXF actual más las opciones integradas ByLayer, ByBlock y Continuous.
keywords: [tipo de línea CAD, patrón de guiones, línea discontinua, tipo de línea DXF, tipo de línea ByLayer, kulmanlab]
---

# Linetype

El chip de **linetype** en la barra de herramientas controla el patrón de guiones asignado a cada nueva entidad que dibujas. Haz clic en él para abrir el desplegable del selector.

## Opciones

| Valor | Significado |
|-------|-------------|
| **From Layer** | La entidad hereda el tipo de línea definido en su capa. Se muestra como `ByLayer` en DXF. |
| **ByBlock** | La entidad hereda el tipo de línea del bloque al que pertenece. No tiene efecto visible fuera de un bloque. |
| **Continuous** | Línea sólida continua — sin patrón de guiones. |
| **Tipos de línea con nombre** | Cualquier tipo de línea cargado desde el archivo DXF actual (p. ej. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). El desplegable muestra una vista previa en vivo de cada patrón y su cadena de definición. |

## Cómo se aplica

El tipo de línea seleccionado se aplica a cada entidad creada después del cambio. No afecta retroactivamente a las entidades existentes.

Para cambiar el tipo de línea de las entidades existentes, selecciónalas y edita el campo **Linetype** en el panel de propiedades, o usa [MatchProperties](../../commands/match-properties/) para copiarlo de otra entidad.

## Escala de tipo de línea

Cada entidad también tiene una propiedad **Linetype Scale** (predeterminado `1`). El patrón de guiones se multiplica por este factor. Un valor de `2` hace los guiones el doble de largos; `0.5` los hace la mitad de largos. Edítalo en el panel de propiedades después de seleccionar una entidad.

## Tipos de línea disponibles

El desplegable lista solo los tipos de línea presentes en el archivo DXF cargado actualmente. Un archivo recién creado contiene solo `ByLayer`, `ByBlock` y `Continuous`. Al importar un archivo DXF, todos los tipos de línea definidos en la tabla `$LTYPE` del archivo quedan disponibles.

Si necesitas un tipo de línea específico (p. ej. `DASHED2`) que no está en la lista, importa un archivo DXF que lo contenga — el tipo de línea aparecerá entonces en el selector para la sesión actual.

## Compatibilidad con DXF

Los nombres de tipos de línea se almacenan como cadenas en los registros de entidades. `ByLayer` y `ByBlock` son los valores centinela estándar de DXF. Todos los tipos de línea con nombre y sus patrones de guiones se conservan exactamente al exportar y se conservan sin pérdida en LibreCAD, FreeCAD y otras aplicaciones compatibles con DXF.
