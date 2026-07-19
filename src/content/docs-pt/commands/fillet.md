---
title: Comando Fillet — Arredondar um Canto entre Duas Linhas
description: O comando Fillet conecta duas entidades Line com um arco tangente de um raio especificado, aparando cada linha de volta ao ponto tangente. Uma pré-visualização de arco tracejado ajuda a escolher o canto correto antes de clicar.
keywords: [comando fillet CAD, arredondar canto CAD, arco de filete, arco tangente duas linhas, kulmanlab]
group: edit
order: 11
---

# Fillet

O comando `fillet` arredonda o canto entre duas entidades [Line](../line/) inserindo um arco tangente de um dado raio e aparando cada linha de volta ao ponto onde o arco começa. O resultado é um canto suave e com raio conectando ambas as linhas.

O Fillet funciona apenas em entidades **Line**.

## Usar fillet

1. Digite `fillet` no terminal ou clique no botão **Fillet** na barra de ferramentas.
2. **Digite o raio do filete** e pressione **Enter**.
3. **Clique na primeira linha** — a porção que você clica determina qual lado de qualquer interseção é mantido.
4. **Passe o cursor sobre a segunda linha** — uma pré-visualização de arco tracejado mostra o filete resultante. Mova o cursor para o lado que deseja manter.
5. **Clique** para aplicar. Ambas as linhas são aparadas e o arco é inserido.

```
  Antes:                       Depois do fillet (raio r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Seleção de lado para linhas que se cruzam

Quando duas linhas se cruzam, o filete é aplicado no canto definido pelas posições de clique — a porção de cada linha no **mesmo lado do cursor** é mantida.

- Clique próximo de uma extremidade da primeira linha para selecionar essa metade.
- Mova o cursor para a metade desejada da segunda linha — a pré-visualização tracejada atualiza em tempo real.

## O que o comando cria

- O ponto final da primeira linha mais próximo da interseção é movido para o ponto tangente **T1**.
- O ponto final da segunda linha mais próximo da interseção é movido para o ponto tangente **T2**.
- Uma nova entidade Arc é inserida de **T1** a **T2**, tangente a ambas as linhas.

O arco inserido herda as configurações atuais de espessura de linha, cor, camada e tipo de linha.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta dígito ao valor do raio |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma o raio digitado e passa para a seleção de linha |
| `Escape` | Cancela e reinicia |

## Entidades suportadas

| Entidade | Suportada |
|----------|-----------|
| Line | Sim — tanto como primeira quanto segunda entidade |
| Arc, Circle, Ellipse, Polyline | Não |
| Text, Spline, Dimension, Leader | Não |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Tipo de canto | Arco arredondado | Corte reto |
| Entrada | Um raio | Duas distâncias (d1, d2) |
| Entidade inserida | Arc | Line |
| Entidades suportadas | Apenas Line | Line e Polyline |
