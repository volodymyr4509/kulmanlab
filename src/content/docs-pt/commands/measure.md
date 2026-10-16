---
title: "Comando Measure — ler distâncias, comprimentos, ângulos e áreas ao redor do cursor"
description: "O comando Measure lê o desenho ao redor do cursor enquanto você o move — a distância até a geometria mais próxima, o comprimento ou o raio do que ele encontra, o ângulo em que as linhas se encontram — e, com um clique, dá a área e o perímetro de uma região fechada. Nada muda no desenho."
keywords: ["comando medir CAD", "medir área e perímetro CAD", "medição de distância ao vivo CAD", "measure", "kulmanlab"]
group: measure
order: 1
---

# Measure

O comando `measure` lê o desenho ao redor do cursor enquanto você o move, sem pontos a escolher: a que distância está a geometria mais próxima, quão longa ou redonda ela é e o ângulo em que as linhas se encontram. Um clique dentro de uma região fechada dá sua área e seu perímetro. Nada muda no desenho.

## Medir

1. Digite `measure` no terminal ou clique em **Measure**, o primeiro botão do painel Measure.
2. **Mova o cursor.** A partir dele, o comando olha para a direita, para cima, para a esquerda e para baixo em busca da geometria mais próxima e mostra o que encontra.
3. **Clique dentro de uma região fechada** para preenchê-la e ler sua área e seu perímetro — veja abaixo.
4. Pressione **Enter**, **Space** ou **Escape** para terminar.

## O que mostra

- **Distância de lado a lado** — do que o cursor encontra de um lado ao que encontra do outro, na horizontal e na vertical. Se só um lado tem algo, a distância parte do cursor. Cada extremidade que encontra algo tem um pequeno ponto preenchido; uma extremidade no cursor não tem.
- **Comprimento ou raio** — cada objeto alcançado pelo comando é destacado com seu comprimento, ou seu raio quando faz parte de um círculo.
- **Ângulo** — onde duas retas alcançadas se encontram, o ângulo entre elas é escrito; um ângulo reto é marcado com um pequeno quadrado.

Comprimentos e ângulos são escritos como o [DimensionStyle](../dimension-style/) atual os escreve, em seu formato de unidades e sua precisão.

## Área e perímetro

Um clique dentro de uma região fechada a preenche e coloca sua área e seu perímetro no prompt e no histórico. A região é encontrada como o [Hatch](../hatch/) a encontra: linhas separadas que se encontram ponta a ponta fecham uma região como uma polilinha, e tudo o que está fechado dentro dela é deixado de fora como ilha — sua borda conta no perímetro e sua área é subtraída.

A área é um número simples em unidades de desenho quadradas — pés e polegadas não têm como escrevê-la — enquanto o perímetro segue o formato de unidades. Clique dentro de outra região para medi-la. Se nada fechado cerca o ponto, o terminal diz por quê, com as mesmas mensagens do Hatch: no boundary found, point is not enclosed ou boundary is open.

## Bom saber

- Mede em relação a linhas, arcos, círculos, elipses, polilinhas e splines; comprimentos e áreas são exatos, inclusive para elipses e splines.
- Objetos em layers congeladas são ignorados; objetos em layers bloqueadas são medidos.
- Em um desenho grande, olha apenas para o que está perto do cursor, então continua ágil.

---

*Relacionado: [Distance](../distance/), [Angle](../angle/) e [Area](../area/) para medições entre pontos que você escolhe, e [Hatch](../hatch/) para como as regiões fechadas são encontradas.*
