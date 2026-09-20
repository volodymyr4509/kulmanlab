---
title: File Manager — Grade de Miniaturas, Renomear e Excluir
description: O comando FileManager abre uma grade de miniaturas de cada desenho salvo — clique numa miniatura para abri-la, renomeie no local, ou exclua com confirmação.
keywords: [gerenciador de arquivos CAD, arquivos recentes CAD, renomear desenho, excluir desenho, grade de miniaturas CAD, restaurar desenho, reabrir DXF, armazenamento navegador CAD, arquivos KulmanLab, desenhos salvos, IndexedDB CAD, backup de desenho CAD]
group: file
order: 3
---

# File Manager

O comando `GerenciadorArquivos` abre uma **grade de miniaturas** de todos os desenhos que foram salvos no armazenamento local do seu navegador, ordenada por quando cada um foi salvo por último. Use-o para reabrir um desenho anterior, renomeá-lo, ou excluí-lo.

## Abrindo o File Manager

- Digite `GerenciadorArquivos` no terminal, **ou**
- Clique no botão **File Manager** na barra de ferramentas (ícone de histórico) no painel Arquivo no topo da tela.

O painel se abre no lado esquerdo do canvas, e se fecha automaticamente assim que você inicia outro comando ou [importa](../import/) um arquivo — assim, ele nunca permanece aberto sobre um desenho que ainda não está listado nele. Ele reabre com uma lista atualizada a cada vez.

## A grade de miniaturas

Cada desenho salvo é um cartão que mostra uma miniatura renderizada ao vivo, seu nome, e quando foi atualizado pela última vez. As miniaturas são geradas na hora, cada vez que o painel é aberto — nada é pré-renderizado ou armazenado — então um cartão mostra um ícone de espaço reservado por um instante enquanto sua miniatura é desenhada. O mesmo espaço reservado também aparece se a geração falhar, ou se o desenho realmente ainda não tiver nenhuma entidade.

| Ação | Como |
|--------|-----|
| **Abrir** um desenho | Clique na sua miniatura — substitui o conteúdo atual do canvas |
| **Renomear** | Clique no ícone de lápis, ou clique duas vezes no nome |
| **Excluir** | Clique no ícone de lixeira, depois confirme |

Se nenhum arquivo foi salvo ainda, o painel mostra "No files saved". Com mais arquivos do que cabem em uma tela, controles de **Page 1 of N** aparecem abaixo da grade.

O cartão do arquivo que está aberto no editor no momento é marcado com um anel de cor de destaque, e não tem **botão de exclusão** — excluir o arquivo aberto apagaria seus dados armazenados enquanto o canvas continuasse mostrando-o, e a próxima edição simplesmente o salvaria de volta. Renomeá-lo continua disponível.

## Excluindo um arquivo

Clicar no ícone de lixeira não exclui imediatamente — isso ativa uma sobreposição de confirmação naquele cartão ("Delete this file?" com os botões **Delete** / **Cancel**), já que a exclusão é permanente e não pode ser desfeita. Clicar em **Cancel**, clicar no ícone de lixeira de outro cartão, ou clicar em qualquer outro lugar do cartão — todos cancelam a confirmação pendente sem excluir nada.

## Renomeando um arquivo

Clique no ícone de lápis (ou clique duas vezes no nome do arquivo) para editá-lo no local, depois pressione **Enter** para confirmar ou **Escape** para cancelar. Uma renomeação é rejeitada se o novo nome estiver:

- vazio, ou tiver mais de 100 caracteres,
- já em uso por outro arquivo salvo (sem diferenciar maiúsculas/minúsculas),
- terminando com um ponto, ou
- for um nome de dispositivo reservado do Windows como `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, ou `LPT1`–`LPT9`.

Caracteres inválidos em um nome de arquivo (`\ / : * ? " < > |`) são removidos automaticamente enquanto você digita. Renomear muda apenas o rótulo — não afeta a posição do desenho na grade, já que ela é ordenada pelo horário do último salvamento, não pelo nome.

## Faça backup do seu trabalho — o armazenamento do navegador não é permanente

O KulmanLab salva desenhos no **IndexedDB**, um banco de dados embutido no seu navegador:

- Os arquivos são armazenados **apenas localmente no seu dispositivo** — nada é enviado a um servidor.
- Cada navegador e dispositivo tem seu próprio armazenamento independente. Um desenho salvo no Chrome em um computador não aparecerá no Firefox, nem em outro dispositivo.
- Este armazenamento **pode ser apagado sem aviso** — ao limpar os dados do site ou o histórico de navegação, por falta de espaço em disco, ao usar uma janela privada/anônima, ao reinstalar o navegador ou o sistema operacional, ou ao trocar de dispositivo. Nenhuma dessas situações lhe dá a chance de recuperar o que estava lá.

**A única forma confiável de manter um desenho seguro é [exportá-lo](../export-manager/) para o seu próprio armazenamento.** Use `.json` (o formato nativo do KulmanLab) quando possível — ele preserva cada entidade exatamente; use `.dxf` quando precisar de compatibilidade com outras ferramentas CAD. Faça isso para qualquer coisa cuja perda o deixaria chateado, e antes de limpar os dados do navegador, trocar de navegador ou dispositivo, ou guardar a máquina por um tempo.

## Carregamento automático de arquivo na inicialização

Quando você abre o KulmanLab CAD, o aplicativo carrega automaticamente o **arquivo modificado mais recentemente** do armazenamento. Você não precisa abri-lo manualmente pelo File Manager toda vez.

## Gerenciando armazenamento

Não há limite fixo para o número de desenhos que você pode salvar, mas o armazenamento do navegador é finito. Se notar avisos de armazenamento, exclua arquivos mais antigos pelo File Manager — ou melhor, exporte-os primeiro para não perder nada.

Para remover todos os desenhos salvos de uma vez, use o comando [WipeStorage](../wipestorage/).

## Nomes de arquivo

Arquivos novos e importados recebem um nome simples — nenhum timestamp é incorporado. Se esse nome já estiver em uso, um sufixo estilo Finder/Explorer é adicionado automaticamente (`plan (2)`, `plan (3)`, …) para que nada seja sobrescrito. Você sempre pode dar um nome mais claro a um arquivo depois, usando [renomear](#renomeando-um-arquivo).

## Comandos relacionados

- [Import](../import/) — carregar um desenho do seu sistema de arquivos para o armazenamento do navegador
- [Export Manager](../export-manager/) — baixar um desenho para o seu sistema de arquivos
- [New File](../new-file/) — iniciar um desenho em branco (também salvo automaticamente)
- [WipeStorage](../wipestorage/) — limpar todos os arquivos salvos do armazenamento do navegador
