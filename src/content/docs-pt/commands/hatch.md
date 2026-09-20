---
title: Comando Hatch — Preencher uma área com um padrão
description: O comando Hatch preenche a região que envolve um ponto clicado com um padrão — qualquer combinação de linhas, arcos, elipses e splines que se fecha envolve uma região, e qualquer forma fechada dentro dela permanece como uma ilha não preenchida.
keywords: [comando hatch CAD, preencher área CAD, padrão de hatch CAD, ANSI31, preenchimento SOLID, preenchimento de contorno CAD, entidade DXF HATCH, kulmanlab]
group: shapes
order: 7
---

# Hatch

O comando `Hachura` preenche a região que envolve um ponto clicado com um padrão. O contorno não é desenhado primeiro — ele vem do que já está na tela, então quatro [Lines](../line/) separadas que se encontram ponta a ponta envolvem uma região exatamente como uma [Polyline](../polyline/) fechada faz, e qualquer forma fechada dentro se torna uma ilha que o preenchimento deixa intacta.

## Preenchendo uma área

1. Digite `Hachura` no terminal ou clique no botão **Hatch** da barra de ferramentas (o ícone de amostra).
2. **Clique em um ponto** dentro da região que deseja preencher.
3. O comando permanece ativo, então continue clicando para preencher mais áreas — cada clique cria sua própria entidade `Hatch`.
4. Pressione **Enter**, **Espaço** ou **Escape** quando terminar.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   clique dentro do
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   contorno externo; o
  └─────────────┘        └─────────────┘   círculo permanece uma ilha
```

## Referência de teclado

| Tecla | Ação |
|-----|--------|
| `Enter` / `Space` | Finalizar o comando Hatch |
| `Escape` | Finalizar o comando Hatch (igual a Enter/Espaço) |

## O que pode formar um contorno

Qualquer combinação destes tipos de entidade pode formar um contorno, em qualquer combinação, desde que se conectem ponta a ponta sem nenhuma lacuna:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (seu próprio contorno fechado)
- [Ellipse](../ellipse/) (fechada, ou um arco elíptico aberto como parte de um laço maior)
- [Polyline](../polyline/) (aberta ou fechada) e [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

As entidades Text, Multileader e Dimension nunca são tratadas como contornos.

## Ilhas

Tudo o que está completamente fechado dentro da região que você clicou — um círculo, uma polilinha fechada, o contorno de outro hatch — se torna uma **ilha**: o preenchimento para na sua borda e a própria ilha permanece vazia. Coloque uma forma fechada dentro de outra forma fechada e o preenchimento se alterna, buraco dentro de um preenchimento dentro de um buraco, seguindo a mesma regra dentro/fora em cada nível.

## Quando uma seleção falha

Se o ponto que você clicou não está fechado, ou o contorno tem uma lacuna, o terminal explica o motivo em vez de silenciosamente não fazer nada:

| Mensagem | Significado |
|----------|--------------|
| "no boundary found" | Nada foi encontrado em nenhuma direção a partir do ponto clicado — não há nenhum contorno próximo |
| "point is not enclosed" | Existe um contorno próximo, mas a forma que ele forma não contém o ponto que você clicou |
| "boundary is open" | O contorno mais próximo tem uma lacuna em algum lugar — trace-o e verifique se cada junção está exata |
| "boundary too complex" | O laço do contorno não pôde ser fechado dentro do limite de travessia — geralmente um emaranhado de entidades sobrepostas |

O comando permanece ativo após uma seleção falhada — leia a mensagem, corrija o desenho ou clique em outro lugar, e tente novamente.

## Escolhendo um padrão

Todo novo hatch começa preenchido com `ANSI31` (ou qualquer padrão que o *último* hatch que você editou usava) — não há seletor de padrão antes de desenhar. Para usar um padrão diferente:

1. Selecione um hatch existente e abra seu campo **Pattern** no painel de propriedades — isso abre o seletor de padrões, uma grade de amostras nomeadas agrupadas por origem de cada padrão.
2. Clique em um padrão para aplicá-lo — o preenchimento é atualizado instantaneamente.

Essa seleção também se torna o padrão para o *próximo* hatch que você criar com o comando `Hachura`, da mesma forma que escolher uma camada ou cor é transferido adiante. Então, para aplicar hatch em várias áreas novas com um padrão específico: preencha uma área, defina seu padrão uma vez, depois continue aplicando hatch — cada preenchimento depois já começa com esse padrão aplicado.

Veja [Hatch Manager](../hatch-manager/) para enviar seus próprios arquivos de padrão `.pat` e navegar pela biblioteca completa.

**SOLID** é uma entrada comum na lista de padrões, não uma caixa de seleção ou modo separado — selecione-o da mesma forma que selecionaria ANSI31 ou qualquer outro padrão nomeado.

## Propriedades

| Propriedade | Significado |
|-------------|--------------|
| Pattern | O nome do padrão, do vocabulário de padrões compartilhado (veja [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Escala o espaçamento das linhas do padrão — valores maiores espaçam mais as linhas do padrão |
| Pattern Angle | Gira o padrão independentemente do contorno |
| Origin X / Origin Y | Onde a repetição própria do padrão está ancorada, em coordenadas do desenho |

Mover, girar, espelhar ou escalar um hatch leva consigo o posicionamento do seu padrão, então o preenchimento permanece alinhado com o contorno — você não precisa reconfigurar a escala ou o ângulo após uma transformação.

## Edição por alças do contorno

Um hatch selecionado agarra seu contorno da mesma forma que uma Polyline agarra seus vértices — uma alça em cada canto onde duas bordas se encontram, e uma no meio de cada borda (um laço fechado como um hatch de círculo ou elipse agarra em seus quatro pontos de eixo, em vez disso).

| Alça | O que faz |
|------|-----------|
| **Canto** | Move esse canto. Uma borda reta segue exatamente; um arco se reajusta para continuar passando por ambos os vizinhos; uma borda de elipse ou spline só pode pousar em algum lugar na sua própria curva, então o canto se prende ao ponto mais próximo nela |
| **Meio da borda — borda de linha, elipse ou spline** | Desliza toda a borda; as bordas de ambos os lados são cortadas ou estendidas para permanecerem unidas a ela |
| **Meio da borda — borda de arco** | **Curva** o arco através do cursor em vez de deslizá-lo — ambas as extremidades permanecem exatamente onde estavam, e nada mais no contorno se move |
| **Centro** (hatch inteiro) | Ativa [Move](../move/) para todo o hatch |

Uma pré-visualização de arraste exibe o contorno como um contorno tracejado em vez de um preenchimento sólido enquanto você arrasta — o preenchimento original permanece visível por baixo até você soltar, já que uma pré-visualização só pode pintar sobre o que já existe, nunca remover nada dele.

## DXF — entidade HATCH

Os hatches são **importados** de entidades `HATCH`: o KulmanLab lê a geometria do contorno junto com o nome, a escala e o ângulo do padrão (códigos de grupo DXF 70/41/52) — ele **não** lê as próprias definições de linha do padrão embutidas no arquivo. Em vez disso, o nome do padrão é procurado na própria biblioteca de padrões do KulmanLab (padrões integrados mais o que você enviou no [Hatch Manager](../hatch-manager/)). Um nome que não está na sua biblioteca recorre a ANSI31 para que o desenho ainda seja lido como hatched, e uma nota é registrada uma vez.

Laços delimitados por spline escritos por outras aplicações (tipo de borda de contorno DXF 4) ainda não são lidos.

As hachuras são **exportadas** para DXF como entidades `HATCH`. Os laços do contorno saem junto com o nome do padrão (código de grupo 2), o sinalizador de preenchimento sólido (70) e o ângulo e a escala daquela hachura (52/41) — e, ao contrário do caminho de importação, as definições de linha já resolvidas do padrão também são escritas no arquivo (78, com 53/43/44/45/46/79/49). A assimetria é proposital: o KulmanLab consegue resolver um nome na sua própria biblioteca, mas o aplicativo que recebe o arquivo pode não ter aquele padrão, então as linhas viajam junto.

## Comandos relacionados

- [Hatch Manager](../hatch-manager/) — navegue pela biblioteca de padrões e envie arquivos `.pat`
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — todos levam consigo o posicionamento do padrão do hatch
- [Delete](../delete/) — exclui o hatch sem afetar as entidades que formavam seu contorno
