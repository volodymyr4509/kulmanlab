---
sidebar_position: 17
title: "Comando Dimension Diameter — Anotar Diâmetros de Círculos e Arcos no KulmanLab CAD"
description: "O comando Dimension Diameter posiciona uma cota de diâmetro (prefixada com o símbolo de diâmetro) através do centro de um arco ou círculo. Mova o cursor para girar a linha de cota em qualquer ângulo. Compatibilidade DXF completa como entidades DIMENSION de diâmetro."
keywords: [CAD cota diâmetro, dimdiameter, anotar diâmetro círculo, cota diâmetro arco, símbolo diâmetro CAD, kulmanlab]
---

# Dimension Diameter

O comando `dimdiameter` posiciona uma cota de diâmetro num arco ou círculo. A linha de cota abrange o diâmetro completo — passando pelo centro entre dois pontos diametralmente opostos do arco — e é etiquetada `⌀ <valor>`. Para anotar apenas o raio do centro a uma borda, use [Dimension Radius](../dim-radius/).

## Anatomia de uma cota de diâmetro

```
  ●──────────── ⌀ 10.00 ────────────●
  (ponto arco distante)         (ponto arco próximo / lado do texto)
```

- **Linha de cota** — abrange o diâmetro completo, com pontas de seta em ambos os pontos de interseção do arco.
- **Ponto arco próximo** — o ponto da circunferência no lado do cursor (onde fica a etiqueta de texto).
- **Ponto arco distante** — o ponto diametralmente oposto.
- **Etiqueta** — `⌀` seguido do valor do diâmetro.

## Posicionamento de uma cota de diâmetro

1. Digite `dimdiameter` no terminal ou clique no botão **Dimension Diameter** na barra de ferramentas.
2. **Clique num arco ou círculo** para selecioná-lo.
3. **Mova o cursor** para girar a linha de cota para o ângulo desejado.
4. **Clique** para posicionar a cota.

Apenas entidades **Arc** e **Circle** podem ser selecionadas.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Escape` | Cancela |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Mede | Diâmetro completo (2 × raio) | Raio (centro à borda) |
| Linha de cota | Borda → borda pelo centro | Centro → borda |
| Prefixo da etiqueta | `⌀` | `R` |
| Pontas de seta | Duas (em ambos os pontos do arco) | Uma (no ponto do arco) |
| Ideal para | Cotas de furo circular ou eixo completo | Anotar um lado de um elemento curvo |

## Editar a etiqueta — simple mode

**Duplo clique** numa cota de diâmetro posicionada para abrir o editor de texto em **simple** mode. O editor é pré-preenchido com o valor renderizado atual (ex. `⌀ 10.00`) para que você possa posicionar o cursor e editá-lo diretamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Aplica-se à **etiqueta inteira** de uma vez |
| Formatação por caractere | Não suportada |
| `Enter` | Confirma o valor e fecha o editor |
| Multi-linha | Não suportado |

Consulte [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para a referência completa.

## DXF — entidade DIMENSION de diâmetro

As cotas de diâmetro são salvas como entidades `DIMENSION` com geometria do tipo diâmetro, armazenando ambas as posições dos pontos do arco e o valor do diâmetro medido (2 × raio). Todas as propriedades são mantidas sem perda.
