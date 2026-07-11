---
title: Comando Chamfer — Cortar una Esquina Recta Entre Dos Líneas en KulmanLab CAD
description: El comando Chamfer conecta dos entidades Line o Polyline con un corte diagonal recto. Especificas dos distancias — una a lo largo de cada entidad — y el comando recorta ambas hasta esos puntos e inserta una línea de conexión.
keywords: [comando chamfer CAD, chaflán de línea CAD, corte de esquina diagonal, bisel de esquina CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

El comando `chamfer` corta una esquina diagonal recta entre dos entidades [Line](../line/) o [Polyline](../polyline/). Especificas cuánto recortar a lo largo de cada entidad (d1 y d2), y el comando recorta ambas entidades hasta esos puntos e inserta una línea de conexión entre ellas.

Usar distancias iguales produce un corte simétrico de 45°; distancias diferentes producen un bisel asimétrico.

Chamfer funciona con entidades **Line y Polyline**.

## Usar chamfer

1. Escribe `chamfer` en el terminal o haz clic en el botón **Chamfer** de la barra de herramientas.
2. **Escribe la primera distancia de chamfer** (d1 — distancia a lo largo de la primera entidad) y presiona **Enter**.
3. **Escribe la segunda distancia de chamfer** (d2 — distancia a lo largo de la segunda entidad) y presiona **Enter**.
4. **Haz clic en la primera entidad** — la parte donde haces clic determina qué lado de cualquier intersección se mantiene.
5. **Pasa el cursor sobre la segunda entidad** — una vista previa de línea discontinua muestra el corte de chamfer resultante. Mueve el cursor hacia el lado que quieres mantener.
6. **Haz clic** para aplicar. Ambas entidades se recortan y la línea de chamfer se inserta.

```
  Antes (d1=5, d2=8):          Después:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Selección de lado

Cuando dos líneas se cruzan, el chamfer se aplica en la esquina definida por las posiciones de clic — la parte de cada entidad en el **mismo lado que el cursor** se mantiene.

- Haz clic cerca de un extremo de la primera entidad para seleccionar esa mitad.
- Mueve el cursor hacia la mitad deseada de la segunda entidad — la vista previa discontinua se actualiza en vivo.

Para Polylines, la posición del clic determina qué **segmento** de la polilínea participa, y el vértice más cercano en el lado de la intersección es el que se recorta.

## Qué crea el comando

- El extremo de la primera entidad (o vértice de polilínea) más cercano a la intersección se mueve al punto **T1**, ubicado a d1 a lo largo de la primera entidad desde la intersección.
- El extremo de la segunda entidad (o vértice de polilínea) más cercano a la intersección se mueve al punto **T2**, ubicado a d2 a lo largo de la segunda entidad desde la intersección.
- Se inserta una nueva entidad Line desde **T1** hasta **T2**.

La línea insertada hereda el grosor de línea, color, capa y tipo de línea actuales.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar dígito al valor de distancia actual |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar la distancia escrita y avanzar |
| `Escape` | Cancelar y restablecer |

## Entidades compatibles

| Entidad | Compatible |
|---------|------------|
| Line | Sí |
| Polyline / Rectangle | Sí |
| Arc, Circle, Ellipse | No |
| Text, Spline, Dimension, Leader | No |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Tipo de esquina | Corte recto | Arco redondeado |
| Entrada | Dos distancias (d1, d2) | Un radio |
| Entidad insertada | Line | Arc |
| Entidades compatibles | Lines y Polylines | Solo Lines |
