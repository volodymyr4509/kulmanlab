---
title: "Cómo abrir un archivo DXF sin AutoCAD"
description: "¿Te han enviado un archivo .dxf y no tienes AutoCAD? Ábrelo gratis en el navegador, sin instalar nada — más alternativas de escritorio y soluciones para dibujos vacíos."
keywords: [abrir archivo DXF, abrir DXF sin AutoCAD, visor DXF gratis, ver DXF online, abrir DXF en el navegador, visor DXF gratuito, abrir archivo DXF gratis, leer archivo DXF, DXF o DWG, abrir DXF en Mac]
date: 2026-08-31
author: KulmanLab
tag: Guía
---

Para abrir un archivo DXF sin AutoCAD, arrástralo a un editor CAD que funcione en el navegador: no hay que instalar nada ni crear ninguna cuenta. Programas de escritorio gratuitos como LibreCAD y QCAD también abren DXF. Esta guía cubre ambas vías y qué hacer cuando el dibujo se abre vacío, diminuto o sin texto.

Nosotros desarrollamos una de las herramientas de abajo — [KulmanLab](https://kulmanlab.com/es/) — así que trata esa sección como la parcial, y las limitaciones que aparecen en ella como la parte en la que tuvimos que ser honestos.

## Qué es realmente un archivo DXF

DXF significa *Drawing Exchange Format* (formato de intercambio de dibujos). Autodesk lo creó para que los programas de CAD pudieran pasarse dibujos entre sí, y es deliberadamente abierto y basado en texto: puedes abrir literalmente un `.dxf` en un editor de texto y leerlo.

Esa apertura es la razón por la que tienes opciones. DXF no está atado a ningún programa concreto, y decenas de herramientas saben leerlo.

También es la razón por la que un DXF no es una imagen. Guarda geometría — líneas, arcos, círculos, capas, cotas — no píxeles. Cambiarle el nombre a `.jpg` no hará que se abra en un visor de imágenes.

## Opción 1: ábrelo en el navegador

La vía más rápida, porque no hay nada que descargar ni ningún registro.

1. Entra en [app.kulmanlab.com](https://app.kulmanlab.com).
2. Arrastra tu archivo `.dxf` directamente al lienzo, o usa el botón **Import** (el icono de carpeta) del panel de archivo.
3. El dibujo se carga y la vista se ajusta automáticamente a él.

Tu archivo nunca sale de tu ordenador. KulmanLab funciona íntegramente en el navegador, así que el dibujo se procesa localmente en lugar de subirse a un servidor.

A partir de ahí puedes desplazarte y hacer zoom, activar y desactivar capas, medir distancias y ángulos, editar la geometría y exportar a PDF, PNG, JPEG o WebP si solo necesitas algo imprimible que reenviar.

**Qué lee de un DXF:** líneas, círculos, arcos, elipses, polilíneas, splines, texto, cotas, directrices múltiples y sombreados, además de las tablas de capas y tipos de línea del archivo.

**Dónde se queda corto — léelo antes de confiar en ello:**

- **Solo 2D.** Un DXF con sólidos o mallas 3D es el archivo equivocado para esta herramienta.
- **Sin bloques.** Las referencias a bloques (`INSERT`) no se procesan, así que un dibujo construido con símbolos de bloque repetidos llegará incompleto.
- **DXF, no DWG.** Consulta la sección sobre DWG más abajo.
- **Solo navegadores de escritorio** — Chrome, Firefox, Safari y Edge. No hay versión móvil.
- **La exportación a DXF es solo geometría.** Si editas y vuelves a exportar a DXF, se quedan fuera los sombreados, las cotas, las directrices y el texto. Exporta al formato JSON nativo si necesitas conservarlo todo, o a PDF si solo quieres compartirlo.

Si alguno de esos puntos es determinante para ti, una de las herramientas de escritorio de abajo te servirá mejor.

## Opción 2: programas de escritorio gratuitos

Vale la pena instalarlos si vas a hacer esto con regularidad, o si tu archivo usa funciones que una herramienta de navegador no va a manejar.

**LibreCAD** — gratuito y de código abierto, solo 2D, funciona en Windows, macOS y Linux. Lo más cercano al dibujo 2D clásico, y un editor DXF sólido.

**QCAD** — el motor del que surgió LibreCAD. Una edición comunitaria gratuita más una versión Pro de pago con funciones adicionales.

**FreeCAD** — gratuito y de código abierto, orientado al modelado paramétrico 3D pero capaz de importar DXF. Excesivo si solo quieres ver un dibujo 2D, y con una curva de aprendizaje pronunciada.

**Autodesk Viewer** — el visor web gratuito de la propia Autodesk. Solo permite ver, y requiere iniciar sesión con una cuenta de Autodesk.

**Inkscape** — no es CAD, pero importa DXF y es una opción razonable si lo único que necesitas es ver las formas o convertirlas a SVG.

## «En realidad es un DWG, ¿verdad?»

Muy a menudo, sí. DXF y DWG son ambos formatos de Autodesk y la gente usa los nombres indistintamente, pero no son lo mismo:

| | DXF | DWG |
|---|---|---|
| Formato | Abierto, basado en texto | Propietario, binario |
| Propósito | Intercambio entre programas | Formato nativo de AutoCAD |
| Compatibilidad externa | Amplia | Limitada y a menudo imperfecta |

Comprueba la extensión real del archivo antes de ponerte a buscar un visor. Si es `.dwg`, las herramientas de arriba en su mayoría no te servirán — incluida KulmanLab, que solo admite DXF.

La solución fiable es conseguir un DXF: quien te envió el archivo puede abrirlo en su programa de CAD y exportarlo o hacer *Guardar como* DXF. Casi cualquier aplicación CAD de escritorio puede hacerlo, y le llevará unos diez segundos. Convertir el DWG tú mismo con un conversor de terceros es posible, pero se pierde más información y estás confiando el dibujo de otra persona a una herramienta desconocida.

## Cuando el dibujo se abre pero se ve mal

**El lienzo está vacío.** Normalmente la geometría está muy lejos del origen, así que la vista apunta a un espacio vacío. Usa un comando de *ajustar* o *zoom extensión* para saltar al dibujo. Comprueba también si hay capas desactivadas: un dibujo puede llegar con la mayoría de sus capas congeladas.

**Todo es microscópico, o absurdamente enorme.** El DXF no registra sus unidades de forma fiable. El mismo dibujo puede haberse creado en milímetros, centímetros, pulgadas o pies, y a menudo el archivo no dice cuál. Mide algo cuyo tamaño real conozcas y escala a partir de ahí.

**Falta el texto o aparece sustituido.** Las fuentes no se incrustan en un DXF. Si el dibujo usa una fuente que tu equipo no tiene, el texto cae en otra o desaparece. Cargar la fuente original lo soluciona.

**Partes del dibujo no han llegado.** Algo del archivo usa un tipo de entidad que tu herramienta no lee — habitualmente bloques, sólidos 3D o extensiones propietarias escritas por el programa que lo generó. Prueba con una segunda herramienta antes de concluir que el archivo está dañado.

**No se abre nada en absoluto.** Confirma que el archivo es realmente un DXF: ábrelo en un editor de texto plano. Un DXF auténtico empieza con códigos de grupo ASCII legibles y nombres de sección como `SECTION` y `HEADER`. Si ves ruido binario, es un DWG o una variante binaria de DXF.

## Cuál elegir

**¿Solo necesitas verlo, una vez?** Ábrelo en el navegador. Instalar una suite de CAD para leer un archivo que alguien te ha enviado por correo no es un buen intercambio.

**¿Necesitas medir, anotar o imprimir?** Las herramientas de navegador se manejan bien con esto, e imprimir a PDF a escala real suele ser justo lo que la gente quiere.

**¿Trabajo de delineación real, de forma repetida?** Instala LibreCAD o QCAD. El software de escritorio dedicado te servirá mejor con el tiempo.

**¿Tienes un DWG?** Pide un DXF a quien te lo envió. Es más rápido y más seguro que cualquier vía de conversión.

---

*Relacionado: [Import](/es/docs/commands/import/) para la lista completa de lo que KulmanLab lee de un DXF, [Export Manager](/es/docs/commands/export-manager/) para saber qué contiene cada formato de exportación, y [Print Manager](/es/docs/commands/print-manager/) para salida en PDF a escala física real.*
