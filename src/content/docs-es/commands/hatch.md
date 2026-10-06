---
title: Comando Hatch — Rellenar un área con un patrón
description: El comando Hatch rellena la región que rodea a un punto pulsado con un patrón — cualquier combinación de líneas, arcos, elipses y splines que se cierre encierra una región, y cualquier forma cerrada dentro queda como una isla sin rellenar.
keywords: [comando hatch CAD, rellenar área CAD, patrón de hatch CAD, ANSI31, relleno SOLID, relleno de contorno CAD, entidad DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

El comando `Sombreado` rellena la región que rodea a un punto pulsado con un patrón. El contorno no se dibuja primero — proviene de lo que ya está en el lienzo, así que cuatro [Lines](../line/) separadas que se unen extremo con extremo encierran una región exactamente como lo hace una [Polyline](../polyline/) cerrada, y cualquier forma cerrada dentro se convierte en una isla que el relleno deja intacta.

## Rellenar un área

1. Escribe `Sombreado` en la terminal o haz clic en el botón **Hatch** de la barra de herramientas (el icono de muestra).
2. **Haz clic en un punto** dentro de la región que quieres rellenar.
3. El comando permanece activo, así que sigue haciendo clic para rellenar más áreas — cada clic crea su propia entidad `Hatch`.
4. Pulsa **Enter**, **Space** o **Escape** cuando termines.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   haz clic dentro del
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   contorno exterior; el
  └─────────────┘        └─────────────┘   círculo queda como isla
```

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Finalizar el comando Hatch |
| `Escape` | Finalizar el comando Hatch (igual que Enter/Space) |

## Qué puede formar un contorno

Cualquier combinación de estos tipos de entidad puede formar un contorno, en cualquier combinación, siempre que conecten extremo con extremo sin ningún hueco:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (su propio contorno cerrado)
- [Ellipse](../ellipse/) (cerrada, o un arco elíptico abierto como parte de un bucle mayor)
- [Polyline](../polyline/) (abierta o cerrada) y [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/) — cada lazo de un spline que se cruza consigo mismo es una región propia

Las entidades Text, Multileader y Dimension nunca se tratan como contornos.

## Islas

Todo lo que esté completamente cerrado dentro de la región que pulsaste — un círculo, una polilínea cerrada, el contorno de otro hatch — se convierte en una **isla**: el relleno se detiene en su borde y la isla misma queda vacía. Coloca una forma cerrada dentro de otra forma cerrada y el relleno alterna, agujero dentro de un relleno dentro de un agujero, siguiendo la misma regla de dentro/fuera en cada nivel.

## Cuando falla una selección

Si el punto en el que hiciste clic no está encerrado, o el contorno tiene un hueco, la terminal explica el motivo en lugar de no hacer nada silenciosamente:

| Mensaje | Significado |
|---------|--------------|
| "no boundary found" | No se encontró nada en ninguna dirección desde el punto pulsado — no hay ningún contorno cerca |
| "point is not enclosed" | Existe un contorno cerca, pero la forma que forma no contiene el punto que pulsaste |
| "boundary is open" | El contorno más cercano tiene un hueco en algún lugar — recórrelo y comprueba que cada unión sea exacta |
| "boundary too complex" | El bucle del contorno no se pudo cerrar dentro del límite de recorrido — normalmente un enredo de entidades superpuestas |

El comando permanece activo tras una selección fallida — lee el mensaje, corrige el dibujo o haz clic en otro lugar, e inténtalo de nuevo.

## Elegir un patrón

Cada hatch nuevo empieza relleno con `ANSI31` (o el patrón que usó el *último* hatch que editaste) — no hay selector de patrón antes de dibujar. Para usar un patrón distinto:

1. Selecciona un hatch existente y abre su campo **Pattern** en el panel de propiedades — esto abre el selector de patrones, una cuadrícula de muestras con nombre agrupadas según su procedencia.
2. Haz clic en un patrón para aplicarlo — el relleno se actualiza al instante.

Esa selección también se convierte en la predeterminada para el *siguiente* hatch que crees con el comando `Sombreado`, de la misma forma en que elegir una capa o un color se traslada. Así que para aplicar hatch a varias áreas nuevas con un patrón concreto: rellena un área, ajusta su patrón una vez, y sigue aplicando hatch — cada relleno posterior empieza ya con ese patrón aplicado.

Consulta [Hatch Manager](../hatch-manager/) para subir tus propios archivos de patrón `.pat` y explorar la biblioteca completa.

**SOLID** es una entrada normal en la lista de patrones, no una casilla o modo aparte — elígelo igual que elegirías ANSI31 o cualquier otro patrón con nombre.

## Propiedades

| Propiedad | Significado |
|-----------|-------------|
| Pattern | El nombre del patrón, del vocabulario compartido de patrones (consulta [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Escala la separación de las líneas del patrón — valores mayores separan más las líneas del patrón |
| Pattern Angle | Rota el patrón independientemente del contorno |
| Origin X / Origin Y | Dónde está anclada la repetición propia del patrón, en coordenadas del dibujo |

Mover, rotar, reflejar o escalar un hatch traslada consigo la colocación de su patrón, así que el relleno permanece alineado con el contorno — no necesitas reajustar la escala ni el ángulo tras una transformación.

## Edición con pinzamientos del contorno

Un hatch seleccionado agarra su contorno de la misma forma en que una Polyline agarra sus vértices — un pinzamiento en cada esquina donde se encuentran dos aristas, y uno en el punto medio de cada arista (un bucle cerrado como un hatch de círculo o elipse se agarra en cambio por sus cuatro puntos de eje).

| Pinzamiento | Qué hace |
|-------------|----------|
| **Esquina** | Mueve esa esquina. Una arista recta sigue exactamente; un arco se reajusta para seguir pasando por ambos vecinos; una arista de elipse o spline solo puede terminar en algún punto de su propia curva, así que la esquina se ajusta al punto más cercano sobre ella |
| **Punto medio de arista — línea, elipse o spline** | Desliza toda la arista; las aristas de ambos lados se recortan o extienden para seguir unidas a ella |
| **Punto medio de arista — arco** | **Curva** el arco a través del cursor en lugar de deslizarlo — ambos extremos permanecen exactamente donde estaban, y nada más en el contorno se mueve |
| **Centro** (todo el hatch) | Activa [Move](../move/) para todo el hatch |

Una vista previa de arrastre muestra el contorno como un contorno discontinuo en lugar de un relleno sólido mientras arrastras — el relleno original sigue visible debajo hasta que sueltas, ya que una vista previa solo puede pintar sobre lo que ya hay, nunca quitar nada de ello.

## DXF — entidad HATCH

Los hatch se **importan** desde entidades `HATCH`: KulmanLab lee la geometría del contorno junto con el nombre, la escala y el ángulo del patrón (códigos de grupo DXF 70/41/52) — **no** lee las propias definiciones de líneas del patrón que se insertan en el archivo. En su lugar, el nombre del patrón se busca en la propia biblioteca de patrones de KulmanLab (predeterminados incorporados más lo que hayas subido en [Hatch Manager](../hatch-manager/)). Un nombre que no esté en tu biblioteca recurre a ANSI31 para que el dibujo se siga leyendo como hatched, y se registra un aviso una sola vez.

Los bucles delimitados por spline escritos por otras aplicaciones (tipo de arista de contorno DXF 4) todavía no se leen.

Los sombreados se **exportan** a DXF como entidades `HATCH`. Los bucles del contorno salen junto al nombre del patrón (código de grupo 2), la marca de relleno sólido (70) y el ángulo y la escala de ese sombreado (52/41), y, a diferencia de la importación, también se escriben en línea las definiciones de línea ya resueltas del patrón (78, con 53/43/44/45/46/79/49). La asimetría es deliberada: KulmanLab puede resolver un nombre contra su propia biblioteca, pero la aplicación que recibe el archivo quizá no tenga ese patrón, así que las líneas viajan con él.

## Comandos relacionados

- [Hatch Manager](../hatch-manager/) — explora la biblioteca de patrones y sube archivos `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — todos trasladan consigo la colocación del patrón del hatch
- [Delete](../delete/) — elimina el hatch sin afectar a las entidades que formaron su contorno
