---
sidebar_position: 9
title: Comando Spline Fit — Desenhar Splines Interpoladoras Através de Pontos Clicados no KulmanLab CAD
description: O comando Spline Fit desenha uma spline cúbica que passa exatamente por cada ponto clicado. Internamente a curva é armazenada com pontos de ajuste e vértices de controle calculados. Arrastar um grip de ponto de ajuste re-interpola a curva inteira. Round-trip DXF completo como entidades SPLINE.
keywords: [CAD comando spline fit, spline interpoladora CAD, spline por pontos, desenhar curva suave CAD, SPLINE DXF pontos ajuste, edição grip spline, kulmanlab]
---

# Spline Fit

O comando `splinefit` desenha uma spline cúbica que passa por cada ponto clicado — uma curva interpoladora. Diferentemente de [Spline CV](./spline-cv), onde a curva é apenas atraída pelos vértices de controle, aqui a curva é forçada a tocar cada coordenada clicada exatamente. Internamente o editor ajusta vértices de controle para conseguir isso, e esses CVs são armazenados junto com os pontos de ajuste no arquivo DXF.

## Desenhando uma spline por pontos de ajuste

1. Digite `splinefit` no terminal ou clique no botão **Spline Fit** na barra de ferramentas.
2. **Clique para posicionar pontos de ajuste** — a curva passará por cada um. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. Pressione **Enter** para terminar (mínimo 2 pontos necessários).

```
  ●──────●──────●──────●  ← a curva passa exatamente por cada clique
  p1     p2     p3     p4
```

A prévia ao vivo mostra a curva interpolada atual enquanto você move o cursor, incluindo o próximo ponto prospectivo na posição do cursor. Pressione **Escape** para descartar todos os pontos posicionados e sair.

## Entrada de coordenadas

Em vez de clicar, digite uma posição exata para qualquer ponto de ajuste:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o ponto de ajuste.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X |
| `,` | Bloqueia X e move para entrada Y |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada digitada, ou termina a spline se nenhuma entrada está em andamento e ≥ 2 pontos existem |
| `Escape` | Descarta todos os pontos e sai |

## Edição com grips — remodelando via pontos de ajuste

Uma spline fit selecionada expõe um grip por ponto de ajuste:

| Grip | Posição | O que faz |
|------|---------|----------|
| **Ponto de ajuste** | Em cada posição clicada | Arraste para mover esse ponto — a curva inteira se re-interpola para passar pela nova posição |

Arrastar um grip re-ajusta a curva inteira, não apenas os segmentos adjacentes. Isso difere da edição de grips de polilinha, onde mover um vértice apenas remoldela os dois segmentos adjacentes.

Não há um grip "mover toda a spline". Para transladar a spline inteira, use o comando [Move](./move).

## Comandos de edição suportados

| Comando | O que acontece com a spline |
|---------|---------------------------|
| [Move](./move) | Translada todos os pontos de ajuste e CVs recalculados pelo mesmo deslocamento |
| [Copy](./copy) | Cria uma spline idêntica em uma nova posição |
| [Rotate](./rotate) | Rotaciona todos os pontos de ajuste ao redor do ponto base escolhido |
| [Mirror](./mirror) | Reflete todos os pontos de ajuste em relação ao eixo espelho |
| [Scale](./scale) | Escala todos os pontos de ajuste uniformemente a partir do ponto base |
| [Delete](./delete) | Remove a spline |

Splines não suportam **Offset**, **Trim** ou **Extend**.

## Spline Fit vs Spline CV — qual usar

| | Spline Fit | Spline CV |
|---|------------|-----------|
| A curva passa pelos pontos | Cada ponto clicado exatamente | Apenas primeiro e último (fixados) |
| Efeito da edição de grip | Ponto de ajuste move → curva inteira re-interpolada | CV move → curva atraída para nova posição |
| Previsibilidade da forma | Alta — a curva segue os cliques | Menor — a curva atrasa os CVs |
| Ideal para | Curvas que devem atingir coordenadas específicas | Curvas estéticas suaves, caminhos de forma livre |

## DXF — entidade SPLINE (forma de pontos de ajuste)

Splines fit são salvas como entidades `SPLINE` no arquivo DXF, armazenando tanto as coordenadas dos pontos de ajuste quanto os vértices de controle calculados. O `splineFlag` é definido como `8` (spline de ponto de ajuste) para que uma aplicação de recarregamento saiba qual conjunto de pontos exibir como grips editáveis. Todas as propriedades — cor, camada, tipo de linha, escala do tipo de linha e espessura — fazem round-trip sem perda.
