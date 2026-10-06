---
title: Comando Trim — Cortar Segmentos em Interseções
description: O comando Trim remove a porção de uma Line, Arc, Circle, Ellipse ou Polyline entre dois pontos de interseção adjacentes mais próximos ao cursor. Uma prévia mostra exatamente qual segmento será cortado antes de clicar.
keywords: [CAD comando trim, cortar linha CAD, cortar círculo CAD, cortar arco CAD, cortar elipse CAD, cortar polilinha CAD, cortar linha interseção, prévia trim hover, kulmanlab]
group: edit
order: 8
---

# Trim

O comando `Aparar` remove a porção de uma [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) ou [Polyline](../polyline/) que fica entre dois pontos de interseção adjacentes, dividindo a entidade em uma ou mais partes restantes. O segmento a cortar é determinado pela posição do cursor — passe sobre a parte que deseja remover e clique para cortar.

## Cortando uma entidade

1. Digite `Aparar` no terminal ou clique no botão **Trim** na barra de ferramentas.
2. **Passe o cursor sobre o segmento** que deseja remover — uma prévia destaca exatamente a porção que será cortada.
3. **Clique** para remover esse segmento.

O comando permanece ativo após cada corte, então você pode continuar passando o cursor e clicando para cortar mais segmentos — na mesma entidade ou em outra. Pressione **Enter**, **Espaço** ou **Escape** para sair.

```
  Antes:                         Após cortar segmento central:

  ──────●──────●──────           ──────●          ●──────
      intersec  intersec             (parte esquerda)  (parte direita)
                                     (segmento central removido)
```

## Como o segmento a cortar é determinado

O comando projeta a posição do cursor na entidade passada e encontra todos os pontos de interseção que ela tem com outras entidades. Essas interseções dividem a entidade em segmentos — em uma Line, Arc ou Polyline aberta, os próprios extremos da entidade atuam como limites fixos adicionais. Um Circle ou uma Ellipse completos, ou uma Polyline fechada (incluindo um Retângulo), não têm extremos próprios, então são necessários pelo menos dois pontos de interseção antes que possam ser cortados. O segmento cujo intervalo contém a projeção do cursor é destacado e será removido ao clicar.

- **Line, Arc e Polyline aberta** — o segmento removido pode ser a porção inicial (antes da primeira interseção), uma porção central (entre duas interseções, dividindo a entidade em duas partes), ou a porção final (após a última interseção).
- **Circle, Ellipse e Polyline fechada/Retângulo** — como não há um início ou fim fixo, apenas o arco entre dois *pontos de interseção* pode ser removido. Com menos de duas interseções, nenhuma prévia aparece e clicar não faz nada. O resto da forma se torna a única parte restante.

## O que o corte produz

| Entidade | Resultado após o corte |
|--------|------------------------|
| Line | Até duas entidades Line mais curtas |
| Arc | Até duas entidades Arc mais curtas |
| Circle | Uma entidade [Arc](../arc/) — a forma fechada do círculo desaparece, então a parte restante é armazenada como arco |
| Ellipse | Uma entidade Ellipse com ângulo inicial e final — a parte restante continua sendo uma Ellipse, agora parcial |
| Polyline (aberta) | Até duas entidades Polyline mais curtas |
| Polyline (fechada) / Retângulo | Uma entidade Polyline aberta — a forma fechada desaparece, então a parte restante é armazenada aberta |
| Spline | Até dois objetos Spline mais curtos — cada pedaço é a mesma curva sobre um trecho menor, armazenada por vértices de controle (os pontos de ajuste de uma spline de ajuste são descartados); uma spline fechada deixa um pedaço aberto |

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Sai do modo trim |
| `Escape` | Sai do modo trim |

## Entidades suportadas

| Entidade | Pode ser cortada? |
|----------|------------------|
| Line | Sim |
| Arc | Sim |
| Circle | Sim — requer 2 ou mais pontos de interseção |
| Ellipse | Sim — requer 2 ou mais pontos de interseção |
| Polyline (aberta) | Sim |
| Polyline (fechada) / Retângulo | Sim — requer 2 ou mais pontos de interseção |
| Spline | Sim — uma spline fechada exige 2 ou mais pontos de interseção |
| Texto, Cota, Leader | Não |

Os objetos usados como **limites de corte** podem ser Line, Arc, Circle, Ellipse, Polyline ou Spline. Os objetos Text, Dimension e Leader nunca registram interseções, portanto também não podem atuar como limites.

Os **segmentos de arco** de uma Polyline (desenhados com a opção Arc, ou importados) são cortados exatamente como seus segmentos retos — passe o cursor sobre a parte do arco entre duas interseções e clique. A borda cortada mantém sua curvatura; apenas seu comprimento muda.

## Trim vs Extend

| | Trim | Extend |
|---|------|--------|
| O que faz | Remove um segmento de uma entidade | Estica um endpoint de uma linha até uma borda |
| Trigger | Passe o cursor sobre o segmento a cortar | Passe o cursor próximo ao endpoint a estender |
| Resultado | A entidade se divide ou encurta | O endpoint da linha se move até a borda |
| Entidades suportadas | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
