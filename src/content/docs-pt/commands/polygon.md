---
title: "Comando Polygon — desenhar polígonos regulares a partir do centro ou de um lado no KulmanLab CAD"
description: "O comando Polygon desenha um polígono regular de 3 a 1024 lados a partir do centro e de um raio, ou de um lado. O resultado é uma LWPOLYLINE fechada, portanto todos os comandos de edição de polilinha se aplicam."
keywords: ["comando polígono CAD", "desenhar polígono regular CAD", "hexágono octógono pentágono CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

O comando `Polígono` desenha um polígono regular — todos os lados e ângulos iguais — de 3 a 1024 lados. Digite `Polígono` no terminal. O resultado é uma **`LWPOLYLINE` fechada**, portanto, depois de colocada, comporta-se como qualquer outra [Polyline](../polyline/) e todas as edições de polilinha se aplicam.

## Desenhar um polígono

1. Digite `Polígono` no terminal e informe o **número de lados** — um inteiro de 3 a 1024 — e pressione **Enter** ou **Space**. O prompt vem preenchido com o último número usado (4 na primeira vez); comece a digitar para substituí-lo. Qualquer outra coisa é recusada e permanece no prompt para correção.
2. **Clique no centro**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata. Pressione `E` antes para partir de um lado (veja abaixo).
3. **Clique no raio** — o polígono é pré-visualizado ao vivo — ou digite o raio e pressione **Enter** ou **Space**.
4. O polígono é colocado e o comando termina.

## Opções

| Opção | Tecla | Efeito |
|---|---|---|
| Edge | `E` | O primeiro ponto passa a ser uma extremidade de um lado, em vez do centro. Escolha a segunda extremidade; os demais vértices são construídos no sentido anti-horário, à esquerda do lado da primeira para a segunda extremidade. Pressione `E` de novo para voltar ao centro. |
| Inside | `I` | Ativada por padrão e mantida de um polígono para o seguinte. Ativada: os vértices ficam sobre a circunferência do raio dado. Desativada: o polígono fica fora dessa circunferência, com o ponto médio de cada lado sobre ela. |

- Um clique coloca um vértice (Inside ativada) ou o ponto médio de um lado (Inside desativada) exatamente onde está o cursor, então o cursor também define a orientação.
- Um raio digitado não tem direção para mirar, então o polígono fica com o lado mais baixo na horizontal — a menos que o bloqueio de ângulo esteja ativo, caso em que segue o ângulo bloqueado.
- Cada opção é oferecida no seu próprio passo e pode ser alternada mesmo enquanto um número é digitado.

## Referência de teclado

| Tecla | Ação |
|---|---|
| `0`–`9`, `.` | Digitar o número de lados, o raio, uma coordenada ou um comprimento |
| `E` | Ativar ou desativar Edge (passo do primeiro ponto) |
| `I` | Ativar ou desativar Inside (passo do raio) |
| `Enter` / `Space` | Confirmar o número de lados ou o raio |
| `Escape` | Cancelar |

## DXF — entidade LWPOLYLINE

Um polígono é salvo como uma `LWPOLYLINE` fechada com um vértice por canto; o DXF não tem um tipo de polígono dedicado. Todas as propriedades — coordenadas dos vértices, cor, layer, tipo de linha, escala do tipo de linha e espessura — passam sem perdas, e qualquer visualizador DXF o lê como uma polilinha fechada.
