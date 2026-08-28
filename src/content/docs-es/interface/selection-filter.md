---
title: Filtro de selección — Acotar una selección múltiple por propiedad
description: Cuando hay muchas entidades seleccionadas, un icono de filtro en la cabecera del panel de propiedades abre una ventana con listas de verificación en vivo para Tipo, Capa, Color, Grosor de línea y Tipo de línea, construidas a partir de lo que realmente hay en la selección, de modo que una selección grande y mixta pueda acotarse antes de editarla en bloque.
keywords: [filtro de selección, filtrar selección CAD, filtro por facetas, acotar selección, edición en bloque CAD, filtro del panel de propiedades, kulmanlab]
group: interface
order: 7
---

# Filtro de selección

Seleccionar muchas entidades a la vez abre el panel de propiedades en su vista de selección múltiple («Selection (N)»). Un **icono de filtro** junto al botón de cerrar permite acotar esa selección por propiedad antes de editarla en bloque.

## Abrir el filtro

1. Seleccione varias entidades — arrastre un cuadro de selección, haga clic con Mayús o pulse Ctrl+A.
2. Haga clic en el **icono de filtro** (embudo) de la cabecera del panel de propiedades.
3. Debajo del botón se abre una ventana con una lista de verificación por cada propiedad que realmente varía dentro de la selección.

## Facetas

La ventana puede mostrar hasta cinco facetas, cada una construida en vivo a partir de la selección actual:

| Faceta | Valores mostrados |
|--------|-------------------|
| **Tipo** | Nombre del tipo de entidad (Line, Circle, Hatch, …) |
| **Capa** | Nombre de la capa, con una muestra de color que coincide con ella |
| **Color** | Índice de color ACI |
| **Grosor de línea** | Valor del grosor de línea |
| **Tipo de línea** | Nombre del tipo de línea |

Una faceta solo aparece si la selección contiene realmente más de un valor distinto para ella — seleccionar diez líneas todas en la misma capa no mostrará la faceta Capa, porque marcarla no acotaría nada. Las entidades que no llevan una propiedad dada (Hatch y Text, por ejemplo, no tienen grosor ni tipo de línea) simplemente no cuentan para esa faceta — y tampoco quedan nunca excluidas por ella.

## Acotar la selección

Marque uno o más valores en cualquier faceta para acotar la selección a las entidades que cumplan **todas** las facetas marcadas (una entidad debe coincidir con al menos un valor marcado en *cada* faceta que haya tocado, no solo en una). Las casillas y los recuentos de cada faceta reflejan lo que las *otras* facetas marcadas ya han acotado, de modo que una faceta nunca oculta sus propias opciones ya marcadas — el comportamiento habitual de la búsqueda por facetas.

El recuento de resultados se actualiza en vivo mientras marca y desmarca casillas, y la selección del lienzo se acota con él: esto no es un simple filtro visual, las entidades que dejan de coincidir se deseleccionan de verdad, listas para que edite en bloque exactamente el subconjunto que ha filtrado.

## Limpiar los filtros

Use el control de reinicio de la ventana para desmarcar todas las casillas y volver a la selección original completa, o cierre la ventana (se reabrirá con un punto de partida nuevo la próxima vez que pulse el icono de filtro sobre una selección distinta).

## Relacionado

- [Match Properties](../../commands/match-properties/) — copiar propiedades de una entidad a otras, una vez acotado cuáles son
- [LayerIsolate](../../commands/layer-isolate/) — una alternativa a nivel de capa cuando quiera aislar solo por capa, con independencia de lo que esté seleccionado
