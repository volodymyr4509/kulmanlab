---
sidebar_position: 12
title: Comando Leader+ — Adicionar um Braço com Seta a um Multileader no KulmanLab CAD
description: O comando Leader+ adiciona um novo braço com ponta de seta a um multileader existente. O novo braço compartilha o dogleg, texto e todo o estilo do leader selecionado. Dois cliques — selecione o leader, posicione a nova ponta.
keywords: [CAD leader adicionar braço, comando leader+, adicionar seta ao leader, braço multileader, kulmanlab]
---

# Leader+

O comando `leader+` adiciona um novo braço com ponta de seta a um multileader existente. O novo braço parte do dogleg existente do leader até uma nova ponta de seta que você clica. Todo o estilo — posição do dogleg, texto, tipo de seta e tamanho — é herdado do leader selecionado.

## Adicionando um braço

1. Digite `leader+` no terminal.
2. **Clique em um multileader existente** para selecioná-lo.
3. **Clique na nova ponta da seta**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata. Uma linha de prévia é exibida do cursor ao dogleg do leader.

O braço é posicionado e o comando permanece ativo — você pode imediatamente clicar em outro leader para adicionar mais braços. Pressione **Enter**, **Espaço** ou **Escape** para terminar.

```
  Antes:                         Depois:
  ◄── braço 1                    ◄── braço 1
       \                               \
        ●──── dogleg ──── texto         ●──── dogleg ──── texto
                                       /
                                  braço 2 ──►  (nova ponta clicada)
```

## Inserção de coordenada para a ponta

Em vez de clicar, você pode digitar uma posição exata:

1. Digite o valor X.
2. Pressione `,` — o terminal confirma que X está bloqueado.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a digitar a coordenada X |
| `,` | Bloqueia X e move para a entrada Y |
| `Enter` | Confirma a coordenada digitada e posiciona o braço |
| `Enter` / `Espaço` | Termina (quando nenhuma entrada está em andamento) |
| `Escape` | Cancela e reinicia |

## Notas

- Apenas entidades **Multileader** podem ser selecionadas — clicar em qualquer outro tipo de entidade não faz nada.
- O novo braço parte do dogleg existente; você escolhe apenas onde vai a ponta da seta.
- Não há limite para o número de braços que um multileader pode ter.

## Comandos relacionados

| Comando | Função |
|---------|--------|
| [Leader](../leader/) | Cria um novo multileader do zero |
| [Leader−](../leader-remove/) | Remove um braço de um multileader com dois ou mais braços |
