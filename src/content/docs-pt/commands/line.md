---
sidebar_position: 1
title: Comando Line — Desenhar, Encadear, Aparar e Estender Linhas no KulmanLab CAD
description: O comando Line desenha segmentos de linha reta individuais que podem ser encadeados ponta a ponta. Linhas são o único tipo de entidade em que Trim e Extend funcionam. Round-trip DXF completo como entidades LINE.
keywords: [CAD comando line, desenhar linha reta CAD, encadear segmentos linha, trim linha CAD, estender linha CAD, travamento ângulo CAD, entidade DXF LINE, kulmanlab]
---

# Line

O comando `line` desenha segmentos de linha reta individuais armazenados como entidades `LINE` separadas no modelo DXF. Após cada segmento o comando permanece ativo e reutiliza o endpoint como um novo ponto de início, então você pode construir caminhos conectados um segmento de cada vez. Diferentemente de uma [Polilinha](../polyline/), linhas encadeadas permanecem entidades independentes — cada uma pode ser aparada, estendida ou excluída sem afetar suas vizinhas.

## Desenhando linhas

1. Digite `line` no terminal ou clique no botão **Line** na barra de ferramentas.
2. **Clique no ponto de início**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no ponto final** — o segmento é posicionado e o endpoint vira o próximo ponto de início. A entrada de coordenadas também funciona aqui.
4. Continue clicando (ou digitando) para encadear mais segmentos.
5. Pressione **Enter** ou **Escape** para parar.

```
  ●──────────●──────────●──────────●
 início   2° clique  3° clique   Enter para terminar
            (vira automaticamente o próximo início)
```

Precisa de um único segmento? Pressione **Enter** ou **Escape** logo após o passo 3.

## Entrada de coordenadas

Em vez de clicar, digite uma posição exata para o ponto de início ou qualquer ponto subsequente:

1. Digite o valor X (dígitos, `.` ou `-`).
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o ponto.

## Travamento de ângulo e entrada de comprimento exato

Enquanto você move o cursor após posicionar um ponto, o comando observa um eixo de encaixe de 45° (0°, 45°, 90°, 135°, …). O ângulo **trava** quando:

- o cursor está pelo menos **5 × tamanho do grip** da âncora, **e**
- está dentro de **1 tamanho de grip** de distância perpendicular do eixo mais próximo.

Quando travado, a prévia encaixa no eixo e você pode digitar um comprimento exato:

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona dígito ao valor de comprimento |
| `-` | Comprimento negativo — inverte a direção ao longo do eixo (apenas primeiro caractere) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Posiciona o endpoint na distância digitada |

O valor acumulado é mostrado ao vivo no terminal (ex.: `clique no ponto final ou insira o comprimento: 12.5`). Clique enquanto travado e o clique é projetado no eixo, então o endpoint sempre cai exatamente sobre ele.

Mover de volta próximo ao ponto âncora desengata o travamento.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X, ou distância com ângulo travado |
| `,` | Bloqueia X e move para entrada Y |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada ou comprimento digitado, ou termina a cadeia se nada foi digitado |
| `Escape` | Termina a cadeia e sai |

## Edição com grips — esticando endpoints

Uma linha selecionada mostra três grips:

| Grip | Onde | O que faz |
|------|------|----------|
| **Início** | Primeiro endpoint | Arraste para reposicionar — a extremidade permanece fixa |
| **Ponto médio** | Centro da linha | Ativa **Move** para a linha inteira |
| **Fim** | Segundo endpoint | Arraste para reposicionar — o início permanece fixo |

Esticar um endpoint nunca afeta o outro. Isso difere da edição de grips de [Polilinha](../polyline/), onde mover um vértice remodela o caminho inteiro.

## Selecionando linhas

| Método | Comportamento |
|--------|--------------|
| **Clique** | Seleciona a linha se o clique estiver dentro da distância de hit-test do segmento |
| **Arrastar direita** (estrita) | A linha é selecionada apenas se ambos os endpoints caírem dentro da caixa |
| **Arrastar esquerda** (cruzada) | A linha é selecionada se qualquer parte do segmento cruzar a caixa |

## Comandos de edição suportados

Linhas são a **única** entidade em que [Trim](../trim/) e [Extend](../extend/) operam. Todos os comandos de transformação padrão também se aplicam:

| Comando | O que acontece com a linha |
|---------|--------------------------|
| [Move](../move/) | Translada ambos os endpoints pelo mesmo deslocamento |
| [Copy](../copy/) | Cria uma linha idêntica em uma nova posição |
| [Rotate](../rotate/) | Rotaciona ambos os endpoints ao redor do ponto base escolhido |
| [Mirror](../mirror/) | Reflete ambos os endpoints em relação ao eixo espelho |
| [Scale](../scale/) | Escala ambos os endpoints uniformemente a partir do ponto base |
| [Offset](../offset/) | Cria uma linha paralela a distância perpendicular fixa |
| [Trim](../trim/) | Corta a linha nas interseções — **apenas linhas** |
| [Extend](../extend/) | Estica o endpoint mais próximo até atingir um limite — **apenas linhas** |
| [Delete](../delete/) | Remove a linha do desenho |

## Propriedades

Quando uma linha é selecionada o painel de propriedades mostra todos os campos que o registro DXF `LINE` contém:

**Geral**

| Propriedade | Padrão | Significado |
|-------------|--------|------------|
| Cor | 256 (ByLayer) | Índice de cor ACI |
| Camada | `0` | Atribuição de camada |
| Tipo de linha | ByLayer | Padrão de tipo de linha nomeado |
| Escala do tipo de linha | 1 | Fator de escala no padrão de tipo de linha |
| Espessura | 0 | Espessura de extrusão |

**Geometria**

| Propriedade | Significado |
|-------------|------------|
| Início X / Início Y | Coordenadas do primeiro endpoint |
| Fim X / Fim Y | Coordenadas do segundo endpoint |

Todos os campos são editáveis diretamente no painel sem executar novamente o comando.

## Linha vs Polilinha — qual usar

| | Linha | Polilinha |
|---|-------|-----------|
| Contagem de entidades | Uma `LINE` por segmento | Uma `LWPOLYLINE` para todo o caminho |
| Trim / Extend | Sim — segmento por segmento | Não |
| Forma fechada | Não | Sim (flag de fechamento) |
| Edição com grips | Estique endpoints individuais | Mova qualquer vértice ao longo do caminho |
| Ideal para | Linhas de construção, segmentos únicos, geometria a aparar | Contornos, perfis, formas a manter inteiras |

## DXF — entidade LINE

Linhas são salvas como entidades `LINE` no arquivo DXF. Cada propriedade — coordenadas início/fim, cor, camada, tipo de linha, escala do tipo de linha e espessura — faz round-trip sem perda. Quando você abre um DXF que contém entidades `LINE` elas se tornam objetos `Line` totalmente editáveis no editor.
