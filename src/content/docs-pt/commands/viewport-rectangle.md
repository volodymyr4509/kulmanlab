---
title: Comando ViewportRectangle — Criar uma Viewport em um Layout
description: O comando ViewportRectangle cria uma viewport em um layout papel selecionando dois cantos opostos. A viewport mostra as entidades do espaço modelo na escala padrão do layout.
keywords: [viewport rectangle, criar viewport, viewport layout, viewport espaço papel, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

O comando `ViewportRectangle` cria uma nova viewport no layout papel ativo selecionando dois cantos opostos. Disponível apenas no espaço de layout.

## Criando uma viewport

1. Mude para um layout papel usando a aba na parte inferior da tela.
2. Digite `ViewportRectangle` no terminal ou clique no botão **Viewport Rectangle** na barra de ferramentas.
3. **Clique no primeiro canto**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
4. **Clique no canto oposto** — a viewport é posicionada imediatamente. A entrada de coordenadas também funciona aqui.

A nova viewport mostra o modelo completo na escala padrão do layout. Use a roda de rolagem dentro da viewport para dar zoom, ou o arraste com o botão do meio para mover a vista do modelo.

## Entrada de coordenadas

Em qualquer etapa dos cantos você pode digitar uma coordenada exata:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o ponto.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X |
| `,` | Bloqueia X e move para entrada Y |
| `Enter` | Confirma a coordenada digitada |
| `Escape` | Cancela |

## Editando uma viewport

Após posicionar uma viewport, clique nela para selecioná-la:

- **Arraste as bordas ou cantos** para redimensionar.
- **Arraste o grip central** para movê-la.
- Use o **seletor de escala** na barra de controle para definir uma escala exata (ex.: 1:50). Para inserir uma escala que não está na lista, digite-a diretamente no campo de entrada na parte inferior do menu suspenso — aceita formato de proporção (`1:200`, `5:1`) ou um decimal puro (`0.005`), depois pressione **Enter**.
- Clique com o botão direito em uma viewport e use **Bloquear** para evitar alterações acidentais.

## Notas

- ViewportRectangle está disponível apenas quando uma aba de layout papel está ativa. Executá-lo no espaço modelo mostra uma mensagem de erro e encerra.
- Para copiar uma viewport existente, use [ViewportCopy](../viewport-copy/).
