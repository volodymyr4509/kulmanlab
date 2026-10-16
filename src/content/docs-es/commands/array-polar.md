---
title: "Comando ArrayPolar — copiar objetos alrededor de un centro en KulmanLab CAD"
description: "El comando ArrayPolar copia los objetos seleccionados alrededor de un centro — un número fijo de elementos repartidos en una vuelta completa o parte de ella, con copias que giran al rodear o conservan su orientación."
keywords: ["matriz polar CAD", "patrón circular CAD", "copiar objetos alrededor de un punto CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

El comando `ArrayPolar` crea copias de los objetos seleccionados alrededor de un centro, repartidas uniformemente en una vuelta completa o parte de ella. El original es el primer elemento; cada otro elemento es una copia girada respecto al centro — o solo desplazada a su alrededor, si desactivas Rotate.

## Crear una matriz polar

1. Selecciona los objetos y escribe `MatrizPolar` en el terminal o haz clic en el botón **Array Polar** de la barra de herramientas. Si se inicia sin selección, primero te pide seleccionarlos — pulsa **Enter** o **Space** para confirmar.
2. **Haz clic en el centro** alrededor del cual van las copias, o escribe `X,Y` y pulsa **Enter** para una coordenada exacta.
3. Revisa la matriz. Todas las copias se previsualizan en vivo y el terminal muestra `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — pulsa la letra de una opción para cambiarla.
4. Pulsa **Enter** o **Space** para crear las copias. Los originales se quedan donde están y se borra la selección.

## Opciones

| Opción | Tecla | Efecto |
|---|---|---|
| Items | `I` | Cuántos elementos hay, incluido el original — un entero de 2 a 1024. Empieza en 6. |
| Angle | `A` | Grados de un elemento al siguiente, en sentido antihorario; un ángulo negativo va en sentido horario. Hasta 180°. |
| Fill | `F` | Grados del primer elemento al último. 360 (predeterminado) es una vuelta completa; un número menor reparte los elementos en parte de ella. Negativo va en sentido horario. Hasta 360°. |
| Rotate | `R` | Activado (predeterminado): cada copia gira al dar la vuelta. Desactivado: cada copia se desplaza a su lugar y mira hacia donde mira el original. Cambia al instante — no hay número que escribir. |

- Angle y Fill son dos formas de expresar lo mismo, así que cambiar una reformula la otra. En una vuelta completa el último elemento se detiene un paso antes del primero; en parte de una vuelta cae exactamente en el ángulo de relleno.
- Para cambiar un número, pulsa la letra de su opción. La solicitud viene rellenada con el valor actual — escribe para reemplazarlo y pulsa **Enter** o **Space**; confirmarlo sin cambios deja la matriz como estaba.
- Items solo admite enteros; Angle y Fill admiten decimales y un `-` inicial para sentido horario. Se rechaza un ángulo o relleno de 0, igual que un ángulo superior a 180° o un relleno superior a 360° — el terminal dice por qué.
- Un Angle demasiado pequeño para todos los elementos descarta los que no caben, y el terminal informa del nuevo número.
- Funciona con cualquier tipo de entidad: cada copia es el original girado respecto al centro, o desplazado, exactamente como lo harían [Rotate](../rotate/) y [Move](../move/).

## Referencia de teclado

| Tecla | Acción |
|---|---|
| `Enter` / `Space` | Confirmar la selección, la matriz o un número escrito |
| `I` `A` `F` `R` | Cambiar Items, Angle o Fill escribiendo un número; alternar Rotate |
| `0`–`9`, `.`, `-` | Escribir el número (`.` y `-` solo para Angle y Fill, con `-` primero) |
| `Backspace` | Borrar el último carácter escrito |
| `Escape` | Cancelar |
