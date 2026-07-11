---
title: Comando polyline — Dibujar trayectorias de múltiples segmentos como una sola entidad en KulmanLab CAD
description: El comando polyline dibuja cualquier número de segmentos conectados almacenados como una sola entidad LWPOLYLINE. Los agarres de vértice y de punto medio de segmento permiten reformar cualquier parte de la trayectoria después de su creación. Admite offset; no admite trim ni extend.
keywords: [comando polyline CAD, dibujar polilínea CAD, trayectoria multisegmento CAD, DXF LWPOLYLINE, reformar polilínea, agarre de vértice CAD, desplazar polilínea, kulmanlab]
group: shapes
order: 2
---

# Polyline

El comando `polyline` dibuja una trayectoria conectada de cualquier número de segmentos rectos, todos almacenados como una sola entidad `LWPOLYLINE`. Dado que toda la trayectoria es un objeto, seleccionarla selecciona todos los segmentos a la vez — mueve, rota o escala toda la forma en una sola operación. Esta es la distinción clave frente a las [Lines](../line/) encadenadas, donde cada segmento es una entidad independiente.

Las polilíneas también pueden ser **cerradas**: el comando [Rectangle](../rectangle/) usa la misma entidad `LWPOLYLINE` con el indicador de cierre establecido.

## Dibujar una polilínea

1. Escribe `polyline` en el terminal o haz clic en el botón **Polyline** de la barra de herramientas.
2. **Haz clic en el primer punto**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en cada punto siguiente** — cada clic añade un segmento. La entrada de coordenadas funciona en cada paso.
4. Presiona **Enter** o **Space** para terminar (requiere al menos 2 puntos colocados).

```
  ●──────●
  1.º    2.º
          \
           \  segmento 3 (en progreso — cursor aquí)
            ●  ← clic para añadir, Enter/Space para terminar
```

Presionar **Escape** en cualquier momento descarta todos los puntos colocados y sale del comando.

## Entrada de coordenadas

En lugar de hacer clic, escribe una posición exacta para cualquier vértice:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para colocar el vértice.

## Bloqueo de ángulo y longitud exacta de segmento

Se aplica la misma lógica de ajuste de 45° que el comando [Line](../line/#angle-locking-and-exact-length-input) entre dos puntos consecutivos. Cuando está bloqueado en un eje:

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.` | Añadir dígito a la longitud del segmento |
| `-` | Longitud negativa — invierte la dirección a lo largo del eje (solo primer carácter) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Colocar el siguiente punto a la distancia escrita |

La longitud acumulada actual aparece en el indicador del terminal en tiempo real. Hacer clic mientras está bloqueado proyecta sobre el eje para que el nuevo vértice quede exactamente sobre él.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.`, `-` | Iniciar la entrada de coordenada X, o longitud de segmento cuando el ángulo está bloqueado |
| `,` | Bloquear X y pasar a la entrada de Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar la coordenada o longitud escrita, o terminar la polilínea si no hay nada escrito y existen ≥ 2 puntos |
| `Space` | Terminar la polilínea (igual que Enter cuando no hay entrada en progreso) |
| `Escape` | Descartar todos los puntos y salir |

## Edición con agarres — vértices y puntos medios de segmentos

Una polilínea seleccionada muestra dos tipos de agarres:

| Agarre | Posición | Qué hace |
|------|----------|--------------|
| **Vértice** | En cada punto colocado | Arrastra para reposicionar ese vértice; todos los segmentos conectados se estiran para seguirlo |
| **Punto medio del segmento** | Centro de cada segmento | Arrastra para trasladar **ambos** puntos finales de ese segmento juntos, manteniendo la longitud y el ángulo del segmento intactos |

El agarre de punto medio del segmento es único de las polilíneas — permite deslizar un segmento individual lateralmente sin cambiar su longitud. En una [Line](../line/), el agarre de punto medio activa en cambio el comando Move para toda la entidad.

No hay un agarre de "mover toda la polilínea". Para mover toda la trayectoria usa el comando [Move](../move/).

## Seleccionar polilíneas

| Método | Comportamiento |
|--------|-----------|
| **Clic** | Selecciona la polilínea si el clic cae dentro de la distancia de prueba de impacto de cualquier segmento |
| **Arrastrar a la derecha** (estricto) | Todos los vértices deben caer dentro del cuadro |
| **Arrastrar a la izquierda** (cruzado) | Cualquier segmento que cruce el límite del cuadro selecciona toda la polilínea |

Dado que una polilínea es una sola entidad, una selección cruzada que toca cualquier segmento selecciona todos los segmentos.

## Comandos de edición admitidos

Las polilíneas admiten todas las transformaciones generales y offset, pero **no** trim ni extend (esos son solo para [Line](../line/)):

| Comando | Qué ocurre con la polilínea |
|---------|------------------------------|
| [Move](../move/) | Traslada todos los vértices por el mismo desplazamiento |
| [Copy](../copy/) | Crea una polilínea idéntica en una nueva posición |
| [Rotate](../rotate/) | Rota todos los vértices alrededor del punto base elegido |
| [Mirror](../mirror/) | Refleja todos los vértices a través del eje de espejo |
| [Scale](../scale/) | Escala todos los vértices uniformemente desde el punto base |
| [Offset](../offset/) | Crea una polilínea paralela a una distancia perpendicular fija |
| [Delete](../delete/) | Elimina la polilínea del dibujo |

## Propiedades

Cuando se selecciona una polilínea, el panel de propiedades muestra:

**General**

| Propiedad | Predeterminado | Significado |
|----------|---------|---------|
| Color | 256 (ByLayer) | Índice de color ACI |
| Layer | `0` | Asignación de capa |
| Linetype | ByLayer | Patrón de tipo de línea con nombre |
| Linetype Scale | 1 | Factor de escala en el patrón de tipo de línea |
| Thickness | 0 | Grosor de extrusión |

**Geometría**

| Propiedad | Significado |
|----------|---------|
| Closed | Si el último vértice se conecta de vuelta al primero |
| Vertex Count | Número total de vértices |
| Vertices | Lista de coordenadas de todos los vértices |

## Polyline vs Line — cuándo usar cada uno

| | Polyline | Line |
|---|---------|------|
| Cantidad de entidades | Un `LWPOLYLINE` para toda la trayectoria | Un `LINE` por segmento |
| Forma cerrada | Sí (indicador de cierre) | No |
| Trim / Extend | No | Sí — segmento por segmento |
| Agarre de punto medio del segmento | Traslada el segmento completo | Activa Move para la entidad |
| Mejor para | Perfiles, contornos, formas que mantienes completas | Líneas de construcción, geometría que recortarás |

## DXF — entidad LWPOLYLINE

Las polilíneas se guardan como entidades `LWPOLYLINE` en el archivo DXF. Todas las propiedades — coordenadas de vértices, indicador de cierre, color, capa, tipo de línea, escala de tipo de línea y grosor — hacen el viaje de ida y vuelta sin pérdida. Los rectángulos dibujados con el comando [Rectangle](../rectangle/) también se guardan como `LWPOLYLINE` (cerrado, cuatro vértices) y son indistinguibles a nivel DXF.

Las entidades `LWPOLYLINE` de cualquier aplicación compatible con DXF (LibreCAD, FreeCAD, etc.) se leen de vuelta como polilíneas totalmente editables en el editor.
