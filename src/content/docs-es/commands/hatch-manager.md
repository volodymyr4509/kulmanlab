---
title: Comando Hatch Manager — Explorar y subir patrones .pat
description: El comando Hatch Manager abre un diálogo para explorar patrones de hatch con vista previa en vivo, y para subir tus propios archivos de patrón .pat. Los archivos subidos se guardan en el navegador y sustituyen a los patrones incorporados con el mismo nombre.
keywords: [hatch manager, patrón de hatch personalizado CAD, subir archivo pat, acad.pat, biblioteca de patrones de hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

El comando `GestorDeSombreados` abre un diálogo para explorar patrones de hatch con vista previa en vivo, y para subir tus propios archivos de patrón `.pat` para usar con [Hatch](../hatch/).

## Abrir el Hatch Manager

Escribe `GestorDeSombreados` en la terminal. Esto es independiente del selector de patrones que se abre al hacer clic en el chip **Pattern** de un hatch — el selector elige un patrón para un hatch concreto, el Hatch Manager es donde añades o quitas archivos `.pat`.

## Grupos de patrones

| Grupo | Contenido |
|-------|-----------|
| **User** | Patrones de tus propios archivos `.pat` subidos, subagrupados según el archivo del que procede cada patrón (solo se muestra tras haber subido uno) |
| **Standard** | `SOLID` más la propia tabla de patrones de este dibujo — cada dibujo nuevo empieza con la misma biblioteca incorporada, igual que sus capas y tipos de línea |

Haz clic en cualquier patrón de la lista (o usa `↑`/`↓`) para verlo en vista previa a la derecha — una muestra dibujada con el mismo código con el que se rellena el lienzo, así que es exactamente lo que mostrará el dibujo, además del nombre, la descripción y el número de líneas del patrón.

## Subir un archivo de patrón personalizado

1. Haz clic en **Add .pat File** en el pie del diálogo.
2. Elige un archivo `.pat` — el formato estándar de patrones de hatch. Un solo archivo suele definir muchos patrones con nombre a la vez; todos aparecen como entradas separadas agrupadas bajo el nombre de ese archivo.
3. Los archivos subidos se guardan permanentemente en el navegador (IndexedDB), ordenados con el más recientemente añadido primero, y se recargan automáticamente la próxima vez que abras KulmanLab CAD.

Subir un archivo que define un patrón con el mismo nombre que uno incorporado **sustituye** al predeterminado — esta es la forma admitida de obtener las definiciones oficiales de patrones de Autodesk: sube un `acad.pat` real, y sus versiones de ANSI31 y los demás nombres estándar toman el relevo de las aproximaciones propias de KulmanLab.

Si un dibujo hace referencia a un nombre de patrón que no está en tu biblioteca — importado de un DXF que usó un patrón de un `acad.pat` que no has subido — el hatch se sigue renderizando, usando `ANSI31` como sustituto, en lugar de recurrir a un relleno plano sin patrón.

## Quitar un archivo de patrón

Haz clic en la **×** junto al nombre de un archivo en el grupo **User** para quitarlo junto con cada patrón que definía. Cualquier hatch que ya use uno de esos patrones recurre de inmediato a `ANSI31`. Los patrones **Standard** incorporados no se pueden quitar.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `↑` / `↓` | Mueve la selección arriba o abajo en la lista de patrones |
| `Escape` | Cierra el Hatch Manager |

## Comandos relacionados

- [Hatch](../hatch/) — rellena un área pulsada usando el patrón seleccionado actualmente
- [Font Manager](../font-manager/) — el mismo patrón de subida/exploración, para fuentes personalizadas en lugar de patrones de hatch
