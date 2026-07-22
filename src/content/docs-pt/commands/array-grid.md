---
title: Comando Array Grid — Repetir Entidades em Linhas e Colunas
description: O comando Array Grid cria uma grade retangular de cópias a partir das entidades selecionadas — digite o número de linhas, colunas e o espaçamento entre elas diretamente no terminal, sem necessidade de clicar em pontos.
keywords: [comando array CAD, arraygrid, array retangular CAD, padrão de grade CAD, repetir entidades CAD, copiar array CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

O comando `ArrayGrid` cria uma grade retangular de cópias a partir das entidades selecionadas — digite o número de linhas, o número de colunas e o espaçamento entre elas, tudo digitado no terminal. A seleção original ocupa a célula linha 0, coluna 0; cada outra célula é uma cópia transladada.

## Duas formas de começar

**Pré-selecionar, depois array** — selecione as entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `arraygrid` no terminal (`arr` já é suficiente — é inequívoco) ou clique no botão **Array Grid** na barra de ferramentas.
3. Digite o número de **linhas** e pressione **Enter**.
4. Digite o número de **colunas** e pressione **Enter**.
5. Digite o **espaçamento entre linhas** e pressione **Enter**.
6. Digite o **espaçamento entre colunas** e pressione **Enter** — a grade é criada imediatamente.

**Ativar, depois selecionar** — inicie o comando sem nada selecionado:

1. Digite `arraygrid` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique para alternar entidades individuais, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. Continue com linhas → colunas → espaçamento de linhas → espaçamento de colunas como acima.

```
  2 linhas x 3 colunas:

  [B] [B] [B]   <- linha 1 (cópias transladadas)
  [A] [A] [A]   <- linha 0: seleção original, cópias para a direita
```

> O terminal precisa apenas das letras suficientes para ser inequívoco — digitar `arr` e pressionar **Enter** ativa o Array Grid diretamente, já que nenhum outro nome de comando começa com essas três letras (Arc, Area, Align e Angle divergem antes).

## Linhas, colunas e espaçamento

| Prompt | Aceita | Notas |
|--------|--------|-------|
| Linhas | Números inteiros positivos (1, 2, 3…) | Apenas dígitos — sem ponto decimal ou sinal |
| Colunas | Números inteiros positivos (1, 2, 3…) | Apenas dígitos — sem ponto decimal ou sinal |
| Espaçamento de linhas | Decimal com sinal (ex. `10`, `-5.5`) | Distância entre linhas; negativo inverte a direção |
| Espaçamento de colunas | Decimal com sinal (ex. `10`, `-5.5`) | Distância entre colunas; negativo inverte a direção |

Com 1 linha e 1 coluna, nenhuma cópia é criada — o comando termina sem alterar o desenho.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção e avança para o prompt de linhas |
| `0`–`9` | Insere dígitos para linhas ou colunas |
| `0`–`9`, `.`, `-` | Insere dígitos para o espaçamento de linhas/colunas (`-` apenas como primeiro caractere) |
| `Backspace` | Apaga o último caractere digitado do prompt atual |
| `Enter` | Confirma o prompt atual e avança para o próximo |
| `Escape` | Limpa os valores de linhas/colunas/espaçamento digitados e volta para a fase de seleção |

## Seleção durante o comando

| Método | Comportamento |
|--------|--------------|
| **Clique** | Alterna a entidade sob o cursor para dentro/fora da seleção |
| **Arrastar à direita** (estrito) | Adiciona entidades completamente dentro do retângulo |
| **Arrastar à esquerda** (cruzamento) | Adiciona entidades que cruzam o limite do retângulo |
| **Enter** / **Espaço** | Confirma a seleção e avança para o prompt de linhas |

## Após o array

As novas cópias são adicionadas ao desenho e o comando termina — a seleção original é limpa. Execute **Array Grid** novamente, ou inicie um novo comando.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Seleção de pontos | Nenhuma — linhas, colunas e espaçamento são digitados | Ponto base e destino são clicados (ou digitados) |
| Cópias criadas | Linhas × colunas − 1 | Exatamente 1 por operação de cópia |
| Layout | Grade retangular regular | Em qualquer lugar, a qualquer deslocamento |
| Ideal para | Repetir uma unidade em um padrão regular (furos, azulejos, fixadores) | Uma única duplicata em uma posição arbitrária |

## Entidades suportadas

Array Grid funciona em todos os tipos de entidade. Todas as entidades implementam `translate(dx, dy)` internamente, a mesma operação usada por [Copy](../copy/) e [Move](../move/), portanto nenhuma é excluída.
