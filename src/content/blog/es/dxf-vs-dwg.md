---
title: "DXF vs DWG: ¿cuál es la diferencia?"
description: "DWG es el formato nativo de AutoCAD; DXF es el formato abierto de intercambio. Qué cambia realmente, cuál necesitas y cómo conseguir un DXF si te mandan un DWG."
keywords: [DXF vs DWG, diferencia entre DXF y DWG, DWG o DXF, qué es DWG, qué es DXF, DWG a DXF, formatos CAD, abrir archivo DWG, formato DXF, cuál formato CAD]
date: 2026-09-02
author: KulmanLab
tag: Guía
---

DWG es el formato de archivo nativo de AutoCAD: binario, propietario y no documentado por Autodesk. DXF es el formato de intercambio que Autodesk sí publica para que otros programas puedan leer los mismos planos. La misma geometría, distinto envoltorio, y solo uno de los dos está pensado para entregar archivos a gente fuera de tu propio software.

Ese último punto es toda la diferencia práctica, y es el que decide cuál deberías pedir.

## La versión corta

| | DXF | DWG |
|---|---|---|
| Significa | Drawing Exchange Format | Drawing |
| Especificación publicada | Sí, por Autodesk | No |
| Codificación | Texto (también una variante binaria) | Binario |
| Propósito | Mover planos entre programas | El formato de trabajo propio de AutoCAD |
| Tamaño de archivo | Mayor | Menor |
| Leído por otros programas | Muy ampliamente | De forma desigual, mediante bibliotecas de ingeniería inversa |
| Lleva todo lo que AutoCAD puede hacer | No: un subconjunto documentado | Sí |

## Por qué existen dos formatos

Autodesk lanzó AutoCAD en 1982 con DWG como formato de trabajo. Está pensado para la comodidad de un único programa: compacto, binario y libre de cambiar cuando AutoCAD lo necesite.

Eso lo convierte en mala cosa para enviar a nadie. Así que Autodesk publicó además DXF: el mismo plano escrito de forma documentada y legible, contra la que cualquier desarrollador puede programar. Abre un `.dxf` en un editor de texto y verás códigos de grupo y nombres de sección en ASCII llano.

Los dos se versionan a la vez. Cada versión de AutoCAD trae una revisión de DWG y otra equivalente de DXF; la marca `AC1032` que a veces se ve en la cabecera de un archivo identifica, por ejemplo, la generación AutoCAD 2018.

Así que DXF no es el formato más antiguo ni el menor. Es el mismo plano, hecho legible a propósito.

## Qué cambia realmente en la práctica

**Apertura.** Autodesk documenta DXF y no documenta DWG. Los programas que leen DWG —y son muchos— se apoyan en bibliotecas construidas mediante ingeniería inversa del formato. Funciona bien y es del todo legítimo, pero implica que el soporte de DWG va por detrás de las versiones nuevas y varía entre aplicaciones, mientras que el de DXF puede implementarlo cualquiera directamente desde la especificación.

**Tamaño.** Un DWG binario suele ser bastante más pequeño que el mismo plano en DXF ASCII. En un proyecto grande importa; en una pieza suelta, no.

**Fidelidad.** DWG contiene todo lo que AutoCAD sabe expresar, incluidos tipos de objeto que otros programas ni conciben. DXF cubre un subconjunto documentado. Para delineación 2D corriente —líneas, arcos, círculos, polilíneas, texto, cotas, capas— ese subconjunto es todo lo que necesitas. En un modelo apoyado en objetos propietarios de AutoCAD, exportar a DXF pierde parte.

**Amplitud del soporte.** Prácticamente cualquier herramienta CAD, CAM o vectorial lee DXF. Menos leen DWG, y las que lo hacen suelen soportarlo de forma menos completa.

## ¿Cuál necesitas de verdad?

**Te han mandado un archivo y no puedes abrirlo.** Comprueba primero la extensión real. Casi todo el mundo dice «DWG» para ambos, y la mitad de las veces lo que tienes en descargas es un `.dxf` que ya podrías abrir. Ver [abrir un DXF sin AutoCAD](/es/blog/open-dxf-file-without-autocad/).

**Lo envías a un servicio de corte láser, un taller CNC o un fabricante.** DXF, prácticamente siempre. El software de máquina y los servicios de corte están montados alrededor de él, y la geometría de corte 2D cabe holgadamente en el subconjunto documentado. Ver [preparar un DXF para corte láser](/es/blog/prepare-dxf-for-laser-cutting/).

**Lo envías a un arquitecto o ingeniero que trabaja en AutoCAD.** Pregunta. Muchos prefieren DWG porque es lo que su flujo espera, y abren DXF sin problema si no.

**Lo archivas a largo plazo.** DXF. Un formato de texto documentado seguirá siendo legible dentro de veinte años por alguien con la especificación y un editor de texto. Ese argumento es la razón misma de que existan los formatos de intercambio.

**Alguien solo quiere mirarlo.** Ninguno de los dos: manda un PDF. Ver [convertir un DXF a PDF](/es/blog/convert-dxf-to-pdf/).

## Cómo conseguir un DXF cuando te han mandado un DWG

La vía fiable es pedirlo. Quien envió el archivo lo abre en su programa de CAD y hace *Guardar como* o *Exportar* → DXF. Lleva unos diez segundos, cualquier aplicación CAD de escritorio puede hacerlo, y el archivo sale del software que lo creó en vez de la conjetura de un tercero sobre él.

Si preguntar no es opción, existen conversores. Dos cosas que sopesar: la conversión es donde se pierde fidelidad, y estás subiendo el plano de otra persona a un servicio que no controlas. Para un proyecto personal, bien. Para trabajo de cliente, pregunta.

Cuando lo pidas, conviene indicar una versión. **DXF R12 es lo más seguro**: es antiquísimo, está soportado en todas partes y, si el plano es geometría 2D llana, no pierde nada que importe. El software de máquina más antiguo, en particular, se entiende mucho mejor con él.

## Dos cosas que la gente malentiende

**«DXF pierde información.»** Solo en el sentido de que no lleva tipos de objeto propietarios de AutoCAD. Líneas, arcos, círculos, polilíneas, texto, cotas y capas sobreviven intactos. Para trabajo de delineación 2D la pérdida suele ser cero.

**«DXF es el formato viejo.»** Se versiona junto a DWG desde 1982 y lo sigue haciendo. La confusión viene de que R12 se usa tanto como objetivo de compatibilidad que se supone que DXF se quedó ahí.

## Dónde encaja esta herramienta

[KulmanLab](https://kulmanlab.com/es/) lee **DXF, no DWG**, y vale la pena decir por qué en vez de tratarlo como un descuido: DXF está documentado, así que una implementación puede ser correcta leyendo la especificación. DWG supondría depender de una biblioteca de ingeniería inversa, en un navegador, para un formato que cambia según el calendario de Autodesk.

Si tienes un `.dwg`, esto no lo abrirá. Si tienes un `.dxf`, puedes abrirlo en una pestaña del navegador sin instalar nada: [app.kulmanlab.com](https://app.kulmanlab.com).

Lo que escribe de vuelta es el dibujo completo: líneas, círculos, arcos, elipses, polilíneas, splines, texto con su formato, cotas, directrices y sombreados, junto con capas y tipos de línea. Un archivo abierto aquí y exportado de nuevo sale con sus anotaciones, sin quedar reducido a pura geometría.

---

*Relacionado: [Import](/es/docs/commands/import/) para saber exactamente qué lee KulmanLab de un DXF, y [Export Manager](/es/docs/commands/export-manager/) para lo que lleva cada formato de exportación.*
