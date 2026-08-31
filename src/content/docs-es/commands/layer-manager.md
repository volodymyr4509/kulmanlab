---
title: LayerManager — Gestionar todas las capas en una sola tabla
description: El comando LayerManager abre una tabla con todas las capas del dibujo, permitiéndote añadir capas, eliminar las que no se usan y editar en el sitio la congelación, el bloqueo, el trazado, el color, el grosor y el tipo de línea de cada una.
keywords: [gestor de capas, tabla de capas CAD, gestionar capas CAD, añadir capa CAD, eliminar capa CAD, borrar capa sin usar, congelar bloquear trazar capa, gestión de capas kulmanlab]
group: layer
order: 1
---

# LayerManager

El comando `LayerManager` abre una tabla que lista todas las capas del dibujo, con sus ajustes de **Freeze**, **Lock**, **Plot**, **Color**, **Grosor de línea** y **Tipo de línea** editables directamente en la fila. Es el lugar central para añadir capas, eliminar las que no se usan y ajustar cómo se comportan las existentes — los demás comandos de capa ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) hacen cada uno una sola cosa concreta sin abrirlo.

## Abrir el Administrador de Capas

- Escribe `LayerManager` en el terminal, **o**
- Haz clic en el botón **Layer Manager** del panel de capas.

El diálogo se abre como un panel flotante; no es necesario seleccionar nada antes.

## La tabla de capas

| Columna | Qué controla |
|---------|---------------|
| Name | El nombre de la capa, mostrado de solo lectura en la tabla (se establece una vez, al crearla) |
| Freeze | Oculta las entidades de la capa y las excluye de la selección hasta que se descongele |
| Lock | Impide editar las entidades de la capa, sin ocultarlas |
| Plot | Si las entidades de la capa se incluyen al imprimir o exportar a PDF |
| Color | El color ACI de la capa — haz clic en la muestra para abrir el selector de color |
| Lineweight | El grosor de línea de la capa — haz clic en el chip para abrir el selector de grosor |
| Linetype | El patrón de trazos de la capa — haz clic en el chip para abrir el selector de tipo de línea |
| ✕ | Elimina la capa cuando nada la está usando — véase [Eliminar una capa](#eliminar-una-capa) |

Activar o desactivar Freeze, Lock o Plot tiene efecto inmediato — no hay un paso de guardado aparte. Las entidades con color, grosor de línea o tipo de línea en **ByLayer** (el valor predeterminado) toman lo que configures aquí; las entidades con su propia anulación explícita no se ven afectadas.

## Añadir una capa

1. Haz clic en **+ Add Layer** al final de la tabla.
2. Escribe un nombre y pulsa **Enter** para confirmar, o **Escape** para cancelar.

Los nombres de capa pueden contener letras, números, espacios y `_`, `-`, `$`. Un nombre vacío, ya en uso, o con cualquier otro carácter se rechaza con un error en línea, y la fila permanece abierta para otro intento.

Las capas nuevas empiezan **descongeladas, desbloqueadas, trazables**, con color 7 (blanco/negro), grosor de línea Default y tipo de línea Continuous — los mismos valores que [Import](../import/) asigna a la capa `0` en un dibujo en blanco.

## Eliminar una capa

Cada fila termina con un botón **✕** que quita la capa del dibujo. La eliminación es inmediata — no hay paso de confirmación — pero solo se ofrece para capas de las que no depende nada:

| Situación | Estado del botón |
|-----------|------------------|
| La capa está vacía | Activo — *Delete layer* |
| La capa está asignada al menos a una entidad | Desactivado — *Cannot delete: assigned to at least one entity* |
| Capa `0` | Sin botón alguno |

**«En uso» abarca todo el dibujo**, no solo lo que tienes a la vista. Una entidad situada en una presentación (espacio papel) cuenta exactamente igual que una del espacio modelo, así que una capa puede parecer vacía en pantalla y aun así negarse a desaparecer. Las capas congeladas no son distintas: congelar oculta las entidades pero no les quita la asignación, de modo que una capa congelada con entidades sigue sin poder eliminarse.

La capa `0` no puede eliminarse nunca. Es la capa de reserva que todo dibujo tiene garantizada, así que el botón ni siquiera se dibuja para ella en lugar de mostrarse desactivado.

### «…is now in use and can't be deleted»

De vez en cuando la ✕ parece disponible pero el clic se rechaza con un aviso en la parte superior del panel:

```
"WALLS" is now in use and can't be deleted
```

No es una contradicción. Averiguar qué capas están en uso obliga a recorrer todas las entidades del dibujo, así que el resultado se guarda en caché y solo se reconstruye cuando cambia el número de entidades — barato con cientos de entidades, no con cientos de miles. Mover una entidad existente a una capa no cambia ese número, por lo que el estado desactivado de la fila puede quedarse un instante desfasado. Al hacer clic se comprueba de nuevo desde cero antes de borrar nada, y por eso el rechazo ocurre en el momento del clic en vez de desaparecer la capa mientras algo aún la referencia.

Cierra el aviso con su propia **✕**. La capa queda intacta.

## Lo que no puedes hacer aquí

La tabla no indica cuál es la capa *actual*; eso se establece desde el desplegable del panel de capas o con [LayerMakeCurrent](../layer-make-current/), no desde este cuadro de diálogo. Los nombres de capa también quedan fijados al crearla: una capa puede eliminarse y volver a crearse, pero no renombrarse.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` | Confirmar el nombre de una capa nueva (mientras se añade) |
| `Escape` | Cancelar la adición de una capa, o cerrar el diálogo |

## Comandos relacionados

| Comando | Qué hace |
|---------|----------|
| [LayerMakeCurrent](../layer-make-current/) | Establece la capa actual para que coincida con la capa de una entidad seleccionada |
| [LayerMatch](../layer-match/) | Reasigna las entidades seleccionadas para que coincidan con la capa de una entidad origen |
| [LayerIsolate](../layer-isolate/) | Congela todas las capas excepto las de las entidades seleccionadas |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Descongela todas las capas en un solo paso |
