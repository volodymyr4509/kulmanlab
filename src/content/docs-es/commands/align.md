---
title: Comando align — Trasladar, rotar y escalar entidades con pares de puntos en KulmanLab CAD
description: El comando align reposiciona las entidades seleccionadas usando uno o dos pares de puntos origen/destino — combina traslación, rotación y una escala uniforme opcional en una sola operación. Funciona como un Move + Rotate + Scale combinados.
keywords: [comando align CAD, alinear entidades CAD, trasladar rotar escalar, alineación por pares de puntos, equivalente a ALIGN de AutoCAD, kulmanlab]
group: edit
order: 6
---

# Align

El comando `align` reposiciona las entidades seleccionadas usando uno o dos pares de puntos origen/destino. Con un par se comporta exactamente como [Move](../move/) (solo traslación). Con dos pares también rota la selección para que la dirección origen-a-origen coincida con la dirección destino-a-destino, y opcionalmente puede escalarla para que la longitud del segmento origen coincida con la del segmento destino — traslación, rotación y escala en una sola operación.

## Dos formas de iniciarlo

**Pre-seleccionar y luego alinear** — selecciona las entidades primero y luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `align` en el terminal o haz clic en el botón **Align** de la barra de herramientas.
3. **Haz clic en el primer punto origen (S1)**, luego **en el primer punto destino (D1)**.
4. **Haz clic en el segundo punto origen (S2)**, o presiona **Enter** para aplicar ya una alineación de solo traslación.
5. **Haz clic en el segundo punto destino (D2)**.
6. Responde a la pregunta de escala: presiona **Y** para escalar, o **N** / **Enter** para mantener el tamaño original.

**Activar y luego seleccionar** — inicia el comando sin nada seleccionado:

1. Escribe `align` o haz clic en el botón de la barra de herramientas.
2. **Selecciona objetos** — haz clic para alternar entidades individuales, o arrastra para seleccionar por área.
3. Presiona **Enter** o **Space** para confirmar la selección.
4. Continúa con S1 → D1 → S2 → D2 → pregunta de escala como arriba.

> El terminal solo necesita las letras suficientes para ser inequívoco — escribir `al` y presionar **Enter** activa Align directamente, ya que ningún otro comando comienza con esas dos letras.

## Anatomía de una alineación

```
  Puntos origen (en las entidades):    Puntos destino:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Resultado: la selección se traslada de modo que S1 quede en D1,
  luego se rota alrededor de D1 para que la dirección S1→S2
  coincida con la dirección D1→D2 — y, si eliges escalar, se
  redimensiona para que |S1S2| se convierta en |D1D2|.
```

Una vista previa fantasma sigue al cursor en cada paso: una vista previa de movimiento mientras se coloca D1, y luego una vista previa rotada (discontinua) una vez que se está posicionando D2.

## Alineación de un punto (solo traslación)

Después de colocar D1, presiona **Enter** en lugar de hacer clic en un segundo punto origen. La selección se traslada por el vector S1→D1 — sin rotación ni escala — idéntico a un [Move](../move/) usando S1 como punto base y D1 como destino.

## Alineación de dos puntos (traslación + rotación + escala opcional)

Una vez colocados S2 y D2:

- **Ángulo de rotación** — la diferencia entre la dirección destino (`D1 → D2`) y la dirección origen (`S1 → S2`).
- **Pregunta de escala** — aparece `scale objects to alignment points? [Yes/No] <N>`, con **No** como opción predeterminada:
  - Presiona **Y** para además escalar la selección uniformemente alrededor de D1 de modo que la distancia `S1–S2` se convierta en la distancia `D1–D2`.
  - Presiona **N** o **Enter** para mantener el tamaño original — solo se aplican traslación y rotación.

Presionar una tecla en la pregunta de escala aplica la alineación de inmediato — no hay un paso de confirmación adicional después de elegir Sí o No.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `Enter` / `Space` | Confirmar selección y avanzar a la fase S1 |
| `Enter` (en el paso S2) | Omitir la rotación — aplicar una alineación de solo traslación usando S1 y D1 |
| `Y` | Aplicar la alineación con escala |
| `N` / `Enter` (en la pregunta de escala) | Aplicar la alineación sin escala |
| `Escape` | Mientras se colocan puntos: descarta los puntos y vuelve a la fase de selección; sin nada seleccionado: cancela el comando |

## Selección durante el comando

Cuando el comando comienza en la fase de selección:

| Método | Comportamiento |
|--------|-----------|
| **Clic** | Alterna la entidad bajo el cursor dentro/fuera de la selección |
| **Arrastrar a la derecha** (estricto) | Añade entidades totalmente dentro del cuadro |
| **Arrastrar a la izquierda** (cruzado) | Añade entidades que intersectan el límite del cuadro |
| **Enter** / **Space** | Confirma la selección y pasa a la fase S1 |

## Después de alinear

Las entidades alineadas permanecen seleccionadas en su nueva posición, y el comando termina automáticamente — ejecuta **Align** de nuevo, o cambia a [Move](../move/), [Rotate](../rotate/) o [Scale](../scale/) sin volver a seleccionar.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Pares de puntos | 1 (solo traslación) o 2 (traslación + rotación + escala) | 1 (solo traslación) |
| Rotación | Sí, con un segundo par de puntos | No |
| Escala | Opcional, con un segundo par de puntos | No |
| Mejor para | Encajar una forma sobre otra usando puntos de referencia | Reposicionamiento simple |

## Entidades admitidas

Align funciona con todo tipo de entidad admitida por Move, Rotate y Scale — se aplican en secuencia las mismas operaciones `translate`, `rotate` y `scale` que usan esos comandos, por lo que ninguna queda excluida.
