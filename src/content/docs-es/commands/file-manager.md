---
title: File Manager — Cuadrícula de Miniaturas, Renombrar y Eliminar
description: El comando File Manager abre una cuadrícula de miniaturas de cada dibujo guardado — haz clic en una miniatura para abrirla, renómbrala en el momento o elimínala con confirmación.
keywords: [file manager CAD, archivos recientes CAD, renombrar dibujo, eliminar dibujo, cuadrícula de miniaturas CAD, restaurar dibujo, reabrir DXF, almacenamiento navegador CAD, archivos KulmanLab, dibujos guardados, IndexedDB CAD, respaldar dibujo CAD]
group: file
order: 3
---

# File Manager

El comando `GestorDeArchivos` abre una **cuadrícula de miniaturas** de cada dibujo que se ha guardado en el almacenamiento local de tu navegador, ordenada por la última vez que se guardó cada uno. Úsalo para reabrir un dibujo anterior, renombrarlo o eliminarlo.

## Cómo abrir el File Manager

- Escribe `GestorDeArchivos` en el terminal, **o**
- Haz clic en el botón **File Manager** de la barra de herramientas (icono de historial) en el panel de Archivo en la parte superior de la pantalla.

El panel se abre en el lado izquierdo del lienzo y se cierra automáticamente en cuanto inicias otro comando o [importas](../import/) un archivo — así nunca permanece sobre un dibujo que todavía no incluye en su lista. Se vuelve a abrir con una lista actualizada cada vez.

## La cuadrícula de miniaturas

Cada dibujo guardado es una tarjeta que muestra una miniatura renderizada en vivo, su nombre y la fecha de la última actualización. Las miniaturas se generan en el momento cada vez que se abre el panel — nada se pre-renderiza ni se almacena — por lo que una tarjeta muestra un icono de marcador de posición por un instante mientras se dibuja su miniatura. El mismo marcador de posición también aparece si la generación falla, o si el dibujo realmente todavía no tiene entidades.

| Acción | Cómo |
|--------|-----|
| **Abrir** un dibujo | Haz clic en su miniatura — reemplaza el contenido actual del lienzo |
| **Renombrar** | Haz clic en el icono de lápiz, o haz doble clic en el nombre |
| **Eliminar** | Haz clic en el icono de papelera, luego confirma |

Si aún no se ha guardado ningún archivo, el panel muestra "No files saved". Con más archivos de los que caben en una pantalla, aparecen los controles **Page 1 of N** debajo de la cuadrícula.

La tarjeta del archivo que está actualmente abierto en el editor se marca con un anillo de color de acento y **no tiene botón de eliminar** — eliminar el archivo abierto borraría sus datos guardados mientras el lienzo lo sigue mostrando, y la siguiente edición simplemente lo volvería a guardar. Renombrarlo sigue estando disponible.

## Eliminar un archivo

Hacer clic en el icono de papelera no elimina de inmediato — activa una capa de confirmación sobre esa tarjeta ("Delete this file?" con los botones **Delete** / **Cancel**), ya que la eliminación es permanente y no se puede deshacer. Hacer clic en **Cancel**, en el icono de papelera de otra tarjeta, o en cualquier otro lugar de la tarjeta descarta la confirmación pendiente sin eliminar nada.

## Renombrar un archivo

Haz clic en el icono de lápiz (o haz doble clic en el nombre del archivo) para editarlo en el momento, luego presiona **Enter** para confirmar o **Escape** para cancelar. Un renombrado se rechaza si el nuevo nombre:

- está vacío, o tiene más de 100 caracteres,
- ya está en uso por otro archivo guardado (sin distinguir mayúsculas de minúsculas),
- termina en un punto, o
- es un nombre de dispositivo reservado de Windows como `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, o `LPT1`–`LPT9`.

Los caracteres que no son válidos en un nombre de archivo (`\ / : * ? " < > |`) se eliminan automáticamente mientras escribes. Renombrar solo cambia la etiqueta — no afecta la posición del dibujo en la cuadrícula, ya que esta se ordena por la hora del último guardado, no por el nombre.

## Respalda tu trabajo — el almacenamiento del navegador no es permanente

KulmanLab guarda los dibujos en **IndexedDB**, una base de datos integrada en tu navegador:

- Los archivos se almacenan **únicamente de forma local en tu dispositivo** — nada se sube a un servidor.
- Cada navegador y dispositivo tiene su propio almacenamiento independiente. Un dibujo guardado en Chrome en un ordenador no aparece en Firefox, ni en otra máquina.
- Este almacenamiento **puede borrarse sin previo aviso** — al borrar datos del sitio o el historial de navegación, quedarse sin espacio en disco, usar una ventana privada/de incógnito, reinstalar el navegador o el sistema operativo, o cambiar de dispositivo. Ninguno de estos casos te da la oportunidad de recuperar lo que había.

**La única forma fiable de mantener un dibujo a salvo es [exportarlo](../export-manager/)** a tu propio almacenamiento. Usa `.json` (el formato nativo de KulmanLab) cuando sea posible — preserva cada entidad con exactitud; usa `.dxf` cuando necesites compatibilidad con otras herramientas CAD. Haz esto con todo aquello cuya pérdida lamentarías, y antes de borrar datos del navegador, cambiar de navegador o dispositivo, o guardar el equipo por un tiempo.

## Carga automática de archivos al iniciar

Al abrir KulmanLab CAD, la aplicación carga automáticamente el **archivo modificado más recientemente** del almacenamiento. No necesitas abrirlo manualmente desde el File Manager cada vez.

## Gestionar el almacenamiento

No hay un límite fijo en el número de dibujos que puedes guardar, pero el almacenamiento del navegador es finito. Si notas advertencias de almacenamiento, elimina archivos más antiguos desde el File Manager — o mejor aún, expórtalos primero para no perder nada.

Para eliminar todos los dibujos guardados a la vez, usa el comando [WipeStorage](../wipestorage/).

## Nombres de archivo

Los archivos nuevos e importados reciben un nombre simple — sin marca de tiempo incrustada. Si ese nombre ya está en uso, se añade automáticamente un sufijo al estilo Finder/Explorer (`plan (2)`, `plan (3)`, …) para que nada se sobrescriba. Siempre puedes darle a un archivo un nombre más claro después usando [renombrar](#renombrar-un-archivo).

## Comandos relacionados

- [Import](../import/) — cargar un dibujo desde tu sistema de archivos al almacenamiento del navegador
- [Export Manager](../export-manager/) — descargar un dibujo a tu sistema de archivos
- [New File](../new-file/) — iniciar un dibujo en blanco (también se guarda automáticamente)
- [WipeStorage](../wipestorage/) — borrar todos los archivos guardados del almacenamiento del navegador
