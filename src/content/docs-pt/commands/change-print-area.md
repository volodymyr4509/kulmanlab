---
title: ChangePrintArea — Recortar a exportação do Print Manager num retângulo
description: O comando ChangePrintArea escolhe dois cantos opostos na tela para definir a região que o Print Manager exporta. Suporta coordenadas X,Y digitadas e ajuste, e lembra a área separadamente para o espaço Modelo e para cada layout.
keywords: [área de impressão CAD, recortar exportação CAD, comando change print area, recorte print manager, região de exportação CAD, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

O comando `ChangePrintArea` define a região retangular que o [Print Manager](../print-manager/) exporta. Ele roda na tela com o Print Manager oculto e recebe dois cantos opostos — os mesmos dois cliques do [Rectangle](../rectangle/), portanto coordenadas digitadas e ajuste funcionam exatamente como lá.

## Selecionar uma área

1. Digite `ChangePrintArea` no terminal, ou clique em **Change Area** na barra lateral do Print Manager. O Print Manager se oculta e a tela fica interativa.
2. **Clique no primeiro canto**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no canto oposto**, ou digite `X,Y` novamente.

O Print Manager reabre com a nova área na prévia, que se redimensiona para a proporção exata dessa área.

Os cantos se ajustam a grips e interseções como qualquer outro ponto, permitindo recortar pela geometria desenhada em vez de a olho. A ordem dos dois cantos não importa: cantos opostos definem o mesmo retângulo.

Pressione `Escape` para cancelar. Nada é gravado, então o Print Manager reabre com a área que já tinha.

## Onde a área é lembrada

A seleção é guardada por contexto, não globalmente:

| Contexto | Espaço |
|---|---|
| Espaço modelo | Um espaço compartilhado |
| Cada layout | O seu próprio espaço, guardado à parte |

Reabrir o Print Manager no mesmo layout — ou no Modelo — restaura o último recorte dele em vez de reiniciar, e alternar entre layouts mantém a área de cada um intacta.

Isto fica apenas em memória. Recarregar a página apaga todas as áreas guardadas e o Print Manager volta aos padrões abaixo.

## Área padrão

Sem nada guardado para o contexto atual, o Print Manager abre em:

| Contexto | Padrão |
|---|---|
| Espaço modelo | A caixa delimitadora de todas as entidades — a mesma extensão para a qual [Fit](../fit/) dá zoom |
| Cada layout | A folha inteira |

## Comandos relacionados

| Comando | O que faz |
|---|---|
| [Print Manager](../print-manager/) | A janela de exportação à qual esta área se aplica |
| [Rectangle](../rectangle/) | O mesmo clique de dois cantos, mas desenha uma polilinha |
| [Fit](../fit/) | Dá zoom na extensão que o espaço Modelo usa por padrão |
