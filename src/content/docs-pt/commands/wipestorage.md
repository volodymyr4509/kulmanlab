---
title: Comando WipeStorage — Limpar Todos os Dados do Navegador no KulmanLab CAD
description: O comando wipestorage exclui permanentemente todos os arquivos, camadas, tipos de linha e o histórico de undo salvos no navegador. Requer digitar YES para confirmar. Use ao redefinir um banco de dados local corrompido ou sobrecarregado.
keywords: [CAD wipe storage, limpar dados navegador CAD, redefinir aplicativo CAD, excluir arquivos locais CAD, kulmanlab wipestorage]
---

# WipeStorage

O comando `wipestorage` exclui permanentemente **todos os dados armazenados no navegador** para o KulmanLab CAD — todos os arquivos salvos, tabelas de camadas e tipos de linha, e o histórico de undo. A página recarrega automaticamente depois.

:::danger Irreversível
Esta ação não pode ser desfeita. Todos os arquivos armazenados no navegador são excluídos. Exporte os desenhos que deseja manter como arquivos `.json` ou `.dxf` antes de executar este comando.
:::

## Quando usar

- O armazenamento do navegador está corrompido e o aplicativo não consegue carregar ou salvar arquivos.
- Você quer redefinir completamente o aplicativo para um estado limpo.
- Você está trocando de navegador ou dispositivo e não precisa mais da cópia local.

## Como executar

1. Digite `wipestorage` no terminal e pressione **Enter**.
2. O terminal exibe: *Apagar todo o armazenamento local do navegador? Digite YES para confirmar*
3. Digite `YES` (qualquer capitalização) e pressione **Enter**.

O aplicativo exclui o banco de dados e recarrega a página. Se você digitar qualquer coisa diferente de `YES` e pressionar **Enter**, ou pressionar **Escape**, o comando é cancelado e nada é excluído.

## O que é excluído

| Dados | Excluído |
|-------|----------|
| Todos os arquivos salvos no navegador | Sim |
| Tabelas de camadas e tipos de linha para cada arquivo | Sim |
| Histórico de undo / redo para cada arquivo | Sim |

Apenas os dados armazenados localmente **neste navegador** são afetados. Os arquivos que você já exportou como `.json` ou `.dxf` não são tocados.
