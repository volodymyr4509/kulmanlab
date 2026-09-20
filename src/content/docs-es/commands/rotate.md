---
title: Comando Rotate — Rotar Entidades Alrededor de un Punto Base
description: El comando Rotate rota las entidades seleccionadas alrededor de un punto base elegido. El ángulo puede introducirse con precisión mediante teclado o establecerse haciendo clic — la dirección del cursor desde el punto base hasta el clic determina el ángulo. Los ángulos positivos son en sentido antihorario en coordenadas DXF.
keywords: [comando rotate CAD, rotar entidades CAD, rotar objetos ángulo, rotación antihoraria CAD, ángulo escrito rotate, kulmanlab]
group: edit
order: 3
---

# Rotate

El comando `Girar` rota las entidades seleccionadas alrededor de un punto base. El ángulo de rotación se especifica escribiendo un número en grados o haciendo clic — el ángulo se calcula a partir de la dirección entre el punto base y la posición del clic.

## Dos formas de empezar

**Preseleccionar y luego rotar** — selecciona las entidades primero y luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `Girar` en el terminal o haz clic en el botón de la barra de herramientas **Rotate**.
3. **Haz clic en el punto base** — el centro de rotación. O escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
4. **Escribe un ángulo y pulsa Enter**, o **haz clic** para establecer el ángulo desde la dirección del cursor.

**Activar y luego seleccionar** — inicia el comando sin nada seleccionado:

1. Escribe `Girar` o haz clic en el botón de la barra de herramientas.
2. **Selecciona objetos** — haz clic para alternar, o arrastra para seleccionar por área.
3. Pulsa **Enter** o **Space** para confirmar la selección.
4. **Haz clic en el punto base** (entrada de coordenadas disponible) y luego establece el ángulo.

```
  Antes:              Después (rotación de 90° alrededor de ●):
                          ╔══╗
  ●  [entidad]  →   ● ║    ║
                          ╚══╝
```

Una vista previa fantasma en vivo de las entidades rotadas sigue el ángulo del cursor después de establecer el punto base.

## Establecer el ángulo

**Ángulo escrito** — escribe un número (en grados) en cualquier momento después de colocar el punto base. La vista previa se ajusta al ángulo escrito mientras continúas ajustando antes de pulsar Enter.

**Ángulo por clic** — si no hay ningún valor escrito, al hacer clic se establece el ángulo igual a `atan2(cursorY − baseY, cursorX − baseX)` — la dirección del punto base al clic, en grados.

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Añadir dígito al valor del ángulo |
| `-` | Ángulo negativo (solo como primer carácter) |
| `C` | Alternar el modo Copy (antes de escribir cualquier dígito) |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Aplicar la rotación al ángulo escrito |

## Rotar una copia

Presiona **C** en la solicitud de ángulo — antes de escribir cualquier dígito — para alternar el modo **Copy**, el mismo patrón de opción en línea que usa la opción `Arc` de [Polyline](../polyline/). La solicitud muestra el estado actual como `[Copy=true]` / `[Copy=false]`, y presionar **C** de nuevo lo revierte.

Con Copy activado, aplicar la rotación deja la selección original intacta en su lugar y en su lugar añade nuevas copias rotadas de cada entidad seleccionada. Con Copy desactivado (predeterminado), la selección rota en su lugar como de costumbre.

## Dirección del ángulo

Los ángulos siguen la **convención DXF**:

- Los valores **positivos** rotan en sentido **antihorario** en coordenadas de dibujo (Y hacia arriba).
- En pantalla, donde el eje Y está invertido (Y hacia abajo), los ángulos positivos aparecen en sentido **horario**.

Valores habituales: `90` = un cuarto de vuelta, `180` = media vuelta, `-90` = el cuarto de vuelta opuesto.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Space` | Confirmar selección |
| `0`–`9`, `.`, `-` | Comenzar entrada de coordenada X (fase de punto base), o valor de ángulo (fase de ángulo) |
| `,` | Fijar X y pasar a entrada Y (fase de punto base) |
| `C` | Alternar el modo Copy (fase de ángulo, antes de escribir cualquier dígito) |
| `Backspace` | Borrar el último carácter escrito |
| `Enter` | Confirmar coordenada o aplicar rotación |
| `Escape` | Cancelar y reiniciar |

## Selección durante el comando

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Alterna la entidad bajo el cursor |
| **Arrastrar a la derecha** (estricto) | Añade entidades completamente dentro del cuadro |
| **Arrastrar a la izquierda** (cruzado) | Añade entidades que se intersectan con el cuadro |
| **Enter** / **Space** | Confirma la selección |

## Entidades compatibles

Rotate funciona en todos los tipos de entidades. La geometría de cada entidad se rota alrededor del punto base — por ejemplo, un Circle mueve su centro mientras el radio permanece igual; un Arc mueve su centro y desplaza sus ángulos de inicio y fin la cantidad de rotación; una entidad Text mueve su punto de anclaje y suma el ángulo a su propiedad Rotation Degree.
