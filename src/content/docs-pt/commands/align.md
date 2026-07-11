---
title: Comando Align — Transladar, Rodar e Escalar Entidades com Pares de Pontos no KulmanLab CAD
description: O comando Align reposiciona as entidades selecionadas usando um ou dois pares de pontos de origem/destino — combinando translação, rotação e uma escala uniforme opcional numa única operação. Funciona como um Move + Rotate + Scale combinados.
keywords: [CAD comando align, alinhar entidades CAD, transladar rodar escalar, alinhamento por par de pontos, equivalente ALIGN do AutoCAD, kulmanlab]
group: edit
order: 6
---

# Align

O comando `align` reposiciona as entidades selecionadas usando um ou dois pares de pontos de origem/destino. Com um par, comporta-se exatamente como o [Move](../move/) (apenas translação). Com dois pares, também roda a seleção para que a direção origem-para-origem corresponda à direção destino-para-destino, e pode opcionalmente escaloná-la para que o comprimento do segmento de origem corresponda ao do segmento de destino — translação, rotação e escala numa única operação.

## Duas formas de iniciar

**Pré-selecionar, depois alinhar** — selecione as entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `align` no terminal ou clique no botão **Align** na barra de ferramentas.
3. **Clique no primeiro ponto de origem (S1)**, depois **no primeiro ponto de destino (D1)**.
4. **Clique no segundo ponto de origem (S2)**, ou pressione **Enter** para aplicar já um alinhamento apenas de translação.
5. **Clique no segundo ponto de destino (D2)**.
6. Responda ao pedido de escala: pressione **Y** para escalar, ou **N** / **Enter** para manter o tamanho original.

**Ativar, depois selecionar** — inicie o comando sem nada selecionado:

1. Digite `align` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique para alternar entidades individuais, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. Continue com S1 → D1 → S2 → D2 → pedido de escala como acima.

> O terminal só precisa das letras suficientes para ser inequívoco — digitar `al` e pressionar **Enter** ativa o Align diretamente, já que nenhum outro comando começa com essas duas letras.

## Anatomia de um alinhamento

```
  Pontos de origem (nas entidades):    Pontos de destino:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Resultado: a seleção é transladada de modo que S1 fique em D1,
  depois rodada em torno de D1 para que a direção S1→S2
  corresponda à direção D1→D2 — e, se optar por escalar,
  redimensionada de modo que |S1S2| se torne |D1D2|.
```

Uma pré-visualização fantasma segue o cursor em cada passo: uma pré-visualização de movimento ao colocar D1, depois uma pré-visualização rodada (tracejada) assim que D2 está a ser posicionado.

## Alinhamento de um ponto (apenas translação)

Depois de D1 ser colocado, pressione **Enter** em vez de clicar num segundo ponto de origem. A seleção é transladada pelo vetor S1→D1 — sem rotação nem escala — idêntico a um [Move](../move/) usando S1 como ponto base e D1 como destino.

## Alinhamento de dois pontos (translação + rotação + escala opcional)

Assim que S2 e D1 estiverem ambos colocados:

- **Ângulo de rotação** — a diferença entre a direção de destino (`D1 → D2`) e a direção de origem (`S1 → S2`).
- **Pedido de escala** — aparece `scale objects to alignment points? [Yes/No] <N>`, com **No** como predefinição:
  - Pressione **Y** para também escalar a seleção uniformemente em torno de D1, de modo que a distância `S1–S2` se torne a distância `D1–D2`.
  - Pressione **N** ou **Enter** para manter o tamanho original — apenas translação e rotação são aplicadas.

Pressionar uma tecla no pedido de escala aplica o alinhamento imediatamente — não há um passo de confirmação separado depois de escolher Sim ou Não.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção e avança para a fase S1 |
| `Enter` (no passo S2) | Salta a rotação — aplica um alinhamento apenas de translação usando S1 e D1 |
| `Y` | Aplica o alinhamento com escala |
| `N` / `Enter` (no pedido de escala) | Aplica o alinhamento sem escala |
| `Escape` | Ao colocar pontos: descarta os pontos e volta à fase de seleção; sem nada selecionado: cancela o comando |

## Seleção durante o comando

Quando o comando começa na fase de seleção:

| Método | Comportamento |
|--------|--------------|
| **Clique** | Alterna a entidade sob o cursor dentro/fora da seleção |
| **Arrastar direita** (estrita) | Adiciona entidades completamente dentro da caixa |
| **Arrastar esquerda** (cruzada) | Adiciona entidades que intersectam a borda da caixa |
| **Enter** / **Espaço** | Confirma a seleção e avança para a fase S1 |

## Depois de alinhar

As entidades alinhadas permanecem selecionadas na nova posição, e o comando termina automaticamente — execute **Align** novamente, ou mude para [Move](../move/), [Rotate](../rotate/) ou [Scale](../scale/) sem re-selecionar.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Pares de pontos | 1 (apenas translação) ou 2 (translação + rotação + escala) | 1 (apenas translação) |
| Rotação | Sim, com um segundo par de pontos | Não |
| Escala | Opcional, com um segundo par de pontos | Não |
| Ideal para | Ajustar uma forma sobre outra usando pontos de referência | Reposicionamento simples |

## Entidades suportadas

O Align funciona em todos os tipos de entidade suportados por Move, Rotate e Scale — as mesmas operações `translate`, `rotate` e `scale` usadas por esses comandos são aplicadas em sequência, pelo que nenhuma fica excluída.
