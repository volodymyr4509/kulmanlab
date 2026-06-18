---
sidebar_position: 2
title: Comando Distance — Medir a Distância em Linha Reta entre Dois Pontos no KulmanLab CAD
description: O comando Distance mede a distância euclidiana (em linha reta) entre dois pontos clicados e exibe o resultado no terminal com 4 casas decimais. Clique novamente após o resultado para encadear uma nova medição a partir do último ponto.
keywords: [CAD medir distância, comando distance, medição ponto a ponto, distância em linha reta, kulmanlab]
---

# Distance

O comando `distance` mede a distância em linha reta (euclidiana) entre dois pontos clicados e imprime o resultado no terminal com 4 casas decimais. É um dos dois comandos de medição — [Angle](./angle) mede o ângulo de abertura num vértice.

## Anatomia de uma medição de distância

```
  ● primeiro ponto
   \
    \  linha de pré-visualização (ao vivo)
     \
      ● segundo ponto    →  terminal: "Distance: 12.3456"
```

- **Primeiro ponto** — ponto de origem da medição.
- **Segundo ponto** — ponto final; ao posicioná-lo o resultado é impresso imediatamente.
- **Resultado** — exibido no terminal, não posicionado no canvas.

## Medir uma distância

1. Digite `distance` no terminal ou clique no botão **Distance** na barra de ferramentas.
2. **Clique no primeiro ponto**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no segundo ponto** — a distância medida aparece no terminal. A entrada de coordenadas também funciona aqui.
4. **Clique novamente** (opcional) para iniciar uma nova medição. O comando permanece ativo.

Pressione `Escape` a qualquer momento para voltar ao passo 2.

## Encadeamento de medições

Após o resultado ser mostrado, clicar inicia imediatamente a próxima medição — o ponto clicado torna-se o novo primeiro ponto. Isso permite medir uma sequência de distâncias sem reativar o comando.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| O que mede | Comprimento em linha reta | Ângulo interior num vértice |
| Número de cliques | 2 | 3 |
| Formato do resultado | `12.3456` (unidades) | `45.0000°` |
| Pré-visualização no canvas | Linha do primeiro ponto ao cursor | Duas linhas do vértice ao cursor |
| Ideal para | Comprimento de um segmento ou lacuna | Ângulo de abertura entre dois elementos |

## Entrada de coordenadas

Em vez de clicar, digite uma posição exata para qualquer um dos pontos:

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
- O resultado é expresso nas mesmas unidades das coordenadas do desenho (sem conversão de unidades).
- A precisão é sempre de 4 casas decimais.
