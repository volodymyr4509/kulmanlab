---
title: Comando Fillet — Redondear una Esquina Entre Dos Líneas
description: El comando Fillet conecta dos entidades Line con un arco tangente de un radio especificado, recortando cada línea hasta el punto de tangencia. Una vista previa de arco discontinuo ayuda a elegir la esquina correcta antes de hacer clic.
keywords: [comando fillet CAD, redondear esquina CAD, arco de filete, arco tangente dos líneas, kulmanlab]
group: edit
order: 11
---

# Fillet

El comando `fillet` redondea la esquina entre dos entidades [Line](../line/) insertando un arco tangente de un radio dado y recortando cada línea hasta el punto donde comienza el arco. El resultado es una esquina suave con radio que conecta ambas líneas.

Fillet funciona **solo con entidades Line**.

## Usar fillet

1. Escribe `fillet` en el terminal o haz clic en el botón **Fillet** de la barra de herramientas.
2. **Escribe el radio del filete** y presiona **Enter**.
3. **Haz clic en la primera línea** — la parte donde haces clic determina qué lado de cualquier intersección se mantiene.
4. **Pasa el cursor sobre la segunda línea** — una vista previa de arco discontinuo muestra el filete resultante. Mueve el cursor hacia el lado que quieres mantener.
5. **Haz clic** para aplicar. Ambas líneas se recortan y el arco se inserta.

```
  Antes:                      Después del filete (radio r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Selección de lado para líneas que se intersectan

Cuando dos líneas se cruzan, el filete se aplica en la esquina definida por las posiciones de clic — la parte de cada línea en el **mismo lado que el cursor** se mantiene.

- Haz clic cerca de un extremo de la primera línea para seleccionar esa mitad.
- Mueve el cursor hacia la mitad deseada de la segunda línea — la vista previa discontinua se actualiza en vivo.

## Qué crea el comando

- El extremo de la primera línea más cercano a la intersección se mueve al punto de tangencia **T1**.
- El extremo de la segunda línea más cercano a la intersección se mueve al punto de tangencia **T2**.
- Se inserta una nueva entidad Arc desde **T1** hasta **T2**, tangente a ambas líneas.

El arco insertado hereda el grosor de línea, color, capa y tipo de línea actuales.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar dígito al valor del radio |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar el radio escrito y pasar a la selección de línea |
| `Escape` | Cancelar y restablecer |

## Entidades compatibles

| Entidad | Compatible |
|---------|------------|
| Line | Sí — tanto como primera como segunda entidad |
| Arc, Circle, Ellipse, Polyline | No |
| Text, Spline, Dimension, Leader | No |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipo de esquina | Arco redondeado | Corte recto |
| Entrada | Un radio | Dos distancias (d1, d2) |
| Entidad insertada | Arc | Line |
| Entidades compatibles | Solo Lines | Lines y Polylines |
