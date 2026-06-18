---
sidebar_position: 21
title: Comando Chamfer — Criar um Corte Diagonal entre Duas Linhas no KulmanLab CAD
description: O comando Chamfer conecta duas entidades Line ou Polyline com um corte diagonal reto. Você especifica duas distâncias — uma ao longo de cada entidade — e o comando corta ambas até esses pontos e insere uma linha de ligação.
keywords: [comando chamfer CAD, chanfro linha CAD, corte diagonal canto, canto bisotado CAD, kulmanlab]
---

# Chamfer

O comando `chamfer` corta um canto diagonal reto entre duas entidades [Line](./line) ou [Polyline](./polyline). Você especifica quanto cortar ao longo de cada entidade (d1 e d2), e o comando corta ambas as entidades nesses pontos e insere uma linha de ligação entre elas.

Usar distâncias iguais produz um corte simétrico a 45°; distâncias diferentes produzem um chanfro assimétrico.

O Chamfer funciona em entidades **Line e Polyline**.

## Usar chamfer

1. Digite `chamfer` no terminal ou clique no botão **Chamfer** na barra de ferramentas.
2. **Digite a primeira distância de chanfro** (d1 — distância ao longo da primeira entidade) e pressione **Enter**.
3. **Digite a segunda distância de chanfro** (d2 — distância ao longo da segunda entidade) e pressione **Enter**.
4. **Clique na primeira entidade** — a porção que você clica determina qual lado de qualquer interseção é mantido.
5. **Passe o cursor sobre a segunda entidade** — uma pré-visualização tracejada mostra o corte de chanfro resultante. Mova o cursor para o lado que deseja manter.
6. **Clique** para aplicar. Ambas as entidades são cortadas e a linha de chanfro é inserida.

```
  Antes (d1=5, d2=8):          Depois:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Seleção do lado

Quando duas linhas se cruzam, o chanfro é aplicado no canto definido pelas posições de clique — a porção de cada entidade no **mesmo lado do cursor** é mantida.

- Clique próximo de uma extremidade da primeira entidade para selecionar essa metade.
- Mova o cursor para a metade desejada da segunda entidade — a pré-visualização tracejada atualiza em tempo real.

Para Polylines, a posição do clique determina qual **segmento** da polilinha participa, e o vértice mais próximo do lado da interseção é o que é cortado.

## O que o comando cria

- O ponto final da primeira entidade (ou vértice da polilinha) mais próximo da interseção é movido para o ponto **T1**, localizado a d1 ao longo da primeira entidade a partir da interseção.
- O ponto final da segunda entidade (ou vértice da polilinha) mais próximo da interseção é movido para o ponto **T2**, localizado a d2 ao longo da segunda entidade a partir da interseção.
- Uma nova entidade Line é inserida de **T1** a **T2**.

A linha inserida herda as configurações atuais de espessura de linha, cor, camada e tipo de linha.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta dígito ao valor de distância atual |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma a distância digitada e avança |
| `Escape` | Cancela e reinicia |

## Entidades suportadas

| Entidade | Suportada |
|----------|-----------|
| Line | Sim |
| Polyline / Rectangle | Sim |
| Arc, Circle, Ellipse | Não |
| Text, Spline, Dimension, Leader | Não |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Tipo de canto | Corte reto | Arco arredondado |
| Entrada | Duas distâncias (d1, d2) | Um raio |
| Entidade inserida | Line | Arc |
| Entidades suportadas | Line e Polyline | Apenas Line |
