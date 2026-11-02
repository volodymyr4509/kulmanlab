---
title: "Comando Explode — separar uma polilinha ou um bloco em suas partes"
description: "O comando Explode separa uma polilinha em suas entidades Line e Arc, ou uma referência de bloco nas entidades que seu bloco desenha, no lugar. As partes ficam exatamente como o original."
keywords: [comando explode CAD, explodir polilinha CAD, decompor polilinha em linhas, converter polilinha em linha e arco, kulmanlab]
group: edit
order: 19
---

# Explode

O comando `Explodir` decompõe uma [Polilinha](../polyline/) em suas entidades [Linha](../line/) e [Arco](../arc/) individuais — uma por segmento, exatamente onde estavam os vértices da polilinha. As partes substituem a polilinha no lugar e mantêm sua espessura de linha, cor, camada e tipo de linha.

Explode funciona com entidades **Polyline** e **referências de bloco**.

## Usando explode

Duas formas de executá-lo, o mesmo padrão de [Delete](../delete/):

**Selecione primeiro, depois explode** — o caminho mais rápido:

1. Selecione uma ou mais polilinhas no canvas.
2. Digite `Explodir` no terminal ou escolha **Explode** no menu suspenso do painel Edit.

As polilinhas selecionadas são explodidas instantaneamente — sem etapa de confirmação separada, já que algo já está selecionado.

**Ative, depois selecione**:

1. Digite `Explodir` ou escolha **Explode** no menu suspenso sem nada selecionado.
2. **Selecione polilinhas ou referências de bloco** — clique para alternar ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar e explodir as polilinhas selecionadas.

Durante a seleção só polilinhas e referências de bloco são pegas — clicar numa Line, num Circle ou em qualquer outra entidade não faz nada, e um arraste de área ignora todo o resto dentro ou cruzando.

## O que resulta disso

Cada segmento da polilinha se torna sua própria entidade:

- Um **segmento reto** se torna uma **Linha**.
- Um **segmento de arco** (da [opção Arc](../polyline/) do Polyline) se torna um **Arco**, correspondendo exatamente ao centro, raio e varredura da curva original.

Cada Linha e Arco resultante herda a **espessura de linha, cor, camada, tipo de linha e escala do tipo de linha** da polilinha de origem — nada muda na aparência da geometria, apenas que agora são várias entidades independentes em vez de uma polilinha conectada.

Uma **referência de bloco** vira as entidades que seu bloco desenha, colocadas onde a referência as mostrava. Entidades que o bloco mantém ocultas — os outros estados de um bloco dinâmico — ficam de fora; cada atributo vira um Text simples com seu valor; partes desenhadas ByBlock assumem a cor da referência, e as da layer 0 a sua layer. Um bloco aninhado sai como uma referência de bloco própria, que você pode separar por sua vez. Uma referência com escala diferente em X e Y não é pega, pois seus círculos teriam de virar elipses.

O explode pode ser desfeito em uma única etapa com [Undo](../undo/), como qualquer outra edição.

## Seleção durante o comando

| Método | Comportamento |
|--------|---------------|
| **Clique** | Põe ou tira da seleção a polilinha ou referência de bloco sob o cursor; clicar em outra entidade não faz nada |
| **Arrastar para a direita** (estrito) | Seleciona só polilinhas e referências de bloco totalmente dentro da caixa |
| **Arrastar para a esquerda** (cruzamento) | Seleciona polilinhas e referências de bloco que cruzam a borda da caixa |
| **Enter** / **Space** | Confirma e separa a seleção |

## Entidades suportadas

| Entidade | Suportada |
|----------|-----------|
| Polyline / Rectangle | Sim |
| Referência de bloco | Sim, exceto com escala diferente em X e Y |
| Line, Arc, Circle, Ellipse | Não — nada para explodir |
| Text, Spline, Dimension, Leader, Hatch | Não |
