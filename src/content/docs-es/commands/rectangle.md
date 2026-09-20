---
title: Comando Rectangle — Dibujar Rectángulos con Ejes Alineados
description: El comando Rectangle crea un rectángulo con ejes alineados a partir de dos esquinas opuestas. El resultado es una LWPOLYLINE cerrada con cuatro vértices — idéntica a cualquier otra polilínea una vez colocada, por lo que todos los comandos de edición de polilíneas se aplican a ella.
keywords: [comando rectangle CAD, dibujar rectángulo CAD, rectángulo alineado a ejes, polilínea cerrada CAD, LWPOLYLINE DXF, edición de agarres de rectángulo, kulmanlab]
group: shapes
order: 3
---

# Rectangle

El comando `Rectángulo` dibuja un rectángulo con ejes alineados definido por dos clics en esquinas opuestas. El resultado se almacena como una **`LWPOLYLINE` cerrada** con cuatro vértices — uno en cada esquina. No existe un tipo de entidad rectángulo dedicado: tras su creación, la forma se comporta exactamente como cualquier otra [Polyline](../polyline/) y todos los comandos de edición de polilíneas se aplican a ella.

## Dibujar un rectángulo

1. Escribe `Rectángulo` en el terminal o haz clic en el botón de la barra de herramientas **Rectangle**.
2. **Haz clic en la primera esquina**, o escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
3. **Haz clic en la esquina opuesta** — el rectángulo se coloca instantáneamente y el comando termina. La entrada de coordenadas también funciona aquí. O presiona `D` en su lugar para escribir un ancho y alto exactos — consulta [Entrada de dimensiones](#entrada-de-dimensiones) más abajo.

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

## Entrada de dimensiones

En lugar de hacer clic en una segunda esquina, presiona `D` justo después de la primera esquina para cambiar a la entrada escrita de ancho × alto:

1. **Escribe el ancho** y presiona **Enter**.
2. **Escribe el alto** y presiona **Enter** — el indicador ahora te pide elegir una dirección para el rectángulo.
3. **Mueve el cursor** alrededor de la primera esquina — el rectángulo se previsualiza en vivo en el cuadrante (arriba-izquierda, arriba-derecha, abajo-izquierda, abajo-derecha) sobre el que se encuentra el cursor.
4. **Haz clic** para colocarlo en esa dirección.

Presiona `D` de nuevo en el paso de elegir dirección para volver a escribir el ancho y el alto, precargados con lo que acabas de escribir.

El ancho y el alto se recuerdan del último rectángulo que dimensionaste: en cualquiera de los dos indicadores, el valor anterior aparece precargado y listo para confirmarse con **Enter**, o simplemente puedes empezar a escribir para reemplazarlo con un nuevo número.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X, o (en modo Entrada de dimensiones) el campo de ancho/alto |
| `,` | Fijar X y pasar a entrada Y |
| `D` | Después de la primera esquina, cambiar a Entrada de dimensiones; en el paso de dirección, volver a escribir ancho/alto |
| `Enter` | Confirmar la coordenada, ancho o alto escrito |
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
