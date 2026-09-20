---
title: Comando Hatch Manager — Navegar e enviar padrões .pat
description: O comando Hatch Manager abre uma caixa de diálogo para navegar por padrões de hatch com pré-visualização de amostra ao vivo, e para enviar seus próprios arquivos de padrão .pat. Arquivos enviados são salvos no navegador e substituem padrões integrados com o mesmo nome.
keywords: [hatch manager, padrão de hatch personalizado CAD, enviar arquivo pat, acad.pat, biblioteca de padrões de hatch, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

O comando `GerenciadorHachuras` abre uma caixa de diálogo para navegar por padrões de hatch com pré-visualização de amostra ao vivo, e para enviar seus próprios arquivos de padrão `.pat` para usar com [Hatch](../hatch/).

## Abrindo o Hatch Manager

Digite `GerenciadorHachuras` no terminal. Isso é separado do seletor de padrões que abre quando você clica no chip **Pattern** de um hatch — o seletor escolhe um padrão para um hatch, o Hatch Manager é onde você adiciona ou remove arquivos `.pat`.

## Grupos de padrões

| Grupo | Conteúdo |
|-------|----------|
| **User** | Padrões dos seus próprios arquivos `.pat` enviados, subagrupados pelo arquivo de origem de cada padrão (mostrado apenas depois de você enviar um) |
| **Standard** | `SOLID` mais a própria tabela de padrões deste desenho — todo novo desenho começa com a mesma biblioteca integrada, assim como suas camadas e tipos de linha |

Clique em qualquer padrão na lista (ou use `↑`/`↓`) para pré-visualizá-lo à direita — uma amostra desenhada com o mesmo código com que a tela é preenchida, então é exatamente o que o desenho mostrará, além do nome, descrição e número de linhas do padrão.

## Enviando um arquivo de padrão personalizado

1. Clique em **Add .pat File** no rodapé da caixa de diálogo.
2. Escolha um arquivo `.pat` — o formato padrão de hatch. Um único arquivo frequentemente define muitos padrões nomeados de uma vez; todos aparecem como entradas separadas agrupadas sob o nome desse arquivo.
3. Arquivos enviados são salvos permanentemente no navegador (IndexedDB), classificados com os mais recentemente adicionados primeiro, e recarregados automaticamente na próxima vez que você abrir o KulmanLab CAD.

Enviar um arquivo que define um padrão com o mesmo nome que um integrado **substitui** o padrão — esta é a forma suportada de obter as definições oficiais de padrão da Autodesk: envie um `acad.pat` real, e suas versões de ANSI31 e dos outros nomes padrão assumem o lugar das aproximações próprias do KulmanLab.

Se um desenho faz referência a um nome de padrão que não está na sua biblioteca — importado de um DXF que usava um padrão de um `acad.pat` que você não enviou — o hatch ainda é renderizado, usando `ANSI31` como substituto, em vez de recorrer a um preenchimento plano e sem padrão.

## Removendo um arquivo de padrão

Clique no **×** ao lado de um nome de arquivo no grupo **User** para removê-lo junto com cada padrão que ele definia. Qualquer hatch que já use um desses padrões recorre imediatamente a `ANSI31`. Padrões **Standard** integrados não podem ser removidos.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `↑` / `↓` | Move a seleção para cima ou para baixo na lista de padrões |
| `Escape` | Fecha o Hatch Manager |

## Comandos relacionados

- [Hatch](../hatch/) — preenche uma área clicada usando o padrão atualmente selecionado
- [Font Manager](../font-manager/) — o mesmo padrão de envio/navegação, para fontes personalizadas em vez de padrões de hatch
