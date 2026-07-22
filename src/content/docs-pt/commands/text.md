---
title: Comando Text — Colocar Etiquetas MTEXT no KulmanLab CAD
description: O comando Text coloca uma etiqueta de texto multi-linha com formatação avançada. Clique em uma posição, digite no editor popup e pressione Escape para confirmar. Duplo clique em qualquer etiqueta existente para reabrir o editor.
keywords: [CAD comando text, MTEXT, colocar etiqueta texto CAD, anotação texto CAD, negrito itálico CAD, texto multi-linha CAD, kulmanlab]
group: markup
order: 0
---

# Text

O comando `text` coloca uma etiqueta de texto multi-linha. Após clicar em uma posição no canvas, um editor popup abre em **rich** mode — você pode digitar conteúdo, aplicar negrito/itálico/tachado por caractere, alterar fontes e alturas, e inserir quebras de linha. Pressione **Escape** para confirmar e fechar o editor.

Veja a página [Editor de Texto](../../interface/text-editor/) para a referência completa do editor, incluindo uma comparação dos modos **rich** e **simple**.

## Colocando uma etiqueta de texto

1. Digite `text` no terminal ou clique no botão **Text** na barra de ferramentas.
2. **Clique na posição de ancoragem** no canvas. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. O **popup do editor de texto** abre acima da nova etiqueta. Digite o conteúdo.
4. Pressione **Escape** para confirmar a etiqueta e fechar o editor.

A altura padrão é **12 unidades de desenho**.

## Editando uma etiqueta existente

**Duplo clique** em qualquer etiqueta de texto no canvas para reabrir o editor para aquela etiqueta.

## Entrada de coordenadas para a âncora

Em vez de clicar, digite uma posição exata:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar a âncora e abrir o editor.

## Referência de teclado

**Fase de ancoragem**

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X |
| `,` | Bloqueia X e move para entrada Y |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada digitada |

**Fase do editor de texto** (veja [Editor de Texto](../../interface/text-editor/) para referência completa)

| Tecla | Ação |
|-------|------|
| Qualquer caractere imprimível | Insere no cursor |
| `Backspace` / `Delete` | Exclui o caractere ou seleção adjacente |
| `Enter` | Insere uma quebra de linha |
| `←` / `→` | Move o cursor |
| `Home` / `End` | Salta para o início / fim da linha |
| `Escape` | Confirma e fecha o editor |

## Edição com grips — reposicionamento

Uma etiqueta de texto selecionada expõe um grip no ponto de ancoragem:

| Grip | Posição | O que faz |
|------|---------|----------|
| **Âncora** | Inferior-esquerdo do texto | Arraste para reposicionar a etiqueta |

## Selecionando texto

| Método | Comportamento |
|--------|--------------|
| **Clique** | Seleciona se o clique cair dentro da caixa delimitadora rotacionada do texto |
| **Arrastar direita** (estrita) | Todos os quatro cantos da caixa delimitadora devem estar dentro da área de seleção |
| **Arrastar esquerda** (cruzada) | Qualquer sobreposição entre a caixa do texto e a área de seleção o seleciona |

## Comandos de edição suportados

| Comando | O que acontece com o texto |
|---------|--------------------------|
| [Move](../move/) | Move o ponto de ancoragem |
| [Copy](../copy/) | Cria uma etiqueta idêntica em uma nova posição |
| [Rotate](../rotate/) | Rotaciona a posição da âncora e adiciona o ângulo ao Grau de Rotação |
| [Mirror](../mirror/) | Reflete o ponto de ancoragem em relação ao eixo espelho (a string de texto não é invertida) |
| [Scale](../scale/) | Escala a posição da âncora e multiplica a altura pelo fator de escala |
| [Delete](../delete/) | Remove a etiqueta |

Texto não suporta **Offset**, **Trim** ou **Extend**.

## DXF — entidade MTEXT

Etiquetas de texto são armazenadas como entidades **MTEXT** no arquivo DXF. Negrito e itálico são codificados usando `\L`, `\K`, `\O` e trocas de fonte inline (`\f`). Altura por caractere é codificada como `\H`. Toda a formatação sobrevive a um round-trip DXF completo e é legível pelo LibreCAD, FreeCAD e outras aplicações compatíveis com DXF.
