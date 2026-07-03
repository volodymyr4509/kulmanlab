---
sidebar_position: 3
title: Comando Rectangle — Desenhar Retângulos Alinhados aos Eixos no KulmanLab CAD
description: O comando Rectangle cria um retângulo alinhado aos eixos a partir de dois cantos opostos. O resultado é uma LWPOLYLINE fechada com quatro vértices — idêntica a qualquer outra polilinha uma vez posicionada, então cada comando de edição de polilinha se aplica a ela.
keywords: [CAD comando rectangle, desenhar retângulo CAD, retângulo alinhado aos eixos, polilinha fechada CAD, LWPOLYLINE DXF, edição grip retângulo, kulmanlab]
---

# Rectangle

O comando `rectangle` desenha um retângulo alinhado aos eixos definido por dois cliques em cantos opostos. O resultado é armazenado como uma **`LWPOLYLINE` fechada** com quatro vértices — um em cada canto. Não existe um tipo de entidade retângulo dedicado: após a criação a forma se comporta exatamente como qualquer outra [Polilinha](../polyline/) e cada edição de polilinha se aplica a ela.

## Desenhando um retângulo

1. Digite `rectangle` no terminal ou clique no botão **Rectangle** na barra de ferramentas.
2. **Clique no primeiro canto**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no canto oposto** — o retângulo é posicionado instantaneamente e o comando encerra. A entrada de coordenadas também funciona aqui.

```
  ● (primeiro clique)──────────────────┐
  |                                    |
  |   prévia ao vivo segue             |
  |   o cursor após a etapa 2          |
  └────────────────────────────────────● (segundo clique)
```

Os dois cliques podem ser qualquer par de cantos diagonalmente opostos — superior-esquerdo + inferior-direito, ou inferior-esquerdo + superior-direito, etc. A ordem não importa.

## Entrada de coordenadas

Em qualquer etapa dos cantos você pode digitar uma posição exata:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o canto.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X |
| `,` | Bloqueia X e move para entrada Y |
| `Enter` | Confirma a coordenada digitada |
| `Escape` | Cancela |

Os lados são sempre horizontais e verticais — não há travamento de ângulo para o comando retângulo.

## Edição com grips — remodelando após a criação

Um retângulo selecionado mostra grips em cada vértice e no ponto médio de cada lado:

| Grip | Posição | O que faz |
|------|---------|----------|
| **Canto** | Cada um dos 4 vértices | Arraste para mover esse vértice; os dois lados adjacentes se esticam para seguir — o canto oposto permanece fixo |
| **Ponto médio do lado** | Centro de cada um dos 4 lados | Arraste para transladar ambos os endpoints desse lado juntos, mantendo comprimento e ângulo do lado |

Arrastar um grip de canto transforma o retângulo em um quadrilátero não retangular. Se você só precisa de um retângulo de tamanho diferente, arraste um canto mantendo os lados aproximadamente ortogonais, ou exclua-o e desenhe um novo.

## Comandos de edição suportados

Todos os comandos de edição de polilinhas se aplicam. Trim e Extend são apenas para [Linha](../line/) e não funcionam em retângulos:

| Comando | O que acontece com o retângulo |
|---------|-------------------------------|
| [Move](../move/) | Translada todos os quatro vértices pelo mesmo deslocamento |
| [Copy](../copy/) | Cria um retângulo idêntico em uma nova posição |
| [Rotate](../rotate/) | Rotaciona todos os quatro vértices ao redor do ponto base escolhido |
| [Mirror](../mirror/) | Reflete todos os quatro vértices em relação ao eixo espelho |
| [Scale](../scale/) | Escala todos os quatro vértices uniformemente a partir do ponto base |
| [Offset](../offset/) | Cria um retângulo paralelo (interno ou externo) a uma distância fixa |
| [Delete](../delete/) | Remove o retângulo do desenho |

## Rectangle vs Polilinha vs Linha

| | Retângulo | Polilinha | Linha |
|---|-----------|---------|-------|
| Como desenhar | 2 cliques (cantos) | Clique em cada vértice | Clique em cada endpoint |
| Tipo de entidade | `LWPOLYLINE` fechada | `LWPOLYLINE` aberta ou fechada | `LINE` por segmento |
| Lados sempre ortogonais | Sim (na criação) | Não | Não |
| Trim / Extend | Não | Não | Sim |
| Ideal para | Caixas, molduras, áreas retangulares | Contornos e caminhos arbitrários | Segmentos individuais, linhas de construção |

## DXF — entidade LWPOLYLINE

Retângulos são salvos como entidades `LWPOLYLINE` fechadas com quatro vértices. Todas as propriedades — coordenadas dos vértices, cor, camada, tipo de linha, escala do tipo de linha e espessura — fazem round-trip sem perda.

Não existe um tipo `RECTANGLE` dedicado em DXF. Quando um arquivo é reaberto, a forma aparece como uma polilinha fechada de quatro vértices em vez de um retângulo. Qualquer visualizador ou editor DXF que suporte `LWPOLYLINE` o exibirá corretamente.
