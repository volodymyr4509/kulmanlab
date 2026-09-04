---
title: Comando HatchAdd — enviar um arquivo de padrões .pat pelo terminal
description: HatchAdd abre o seletor de arquivos para enviar um arquivo .pat sem abrir antes o Hatch Manager. Todos os padrões que ele define são adicionados de uma vez.
keywords: [comando hatch add, comando hatchadd, enviar arquivo pat terminal, padrão de hachura personalizado CAD, acad.pat, biblioteca de padrões, kulmanlab]
group: style
order: 5
---

# HatchAdd

O comando `HatchAdd` abre o seletor de arquivos do sistema para enviar um arquivo de padrões de hachura `.pat`, sem abrir antes a caixa de diálogo [Hatch Manager](../hatch-manager/). É o mesmo envio que o botão **Add .pat File** do Hatch Manager dispara — HatchAdd é apenas um caminho direto até ele pelo terminal.

## Enviar um arquivo de padrões

1. Digite `HatchAdd` no terminal, ou clique em **Add .pat File** no rodapé da caixa de diálogo [Hatch Manager](../hatch-manager/).
2. Escolha um arquivo `.pat` no seletor do sistema. Só o formato padrão de padrões de hachura é aceito.

O comando termina assim que o seletor de arquivos abre — não há mais nenhuma pergunta, clique ou entrada no terminal. Os padrões são registrados e aparecem no grupo **User** assim que o arquivo é escolhido.

## O que acontece ao enviar

- **Um arquivo `.pat` é um recipiente, não um único padrão.** Um só arquivo costuma definir muitos padrões nomeados, e todos são adicionados juntos. É aqui que HatchAdd difere de [FontAdd](../font-add/), onde um `.ttf` é uma fonte.
- **O arquivo em si não é guardado.** Ele é lido uma vez, dividido em seus padrões, e cada padrão é salvo sozinho sob o próprio nome. Por isso você pode remover um padrão depois sem mexer nos que vieram junto — e por isso o grupo **User** os lista em ordem alfabética de nome, e não pelo arquivo de origem.
- **Um padrão cujo nome coincide com um existente o substitui.** É a forma prevista de instalar definições oficiais por cima das aproximações do KulmanLab: envie um `acad.pat` de verdade e as versões dele de `ANSI31` e dos outros nomes padrão assumem.
- **Os padrões são salvos por usuário, não por desenho.** Ficam no navegador (IndexedDB), recarregam sozinhos na próxima vez que você abrir o KulmanLab CAD, e estão disponíveis em qualquer desenho.
- **Um arquivo sem definições de padrão válidas não adiciona nada.** A biblioteca fica exatamente como estava.

## Referência de teclado

HatchAdd não tem interação de teclado própria — o comando inteiro é a caixa de diálogo nativa de seleção de arquivos do navegador. Cancelar essa caixa (ou não escolher arquivo) deixa a biblioteca de padrões inalterada.

## Comandos relacionados

| Comando | O que faz |
|---------|-----------|
| [Hatch Manager](../hatch-manager/) | Navegar pela biblioteca de padrões com pré-visualização ao vivo e remover padrões enviados |
| [Hatch](../hatch/) | Preenche uma região fechada com um padrão da biblioteca |
| [FontAdd](../font-add/) | O mesmo atalho de envio direto para fontes `.ttf` |
