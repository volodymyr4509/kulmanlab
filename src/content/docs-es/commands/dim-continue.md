---
sidebar_position: 15
title: Comando Dimension Continue — Encadenar Cotas desde una Línea Base Existente en KulmanLab CAD
description: El comando Dimension Continue extiende una cadena de cotas desde la segunda línea de extensión de la última cota colocada. Hereda automáticamente el ángulo, el desplazamiento, el tamaño de flecha y la altura de texto de la cota base. Funciona con bases lineales y alineadas.
keywords: [cota continua CAD, dimcontinue, encadenar cotas CAD, cota de línea base, serie de cotas continuas, kulmanlab]
---

# Dimension Continue

El comando `dimcontinue` encadena nuevas cotas desde la **segunda línea de extensión** de una cota existente. Cada nuevo segmento se coloca a lo largo del mismo eje de medición y al mismo desplazamiento de línea de cota que la base. Todas las propiedades de estilo — tamaño de flecha, altura de texto, longitudes de líneas de extensión — se copian automáticamente de la base.

## Aspecto de las cotas encadenadas

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           ext2 → nuevo inicio)
```

Cada rectángulo es una entidad `DIMENSION` independiente. Comparten la misma posición de línea de cota y dirección de medición.

## Iniciar una cadena

1. Escribe `dimcontinue` en el terminal o haz clic en el botón **Dimension Continue** de la barra de herramientas.
2. **Si se acaba de colocar una cota** — el comando la toma automáticamente como base (no se necesita clic).
3. **Si no existe una cota reciente** — haz clic en cualquier cota existente para usarla como base.
4. **Haz clic en el siguiente origen de línea de extensión** — una vista previa muestra la nueva cota mientras mueves el cursor. O escribe `X,Y` y presiona **Enter** para una coordenada exacta.
5. Sigue haciendo clic (o escribiendo) para extender la cadena. Cada cota colocada se convierte automáticamente en la nueva base.
6. Presiona **Enter**, **Space** o **Escape** para finalizar la cadena.

## Qué se hereda de la cota base

| Propiedad | Heredada de la base |
|-----------|---------------------|
| Dirección/ángulo de medición | Sí — bloqueado para toda la cadena |
| Desplazamiento de la línea de cota (distancia desde los puntos medidos) | Sí |
| Tamaño de flecha | Sí |
| Altura de texto | Sí |
| Desplazamiento y extensión de las líneas de extensión | Sí |
| Alineación de texto | Sí |
| Nombre de estilo | Sí |
| Color, Capa | No heredado — usa la capa actual |

## Bloqueo de dirección de medición

La dirección de medición de la cadena está **fijada al ángulo de la cota base**:

- Base lineal (H) → todas las continuaciones miden distancia horizontal (Δ X).
- Base lineal (V) → todas las continuaciones miden distancia vertical (Δ Y).
- Base alineada a cualquier ángulo → todas las continuaciones miden a lo largo de ese mismo ángulo.

No puedes cambiar la dirección en medio de una cadena. Inicia una nueva [Dimension Linear](./dim-linear) o [Dimension Aligned](./dim-aligned) para acotar en una dirección diferente.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X |
| `,` | Bloquear X y pasar a la entrada Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar coordenada escrita, o finalizar la cadena si no hay entrada en curso |
| `Space` / `Escape` | Finalizar la cadena |

## Dimension Continue vs comenzar desde cero

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Punto de inicio | Fijo en ext2 de la última base | Haz clic en cualquier lugar |
| Ángulo | Bloqueado a la base | Libre |
| Desplazamiento | Heredado de la base | Establecido por cursor o escrito |
| Estilo | Heredado de la base | Estilo actual |
| Mejor para | Mediciones acumulativas a lo largo de una fila | Primera cota o cambio de dirección |

## Editar etiquetas después del posicionamiento — simple mode

**Haz doble clic** en cualquier cota de la cadena para abrir el editor de texto en **simple** mode. Cada segmento es independiente y puede editarse individualmente.

| Feature | Comportamiento |
|---------|---------------|
| Bold / Italic / Font / Height | Se aplica a la **etiqueta completa** a la vez |
| Formato por carácter | No compatible |
| `Enter` | Confirma el valor y cierra el editor |
| Multilínea | No compatible |

Consulta [Editor de Texto — simple mode](../interface/text-editor#simple-mode) para la referencia completa.

## DXF — entidades DIMENSION

Cada segmento de la cadena se almacena como una entidad `DIMENSION` independiente en el archivo DXF. No están vinculados en el archivo — comparten propiedades porque se crearon desde la misma base, pero cada uno puede editarse individualmente después de la colocación.
