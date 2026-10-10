---
title: Arc — Dibujar Arcos de Tres Puntos por Circunferencia
description: El comando Arc dibuja un arco circular a través de exactamente tres puntos seleccionados usando geometría de circunferencia. Los puntos de control de inicio y fin permiten arrastrar los extremos del arco a un nuevo ángulo y radio después de colocarlo. Exportación completa a DXF como entidades ARC.
keywords: [comando arc CAD, arco de tres puntos CAD, arco circunferencia, dibujar arco CAD, entidad ARC DXF, edición con puntos de control de arco, kulmanlab]
group: shapes
order: 5
---

# Arc

El comando `Arco` dibuja un arco circular a través de tres puntos que seleccionas. El arco se calcula como la única circunferencia que pasa por los tres puntos — no es necesario especificar un centro o radio directamente. El arco va desde el primer clic hasta el tercer clic, pasando por el segundo.

## Dibujar un arco

1. Escribe `Arco` en el terminal o haz clic en el botón **Arc** de la barra de herramientas.
2. **Haz clic en el primer punto** — un extremo del arco. O escribe `X,Y` y presiona **Enter** para una coordenada exacta.
3. **Haz clic en el segundo punto** — un punto por el que debe pasar el arco (controla la curvatura y la dirección). La entrada de coordenadas también funciona aquí.
4. **Haz clic en el tercer punto** — el otro extremo del arco. El arco se coloca y el comando termina. La entrada de coordenadas también funciona aquí.

```
           ● (2° clic — punto medio en la curva)
          / \
         /   \
        ●     ●
     1°       3°
```

Una vista previa de línea conecta los dos primeros clics mientras posicionas el tercero. A partir del segundo clic, una vista previa de arco en vivo sigue el cursor.

> **Puntos colineales**: si los tres puntos están en una línea recta, el arco no puede calcularse y no se coloca ninguna entidad. Mueve el segundo punto fuera de la línea e inténtalo de nuevo.

## Otras formas de dibujar un arco

Tres puntos es el método predeterminado. En algunas solicitudes el terminal muestra opciones entre corchetes, como `[Center=false]` — escribe la letra de la opción para activarla (`[Center=true]`) y otra vez para desactivarla. Combinadas, dibujan el arco de seis formas más:

| Método | Activar | Último paso |
|---|---|---|
| Start, Center, End | `C` | punto final |
| Start, Center, Angle | `C`, `A` | ángulo |
| Start, Center, Length | `C`, `L` | longitud de cuerda |
| Start, End, Angle | `E` | ángulo |
| Start, End, Direction | `E`, `D` | dirección tangente |
| Start, End, Radius | `E`, `R` | radio |

- En el último paso de cada método salvo Start, Center, End, escribe un número y pulsa **Enter** o **Space**, o mueve el cursor y haz clic — el cursor se lee como ese número (una dirección para un ángulo o dirección tangente, una distancia para una longitud de cuerda o radio).
- Un ángulo positivo va en sentido antihorario desde el inicio, uno negativo en sentido horario. Un ángulo de 0° o vueltas completas no genera arco y el terminal lo indica.
- Una longitud de cuerda o radio positivo toma el camino corto, uno negativo el largo. Se rechaza una cuerda mayor que el diámetro o un radio menor que la mitad de la cuerda, y el terminal indica el límite.
- Start, Center, End usa solo la dirección del punto final desde el centro: el arco va en sentido antihorario desde el inicio hasta donde esa dirección corta la circunferencia. La dirección tangente es el rumbo, en grados desde el eje X, con el que el arco sale de su inicio.
- Para elegir el centro antes del punto inicial, escribe `C` en la primera solicitud.
- Las letras de las opciones siguen el idioma de la interfaz; aquí se muestran las inglesas.

## Entrada de coordenadas

En cualquiera de los tres pasos puedes escribir una posición exacta en lugar de hacer clic:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para colocar el punto.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X |
| `,` | Bloquear X y pasar a la entrada Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita |
| `C` `E` `A` `L` `D` `R` | Activar o desactivar una opción: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Descartar todos los puntos colocados y salir |

## Edición con puntos de control — ajustar extremos y radio

Un arco seleccionado expone tres puntos de control:

| Punto de control | Posición | Qué hace |
|------------------|----------|----------|
| **Centro** | Centro geométrico de la circunferencia | Mueve todo el arco; el radio y los ángulos no cambian |
| **Inicio** | Primer extremo del arco | Arrastra para mover el inicio a lo largo de la circunferencia — cambia tanto el ángulo de inicio como el radio |
| **Fin** | Último extremo del arco | Arrastra para mover el fin a lo largo de la circunferencia — cambia tanto el ángulo de fin como el radio |

Arrastrar un punto de control de inicio o fin lo reposiciona en la ubicación de arrastre y recalcula tanto el ángulo como el radio desde esa nueva posición relativa al centro. El extremo opuesto permanece fijo.

## Seleccionar arcos

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Selecciona si el clic cae cerca de la curva del arco (no de la cuerda) |
| **Arrastra a la derecha** (estricto) | Los puntos de muestra distribuidos a lo largo del arco deben estar todos dentro del recuadro |
| **Arrastra a la izquierda** (cruzado) | Cualquier punto de muestra en el arco que caiga dentro del recuadro lo selecciona |

## Comandos de edición compatibles

| Comando | Qué le sucede al arco |
|---------|-----------------------|
| [Move](../move/) | Traslada el centro; el radio y los ángulos no cambian |
| [Copy](../copy/) | Crea un arco idéntico en una nueva posición |
| [Rotate](../rotate/) | Rota el centro y desplaza los ángulos de inicio/fin por la cantidad de rotación |
| [Mirror](../mirror/) | Refleja el centro e invierte los ángulos de inicio/fin respecto al eje de simetría |
| [Scale](../scale/) | Escala la posición del centro y multiplica el radio por el factor de escala |
| [Offset](../offset/) | Crea un arco concéntrico con un radio mayor o menor, mismo ángulo |
| [Delete](../delete/) | Elimina el arco |

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
| Centro X / Centro Y | Centro de la circunferencia |
| Radio | Radio de la circunferencia |
| Ángulo de inicio | Ángulo en grados donde comienza el arco (medido desde el eje X positivo) |
| Ángulo de fin | Ángulo en grados donde termina el arco |

## Arc vs Circle — cuándo usar cada uno

| | Arc | Circle |
|---|-----|--------|
| Extensión | Parcial — del primer al tercer clic | 360° completo |
| Método de entrada | Tres puntos en la curva | Centro + radio (clic o escritura) |
| Entrada escrita | Coordenada X,Y para cada punto | Valor de radio (el centro también acepta X,Y) |
| Redimensionar después de colocar | Arrastra los puntos de control de inicio/fin | Arrastra cualquier punto de control cardinal |
| Mejor para | Filetes, esquinas redondeadas, caminos arqueados | Agujeros completos, elementos redondos |

## DXF — entidad ARC

Los arcos se guardan como entidades `ARC` en el archivo DXF, almacenando coordenadas del centro, radio, ángulo de inicio y ángulo de fin. Todas las propiedades — incluyendo color, capa, tipo de línea, escala de tipo de línea y grosor — se exportan sin pérdida. Cualquier aplicación compatible con DXF (LibreCAD, FreeCAD, etc.) los lee como arcos estándar.
