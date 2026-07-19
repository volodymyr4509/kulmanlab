---
title: LayerMatch — Reatribuir Camadas de Entidades a uma Fonte
description: O comando LayerMatch reatribui a camada de uma ou mais entidades alvo para corresponder à camada de uma entidade fonte que você clica.
keywords: [layer match, correspondência de camada CAD, reatribuir camada kulmanlab, gerenciamento de camadas CAD]
group: layer
order: 2
---

# LayerMatch

O comando `LayerMatch` reatribui a camada das entidades selecionadas para corresponder à camada de uma entidade fonte que você clica. É a maneira mais rápida de mover um grupo de objetos para a camada correta sem abrir o Gerenciador de Camadas.

## Fluxo de trabalho

**Pré-selecionar, depois corresponder**:

1. Selecione as entidades cuja camada deseja alterar.
2. Digite `LayerMatch` ou clique no botão **Layer Match** na barra de ferramentas (ícone de pincel).
3. **Clique no objeto fonte** — aquele cuja camada deseja copiar.
4. Todas as entidades selecionadas movem imediatamente para a camada do objeto fonte.

**Ativar, depois selecionar**:

1. Digite `LayerMatch` ou clique no botão da barra de ferramentas sem nada selecionado.
2. **Selecione as entidades alvo** — clique para alternar entidades individuais ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. **Clique no objeto fonte** — sua camada é aplicada a todos os alvos.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção alvo e avança para a fase de pick da fonte |
| `Escape` | Reinicia — volta à seleção alvo ou cancela completamente |

## Detalhes de comportamento

- Apenas a propriedade `layer` é alterada — cor, tipo de linha, espessura de linha e geometria permanecem intactos.
- O objeto fonte em si não é modificado.
- O comando termina após o clique na fonte.
- Clicar no canvas vazio durante a fase de pick da fonte não faz nada.
