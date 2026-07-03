---
sidebar_position: 1
title: Match Properties — Copiar Propriedades de Entidades no KulmanLab CAD
description: O comando MatchProperties copia cor, camada e outras propriedades compartilhadas de uma entidade de origem para uma ou mais entidades de destino. Corresponde às propriedades da mesma forma que as ferramentas CAD de desktop.
keywords: [match properties CAD, copiar propriedades de entidade, MATCHPROP, corresponder camada cor, transferir propriedades, kulmanlab match properties, pintar propriedades, copiar camada CAD]
---

# Match Properties

O comando `MatchProperties` copia **propriedades visuais e de camada** de uma entidade de origem para uma ou mais entidades de destino. Apenas propriedades compartilhadas entre os tipos de entidade de origem e destino são transferidas — a geometria nunca é alterada.

## Como ativar

Clique no botão **Match Properties** na barra de ferramentas (ícone de rolo de pintura) no painel Estilo, ou digite `MatchProperties` no terminal.

## Fluxo de trabalho

**Ative primeiro, depois selecione a origem:**

1. Digite `MatchProperties` ou clique no botão da barra de ferramentas sem nada pré-selecionado.
2. **Clique na entidade de origem** — aquela cujas propriedades você deseja copiar.
3. **Clique em cada entidade de destino** para aplicar as propriedades de origem. Você pode clicar em várias entidades uma por uma.
4. Para aplicar a um grupo de uma vez, **arraste uma caixa de seleção** sobre os destinos.
5. Pressione **Enter** ou **Escape** para terminar.

**Pré-selecione a origem, depois ative:**

1. Clique em uma única entidade para selecioná-la.
2. Ative `MatchProperties`. A entidade selecionada é usada como origem automaticamente.
3. Clique nas entidades de destino ou arraste para selecionar, depois **Enter** ou **Escape** para terminar.

## Quais propriedades são copiadas

MatchProperties copia propriedades que pertencem a uma classe base compartilhada entre origem e destino. No mínimo, **todos os tipos de entidade** compartilham estas propriedades:

| Propriedade | Descrição |
|-------------|-----------|
| **Cor** | O índice de cor da entidade (inclui "Por Camada" / "Por Bloco") |
| **Camada** | A camada à qual a entidade pertence |

Quando origem e destino são do mesmo tipo de entidade (ex.: ambos são cotas), propriedades adicionais específicas do tipo também são copiadas — por exemplo altura do texto, tamanho da seta, configurações de linhas de extensão.

A geometria (coordenadas, raio, comprimento, etc.) nunca é afetada.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção de área ou termina o comando |
| `Escape` | Termina a aplicação (se a origem estiver definida) ou cancela |

## Detalhes de comportamento

- A entidade de origem nunca é modificada.
- Cada clique ou arraste de seleção aplica imediatamente as propriedades de origem — não há etapa de confirmação.
- A seleção por área segue as regras padrão: arraste para **direita** para seleção estrita (totalmente fechada), arraste para **esquerda** para seleção cruzada (qualquer interseção).
- Clicar na entidade de origem como destino é ignorado.
- Para entidades com texto (**Texto**, **Cotas**, **Multileaders**), apenas a altura do texto é copiada — fonte, negrito, itálico e outras configurações de estilo de texto não são igualadas.

## Comandos relacionados

- [LayerMatch](../layer-match/) — move as entidades selecionadas para a mesma camada de uma origem (apenas propriedade de camada)
- [LayerMakeCurrent](../layer-make-current/) — define a camada de desenho atual a partir de uma entidade clicada
