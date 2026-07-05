---
sidebar_position: 16
title: Comando Dimension Radius — Anotar Raios de Arcos e Círculos no KulmanLab CAD
description: O comando Dimension Radius posiciona uma cota radial prefixada com R num arco ou círculo. Clique na entidade, depois mova o cursor para orientar a linha de cota do centro à circunferência. Compatibilidade DXF completa como entidades DIMENSION de raio.
keywords: [CAD cota raio, dimradius, anotar raio círculo, cota raio arco, cota com prefixo R, kulmanlab]
---

# Dimension Radius

O comando `dimradius` posiciona uma cota de raio num arco ou círculo. A linha de cota vai do centro a um ponto na circunferência na direção do cursor, etiquetada `R <valor>`. Para dimensionar um diâmetro completo, use [Dimension Diameter](../dim-diameter/).

## Anatomia de uma cota de raio

```
  ● (centro)
   \
    \  R 5.00
     \
      ●────── texto (lado do cursor)
   (ponto arco)
```

- **Linha de cota** — do centro através de um ponto do arco em direção ao cursor, com ponta de seta no arco.
- **Etiqueta** — `R` seguido do valor do raio.

## Posicionamento de uma cota de raio

1. Digite `dimradius` no terminal ou clique no botão **Dimension Radius** na barra de ferramentas.
2. **Clique num arco ou círculo** para selecioná-lo.
3. **Mova o cursor** para orientar a linha de cota — o ponto do arco acompanha a direção do cursor a partir do centro.
4. **Clique** para posicionar a cota.

Apenas entidades **Arc** e **Circle** podem ser selecionadas. Clicar em qualquer outro tipo de entidade não faz nada.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Escape` | Cancela |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Mede | Raio (centro à borda) | Diâmetro (borda a borda pelo centro) |
| Linha de cota | Centro → ponto arco | Ponto arco → ponto arco (pelo centro) |
| Prefixo da etiqueta | `R` | `⌀` |
| Pontas de seta | Uma (no ponto do arco) | Duas (em ambos os pontos do arco) |
| Ideal para | Anotar um lado de um elemento curvo | Anotar cotas circulares completas |

## Editar a etiqueta — simple mode

**Duplo clique** numa cota de raio posicionada para abrir o editor de texto em **simple** mode. O editor é pré-preenchido com o valor renderizado atual (ex. `R 5.00`) para que você possa posicionar o cursor e editá-lo diretamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Aplica-se à **etiqueta inteira** de uma vez |
| Formatação por caractere | Não suportada |
| `Enter` | Confirma o valor e fecha o editor |
| Multi-linha | Não suportado |

Consulte [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para a referência completa.

## DXF — entidade DIMENSION de raio

As cotas de raio são salvas como entidades `DIMENSION` com geometria do tipo raio, armazenando as coordenadas do centro, a posição do ponto do arco e o valor do raio medido. Todas as propriedades são mantidas sem perda.
