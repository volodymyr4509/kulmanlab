---
title: Comando Array Grid — Repetir Entidades en Filas y Columnas
description: El comando Array Grid crea una cuadrícula rectangular de copias a partir de las entidades seleccionadas — escribe el número de filas, columnas y el espaciado entre ellas directamente en el terminal, sin necesidad de hacer clic en puntos.
keywords: [comando array CAD, arraygrid, array rectangular CAD, patrón de cuadrícula CAD, repetir entidades CAD, copiar array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

El comando `ArrayGrid` crea una cuadrícula rectangular de copias a partir de las entidades seleccionadas — introduce el número de filas, el número de columnas y el espaciado entre ellas, todo escrito en el terminal. La selección original ocupa la celda fila 0, columna 0; cada otra celda es una copia trasladada.

## Dos formas de iniciar

**Preseleccionar, luego array** — selecciona primero las entidades, luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `arraygrid` en el terminal (basta con `arr` — es inequívoco) o haz clic en el botón **Array Grid** de la barra de herramientas.
3. Escribe el número de **filas** y presiona **Enter**.
4. Escribe el número de **columnas** y presiona **Enter**.
5. Escribe el **espaciado entre filas** y presiona **Enter**.
6. Escribe el **espaciado entre columnas** y presiona **Enter** — la cuadrícula se crea de inmediato.

**Activar, luego seleccionar** — inicia el comando sin nada seleccionado:

1. Escribe `arraygrid` o haz clic en el botón de la barra de herramientas.
2. **Selecciona objetos** — haz clic para alternar entidades individuales, o arrastra para seleccionar por área.
3. Presiona **Enter** o **Space** para confirmar la selección.
4. Continúa con filas → columnas → espaciado de filas → espaciado de columnas como arriba.

```
  2 filas x 3 columnas:

  [B] [B] [B]   <- fila 1 (copias trasladadas)
  [A] [A] [A]   <- fila 0: selección original, copias hacia la derecha
```

> El terminal solo necesita las letras suficientes para ser inequívoco — escribir `arr` y presionar **Enter** activa Array Grid directamente, ya que ningún otro nombre de comando comienza con esas tres letras (Arc, Area, Align y Angle divergen antes).

## Filas, columnas y espaciado

| Solicitud | Acepta | Notas |
|-----------|--------|-------|
| Filas | Números enteros positivos (1, 2, 3…) | Solo dígitos — sin punto decimal ni signo |
| Columnas | Números enteros positivos (1, 2, 3…) | Solo dígitos — sin punto decimal ni signo |
| Espaciado de filas | Decimal con signo (p. ej. `10`, `-5.5`) | Distancia entre filas; negativo invierte la dirección |
| Espaciado de columnas | Decimal con signo (p. ej. `10`, `-5.5`) | Distancia entre columnas; negativo invierte la dirección |

Con 1 fila y 1 columna no se crean copias — el comando termina sin modificar el dibujo.

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Space` | Confirma la selección y avanza a la solicitud de filas |
| `0`–`9` | Introduce dígitos para filas o columnas |
| `0`–`9`, `.`, `-` | Introduce dígitos para el espaciado de filas/columnas (`-` solo como primer carácter) |
| `Backspace` | Elimina el último carácter escrito de la solicitud actual |
| `Enter` | Confirma la solicitud actual y avanza a la siguiente |
| `Escape` | Borra los valores de filas/columnas/espaciado escritos y vuelve a la fase de selección |

## Selección durante el comando

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Alterna la entidad bajo el cursor dentro/fuera de la selección |
| **Arrastra a la derecha** (estricto) | Agrega entidades completamente dentro del recuadro |
| **Arrastra a la izquierda** (cruzado) | Agrega entidades que intersectan el límite del recuadro |
| **Enter** / **Space** | Confirma la selección y avanza a la solicitud de filas |

## Después del array

Las nuevas copias se agregan al dibujo y el comando termina — la selección original se borra. Ejecuta **Array Grid** de nuevo, o inicia un nuevo comando.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Selección de puntos | Ninguna — filas, columnas y espaciado se escriben | Se hace clic (o se escribe) en el punto base y el destino |
| Copias creadas | Filas × columnas − 1 | Exactamente 1 por operación de copia |
| Disposición | Cuadrícula rectangular regular | En cualquier lugar, a cualquier desplazamiento |
| Mejor para | Repetir una unidad en un patrón regular (agujeros, baldosas, sujetadores) | Un solo duplicado en una posición arbitraria |

## Entidades compatibles

Array Grid funciona con todos los tipos de entidades. Todas las entidades implementan `translate(dx, dy)` internamente, la misma operación que usan [Copy](../copy/) y [Move](../move/), por lo que ninguna queda excluida.
