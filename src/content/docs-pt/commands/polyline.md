---
title: Polyline — Caminho com Múltiplos Segmentos como Entidade Única
description: O comando Polyline desenha qualquer número de segmentos conectados armazenados como uma única entidade LWPOLYLINE. Grips de vértice e ponto médio de segmento permitem remodelar qualquer parte do caminho após a criação. Suporta offset; não suporta trim ou extend.
keywords: [CAD comando polyline, desenhar polilinha CAD, caminho multi-segmento CAD, LWPOLYLINE DXF, remodelar polilinha, grip vértice CAD, offset polilinha, kulmanlab]
group: shapes
order: 2
---

# Polyline

O comando `polyline` desenha um caminho conectado de qualquer número de segmentos retos, todos armazenados como uma única entidade `LWPOLYLINE`. Como o caminho inteiro é um único objeto, selecioná-lo seleciona cada segmento de uma vez — mova, gire ou escale toda a forma em uma única operação. Esta é a distinção fundamental das [Linhas](../line/) encadeadas, onde cada segmento é uma entidade independente.

Polilinhas também podem ser **fechadas**: o comando [Retângulo](../rectangle/) usa a mesma entidade `LWPOLYLINE` com um flag de fechamento definido.

## Desenhando uma polilinha

1. Digite `polyline` no terminal ou clique no botão **Polyline** na barra de ferramentas.
2. **Clique no primeiro ponto**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique em cada ponto subsequente** — cada clique adiciona um segmento. A entrada de coordenadas funciona em cada etapa.
4. Pressione **Enter** ou **Espaço** para terminar (requer pelo menos 2 pontos posicionados).

```
  ●──────●
  1°    2°
          \
           \  segmento 3 (em andamento — cursor aqui)
            ●  ← clique para adicionar, Enter/Espaço para terminar
```

Pressionar **Escape** a qualquer momento descarta todos os pontos posicionados e sai do comando.

## Entrada de coordenadas

Em vez de clicar, digite uma posição exata para qualquer vértice:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o vértice.

## Travamento de ângulo e comprimento exato do segmento

A mesma lógica de encaixe de 45° do comando [Linha](../line/) se aplica entre dois pontos consecutivos. Quando travado em um eixo:

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona dígito ao comprimento do segmento |
| `-` | Comprimento negativo — inverte a direção ao longo do eixo (apenas primeiro caractere) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Posiciona o próximo ponto na distância digitada |

O comprimento acumulado atual aparece no prompt do terminal em tempo real. Clicar enquanto travado projeta no eixo para que o novo vértice fique exatamente nele.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X, ou comprimento do segmento com ângulo travado |
| `,` | Bloqueia X e move para entrada Y |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada ou comprimento digitado, ou termina a polilinha se nada digitado e ≥ 2 pontos existem |
| `Espaço` | Termina a polilinha (igual a Enter quando nenhuma entrada está em andamento) |
| `Escape` | Descarta todos os pontos e sai |

## Edição com grips — vértices e pontos médios de segmentos

Uma polilinha selecionada mostra dois tipos de grips:

| Grip | Posição | O que faz |
|------|---------|----------|
| **Vértice** | Em cada ponto posicionado | Arraste para reposicionar esse vértice; todos os segmentos conectados se esticam para seguir |
| **Ponto médio do segmento** | Centro de cada segmento | Arraste para transladar **ambos** os endpoints desse segmento juntos, mantendo comprimento e ângulo intactos |

O grip de ponto médio do segmento é exclusivo das polilinhas — permite deslizar um segmento individual lateralmente sem alterar seu comprimento. Em uma [Linha](../line/), o grip de ponto médio ativa o comando Move para toda a entidade.

Não há um grip "mover toda a polilinha". Para mover todo o caminho use o comando [Move](../move/).

## Selecionando polilinhas

| Método | Comportamento |
|--------|--------------|
| **Clique** | Seleciona a polilinha se o clique cair dentro da distância de hit-test de qualquer segmento |
| **Arrastar direita** (estrita) | Todos os vértices devem estar dentro da caixa |
| **Arrastar esquerda** (cruzada) | Qualquer segmento que toque a borda da caixa seleciona toda a polilinha |

Como uma polilinha é uma entidade, uma seleção cruzada que toca qualquer segmento seleciona todos os segmentos.

## Comandos de edição suportados

Polilinhas suportam todas as transformações gerais e offset, mas **não** trim ou extend (esses são apenas para [Linhas](../line/)):

| Comando | O que acontece com a polilinha |
|---------|-------------------------------|
| [Move](../move/) | Translada todos os vértices pelo mesmo deslocamento |
| [Copy](../copy/) | Cria uma polilinha idêntica em uma nova posição |
| [Rotate](../rotate/) | Rotaciona todos os vértices ao redor do ponto base escolhido |
| [Mirror](../mirror/) | Reflete todos os vértices em relação ao eixo espelho |
| [Scale](../scale/) | Escala todos os vértices uniformemente a partir do ponto base |
| [Offset](../offset/) | Cria uma polilinha paralela a uma distância perpendicular fixa |
| [Delete](../delete/) | Remove a polilinha do desenho |

## Polyline vs Linha — quando usar qual

| | Polilinha | Linha |
|---|---------|-------|
| Contagem de entidades | Uma `LWPOLYLINE` para todo o caminho | Uma `LINE` por segmento |
| Forma fechada | Sim (flag de fechamento) | Não |
| Trim / Extend | Não | Sim — segmento por segmento |
| Grip ponto médio do segmento | Translada o segmento inteiro | Ativa Move para a entidade |
| Ideal para | Contornos, perfis, formas a manter inteiras | Linhas de construção, geometria a recortar |

## DXF — entidade LWPOLYLINE

Polilinhas são salvas como entidades `LWPOLYLINE` no arquivo DXF. Todas as propriedades — coordenadas dos vértices, flag de fechamento, cor, camada, tipo de linha, escala do tipo de linha e espessura — fazem round-trip sem perda. Retângulos desenhados com o comando [Retângulo](../rectangle/) também são salvos como `LWPOLYLINE` (fechado, quatro vértices) e são indistinguíveis no nível DXF.

Entidades `LWPOLYLINE` de qualquer aplicação compatível com DXF (LibreCAD, FreeCAD, etc.) são lidas no editor como polilinhas totalmente editáveis.
