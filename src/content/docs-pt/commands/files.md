---
title: Files — Painel de Arquivos Recentes no KulmanLab CAD
description: O comando Files abre o painel Arquivos Recentes — navegue por todos os desenhos salvos no seu navegador, restaure qualquer um deles para o canvas, ou exclua os que não precisar mais.
keywords: [arquivos recentes CAD, histórico de arquivos navegador CAD, restaurar desenho, reabrir DXF, armazenamento navegador CAD, KulmanLab files, desenhos salvos, IndexedDB CAD, gerenciar desenhos]
group: file
order: 3
---

# Files

O comando **Files** abre o painel **Arquivos Recentes** — uma lista de todos os desenhos que foram salvos no armazenamento local do seu navegador. Use-o para reabrir um desenho anterior ou remover arquivos que não precisa mais.

## Como abrir o painel Arquivos Recentes

Clique no botão **Files** na barra de ferramentas (ícone de histórico) no painel Arquivo no topo da tela. O painel se abre no lado esquerdo do canvas.

## Painel Arquivos Recentes

Cada entrada na lista mostra o nome do arquivo e dois botões de ação:

| Botão | Ação |
|-------|------|
| ✓ **Restaurar** | Carrega o desenho no canvas — substitui o conteúdo atual |
| ✕ **Excluir** | Remove o arquivo do armazenamento do navegador permanentemente |

Se nenhum arquivo foi salvo ainda, o painel mostra "Nenhum arquivo salvo".

## Como os arquivos são armazenados

O KulmanLab salva os desenhos no **IndexedDB** — um banco de dados persistente no navegador. Isso significa que:

- Os arquivos sobrevivem a recarregamentos de página e reinicializações do navegador.
- Os arquivos são armazenados **localmente no seu dispositivo** — não são carregados em nenhum servidor.
- Cada navegador e dispositivo tem seu próprio armazenamento independente. Um desenho salvo no Chrome num computador não está disponível no Firefox ou em outra máquina.
- Limpar os dados do site do navegador apagará todos os arquivos salvos.

## Carregamento automático de arquivos na inicialização

Quando você abre o KulmanLab CAD, o aplicativo carrega automaticamente o **arquivo modificado mais recentemente** do armazenamento. Você não precisa abri-lo manualmente no painel Files cada vez.

## Gerenciamento de armazenamento

Não há limite fixo para o número de desenhos que você pode salvar, mas o armazenamento do navegador é finito. Se notar avisos de armazenamento, exclua arquivos mais antigos no painel Files.

Para remover todos os desenhos salvos de uma vez, use o comando [Wipe Storage](../wipestorage/).

## Nomes de arquivo e versionamento

Cada arquivo tem um timestamp em seu nome (ex.: `meuplano_Mai22_14:30:00.dxf`). Esse timestamp é adicionado automaticamente quando você [importa](../import/) um arquivo, garantindo que reimportar o mesmo arquivo fonte crie uma nova entrada em vez de sobrescrever a versão anterior.

## Comandos relacionados

- [Import](../import/) — carregar um desenho do sistema de arquivos para o armazenamento do navegador
- [Export](../export/) — baixar um desenho para o sistema de arquivos
- [New File](../new-file/) — iniciar um desenho em branco (também salvo automaticamente)
- [Wipe Storage](../wipestorage/) — limpar todos os arquivos salvos do armazenamento do navegador
