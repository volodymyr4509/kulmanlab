---
title: "Por que o seu DXF abriu no tamanho errado (e como corrigir)"
description: "Um DXF que abre 25,4 vezes menor ou 1000 vezes maior é um descompasso de unidades, não um arquivo corrompido. Identifique a razão, redimensione e confira."
keywords: [DXF escala errada, DXF tamanho errado, unidades DXF, DXF mm ou polegadas, DXF importado pequeno demais, fator de escala DXF, DXF 25.4, corrigir escala DXF, unidades DXF não batem, redimensionar DXF]
date: 2026-09-04
author: KulmanLab
tag: Guia
---

Um DXF abre e a peça que deveria ter 40 mm de largura mede 1,575. Ou uma planta chega do tamanho de um quarteirão. O arquivo não está quebrado e ninguém fez nada errado: o desenho está certo, e o que se perdeu no caminho foi o número que o acompanhava.

Vale entender isso antes de redimensionar qualquer coisa, porque a correção leva dez segundos assim que você sabe diante de qual razão está — e chutar é como se acaba cortando o tamanho errado duas vezes.

## O DXF quase não carrega unidades

Um DXF guarda coordenadas como números puros. Uma linha de `0,0` a `40,0` tem quarenta *alguma coisa* de comprimento. O formato não anexa unidade a uma coordenada, e nem haveria onde: o número *é* a geometria.

O mais próximo disso é uma variável de cabeçalho chamada `$INSUNITS`, um código único para o arquivo inteiro: `1` para polegadas, `4` para milímetros, `6` para metros, e assim por diante. Duas coisas a deixam mais fraca do que parece. É um único valor para um desenho inteiro, então não consegue descrever um arquivo montado a partir de fontes misturadas. E ela é indicativa, não obrigatória: muitos aplicativos só a leem ao *inserir* um desenho dentro de outro e a ignoram quando você simplesmente abre o arquivo, sob o argumento razoável de que quem abre um desenho costuma saber o que desenhou.

Então «40» viaja intacto e «milímetros» não. Todo DXF de tamanho errado que você vai receber cabe nessa frase.

## Primeiro identifique a razão

Meça um elemento cujo tamanho real você de fato conheça: um diâmetro de furo, a borda de uma chapa, uma distância entre centros normalizada. Divida o tamanho que deveria ter pelo tamanho que mede. O resultado quase sempre é um destes:

| Razão | O que aconteceu |
|---|---|
| **25,4** | Desenhado em polegadas, lido como milímetros |
| **0,03937** | Desenhado em milímetros, lido como polegadas |
| **1000** | Desenhado em metros, lido como milímetros |
| **0,001** | Desenhado em milímetros, lido como metros |
| **12** | Pés lidos como polegadas |
| **304,8** | Pés lidos como milímetros |

Se o seu número está aí, você tem um descompasso de unidades e nada mais, e o resto leva um minuto.

Se não está — 1,37, digamos, ou 3,2 — pare. Isso não é problema de unidades, e redimensionar vai produzir um desenho errado de um jeito muito mais difícil de perceber. Pule para a última seção.

## A correção

Você precisa de algo que meça e algo que escale. Qualquer ferramenta CAD faz isso; aqui está no [KulmanLab](https://kulmanlab.com/pt/), que abre um DXF numa aba do navegador sem instalar nada:

1. Abra o arquivo: arraste-o para a página, ou use o [Import](/pt/docs/commands/import/).
2. Rode o [Distance](/pt/docs/commands/distance/) e clique nas duas pontas do seu elemento conhecido. O snap importa aqui: pegue os pontos finais de verdade, não algo perto deles, ou você assa o seu próprio erro dentro do fator.
3. Divida. Tamanho conhecido ÷ tamanho medido. Um furo de 40 mm marcando 1,575 dá 40 ÷ 1,575 ≈ **25,4**.
4. Selecione tudo, rode o [Scale](/pt/docs/commands/scale/), escolha um ponto base e digite o fator.

O ponto base fica parado enquanto todo o resto se move, então coloque-o onde você consiga raciocinar: um canto da peça, ou a origem. Para um desenho prestes a ir para o corte, a origem costuma ser a escolha sensata.

Ajuda que o KulmanLab não tenha configuração de unidades própria. Coordenadas são apenas números, que é exatamente o estado em que você quer um desenho enquanto descobre o que os números dele significam. Não há conversão acontecendo pelas suas costas nem nada contra o que brigar.

## Confira a correção antes de confiar nela

Meça um *segundo* elemento, em outro ponto do desenho, cujo tamanho real você também conheça. Depois confira.

É o passo que as pessoas pulam, e o único que pega o caso ruim. Se a segunda medida agora sai certa, o desenho estava uniformemente nas unidades erradas e agora está uniformemente nas certas. Pronto.

Se a segunda medida *ainda* estiver errada, e errada por uma quantidade diferente, nunca foi um simples descompasso de unidades. Você acabou de escalar um desenho incoerente, o que é pior do que o ponto de partida, porque o erro deixou de ser uma razão limpa que alguém consiga notar.

O [Area](/pt/docs/commands/area/) é uma boa segunda opinião aqui, principalmente em chapas. A área escala com o *quadrado* do fator, então um erro de comprimento de 25,4 aparece como erro de área de 645 — uma discrepância difícil de justificar.

## Impedir que aconteça de novo

Unidades se perdem entre pessoas, então a solução mora lá também.

**Diga a unidade ao enviar o arquivo.** Uma linha na mensagem. «Todas as cotas em mm.» Não custa nada e elimina o problema inteiro.

**Mande uma cota de referência junto.** Informe uma medida real: «a placa externa tem 300 mm de largura». Agora quem recebe pode verificar o arquivo em vez de supor, e se algo deu errado ele conserta em um minuto sem voltar a te procurar.

**Pergunte, quando quem recebe é você.** Se chega um arquivo sem unidades declaradas e você vai cortar material com ele, uma mensagem sai mais barata que uma chapa perdida.

**Desenhe nas unidades que a sua saída espera.** Corte a laser, CNC e a maioria dos fluxos de fabricação esperam milímetros. Se o arquivo vai para lá, desenhe em milímetros e não sobra conversão para dar errado. Veja [preparar um DXF para corte a laser](/pt/blog/prepare-dxf-for-laser-cutting/).

## Quando não é problema de unidades

Se a sua razão não foi uma conversão de unidades limpa, as causas prováveis são de outra natureza:

- **O desenho mistura escalas.** Alguém desenhou uma parte em 1:1 e colou um detalhe em 1:5, ou um bloco foi inserido com um fator de escala nunca corrigido. Conserte a geometria culpada, não o arquivo inteiro.
- **Você mediu geometria do espaço do papel.** Um carimbo ou moldura de anotação é desenhado no tamanho da folha, não do modelo. Meça algo que faça parte do objeto de verdade.
- **Você mediu a coisa errada.** Um furo nominal de 40 mm pode estar desenhado a 39,8 por causa do ajuste, e um painel de «300 mm» pode ter 300 até a face externa de um rebaixo que você não vê. Escolha um elemento com aresta inequívoca.

Em todos esses casos a resposta é descobrir o que o desenho realmente é, não escalá-lo. Um desenho cujas partes se contradizem vai continuar custando material até alguém abrir e olhar.

---

*Relacionado: [Distance](/pt/docs/commands/distance/) para medir, [Scale](/pt/docs/commands/scale/) para a correção, [Area](/pt/docs/commands/area/) para a segunda opinião, e [Export Manager](/pt/docs/commands/export-manager/) para o que cada formato leva quando você devolve o arquivo.*
