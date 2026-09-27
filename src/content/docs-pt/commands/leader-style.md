---
title: Comando EstiloGuia — Gerenciar estilos de linha de chamada
description: Crie estilos de linha de chamada CAD com ponta, fixação, afastamento, rotação, fonte, altura e moldura.
keywords: [estilo de linha de chamada CAD, estilo multileader, MLEADERSTYLE, ponta de seta CAD, fixação do texto, estilo DXF, kulmanlab]
group: style
order: 7
---

# LeaderStyle

O comando `EstiloGuia` abre o gerenciador de estilos de linha de chamada. Cada nova [Chamada](../leader/) copia as configurações do estilo *atual* ao ser criada.

## Editar um estilo

Digite `EstiloGuia` ou clique em **Estilo de linha de chamada** no painel de anotação. ✓ marca o estilo atual; o lápis ao lado do nome permite renomeá-lo. A visualização é atualizada imediatamente com o mesmo renderizador do desenho.

| Campo | Função |
|---|---|
| Fixação do texto | Topo, Meio, Base ou Sublinhado |
| Ponta / Tamanho da seta | Símbolo e tamanho na extremidade de cada braço |
| Afastamento do patamar | Espaço entre o patamar e o texto |
| Rotação do texto | Ângulo do rótulo em graus |
| Estilo de texto | Copia uma vez fonte, altura, negrito e itálico de um [TextStyle](../text-style/) |
| Fonte / Altura do texto | Tipo e altura do texto do rótulo |
| Negrito / Itálico | Formatação independente |
| Moldura do texto | Moldura retangular ao redor do rótulo |

**Novo** duplica o estilo selecionado. `Standard` não pode ser renomeado nem excluído; o estilo atual também não pode ser excluído. **Definir atual** afeta apenas chamadas criadas depois — as existentes não mudam. Nomes vazios, duplicados ou inválidos para DXF bloqueiam **OK**. Estilos anotativos importados ficam ocultos, mas são preservados.

## Salvar e DXF

**OK** aplica todas as alterações; **Fechar** ou `Escape` as descarta. O KulmanLab lê e grava registros `MLEADERSTYLE`. Nome, ponta e tamanho da seta, afastamento, altura, fixação, moldura e sinalizador anotativo são salvos como campos do estilo. Rotação, fonte, negrito e itálico são padrões do KulmanLab copiados para a chamada quando ela é criada.

Veja também [Leader](../leader/), [LeaderAdd](../leader-add/) e [LeaderRemove](../leader-remove/).
