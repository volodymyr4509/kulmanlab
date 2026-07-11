---
title: Comando Mirror — Espelhar Entidades em relação a um Eixo no KulmanLab CAD
description: O comando Mirror espelha as entidades selecionadas em relação a uma linha de eixo definida por dois cliques. Os originais são sempre mantidos — Mirror cria novas cópias espelhadas. O eixo de espelhamento pode ter qualquer ângulo e encaixa em incrementos de 45°.
keywords: [CAD comando mirror, espelhar entidades CAD, simetria mirror CAD, inverter objetos CAD, eixo espelho CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

O comando `mirror` cria cópias espelhadas das entidades selecionadas refletidas em relação a um eixo de dois pontos. Os originais são **sempre mantidos** — diferentemente de [Move](../move/) ou [Rotate](../rotate/), Mirror nunca modifica as entidades existentes; apenas adiciona novas.

## Duas formas de iniciar

**Pré-selecionar, depois espelhar** — selecione entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `mirror` no terminal ou clique no botão **Mirror** na barra de ferramentas.
3. **Clique no primeiro ponto** do eixo de espelhamento, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
4. **Clique no segundo ponto** — as cópias espelhadas são posicionadas e o comando encerra. A entrada de coordenadas também funciona aqui.

**Ativar, depois selecionar** — inicie o comando sem nada selecionado:

1. Digite `mirror` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique para alternar, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. **Clique no primeiro ponto**, depois **clique no segundo ponto** do eixo de espelhamento (entrada de coordenadas disponível em ambas as etapas).

```
  Original:         Eixo de espelhamento:    Resultado:
                    |
  [entidade A]  →  |    →    [entidade A] + [A espelhada]
                    |
```

Uma prévia ao vivo das cópias espelhadas segue o cursor enquanto você posiciona o segundo ponto do eixo.

## Eixo de espelhamento

O eixo é uma linha infinita através dos dois pontos clicados. Pode ter qualquer ângulo:

- Mova o cursor próximo a um **eixo de encaixe de 45°** (0°, 45°, 90°, 135°, …) e o eixo trava nesse ângulo — útil para reflexões horizontais, verticais ou diagonais limpas.
- Clique longe da zona de encaixe para um eixo de ângulo livre.

## Entrada de coordenadas

Em qualquer etapa de ponto do eixo, digite uma posição exata em vez de clicar:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para confirmar.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção |
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X |
| `,` | Bloqueia X e move para entrada Y |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada digitada |
| `Escape` | Cancela e reinicia |

## Seleção durante o comando

| Método | Comportamento |
|--------|--------------|
| **Clique** | Alterna a entidade sob o cursor |
| **Arrastar direita** (estrita) | Adiciona entidades completamente dentro da caixa |
| **Arrastar esquerda** (cruzada) | Adiciona entidades que intersectam a caixa |
| **Enter** / **Espaço** | Confirma a seleção |

## O que é espelhado

Todos os tipos de entidade são suportados. A geometria é refletida em relação ao eixo matematicamente:

| Entidade | O que muda |
|----------|-----------|
| Linha | Ambos os endpoints refletidos |
| Círculo | Centro refletido; raio inalterado |
| Arco | Centro refletido; ângulos de início e fim recalculados em relação ao eixo |
| Elipse | Centro refletido; direção do eixo maior invertida em relação ao eixo |
| Polilinha / Retângulo | Cada vértice refletido |
| Texto | Ponto de ancoragem refletido; a string de texto **não** é invertida |
| Spline | Todos os vértices de controle / pontos de ajuste refletidos |

## Mirror vs Copiar

| | Mirror | Copiar |
|---|--------|--------|
| Originais | Sempre mantidos | Sempre mantidos |
| Posição da nova entidade | Refletida em relação a um eixo | Deslocada por um vetor de deslocamento |
| Ideal para | Designs simétricos, elementos bilaterais | Geometria repetida em qualquer direção |
