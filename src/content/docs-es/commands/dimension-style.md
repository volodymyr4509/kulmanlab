---
title: "Comando EstiloCota — crear y administrar estilos de cota con nombre"
description: "Cree y administre estilos de cota CAD para flechas, líneas de referencia, marcas de centro, texto, precisión, alineación y compatibilidad DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# EstiloCota

El comando abre un cuadro de diálogo para crear, editar, previsualizar y seleccionar estilos de cota con nombre. Las cotas lineales, alineadas, radiales, diametrales y angulares nuevas copian el estilo actual al crearse; las cotas existentes no quedan vinculadas.

## Abrir el cuadro de diálogo

Escriba el comando localizado en el terminal o pulse el botón **Estilo de cota** del panel **Anotar**. La lista izquierda muestra los estilos visibles; una marca indica el actual y el lápiz permite cambiar el nombre.

## Líneas y flechas

**Flecha 1 / Flecha 2 · Tamaño de flecha · Desfase de línea auxiliar · Extensión de línea auxiliar · Marca de centro · Tamaño de marca de centro**

Configure por separado las dos puntas de flecha, el tamaño, el desfase y la prolongación de las líneas de referencia, y el tipo y tamaño de marca de centro (`Ninguna`, `Marca` o `Líneas`).

## Texto

**Estilo de texto · Fuente · Altura de texto · Texto enmarcado · Separación de texto · Anclaje de texto · Texto alineado · Precisión · Precisión angular**

La sección de texto controla el relleno rápido desde Estilo de texto, fuente, altura, negrita, cursiva, marco, separación, una de nueve posiciones de enlace, alineación con la línea de cota y precisión lineal y angular. Estilo de texto copia valores una sola vez; no es un vínculo activo.

La vista previa usa los mismos renderizadores que el lienzo. Alterne entre muestras lineales, radiales, diametrales y angulares para revisar flechas, marcas de centro, posición del texto, precisión y marcos.

## Crear y administrar estilos

**Nuevo** duplica el estilo seleccionado. `Standard` no puede renombrarse ni eliminarse, y tampoco puede eliminarse el estilo actual. Los nombres deben ser únicos, no vacíos y válidos para DXF. Los estilos anotativos importados permanecen ocultos, pero se conservan.

## Establecer el estilo actual

**Establecer actual** convierte el estilo elegido en plantilla para las cotas nuevas; el desplegable del panel Anotar ofrece la misma selección. Los valores se copian al crear. Dimension Continue hereda en cambio todo el aspecto de su cota base.

## Guardar o descartar cambios

**Aceptar** aplica conjuntamente nombres, adiciones, eliminaciones, propiedades y estilo actual. **Cerrar**, pulsar el fondo o `Escape` descarta los cambios.

## Compatibilidad DXF

KulmanLab importa y exporta registros `DIMSTYLE` con nombre, incluidas flechas independientes, líneas de referencia, texto, precisión, marcas de centro, marco, referencia de estilo de texto y marca anotativa. Al importar, las modificaciones `DSTYLE` propias de cada entidad tienen prioridad.

Al exportar, el `STYLE` referenciado usa altura variable (`40 = 0`) y guarda la última altura usada en el grupo `42`. Así una altura fija de texto no sustituye la altura propia del estilo de cota.

## Comandos relacionados

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
