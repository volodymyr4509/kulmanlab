---
title: ChangePrintArea — Recortar la exportación del Print Manager a un rectángulo
description: El comando ChangePrintArea elige dos esquinas opuestas en el lienzo para fijar la región que exporta el Administrador de Impresión. Admite coordenadas X,Y escritas y ajuste, y recuerda el área por separado para el espacio Modelo y para cada presentación.
keywords: [área de impresión CAD, recortar exportación CAD, comando change print area, recorte print manager, región de exportación CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

El comando `CambiarÁreaImpresión` fija la región rectangular que exporta el [Administrador de Impresión](../print-manager/). Se ejecuta sobre el lienzo con el Administrador de Impresión oculto y toma dos esquinas opuestas — los mismos dos clics que [Rectangle](../rectangle/), así que las coordenadas escritas y el ajuste funcionan igual que allí.

## Seleccionar un área

1. Escribe `CambiarÁreaImpresión` en el terminal, o haz clic en **Change Area** en la barra lateral del Administrador de Impresión. El Administrador se oculta y el lienzo se vuelve interactivo.
2. **Haz clic en la primera esquina**, o escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
3. **Haz clic en la esquina opuesta**, o vuelve a escribir `X,Y`.

El Administrador de Impresión se reabre con la nueva área en la vista previa, que se redimensiona a su relación de aspecto exacta.

Las esquinas se ajustan a agarres e intersecciones como cualquier otro punto, así que puedes recortar a la geometría dibujada en vez de a ojo. El orden de las dos esquinas es indiferente: esquinas opuestas definen el mismo rectángulo.

Pulsa `Escape` para cancelar. No se escribe nada, así que el Administrador de Impresión se reabre con el área que ya tenía.

## Dónde se recuerda el área

La selección se guarda por contexto, no de forma global:

| Contexto | Ranura |
|---|---|
| Espacio modelo | Una ranura compartida |
| Cada presentación | Su propia ranura, guardada aparte |

Reabrir el Administrador de Impresión en la misma presentación — o en Modelo — restaura su último recorte en vez de reiniciarlo, y cambiar entre presentaciones deja intacta el área de cada una.

Esto se guarda solo en memoria. Recargar la página borra todas las áreas guardadas y el Administrador de Impresión vuelve a los valores por defecto de abajo.

## Área por defecto

Sin nada guardado para el contexto actual, el Administrador de Impresión abre en:

| Contexto | Por defecto |
|---|---|
| Espacio modelo | El cuadro delimitador de todas las entidades — la misma extensión a la que hace zoom [Fit](../fit/) |
| Cada presentación | La hoja completa |

## Comandos relacionados

| Comando | Qué hace |
|---|---|
| [Print Manager](../print-manager/) | La ventana de exportación a la que se aplica esta área |
| [Rectangle](../rectangle/) | El mismo clic de dos esquinas, pero dibuja una polilínea |
| [Fit](../fit/) | Hace zoom a la extensión que el espacio Modelo usa por defecto |
