---
sidebar_position: 1
title: LayerIsolate — Congelar Todas as Camadas Exceto as Selecionadas no KulmanLab CAD
description: O comando LayerIsolate congela todas as camadas exceto as usadas pelos objetos selecionados, permitindo focar em geometria específica sem excluir nada.
keywords: [layer isolate, congelar camadas CAD, isolar camada kulmanlab, gerenciamento de camadas CAD]
---

# LayerIsolate

O comando `LayerIsolate` congela todas as camadas **exceto** as pertencentes aos objetos selecionados. Use-o para focar rapidamente em geometria específica sem ocultar ou excluir nada permanentemente — descongele com [LayerUnfreezeAll](../layer-unfreeze-all/) quando terminar.

## Duas formas de começar

**Pré-selecionar, depois isolar** — selecione entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `LayerIsolate` no terminal ou clique no botão **Layer Isolate** na barra de ferramentas.
3. As camadas das entidades selecionadas permanecem visíveis; todas as outras são congeladas imediatamente.

**Ativar, depois selecionar**:

1. Digite `LayerIsolate` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique em entidades individuais ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar — o isolamento é aplicado.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção e aplica o isolamento |
| `Escape` | Cancela e limpa a seleção |

## Detalhes de comportamento

- Todas as camadas que **não** estão representadas na seleção são definidas como congeladas.
- As camadas que **estão** representadas permanecem descongeladas, mesmo que estivessem congeladas antes.
- A seleção é limpa após o isolamento ser aplicado.
- O comando termina automaticamente após ser aplicado.

## Desfazer o isolamento

Execute [LayerUnfreezeAll](../layer-unfreeze-all/) para restaurar todas as camadas para visível num único passo.
