---
sidebar_position: 1
title: Comando line — Dibujar, encadenar, recortar y extender líneas en KulmanLab CAD
description: El comando line dibuja segmentos de línea recta individuales que se pueden encadenar de extremo a extremo. Las líneas son el único tipo de entidad en el que funcionan Trim y Extend. Ida y vuelta completa en DXF como entidades LINE.
keywords: [comando line CAD, dibujar línea recta CAD, encadenar segmentos de línea, recortar línea CAD, extender línea CAD, bloqueo de ángulo CAD, entidad DXF LINE, kulmanlab]
---

# Line

El comando `line` dibuja segmentos de línea recta individuales almacenados como entidades `LINE` separadas en el modelo DXF. Después de cada segmento el comando permanece activo y reutiliza el punto final como nuevo punto de inicio, para que puedas construir trayectorias conectadas un segmento a la vez. A diferencia de una [Polyline](../polyline/), las líneas encadenadas permanecen como entidades independientes — cada una puede recortarse, extenderse o eliminarse sin afectar a sus vecinas.

## Dibujar líneas

1. Escribe `line` en el terminal o haz clic en el botón **Line** de la barra de herramientas.
2. **Haz clic en el punto de inicio**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el punto final** — el segmento se coloca y el punto final se convierte en el nuevo punto de inicio. La entrada de coordenadas también funciona aquí.
4. Sigue haciendo clic (o escribiendo) para encadenar más segmentos.
5. Presiona **Enter** o **Escape** para detener.

```
  ●──────────●──────────●──────────●
 inicio    2.º clic   3.er clic   Enter para terminar
            (se convierte automáticamente en el siguiente inicio)
```

¿Solo necesitas un único segmento? Presiona **Enter** o **Escape** justo después del paso 3.

## Entrada de coordenadas

En lugar de hacer clic, escribe una posición exacta para el inicio o cualquier punto posterior:

1. Escribe el valor X (dígitos, `.` o `-`).
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para colocar el punto.

## Bloqueo de ángulo y entrada de longitud exacta

Al mover el cursor después de colocar un punto, el comando busca un eje de ajuste de 45° (0°, 45°, 90°, 135°, …). El ángulo se **bloquea** cuando:

- el cursor está al menos **5 × tamaño de agarre** del ancla, **y**
- está dentro de **1 tamaño de agarre** de distancia perpendicular del eje más cercano.

Cuando está bloqueado, la vista previa se ajusta al eje y puedes introducir una longitud exacta:

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.` | Añadir dígito al valor de longitud |
| `-` | Longitud negativa — invierte la dirección a lo largo del eje (solo primer carácter) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Colocar el punto final a la distancia escrita |

El valor acumulado se muestra en tiempo real en el terminal (p. ej. `click end point or enter length: 12.5`). Hacer clic mientras está bloqueado proyecta el clic sobre el eje, por lo que el punto final siempre queda exactamente sobre él.

Volver cerca del punto de ancla desactiva el bloqueo.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.`, `-` | Iniciar la entrada de coordenada X, o distancia cuando el ángulo está bloqueado |
| `,` | Bloquear X y pasar a la entrada de Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar la coordenada o longitud escrita, o terminar la cadena si no hay nada escrito |
| `Escape` | Terminar la cadena y salir |

## Edición con agarres — estirar puntos finales

Una línea seleccionada muestra tres agarres:

| Agarre | Ubicación | Qué hace |
|------|-------|--------------|
| **Inicio** | Primer punto final | Arrastra para reposicionar — el final permanece fijo |
| **Punto medio** | Centro de la línea | Activa **Move** para toda la línea |
| **Final** | Segundo punto final | Arrastra para reposicionar — el inicio permanece fijo |

Estirar un punto final nunca afecta al otro. Esto difiere de la edición con agarres de [Polyline](../polyline/), donde mover un vértice reformula toda la trayectoria.

## Seleccionar líneas

| Método | Comportamiento |
|--------|-----------|
| **Clic** | Selecciona la línea si el clic está dentro de la distancia de prueba de impacto del segmento |
| **Arrastrar a la derecha** (estricto) | La línea se selecciona solo si ambos puntos finales caen dentro del cuadro |
| **Arrastrar a la izquierda** (cruzado) | La línea se selecciona si cualquier parte del segmento cruza el límite del cuadro |

## Comandos de edición admitidos

Las líneas son la **única** entidad en la que operan [Trim](../trim/) y [Extend](../extend/). También se aplican todos los comandos de transformación estándar:

| Comando | Qué ocurre con una línea |
|---------|------------------------|
| [Move](../move/) | Traslada ambos puntos finales por el mismo desplazamiento |
| [Copy](../copy/) | Crea una línea idéntica en una nueva posición |
| [Rotate](../rotate/) | Rota ambos puntos finales alrededor del punto base elegido |
| [Mirror](../mirror/) | Refleja ambos puntos finales a través del eje de espejo |
| [Scale](../scale/) | Escala ambos puntos finales uniformemente desde el punto base |
| [Offset](../offset/) | Crea una línea paralela a una distancia perpendicular fija |
| [Trim](../trim/) | Corta la línea en las intersecciones — **solo líneas** |
| [Extend](../extend/) | Estira el punto final más cercano hasta alcanzar un límite — **solo líneas** |
| [Delete](../delete/) | Elimina la línea del dibujo |

## Propiedades

Cuando se selecciona una línea, el panel de propiedades muestra todos los campos que lleva el registro `LINE` de DXF:

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
| Start X / Start Y | Coordenadas del primer punto final |
| End X / End Y | Coordenadas del segundo punto final |

Todos los campos son editables directamente en el panel sin volver a ejecutar el comando.

## Line vs Polyline — cuándo usar cada uno

| | Line | Polyline |
|---|------|---------|
| Cantidad de entidades | Un `LINE` por segmento | Un `LWPOLYLINE` para toda la trayectoria |
| Trim / Extend | Sí — segmento por segmento | No |
| Forma cerrada | No | Sí (indicador de cierre) |
| Edición con agarres | Estirar puntos finales individuales | Mover cualquier vértice a lo largo de la trayectoria |
| Mejor para | Líneas de construcción, segmentos individuales, geometría que recortarás | Contornos, perfiles, formas que mantienes completas |

## DXF — entidad LINE

Las líneas se guardan como entidades `LINE` en el archivo DXF. Cada propiedad — coordenadas de inicio/fin, color, capa, tipo de línea, escala de tipo de línea y grosor — hace el viaje de ida y vuelta sin pérdida. Cuando abres un DXF que contiene entidades `LINE`, se convierten en objetos `Line` totalmente editables en el editor.

Las líneas dibujadas en el editor también se escriben como entidades `LINE` al guardar, por lo que son legibles por LibreCAD, FreeCAD y cualquier otra aplicación compatible con DXF.
