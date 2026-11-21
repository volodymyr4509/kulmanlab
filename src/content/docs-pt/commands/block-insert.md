---
title: "Comando BlockInsert — Colocar um bloco entre os do desenho"
description: "O comando BlockInsert abre uma paleta com pré-visualizações dos blocos do desenho. Escolha um, defina escala e rotação, e clique ou digite um ponto para colocá-lo, uma vez ou repetidamente."
keywords: ["inserir bloco CAD", "paleta de blocos CAD", "block", "kulmanlab"]
group: blocks
order: 2
---


# Block Insert

O comando `InserirBloco` abre uma paleta com pré-visualizações de todos os blocos do desenho e coloca o que você escolher. Crie blocos com [Block Create](../block-create/) ou abra um arquivo DXF que os tenha.

## Colocar um bloco

1. Digite `InserirBloco` ou clique em **Inserir bloco** no painel **Blocos**. A paleta se acopla à esquerda com um bloco de pré-visualização por bloco, doze por página; as setas sob eles trocam de página.
2. Digite em **Pesquisar blocos** para filtrar os blocos pelo nome.
3. Defina **Escala** (deve ser maior que 0) e **Rotação** em graus. **Repetir posicionamento** vem ativado.
4. Clique no bloco desejado. Ele segue o cursor: clique para colocá-lo pelo ponto base, ou digite X,Y para uma posição exata. Com o cursor travado num ângulo, você pode digitar um comprimento.
5. Com **Repetir posicionamento** ativado, o bloco continua seguindo o cursor para a próxima cópia até você pressionar **Esc**. Desativado, o comando termina após uma cópia.

## Bom saber

- Para excluir um bloco, clique na lixeira do seu item e confirme. Um bloco com referências no desenho não pode ser excluído: o item mostra **Em uso, não pode ser excluído**.
- Um desenho sem blocos mostra **Este desenho não tem blocos** na paleta.
- **Esc** fecha a paleta quando nada está sendo colocado. Ela é um dos painéis acoplados, que aparecem um de cada vez à esquerda.

---

*Relacionado: [Block Create](../block-create/), [Explode](../explode/), [Import](../import/)*
