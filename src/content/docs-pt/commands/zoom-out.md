---
sidebar_position: 3
title: "Comando Zoom Out — Reduzir o Zoom da Viewport em 1,5× por Passo no KulmanLab CAD"
description: "O comando Zoom Out divide o nível de zoom atual por 1,5× e sai imediatamente, centralizado no ponto médio da viewport. Use a roda do mouse para reduzir o zoom na direção do cursor para controle mais fino."
keywords: [CAD zoom out, reduzir zoom viewport, comando zoom out, visão geral CAD, passo zoom 1.5x, kulmanlab]
---

# Zoom Out

O comando `zoomout` divide o nível de zoom atual por **1,5×** (equivalente a multiplicar por ~0,667) e sai imediatamente, centralizado no ponto médio da viewport. É o inverso de [Zoom In](./zoom-in).

## Reduzindo o zoom

Clique no botão **Zoom Out** na barra de ferramentas ou digite `zoomout` no terminal. O zoom é aplicado instantaneamente e o comando sai — nenhum clique no canvas é necessário.

## Como o passo de 1,5× funciona

| Zoom atual | Após um Zoom Out |
|------------|-----------------|
| 1,50× | 1,00× |
| 2,25× | 1,50× |
| 10,00× | 6,67× |
| 0,015× | 0,01× (limite mínimo) |

O nível de zoom é sempre mostrado no **canto inferior direito** do canvas. O limite inferior é **0,01×**; mais passos não fazem nada.

## Zoom Out pela barra de ferramentas vs roda do mouse

| | Botão Zoom Out | Roda do mouse |
|---|---------------|---------------|
| Centro do zoom | Ponto médio da viewport | Posição do cursor |
| Tamanho do passo | 1,5× por clique | ~1,1× por tick |
| Ativação necessária | Não | Não — funciona sempre |
| Ideal para | Recuar para ver mais contexto | Zoom suave ancorado no cursor |

## Referência de teclado

Não há atalhos de teclado para este comando. Use a roda do mouse — ela funciona a qualquer momento sem ativar nenhum comando.

## Comandos de visualização relacionados

| Comando | O que faz |
|---------|-----------|
| [Zoom In](./zoom-in) | Multiplica o zoom por 1,5× por passo |
| [Fit](./fit) | Redefine o zoom para mostrar todas as entidades |
| [Pan](./pan) | Desloca a viewport sem ampliar |
