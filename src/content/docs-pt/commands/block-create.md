---
title: "Comando BlockCreate — Criar um bloco a partir de objetos"
description: "O comando BlockCreate cria um bloco nomeado a partir dos objetos selecionados, com o ponto base que você escolher, e os substitui por uma referência a ele. O bloco pode depois ser colocado várias vezes com BlockInsert."
keywords: ["criar bloco CAD", "bloco a partir de objetos CAD", "block", "kulmanlab"]
group: blocks
order: 1
---


# Block Create

O comando `CriarBloco` cria um **bloco**: um grupo de objetos nomeado, guardado uma só vez no desenho e colocado quantas vezes você quiser com [Block Insert](../block-insert/). Os objetos escolhidos viram o bloco e, no desenho, são substituídos por uma referência a ele, então nada muda de aparência.

## Criar um bloco

1. Selecione antes os objetos, se quiser, e digite `CriarBloco` ou clique em **Criar bloco** no painel **Blocos**. Abre-se uma janela com a seleção já incluída.
2. Digite um **Nome**. Ele não pode ser vazio, não pode conter nenhum de `< > / \ " : ; ? * | , =` nem acento grave, e não pode ser o nome de outro bloco.
3. Clique em **Selecionar objetos** para adicionar ou tirar objetos: a janela se oculta e você clica em objetos ou arrasta uma área. Pressione **Enter** ou **Space** para voltar à janela, onde **Objetos** mostra quantos há.
4. Defina o **Ponto base**, o ponto pelo qual o bloco é colocado: digite X e Y, ou clique em **Escolher ponto** e depois na tela (ou digite X,Y ali). Começa em 0,0.
5. Clique em **OK**. O bloco é guardado, os objetos dão lugar a uma referência a ele no ponto base, e o terminal registra o nome do bloco e quantos objetos ele contém.

## Bom saber

- **OK** fica desativado enquanto algo estiver errado, e a mensagem sob os campos diz o quê: um nome vazio ou inutilizável, um nome já em uso ou nenhum objeto.
- **Esc** durante a escolha de objetos ou do ponto base volta à janela com o bloco como estava. **Esc** na janela cancela o comando.
- O bloco é salvo com o desenho e gravado em DXF junto com suas referências.

---

*Relacionado: [Block Insert](../block-insert/), [Explode](../explode/), [Import](../import/)*
