---
title: Spline CV — Desenhar B-Splines Posicionando Vértices de Controle
description: O comando Spline CV desenha uma B-spline cúbica posicionando vértices de controle. A curva é atraída pelos vértices mas passa apenas pelo primeiro e último (nós fixados). Cada grip CV pode ser arrastado para remodelar a curva após o posicionamento. Round-trip DXF completo como entidades SPLINE.
keywords: [CAD comando spline, B-spline vértices controle, spline fixada CAD, desenhar spline CAD, entidade SPLINE DXF, edição grip spline, kulmanlab]
group: shapes
order: 8
---

# Spline CV

O comando `splinecv` desenha uma **B-spline cúbica** posicionando vértices de controle (CVs). A curva resultante é atraída por cada CV mas não passa através deles — exceto no primeiro e último vértice, onde **nós fixados** ancoram a curva exatamente. Isso dá controle intuitivo da forma: puxe um vértice para empurrar a curva em direção a ele sem forçá-la a tocar cada ponto.

## Desenhando uma spline por vértices de controle

1. Digite `splinecv` no terminal ou clique no botão **Spline CV** na barra de ferramentas.
2. **Clique para posicionar vértices de controle** — cada clique adiciona um vértice. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. Pressione **Enter** para terminar (mínimo 2 vértices necessários).

```
  CV ●         ● CV
      \       /
       \     /    ← curva atraída pelos CVs
        \   /         mas não passando por eles
  CV ●   ●   ● CV (início/fim: a curva toca aqui)
```

A prévia ao vivo atualiza enquanto você move o cursor após cada vértice, mostrando como a spline ficará com o próximo ponto na posição do cursor. Pressione **Escape** para descartar todos os vértices posicionados e sair.

## Entrada de coordenadas

Em vez de clicar, digite uma posição exata para qualquer vértice de controle:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o vértice.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X |
| `,` | Bloqueia X e move para entrada Y |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada digitada, ou termina a spline se nenhuma entrada está em andamento e ≥ 2 vértices existem |
| `Escape` | Descarta todos os vértices e sai |

## Edição com grips — remodelando via vértices de controle

Uma spline CV selecionada expõe um grip por vértice de controle:

| Grip | Posição | O que faz |
|------|---------|----------|
| **Vértice de controle** | Em cada posição CV | Arraste para mover esse CV — a curva remoldela em direção à nova posição |

Não há um grip "mover toda a spline". Para transladar a spline inteira, use o comando [Move](../move/).

## Comandos de edição suportados

| Comando | O que acontece com a spline |
|---------|---------------------------|
| [Move](../move/) | Translada todos os vértices de controle pelo mesmo deslocamento |
| [Copy](../copy/) | Cria uma spline idêntica em uma nova posição |
| [Rotate](../rotate/) | Rotaciona todos os CVs ao redor do ponto base escolhido |
| [Mirror](../mirror/) | Reflete todos os CVs em relação ao eixo espelho |
| [Scale](../scale/) | Escala todos os CVs uniformemente a partir do ponto base |
| [Delete](../delete/) | Remove a spline |

Splines não suportam **Offset**, **Trim** ou **Extend**.

## Spline CV vs Spline Fit — qual usar

| | Spline CV | Spline Fit |
|---|-----------|------------|
| A curva passa pelos pontos | Apenas primeiro e último (fixados) | Cada ponto clicado exatamente |
| Controle de forma | Puxe CVs em direção a uma região | Mova pontos de ajuste que a curva deve tocar |
| Efeito da edição de grip | CV move → curva atraída | Ponto de ajuste move → curva re-interpolada |
| Ideal para | Curvas estéticas suaves, caminhos de forma livre | Curvas que devem atingir coordenadas específicas |

## DXF — entidade SPLINE (forma de vértices de controle)

Splines CV são salvas como entidades `SPLINE` no arquivo DXF, armazenando o grau, o vetor de nós e todas as coordenadas dos vértices de controle. Todas as propriedades — cor, camada, tipo de linha, escala do tipo de linha e espessura — fazem round-trip sem perda. O `splineFlag` é definido como `9` (spline CV) para que a forma seja preservada ao recarregar. Qualquer aplicação DXF que suporte entidades `SPLINE` com dados CV as lê corretamente.
