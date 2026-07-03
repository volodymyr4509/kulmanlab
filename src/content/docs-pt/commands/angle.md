---
sidebar_position: 1
title: Comando Angle — Medir o Ângulo Interior num Vértice com Três Pontos no KulmanLab CAD
description: O comando Angle mede o ângulo interior (0°–180°) num vértice definido por três pontos clicados. Clique no primeiro ponto, vértice e segundo ponto. O resultado é mostrado no terminal com 4 casas decimais.
keywords: [medição de ângulo CAD, ângulo de três pontos, ângulo interior CAD, comando medir ângulo, ângulo vértice, kulmanlab]
---

# Angle

O comando `angle` mede o ângulo interior num vértice formado por dois segmentos de reta através de três pontos clicados. O resultado — sempre entre 0° e 180° — é apresentado no terminal com 4 casas decimais. É um dos dois comandos de medição — [Distance](../distance/) mede comprimentos em linha reta.

## Anatomia de uma medição de ângulo

```
  ● primeiro ponto (extremidade do primeiro raio)
   \
    \  pré-visualização do primeiro raio
     \
      ● vértice (passo 3)
     /
    /  pré-visualização do segundo raio (em direção ao cursor)
   /
  ● terceiro ponto  →  terminal: "Angle: 45.0000°"
```

- **Primeiro ponto** — uma extremidade do ângulo (passo 2).
- **Vértice** — o canto onde o ângulo é medido (passo 3).
- **Terceiro ponto** — a outra extremidade do ângulo (passo 4).

## Medir um ângulo

1. Digite `angle` no terminal ou clique no botão **Angle** na barra de ferramentas.
2. **Clique no primeiro ponto** — uma extremidade do ângulo. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no vértice** — o canto onde os dois braços se encontram. A entrada de coordenadas também funciona aqui.
4. **Clique no terceiro ponto** — a segunda extremidade do braço. A entrada de coordenadas também funciona aqui. Ao colocar este ponto o resultado é impresso.
5. **Clique novamente** (opcional) para iniciar uma nova medição a partir desse clique como novo primeiro ponto.

## Convenção do ângulo interior

O comando calcula o ângulo usando o produto escalar dos dois raios a partir do vértice:

- **Sempre interior**: o resultado é o menor ângulo, entre 0° e 180°.
- A ordem em que clica nos pontos finais não afeta o resultado — apenas a posição do vértice é relevante.
- Pontos colineares (todos os três numa linha) retornam 0° ou 180°.

## Encadeamento de medições

Após o resultado aparecer, clicar inicia imediatamente a próxima medição — o ponto clicado torna-se o novo primeiro ponto. O comando nunca sai automaticamente até pressionar `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| O que mede | Ângulo interior num vértice | Comprimento em linha reta |
| Número de cliques | 3 | 2 |
| Formato do resultado | `45.0000°` | `12.3456` (unidades) |
| Pré-visualização no canvas | Duas linhas do vértice para ambas as extremidades | Linha do primeiro ponto ao cursor |
| Ideal para | Ângulo de abertura entre dois elementos | Comprimento de uma lacuna ou segmento |

## Entrada de coordenadas

Em vez de clicar, digite uma posição exata para qualquer um dos três pontos:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para confirmar.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X |
| `,` | Bloqueia X e passa para entrada Y |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma a coordenada digitada |
| `Escape` | Cancela e volta ao passo 2 |

## Notas

- Os resultados são exibidos apenas no **terminal** — nada é adicionado ao desenho.
- A precisão é sempre de 4 casas decimais em graus.
