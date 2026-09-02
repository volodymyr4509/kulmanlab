---
title: "Cómo preparar un archivo DXF para corte láser"
description: "Por qué los servicios de corte rechazan archivos DXF y cómo arreglar el tuyo — contornos cerrados, unidades, kerf y capas. Gratis en el navegador."
keywords: [DXF para corte láser, preparar DXF cortadora láser, formato archivo corte láser, DXF rechazado láser, contornos cerrados DXF, kerf corte láser, preparar archivo láser, unidades DXF láser, capas cortar grabar, editor DXF gratis]
date: 2026-09-02
author: KulmanLab
tag: Guía
---

Un DXF para corte láser necesita cuatro cosas: contornos cerrados, unidades correctas, únicamente geometría de corte — sin cotas, notas ni sombreados — y capas que separen cortar, marcar y grabar. Esta guía cubre cada punto y cómo comprobar el tuyo antes de que un servicio lo rechace.

Todo esto puedes hacerlo gratis en el navegador en [app.kulmanlab.com](https://app.kulmanlab.com): nada que instalar, sin cuenta, y el archivo nunca sale de tu ordenador. Este es el flujo de trabajo para el que construimos KulmanLab originalmente, así que las limitaciones que aplican a otras tareas de CAD aquí en su mayoría no aplican: el corte láser es 2D, y el DXF es lo que los servicios de corte quieren.

## Por qué se rechazan los archivos

Cinco motivos explican casi todos los casos.

**Contornos abiertos.** Una forma que parece cerrada pero tiene una separación finísima en una esquina no es una región: es un conjunto de líneas sueltas. Las cortadoras necesitan saber qué queda dentro y qué fuera, y un contorno abierto no tiene dentro. Es, con diferencia, el motivo de rechazo más común.

**Unidades incorrectas o ambiguas.** El DXF no registra de forma fiable qué significan sus números. El mismo archivo puede estar en milímetros, centímetros, pulgadas o pies, y a menudo no lo indica. Una pieza que llega 25,4 veces más grande o más pequeña es esto.

**Todo lo que no es geometría.** Cotas, cajetines, notas, sombreados, líneas auxiliares. La máquina intentará cortar tus anotaciones sin pestañear.

**Líneas duplicadas.** Dos líneas idénticas una encima de otra significan que el láser recorre el mismo trazado dos veces: tiempo perdido, bordes quemados y, en material fino, riesgo de incendio.

**Todo en una sola capa.** Si cortar, marcar y grabar no están separados, el servicio no puede distinguirlos y te pedirá que reenvíes el archivo.

## Preparar el archivo

Arrastra tu `.dxf` al lienzo en [app.kulmanlab.com](https://app.kulmanlab.com), o usa el botón **Import** del panel de archivo. El dibujo se carga y la vista se ajusta a él.

**1. Mira lo que realmente tienes.** Escribe `fit` para verlo todo. Luego amplía cada esquina de cada pieza: las separaciones son invisibles a la vista completa y evidentes a 10 aumentos. Esta comprobación es la que te ahorra el correo de rechazo.

**2. Borra lo que no debe cortarse.** Líneas auxiliares, notas, márgenes, cotas. `layer-isolate` muestra una capa cada vez, que es como se encuentran los restos escondidos bajo la geometría real.

**3. Cierra las separaciones.** `trim` recorta los extremos que sobresalen donde dos líneas se cruzan de más. Donde las líneas se quedan cortas, arrastra el grip de un extremo hasta su vecino: los grips se enganchan, así que los extremos se tocan de verdad en lugar de casi tocarse.

**4. Comprueba las medidas.** `distance` mide entre dos puntos y `area` mide una región cerrada a partir de puntos que vas marcando. Mide algo cuya dimensión real conozcas. Si sale 25,4 veces desviado, tu archivo está en el sistema de unidades equivocado.

**5. Separa cortar, marcar y grabar.** Pon cada operación en su propia capa con un nombre evidente: `CUT`, `SCORE`, `ENGRAVE`. La mayoría de servicios piden esto o piden archivos separados. `layer-manager` las crea y las asigna.

Después exporta: **Export** → **DXF**. KulmanLab escribe DXF AC1032 sin adornos, que es lo que esperan los servicios de corte y el software de máquina.

## Kerf

El láser retira material al cortar: entre 0,1 y 0,3 mm aproximadamente según la máquina, el material y el grosor. Corta un cuadrado de 50 mm y obtendrás un cuadrado ligeramente menor de 50 mm, y la pieza que debía encajar a presión dentro no encajará.

Dos formas de manejarlo:

**Deja que lo haga el servicio.** La mayoría de servicios de corte compensan el kerf ellos mismos, y si lo hacen, compensarlo tú deja las piezas mal en el sentido contrario. Pregunta antes de ajustar nada.

**Hazlo tú.** `offset` crea una copia paralela de una forma a una distancia fija: la mitad del ancho de kerf, hacia fuera en piezas que deben conservar su medida, hacia dentro en los agujeros. Funciona con líneas, círculos, arcos, elipses y polilíneas. Trabaja sobre una entidad cada vez, así que resulta práctico para un puñado de detalles críticos, no para una plancha con doscientas piezas.

Si la tolerancia importa, corta una pieza de prueba antes de comprometer material.

## Qué no sobrevive a la exportación DXF

Conviene saberlo antes de confiar en ello:

- **El texto no se exporta a DXF.** Si pensabas grabar letras, no estarán en el archivo. Convierte el texto en contornos con otra herramienta, o usa un servicio que acepte SVG para la capa de grabado.
- **Los sombreados y las cotas tampoco se exportan.** Para un archivo de corte eso es justo lo que quieres, pero no supongas que una región sombreada se convertirá en un relleno grabado: no estará en el archivo en absoluto.
- **Las referencias a bloques no se importan.** Un dibujo construido con símbolos de bloque repetidos llega incompleto, así que comprueba el recuento de piezas contra el original.

Las splines *sí* se exportan. Algunos programas de máquina las manejan mal y prefieren polilíneas; si el tuyo es de esos, redibuja las curvas como polilíneas o arcos.

## Una advertencia sobre la automatización

KulmanLab **no tiene verificación previa**. Nada busca contornos abiertos, líneas duplicadas o problemas de unidades para avisarte. Las comprobaciones de arriba son manuales: ampliar, medir, mirar.

Eso está bien para unas pocas piezas y resulta tedioso para una plancha completa anidada. Si produces planchas con regularidad, te servirá mejor una herramienta con validador automático; y para piezas sueltas, que es lo que hace casi todo el mundo casi siempre, mirar el archivo con atención detecta los mismos problemas.

## Antes de enviarlo

- Todos los contornos de corte cerrados, con las esquinas revisadas a gran aumento
- Una medida conocida comprobada y correcta
- Sin cotas, notas, márgenes ni geometría auxiliar
- Sin líneas duplicadas superpuestas
- Cortar, marcar y grabar en capas separadas y claramente nombradas
- Kerf: aplicado, o dejado deliberadamente al servicio
- Exportado como DXF y reabierto una vez para confirmar que se ve bien

Ese último punto cuesta diez segundos y detecta sorpresas de exportación antes que el servicio.

---

*Relacionado: [Import](/es/docs/commands/import/) para lo que KulmanLab lee de un DXF, [Export Manager](/es/docs/commands/export-manager/) para saber exactamente qué lleva cada formato, [Offset](/es/docs/commands/offset/) para la compensación de kerf, y [LayerManager](/es/docs/commands/layer-manager/) para preparar las capas de corte y grabado.*
