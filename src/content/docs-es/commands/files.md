---
sidebar_position: 3
title: Files — Panel de Archivos Recientes en KulmanLab CAD
description: El comando Files abre el panel de Archivos Recientes — explora todos los dibujos guardados en tu navegador, restaura cualquiera de ellos en el lienzo o elimina los que ya no necesitas.
keywords: [archivos recientes CAD, historial de archivos navegador CAD, restaurar dibujo, reabrir DXF, almacenamiento navegador CAD, archivos KulmanLab, dibujos guardados, IndexedDB CAD, gestionar dibujos]
---

# Files

El comando **Files** abre el panel de **Archivos Recientes** — una lista de todos los dibujos que se han guardado en el almacenamiento local de tu navegador. Úsalo para reabrir un dibujo anterior o eliminar archivos que ya no necesitas.

## Cómo abrir el panel de Archivos Recientes

Haz clic en el botón **Files** de la barra de herramientas (icono de historial) en el panel de Archivo en la parte superior de la pantalla. El panel se abre en el lado izquierdo del lienzo.

## Panel de Archivos Recientes

Cada entrada en la lista muestra el nombre del archivo y dos botones de acción:

| Botón | Acción |
|-------|--------|
| ✓ **Restaurar** | Cargar el dibujo en el lienzo — reemplaza el contenido actual |
| ✕ **Eliminar** | Eliminar el archivo del almacenamiento del navegador permanentemente |

Si aún no se han guardado archivos, el panel muestra "No files saved".

## Cómo se almacenan los archivos

KulmanLab guarda los dibujos en **IndexedDB** — una base de datos persistente en el navegador. Esto significa:

- Los archivos sobreviven a recargas de página y reinicios del navegador.
- Los archivos se almacenan **localmente en tu dispositivo** — no se cargan en ningún servidor.
- Cada navegador y dispositivo tiene su propio almacenamiento independiente. Un dibujo guardado en Chrome en una computadora no está disponible en Firefox ni en otra máquina.
- Borrar los datos del sitio del navegador eliminará todos los archivos guardados.

## Carga automática de archivos al iniciar

Al abrir KulmanLab CAD, la aplicación carga automáticamente el **archivo modificado más recientemente** del almacenamiento. No necesitas abrirlo manualmente desde el panel de Files cada vez.

## Gestionar el almacenamiento

No hay un límite fijo en el número de dibujos que puedes guardar, pero el almacenamiento del navegador es finito. Si notas advertencias de almacenamiento, elimina archivos más antiguos desde el panel de Files.

Para eliminar todos los dibujos guardados a la vez, usa el comando [WipeStorage](./wipestorage).

## Nombres de archivo y versiones

Cada archivo tiene una marca de tiempo en su nombre (p. ej. `myplan_May22_14:30:00.dxf`). Esta marca de tiempo se agrega automáticamente al [importar](./import) un archivo, asegurando que reimportar el mismo archivo fuente cree una nueva entrada en lugar de sobrescribir la versión anterior.

## Comandos relacionados

- [Import](./import) — cargar un dibujo desde tu sistema de archivos al almacenamiento del navegador
- [Export](./export) — descargar un dibujo a tu sistema de archivos
- [New File](./new-file) — iniciar un dibujo en blanco (también se guarda automáticamente)
- [WipeStorage](./wipestorage) — borrar todos los archivos guardados del almacenamiento del navegador
