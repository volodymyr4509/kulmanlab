---
title: Comando Scale — Redimensionar Entidades Uniformemente em torno de um Ponto Base no KulmanLab CAD
description: O comando Scale redimensiona as entidades selecionadas uniformemente por um fator digitado em torno de um ponto base fixo. O fator é sempre inserido pelo teclado — não há clique-para-definir-escala. Um fator maior que 1 amplia; menor que 1 reduz. Todos os tipos de entidade são suportados.
keywords: [CAD comando scale, redimensionar entidades CAD, escalar objetos CAD, escala uniforme CAD, fator escala CAD, ampliar reduzir CAD, kulmanlab]
group: edit
order: 5
---

# Scale

O comando `scale` redimensiona as entidades selecionadas uniformemente em torno de um ponto base. Todas as distâncias do ponto base são multiplicadas pelo fator de escala — um fator de `2` dobra todas as dimensões, `0.5` as reduz à metade. O fator é sempre inserido digitando; não há clique-para-definir-escala.

## Duas formas de iniciar

**Pré-selecionar, depois escalar** — selecione entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `scale` no terminal ou clique no botão **Scale** na barra de ferramentas.
3. **Clique no ponto base** — o ponto fixo que não se move durante o dimensionamento. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
4. **Digite o fator de escala** e pressione **Enter**.

**Ativar, depois selecionar** — inicie o comando sem nada selecionado:

1. Digite `scale` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique para alternar, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. **Clique no ponto base** (entrada de coordenadas disponível), depois digite o fator.

```
  Base ●                Base ●
        [entidade]  →         [entidade maior]
  fator = 2 → as distâncias de ● são dobradas
```

## Digitando o fator de escala

Após o ponto base ser posicionado o terminal mostra `insira o fator de escala:` e aguarda entrada do teclado:

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona dígito ao fator |
| `-` | Fator negativo (apenas primeiro caractere — inverte então escala) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Aplica a escala no fator digitado |

O fator deve ser diferente de zero. Valores comuns:

| Fator | Efeito |
|-------|--------|
| `2` | Dobra todas as dimensões |
| `0.5` | Reduz todas as dimensões à metade |
| `1.5` | Aumenta em 50% |
| `-1` | Espelha em relação ao ponto base (equivale a uma rotação de 180°) |

Não há prévia ao vivo durante a digitação — o resultado escalado aparece apenas após pressionar **Enter**.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção |
| `0`–`9`, `.`, `-` | Começa entrada de coordenada X (fase ponto base), ou fator de escala (fase fator) |
| `,` | Bloqueia X e move para entrada Y (fase ponto base) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma coordenada ou aplica a escala |
| `Escape` | Cancela e reinicia |

## O que é escalado

Todos os tipos de entidade são suportados. Cada entidade escala sua geometria relativa ao ponto base:

| Entidade | O que muda |
|----------|-----------|
| Linha | Ambos os endpoints escalados a partir do ponto base |
| Círculo | Centro escalado a partir do ponto base; raio multiplicado pelo fator |
| Arco | Centro escalado; raio multiplicado pelo fator; ângulos inalterados |
| Elipse | Centro escalado; ambos os comprimentos dos semi-eixos multiplicados pelo fator |
| Polilinha / Retângulo | Cada vértice escalado a partir do ponto base |
| Texto | Ponto de ancoragem escalado; altura multiplicada pelo fator |
| Spline | Todos os vértices de controle / pontos de ajuste escalados |
