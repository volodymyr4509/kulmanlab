---
sidebar_position: 7
title: Comando Trim — Cortar Segmentos de Linha nas Interseções no KulmanLab CAD
description: O comando Trim remove a porção de uma Linha entre dois pontos de interseção adjacentes mais próximos ao cursor. Uma prévia vermelha ao passar o cursor mostra exatamente qual segmento será cortado antes de clicar. Trim funciona apenas em entidades Linha — não em arcos, círculos ou polilinhas.
keywords: [CAD comando trim, cortar linha CAD, cortar linha interseção, prévia trim hover, trim apenas linha, kulmanlab]
---

# Trim

O comando `trim` remove a porção de uma [Linha](../line/) que fica entre dois pontos de interseção adjacentes, dividindo a linha em um ou dois segmentos mais curtos. O segmento a cortar é determinado pela posição do cursor — passe sobre a parte que deseja remover e clique para cortar.

Trim funciona **apenas em entidades Linha**. Para arcos, círculos, polilinhas e outros tipos de entidade use [Delete](../delete/) ou edição de grip.

## Cortando uma linha

1. Digite `trim` no terminal ou clique no botão **Trim** na barra de ferramentas.
2. **Passe o cursor sobre o segmento de linha** que deseja remover — uma prévia vermelha destaca exatamente a porção que será cortada.
3. **Clique** para remover esse segmento.

O comando permanece ativo após cada corte, então você pode continuar passando o cursor e clicando para cortar mais segmentos. Pressione **Escape** para sair.

```
  Antes:                         Após cortar segmento central:

  ──────●──────●──────           ──────●          ●──────
      intersec  intersec             (parte esquerda)  (parte direita)
                                     (segmento central removido)
```

## Como o segmento a cortar é determinado

O comando projeta a posição do cursor na linha passada e encontra todos os pontos de interseção que a linha tem com outras entidades. Esses parâmetros de interseção dividem a linha em segmentos. O segmento cujo intervalo contém a projeção do cursor é destacado e será removido ao clicar.

- Se o cursor está **antes da primeira interseção**: essa porção inicial da linha é removida.
- Se o cursor está **entre duas interseções**: essa porção central é removida; a linha se divide em duas.
- Se o cursor está **após a última interseção**: essa porção final é removida.
- Se a linha **não tem interseções** com nenhuma outra entidade: nenhuma prévia é exibida e clicar não faz nada.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Escape` | Sai do modo trim |

## Entidades suportadas

| Entidade | Pode ser cortada? |
|----------|------------------|
| Linha | Sim |
| Arco, Círculo, Elipse | Não |
| Polilinha / Retângulo | Não |
| Texto, Spline, Cota, Leader | Não |

As entidades usadas como **bordas de corte** podem ser de qualquer tipo — apenas a linha sendo cortada deve ser uma entidade Linha.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| O que faz | Remove um segmento de uma linha | Estica um endpoint de uma linha até uma borda |
| Trigger | Passe o cursor sobre o segmento a cortar | Passe o cursor próximo ao endpoint a estender |
| Resultado | A linha se divide ou encurta | O endpoint da linha se move até a borda |
| Ambos | Apenas linhas | Apenas linhas |
