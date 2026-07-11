---
title: Seletor de Tipo de Linha — Controlar Padrões de Traço no KulmanLab CAD
description: O seletor de tipo de linha na barra de ferramentas do KulmanLab CAD define o padrão de traço aplicado a todas as entidades desenhadas subsequentemente. Suporta todos os tipos de linha carregados do arquivo DXF atual mais as opções ByLayer, ByBlock e Continuous embutidas.
keywords: [CAD tipo linha, padrão traço, linha tracejada, DXF linetype, ByLayer linetype, kulmanlab]
group: interface
order: 3
---

# Tipo de linha

O seletor de **tipo de linha** na barra de ferramentas controla o padrão de traço atribuído a cada nova entidade que você desenha. Clique nele para abrir o menu suspenso.

## Opções

| Valor | Significado |
|-------|------------|
| **Da Camada** | A entidade herda o tipo de linha definido em sua camada. Mostrado como `ByLayer` no DXF. |
| **ByBlock** | A entidade herda o tipo de linha do bloco ao qual pertence. Não tem efeito visual fora de um bloco. |
| **Continuous** | Linha sólida ininterrupta — sem padrão de traço. |
| **Tipos de linha nomeados** | Qualquer tipo de linha carregado do arquivo DXF atual (ex.: `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM`, …). O menu mostra uma prévia ao vivo de cada padrão e sua string de definição. |

## Como se aplica

O tipo de linha selecionado é aplicado a cada entidade criada após a alteração. Não afeta retroativamente as entidades existentes.

Para alterar o tipo de linha de entidades existentes, selecione-as e edite o campo **Tipo de linha** no painel de propriedades, ou use [MatchProperties](../../commands/match-properties/) para copiá-lo de outra entidade.

## Escala do tipo de linha

Cada entidade também tem uma propriedade **Escala do tipo de linha** (padrão `1`). O padrão de traço é multiplicado por esse fator. Um valor de `2` torna os traços duas vezes mais longos; `0,5` os torna metade do comprimento. Edite-o no painel de propriedades após selecionar uma entidade.

## Tipos de linha disponíveis

O menu lista apenas os tipos de linha presentes no arquivo DXF atualmente carregado. Um arquivo recém-criado contém apenas `ByLayer`, `ByBlock` e `Continuous`. Quando você importa um DXF, todos os tipos de linha definidos na tabela `$LTYPE` do arquivo ficam disponíveis.

Se você precisar de um tipo de linha específico (ex.: `DASHED2`) que não está na lista, importe um arquivo DXF que o contenha — o tipo de linha então aparecerá no seletor para a sessão atual.

## Compatibilidade DXF

Nomes de tipos de linha são armazenados como strings nos registros de entidade. `ByLayer` e `ByBlock` são os valores sentinel DXF padrão. Todos os tipos de linha nomeados e seus padrões de traço são preservados exatamente na exportação e fazem round-trip sem perda no LibreCAD, FreeCAD e outras aplicações compatíveis com DXF.
