---
sidebar_position: 11
title: "Comando Leader− — Remover um Braço com Seta de um Multileader no KulmanLab CAD"
description: "O comando Leader− remove um braço com seta de um multileader que tem dois ou mais. Passe o cursor próximo ao braço a remover — o braço mais próximo é destacado. O dogleg, o texto e os braços restantes são preservados."
keywords: [CAD leader remover braço, comando leader-, remover seta do leader, excluir braço multileader, kulmanlab]
---

# Leader−

O comando `leader-` remove um braço com seta de um multileader existente. A etiqueta de texto, o dogleg e todos os braços restantes são preservados — apenas o braço selecionado é excluído. Um multileader com apenas um braço não pode ter seu braço removido.

## Removendo um braço

1. Digite `leader-` no terminal.
2. **Clique em um multileader** com dois ou mais braços. Se o leader clicado tiver apenas um braço, o terminal mostra um erro e aguarda uma seleção válida.
3. **Mova o cursor próximo ao braço** que deseja remover — o braço mais próximo é destacado com um marcador.
4. **Clique** para remover esse braço.

O braço é removido e o comando permanece ativo — você pode imediatamente clicar em outro leader (ou no mesmo) para remover mais braços. Pressione **Enter**, **Espaço** ou **Escape** para terminar.

```
  Antes:                    Depois:
  ◄── braço 1               ◄── braço 1
       \                          \
        ●──── dogleg ──── texto    ●──── dogleg ──── texto
       /
  braço 2 ──►  ← este braço removido
```

## Como o braço mais próximo é determinado

O comando mede a distância perpendicular do cursor aos segmentos de linha de cada braço (incluindo o segmento do último ponto do braço ao dogleg). O braço com a menor distância é destacado e será removido ao clicar.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Termina a remoção de braços |
| `Escape` | Cancela e reinicia |

## Notas

- Um leader com **apenas um braço** é protegido — você deve primeiro adicionar um braço antes de poder remover um.
- A posição do dogleg e o conteúdo do texto são sempre preservados independentemente do braço removido.

## Comandos relacionados

| Comando | Função |
|---------|--------|
| [Leader](./leader) | Cria um novo multileader do zero |
| [Leader+](./leader-add) | Adiciona um braço a um multileader existente |
