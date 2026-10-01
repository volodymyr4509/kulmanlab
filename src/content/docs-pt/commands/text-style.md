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
| Renomear | Use o lápis ao lado do nome para editá-lo na lista; `Standard` não pode ser renomeado. |
| Fonte / Altura | Fonte e altura positiva obrigatória. Valores zero ou negativos passam a `1`; o gerenciador aceita apenas valores maiores que `0`. |
| Negrito / Itálico | Formatação independente |
| Espaçamento entre linhas | Distância entre linhas |
| Alinhamento horizontal | Esquerda, centro, direita ou justificado |
| Moldura | Moldura retangular para novos textos |

A visualização usa o mesmo renderizador do desenho e mostra duas linhas. Fonte, altura, negrito, itálico, moldura, espaçamento e alinhamento mudam imediatamente; o indicador mostra o zoom de ajuste. Novos estilos usam alinhamento **à esquerda**.

**Novo** duplica o estilo selecionado. **Excluir** não remove `Standard` nem o estilo atual. **Definir atual** afeta apenas textos futuros; textos existentes não mudam. Nomes vazios, duplicados ou inválidos para DXF bloqueiam **OK**. Estilos anotativos importados ficam ocultos, mas são preservados.

## Salvar e DXF

Nome, arquivos de fonte, negrito, itálico e sinalizador anotativo são preservados nos estilos de texto DXF. O KulmanLab grava o grupo `40` de STYLE como `0` (altura variável) e a última altura usada no grupo `42`; isso impede uma altura fixa de STYLE de substituir a altura própria de um estilo de cota. Moldura, espaçamento entre linhas e alinhamento horizontal são padrões por texto do KulmanLab, não campos da tabela STYLE do DXF.
