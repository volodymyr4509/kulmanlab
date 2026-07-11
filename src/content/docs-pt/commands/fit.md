---
title: Comando Fit — Enquadrar Todas as Entidades na Viewport com Um Clique no KulmanLab CAD
description: O comando Fit calcula o retângulo delimitador de todas as entidades e ajusta zoom e pan para que cada entidade seja visível com uma pequena margem. Clique duplo no botão central do mouse aciona Fit sem ativar o comando.
keywords: [CAD ajustar vista, zoom estender, enquadrar todas as entidades, comando fit CAD, zoom retângulo delimitador, kulmanlab]
group: navigate
order: 4
---

# Fit

O comando `fit` calcula o retângulo delimitador de todas as entidades no desenho e ajusta tanto o nível de zoom quanto a posição de pan para que cada entidade seja visível com uma pequena margem. É a maneira mais rápida de recuperar uma vista perdida ou se orientar após importar um arquivo DXF.

## Ajustar a vista

Clique no botão **Fit** na barra de ferramentas ou digite `fit` no terminal. A vista se ajusta imediatamente e o comando termina — nenhuma interação é necessária.

**Clique duplo no botão central do mouse** aciona a mesma operação Fit a qualquer momento sem ativar nenhum comando — o atalho mais rápido para redefinir uma vista perdida no meio do desenho.

## Como funciona o ajuste ao retângulo delimitador

1. Fit encontra o retângulo delimitador alinhado ao eixo que envolve todas as entidades (min X, max X, min Y, max Y).
2. O nível de zoom é definido para que a dimensão mais alta ou mais larga preencha o canvas com uma margem.
3. A vista é centralizada no ponto médio do retângulo delimitador.

| Estado do desenho | Resultado |
|------------------|-----------|
| Mais largo que alto | Zoom limitado pela largura |
| Mais alto que largo | Zoom limitado pela altura |
| Entidade única | Ajusta ao redor dessa entidade apenas |
| Desenho vazio | Vista não muda |

## Fit vs controles de zoom manuais

| | Fit | Zoom In / Zoom Out | Roda de scroll |
|---|-----|--------------------|----------------|
| Centraliza em | Todas as entidades | Ponto central da viewport | Cursor |
| Tamanho do passo | Automático (único) | 1.5× por passo | ~1.1× por tick |
| Ideal para | Recuperar vista perdida, orientação pós-importação | Aumentar/diminuir a partir do centro | Zoom preciso direcionado ao cursor |

## Referência de teclado

Não há atalho de teclado para este comando. Use o atalho de **clique duplo com o botão central do mouse**.

## Comandos de visualização relacionados

| Comando | Função |
|---------|--------|
| [Pan](../pan/) | Desloca a viewport sem fazer zoom |
| [Zoom In](../zoom-in/) | Multiplica o zoom por 1.5× por passo |
| [Zoom Out](../zoom-out/) | Divide o zoom por 1.5× por passo |
