---
title: Comando Pan — Navegação da Viewport Clicar-e-Arrastar
description: O comando Pan entra em um modo de arrastar persistente. Clique e arraste em qualquer lugar no canvas para deslocar a vista sem alterar o nível de zoom. O arraste com clique do meio funciona a qualquer momento sem ativar Pan.
keywords: [CAD pan viewport, comando pan, arrastar para navegar, rolagem canvas CAD, navegação viewport, kulmanlab]
group: navigate
order: 1
---

# Pan

O comando `pan` entra em um modo de arrastar persistente — clique e arraste em qualquer lugar no canvas para deslocar a vista. O nível de zoom permanece inalterado. O modo Pan permanece ativo até você pressionar `Escape`, então você pode arrastar várias vezes em uma única ativação.

## Deslocando a vista

1. Digite `pan` no terminal ou clique no botão **Pan** na barra de ferramentas.
2. **Clique e arraste** em qualquer lugar no canvas para deslocar a vista.
3. Solte e arraste novamente quantas vezes for necessário.
4. Pressione `Escape` para sair do modo pan.

## Arraste com clique do meio — pan sem ativar o comando

A forma mais rápida de fazer pan: **mantenha pressionado o botão do meio do mouse e arraste** a qualquer momento, mesmo enquanto outro comando está ativo. Não é necessária a ativação do comando. Soltar o botão do meio retorna ao estado anterior.

## Controles Pan vs Zoom

| Ação | Efeito | Requer modo Pan? |
|------|--------|-----------------|
| Arrastar clique esquerdo (modo Pan) | Desloca viewport | Sim |
| Arrastar clique do meio | Desloca viewport | Não — funciona sempre |
| Roda de rolagem | Zoom em direção ao cursor | Não — funciona sempre |
| Duplo clique botão do meio | Ajustar todas as entidades | Não — funciona sempre |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Aumenta/diminui zoom em 1,5× | Não |
| [Fit](../fit/) | Ajusta todas as entidades à vista | Não |

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Escape` | Sai do modo pan |

## Dicas

- Use a roda de rolagem para dar zoom em uma área alvo, depois faça pan para ajustar a posição.
- **Duplo clique no botão do meio do mouse** ativa [Fit](../fit/) instantaneamente — a forma mais rápida de redefinir uma vista perdida.
- Se estiver no meio de um comando (ex.: posicionando um endpoint de linha), arraste com o clique do meio para fazer pan sem cancelar o comando.
