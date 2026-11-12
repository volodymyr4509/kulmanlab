---
title: "Entrada de coordenadas — digite pontos exatos, relativos e polares"
description: "Sempre que um comando pedir um ponto, digite-o em vez de clicar: X,Y para uma posição exata, @X,Y para medir a partir do último ponto e distância<ângulo para um ponto polar. O botão Rel torna relativo cada ponto digitado."
keywords: ["entrada de coordenadas CAD", "coordenadas relativas CAD", "coordenadas polares CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Entrada de coordenadas

Sempre que um comando pedir um ponto — o início de uma [Line](../../commands/line/), um canto de um [Rectangle](../../commands/rectangle/), o ponto base de um [Move](../../commands/move/) ou um grip que você está arrastando —, você pode digitá-lo em vez de clicar. Comece a digitar um número e o terminal mostra o que você digita; pressione **Enter** ou **Space** para colocar o ponto.

## Quatro formas de escrever um ponto

| Você digita | O ponto fica |
|---|---|
| `100,50` | Em X 100, Y 50 |
| `@100,50` | 100 em X e 50 em Y a partir do último ponto |
| `100<45` | A 100 da origem, a 45° |
| `@100<45` | A 100 do último ponto, a 45° |

Os ângulos são em graus, no sentido anti-horário a partir do eixo X; assim, `@50<90` é 50 para cima e `@50<180` é 50 para a esquerda. Qualquer dos valores pode ser negativo.

## O último ponto

`@` mede a partir do último ponto clicado ou digitado em qualquer comando — o último clique do comando anterior conta, e também um grip que você acabou de arrastar. Sem último ponto ainda, `@100,50` é lido como `100,50`. O último ponto é esquecido ao alternar entre o espaço do modelo e um layout, e quando um desenho é aberto.

## Rel: relativo por padrão

O botão **Rel** na barra de controle torna relativo cada ponto digitado: assim que você digita o primeiro algarismo, um `@` entra na frente, e `100,50` vira `@100,50`. Pressione **Backspace** sobre o `@` para tornar aquele ponto absoluto. Sem último ponto ainda, nenhum `@` é adicionado. Rel vem desativado e é lembrado com os outros botões da barra de controle.

## Teclas ao digitar

| Tecla | Efeito |
|---|---|
| `0`–`9`, `.`, `-` | Digitar o número; `-` só no início |
| `@` | Tornar o ponto relativo, no início de X |
| `,` ou **Space** | Terminar X e ir para Y |
| `<` | Terminar X como distância e ir para seu ângulo |
| **Enter** ou **Space** | Colocar o ponto, quando Y tiver valor |
| **←** **→** **Home** **End** | Mover o cursor dentro do valor digitado |
| **Backspace** | Apagar antes do cursor; no início de um Y vazio, voltar a X |

Um ponto que não pode ser lido como números fica no terminal para você corrigir. Cada ponto digitado deixa uma linha no histórico do terminal como você o digitou — `Digitado @100<45` — antes da linha do comando com onde ele caiu.

## Pontos digitados e rastreamento de ângulo

Quando o cursor está travado num raio de rastreamento de ângulo, digitar um número dá uma distância ao longo desse raio em vez de um X. Digitar `@` primeiro começa um ponto completo, então `@100,50` funciona também num raio travado.

---

*Relacionado: [Rastreamento de distância](../distance-tracking/) para digitar um comprimento numa direção travada, e [Vector Pins](../vector-pins/) para medir a partir de um ponto fixado.*
