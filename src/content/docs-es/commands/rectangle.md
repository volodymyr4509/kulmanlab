---
sidebar_position: 3
title: Comando Rectangle — Dibujar Rectángulos con Ejes Alineados en KulmanLab CAD
description: El comando Rectangle crea un rectángulo con ejes alineados a partir de dos esquinas opuestas. El resultado es una LWPOLYLINE cerrada con cuatro vértices — idéntica a cualquier otra polilínea una vez colocada, por lo que todos los comandos de edición de polilíneas se aplican a ella.
keywords: [comando rectangle CAD, dibujar rectángulo CAD, rectángulo alineado a ejes, polilínea cerrada CAD, LWPOLYLINE DXF, edición de agarres de rectángulo, kulmanlab]
---

# Rectangle

El comando `rectangle` dibuja un rectángulo con ejes alineados definido por dos clics en esquinas opuestas. El resultado se almacena como una **`LWPOLYLINE` cerrada** con cuatro vértices — uno en cada esquina. No existe un tipo de entidad rectángulo dedicado: tras su creación, la forma se comporta exactamente como cualquier otra [Polyline](../polyline/) y todos los comandos de edición de polilíneas se aplican a ella.

## Dibujar un rectángulo

1. Escribe `rectangle` en el terminal o haz clic en el botón de la barra de herramientas **Rectangle**.
2. **Haz clic en la primera esquina**, o escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
3. **Haz clic en la esquina opuesta** — el rectángulo se coloca instantáneamente y el comando termina. La entrada de coordenadas también funciona aquí.

```
  ● (primer clic)─────────────┐
  |                            |
  |   vista previa en vivo     |
  |   sigue el cursor tras     |
  |   el paso 2                |
  └────────────────────────────● (segundo clic)
```

Los dos clics pueden ser cualquier par de esquinas diagonalmente opuestas — superior izquierda + inferior derecha, o inferior izquierda + superior derecha, etc. El orden no importa.

## Entrada de coordenadas

En cualquier paso de esquina puedes escribir una posición exacta:

1. Escribe el valor X.
2. Pulsa `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Pulsa **Enter** para colocar la esquina.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X |
| `,` | Fijar X y pasar a entrada Y |
| `Enter` | Confirmar coordenada escrita |
| `Escape` | Cancelar |

Los lados son siempre horizontales y verticales — no hay bloqueo de ángulo para el comando rectangle.

## Edición de agarres — reformar tras la creación

Un rectángulo seleccionado muestra agarres en cada vértice y en el punto medio de cada lado:

| Agarre | Posición | Qué hace |
|--------|----------|----------|
| **Esquina** | Cada uno de los 4 vértices | Arrastrar para mover ese vértice; los dos lados adyacentes se estiran para seguirlo — la esquina opuesta permanece fija |
| **Punto medio del lado** | Centro de cada uno de los 4 lados | Arrastrar para trasladar ambos extremos de ese lado juntos, manteniendo la longitud y el ángulo del lado |

Arrastrar un agarre de esquina convierte el rectángulo en un cuadrilátero no rectangular. Si solo necesitas un rectángulo de tamaño diferente, arrastra una esquina manteniendo los lados aproximadamente ortogonales, o elimínalo y dibuja uno nuevo.

## Seleccionar rectángulos

Dado que el rectángulo es una polilínea, la selección funciona de la misma manera:

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Selecciona si el clic cae sobre cualquiera de los cuatro lados |
| **Arrastrar a la derecha** (estricto) | Los cuatro vértices deben estar dentro del cuadro de selección |
| **Arrastrar a la izquierda** (cruzado) | Cualquier lado que cruce el límite del cuadro selecciona el rectángulo entero |

## Comandos de edición compatibles

Se aplican todos los comandos de edición de polilíneas. Trim y Extend son exclusivos de [Line](../line/) y no funcionan en rectángulos:

| Comando | Qué ocurre con el rectángulo |
|---------|------------------------------|
| [Move](../move/) | Traslada los cuatro vértices con el mismo desplazamiento |
| [Copy](../copy/) | Crea un rectángulo idéntico en una nueva posición |
| [Rotate](../rotate/) | Rota los cuatro vértices alrededor del punto base elegido |
| [Mirror](../mirror/) | Refleja los cuatro vértices respecto al eje de simetría |
| [Scale](../scale/) | Escala los cuatro vértices uniformemente desde el punto base |
| [Offset](../offset/) | Crea un rectángulo paralelo (interior o exterior) a una distancia fija |
| [Delete](../delete/) | Elimina el rectángulo del dibujo |

## Propiedades

Cuando un rectángulo está seleccionado, el panel de propiedades muestra los mismos campos que cualquier polilínea:

**General**

| Propiedad | Valor predeterminado | Significado |
|-----------|---------------------|-------------|
| Color | 256 (ByLayer) | Índice de color ACI |
| Capa | `0` | Asignación de capa |
| Linetype | ByLayer | Patrón de tipo de línea con nombre |
| Linetype Scale | 1 | Factor de escala del patrón de tipo de línea |
| Thickness | 0 | Grosor de extrusión |

**Geometría**

| Propiedad | Significado |
|-----------|-------------|
| Closed | Siempre `true` para un rectángulo |
| Vertex Count | Siempre `4` para un rectángulo sin modificar |
| Vertices | Coordenadas de las cuatro esquinas |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Cómo dibujar | 2 clics (esquinas) | Clic en cada vértice | Clic en cada extremo |
| Tipo de entidad | `LWPOLYLINE` cerrada | `LWPOLYLINE` abierta o cerrada | `LINE` por segmento |
| Lados siempre ortogonales | Sí (en la creación) | No | No |
| Trim / Extend | No | No | Sí |
| Ideal para | Cajas, marcos, áreas rectangulares | Contornos y trayectorias arbitrarias | Segmentos individuales, líneas de construcción |

## DXF — entidad LWPOLYLINE

Los rectángulos se guardan como entidades `LWPOLYLINE` cerradas con cuatro vértices. Todas las propiedades — coordenadas de vértices, color, capa, tipo de línea, escala de tipo de línea y grosor — se conservan sin pérdida.

No existe un tipo `RECTANGLE` dedicado en DXF. Cuando se vuelve a abrir un archivo, la forma aparece como una polilínea cerrada de cuatro vértices en lugar de un rectángulo. Cualquier visor o editor DXF que admita `LWPOLYLINE` (LibreCAD, FreeCAD, etc.) la mostrará correctamente.
