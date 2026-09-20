---
title: Comando Fillet — Arredondar um Canto com um Arco Tangente
description: O comando Fillet arredonda um canto entre dois segmentos Line, Arc ou Polyline com um arco tangente de um raio especificado. Arredondar o próprio canto de uma polilinha insere o arco diretamente nela; arredondar através de uma polilinha aberta funde ambos os lados em uma nova polilinha.
keywords: [comando fillet CAD, arredondar canto CAD, arco de filete, arco tangente, filete de polilinha, filete de arco, kulmanlab]
group: edit
order: 11
---

# Fillet

O comando `Concordar` arredonda um canto entre dois segmentos [Line](../line/), [Arc](../arc/) ou [Polyline](../polyline/) inserindo um arco tangente de um dado raio, aparando (ou fundindo) as entidades escolhidas até esse ponto.

O Fillet funciona com entidades **Line, Arc e Polyline** — incluindo os segmentos retos ou de arco de uma polilinha.

## Usar fillet

1. Digite `Concordar` no terminal ou clique no botão **Fillet** na barra de ferramentas.
2. **Digite o raio do filete** e pressione **Enter**.
3. **Clique na primeira linha, arco ou segmento de polilinha** — a porção que você clica determina qual lado de qualquer interseção é mantido.
4. **Passe o cursor sobre a segunda entidade** — uma pré-visualização de arco tracejado mostra o filete resultante. Mova o cursor para o lado que deseja manter.
5. **Clique** para aplicar.

```
  Antes:                       Depois do fillet (raio r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Seleção de lado para entidades que se cruzam

Quando duas entidades se cruzam, o filete é aplicado no canto definido pelas posições de clique — a porção de cada entidade no **mesmo lado do cursor** é mantida.

- Clique próximo de uma extremidade da primeira entidade para selecionar essa metade.
- Mova o cursor para a metade desejada da segunda entidade — a pré-visualização tracejada atualiza em tempo real.

## O que o comando cria

O resultado depende do que você escolheu:

- **Duas Line/Arc independentes**, ou qualquer par que não envolva uma polilinha aberta: ambas são aparadas até os pontos tangentes **T1**/**T2**, e uma nova entidade Arc é inserida entre elas.
- **Dois segmentos da mesma polilinha compartilhando um vértice de canto**: nenhuma nova entidade — o filete passa a fazer parte da própria polilinha. O vértice do canto é substituído pelos dois pontos tangentes, e o arco entre eles é armazenado como o bulge dessa aresta — exatamente como um canto de polilinha arredondado faz o round-trip via DXF.
- **Tudo o mais que envolva uma polilinha aberta** — duas polilinhas abertas diferentes, ou uma polilinha aberta e uma Line/Arc independente: ambas são fundidas em uma **única nova polilinha**, mantendo cada lado até seu ponto tangente e unindo-as com o arco de filete como um segmento de bulge adicional, substituindo as entidades originais.

O arco inserido ou estendido herda as configurações atuais de espessura de linha, cor, camada e tipo de linha (ou as da própria polilinha, quando ele passa a fazer parte dela).

## Cantos sem um ângulo real para arredondar

Se os dois segmentos escolhidos já se encontram tangencialmente em um vértice compartilhado — um canto de polilinha reto, ou uma linha que se prolonga suavemente em um segmento de arco de continuação tangencial — não há um canto real que um círculo possa arredondar. O Fillet detecta isso e recusa com `cannot fillet: no tangent circle fits there` em vez de traçar um laço indesejado.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta dígito ao valor do raio |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` / `Espaço` | Confirma o raio digitado e passa para a seleção de entidade |
| `Escape` | Cancela e reinicia |

## Entidades suportadas

| Entidade | Suportada |
|----------|-----------|
| Line | Sim |
| Arc | Sim |
| Polyline (segmento reto ou de arco) | Sim |
| Circle, Ellipse | Não |
| Text, Spline, Dimension, Leader | Não |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipo de canto | Arco arredondado | Corte reto |
| Entrada | Um raio | Duas distâncias (d1, d2) |
| Entidade inserida | Arc | Line |
| Entidades suportadas | Line, Arc e Polyline (segmentos retos ou de arco) | Line e Polyline (apenas segmentos retos) |
