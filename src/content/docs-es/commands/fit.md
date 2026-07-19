---
title: Fit — Encuadrar Todas las Entidades con un Clic
description: El comando Fit calcula el cuadro delimitador de todas las entidades y ajusta el zoom y el desplazamiento para que todas las entidades sean visibles con un pequeño margen. Hacer doble clic con el botón central del ratón activa Fit sin necesidad de abrir el comando.
keywords: [CAD ajustar vista, zoom para encuadrar, encuadrar todas las entidades, comando fit CAD, zoom cuadro delimitador, kulmanlab]
group: navigate
order: 4
---

# Fit

El comando `fit` calcula el cuadro delimitador de todas las entidades del dibujo y ajusta tanto el nivel de zoom como la posición de desplazamiento para que todas las entidades sean visibles con un pequeño margen. Es la forma más rápida de recuperar una vista perdida u orientarse después de importar un archivo DXF.

## Ajustar la vista

Haz clic en el botón **Fit** de la barra de herramientas o escribe `fit` en el terminal. La vista se ajusta inmediatamente y el comando termina — no se requiere interacción.

**Hacer doble clic con el botón central del ratón** activa la misma operación Fit en cualquier momento sin activar ningún comando — el atajo más rápido para restablecer una vista perdida a mitad de un dibujo.

## Cómo funciona el ajuste del cuadro delimitador

1. Fit encuentra el cuadro delimitador alineado con los ejes que encierra todas las entidades (X mín, X máx, Y mín, Y máx).
2. El nivel de zoom se establece para que la dimensión más alta o más ancha llene el lienzo con un margen.
3. La vista se centra en el punto medio del cuadro delimitador.

| Estado del dibujo | Resultado |
|-------------------|-----------|
| Más ancho que alto | Zoom restringido por el ancho |
| Más alto que ancho | Zoom restringido por la altura |
| Entidad única | Se ajusta alrededor de esa entidad |
| Dibujo vacío | La vista no cambia |

## Fit vs controles de zoom manuales

| | Fit | Zoom In / Zoom Out | Rueda del ratón |
|---|-----|--------------------|-----------------|
| Se centra en | Todas las entidades | Centro de la ventana gráfica | Cursor |
| Tamaño de paso | Automático (un solo disparo) | 1.5× por paso | ~1.1× por tick |
| Mejor para | Recuperar vista perdida, orientarse tras importar | Acercar/alejar desde el centro | Zoom preciso centrado en el cursor |

## Referencia de teclado

No hay atajo de teclado para este comando. Usa el atajo de **doble clic con el botón central del ratón**.

## Comandos de vista relacionados

| Comando | Qué hace |
|---------|----------|
| [Pan](../pan/) | Desplaza la ventana gráfica sin hacer zoom |
| [Zoom In](../zoom-in/) | Multiplica el zoom por 1.5× por paso |
| [Zoom Out](../zoom-out/) | Divide el zoom por 1.5× por paso |
