---
title: Comando Undo — Retroceder por el Historial de Dibujo
description: El comando Undo revierte la última acción de dibujo un paso a la vez. Se almacenan hasta 20 pasos por archivo y se persisten en el navegador a través de recargas de página. Realizar una nueva acción después de deshacer borra la pila de redo.
keywords: [comando undo CAD, historial undo CAD, revertir acción CAD, pasos undo CAD, undo persistente en navegador, kulmanlab]
group: edit
order: 13
---

# Undo

El comando `undo` revierte el último cambio en el dibujo — un paso por invocación. Cada adición, eliminación o edición de entidades se registra como una entrada de historial separada. Undo retrocede por estas entradas en orden inverso.

## Cómo deshacer

- Escribe `undo` en el terminal, o
- Haz clic en el botón de la barra de herramientas **Undo**.

Cada invocación revierte una acción registrada. Invócalo repetidamente para retroceder más.

## Comportamiento del historial

| Detalle | Valor |
|---------|-------|
| Pasos por archivo | Hasta **20** |
| Almacenamiento | Navegador (IndexedDB / localStorage), por nombre de archivo |
| Sobrevive a recarga de página | Sí — el historial se restaura al reabrir el archivo |
| Nueva acción después de deshacer | Borra todas las entradas de redo por delante de la posición actual |
| Entrada más antigua cuando está lleno | Se descarta para hacer sitio al cambio más reciente |

Cada mutación de entidad se registra: dibujar nuevas entidades, eliminar entidades, editar extremos con agarres, y aplicar Move, Rotate, Scale, Mirror, Trim, Extend y Offset crean entradas de historial.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Dirección | Retrocede **hacia atrás** por el historial | Avanza **hacia adelante** por las entradas deshechas |
| Disponible cuando | Existe al menos una acción registrada | Se ha realizado al menos un Undo y no se ha tomado ninguna acción nueva |
| Se borra con | Nada — el historial se acumula hasta el límite de 20 pasos | Cualquier nueva acción de dibujo |

Usa [Redo](../redo/) para reaaplicar una acción deshecha. Los botones de la barra de herramientas aparecen atenuados cuando la dirección respectiva no está disponible.
