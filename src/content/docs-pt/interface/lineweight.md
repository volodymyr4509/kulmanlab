---
sidebar_position: 3
title: Seletor de Espessura de Linha — Controlar a Largura do Traço no KulmanLab CAD
description: O seletor de espessura de linha na barra de ferramentas do KulmanLab CAD define a largura do traço aplicada a todas as entidades desenhadas subsequentemente. Suporta valores DXF padrão de 0,00 mm a 2,11 mm mais os modos ByLayer e Default.
keywords: [CAD espessura linha, largura traço, largura linha, DXF lineweight, ByLayer lineweight, kulmanlab]
---

# Espessura de linha

O seletor de **espessura de linha** na barra de ferramentas controla a largura do traço atribuída a cada nova entidade que você desenha. Clique nele para abrir o menu suspenso.

## Opções

| Valor | Significado |
|-------|------------|
| **Da Camada** | A entidade herda a espessura definida em sua camada. A largura real mostrada depende da configuração da camada. |
| **Default** | Usa a largura padrão do aplicativo — renderizada como linha fina (1 px). Não substitui a configuração da camada no DXF. |
| **0,00 mm – 2,11 mm** | Uma largura fixa explícita. A entidade carrega esse valor independentemente da espessura da sua camada. |

Os valores DXF padrão estão disponíveis: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 e 2,11 mm.

## Como se aplica

A espessura de linha selecionada é aplicada a cada entidade criada após a alteração. Não afeta retroativamente as entidades existentes.

Para alterar a espessura de linha de entidades existentes, selecione-as e edite o campo **Espessura de linha** no painel de propriedades, ou use [MatchProperties](../commands/match-properties) para copiá-lo de outra entidade.

## Renderização

Espessuras de linha são renderizadas a uma escala de **3,78 px por mm** (96 dpi). Uma linha de 0,25 mm tem aproximadamente 1 px de largura na tela; uma de 1,00 mm tem aproximadamente 4 px. Valores muito finos (0,00 mm e negativos) são sempre renderizados com pelo menos 0,5 px para permanecerem visíveis em qualquer nível de zoom.

## Compatibilidade DXF

Os valores de espessura de linha são armazenados como inteiros em centésimos de milímetro (ex.: 25 = 0,25 mm) nos registros de entidade DXF `LWPOLYLINE`, `LINE`, `CIRCLE` e outros. **Da Camada** é armazenado como `-1` e **Default** como `-3`, correspondendo à especificação DXF. Os arquivos fazem round-trip sem perda em qualquer aplicação compatível com DXF.
