---
title: Dimension Aligned — Cotas de Distância Real em Qualquer Ângulo
description: O comando Dimension Aligned mede a distância real em linha reta entre dois pontos. A linha de cota é paralela à linha p1→p2 em qualquer ângulo — ao contrário do Dimension Linear que é restrito a horizontal ou vertical. Compatibilidade DXF completa como entidades DIMENSION.
keywords: [CAD cota alinhada, dimaligned, cota diagonal CAD, cota distância real, cota angulada CAD, kulmanlab]
group: markup
order: 5
---

# Dimension Aligned

O comando `dimaligned` posiciona uma cota que mede a **distância real em linha reta** entre dois pontos. A linha de cota é paralela à linha que conecta os dois pontos, podendo estar em qualquer ângulo. Esta é a diferença fundamental em relação ao [Dimension Linear](../dim-linear/), que é restrito a horizontal ou vertical.

## Anatomia de uma cota alinhada

```
     ●  p2
    /|
   / |  (linha de extensão 2, perpendicular à linha de cota)
  /  |
 /←5.00→/
/  /
●  /  (linha de extensão 1, perpendicular à linha de cota)
p1
```

- **Linhas de extensão** — perpendiculares à linha de cota, traçadas a partir de cada ponto medido.
- **Linha de cota** — paralela a p1→p2, deslocada para um lado pela posição do cursor.
- **Valor** — a distância euclidiana real `|p1 – p2|`.

## Posicionamento de uma cota alinhada

1. Digite `dimaligned` no terminal ou clique no botão **Dimension Aligned** na barra de ferramentas.
2. **Clique na primeira origem da linha de extensão** (p1), ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique na segunda origem da linha de extensão** (p2). A entrada de coordenadas também funciona aqui.
4. **Mova o cursor** para um lado para definir o deslocamento perpendicular da linha de cota.
5. **Clique** para posicionar, ou digite uma distância de deslocamento e pressione **Enter** para posicionamento preciso.

## Distância de deslocamento digitada

Digite um número durante o posicionamento para fixar a linha de cota a uma distância perpendicular exata da linha p1→p2:

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta dígito ao deslocamento |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` / `Espaço` | Posiciona no deslocamento digitado |

O lado do cursor determina de qual lado a linha de cota aparece.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X (fases p1/p2), ou distância de deslocamento (fase posicionamento) |
| `,` | Bloqueia X e passa para entrada Y (fases p1/p2) |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` / `Espaço` | Confirma coordenada ou deslocamento digitado |
| `Escape` | Cancela |

## Dimension Aligned vs Dimension Linear

| | Dimension Aligned | Dimension Linear |
|---|------------------|-----------------|
| Ângulo da linha de cota | Paralelo a p1→p2 — qualquer ângulo | Sempre horizontal ou vertical |
| Mede | Distância euclidiana real | Apenas componente X ou Y |
| Bloqueio H/V | Não | Sim — teclas `H` e `V` |
| Ideal para | Elementos diagonais, cortes angulados | Layouts ortogonais, peças alinhadas à grade |

## Editar a etiqueta — simple mode

**Duplo clique** numa cota alinhada posicionada para abrir o editor de texto em **simple** mode. O editor é pré-preenchido com o valor renderizado atual para que você possa posicionar o cursor e editá-lo diretamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Aplica-se à **etiqueta inteira** de uma vez |
| Formatação por caractere | Não suportada |
| `Enter` | Confirma o valor e fecha o editor |
| Multi-linha | Não suportado |

Consulte [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para a referência completa.

## Encadeamento de cotas

Para adicionar mais cotas continuando da segunda linha de extensão desta, use [Dimension Continue](../dim-continue/) — ele bloqueia no mesmo ângulo de medição que esta cota alinhada.

## DXF — entidade DIMENSION (tipo alinhado)

As cotas alinhadas são salvas como entidades `DIMENSION` com `dimType = 1` (alinhado). Origens das linhas de extensão, posição da linha de cota, posição do texto, valor medido, rotação, estilo de setas e todos os flags de exibição são mantidos sem perda.
