---
title: Comando Area — Medir a Área e o Perímetro de um Polígono no KulmanLab CAD
description: O comando Area mede a área delimitada e o perímetro de um polígono definido por 3 ou mais pontos clicados, usando a fórmula do sapateiro (shoelace). Suporta entrada direcional com bloqueio de ângulo e um destaque persistente do resultado no canvas.
keywords: [CAD medir área, comando area, cálculo de área de polígono, medição de perímetro, fórmula do sapateiro, kulmanlab]
group: measure
order: 3
---

# Area

O comando `area` mede a área delimitada e o perímetro de um polígono definido por três ou mais pontos clicados, e imprime ambos os resultados no terminal com 4 casas decimais. É o terceiro comando de medição, ao lado de [Distance](../distance/) (comprimento em linha reta) e [Angle](../angle/) (ângulo interior num vértice).

## Anatomia de uma medição de área

```
  ● primeiro ponto
   \
    \
     ● segundo ponto
      \
       \             (tracejado) pré-visualização da aresta de fecho
        ●───────────────┐
      terceiro ponto    │  (tracejado) pré-visualização da próxima aresta até o cursor
                        ✕ cursor  →  terminal: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vértices** — cada ponto clicado (ou digitado) torna-se um vértice do polígono; as arestas confirmadas são desenhadas a traço contínuo e o interior é preenchido com um destaque translúcido.
- **Arestas de pré-visualização** — linhas tracejadas mostram a aresta pendente do último vértice até o cursor, e a aresta de fecho do cursor de volta ao primeiro vértice.
- **Aresta de fecho** — nunca se clica de novo no primeiro ponto; pressionar Enter fecha o polígono automaticamente.

## Medir uma área

1. Digite `area` no terminal ou clique no botão **Area** na barra de ferramentas (linha inferior do painel Measure).
2. **Clique no primeiro ponto**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique em cada vértice adicional** por ordem à volta da forma. A entrada de coordenadas funciona em cada passo.
4. Assim que pelo menos **3 pontos** estiverem colocados, pressione **Enter** (sem uma entrada de coordenada ou distância pendente) para fechar o polígono e calcular o resultado.
5. O terminal imprime `Area: <valor>  Perimeter: <valor>`, e o polígono fechado — preenchimento, contorno e alças de vértice — permanece destacado no canvas.
6. **Clique em qualquer lugar, pressione qualquer tecla, ou pressione `Escape`** para dispensar o resultado e terminar o comando.

## Bloqueio de ângulo e distância exata

Depois de o primeiro vértice ser colocado, mover-se em direção a um dos incrementos de rastreio de ângulo configurados (10°, 15°, 20°, 30°, 45° ou 90°, ajustáveis na lista suspensa da barra de ferramentas) bloqueia a próxima aresta nessa direção:

- A pré-visualização da aresta encaixa na direção bloqueada, e um indicador de rastreio de ângulo é desenhado no vértice de ancoragem.
- Digite um comprimento e pressione **Enter** para colocar o próximo vértice exatamente a essa distância ao longo da direção bloqueada.
- Clicar enquanto bloqueado (sem comprimento digitado) coloca o vértice na projeção do cursor sobre a direção bloqueada.

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona ao valor de comprimento da aresta |
| `-` | Comprimento negativo (apenas como primeiro carácter) |
| `Backspace` | Apaga o último carácter digitado |
| `Enter` | Coloca o próximo vértice no comprimento digitado |

## Fechar o polígono

- Enter só fecha a forma depois de colocados **3 ou mais** vértices — com menos, não tem efeito.
- A aresta do último vértice de volta ao primeiro é adicionada automaticamente e contada tanto na área como no perímetro.
- Os pontos podem ser colocados em qualquer ordem (horário ou anti-horário) — o resultado é idêntico.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| O que mede | Área delimitada e perímetro de um polígono | Comprimento em linha reta | Ângulo interior num vértice |
| Número de cliques | 3 ou mais, fechado com Enter | 2 | 3 |
| Formato do resultado | `12.3456  Perimeter: 45.6789` | `12.3456` (unidades) | `45.0000°` |
| Pré-visualização no canvas | Polígono preenchido com aresta de fecho tracejada | Linha do primeiro ponto ao cursor | Duas linhas do vértice ao cursor |
| Após o resultado | Dispensa com qualquer entrada, depois o comando termina | Um clique encadeia uma nova medição | Um clique encadeia uma nova medição |
| Ideal para | Regiões delimitadas, área de uma divisão ou painel | Comprimento de um segmento ou lacuna | Ângulo de abertura entre dois elementos |

## Entrada de coordenadas

Em vez de clicar, digite uma posição exata para qualquer vértice:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para confirmar.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X, ou entrada de comprimento de aresta com bloqueio de ângulo ativo |
| `,` | Bloqueia X e passa para entrada Y |
| `Backspace` | Apaga o último carácter digitado |
| `Enter` | Confirma uma coordenada ou comprimento digitado; com 3 ou mais vértices e sem entrada pendente, fecha o polígono |
| `Escape` | Ao selecionar vértices: descarta os pontos e recomeça no primeiro ponto; assim que o resultado é mostrado: dispensa-o e termina o comando |

## Notas

- A área é calculada com a fórmula do sapateiro (shoelace) e é sempre apresentada como um valor positivo, independentemente da ordem dos cliques.
- Polígonos autointersectantes (arestas que se cruzam) ainda produzem um resultado numérico, mas o valor pode não corresponder à região visualmente delimitada — mantenha uma ordem de cliques sem cruzamentos para uma área significativa.
- Os resultados são exibidos apenas no **terminal e como um destaque temporário no canvas** — nada é adicionado ao desenho de forma permanente.
- Ao contrário de Distance e Angle, Area **não** encadeia automaticamente uma nova medição — depois de dispensar o resultado, execute `area` novamente para medir outro polígono.
- A precisão é sempre de 4 casas decimais tanto para a área como para o perímetro, nas mesmas unidades das coordenadas do desenho (sem conversão de unidades).
