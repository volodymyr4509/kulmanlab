---
title: Comando offset — Crear copias paralelas a una distancia fija
description: El comando offset crea una copia paralela de una Line, Circle, Arc, Ellipse o Polyline a una distancia escrita. La distancia se introduce una vez y se reutiliza para múltiples desplazamientos. Un clic lateral determina en qué dirección aparece la copia. Se admiten cinco tipos de entidad.
keywords: [comando offset CAD, copia paralela CAD, desplazar línea CAD, desplazar círculo CAD, desplazar polilínea CAD, desplazamiento concéntrico, kulmanlab]
group: edit
order: 10
---

# Offset

El comando `offset` crea una copia paralela de una entidad a una distancia perpendicular fija. Escribe la distancia una vez, luego haz clic en las entidades y elige un lado — el comando permanece listo a la misma distancia para que puedas desplazar múltiples objetos en una sola sesión.

Tipos de entidad admitidos: **Line, Circle, Arc, Ellipse, Polyline** (incluidos los rectángulos).

## Usar offset

1. Escribe `offset` en el terminal o haz clic en el botón **Offset** de la barra de herramientas.
2. **Escribe la distancia de desplazamiento** y presiona **Enter** o **Space**.
3. **Haz clic en una entidad** para desplazar — si la entidad no es de un tipo admitido, aparece un mensaje de error y puedes hacer clic en una entidad diferente.
4. **Mueve el cursor** al lado donde debe aparecer la copia — una vista previa en tiempo real la sigue.
5. **Haz clic** para colocar la copia desplazada.

Después de cada colocación, el comando vuelve al paso 3 con la **misma distancia**, listo para el siguiente desplazamiento. Presiona **Escape** para restablecer de vuelta al paso de entrada de distancia.

```
  Distancia: 10

  ─────────────────    ← línea original
  ─────────────────    ← copia desplazada (10 unidades abajo)
```

## Comportamiento de desplazamiento por entidad

| Entidad | Cómo se calcula el desplazamiento |
|--------|---------------------------|
| **Line** | Línea paralela desplazada perpendicularmente a la dirección original |
| **Circle** | Círculo concéntrico; clic fuera → radio mayor, dentro → radio menor |
| **Arc** | Arco concéntrico a un nuevo radio; mismo arco angular conservado |
| **Ellipse** | Ambos semiejes aumentados o reducidos por la misma distancia |
| **Polyline** | Cada segmento desplazado independientemente; los segmentos desplazados adyacentes se ensamblan en las esquinas |

Para **Circle**, **Arc** y **Ellipse**: si el desplazamiento hacia adentro reduciría cualquier radio o semieje a cero o menos, el desplazamiento no se aplica.

## Referencia de teclado

| Tecla | Acción |
|-----|--------|
| `0`–`9`, `.` | Añadir dígito al valor de distancia |
| `Backspace` | Eliminar el último carácter escrito |
| `Enter` / `Space` | Confirmar la distancia escrita y avanzar a la selección de entidad |
| `Escape` | Restablecer al paso de entrada de distancia |

## Nota sobre el flujo de trabajo

La distancia permanece establecida hasta que presionas **Escape**. Esto hace que sea eficiente desplazar muchas entidades al mismo espaciado — escribe la distancia una vez, luego haz clic y elige el lado para cada entidad sucesivamente.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Desplazamiento | Perpendicular a la geometría de la entidad | Vector arbitrario (base → destino) |
| Entidades admitidas | Line, Circle, Arc, Ellipse, Polyline | Todos los tipos de entidad |
| Entrada de distancia | Escrita antes de seleccionar la entidad | Escrita o haciendo clic después de seleccionar |
| Mejor para | Líneas paralelas, círculos concéntricos, trayectorias de contorno interior/exterior | Colocar duplicados en posiciones arbitrarias |
