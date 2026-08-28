---
title: Filtro de seleção — Restringir uma seleção múltipla por propriedade
description: Quando muitas entidades estão selecionadas, um ícone de filtro no cabeçalho do painel de propriedades abre uma janela com listas de verificação ao vivo para Tipo, Camada, Cor, Espessura de linha e Tipo de linha, montadas a partir do que realmente existe na seleção, de modo que uma seleção grande e mista possa ser restringida antes da edição em massa.
keywords: [filtro de seleção, filtrar seleção CAD, filtro facetado, restringir seleção, edição em massa CAD, filtro do painel de propriedades, kulmanlab]
group: interface
order: 7
---

# Filtro de seleção

Selecionar muitas entidades de uma vez abre o painel de propriedades na sua visão de seleção múltipla ("Selection (N)"). Um **ícone de filtro** ao lado do botão de fechar permite restringir essa seleção por propriedade antes de editá-la em massa.

## Abrindo o filtro

1. Selecione várias entidades — arraste uma caixa de seleção, clique com Shift ou pressione Ctrl+A.
2. Clique no **ícone de filtro** (funil) no cabeçalho do painel de propriedades.
3. Abre-se uma janela abaixo do botão, com uma lista de verificação para cada propriedade que de fato varia dentro da seleção.

## Facetas

A janela pode mostrar até cinco facetas, cada uma montada ao vivo a partir da seleção atual:

| Faceta | Valores exibidos |
|--------|------------------|
| **Tipo** | Nome do tipo de entidade (Line, Circle, Hatch, …) |
| **Camada** | Nome da camada, com uma amostra de cor correspondente |
| **Cor** | Índice de cor ACI |
| **Espessura de linha** | Valor da espessura de linha |
| **Tipo de linha** | Nome do tipo de linha |

Uma faceta só aparece se a seleção realmente contiver mais de um valor distinto para ela — selecionar dez linhas todas na mesma camada não mostrará a faceta Camada, pois marcá-la não restringiria nada. As entidades que não carregam determinada propriedade (Hatch e Text, por exemplo, não têm espessura nem tipo de linha) simplesmente não são contadas naquela faceta — e também nunca são excluídas por ela.

## Restringindo a seleção

Marque um ou mais valores em qualquer faceta para restringir a seleção às entidades que atendem a **todas** as facetas marcadas (uma entidade precisa corresponder a pelo menos um valor marcado em *cada* faceta que você tocou, não só em uma). As caixas e contagens de cada faceta refletem o que as *outras* facetas marcadas já restringiram, de modo que uma faceta nunca esconde as próprias opções já marcadas — o comportamento padrão da busca facetada.

A contagem de resultados se atualiza ao vivo conforme você marca e desmarca, e a seleção na área de desenho é restringida junto: isto não é um mero filtro visual, as entidades que deixam de corresponder são de fato desselecionadas, prontas para você editar em massa exatamente o subconjunto filtrado.

## Limpando os filtros

Use o controle de redefinição da janela para desmarcar tudo e voltar à seleção original completa, ou feche a janela (ela reabre com uma base nova na próxima vez que você clicar no ícone de filtro sobre outra seleção).

## Relacionados

- [Match Properties](../../commands/match-properties/) — copiar propriedades de uma entidade para outras, depois de restringir quais são
- [LayerIsolate](../../commands/layer-isolate/) — uma alternativa no nível da camada quando você quer isolar só por camada, independentemente do que está selecionado
