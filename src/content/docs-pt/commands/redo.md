---
title: Comando Redo — Reaplicar Ações Desfeitas no KulmanLab CAD
description: O comando Redo reaaplica a última ação revertida por Undo, avançando pela pilha de histórico. Redo só está disponível após um Undo e é apagado no momento em que qualquer nova ação de desenho é realizada.
keywords: [CAD comando redo, histórico redo CAD, reaplicar ação CAD, undo redo CAD, redo persistente navegador, kulmanlab]
group: edit
order: 14
---

# Redo

O comando `redo` avança pelo histórico de desfazer, reaplicando ações revertidas por [Undo](../undo/). Redo só está disponível quando você voltou com Undo e ainda não fez uma nova alteração.

## Como executar redo

- Digite `redo` no terminal, ou
- Clique no botão **Redo** na barra de ferramentas.

Cada invocação reaaplica uma ação previamente desfeita. Invoque repetidamente para avançar por todas as entradas de redo disponíveis.

## Comportamento da pilha de redo

| Detalhe | Comportamento |
|---------|--------------|
| Disponível após | Um ou mais passos [Undo](../undo/) |
| Apagado por | **Qualquer nova ação de desenho** — adicionar, editar ou excluir uma entidade |
| Armazenamento | Navegador, por arquivo — sobrevive a recarregamentos de página (desde que nenhuma nova ação tenha sido feita antes do recarregamento) |
| Profundidade máxima | Até 20 entradas (mesmo pool que Undo) |

Uma vez que uma nova entidade é desenhada, excluída ou modificada, a pilha de redo é apagada e essas entradas não podem ser recuperadas. Apenas ações desfeitas que não foram substituídas por novo trabalho podem ser refeitas.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Direção | Avança **para frente** pelas entradas desfeitas | Avança **para trás** pelo histórico |
| Disponível quando | Após pelo menos um Undo, sem nova ação realizada | Existe pelo menos uma ação registrada |
| Apagado por | Qualquer nova ação de desenho | Nada |

O botão Redo na barra de ferramentas fica acinzentado quando não há entradas para refazer. Use [Undo](../undo/) primeiro para criar entradas de redo.
