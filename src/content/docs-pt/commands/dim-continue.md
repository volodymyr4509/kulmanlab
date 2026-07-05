---
sidebar_position: 15
title: Comando Dimension Continue — Encadear Cotas a partir de uma Linha Base Existente no KulmanLab CAD
description: O comando Dimension Continue estende uma cadeia de cotas a partir da segunda linha de extensão da última cota posicionada. Herda automaticamente o ângulo, deslocamento, tamanho de setas e altura do texto da cota base. Funciona tanto com bases lineares quanto alinhadas.
keywords: [CAD cota contínua, dimcontinue, cotas encadeadas CAD, cota de referência, série de cotas contínuas, kulmanlab]
---

# Dimension Continue

O comando `dimcontinue` encadeia novas cotas a partir da **segunda linha de extensão** de uma cota existente. Cada novo segmento é posicionado ao longo do mesmo eixo de medição e no mesmo deslocamento de linha de cota que a base. Todas as propriedades de estilo — tamanho de setas, altura de texto, comprimentos de linhas de extensão — são copiadas automaticamente da base.

## Como ficam as cotas encadeadas

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           ext2 → novo início)
```

Cada retângulo é uma entidade `DIMENSION` separada. Compartilham a mesma posição da linha de cota e direção de medição.

## Iniciar uma cadeia

1. Digite `dimcontinue` no terminal ou clique no botão **Dimension Continue** na barra de ferramentas.
2. **Se uma cota acabou de ser posicionada** — o comando a recolhe automaticamente como base (sem clique necessário).
3. **Se não houver cota recente** — clique em qualquer cota existente para usá-la como base.
4. **Clique no próximo ponto de extensão** — uma pré-visualização mostra a nova cota enquanto você move o cursor. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
5. Continue clicando (ou digitando) para estender a cadeia. Cada cota posicionada torna-se automaticamente a nova base.
6. Pressione **Enter**, **Espaço**, ou **Escape** para terminar a cadeia.

## O que é herdado da cota base

| Propriedade | Herdada da base |
|-------------|----------------|
| Direção de medição / ângulo | Sim — bloqueada para toda a cadeia |
| Deslocamento da linha de cota | Sim |
| Tamanho das setas | Sim |
| Altura do texto | Sim |
| Deslocamento e extensão das linhas de extensão | Sim |
| Alinhamento do texto | Sim |
| Nome do estilo | Sim |
| Cor, Camada | Não herdados — usa a camada atual |

## Bloqueio da direção de medição

A direção de medição da cadeia é **fixada no ângulo da cota base**:

- Base linear (H) → todas as continuações medem distância horizontal (Δ X).
- Base linear (V) → todas as continuações medem distância vertical (Δ Y).
- Base alinhada em qualquer ângulo → todas as continuações medem ao longo desse mesmo ângulo.

Você não pode mudar a direção no meio da cadeia. Inicie uma nova [Dimension Linear](../dim-linear/) ou [Dimension Aligned](../dim-aligned/) para cotar numa direção diferente.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X |
| `,` | Bloqueia X e passa para entrada Y |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma coordenada digitada, ou termina a cadeia se não houver entrada em andamento |
| `Espaço` / `Escape` | Termina a cadeia |

## Dimension Continue vs começar do zero

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Ponto de partida | Fixo no ext2 da última base | Clique em qualquer lugar |
| Ângulo | Bloqueado na base | Livre |
| Deslocamento | Herdado da base | Definido pelo cursor ou digitado |
| Estilo | Herdado da base | Estilo atual |
| Ideal para | Medições cumulativas ao longo de uma fila | Primeira cota ou mudança de direção |

## Editar etiquetas após o posicionamento — simple mode

**Duplo clique** em qualquer cota da cadeia para abrir o editor de texto em **simple** mode. Cada segmento é independente e pode ser editado individualmente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Aplica-se à **etiqueta inteira** de uma vez |
| Formatação por caractere | Não suportada |
| `Enter` | Confirma o valor e fecha o editor |
| Multi-linha | Não suportado |

Consulte [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para a referência completa.

## DXF — entidades DIMENSION

Cada segmento da cadeia é armazenado como uma entidade `DIMENSION` independente no arquivo DXF. Elas não são vinculadas no arquivo — compartilham propriedades porque foram criadas a partir da mesma base, mas cada uma pode ser editada individualmente após o posicionamento.
