---
title: KulmanLab CAD — Referencia de Comandos
description: Referencia de comandos de KulmanLab CAD — guía completa de todos los comandos de dibujo, edición, anotación, capas, medición y archivos en KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, comandos CAD, CAD gratuito en el navegador, editor DXF en línea, comandos de dibujo, kulmanlab]
---

# KulmanLab CAD — Referencia de Comandos

Bienvenido a la referencia de comandos de **KulmanLab CAD**. [KulmanLab CAD](https://kulmanlab.com) es una herramienta CAD gratuita basada en el navegador para dibujar, editar y exportar archivos DXF — sin instalación requerida. Usa la barra lateral para explorar todos los comandos disponibles agrupados por panel.

## Formas

| Comando | Qué hace |
|---------|----------|
| [Line](./commands/line/) | Dibuja una línea recta entre dos puntos |
| [Polyline](./commands/polyline/) | Dibuja un camino abierto de múltiples segmentos |
| [Rectangle](./commands/rectangle/) | Dibuja un rectángulo alineado con los ejes |
| [Circle](./commands/circle/) | Dibuja un círculo por centro y radio |
| [Arc](./commands/arc/) | Dibuja un arco a través de tres puntos |
| [Ellipse](./commands/ellipse/) | Dibuja una elipse por centro y dos ejes |
| [Text](./commands/text/) | Coloca una etiqueta de texto en el lienzo |
| [Spline CV](./commands/spline-cv/) | Dibuja una spline colocando vértices de control |
| [Spline Fit](./commands/spline-fit/) | Dibuja una spline que pasa por los puntos donde se hace clic |

## Editar

| Comando | Qué hace |
|---------|----------|
| [Move](./commands/move/) | Mueve las entidades seleccionadas a una nueva posición |
| [Copy](./commands/copy/) | Copia las entidades seleccionadas a una nueva posición |
| [Rotate](./commands/rotate/) | Rota las entidades seleccionadas alrededor de un punto base |
| [Mirror](./commands/mirror/) | Refleja las entidades seleccionadas respecto a una línea |
| [Scale](./commands/scale/) | Escala las entidades seleccionadas alrededor de un punto base |
| [Align](./commands/align/) | Traslada, rota y escala opcionalmente entidades usando pares de puntos |
| [Delete](./commands/delete/) | Elimina las entidades seleccionadas del dibujo |
| [Trim](./commands/trim/) | Recorta un segmento de línea en sus intersecciones |
| [Extend](./commands/extend/) | Extiende una línea hasta la intersección de límite más cercana |
| [Offset](./commands/offset/) | Crea una copia paralela de una entidad a una distancia determinada |
| [Fillet](./commands/fillet/) | Redondea una esquina entre dos líneas con un arco tangente |
| [Chamfer](./commands/chamfer/) | Corta una esquina diagonal recta entre dos líneas o polilíneas |
| [Undo](./commands/undo/) | Deshace la última acción |
| [Redo](./commands/redo/) | Rehace la última acción deshecha |

## Anotaciones

| Comando | Qué hace |
|---------|----------|
| [Leader](./commands/leader/) | Dibuja una anotación de multidirector con punta de flecha y texto |
| [Leader+](./commands/leader-add/) | Agrega un brazo adicional a un multidirector existente |
| [Leader−](./commands/leader-remove/) | Elimina un brazo de un multidirector existente |
| [Dimension Linear](./commands/dim-linear/) | Agrega una cota horizontal o vertical |
| [Dimension Aligned](./commands/dim-aligned/) | Agrega una cota alineada a dos puntos |
| [Dimension Continue](./commands/dim-continue/) | Encadena una nueva cota a partir de la última |
| [Dimension Radius](./commands/dim-radius/) | Agrega una cota de radio a un círculo o arco |
| [Dimension Diameter](./commands/dim-diameter/) | Agrega una cota de diámetro a un círculo |
| [Dimension Angular](./commands/dim-angular/) | Agrega una cota angular a dos líneas, un arco o un círculo |

## Capas

| Comando | Qué hace |
|---------|----------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Establece la capa actual para que coincida con la capa de una entidad seleccionada |
| [LayerMatch](./commands/layer-match/) | Reasigna las entidades seleccionadas para que coincidan con la capa de una entidad origen |
| [LayerIsolate](./commands/layer-isolate/) | Congela todas las capas excepto las de las entidades seleccionadas |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Descongela todas las capas en un solo paso |

## Composiciones

| Comando | Qué hace |
|---------|----------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Crea una ventana gráfica en una composición de papel seleccionando dos esquinas |
| [ViewportCopy](./commands/viewport-copy/) | Duplica una ventana gráfica a una nueva posición |
| [PageManager](./commands/page-manager/) | Edita el tamaño de papel y la escala de la composición activa |

## Navegar

| Comando | Qué hace |
|---------|----------|
| [Pan](./commands/pan/) | Haz clic y arrastra para mover la ventana gráfica |
| [Zoom In](./commands/zoom-in/) | Acerca la ventana gráfica |
| [Zoom Out](./commands/zoom-out/) | Aleja la ventana gráfica |
| [Fit](./commands/fit/) | Ajusta todas las entidades a la ventana gráfica |

## Medir

| Comando | Qué hace |
|---------|----------|
| [Distance](./commands/distance/) | Mide la distancia entre dos puntos |
| [Angle](./commands/angle/) | Mide el ángulo entre tres puntos |
| [Area](./commands/area/) | Mide el área y el perímetro de un polígono |

## Estilo

| Comando | Qué hace |
|---------|----------|
| [Match Properties](./commands/match-properties/) | Copia el color, la capa y otras propiedades de una entidad a otras |
| [Font Manager](./commands/font-manager/) | Explora, selecciona y sube fuentes TTF personalizadas |

## Archivo

| Comando | Qué hace |
|---------|----------|
| [Import](./commands/import/) | Abre un archivo de dibujo DXF o JSON |
| [New File](./commands/new-file/) | Inicia un dibujo en blanco nuevo |
| [Files](./commands/files/) | Navega y restaura dibujos recientes |
| [Print](./commands/print/) | Exporta un área de dibujo como imagen o PDF |
| [Export](./commands/export/) | Descarga el dibujo como DXF o JSON |
| [WipeStorage](./commands/wipestorage/) | Borra todos los dibujos del almacenamiento del navegador |

## Recuperación

Si la aplicación falla en cada inicio (por ejemplo, después de trabajar con coordenadas extremadamente grandes), puedes borrar todos los datos almacenados localmente añadiendo `?reset` a la URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Esto elimina todo de la base de datos local del navegador e inicia un dibujo en blanco nuevo. El parámetro `?reset` se elimina automáticamente de la URL. Usa esto como último recurso cuando [WipeStorage](./commands/wipestorage/) no sea accesible porque la aplicación no carga.

## Cómo funcionan los comandos

Cada comando sigue el mismo patrón:

1. **Activar** — haz clic en el botón de la barra de herramientas o escribe el nombre del comando en el terminal en la parte inferior de la pantalla.
2. **Seguir el indicador** — el terminal muestra qué entrada se espera a continuación.
3. **Finalizar o cancelar** — la mayoría de los comandos terminan automáticamente después de la última entrada. Presiona **Escape** en cualquier momento para cancelar.

## Seleccionar objetos

Varios comandos de edición (Move, Copy, Rotate, Mirror, Scale, Delete) comparten el mismo comportamiento de selección:

- **Clic** en una entidad para seleccionarla o deseleccionarla.
- **Arrastra a la derecha** (de izquierda a derecha) para selección estricta — solo se seleccionan las entidades completamente dentro del recuadro.
- **Arrastra a la izquierda** (de derecha a izquierda) para selección cruzada — se selecciona cualquier entidad que cruce el recuadro.
- Presiona **Enter** o **Space** para confirmar la selección y pasar al siguiente paso.
