---
title: "Comando Point — colocar pontos no desenho no KulmanLab CAD"
description: "O comando Point coloca um ponto a cada clique, X,Y digitado ou distância ao longo de uma direção bloqueada, até Enter, Space ou Escape. Os pontos são desenhados como um pontinho, levam a layer e a cor atuais e viajam como entidades DXF POINT."
keywords: ["comando ponto CAD", "colocar ponto CAD", "entidade DXF POINT", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

O comando `Ponto` coloca um ponto a cada escolha e continua ativo até você pressionar Enter, Space ou Escape. Um ponto é uma posição sem tamanho: é desenhado como um pequeno ponto e leva a layer e a cor atuais. É armazenado como uma entidade `POINT`.

## Colocar pontos

1. Digite `Ponto` no terminal ou clique em **Point**, o último botão do painel Shapes.
2. **Clique** onde o ponto vai, ou digite `X,Y` e pressione **Enter** para uma posição exata. Cada escolha coloca um ponto e o terminal registra suas coordenadas; o comando continua ativo para o próximo.
3. Ou bloqueie uma direção a partir de um [pino de vetor](../../interface/vector-pins/) e digite uma distância — o ponto cai exatamente a essa distância ao longo dela.
4. Pressione **Enter**, **Space** ou **Escape** para terminar. Enter e Space só terminam quando nada está sendo digitado.

## Como um ponto aparece

Um ponto é desenhado como um pontinho de 1,5 px de raio em qualquer nível de zoom, então continua visível ao afastar e não cresce ao aproximar. O estilo de ponto do desenho (`$PDMODE` e `$PDSIZE`) ainda não é lido, então todo ponto é um pontinho, diga o que disser um DXF.

## Editar pontos

Um ponto selecionado tem uma alça, que o move. Uma seleção por janela pega um ponto quando ele está dentro da janela, em qualquer direção de arraste.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) e [Scale](../scale/) funcionam em pontos como em qualquer outra entidade. A janela de propriedades mostra Position X e Position Y, além de cor e layer.

## DXF — entidade POINT

Os pontos são lidos e gravados no DXF como entidades `POINT` com posição, cor e layer (códigos de grupo 10/20, 62 e 8) e viajam também pelo JSON salvo. Antes eram ignorados na importação. O [Export Manager](../export-manager/) lista Points em linha própria, então você pode deixá-los fora de uma exportação.

---

*Relacionado: [Line](../line/) para a mesma entrada de coordenadas e [Vector Pins](../../interface/vector-pins/) para colocar um ponto a uma distância fixa ao longo de uma direção.*
