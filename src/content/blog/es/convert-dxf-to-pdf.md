---
title: "Cómo convertir un DXF a PDF (a la escala correcta)"
description: "Convierte DXF a PDF gratis en el navegador — incluso a una escala exacta como 1:50 en A3, algo que los conversores no hacen. Sin instalar nada ni crear cuenta."
keywords: [convertir DXF a PDF, DXF a PDF gratis, DXF a PDF online, DXF a PDF escala, imprimir DXF a escala, conversor DXF PDF, plano CAD a PDF, DXF PDF A3, escala 1:50 PDF, DXF a PDF sin AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guía
---

Para convertir un DXF a PDF, ábrelo en un editor CAD que funcione en el navegador y expórtalo: sin instalar nada, sin cuenta, y el archivo se queda en tu ordenador. Si el PDF tiene que medir correctamente al imprimirlo, necesitas una presentación en papel y una escala exacta, que es justo la parte que los conversores se saltan.

Esa distinción es el motivo de esta guía. Un conversor de archivos genérico te da una imagen de tu plano. Un PDF a escala te da un plano al que alguien puede acercarle una regla.

## La vía rápida: simplemente generar un PDF

Cuando solo necesitas algo legible para enviar por correo:

1. Entra en [app.kulmanlab.com](https://app.kulmanlab.com) y arrastra tu `.dxf` al lienzo, o usa el botón **Import** del panel de archivo.
2. Pulsa el botón **Print**, o escribe `printmanager`.
3. Pon **Format** en **PDF**.
4. Pulsa **Export**. El archivo se descarga.

Ya está. La vista previa se renderiza por el mismo camino de código y a la misma resolución que el archivo exportado, así que lo que ves es lo que obtienes, no una aproximación.

Un detalle que conviene saber: **el PDF conserva todo lo que hay en pantalla** —cotas, texto, sombreados, directrices— dispuesto exactamente como lo dibujaste. La exportación a DXF también lo lleva todo, así que la elección entre ambos no va de qué sobrevive. Va de qué necesita quien lo recibe: PDF si solo tiene que leerlo o imprimirlo, DXF si tiene que editarlo.

## La vía correcta: convertir a una escala exacta

Si alguien va a medir o construir a partir de esto, «que quepa en la página» no sirve. Una escala 1:50 significa que 1 mm en papel son 50 mm en la realidad, y eso solo se cumple si la fijas a propósito.

1. **Cambia a una presentación en papel.** Pulsa una pestaña de layout en la parte inferior; el botón **+** añade una. Las presentaciones son espacio papel; el espacio modelo no tiene página sobre la que escalar.
2. **Define la hoja.** Escribe `pagemanager`, o haz clic derecho en la pestaña del layout y elige **Page Manager**. Escoge formato de papel (A4, A3, A2, Letter…) y orientación.
3. **Coloca una ventana gráfica.** Escribe `viewportrectangle` y marca dos esquinas opuestas. La ventana gráfica es una mirilla hacia tu modelo.
4. **Fija la escala.** Con la ventana gráfica activa, usa el **selector de escala** de la barra de control. Elige una proporción estándar o escribe la tuya: acepta formato de razón (`1:200`, `5:1`) o un decimal (`0.005`), y luego Enter.
5. **Exporta.** Print Manager → PDF → Export.

El PDF queda dimensionado para que la página imprima a escala física real. Imprímelo al 100 % —nunca con «ajustar a la página», que reescala en silencio y echa por tierra todo el trabajo— y las medidas sobre el papel serán correctas.

Si después cambias el tamaño de papel o la escala, las ventanas gráficas existentes se reescalan proporcionalmente, de modo que la presentación no se descuadra.

## Elegir la calidad

El desplegable **Quality** fija los DPI a los que se renderiza el PDF:

| Quality | DPI | Para qué |
|---|---|---|
| Draft | 72 | Comprobación rápida, archivo más pequeño |
| Normal | 150 | Predeterminado — suficiente para adjuntos en A4 |
| Presentation | 300 | Cuando lo van a mirar de cerca |
| Max | 600 | Gran formato, detalle fino |

Los grosores de línea escalan junto con la resolución, así que una línea mantiene el mismo grosor *físico* en papel en cualquier ajuste: más calidad da una línea más nítida, no más fina. La excepción es la línea fina (grosor `0`), que por convención se queda en un píxel en todos los niveles.

## Estilos de impresión

El desplegable **Style** cambia la tinta y la página:

- **Monochrome** — negro sólido sobre blanco, y el valor por defecto. Es lo que quieres para papel: las capas de colores que se leen bien en pantalla se vuelven grises embarrados en una impresora láser.
- **Default** — cada entidad con su propio color, página blanca.
- **Blueprint** — líneas blancas sobre azul de Prusia intenso, al estilo de una cianotipia clásica. Para presentar, no para el taller.

## Convertir solo una parte del plano

**Change Area** recorta la exportación a un rectángulo que marcas en el lienzo. Recorta el archivo exportado de verdad, no solo la vista previa, y funciona tanto en una presentación como en espacio modelo.

Las esquinas se enganchan a grips e intersecciones como cualquier otro punto, así que puedes recortar por la geometría dibujada en lugar de a ojo: útil cuando una hoja lleva cuatro detalles y solo quieres el tercero.

## Lo que esto no hace

Limitaciones honestas, antes de que confíes en ello:

- **El PDF es una imagen rasterizada dentro de un contenedor PDF, no vectorial.** En A4 y calidad Normal eso es invisible. En A1, o si alguien se acerca mucho a un detalle, un PDF vectorial de un programa CAD de escritorio será más nítido. Sube Quality a Presentation o Max para gran formato, pero no por eso se vuelve vectorial.
- **Nada va a una impresora física.** Obtienes un archivo; imprimirlo es cosa de tu impresora.
- **Solo navegadores de escritorio** — Chrome, Firefox, Safari, Edge. No hay versión móvil.
- **Solo 2D, DXF y no DWG.** Si tu archivo es un `.dwg`, pide al remitente que exporte DXF.

## Cuándo usar otra cosa

**Un conversor genérico** (CloudConvert, Zamzar y similares) sirve si de verdad solo necesitas una imagen y te da igual a qué tamaño se imprima. Son rápidos y manejan formatos que nadie más lee. No te van a dar 1:50 en A3.

**CAD de escritorio** — LibreCAD, QCAD, o AutoCAD si lo tienes — produce PDFs vectoriales y es la respuesta correcta para planos técnicos de gran formato que se van a imprimir en condiciones y examinar con lupa.

**Esto**, para el amplio terreno intermedio: un DXF que necesitas hoy como PDF anotado y correctamente escalado, sin instalar nada.

## Antes de enviarlo

- Escala fijada a propósito en la ventana gráfica, no dejada en lo que cupiera
- Formato de papel acorde con lo que el destinatario va a imprimir realmente
- Quality por encima de Normal si va en algo mayor que A4
- Estilo Monochrome salvo que quieras color a propósito
- PDF abierto una vez para revisarlo antes de adjuntarlo
- Al destinatario le has dicho que imprima al 100 %, no con «ajustar a la página»

Esa última línea salva más planos a escala que todo lo demás de esta lista.

---

*Relacionado: [Print Manager](/es/docs/commands/print-manager/) para todos los ajustes de exportación, [Page Manager](/es/docs/commands/page-manager/) para tamaño de papel y escala de la presentación, [ViewportRectangle](/es/docs/commands/viewport-rectangle/) para colocar y escalar ventanas gráficas, e [Import](/es/docs/commands/import/) para lo que KulmanLab lee de un DXF.*
