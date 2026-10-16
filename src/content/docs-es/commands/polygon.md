---
title: "Comando Polygon — dibujar polígonos regulares desde el centro o un lado en KulmanLab CAD"
description: "El comando Polygon dibuja un polígono regular de 3 a 1024 lados a partir de su centro y un radio, o de un lado. El resultado es una LWPOLYLINE cerrada, por lo que se aplican todos los comandos de edición de polilíneas."
keywords: ["comando polígono CAD", "dibujar polígono regular CAD", "hexágono octógono pentágono CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

El comando `Polígono` dibuja un polígono regular — todos los lados y ángulos iguales — de 3 a 1024 lados. Escribe `Polígono` en el terminal. El resultado es una **`LWPOLYLINE` cerrada**, por lo que, una vez colocada, se comporta como cualquier otra [Polyline](../polyline/) y se aplican todas las ediciones de polilínea.

## Dibujar un polígono

1. Escribe `Polígono` en el terminal e introduce el **número de lados** — un entero de 3 a 1024 — y pulsa **Enter** o **Space**. La solicitud viene rellenada con la última cantidad usada (4 la primera vez); empieza a escribir para reemplazarla. Cualquier otra cosa se rechaza y permanece en la solicitud para corregirla.
2. **Haz clic en el centro**, o escribe `X,Y` y pulsa **Enter** para una coordenada exacta. Pulsa `E` antes para partir de un lado (ver abajo).
3. **Haz clic en el radio** — el polígono se previsualiza en vivo — o escribe el radio y pulsa **Enter** o **Space**.
4. El polígono se coloca y el comando termina.

## Opciones

| Opción | Tecla | Efecto |
|---|---|---|
| Edge | `E` | El primer punto pasa a ser un extremo de un lado en vez del centro. Elige el segundo extremo; los demás vértices se construyen en sentido antihorario, a la izquierda del lado del primer extremo al segundo. Pulsa `E` otra vez para volver al centro. |
| Inside | `I` | Activada por defecto y conservada de un polígono al siguiente. Activada: los vértices están sobre la circunferencia del radio dado. Desactivada: el polígono queda fuera de esa circunferencia, con el punto medio de cada lado sobre ella. |

- Un clic coloca un vértice (Inside activada) o el punto medio de un lado (Inside desactivada) justo donde está el cursor, así que el cursor también fija la orientación.
- Un radio escrito no tiene hacia dónde apuntar, así que el polígono queda con su lado más bajo horizontal — salvo que el bloqueo de ángulo esté activo, en cuyo caso sigue el ángulo bloqueado.
- Cada opción se ofrece en su propio paso y puede cambiarse incluso mientras se escribe un número.

## Referencia de teclado

| Tecla | Acción |
|---|---|
| `0`–`9`, `.` | Escribir el número de lados, el radio, una coordenada o una longitud |
| `E` | Activar o desactivar Edge (paso del primer punto) |
| `I` | Activar o desactivar Inside (paso del radio) |
| `Enter` / `Space` | Confirmar el número de lados o el radio |
| `Escape` | Cancelar |

## DXF — entidad LWPOLYLINE

Un polígono se guarda como una `LWPOLYLINE` cerrada con un vértice por esquina; DXF no tiene un tipo de polígono propio. Todas las propiedades — coordenadas de vértices, color, capa, tipo de línea, escala del tipo de línea y grosor — se conservan sin pérdida, y cualquier visor DXF lo lee como una polilínea cerrada.
