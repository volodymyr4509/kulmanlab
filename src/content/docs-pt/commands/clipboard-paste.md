---
title: Comando ClipboardPaste — Colar entidades da área de transferência do sistema
description: O comando ClipboardPaste lê da área de transferência do sistema as entidades gravadas antes pelo ClipboardCopy e as posiciona num ponto de inserção escolhido, adicionando as camadas e tipos de linha que faltam no desenho de destino.
keywords: [colar área de transferência CAD, colar entidades entre desenhos, colar objetos CAD, Ctrl+V CAD, colar entre abas, mesclar camadas ao colar, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

O comando `ColarÁreaTransferência` lê as entidades que o [ClipboardCopy](../clipboard-copy/) gravou na **área de transferência do sistema** e as posiciona no desenho atual num ponto que você escolhe. Como a área de transferência é a real do sistema, a origem pode ser outro desenho, outra aba do navegador ou uma sessão de mais cedo no dia.

## Como colar

1. Pressione `Ctrl+V` (`Cmd+V` no macOS), ou digite `ColarÁreaTransferência` no terminal.
2. O prompt mostra **reading clipboard…** enquanto o navegador entrega o texto da área de transferência.
3. Depois de carregado, o prompt muda para **pick insertion point** e uma prévia da geometria segue o cursor.
4. **Clique** para posicionar as entidades. Elas são adicionadas ao desenho e ficam selecionadas.

A prévia é ancorada pelo **ponto de referência** da cópia — o canto inferior esquerdo dos limites combinados da seleção original. Esse canto fica sob o cursor, então o arranjo relativo das entidades copiadas é preservado exatamente.

## O que acontece ao colar

| Etapa | Comportamento |
|-------|---------------|
| **Novas identidades** | Cada entidade colada recebe um id novo, então colar duas vezes gera dois conjuntos independentes |
| **Translação** | As entidades são deslocadas por cursor − ponto de referência |
| **Mesclagem de camadas** | Toda camada referenciada que falte no desenho de destino é adicionada pelo nome |
| **Mesclagem de tipos de linha** | Todo tipo de linha referenciado que falte no desenho de destino é adicionado pelo nome |
| **Seleção** | A seleção anterior é limpa e as entidades coladas passam a ser a seleção |

### Mesclagem de camadas e tipos de linha

Entradas de tabela ausentes são adicionadas; **as existentes são deixadas em paz**. Se a área de transferência trouxer uma camada chamada `WALLS` em vermelho e o destino já tiver uma camada `WALLS` em azul, a definição do destino vence e as entidades coladas se juntam a ela — ficarão azuis. Uma colagem não redefine nada no desenho de destino.

Isso importa ao copiar entre desenhos com convenções de camada diferentes: confira o [Layer Manager](../layer-manager/) após uma colagem entre desenhos se as cores não forem as esperadas.

## Quando a área de transferência não tem nada para colar

O ClipboardPaste só aceita conteúdo produzido pelo ClipboardCopy. Qualquer outra coisa na área de transferência — texto simples, uma URL, uma imagem, JSON de outro aplicativo — é rejeitada e o terminal informa:

```
Clipboard has no copied entities
```

Se o navegador recusar totalmente o acesso à área de transferência, a mensagem é **Clipboard access denied**. Ambas encerram o comando sem alterar o desenho.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Ctrl+V` / `Cmd+V` | Ativar ClipboardPaste |
| `Escape` | Cancelar — as entidades são descartadas e nada é adicionado |

Cancelar durante a fase de leitura é seguro: se a área de transferência responder depois de você já ter cancelado ou iniciado outro comando, o resultado atrasado é descartado em vez de interromper o que estiver ativo naquele momento.

## Copiar entre abas

O fluxo típico entre desenhos:

1. Abra o desenho de origem, selecione a geometria, pressione `Ctrl+C`.
2. Vá para a outra aba — ou abra uma segunda aba do aplicativo e carregue outro arquivo.
3. Pressione `Ctrl+V` e clique num ponto de inserção.

As duas abas têm a mesma origem e compartilham a área de transferência do sistema, então nada é enviado e nenhum servidor participa. O conteúdo é texto JSON na sua própria área de transferência o tempo todo.

## Entidades suportadas

Todo tipo de entidade que o ClipboardCopy consegue gravar, o ClipboardPaste consegue ler de volta — com a mesma serialização que o formato nativo `.json` usa.

## Veja também

- [ClipboardCopy](../clipboard-copy/) — gravar a seleção na área de transferência
- [Copy](../copy/) — duplicar entidades dentro do desenho atual
- [Layer Manager](../layer-manager/) — inspecionar as camadas que uma colagem trouxe
