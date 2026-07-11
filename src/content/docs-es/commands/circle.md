---
title: Comando Circle — Dibujar Círculos por Centro y Radio en KulmanLab CAD
description: El comando Circle coloca un círculo haciendo clic en un punto central y luego haciendo clic o escribiendo el radio. Cuatro puntos de control cardinales permiten redimensionar el radio arrastrando sin volver a ejecutar el comando. Exportación completa a DXF como entidades CIRCLE.
keywords: [comando circle CAD, dibujar círculo CAD, entrada de radio de círculo, redimensionar círculo con punto de control, entidad CIRCLE DXF, dimradius círculo, kulmanlab]
group: shapes
order: 4
---

# Circle

El comando `circle` dibuja un círculo definido por un punto central y un radio. Después de hacer clic en el centro, puedes establecer el radio haciendo clic en un segundo punto en el lienzo o escribiendo un número exacto — ambas opciones están disponibles al mismo tiempo.

## Dibujar un círculo

1. Escribe `circle` en el terminal o haz clic en el botón **Circle** de la barra de herramientas.
2. **Haz clic en el punto central**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. Establece el radio — ya sea:
   - **Haz clic en cualquier punto** del lienzo — la distancia desde el centro se convierte en el radio, o
   - **Escribe el radio** y presiona **Enter** para un valor exacto.

El círculo se coloca inmediatamente y el comando termina.

```
  center ●
          \  vista previa de la línea de radio
           \
            ● ← haz clic aquí, o escribe un número
```

Mientras está en la fase de radio, la vista previa en vivo muestra el círculo a la distancia actual del cursor y también dibuja una línea de radio desde el centro hasta el punto actual.

## Entrada de coordenadas del centro

En lugar de hacer clic, puedes escribir la posición del centro:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para colocar el centro y avanzar a la entrada del radio.

## Entrada de radio escrito

Después de colocar el centro, escribir inmediatamente acumula un valor de radio:

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar dígito al valor del radio |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Colocar el círculo con el radio escrito |

El valor acumulado se muestra en el indicador del terminal (p. ej. `enter radius of circle: 25`). La vista previa se actualiza para mostrar el radio escrito mientras el cursor controla la dirección del marcador de la línea de radio.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X (fase de centro), o dígito de radio (fase de radio) |
| `,` | Bloquear X y pasar a la entrada Y (fase de centro) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita o radio |
| `Escape` | Cancelar y restablecer |

## Edición con puntos de control — redimensionar el radio

Un círculo seleccionado expone cinco puntos de control:

| Punto de control | Posición | Qué hace |
|------------------|----------|----------|
| **Centro** | Punto central | Mueve todo el círculo; el radio no cambia |
| **Izquierda** | Punto más a la izquierda (centro − radio) | Arrastra para establecer un nuevo radio = distancia al centro |
| **Derecha** | Punto más a la derecha (centro + radio) | Arrastra para establecer un nuevo radio = distancia al centro |
| **Arriba** | Punto más alto | Arrastra para establecer un nuevo radio = distancia al centro |
| **Abajo** | Punto más bajo | Arrastra para establecer un nuevo radio = distancia al centro |

Los cuatro puntos de control cardinales se comportan de manera idéntica — el nuevo radio es igual a la distancia desde el centro hasta la posición de arrastre. El centro permanece fijo.

## Seleccionar círculos

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Selecciona si el clic cae cerca de la circunferencia |
| **Arrastra a la derecha** (estricto) | El cuadrado delimitador completo (centro ± radio) debe estar dentro del recuadro |
| **Arrastra a la izquierda** (cruzado) | Cualquier parte de la circunferencia que cruce o toque el límite del recuadro selecciona el círculo |

## Comandos de edición compatibles

| Comando | Qué le sucede al círculo |
|---------|--------------------------|
| [Move](../move/) | Traslada el centro; el radio no cambia |
| [Copy](../copy/) | Crea un círculo idéntico en un nuevo centro |
| [Rotate](../rotate/) | Rota el centro alrededor del punto base; el radio no cambia |
| [Mirror](../mirror/) | Refleja el centro respecto al eje de simetría; el radio no cambia |
| [Scale](../scale/) | Escala la posición del centro y multiplica el radio por el factor de escala |
| [Offset](../offset/) | Crea un círculo concéntrico con un radio mayor o menor |
| [Delete](../delete/) | Elimina el círculo |

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
| Centro X / Centro Y | Coordenadas del punto central |
| Radio | Radio del círculo en unidades de dibujo |

## Circle vs Arc — cuándo usar cada uno

| | Circle | Arc |
|---|--------|-----|
| Extensión | 360° completo | Parcial — definido por ángulo de inicio y fin |
| Cómo dibujar | Centro + radio | Tres puntos en la curva |
| Entrada escrita | Valor del radio | Ninguna — solo clic |
| Punto de control de redimensionado | 4 puntos cardinales | Puntos de inicio y fin (ángulo + radio) |
| Acotación | Radio: [Dim Radius](../dim-radius/) · Diámetro: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Mejor para | Agujeros completos, círculos de pernos, elementos redondos | Filetes, curvas parciales, caminos arqueados |

## DXF — entidad CIRCLE

Los círculos se guardan como entidades `CIRCLE` en el archivo DXF. Las coordenadas del centro, el radio, el color, la capa, el tipo de línea, la escala de tipo de línea y el grosor se exportan sin pérdida. Cualquier aplicación compatible con DXF los lee como círculos estándar.
