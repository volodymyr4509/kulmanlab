---
title: Comando Fillet — Redondear una Esquina con un Arco Tangente
description: El comando Fillet redondea una esquina entre dos segmentos Line, Arc o Polyline con un arco tangente de un radio especificado. Redondear la propia esquina de una polilínea inserta el arco directamente en ella; redondear a través de una polilínea abierta fusiona ambos lados en una nueva polilínea.
keywords: [comando fillet CAD, redondear esquina CAD, arco de filete, arco tangente, filete de polilínea, filete de arco, kulmanlab]
group: edit
order: 11
---

# Fillet

El comando `Empalme` redondea una esquina entre dos segmentos [Line](../line/), [Arc](../arc/) o [Polyline](../polyline/) insertando un arco tangente de un radio dado, recortando (o fusionando) las entidades elegidas hasta ese punto.

Fillet funciona con entidades **Line, Arc y Polyline** — incluyendo los segmentos rectos o de arco de una polilínea.

## Usar fillet

1. Escribe `Empalme` en el terminal o haz clic en el botón **Fillet** de la barra de herramientas.
2. **Escribe el radio del filete** y presiona **Enter**.
3. **Haz clic en la primera línea, arco o segmento de polilínea** — la parte donde haces clic determina qué lado de cualquier intersección se mantiene.
4. **Pasa el cursor sobre la segunda entidad** — una vista previa de arco discontinuo muestra el filete resultante. Mueve el cursor hacia el lado que quieres mantener.
5. **Haz clic** para aplicar.

```
  Antes:                      Después del filete (radio r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Selección de lado para entidades que se intersectan

Cuando dos entidades se cruzan, el filete se aplica en la esquina definida por las posiciones de clic — la parte de cada entidad en el **mismo lado que el cursor** se mantiene.

- Haz clic cerca de un extremo de la primera entidad para seleccionar esa mitad.
- Mueve el cursor hacia la mitad deseada de la segunda entidad — la vista previa discontinua se actualiza en vivo.

## Qué crea el comando

Lo que resulta depende de lo que hayas elegido:

- **Dos Lines/Arcs independientes**, o cualquier par que no involucre una polilínea abierta: ambos se recortan hasta los puntos de tangencia **T1**/**T2**, y se inserta una nueva entidad Arc entre ellos.
- **Dos segmentos de la misma polilínea que comparten un vértice de esquina**: ninguna entidad nueva — el filete pasa a formar parte de la propia polilínea. El vértice de la esquina se reemplaza por los dos puntos de tangencia, y el arco entre ellos se almacena como el bulge de esa arista, exactamente como una esquina de polilínea redondeada hace el viaje de ida y vuelta a través de DXF.
- **Cualquier otro caso que involucre una polilínea abierta** — dos polilíneas abiertas distintas, o una polilínea abierta y una Line/Arc independiente: ambas se fusionan en una **sola polilínea nueva**, conservando cada lado hasta su punto de tangencia y uniéndolas con el arco de filete como un segmento de bulge adicional, reemplazando las entidades originales.

El arco insertado o extendido hereda el grosor de línea, color, capa y tipo de línea actuales (o los de la propia polilínea, cuando pasa a formar parte de ella).

## Esquinas sin un ángulo real que redondear

Si los dos segmentos elegidos ya se encuentran tangencialmente en un vértice compartido — una esquina de polilínea recta, o una línea que se prolonga suavemente en un segmento de arco de continuación tangencial — no hay una esquina real que un círculo pueda redondear. Fillet detecta esto y se niega con `cannot fillet: no tangent circle fits there` en lugar de trazar un bucle no deseado.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar dígito al valor del radio |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` / `Espacio` | Confirmar el radio escrito y pasar a la selección de entidad |
| `Escape` | Cancelar y restablecer |

## Entidades compatibles

| Entidad | Compatible |
|---------|------------|
| Line | Sí |
| Arc | Sí |
| Polyline (segmento recto o de arco) | Sí |
| Circle, Ellipse | No |
| Text, Spline, Dimension, Leader | No |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipo de esquina | Arco redondeado | Corte recto |
| Entrada | Un radio | Dos distancias (d1, d2) |
| Entidad insertada | Arc | Line |
| Entidades compatibles | Lines, Arcs y Polylines (segmentos rectos o de arco) | Lines y Polylines (solo segmentos rectos) |
