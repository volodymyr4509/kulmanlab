---
sidebar_position: 5
title: Comando Arc — Desenhar Arcos de Três Pontos pelo Método da Circunferência no KulmanLab CAD
description: O comando Arc desenha um arco circular através de exatamente três pontos clicados usando geometria de circunferência. Os grips de início e fim permitem arrastar os pontos finais para um novo ângulo e raio após o posicionamento. Compatibilidade DXF completa como entidades ARC.
keywords: [comando arc CAD, arco de três pontos CAD, arco circunferência, desenhar arco CAD, entidade ARC DXF, edição grip arco, kulmanlab]
---

# Arc

O comando `arc` desenha um arco circular através de três pontos que você clica. O arco é calculado como a circunferência única que passa pelos três pontos — sem necessidade de especificar centro ou raio diretamente. O arco vai do primeiro clique ao terceiro clique, passando pelo segundo.

## Desenhar um arco

1. Digite `arc` no terminal ou clique no botão **Arc** na barra de ferramentas.
2. **Clique no primeiro ponto** — uma extremidade do arco. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no segundo ponto** — um ponto pelo qual o arco deve passar (controla curvatura e direção). A entrada de coordenadas também funciona aqui.
4. **Clique no terceiro ponto** — a outra extremidade do arco. O arco é posicionado e o comando termina. A entrada de coordenadas também funciona aqui.

```
           ● (2º clique — ponto médio na curva)
          / \
         /   \
        ●     ●
     1º         3º
```

Uma pré-visualização em linha conecta os dois primeiros cliques enquanto você posiciona o terceiro. A partir do segundo clique uma pré-visualização ao vivo do arco acompanha o cursor.

> **Pontos colineares**: se os três pontos estiverem numa linha reta o arco não pode ser calculado e nenhuma entidade é posicionada. Mova o segundo ponto para fora da linha e tente novamente.

## Entrada de coordenadas

Em qualquer um dos três passos você pode digitar uma posição exata em vez de clicar:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o ponto.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X |
| `,` | Bloqueia X e passa para entrada Y |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma a coordenada digitada |
| `Escape` | Descarta todos os pontos posicionados e sai |

## Edição com grips — ajuste de pontos finais e raio

Um arco selecionado expõe três grips:

| Grip | Posição | Função |
|------|---------|--------|
| **Centro** | Centro geométrico da circunferência | Move o arco inteiro; raio e ângulos inalterados |
| **Início** | Primeiro ponto final do arco | Arraste para mover o início ao longo da circunferência — altera ângulo inicial e raio |
| **Fim** | Último ponto final do arco | Arraste para mover o fim ao longo da circunferência — altera ângulo final e raio |

Arrastar um grip de início ou fim reposiciona-o no local de arraste e recalcula o ângulo e o raio a partir dessa nova posição em relação ao centro. O ponto final oposto permanece fixo.

## Selecionar arcos

| Método | Comportamento |
|--------|--------------|
| **Clique** | Seleciona se o clique estiver próximo da curva do arco (não da corda) |
| **Arrastar à direita** (estrito) | Pontos de amostra distribuídos ao longo do arco devem estar todos dentro do retângulo |
| **Arrastar à esquerda** (cruzamento) | Qualquer ponto de amostra no arco que caia dentro do retângulo seleciona-o |

## Comandos de edição suportados

| Comando | Efeito no arco |
|---------|---------------|
| [Move](../move/) | Translada o centro; raio e ângulos inalterados |
| [Copy](../copy/) | Cria um arco idêntico numa nova posição |
| [Rotate](../rotate/) | Roda o centro e desloca os ângulos de início/fim pela quantidade de rotação |
| [Mirror](../mirror/) | Reflete o centro e inverte os ângulos de início/fim em relação ao eixo especular |
| [Scale](../scale/) | Escala a posição do centro e multiplica o raio pelo fator de escala |
| [Offset](../offset/) | Cria um arco concêntrico a raio maior ou menor, mesmo intervalo angular |
| [Delete](../delete/) | Remove o arco |

## Propriedades

**Gerais**

| Propriedade | Padrão | Significado |
|-------------|--------|-------------|
| Cor | 256 (ByLayer) | Índice de cor ACI |
| Camada | `0` | Atribuição de camada |
| Tipo de linha | ByLayer | Padrão de tipo de linha com nome |
| Escala do tipo de linha | 1 | Fator de escala no padrão de tipo de linha |
| Espessura | 0 | Espessura de extrusão |

**Geometria**

| Propriedade | Significado |
|-------------|-------------|
| Centro X / Centro Y | Centro da circunferência |
| Raio | Raio da circunferência |
| Ângulo inicial | Ângulo em graus onde o arco começa (medido a partir do eixo X positivo) |
| Ângulo final | Ângulo em graus onde o arco termina |

## Arc vs Circle — quando usar cada um

| | Arc | Circle |
|---|-----|--------|
| Extensão | Parcial — do primeiro ao terceiro clique | 360° completo |
| Método de entrada | Três pontos na curva | Centro + raio (clique ou digitação) |
| Entrada digitada | Coordenada X,Y para cada ponto | Valor do raio (o centro também aceita X,Y) |
| Redimensionar após posicionamento | Arrastar grips de início/fim | Arrastar qualquer grip cardinal |
| Ideal para | Chanfros, cantos arredondados, percursos em curva | Furos completos, elementos redondos |

## DXF — entidade ARC

Os arcos são salvos como entidades `ARC` no arquivo DXF, armazenando coordenadas do centro, raio, ângulo inicial e ângulo final. Todas as propriedades — incluindo cor, camada, tipo de linha, escala do tipo de linha e espessura — são mantidas sem perda. Qualquer aplicação compatível com DXF (LibreCAD, FreeCAD, etc.) os lê como arcos padrão.
