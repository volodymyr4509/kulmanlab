---
title: Comando ClipboardCopy — Copiar entidades para a área de transferência do sistema
description: O comando ClipboardCopy grava as entidades selecionadas na área de transferência do sistema como texto JSON, junto com as camadas e tipos de linha que elas referenciam, para colar em outro desenho ou em outra aba do navegador com ClipboardPaste.
keywords: [copiar área de transferência CAD, copiar entidades entre desenhos, copiar objetos CAD, Ctrl+C CAD, copiar entre abas, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

O comando `ClipboardCopy` grava as entidades selecionadas na sua **área de transferência do sistema** como texto JSON. Como usa a área de transferência real e não um buffer interno, a geometria copiada sobrevive fora do desenho: cole-a em outro arquivo, numa segunda aba do navegador ou numa janela que você abrir mais tarde com [ClipboardPaste](../clipboard-paste/).

É essa a diferença em relação a [Copy](../copy/): o Copy duplica entidades dentro do desenho atual num único gesto, enquanto o ClipboardCopy as deixa num lugar de onde podem ser recuperadas a partir de um desenho totalmente diferente.

## Duas formas de começar

**Pré-selecionar e copiar** — o caminho rápido:

1. Selecione uma ou mais entidades na área de desenho.
2. Pressione `Ctrl+C` (`Cmd+C` no macOS), ou digite `ClipboardCopy` no terminal.
3. As entidades são gravadas na área de transferência imediatamente e o comando encerra.

**Ativar e depois selecionar** — começar sem nada selecionado:

1. Pressione `Ctrl+C` ou digite `ClipboardCopy` com a seleção vazia.
2. O prompt mostra **pick objects to copy — Enter or Space to confirm**.
3. **Selecione os objetos** — clique para alternar entidades individuais, ou arraste para selecionar por área.
4. Pressione **Enter** ou **Space** para copiar a seleção e sair.

Pressionar **Enter** ou **Space** sem nada selecionado apenas encerra o comando, sem tocar na área de transferência.

## O que é copiado

O conteúdo da área de transferência carrega mais do que geometria pura, para que uma colagem em um desenho alheio continue certa:

| Parte | Finalidade |
|-------|------------|
| **Entidades** | A forma serializada completa de cada entidade selecionada |
| **Ponto de referência** | O canto inferior esquerdo dos limites combinados da seleção — o que o ClipboardPaste ancora ao cursor |
| **Camadas** | Apenas as camadas efetivamente referenciadas pelas entidades copiadas, por nome |
| **Tipos de linha** | Apenas os tipos de linha efetivamente referenciados pelas entidades copiadas, por nome |

Somente entradas de tabela *referenciadas* viajam com a cópia — não as tabelas inteiras de camadas e tipos de linha do desenho de origem. Padrões de hachura não são incluídos e nem precisam: a tabela de padrões de um desenho é o conjunto padrão embutido, e os arquivos `.pat` que você tenha enviado ficam num repositório por usuário já compartilhado entre abas, então uma hachura colada resolve o próprio padrão.

## Confirmação

Em caso de sucesso, o terminal informa quantas entidades foram gravadas:

```
3 entities copied to clipboard
```

Se o navegador recusar o acesso à área de transferência, o terminal mostra **Copy failed: clipboard access denied** e nada é gravado. É uma decisão de permissão do navegador, não um erro do desenho — veja [Permissões da área de transferência](#permissões-da-área-de-transferência) abaixo.

## Seleção durante o comando

| Método | Comportamento |
|--------|---------------|
| **Clique** | Alterna a entidade sob o cursor dentro/fora da seleção |
| **Arrastar para a direita** (estrita) | Adiciona entidades totalmente dentro da caixa |
| **Arrastar para a esquerda** (cruzamento) | Adiciona entidades que cruzam a borda da caixa |
| **Enter** / **Space** | Confirma a seleção e copia |

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Ctrl+C` / `Cmd+C` | Ativar ClipboardCopy |
| `Enter` / `Space` | Copiar a seleção atual, ou sair se nada estiver selecionado |
| `Escape` | Cancelar sem copiar |

## Permissões da área de transferência

Gravar na área de transferência do sistema exige permissão do navegador. Na prática, uma cópia disparada por uma tecla é concedida sem aviso nos navegadores de desktop atuais, mas uma página que perdeu o foco, ou um navegador com configurações restritivas, pode recusar. Se aparecer a mensagem de acesso negado, clique uma vez na área de desenho para dar foco à página e tente de novo.

Como o conteúdo é texto JSON comum, qualquer outra coisa que você copiar depois o substitui — uma linha de texto, uma URL. Copie de novo antes de colar se tiver usado a área de transferência para outra coisa nesse meio-tempo.

## Entidades suportadas

O ClipboardCopy funciona com todos os tipos de entidade. As entidades são serializadas com o mesmo mecanismo que a exportação nativa `.json` usa, então nada se perde no caminho.

## Veja também

- [ClipboardPaste](../clipboard-paste/) — ler a área de transferência de volta e posicionar as entidades
- [Copy](../copy/) — duplicar entidades dentro do desenho atual
- [Export Manager](../export-manager/) — salvar um desenho inteiro em DXF ou JSON
