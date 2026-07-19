---
title: Extend — Estender o Ponto Final de uma Linha até o Limite
description: O comando Extend estica o ponto final mais próximo de uma Line sob hover até a primeira interseção com outra entidade. Uma pré-visualização ao vivo mostra a linha estendida antes de clicar. Extend funciona apenas em entidades Line e ignora Text, Spline e Multileader como limites.
keywords: [comando extend CAD, estender linha CAD, esticar linha até limite, estender ponto final linha, pré-visualização hover extend, kulmanlab]
group: edit
order: 9
---

# Extend

O comando `extend` estica o ponto final mais próximo de uma [Line](../line/) até a primeira interseção que formaria com outra entidade no desenho. Passe o cursor próximo ao ponto final que deseja estender — uma pré-visualização mostra a linha estendida — depois clique para aplicar.

O Extend funciona apenas em entidades **Line**. Os limites para os quais a linha se estende podem ser qualquer outro tipo de entidade exceto Text, Mtext, Multileader e Spline.

## Estender uma linha

1. Digite `extend` no terminal ou clique no botão **Extend** na barra de ferramentas.
2. **Passe o cursor próximo a uma extremidade de uma linha** — a pré-visualização mostra a linha estendida até o limite mais próximo nessa direção.
3. **Clique** para aplicar a extensão.

O comando permanece ativo após cada extensão para que você possa estender várias linhas em sequência. Pressione **Escape** para sair.

```
  Antes:                        Depois:

  ──────           |           ──────────────|
  (linha curta)    (limite)    (estendida ao limite)
```

## Como o ponto final é escolhido

O comando verifica qual ponto final o cursor está mais próximo:

- Cursor **mais próximo do ponto final** → o ponto final é estendido para frente ao longo da direção da linha.
- Cursor **mais próximo do ponto inicial** → o ponto inicial é estendido para trás (na direção oposta).

Um raio é projetado do ponto final escolhido ao longo da direção da linha, e a **primeira interseção** ao longo desse raio com qualquer outra entidade (excluindo a própria linha e os tipos ignorados) torna-se o novo ponto final.

Se nenhuma interseção for encontrada nessa direção, nenhuma pré-visualização aparece e clicar não faz nada.

## Exclusões de limite

Os seguintes tipos de entidade são ignorados como limites — uma linha não se estende para encontrá-los:

- Text / Mtext
- Multileader
- Spline

Todos os outros tipos (Line, Arc, Circle, Ellipse, Polyline, Dimension) servem como limites válidos.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Escape` | Sair do modo extend |

## Entidades suportadas

| Entidade | Pode ser estendida? |
|----------|-------------------|
| Line | Sim |
| Arc, Circle, Ellipse | Não |
| Polyline / Rectangle | Não |
| Text, Spline, Dimension, Leader | Não |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| O que faz | Estica o ponto final de uma linha até um limite | Remove um segmento de uma linha |
| Gatilho | Cursor próximo ao ponto final a esticar | Cursor sobre o segmento a cortar |
| Resultado | Ponto final da linha move para fora | Linha divide ou encurta |
| Ambos | Apenas lines | Apenas lines |
