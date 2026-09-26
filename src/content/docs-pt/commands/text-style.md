---
title: "Comando EstiloTexto — Gerenciar estilos de texto"
description: "Crie estilos de texto CAD com fonte, altura, negrito, itálico, espaçamento, alinhamento e moldura."
keywords: [estilo de texto CAD, fonte CAD, moldura de texto, alinhamento de texto, estilo DXF, kulmanlab]
group: style
order: 6
---

# TextStyle

O comando `EstiloTexto` abre o gerenciador de estilos. Crie estilos nomeados, edite seus padrões e escolha o estilo *atual*. Todo novo [Texto](../text/) copia as configurações atuais ao ser criado.

## Usar o gerenciador

Digite `EstiloTexto` ou clique em **Estilo de texto** no painel **Anotar**. ✓ marca o estilo atual; um clique duplo torna outro estilo atual.

| Campo | Função |
|---|---|
| Nome | Nome único; `Standard` não pode ser renomeado |
| Fonte / Altura | Fonte e altura fixa; `0` = definida por texto |
| Negrito / Itálico | Formatação independente |
| Espaçamento entre linhas | Distância entre linhas |
| Alinhamento horizontal | Esquerda, centro, direita ou justificado |
| Moldura | Moldura retangular para novos textos |

**Novo** duplica o estilo selecionado. **Excluir** não remove `Standard` nem o estilo atual. **Definir atual** afeta apenas textos futuros; textos existentes não mudam. Nomes vazios, duplicados ou inválidos para DXF bloqueiam **OK**. Estilos anotativos importados ficam ocultos, mas são preservados.

## Salvar e DXF

**OK** salva; **Fechar** ou `Escape` descarta. `↑` e `↓` percorrem a lista. Nome, arquivos de fonte, altura, negrito, itálico e sinalizador anotativo fazem parte do estilo DXF. Moldura, espaçamento e alinhamento são padrões por texto do KulmanLab e não campos da tabela STYLE.

Veja também [Text](../text/), [FontManager](../font-manager/) e [MatchProperties](../match-properties/).
