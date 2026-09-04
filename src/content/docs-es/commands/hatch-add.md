---
title: Comando HatchAdd — subir un archivo de patrones .pat desde la terminal
description: HatchAdd abre el selector de archivos para subir un archivo .pat sin abrir antes el Hatch Manager. Se añaden de una vez todos los patrones que define.
keywords: [comando hatch add, comando hatchadd, subir archivo pat terminal, patrón de sombreado personalizado CAD, acad.pat, biblioteca de patrones, kulmanlab]
group: style
order: 5
---

# HatchAdd

El comando `HatchAdd` abre el selector de archivos del sistema para subir un archivo de patrones de sombreado `.pat`, sin abrir antes el diálogo [Hatch Manager](../hatch-manager/). Es la misma subida que dispara el botón **Add .pat File** del Hatch Manager: HatchAdd solo es una vía directa desde la terminal.

## Subir un archivo de patrones

1. Escribe `HatchAdd` en la terminal, o pulsa **Add .pat File** en el pie del diálogo [Hatch Manager](../hatch-manager/).
2. Elige un archivo `.pat` en el selector del sistema. Solo se acepta el formato estándar de patrones de sombreado.

El comando termina en cuanto se abre el selector de archivos: no hay más indicaciones, clics ni entrada en la terminal. Los patrones quedan registrados y aparecen en el grupo **User** en cuanto se selecciona el archivo.

## Qué ocurre al subir

- **Un archivo `.pat` es un contenedor, no un patrón suelto.** Un solo archivo suele definir muchos patrones con nombre, y se añaden todos juntos. Ahí es donde HatchAdd se separa de [FontAdd](../font-add/), donde un `.ttf` es una fuente.
- **El archivo en sí no se conserva.** Se lee una vez, se divide en sus patrones y cada patrón se guarda por su cuenta con su propio nombre. Por eso puedes quitar un patrón más adelante sin tocar los que llegaron con él, y por eso el grupo **User** los lista alfabéticamente por nombre y no por el archivo del que vinieron.
- **Un patrón cuyo nombre coincide con uno existente lo reemplaza.** Es la forma prevista de instalar definiciones autorizadas por encima de las aproximaciones de KulmanLab: sube un `acad.pat` real y sus versiones de `ANSI31` y de los demás nombres estándar toman el relevo.
- **Los patrones se guardan por usuario, no por dibujo.** Viven en el navegador (IndexedDB), se recargan solos la próxima vez que abras KulmanLab CAD y están disponibles en cualquier dibujo.
- **Un archivo sin definiciones válidas no añade nada.** La biblioteca queda exactamente como estaba.

## Referencia de teclado

HatchAdd no tiene interacción de teclado propia: todo el comando es el diálogo nativo de selección de archivos del navegador. Cancelar ese diálogo (o no elegir archivo) deja la biblioteca de patrones sin cambios.

## Comandos relacionados

| Comando | Qué hace |
|---------|----------|
| [Hatch Manager](../hatch-manager/) | Explorar la biblioteca de patrones con vista previa en vivo y eliminar los patrones subidos |
| [Hatch](../hatch/) | Rellena una región cerrada con un patrón de la biblioteca |
| [FontAdd](../font-add/) | El mismo atajo de subida directa para fuentes `.ttf` |
