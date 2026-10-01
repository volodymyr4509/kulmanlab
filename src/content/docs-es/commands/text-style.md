---
title: "Comando EstiloTexto — Crear y administrar estilos de texto"
description: "Cree y administre estilos de texto CAD con fuente, altura, negrita, cursiva, interlineado, alineación y marco. El texto nuevo usa el estilo actual."
keywords: [estilo de texto CAD, fuente CAD, estilo de texto con nombre, administrador de estilos, marco de texto CAD, alineación de texto CAD, estilo DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

El comando `EstiloTexto` abre el administrador de estilos de texto. Permite crear y editar estilos con nombre y elegir el estilo *actual*. El [Texto](../text/) nuevo copia sus ajustes al crearse.

## Abrir el diálogo

- Escriba `EstiloTexto` en el terminal, o
- pulse **Estilo de texto** en el panel **Anotar**.

Los estilos visibles aparecen a la izquierda y las propiedades del seleccionado, a la derecha. ✓ identifica el estilo actual. Un doble clic selecciona un estilo y lo establece como actual.

## Editar propiedades

| Campo | Función |
|-------|---------|
| Cambiar nombre | Use el lápiz junto al nombre para editarlo en la lista; `Standard` no se puede cambiar. |
| Fuente | Tipo de letra de la lista del [Administrador de fuentes](../font-manager/). |
| Altura | Altura de texto positiva obligatoria. Los valores cero o negativos pasan a `1`; el administrador solo acepta valores mayores que `0`. |
| Negrita / Cursiva | Activa cada formato de forma independiente. |
| Interlineado | Multiplicador del espacio entre líneas. |
| Alineación horizontal | Valor predeterminado: izquierda, centro, derecha o justificada. |
| Marco | Dibuja un marco rectangular alrededor del texto nuevo. |

La vista previa dibuja un pangrama de dos líneas con el mismo renderizador del lienzo. Fuente, altura, negrita, cursiva, marco, interlineado y alineación se actualizan al instante; el indicador muestra la escala de ajuste. Los estilos nuevos usan **izquierda** de forma predeterminada.

Los estilos anotativos importados de DXF están ocultos por ahora porque la escala anotativa aún no se representa. Sus registros se conservan.

## Crear, eliminar y establecer como actual

- **Nuevo** duplica el estilo seleccionado como `Style1`, `Style2`, etc.
- **Eliminar** solo funciona si el estilo no es `Standard` ni el actual.
- **Establecer actual** usa el estilo seleccionado para el texto futuro. También puede elegirse en el desplegable del panel Anotar.

Un estilo es una plantilla utilizada al crear el texto. Modificarlo después no cambia el texto existente.

## Guardar y teclado

**OK** aplica todos los cambios. **Cerrar** o `Escape` los descarta.

| Tecla | Acción |
|-------|--------|
| `↑` / `↓` | Mover la selección por la lista |
| `Escape` | Descartar cambios y cerrar |

## Compatibilidad DXF

El nombre, los archivos de fuente, negrita, cursiva y el indicador anotativo se conservan en los estilos de texto DXF. KulmanLab escribe el grupo `40` de STYLE como `0` (altura variable) y la última altura usada en el grupo `42`; así una altura fija de STYLE no sustituye la altura propia de un estilo de cota. El marco, interlineado y alineación horizontal son valores por texto de KulmanLab, no campos de la tabla STYLE de DXF.

## Comandos relacionados

| Comando | Función |
|---------|---------|
| [Text](../text/) | Dibuja texto con el estilo actual |
| [FontManager](../font-manager/) | Administra las fuentes disponibles y personalizadas |
| [MatchProperties](../match-properties/) | Copia la altura del texto a otros objetos |
