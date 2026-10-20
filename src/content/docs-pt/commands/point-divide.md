---
title: "Comando PointDivide — colocar pontos em comprimentos iguais ao longo de um objeto"
description: "O comando PointDivide divide uma linha, polilinha, arco, círculo, elipse ou spline em segmentos de mesmo comprimento e coloca um ponto em cada divisão, mostrando-os em pré-visualização enquanto você digita o número de segmentos."
keywords: ["comando dividir CAD", "dividir linha em partes iguais CAD", "pontos ao longo de um objeto CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

O comando `DividirComPontos` coloca [pontos](../point/) que dividem um objeto em segmentos de mesmo comprimento. O objeto não muda: os pontos são novas entidades na layer e cor atuais, úteis para o snap.

## Dividir um objeto

1. Digite `DividirComPontos` no terminal ou escolha **Point Divide** no menu suspenso de matrizes do painel Edit.
2. **Clique no objeto** — linha, polilinha, arco, círculo, elipse ou spline. Qualquer outra coisa é recusada, e você pode escolher de novo.
3. **Digite o número de segmentos**, um inteiro de 2 a 32767. Os pontos aparecem em pré-visualização no objeto enquanto você digita.
4. Pressione **Enter** ou **Space** para colocá-los. O comando termina.

## Onde os pontos ficam

- O espaçamento é por comprimento ao longo do objeto, não por ângulo, então uma elipse ou spline é cortada em pedaços de mesmo comprimento. Os segmentos em arco de uma polilinha são seguidos ao longo da curva.
- Num objeto aberto — linha, polilinha aberta, arco, elipse parcial ou spline aberta — os pontos ficam entre os segmentos, nunca nas pontas: 5 segmentos dão 4 pontos.
- Num objeto fechado — círculo, polilinha fechada, elipse inteira ou spline fechada — os pontos dão a volta inteira a partir do início, que também recebe um ponto: um círculo começa no ângulo 0, uma polilinha fechada no primeiro vértice. 5 segmentos dão 5 pontos.
- Um número fora de 2–32767 é recusado: o terminal diz por quê e o apaga para você digitar de novo.

Backspace apaga o último dígito. Esc recomeça, para escolher outro objeto. Enter ou Space antes de escolher um objeto encerra o comando.

---

*Relacionado: [Point Interval](../point-interval/) para pontos a uma distância fixa, [Point](../point/) para pontos avulsos e [ArrayPolar](../array-polar/) para repetir objetos em vez de pontos.*
