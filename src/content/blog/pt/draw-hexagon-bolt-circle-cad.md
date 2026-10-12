---
title: "Como desenhar um hexágono ou um círculo de furos em CAD (Polygon e matriz polar)"
description: "Desenhe um polígono regular a partir de um centro e um raio ou de um lado e depois repita furos num círculo de furação com uma matriz polar — grátis no navegador, com valores exatos digitados."
keywords: [desenhar hexágono em CAD, polígono regular CAD, matriz polar CAD, círculo de furos desenho, padrão de furos CAD, padrão circular CAD, desenho de porca sextavada, desenhar octógono CAD, diâmetro primitivo PCD, ferramenta polígono CAD grátis]
date: 2026-10-11
author: KulmanLab
tag: Guia
---

Para desenhar um polígono regular em CAD, informe o número de lados, escolha o centro e depois um raio — ou escolha um lado e o resto é deduzido. Para desenhar um círculo de furos, desenhe um furo e repita-o em torno do centro com uma matriz polar. Este guia faz as duas coisas, com números exatos, num navegador em [app.kulmanlab.com](https://app.kulmanlab.com) — grátis, sem instalar nada, e o arquivo nunca sai do seu computador.

Nós desenvolvemos o [KulmanLab](https://kulmanlab.com), então os passos abaixo usam os comandos dele. As ideias — medida entre faces versus entre cantos, diâmetro do círculo primitivo, se as cópias giram ao dar a volta — são as mesmas em qualquer programa de CAD.

## Desenhar um polígono regular

Um polígono regular tem lados e ângulos iguais: um hexágono para uma porca, um octógono para uma placa, um pentágono para um recorte decorativo. No KulmanLab é o comando **Polygon**.

1. Digite `polygon` no terminal ou use o botão Polygon no painel Shapes.
2. Informe o **número de lados** — qualquer inteiro de 3 a 1024 — e pressione **Enter**. O prompt vem preenchido com o número que você usou da última vez.
3. **Clique no centro** ou digite `X,Y` para um ponto exato.
4. **Clique no raio** ou digite-o e pressione **Enter**.

O resultado é uma única polilinha fechada, então tudo o que se pode fazer com uma polilinha — mover, girar, deslocar, escalar — funciona.

### Entre faces ou entre cantos?

É aqui que as pessoas tropeçam. «Raio» pode significar duas distâncias diferentes, e um hexágono é especificado por uma ou outra conforme o que você desenha:

| | Medido até | Uso típico |
|---|---|---|
| **Inside ativada** (padrão) | Os cantos | Uma forma que precisa caber dentro de um círculo dado |
| **Inside desativada** | O meio de cada lado | Uma forma com largura entre faces dada — porcas, cabeças de parafuso, tamanhos de chave |

Pressione `I` no prompt do raio para alternar. Uma porca sextavada é vendida pela largura entre faces, então use **Inside desativada** e digite *metade* dela. Para uma porca M8 com 13 mm entre faces:

1. `polygon`, depois `6` para os lados, depois clique ou digite o centro.
2. Pressione `I` para desativar Inside.
3. Digite `6.5` e pressione **Enter**.

As faces ficam exatamente a 13 mm; os cantos chegam a 7,51 mm do centro, cerca de 15 mm entre cantos. Se você digitar o raio em vez de clicar, o polígono fica com o lado mais baixo na horizontal, apoiado. Se clicar, ele toma a orientação do ponto onde você clicar.

### A partir de um lado

Às vezes você conhece o comprimento de um lado, não um raio — por exemplo, um tampo octogonal com lados de 20 mm. Pressione `E` no prompt do primeiro ponto para mudar para o modo **Edge** e escolha as duas pontas de um lado. Os demais vértices são construídos no sentido anti-horário, à esquerda desse lado. Digitar `0,0` e depois `20,0` coloca um lado de 20 mm ao longo do eixo X, com o polígono acima.

## Desenhar um círculo de furos

Um círculo de furos — ou círculo primitivo, «PCD» nos desenhos — é um anel de furos igualmente espaçados em torno de um centro. Você desenha um furo e o repete. No KulmanLab isso é **ArrayPolar**.

Considere seis furos de 6,6 mm num diâmetro primitivo de 50 mm, centrado na origem:

1. **Desenhe o primeiro furo.** Execute `circle`, digite o centro como `25` `,` `0` — metade do PCD ao longo do eixo X —, pressione **Enter**, depois digite o raio `3.3` e pressione **Enter**.
2. **Selecione-o** clicando no círculo.
3. **Execute a matriz polar.** Digite `arraypolar` ou use o botão ArrayPolar no painel Edit.
4. **Escolha o centro do padrão** — digite `0,0`.
5. O terminal mostra a matriz como está — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — e as cinco cópias aparecem em pré-visualização ao vivo. Pressione **Enter** para aceitar.

Esse é o círculo de furos inteiro. Para outra quantidade, pressione `I` antes de confirmar e digite o número de itens — o original conta como um, e o ângulo entre eles é calculado. Ou pressione `A` e digite o espaçamento em graus; o ângulo de preenchimento é reformulado para coincidir.

Alguns detalhes que importam:

- **Fill** é o ângulo do primeiro item ao último. Os 360° padrão distribuem os itens por todo o círculo; um número menor os distribui num arco — uma fileira de furos num quarto de volta, por exemplo. Um ângulo negativo segue o sentido horário.
- **Rotate** decide se cada cópia gira ao dar a volta. Para furos circulares não faz diferença. Para um rasgo, um dente ou um suporte, faz: ativada, cada cópia fica voltada para o centro como o original; desativada, cada cópia mantém a orientação do original e é apenas deslocada para o lugar. Pressione `R` para alternar antes de confirmar.
- A matriz cria **cópias** — o original fica onde está, e cada item é uma entidade comum que você pode editar depois.

## Tudo junto: um flange

Desenhe um hexágono para o contorno, um círculo no meio para o furo central e um círculo de furos para os furos de fixação. Três comandos, cada cota digitada com exatidão e nada para medir na tela.

Se a peça vai para uma cortadora a laser, apague qualquer círculo auxiliar que tenha desenhado para achar o círculo primitivo — ele seria cortado como todo o resto — e confira o arquivo com o nosso guia de [preparação de um DXF para corte a laser](/pt/blog/prepare-dxf-for-laser-cutting/). O polígono é um caminho fechado por construção, que é o motivo mais comum de os serviços de corte rejeitarem arquivos.

## O que isto não faz

- **Só polígonos regulares.** Todos os lados são iguais. Um contorno irregular — uma forma com alguns lados mais longos — é uma [polilinha](/pt/docs/commands/polyline/) que você desenha ponto a ponto.
- **Só 2D.** Desenha contornos planos. Não dará uma porca modelada nem um parafuso roscado.
- **Só navegadores de desktop** — Chrome, Firefox, Safari e Edge. Não há versão para celular.

---

*Relacionado: [Polygon](/pt/docs/commands/polygon/) e [ArrayPolar](/pt/docs/commands/array-polar/) para todas as opções e teclas, [Circle](/pt/docs/commands/circle/) para digitar raios exatos e [ArrayGrid](/pt/docs/commands/array-grid/) para repetir objetos em linhas e colunas em vez de em torno de um centro.*
