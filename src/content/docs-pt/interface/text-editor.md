---
sidebar_position: 4
title: Editor de Texto — Formatação Rich-Text no KulmanLab CAD
description: O editor de texto do KulmanLab CAD permite colocar etiquetas MTEXT multi-linha com negrito, itálico, tachado, substituições de fonte e altura por caractere, quebra automática de linha e navegação completa do cursor.
keywords: [CAD editor de texto, MTEXT, negrito itálico CAD, formatação texto CAD, texto multi-linha CAD, quebra automática CAD, kulmanlab]
---

# Editor de texto

O editor de texto abre sempre que você coloca uma nova etiqueta de texto com o comando `text` ou dá duplo clique em uma entidade de texto existente. Suporta conteúdo multi-linha, formatação por caractere e quebra automática de linha.

## Abrindo o editor

| Ação | Resultado |
|------|-----------|
| Comando `text` → clique na posição | Cria uma nova entidade de texto e abre o editor |
| Duplo clique em uma entidade de texto existente | Reabre o editor para aquela entidade |
| `Escape` dentro do editor | Fecha o editor e mantém todas as alterações |

## Barra de ferramentas

A barra de ferramentas flutua acima da caixa delimitadora do texto e permanece ancorada à entidade enquanto você faz pan ou zoom.

### Negrito · Itálico · Tachado

| Botão | O que faz |
|-------|-----------|
| **N** | Alterna negrito |
| *I* | Alterna itálico |
| ~~T~~ | Alterna tachado |

**Como a alternância se aplica:**

- **Com uma seleção de texto** — o estilo é aplicado exatamente apenas aos caracteres selecionados.
- **Sem seleção, cursor no texto existente** — alterna o estilo em toda a entidade (todos os segmentos).
- **Texto vazio ou nova entidade** — o estilo é armazenado no segmento vazio e aplicado a cada caractere digitado a partir desse ponto.

O botão aparece destacado (ativo) quando cada caractere na seleção atual — ou o caractere imediatamente à esquerda do cursor — tem esse estilo definido.

### Fonte

O menu lista um conjunto selecionado de fontes cross-platform (Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console, Impact). A primeira opção **Arial** é o padrão.

- **Com uma seleção** — substitui a fonte apenas para os caracteres selecionados.
- **Sem seleção** — aplica a fonte a toda a entidade.

O menu reflete a fonte do caractere à esquerda do cursor quando não há seleção.

### Altura

O campo numérico define a **altura das maiúsculas** (altura de uma letra maiúscula) em unidades de desenho.

- **Com uma seleção** — substitui a altura para os caracteres selecionados, independentemente da altura de base da entidade.
- **Sem seleção** — altera a altura de base da entidade (aplica a todos os caracteres que não têm uma substituição de altura individual).

O campo reflete a altura do caractere à esquerda do cursor. Deixe em branco para usar o padrão da entidade.

## Cursor e navegação

| Tecla | Ação |
|-------|------|
| `←` / `→` | Move o cursor um caractere para a esquerda ou direita |
| `Home` | Salta para o início da linha dura atual |
| `End` | Salta para o fim da linha dura atual |
| `Shift` + `←` / `→` | Estende ou reduz a seleção |
| `Backspace` | Exclui o caractere à esquerda (ou a seleção) |
| `Delete` | Exclui o caractere à direita (ou a seleção) |
| `Enter` | Insere uma quebra de linha |
| `Escape` | Fecha o editor |

A altura do cursor corresponde automaticamente à altura das maiúsculas do caractere adjacente.

## Quebra automática de linha

Quando uma entidade de texto tem uma **largura de referência** definida, linhas longas são quebradas automaticamente nos limites de palavras para caber dentro dessa largura.

Para definir ou alterar a largura de referência enquanto a entidade está selecionada, arraste os **grips de redimensionamento** — os retângulos finos nas bordas esquerda e direita da caixa delimitadora tracejada. O conteúdo reflui em tempo real enquanto você arrasta.

Definir a largura de referência para zero (arraste os grips juntos ou exclua o valor no painel de propriedades) remove a quebra automática e deixa as linhas crescerem livremente.

## Texto multi-linha

Pressione `Enter` para inserir uma quebra de linha dura. Cada linha dura é independente — `Home` e `End` navegam apenas dentro da linha dura atual.

Quebras de linha duras e formatação por caractere são armazenadas usando o formato MTEXT e sobrevivem a um round-trip DXF completo.

## Compatibilidade DXF

Entidades de texto são armazenadas como **MTEXT** em arquivos DXF. Negrito e itálico são codificados usando `\L`, `\K`, `\O` e trocas de fonte inline (`\f`). Altura por caractere é codificada como `\H`. Toda a formatação é preservada na exportação e legível pelo LibreCAD, FreeCAD e outras aplicações compatíveis com DXF.
