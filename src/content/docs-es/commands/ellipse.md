---
title: Comando Ellipse — Dibujar Elipses Rotadas por Centro y Dos Ejes en KulmanLab CAD
description: El comando Ellipse dibuja una elipse en tres clics — centro, extremo del primer eje (en cualquier dirección) y luego la longitud del segundo eje. Los dos ejes siempre son perpendiculares. Cada semieje tiene su propio punto de control para redimensionado independiente después de la colocación. Exportación completa a DXF como entidades ELLIPSE.
keywords: [comando ellipse CAD, dibujar elipse CAD, elipse rotada CAD, ejes de elipse, entidad ELLIPSE DXF, edición con puntos de control de elipse, relación de ejes, kulmanlab]
group: shapes
order: 6
---

# Ellipse

El comando `ellipse` dibuja una elipse usando tres clics: un punto central, el extremo del primer semieje (mayor) en cualquier ángulo, y la longitud del segundo semieje (menor). Los dos ejes son siempre perpendiculares entre sí — la dirección del segundo eje se deriva automáticamente del primero.

## Dibujar una elipse

1. Escribe `ellipse` en el terminal o haz clic en el botón **Ellipse** de la barra de herramientas.
2. **Haz clic en el punto central**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el extremo del primer eje** — establece tanto la dirección como la longitud del primer semieje. La entrada de coordenadas también funciona aquí.
4. **Establece la longitud del segundo eje** — mueve el cursor perpendicular al primer eje, luego haz clic o escribe una longitud.

```
               ● ← extremo del primer eje (paso 3)
              /
  center ●  /  ← primer eje (cualquier ángulo)
            |
            ● ← el cursor aquí establece la longitud del segundo eje (paso 4)
```

La elipse se coloca después del paso 4 y el comando termina.

## Entrada de eje — clic, coordenada o longitud escrita

**Centro (paso 2):** haz clic o escribe `X,Y` para una posición exacta.

**Extremo del primer eje (paso 3):** haz clic, o escribe `X,Y` para una coordenada exacta. El bloqueo de ángulo también se ajusta a incrementos de 45° — mientras está bloqueado, escribe una longitud y presiona **Enter** para colocar el extremo a esa distancia exacta.

**Segundo eje (paso 4):** la longitud escrita siempre está disponible — no se requiere bloqueo de ángulo. La dirección ya está fijada perpendicular al primer eje; escribir solo establece la longitud.

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar dígito a la longitud del eje (fase del segundo eje) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Colocar el extremo del eje a la longitud escrita |

## Entrada de coordenadas (centro y extremo del primer eje)

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para confirmar.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X (fases de centro/primer eje), o longitud del eje cuando el ángulo está bloqueado |
| `,` | Bloquear X y pasar a la entrada Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita o longitud |
| `Escape` | Cancelar y restablecer |

## Edición con puntos de control — redimensionado independiente de ejes

Una elipse seleccionada expone cinco puntos de control:

| Punto de control | Cantidad | Qué hace |
|------------------|----------|----------|
| **Centro** | 1 | Mueve toda la elipse; ambos ejes sin cambios |
| **Extremos del eje mayor** | 2 (extremos opuestos del eje más largo) | Arrastra para redimensionar la longitud del semieje mayor; el tamaño absoluto del eje menor permanece constante |
| **Extremos del eje menor** | 2 (extremos opuestos del eje más corto) | Arrastra para redimensionar la longitud del semieje menor; el eje mayor sin cambios |

Los puntos de control de los ejes mayor y menor son independientes — puedes cambiar la forma de la elipse sin volver a ejecutar el comando.

## Seleccionar elipses

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Selecciona si el clic cae cerca del contorno de la elipse |
| **Arrastra a la derecha** (estricto) | El cuadro delimitador alineado con los ejes de la elipse debe caber completamente dentro del recuadro de selección |
| **Arrastra a la izquierda** (cruzado) | Cualquier parte del contorno de la elipse que cruce el límite del recuadro de selección la selecciona |

## Comandos de edición compatibles

| Comando | Qué le sucede a la elipse |
|---------|---------------------------|
| [Move](../move/) | Traslada el centro; ambos ejes sin cambios |
| [Copy](../copy/) | Crea una elipse idéntica en un nuevo centro |
| [Rotate](../rotate/) | Rota la posición del centro y el vector del eje mayor por el mismo ángulo |
| [Mirror](../mirror/) | Refleja el centro y recalcula la dirección del eje mayor respecto al eje de simetría |
| [Scale](../scale/) | Escala la posición del centro y multiplica ambas longitudes de semiejes por el factor |
| [Offset](../offset/) | Crea una elipse concéntrica desplazada hacia afuera o hacia adentro a una distancia fija |
| [Delete](../delete/) | Elimina la elipse |

## Propiedades

**General**

| Propiedad | Predeterminado | Significado |
|-----------|----------------|-------------|
| Color | 256 (ByLayer) | Índice de color ACI |
| Capa | `0` | Asignación de capa |
| Tipo de línea | ByLayer | Patrón de tipo de línea con nombre |
| Escala de tipo de línea | 1 | Factor de escala del patrón de tipo de línea |
| Grosor | 0 | Grosor de extrusión |

**Geometría**

| Propiedad | Significado |
|-----------|-------------|
| Centro X / Centro Y | Centro de la elipse |
| Eje Mayor X / Eje Mayor Y | Vector desde el centro hasta el extremo del eje mayor (codifica tanto la dirección como la longitud) |
| Relación de ejes | Relación del semieje menor al semieje mayor (0 < relación ≤ 1) |
| Ángulo de inicio / Ángulo de fin | Ángulos paramétricos en grados; ambos son 0°/360° para una elipse completa |

## Ellipse vs Circle — cuándo usar cada uno

| | Ellipse | Circle |
|---|---------|--------|
| Ejes | Dos semiejes independientes a cualquier ángulo | Un radio, simétrico |
| Rotación | Puede colocarse a cualquier ángulo | Sin rotación |
| Entrada escrita | Longitud por eje | Solo radio |
| Punto de control de redimensionado | Mayor y menor independientemente | Los cuatro puntos cardinales por igual |
| Mejor para | Vistas oblicuas, elementos ovalados, agujeros en perspectiva | Elementos redondos simétricos |

## DXF — entidad ELLIPSE

Las elipses se guardan como entidades `ELLIPSE` en el archivo DXF. El formato almacena el punto central, el vector completo del eje mayor (dirección + longitud) y la relación de ejes. La rotación, la forma y todas las propiedades de estilo se exportan sin pérdida. Un círculo **no** se almacena como una elipse degenerada — los dos tipos de entidades permanecen distintos en el modelo DXF.
