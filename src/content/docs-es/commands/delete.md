---
title: Comando Delete — Eliminar Entidades del Dibujo en KulmanLab CAD
description: El comando Delete elimina permanentemente las entidades seleccionadas (deshacible). Las entidades preseleccionadas se eliminan instantáneamente sin paso de confirmación. La tecla Delete funciona como atajo global incluso sin activar el comando. Compatible con selección por clic individual y por área.
keywords: [comando delete CAD, eliminar entidades CAD, borrar objetos CAD, tecla delete CAD, deshacer delete CAD, kulmanlab]
group: edit
order: 7
---

# Delete

El comando `delete` elimina las entidades seleccionadas del dibujo. Las eliminaciones se registran en el historial de [Undo](../undo/) y pueden revertirse con hasta 20 pasos. No hay diálogo separado de "confirmar eliminación" — la confirmación es una sola pulsación de tecla.

## Dos formas de eliminar

**Preseleccionar, luego eliminar** — la ruta más rápida:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `delete` en el terminal, haz clic en el botón **Delete** de la barra de herramientas, **o presiona la tecla `Delete`** directamente.

Las entidades se eliminan instantáneamente — sin paso adicional de confirmación.

**Activar, luego seleccionar**:

1. Escribe `delete` o haz clic en el botón de la barra de herramientas (sin nada seleccionado).
2. **Selecciona objetos** — haz clic para alternar, o arrastra para seleccionar por área.
3. Presiona **Enter**, **Space** o **Delete** para confirmar y eliminar las entidades seleccionadas.

## Atajo de teclado Delete

La tecla `Delete` del teclado actúa como un **atajo global** — si hay entidades seleccionadas actualmente, presionarla las elimina inmediatamente, incluso sin abrir el comando Delete en el terminal. Este es el flujo de trabajo de eliminación más rápido en un solo paso:

```
Haz clic en la entidad → presiona la tecla Delete → listo
```

## Selección durante el comando

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Alterna la entidad bajo el cursor dentro/fuera de la selección |
| **Arrastra a la derecha** (estricto) | Selecciona solo entidades completamente dentro del recuadro |
| **Arrastra a la izquierda** (cruzado) | Selecciona entidades que intersectan el límite del recuadro |
| **Enter** / **Space** / **Delete** | Confirma y elimina las entidades seleccionadas |

## Recuperar entidades eliminadas

Las eliminaciones son deshaciblcs con el comando [Undo](../undo/) (escribe `undo` o usa el botón de la barra de herramientas). Se pueden revertir hasta **20 pasos** por archivo, y el historial persiste entre recargas de página. Si has superado 20 eliminaciones sin guardar, las eliminaciones anteriores no se pueden recuperar.

## Entidades compatibles

Delete funciona con todos los tipos de entidades — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader y todas las demás.
