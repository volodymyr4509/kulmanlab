---
sidebar_position: 2
title: Comando Redo — Reaplicar Acciones Deshechas en KulmanLab CAD
description: El comando Redo reaaplica la última acción revertida por Undo, avanzando por la pila del historial. Redo solo está disponible después de un Undo y se borra en el momento en que se realiza cualquier nueva acción de dibujo.
keywords: [comando redo CAD, historial redo CAD, reaplicar acción CAD, undo redo CAD, redo persistente en navegador, kulmanlab]
---

# Redo

El comando `redo` avanza por el historial de deshacer, reaplicando acciones que fueron revertidas por [Undo](./undo). Redo solo está disponible cuando has retrocedido con Undo y aún no has realizado un nuevo cambio.

## Cómo rehacer

- Escribe `redo` en el terminal, o
- Haz clic en el botón de la barra de herramientas **Redo**.

Cada invocación reaaplica una acción deshecha previamente. Invócalo repetidamente para avanzar por todas las entradas de redo disponibles.

## Comportamiento de la pila de redo

| Detalle | Comportamiento |
|---------|---------------|
| Disponible después de | Uno o más pasos de [Undo](./undo) |
| Se borra con | **Cualquier nueva acción de dibujo** — añadir, editar o eliminar una entidad |
| Almacenamiento | Navegador, por archivo — sobrevive a la recarga de página (siempre que no se haya realizado ninguna acción nueva antes de recargar) |
| Profundidad máxima | Hasta 20 entradas (mismo grupo que Undo) |

Una vez que se dibuja, elimina o modifica una nueva entidad, la pila de redo se borra y esas entradas no pueden recuperarse. Solo se pueden rehacer las acciones deshechas que no han sido reemplazadas por trabajo nuevo.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Dirección | Avanza **hacia adelante** por las entradas deshechas | Retrocede **hacia atrás** por el historial |
| Disponible cuando | Después de al menos un Undo, sin haber realizado ninguna acción nueva | Existe al menos una acción registrada |
| Se borra con | Cualquier nueva acción de dibujo | Nada |

El botón Redo de la barra de herramientas aparece atenuado cuando no hay entradas para rehacer. Usa [Undo](./undo) primero para crear entradas de redo.
