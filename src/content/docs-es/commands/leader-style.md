---
title: Comando EstiloGuía — Gestionar estilos de línea guía
description: Crea estilos de línea guía CAD con punta, anclaje, separación, rotación, fuente, altura y marco de texto.
keywords: [estilo de línea guía CAD, estilo multireferencia, MLEADERSTYLE, punta de flecha CAD, anclaje de texto, estilo DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

El comando `EstiloGuía` abre el gestor de estilos de línea guía. Cada nueva [Directriz](../leader/) copia la configuración del estilo *actual* cuando se crea.

## Editar un estilo

Escribe `EstiloGuía` o haz clic en **Estilo de línea guía** en el panel de anotación. ✓ marca el estilo actual; el lápiz junto al nombre permite cambiarlo. La vista previa se actualiza al instante con el mismo renderizador que el dibujo.

| Campo | Función |
|---|---|
| Anclaje de texto | Superior, Medio, Inferior o Subrayado |
| Punta / Tamaño de flecha | Símbolo y tamaño en el extremo de cada brazo |
| Separación del rellano | Espacio entre el rellano y el texto |
| Rotación de texto | Ángulo de la etiqueta en grados |
| Estilo de texto | Copia una vez fuente, altura, negrita y cursiva desde [TextStyle](../text-style/) |
| Fuente / Altura de texto | Tipografía y altura de la etiqueta |
| Negrita / Cursiva | Formato independiente del texto |
| Texto enmarcado | Marco rectangular alrededor de la etiqueta |

**Nuevo** duplica el estilo seleccionado. `Standard` no se puede renombrar ni eliminar; tampoco se puede eliminar el estilo actual. **Establecer actual** solo afecta a las directrices creadas después: las existentes no cambian. Los nombres vacíos, repetidos o no válidos para DXF bloquean **OK**. Los estilos anotativos importados se ocultan, pero se conservan.

## Guardado y DXF

KulmanLab importa y exporta registros `MLEADERSTYLE`. Nombre, punta y tamaño de flecha, separación, altura, enlace del texto, marco y marca anotativa se conservan como campos del estilo. Al exportar, el grupo `342` apunta al EstiloTexto cuya fuente, negrita, cursiva y altura coinciden; si no hay coincidencia, usa `Standard`. Esta referencia DXF no convierte el relleno rápido de KulmanLab en un vínculo activo. El único valor de enlace se escribe en los campos izquierdo y derecho de DXF.

Consulta también [Leader](../leader/), [LeaderAdd](../leader-add/) y [LeaderRemove](../leader-remove/).
