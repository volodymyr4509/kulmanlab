---
title: FontAdd — Enviar uma fonte TTF personalizada pelo terminal
description: O comando FontAdd abre o seletor de arquivos do sistema para enviar uma fonte .ttf, sem abrir antes a caixa de diálogo Font Manager. É o mesmo envio que o botão «Add Font» do Font Manager aciona, disponível aqui como um comando de terminal próprio.
keywords: [comando font add, comando fontadd, enviar ttf terminal, fonte personalizada CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

O comando `AdicionarFonte` abre o seletor de arquivos do sistema para enviar uma fonte `.ttf` personalizada, sem abrir antes a caixa de diálogo [Font Manager](../font-manager/). É o mesmo envio que o botão **Add Font** do Font Manager aciona — o FontAdd é apenas um caminho direto para ele a partir do terminal.

## Enviar uma fonte

1. Digite `AdicionarFonte` no terminal, ou clique em **Add Font** no rodapé da caixa de diálogo [Font Manager](../font-manager/).
2. Escolha um arquivo `.ttf` no seletor do sistema. Apenas fontes TrueType são suportadas — `.otf` e `.woff`/`.woff2` não são.

O comando termina assim que o seletor de arquivos é aberto — não há mais nenhum clique ou entrada de terminal. A fonte é registrada e aparece no grupo **User** assim que o arquivo é escolhido.

## O que acontece ao enviar

- O nome do arquivo (sem a extensão) se torna o nome da fonte. Enviar `MyFont.ttf` adiciona uma fonte chamada `MyFont`.
- Enviar um arquivo cujo nome coincide com uma fonte personalizada existente a **substitui**.
- A fonte é salva permanentemente no navegador (IndexedDB) e recarrega automaticamente na próxima vez que você abrir o KulmanLab CAD — ela não está vinculada ao desenho atual.

## Referência de teclado

O FontAdd não tem interação de teclado própria — todo o comando consiste na caixa de seleção de arquivo nativa do navegador. Cancelar essa caixa de diálogo (ou não escolher nenhum arquivo) deixa a lista de fontes inalterada.

## Comandos relacionados

| Comando | O que faz |
|---------|-----------|
| [Font Manager](../font-manager/) | Navegue, pré-visualize, selecione e remova fontes, incluindo seus próprios envios |
| [Text](../text/) | Coloca as etiquetas de texto às quais as escolhas de fonte se aplicam |
