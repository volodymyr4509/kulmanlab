---
title: Selector de Grosor de Línea en la Barra de Herramientas — Controlar el Ancho de Trazo en KulmanLab CAD
description: El selector de grosor de línea en la barra de herramientas de KulmanLab CAD establece el ancho de trazo aplicado a todas las nuevas entidades dibujadas. Admite los valores estándar de grosor de línea DXF de 0,00 mm a 2,11 mm más los modos ByLayer y Default.
keywords: [grosor de línea CAD, ancho de trazo, ancho de línea, grosor de línea DXF, grosor de línea ByLayer, kulmanlab]
group: interface
order: 4
---

# Lineweight

El chip de **lineweight** en la barra de herramientas controla el ancho de trazo asignado a cada nueva entidad que dibujas. Haz clic en él para abrir el desplegable del selector.

## Opciones

| Valor | Significado |
|-------|-------------|
| **From Layer** | La entidad hereda el grosor de línea definido en su capa. El ancho real mostrado depende de la configuración de la capa. |
| **Default** | Usa el ancho predeterminado de la aplicación — se renderiza como una línea delgada (1 px). No anula la configuración de la capa en DXF. |
| **0,00 mm – 2,11 mm** | Un ancho fijo explícito. La entidad lleva este valor independientemente del grosor de línea de su capa. |

Los valores estándar de grosor de línea DXF están disponibles: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 y 2,11 mm.

## Cómo se aplica

El grosor de línea seleccionado se aplica a cada entidad creada después del cambio. No afecta retroactivamente a las entidades existentes.

Para cambiar el grosor de línea de las entidades existentes, selecciónalas y edita el campo **Lineweight** en el panel de propiedades, o usa [MatchProperties](../../commands/match-properties/) para copiarlo de otra entidad.

## Renderizado

Los grosores de línea se renderizan a una escala de **3,78 px por mm** (96 dpi). Una línea de 0,25 mm tiene aproximadamente 1 px de ancho en pantalla; una línea de 1,00 mm tiene aproximadamente 4 px. Los valores muy delgados (0,00 mm y negativos) siempre se renderizan como mínimo a 0,5 px para que permanezcan visibles a cualquier nivel de zoom.

## Compatibilidad con DXF

Los valores de grosor de línea se almacenan como enteros en centésimas de milímetro (p. ej. 25 = 0,25 mm) en los registros de entidades DXF `LWPOLYLINE`, `LINE`, `CIRCLE` y otros. **From Layer** se almacena como `-1` y **Default** como `-3`, de acuerdo con la especificación DXF. Los archivos se conservan sin pérdida en cualquier aplicación compatible con DXF.
