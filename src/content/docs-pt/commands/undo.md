---
title: Comando Undo — Voltar no Histórico do Desenho no KulmanLab CAD
description: O comando Undo reverte a última ação de desenho uma etapa de cada vez. Até 20 etapas são armazenadas por arquivo e persistidas no navegador entre recarregamentos de página. Realizar uma nova ação após desfazer limpa a pilha de redo.
keywords: [CAD comando undo, histórico undo CAD, reverter ação CAD, etapas undo CAD, undo persistente navegador, kulmanlab]
group: edit
order: 13
---

# Undo

O comando `undo` reverte a última alteração no desenho — uma etapa por invocação. Cada adição, exclusão ou edição de entidades é registrada como uma entrada de histórico separada. Undo volta por essas entradas em ordem inversa.

## Como executar undo

- Digite `undo` no terminal, ou
- Clique no botão **Undo** na barra de ferramentas.

Cada invocação reverte uma ação registrada. Invoque repetidamente para voltar mais longe.

## Comportamento do histórico

| Detalhe | Valor |
|---------|-------|
| Etapas por arquivo | Até **20** |
| Armazenamento | Navegador (IndexedDB / localStorage), por nome de arquivo |
| Sobrevive ao recarregamento de página | Sim — o histórico é restaurado quando você reabre o arquivo |
| Nova ação após undo | Apaga todas as entradas de redo à frente da posição atual |
| Entrada mais antiga quando cheio | Descartada para dar espaço à alteração mais recente |

Cada mutação de entidade é registrada: desenhar novas entidades, excluir entidades, editar endpoints com grips, aplicar Move, Rotate, Scale, Mirror, Trim, Extend e Offset criam entradas de histórico.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Direção | Avança **para trás** pelo histórico | Avança **para frente** pelas entradas desfeitas |
| Disponível quando | Existe pelo menos uma ação registrada | Pelo menos um Undo foi realizado e nenhuma nova ação foi feita |
| Apagado por | Nada — o histórico acumula até o limite de 20 etapas | Qualquer nova ação de desenho |

Use [Redo](../redo/) para reaplicar uma ação desfeita. Os botões da barra de ferramentas ficam acinzentados quando a direção respectiva não está disponível.
