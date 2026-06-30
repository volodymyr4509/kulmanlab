---
sidebar_position: 13
title: Comando Dimension Linear — Cotas Horizontais e Verticais no KulmanLab CAD
description: O comando Dimension Linear mede a distância horizontal ou vertical entre dois pontos. A linha de cota é sempre alinhada ao eixo — pressione H ou V para bloquear a orientação, ou deixe a posição do cursor decidir automaticamente. Compatibilidade DXF completa como entidades DIMENSION.
keywords: [CAD cota linear, cota horizontal CAD, cota vertical CAD, dimlinear, bloqueio orientação H V, deslocamento cota, kulmanlab]
---

# Dimension Linear

O comando `dimlinear` posiciona uma cota horizontal ou vertical entre duas origens de linhas de extensão. A linha de cota sempre corre perfeitamente horizontal ou vertical — não pode ser posicionada em ângulo arbitrário. Use [Dimension Aligned](./dim-aligned) quando precisar de uma cota paralela a uma linha diagonal.

## Anatomia de uma cota linear

```
  |←————— 5.00 —————→|
  |                   |
  ●  (linha extensão 1)     ●  (linha extensão 2)
  p1                  p2
```

- **Linhas de extensão** — descem de cada ponto medido perpendiculares à linha de cota.
- **Linha de cota** — horizontal (mede distância X) ou vertical (mede distância Y).
- **Valor** — a distância projetada ao longo do eixo escolhido, não a distância real ponto a ponto.

## Posicionamento de uma cota linear

1. Digite `dimlinear` no terminal ou clique no botão **Dimension Linear** na barra de ferramentas.
2. **Clique na primeira origem da linha de extensão** (p1), ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique na segunda origem da linha de extensão** (p2). A entrada de coordenadas também funciona aqui.
4. **Mova o cursor** para posicionar a linha de cota. A orientação é detectada automaticamente pela posição do cursor.
5. **Clique** para posicionar, ou digite uma distância de deslocamento e pressione **Enter** para posicionamento preciso.

## Detecção automática de orientação

Quando nenhuma orientação é forçada, o comando lê a posição do cursor em relação aos dois pontos medidos:

| Posição do cursor | Orientação detectada | O que é medido |
|-------------------|---------------------|----------------|
| Acima ou abaixo dos pontos | Horizontal | Δ X entre p1 e p2 |
| À esquerda ou direita dos pontos | Vertical | Δ Y entre p1 e p2 |

Pressione **H** para bloquear horizontal ou **V** para bloquear vertical a qualquer momento durante a fase de posicionamento. Uma vez bloqueada, a orientação não muda enquanto você move o cursor.

## Distância de deslocamento digitada

Digite um número durante o posicionamento para fixar a linha de cota a uma distância exata dos pontos medidos:

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta dígito à distância de deslocamento |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` / `Espaço` | Posiciona na distância digitada |

O lado do cursor (acima/abaixo para horizontal, esquerda/direita para vertical) determina o sinal — a linha de cota aparece no lado onde o cursor está atualmente.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X (fases p1/p2), ou distância de deslocamento (fase posicionamento) |
| `,` | Bloqueia X e passa para entrada Y (fases p1/p2) |
| `H` | Bloqueia orientação horizontal (apenas fase posicionamento) |
| `V` | Bloqueia orientação vertical (apenas fase posicionamento) |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` / `Espaço` | Confirma coordenada ou deslocamento digitado |
| `Escape` | Cancela |

## Dimension Linear vs Dimension Aligned

| | Dimension Linear | Dimension Aligned |
|---|-----------------|------------------|
| Eixo | Sempre H ou V | Paralelo à linha medida |
| Mede | Apenas componente X ou Y | Distância euclidiana real |
| Teclas H/V | Sim — bloqueia orientação | Não — segue sempre p1→p2 |
| Ideal para | Layouts ortogonais, plantas baixas | Elementos diagonais, cortes angulados |

## Editar a etiqueta — simple mode

**Duplo clique** numa cota linear posicionada para abrir o editor de texto em **simple** mode. O editor é pré-preenchido com o valor renderizado atual para que você possa posicionar o cursor e editá-lo diretamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Aplica-se à **etiqueta inteira** de uma vez |
| Formatação por caractere | Não suportada |
| `Enter` | Confirma o valor e fecha o editor |
| Multi-linha | Não suportado |

Consulte [Editor de Texto — simple mode](../interface/text-editor#simple-mode) para a referência completa.

## Encadeamento de cotas

Para adicionar mais cotas continuando da última linha de extensão, use [Dimension Continue](./dim-continue) imediatamente após posicionar esta.

## DXF — entidade DIMENSION

As cotas lineares são salvas como entidades `DIMENSION` com `rotationDeg` definido como `0` (horizontal) ou `90` (vertical). Origens das linhas de extensão, posição da linha de cota, posição do texto, valor medido, estilo de setas, altura do texto e todos os flags de exibição são mantidos sem perda.
