---
title: Comando Explode — Decompor uma Polilinha em Entidades Linha e Arco
description: O comando Explode decompõe uma polilinha em suas entidades Linha e Arco individuais, uma por segmento, no lugar. Cada parte mantém a espessura de linha, cor, camada e tipo de linha da polilinha de origem. Funciona apenas com entidades Polilinha.
keywords: [comando explode CAD, explodir polilinha CAD, decompor polilinha em linhas, converter polilinha em linha e arco, kulmanlab]
group: edit
order: 16
---

# Explode

O comando `Explodir` decompõe uma [Polilinha](../polyline/) em suas entidades [Linha](../line/) e [Arco](../arc/) individuais — uma por segmento, exatamente onde estavam os vértices da polilinha. As partes substituem a polilinha no lugar e mantêm sua espessura de linha, cor, camada e tipo de linha.

Explode funciona apenas com entidades **Polilinha**.

## Usando explode

Duas formas de executá-lo, o mesmo padrão de [Delete](../delete/):

**Selecione primeiro, depois explode** — o caminho mais rápido:

1. Selecione uma ou mais polilinhas no canvas.
2. Digite `Explodir` no terminal, ou clique no botão **Explode** no painel Edit.

As polilinhas selecionadas são explodidas instantaneamente — sem etapa de confirmação separada, já que algo já está selecionado.

**Ative, depois selecione**:

1. Digite `Explodir` ou clique no botão da barra de ferramentas sem nada selecionado.
2. **Selecione polilinhas** — clique para alternar, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar e explodir as polilinhas selecionadas.

Apenas polilinhas são capturadas durante a seleção — clicar em uma Linha, Círculo ou qualquer outra entidade não faz nada, e um arrasto de área ignora tudo, exceto as polilinhas dentro ou que cruzam a área.

## O que resulta disso

Cada segmento da polilinha se torna sua própria entidade:

- Um **segmento reto** se torna uma **Linha**.
- Um **segmento de arco** (da [opção Arc](../polyline/) do Polyline) se torna um **Arco**, correspondendo exatamente ao centro, raio e varredura da curva original.

Cada Linha e Arco resultante herda a **espessura de linha, cor, camada, tipo de linha e escala do tipo de linha** da polilinha de origem — nada muda na aparência da geometria, apenas que agora são várias entidades independentes em vez de uma polilinha conectada.

O explode pode ser desfeito em uma única etapa com [Undo](../undo/), como qualquer outra edição.

## Seleção durante o comando

| Método | Comportamento |
|--------|---------------|
| **Clique** | Alterna a polilinha sob o cursor dentro/fora da seleção; clicar em uma entidade que não seja polilinha não faz nada |
| **Arrastar para a direita** (estrito) | Seleciona apenas polilinhas totalmente dentro da caixa |
| **Arrastar para a esquerda** (cruzamento) | Seleciona polilinhas que cruzam o limite da caixa |
| **Enter** / **Espaço** | Confirma e explode as polilinhas selecionadas |

## Entidades suportadas

| Entidade | Suportada |
|----------|-----------|
| Polyline / Rectangle | Sim |
| Line, Arc, Circle, Ellipse | Não — nada para explodir |
| Text, Spline, Dimension, Leader, Hatch | Não |
