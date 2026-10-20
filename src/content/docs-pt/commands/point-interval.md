---
title: "Comando PointInterval — colocar pontos a uma distância fixa ao longo de um objeto"
description: "O comando PointInterval coloca pontos à distância que você digita ao longo de uma linha, polilinha, arco, círculo, elipse ou spline, a partir da ponta perto da qual você clica, mostrando-os em pré-visualização enquanto você digita o comprimento."
keywords: ["pontos em intervalos CAD", "pontos a distância fixa numa linha CAD", "medir ao longo de um objeto CAD", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

O comando `PontosPorIntervalo` coloca [pontos](../point/) a uma distância fixa ao longo de um objeto, como se marcam estacas ao longo de um traçado. O objeto não muda: os pontos são novas entidades na layer e cor atuais, úteis para o snap.

## Colocar pontos em intervalos

1. Digite `PontosPorIntervalo` no terminal ou escolha **Point Interval** no menu suspenso de matrizes do painel Edit.
2. **Clique no objeto perto da ponta de onde começar** — linha, polilinha, arco, círculo, elipse ou spline. Qualquer outra coisa é recusada, e você pode escolher de novo.
3. **Digite o comprimento do intervalo.** Os pontos aparecem em pré-visualização no objeto enquanto você digita.
4. Pressione **Enter** ou **Space** para colocá-los. O comando termina.

## Onde os pontos ficam

- O primeiro ponto fica a um intervalo do início e os demais seguem a um intervalo um do outro, medidos ao longo do objeto, curvas incluídas. Nenhum ponto vai no próprio início.
- Num objeto aberto — linha, polilinha aberta, arco, elipse parcial ou spline aberta — mede-se a partir da ponta perto da qual você clicou. O que sobra na ponta distante fica sem marca: ela só recebe um ponto quando o intervalo cabe exatamente.
- Num objeto fechado — círculo, polilinha fechada, elipse inteira ou spline fechada — mede-se a partir do início do próprio objeto, onde quer que você clique: um círculo a partir do ângulo 0 no sentido anti-horário, uma polilinha fechada a partir do primeiro vértice. Os pontos param antes do início.
- Um comprimento de 0 ou menos, maior que o objeto ou que daria mais de 32767 pontos é recusado: o terminal diz por quê e o apaga para você digitar de novo.

Backspace apaga o último caractere. Esc recomeça, para escolher outro objeto. Enter ou Space antes de escolher um objeto encerra o comando.

---

*Relacionado: [Point Divide](../point-divide/) para dividir um objeto num número de comprimentos iguais e [Point](../point/) para pontos avulsos.*
