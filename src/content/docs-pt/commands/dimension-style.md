---
title: "Comando EstiloCota — criar e gerenciar estilos de cota nomeados"
description: "Crie e gerencie estilos de cota CAD para setas, linhas de extensão, marcas de centro, texto, precisão, alinhamento e DIMSTYLE em DXF."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# EstiloCota

O comando abre uma janela para criar, editar, visualizar e selecionar estilos de cota nomeados. Novas cotas lineares, alinhadas, radiais, diametrais e angulares copiam o estilo atual ao serem criadas; cotas existentes não ficam vinculadas.

## Abrir a janela

Digite o comando localizado no terminal ou clique no botão **Estilo de cota** do painel **Anotar**. A lista à esquerda mostra os estilos visíveis; uma marca indica o atual e o lápis permite renomear.

## Linhas e setas

**Seta 1 / Seta 2 · Tamanho da seta · Afastamento das linhas de extensão · Prolongamento das linhas de extensão · Marca de centro · Tamanho da marca de centro**

Configure separadamente as duas pontas de seta, o tamanho, o afastamento e a extensão das linhas de chamada, além do tipo e tamanho da marca de centro (`Nenhuma`, `Marca` ou `Linhas`).

## Texto

**Estilo de texto · Fonte · Altura do texto · Moldura do texto · Afastamento do texto · Fixação do texto · Texto alinhado · Precisão · Precisão angular**

A seção de texto controla o preenchimento rápido pelo Estilo de texto, fonte, altura, negrito, itálico, moldura, intervalo, uma de nove posições de fixação, alinhamento com a linha de cota e precisão linear e angular. O estilo de texto copia valores uma vez, sem vínculo ativo.

A visualização usa os mesmos renderizadores da tela. Alterne entre exemplos linear, radial, diametral e angular para conferir setas, marcas de centro, posição do texto, precisão e molduras.

## Criar e gerenciar estilos

**Novo** duplica o estilo selecionado. `Standard` não pode ser renomeado nem excluído, e o estilo atual também não pode ser excluído. Os nomes devem ser únicos, não vazios e válidos para DXF. Estilos anotativos importados ficam ocultos, mas são preservados.

## Definir o estilo atual

**Definir atual** transforma o estilo escolhido no modelo para novas cotas; a lista do painel Anotar oferece a mesma escolha. Os valores são copiados na criação. Dimension Continue herda a aparência completa da cota base.

## Salvar ou descartar

**OK** aplica em conjunto renomeações, adições, exclusões, propriedades e a escolha do estilo atual. **Fechar**, clicar no fundo ou `Escape` descarta as alterações.

## Compatibilidade DXF

O KulmanLab importa e exporta registros `DIMSTYLE` nomeados, incluindo setas separadas, linhas de extensão, texto, precisão, marcas de centro, moldura, referência ao estilo de texto e sinalizador anotativo. Na importação, substituições `DSTYLE` específicas da entidade têm prioridade.

Na exportação, o `STYLE` referenciado usa altura variável (`40 = 0`) e guarda a última altura no grupo `42`. Assim, uma altura fixa do estilo de texto não substitui a altura própria do estilo de cota.

## Comandos relacionados

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
