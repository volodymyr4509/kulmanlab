---
sidebar_position: 2
title: "Comando Zoom In — Ampliar a Viewport em 1,5× por Passo no KulmanLab CAD"
description: "O comando Zoom In multiplica o nível de zoom atual por 1,5× e sai imediatamente, centralizado no ponto médio da viewport. Intervalo de zoom 0,01–10.000. Use a roda do mouse para ampliar na direção do cursor."
keywords: [CAD zoom in, ampliar viewport, comando zoom CAD, passo zoom 1.5x, kulmanlab]
---

# Zoom In

O comando `zoomin` multiplica o nível de zoom atual por **1,5×** e sai imediatamente, centralizado no ponto médio da viewport. É o equivalente na barra de ferramentas de um tick da roda do mouse ampliando em direção ao centro da tela em vez do cursor.

## Ampliando

Clique no botão **Zoom In** na barra de ferramentas ou digite `zoomin` no terminal. O zoom é aplicado instantaneamente e o comando sai — nenhum clique no canvas é necessário.

## Como o passo de 1,5× funciona

| Zoom atual | Após um Zoom In |
|------------|----------------|
| 1,00× | 1,50× |
| 1,50× | 2,25× |
| 10,00× | 15,00× |
| 6.667× | 10.000× (limite máximo) |

O nível de zoom é sempre mostrado no **canto inferior direito** do canvas ao lado do rótulo `zoom`. O limite superior é **10.000×**; mais passos não fazem nada.

## Zoom In pela barra de ferramentas vs roda do mouse

| | Botão Zoom In | Roda do mouse |
|---|--------------|---------------|
| Centro do zoom | Ponto médio da viewport | Posição do cursor |
| Tamanho do passo | 1,5× por clique | ~1,1× por tick |
| Ativação necessária | Não | Não — funciona sempre |
| Ideal para | Navegação grosseira | Zoom preciso para o cursor |

## Referência de teclado

Não há atalhos de teclado para este comando. Use a roda do mouse — ela funciona a qualquer momento sem ativar nenhum comando.

## Comandos de visualização relacionados

| Comando | O que faz |
|---------|-----------|
| [Zoom Out](../zoom-out/) | Divide o zoom por 1,5× por passo |
| [Fit](../fit/) | Redefine o zoom para mostrar todas as entidades |
| [Pan](../pan/) | Desloca a viewport sem ampliar |
