---
sidebar_position: 4
title: Editor de Texto — Modos Rich e Simple no KulmanLab CAD
description: O editor de texto do KulmanLab CAD tem dois modos — rich (formatação por caractere, multi-linha, quebra automática para Text e Multileader) e simple (estilo uniforme, linha única para entidades de cota). Um mode chip no cabeçalho mostra qual modo está ativo.
keywords: [CAD editor de texto, MTEXT, negrito itálico CAD, formatação texto CAD, texto multi-linha CAD, quebra automática CAD, editor texto rich, editor texto simple, editor texto cota, fonte personalizada CAD, enviar ttf CAD, kulmanlab]
---

# Editor de texto

O editor de texto abre quando você posiciona ou dá duplo clique em uma entidade editável. Um pequeno **mode chip** no cabeçalho — **rich** (cor de destaque) ou **simple** (atenuado) — mostra qual modo está ativo para a entidade atual.

## Modos do editor

### Rich mode

Usado por: **Text** (etiquetas MTEXT) e anotações **Multileader**.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Strikethrough | Por caractere (aplica à seleção, ou à entidade inteira se não houver seleção) |
| Font e Height | Substituição por caractere, ou padrão da entidade |
| `Enter` | Insere uma quebra de linha dura |
| `Shift+←/→` | Estende ou reduz uma seleção de texto |
| `Home` / `End` | Salta ao início / fim da linha dura atual |
| Quebra automática | Suportada via grips de redimensionamento de largura de referência |

### Simple mode

Usado por: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

O editor é pré-preenchido com a etiqueta renderizada atual da cota para que você possa posicionar o cursor e editar o valor diretamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Disponível — aplica-se à **etiqueta inteira** de uma vez |
| Formatação por caractere | Não suportada |
| `Enter` | **Confirma** o valor e fecha o editor (sem quebra de linha) |
| Multi-linha | Não suportado |
| Quebra automática | Não suportada |

## Abrindo o editor

| Ação | Resultado |
|------|-----------|
| Comando `text` → clique na posição | Cria uma nova entidade de texto e abre o editor (**rich**) |
| Duplo clique em uma entidade **Text** existente | Reabre o editor em **rich** mode |
| Duplo clique em um **Multileader** existente | Abre o editor em **rich** mode |
| Duplo clique em uma entidade de **cota** | Abre o editor em **simple** mode |
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

O menu agrupa as fontes disponíveis em **Default** (a fonte sans-serif integrada), **User** (suas próprias fontes enviadas, se houver), **Free** (um conjunto de Google Fonts incluídas) e **System** (fontes comuns do sistema operacional, como Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console e Impact).

- **Com uma seleção** — substitui a fonte apenas para os caracteres selecionados.
- **Sem seleção** — aplica a fonte a toda a entidade.

O menu reflete a fonte do caractere à esquerda do cursor quando não há seleção.

Você não fica limitado à lista integrada — clique no botão **Font Manager** na barra de ferramentas para enviar seu próprio arquivo `.ttf` e adicioná-lo ao grupo **User**. Veja [Font Manager](../../commands/font-manager/) para mais detalhes.

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

## Copiar, cortar e colar

| Tecla | Ação |
|-------|------|
| `Ctrl+C` / `Cmd+C` | Copiar o texto selecionado |
| `Ctrl+X` / `Cmd+X` | Cortar o texto selecionado |
| `Ctrl+V` / `Cmd+V` | Colar no cursor |

Copiar e cortar exigem uma seleção de texto ativa. O texto colado é sempre texto simples — ele assume a formatação (negrito, itálico, fonte, altura) já presente no cursor, em vez de manter a formatação que tinha ao ser copiado.

No **Rich mode**, as quebras de linha no texto colado são preservadas. No **Simple mode**, as quebras de linha são removidas, já que os rótulos de cota são de linha única.

## Quebra automática de linha

Quando uma entidade de texto tem uma **largura de referência** definida, linhas longas são quebradas automaticamente nos limites de palavras para caber dentro dessa largura.

Para definir ou alterar a largura de referência enquanto a entidade está selecionada, arraste os **grips de redimensionamento** — os retângulos finos nas bordas esquerda e direita da caixa delimitadora tracejada. O conteúdo reflui em tempo real enquanto você arrasta.

Definir a largura de referência para zero (arraste os grips juntos ou exclua o valor no painel de propriedades) remove a quebra automática e deixa as linhas crescerem livremente.

## Texto multi-linha

Pressione `Enter` para inserir uma quebra de linha dura. Cada linha dura é independente — `Home` e `End` navegam apenas dentro da linha dura atual.

Quebras de linha duras e formatação por caractere são armazenadas usando o formato MTEXT e sobrevivem a um round-trip DXF completo.

## Compatibilidade DXF

Entidades de texto são armazenadas como **MTEXT** em arquivos DXF. Negrito e itálico são codificados usando `\L`, `\K`, `\O` e trocas de fonte inline (`\f`). Altura por caractere é codificada como `\H`. Toda a formatação é preservada na exportação e legível pelo LibreCAD, FreeCAD e outras aplicações compatíveis com DXF.
