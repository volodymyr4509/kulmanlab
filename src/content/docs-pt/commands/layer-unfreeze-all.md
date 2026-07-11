---
title: LayerUnfreezeAll — Descongelar Todas as Camadas no KulmanLab CAD
description: O comando LayerUnfreezeAll remove o flag de congelamento de cada camada do desenho em um único passo.
keywords: [layer unfreeze, descongelar todas as camadas CAD, kulmanlab gerenciamento de camadas]
group: layer
order: 4
---

# LayerUnfreezeAll

O comando `LayerUnfreezeAll` remove o flag de congelamento de **cada camada** do desenho instantaneamente. Não é necessária nenhuma seleção ou confirmação — o comando é executado e termina em um único passo.

## Uso

Digite `LayerUnfreezeAll` no terminal ou clique no botão **Unfreeze All** na barra de ferramentas (ícone de sol). Todas as camadas congeladas ficam visíveis imediatamente.

## Quando usar

Tipicamente usado após [LayerIsolate](../layer-isolate/) para restaurar todas as camadas ao estado visível normal.

## Detalhes de comportamento

- Aplica-se a todas as camadas independentemente do estado atual.
- Não afeta flags de bloqueio ou de impressão — apenas o flag de congelamento é alterado.
- O comando termina imediatamente sem nenhuma solicitação.
