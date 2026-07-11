---
title: Grade e Snap — Alinhar Desenhos a uma Grade Regular no KulmanLab CAD
description: Os botões Grade e Snap na barra de controle do KulmanLab CAD sobrepõem uma grade de referência no canvas e travam o cursor nos pontos da grade. O espaçamento da grade se adapta automaticamente ao nível de zoom atual para sempre mostrar valores de modelo arredondados.
keywords: [CAD grade, snap à grade, espaçamento grade, auxílios de desenho, kulmanlab, pontos grade, snap ortogonal]
group: interface
order: 1
---

# Grade e Snap

Dois botões de alternância na barra de controle permitem sobrepor uma grade de referência e travar o cursor em suas interseções durante o desenho.

| Botão | O que faz |
|-------|-----------|
| **Grade** | Mostra uma grade visual de pontos ou linhas no canvas |
| **Snap** | Trava o cursor no ponto da grade mais próximo quando nenhum snap geométrico está mais próximo |

Os dois botões são independentes — você pode mostrar a grade sem snap, fazer snap sem mostrar a grade, ou usar ambos juntos.

## Ativando grade e snap

Clique em **Grade** ou **Snap** na barra de controle. O estado ativo fica destacado. As configurações persistem entre sessões.

Quando o **Snap** está ativo, a grade muda automaticamente sua exibição de linhas para **pontos** — os pontos marcam os pontos exatos aos quais o cursor vai encaixar.

## Espaçamento adaptativo da grade

O espaçamento da grade se ajusta automaticamente enquanto você dá zoom para que as linhas da grade estejam sempre a uma distância confortável na tela (~40 px). O passo é sempre um número "redondo" — um múltiplo de 1, 2 ou 5 em qualquer potência de dez:

| Exemplo de zoom / escala de modelo | Passo da grade |
|------------------------------------|---------------|
| Zoom reduzido (área grande) | 100, 500, 1000 … |
| Zoom médio | 10, 20, 50 … |
| Zoom ampliado (detalhe fino) | 1, 2, 5 … |
| Muito próximo | 0,1, 0,2, 0,5 … |

Isso significa que cada ponto de snap cai em uma coordenada redonda no espaço de modelo — nenhum offset de ponto flutuante se acumula.

## Prioridade do snap

**Snaps de endpoint e interseção sempre têm prioridade sobre a grade.** O cursor encaixa em um ponto da grade apenas quando não está próximo a nenhum candidato de snap geométrico (endpoint, ponto médio, centro ou interseção).

Isso significa que você pode desenhar com snap à grade ativo e ainda encaixar precisamente na geometria existente quando o cursor passa próximo o suficiente. A grade é um fallback, não um substituto.

## Modo layout

- **Espaço de modelo** — pontos ou linhas preenchem toda a área do canvas visível.
- **Espaço de layout (papel)** — os pontos são recortados ao retângulo de papel e não se estendem para fora.
- **Dentro de uma viewport** — a grade segue o sistema de coordenadas do modelo na escala da viewport, então os pontos se alinham às mesmas unidades de modelo independentemente da ampliação da viewport.

## Fluxo de trabalho típico

1. Ative **Grade** e **Snap** antes de iniciar um desenho que requer espaçamento regular.
2. Dê zoom ao nível onde o passo da grade corresponde ao incremento desejado (ex.: dê zoom até que os pontos estejam a 10 unidades de distância).
3. Desenhe — o cursor encaixa nos pontos da grade automaticamente. A geometria existente ainda encaixa normalmente quando você está próximo o suficiente.
4. Desligue o **Snap** quando precisar de movimento livre do cursor ou quiser encaixar apenas na geometria.
