---
title: Comando Copy — Duplicar Entidades en una Nueva Posición en KulmanLab CAD
description: El comando Copy crea duplicados trasladados de las entidades seleccionadas dejando los originales en su lugar. Admite preselección, bloqueo de ángulo y entrada de distancia exacta. Las copias se colocan y el comando termina; los originales permanecen sin cambios.
keywords: [comando copy CAD, duplicar entidades CAD, copiar objetos CAD, clonar geometría CAD, bloqueo de ángulo copy, distancia exacta copy, kulmanlab]
group: edit
order: 2
---

# Copy

El comando `copy` crea duplicados trasladados de las entidades seleccionadas y los coloca desplazados desde un punto base hasta un destino — los originales permanecen exactamente donde están. Esta es la diferencia clave con [Move](../move/): Copy agrega nuevas entidades al dibujo; Move reubica las existentes.

## Dos formas de iniciar

**Preseleccionar, luego copiar** — selecciona primero las entidades, luego activa:

1. Selecciona una o más entidades en el lienzo.
2. Escribe `copy` en el terminal o haz clic en el botón **Copy** de la barra de herramientas.
3. **Haz clic en el punto base**, o escribe `X,Y` y presiona **Enter** para una coordenada exacta.
4. **Haz clic en el destino** — los duplicados aparecen en el desplazamiento base→destino. La entrada de coordenadas también funciona aquí.

**Activar, luego seleccionar** — inicia el comando sin nada seleccionado:

1. Escribe `copy` o haz clic en el botón de la barra de herramientas.
2. **Selecciona objetos** — haz clic para alternar entidades individuales, o arrastra para seleccionar por área.
3. Presiona **Enter** o **Space** para confirmar la selección.
4. **Haz clic en el punto base**, luego **haz clic en el destino** (la entrada de coordenadas está disponible en ambos pasos).

```
  Antes:                Después:
  [entidad A]           [entidad A]  ← originales sin tocar
  [entidad B]           [entidad B]
                        [copia de A] ← nuevas entidades
                        [copia de B]
```

Una vista previa fantasma de las copias sigue el cursor desde el punto base hasta el destino.

## Entrada de coordenadas

En el paso de punto base o destino, escribe una posición exacta en lugar de hacer clic:

1. Escribe el valor X.
2. Presiona `,` — el terminal muestra `[X], [Y{cursor}]`.
3. Escribe el valor Y.
4. Presiona **Enter** para confirmar.

## Bloqueo de ángulo y distancia exacta

Después de establecer el punto base, el comando se ajusta a ejes de 45° (0°, 45°, 90°, 135°, …) cuando el cursor está lo suficientemente lejos y cerca del eje. Mientras está bloqueado, escribe una distancia y presiona **Enter** para colocar las copias exactamente en ese desplazamiento.

| Tecla | Acción |
|-------|--------|
| `0`–`9`, `.` | Agregar al valor de distancia |
| `-` | Distancia negativa — invierte la dirección a lo largo del eje (solo primer carácter) |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Colocar copias a la distancia escrita |

## Referencia de teclado

| Tecla | Acción |
|-------|--------|
| `Enter` / `Space` | Confirmar selección y avanzar a la fase de punto base |
| `0`–`9`, `.`, `-` | Iniciar entrada de coordenada X, o distancia cuando el ángulo está bloqueado |
| `,` | Bloquear X y pasar a la entrada Y |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` | Confirmar coordenada o aplicar copia a la distancia escrita |
| `Escape` | Cancelar y restablecer |

## Selección durante el comando

| Método | Comportamiento |
|--------|---------------|
| **Clic** | Alterna la entidad bajo el cursor dentro/fuera de la selección |
| **Arrastra a la derecha** (estricto) | Agrega entidades completamente dentro del recuadro |
| **Arrastra a la izquierda** (cruzado) | Agrega entidades que intersectan el límite del recuadro |
| **Enter** / **Space** | Confirma la selección |

## Después de copiar

Los **originales permanecen seleccionados** — las nuevas copias se agregan al dibujo, pero la selección se borra y el comando termina. Para trabajar con las copias inmediatamente, vuelve a ejecutar Copy en la selección o inicia un nuevo comando.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originales | Permanecen en su lugar | Se eliminan de la posición original |
| Número de entidades | Aumenta con las entidades copiadas | Sin cambios |
| Después de la operación | Originales aún seleccionados | Entidades movidas seleccionadas en la nueva posición |
| Mejor para | Repetir geometría, composiciones simétricas | Reposicionar geometría |

## Entidades compatibles

Copy funciona con todos los tipos de entidades. Todas las entidades implementan `translate(dx, dy)` internamente, por lo que ninguna queda excluida.
