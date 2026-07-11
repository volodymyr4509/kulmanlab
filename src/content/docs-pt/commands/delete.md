---
title: Comando Delete — Remover Entidades do Desenho no KulmanLab CAD
description: O comando Delete remove as entidades selecionadas permanentemente (desfazível). Entidades pré-selecionadas são deletadas instantaneamente sem etapa de confirmação. A tecla Delete funciona como atalho global mesmo sem ativar o comando. Suporta seleção única e por área.
keywords: [comando delete CAD, remover entidades CAD, apagar objetos CAD, tecla delete CAD, desfazer delete CAD, kulmanlab]
group: edit
order: 7
---

# Delete

O comando `delete` remove as entidades selecionadas do desenho. As exclusões são registradas no histórico de [Undo](../undo/) e podem ser revertidas com até 20 passos. Não há uma caixa de diálogo separada de "confirmar exclusão" — a confirmação é um único pressionamento de tecla.

## Duas formas de excluir

**Pré-selecionar, depois excluir** — o caminho mais rápido:

1. Selecione uma ou mais entidades no canvas.
2. Digite `delete` no terminal, clique no botão **Delete** na barra de ferramentas, **ou pressione a tecla `Delete`** diretamente.

As entidades são removidas instantaneamente — sem etapa de confirmação adicional.

**Ativar, depois selecionar**:

1. Digite `delete` ou clique no botão da barra de ferramentas (sem nada selecionado).
2. **Selecione os objetos** — clique para alternar, ou arraste para selecionar por área.
3. Pressione **Enter**, **Espaço**, ou **Delete** para confirmar e remover as entidades selecionadas.

## Atalho da tecla Delete

A tecla `Delete` no teclado funciona como **atalho global** — se houver entidades selecionadas, pressioná-la as exclui imediatamente, mesmo sem abrir o comando Delete no terminal. Este é o fluxo de trabalho de exclusão mais rápido em um único passo:

```
Clique na entidade → pressione Delete → pronto
```

## Seleção durante o comando

| Método | Comportamento |
|--------|--------------|
| **Clique** | Alterna a entidade sob o cursor para dentro/fora da seleção |
| **Arrastar à direita** (estrito) | Seleciona apenas entidades completamente dentro do retângulo |
| **Arrastar à esquerda** (cruzamento) | Seleciona entidades que cruzam o limite do retângulo |
| **Enter** / **Espaço** / **Delete** | Confirma e exclui as entidades selecionadas |

## Recuperar entidades excluídas

As exclusões são desfazíveis com o comando [Undo](../undo/) (digite `undo` ou use o botão da barra de ferramentas). Até **20 passos** podem ser revertidos por arquivo, e o histórico persiste entre recarregamentos de página. Se você excedeu 20 exclusões sem salvar, exclusões anteriores não podem ser recuperadas.

## Entidades suportadas

Delete funciona em todos os tipos de entidade — Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader e todas as outras.
