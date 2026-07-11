---
title: New File — Iniciar um Desenho em Branco no KulmanLab CAD
description: O comando New File limpa o canvas e abre um desenho em branco. Um nome de arquivo com timestamp é gerado automaticamente e salvo no armazenamento do navegador.
keywords: [novo arquivo CAD, novo desenho, canvas em branco CAD, criar novo desenho online, novo DXF, KulmanLab novo arquivo, redefinir canvas, limpar desenho]
group: file
order: 2
---

# New File

O comando **New File** limpa o canvas e inicia um desenho em branco. Um nome de arquivo único com timestamp é gerado automaticamente.

## Como criar um novo arquivo

Clique no botão **New File** na barra de ferramentas (ícone de nova página) no painel Arquivo. O canvas limpa imediatamente — sem solicitações ou caixas de confirmação.

## O que o novo arquivo contém

Um arquivo recém-criado começa com:

- **Nenhuma entidade** no canvas.
- **Uma camada padrão** chamada `0` com cor branca e tipo de linha `Continuous`.
- Um **nome de arquivo gerado** no formato `kulman-Seg01_HH:MM:SS.dxf` (ex.: `kulman-Mai22_14:30:00.dxf`).

O arquivo é salvo automaticamente no armazenamento do navegador e aparece em [Arquivos Recentes](../files/).

## Atenção — trabalho não salvo é descartado

Clicar em **New File** descarta todas as entidades no canvas atual sem aviso. Se você quiser manter o desenho atual, [exporte](../export/) primeiro.

## Quando usar New File vs Importar

| Situação | Ação recomendada |
|----------|-----------------|
| Começar um desenho do zero | **New File** |
| Abrir um arquivo DXF ou JSON existente | [Importar](../import/) |
| Copiar um desenho para trabalhar em uma variante | [Exportar](../export/) o arquivo atual, depois [Importar](../import/) a cópia |

## Comandos relacionados

- [Importar](../import/) — abrir um desenho DXF ou JSON existente
- [Exportar](../export/) — baixar o desenho antes de iniciar um novo
- [Files](../files/) — restaurar um desenho anterior do armazenamento do navegador
