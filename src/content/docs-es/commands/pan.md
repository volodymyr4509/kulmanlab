---
sidebar_position: 1
title: Comando pan — Navegación de la vista por clic y arrastre en KulmanLab CAD
description: El comando pan entra en un modo persistente de arrastre para desplazar la vista. Haz clic y arrastra en cualquier parte del lienzo para desplazar la vista sin cambiar el nivel de zoom. El arrastre con el botón central del ratón funciona en cualquier momento sin activar Pan.
keywords: [desplazar vista CAD, comando pan, arrastrar para navegar, desplazar lienzo CAD, navegación de viewport, kulmanlab]
---

# Pan

El comando `pan` entra en un modo persistente de arrastre para desplazar la vista — haz clic y arrastra en cualquier parte del lienzo para desplazar la vista. El nivel de zoom no cambia. El modo Pan permanece activo hasta que presionas `Escape`, por lo que puedes arrastrar múltiples veces en una sola activación.

## Desplazar la vista

1. Escribe `pan` en el terminal o haz clic en el botón **Pan** de la barra de herramientas.
2. **Haz clic y arrastra** en cualquier parte del lienzo para desplazar la vista.
3. Suelta y arrastra de nuevo tantas veces como sea necesario.
4. Presiona `Escape` para salir del modo Pan.

## Arrastre con el botón central — desplazar sin activar el comando

La forma más rápida de desplazar: **mantén presionado el botón central del ratón y arrastra** en cualquier momento, incluso mientras otro comando está activo. No se necesita activar ningún comando. Soltar el botón central regresa al estado en que estabas.

## Pan vs controles de zoom

| Acción | Efecto | ¿Requiere modo Pan? |
|--------|--------|-------------------|
| Arrastre con clic izquierdo (modo Pan) | Desplaza el viewport | Sí |
| Arrastre con clic central | Desplaza el viewport | No — funciona siempre |
| Rueda de desplazamiento | Acerca/aleja hacia el cursor | No — funciona siempre |
| Doble clic con botón central | Ajustar todas las entidades | No — funciona siempre |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Aplica zoom en pasos de 1,5× | No |
| [Fit](../fit/) | Ajusta todas las entidades en la vista | No |

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Escape` | Salir del modo Pan |

## Consejos

- Usa la rueda de desplazamiento para acercar hacia un área objetivo, luego desplaza para ajustar la posición.
- **Doble clic con el botón central del ratón** activa [Fit](../fit/) al instante — la forma más rápida de restablecer una vista perdida.
- Si estás en medio de un comando (p. ej., colocando un punto final de línea), arrastra con el clic central para desplazar sin cancelar el comando.
