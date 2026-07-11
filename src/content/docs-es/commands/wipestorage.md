---
title: Comando Wipe Storage — Borrar Todos los Datos del Navegador en KulmanLab CAD
description: El comando wipestorage elimina permanentemente todos los archivos, capas, tipos de línea e historial de deshacer guardados en el navegador. Requiere escribir YES para confirmar. Úsalo al restablecer una base de datos local corrupta o desbordada.
keywords: [CAD wipe storage, borrar datos del navegador CAD, restablecer aplicación CAD, eliminar archivos locales CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

El comando `wipestorage` elimina permanentemente **todos los datos almacenados en el navegador** para KulmanLab CAD — cada archivo guardado, tabla de capas y tipos de línea, e historial de deshacer. La página se recarga automáticamente después.

:::danger Irreversible
Esta acción no se puede deshacer. Todos los archivos almacenados en el navegador se eliminan. Exporta cualquier dibujo que quieras conservar como archivos `.json` o `.dxf` antes de ejecutar este comando.
:::

## Cuándo usarlo

- El almacenamiento del navegador está corrupto y la aplicación no puede cargar o guardar archivos.
- Quieres restablecer completamente la aplicación a un estado limpio.
- Estás cambiando de navegador o dispositivo y ya no necesitas la copia local.

## Cómo ejecutarlo

1. Escribe `wipestorage` en el terminal y pulsa **Enter**.
2. El terminal pregunta: *¿Borrar todo el almacenamiento local del navegador? Escribe YES para confirmar*
3. Escribe `YES` (cualquier capitalización) y pulsa **Enter**.

La aplicación elimina la base de datos y recarga la página. Si escribes cualquier otra cosa que no sea `YES` y pulsas **Enter**, o pulsas **Escape**, el comando se cancela y no se elimina nada.

## Qué se elimina

| Datos | Eliminado |
|-------|-----------|
| Todos los archivos guardados en el navegador | Sí |
| Tablas de capas y tipos de línea para cada archivo | Sí |
| Historial de deshacer / rehacer para cada archivo | Sí |

Solo se ven afectados los datos almacenados localmente en **este navegador**. Los archivos que ya has exportado como `.json` o `.dxf` no se tocan.
