---
title: Comando Font Manager — Enviar e Gerenciar Fontes TTF Personalizadas no KulmanLab CAD
description: O comando Font Manager abre uma caixa de diálogo para navegar, pré-visualizar e selecionar fontes, e para enviar seus próprios arquivos .ttf. As fontes enviadas são salvas no navegador e incorporadas pelo nome nas exportações DXF.
keywords: [font manager, fonte personalizada CAD, enviar ttf, tipografia personalizada CAD, google fonts CAD, fonte de texto CAD, kulmanlab]
group: style
order: 2
---

# Font Manager

O comando `FontManager` abre uma caixa de diálogo para navegar e selecionar fontes, e para enviar seus próprios arquivos `.ttf` para uso em entidades [Text](../text/) e [Multileader](../leader/).

## Abrir o Font Manager

- Digite `FontManager` no terminal, **ou**
- Clique no botão **Font Manager** na barra de ferramentas do [editor de texto](../../interface/text-editor/).

## Grupos de fontes

| Grupo | Conteúdo |
|-------|----------|
| **Default** | A fonte sans-serif integrada — sempre disponível |
| **User** | Suas próprias fontes `.ttf` enviadas (exibido somente depois que você adicionar uma) |
| **Free** | 15 Google Fonts incluídas (EB Garamond, Fira Code, Inter, Lato, Merriweather, Montserrat, Nunito, Open Sans, Oswald, Playfair Display, Poppins, Raleway, Roboto, Roboto Condensed, Source Code Pro) |
| **System** | Fontes comuns do sistema operacional (Courier New, Georgia, Helvetica, Impact, Lucida Console, Tahoma, Times New Roman, Trebuchet MS, Verdana) |

Clique em qualquer fonte da lista para pré-visualizá-la à direita — nome, amostra do alfabeto, um pangrama e dígitos.

## Enviar uma fonte personalizada

1. Clique em **Add Font** no rodapé da caixa de diálogo (ou digite `Font+` no terminal para abrir o seletor de arquivos diretamente).
2. Escolha um arquivo `.ttf`. Apenas fontes TrueType são suportadas — `.otf` e `.woff`/`.woff2` não são.
3. O nome do arquivo (sem a extensão) se torna o nome da fonte no grupo **User**. Por exemplo, enviar `MyFont.ttf` adiciona uma fonte chamada `MyFont`.

As fontes enviadas são salvas permanentemente no navegador (IndexedDB) e recarregam automaticamente na próxima vez que você abrir o KulmanLab CAD.

## Remover uma fonte personalizada

Passe o cursor sobre uma fonte no grupo **User** e clique no botão **×** ao lado dela. As fontes integradas (Default, Free, System) não podem ser removidas.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `↑` / `↓` | Mover a seleção para cima ou para baixo na lista de fontes |
| `Escape` | Fechar o Font Manager |

## Compatibilidade com DXF

O nome da fonte é incorporado nas entidades **MTEXT** exportadas como um código de formatação em linha, de modo que um DXF que passa por exportação e reimportação no KulmanLab CAD mantém sua atribuição de fonte. Os *arquivos* de fonte personalizados não são incorporados no DXF — apenas o *nome* da fonte é. Se você reimportar um desenho que referencia uma fonte personalizada que ainda não enviou neste dispositivo, o texto é renderizado com a fonte padrão até que você envie uma fonte com esse mesmo nome.

## Comandos relacionados

- [Text](../text/) — coloca as etiquetas de texto às quais as escolhas de fonte se aplicam
- [Match Properties](../match-properties/) — copia a altura do texto, mas não a fonte, entre entidades
