---
title: LayerManager — Gerencie Todas as Camadas em uma Única Tabela
description: O comando LayerManager abre uma tabela com todas as camadas do desenho, permitindo adicionar camadas, excluir as não utilizadas e editar no local o congelamento, o bloqueio, a plotagem, a cor, a espessura e o tipo de linha de cada uma.
keywords: [gerenciador de camadas, tabela de camadas CAD, gerenciar camadas CAD, adicionar camada CAD, excluir camada CAD, remover camada não utilizada, congelar bloquear plotar camada, gerenciamento de camadas kulmanlab]
group: layer
order: 1
---

# LayerManager

O comando `LayerManager` abre uma tabela listando todas as camadas do desenho, com as configurações de **Freeze**, **Lock**, **Plot**, **Cor**, **Espessura de linha** e **Tipo de linha** editáveis diretamente na linha. É o lugar central para adicionar camadas, excluir as não utilizadas e ajustar como as existentes se comportam — os demais comandos de camada ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) fazem cada um uma coisa específica sem abri-lo.

## Abrindo o Gerenciador de Camadas

- Digite `LayerManager` no terminal, **ou**
- Clique no botão **Layer Manager** no painel de camadas.

O diálogo abre como um painel flutuante; nada precisa estar selecionado antes.

## A tabela de camadas

| Coluna | O que controla |
|--------|------------------|
| Name | O nome da camada, exibido apenas para leitura na tabela (definido uma vez, na criação) |
| Freeze | Oculta as entidades da camada e as exclui da seleção até ser descongelada |
| Lock | Impede a edição de entidades na camada, sem ocultá-las |
| Plot | Se as entidades da camada são incluídas ao imprimir ou exportar para PDF |
| Color | A cor ACI da camada — clique na amostra para abrir o seletor de cores |
| Lineweight | A espessura de linha da camada — clique no chip para abrir o seletor de espessura |
| Linetype | O padrão de traços da camada — clique no chip para abrir o seletor de tipo de linha |
| ✕ | Exclui a camada quando nada a está usando — veja [Excluindo uma camada](#excluindo-uma-camada) |

Alternar Freeze, Lock ou Plot tem efeito imediato — não há uma etapa de salvamento separada. Entidades definidas como **ByLayer** para cor, espessura de linha ou tipo de linha (o padrão) adotam o que você define aqui; entidades com sua própria substituição explícita não são afetadas.

## Adicionando uma camada

1. Clique em **+ Add Layer** na parte inferior da tabela.
2. Digite um nome e pressione **Enter** para confirmar, ou **Escape** para cancelar.

Nomes de camada podem conter letras, números, espaços e `_`, `-`, `$`. Um nome vazio, já em uso, ou que contenha qualquer outro caractere é rejeitado com um erro em linha, e a linha permanece aberta para outra tentativa.

Novas camadas começam **descongeladas, desbloqueadas, imprimíveis**, com cor 7 (branco/preto), espessura de linha Default e tipo de linha Continuous — os mesmos padrões que [Import](../import/) atribui à camada `0` em um desenho em branco.

## Excluindo uma camada

Cada linha termina com um botão **✕** que remove a camada do desenho. A exclusão é imediata — não há etapa de confirmação — mas só é oferecida para camadas das quais nada depende:

| Situação | Estado do botão |
|----------|-----------------|
| A camada está vazia | Ativo — *Delete layer* |
| A camada está atribuída a pelo menos uma entidade | Desativado — *Cannot delete: assigned to at least one entity* |
| Camada `0` | Nenhum botão |

**"Em uso" abrange o desenho inteiro**, não apenas o que você está vendo. Uma entidade em um layout (espaço papel) conta exatamente como uma do espaço modelo, então uma camada pode parecer vazia na tela e ainda assim se recusar a ser excluída. Camadas congeladas não são diferentes: congelar oculta as entidades mas não desfaz a atribuição, de modo que uma camada congelada com entidades continua não excluível.

A camada `0` nunca pode ser excluída. É a camada de reserva que todo desenho tem garantida, então o botão nem chega a ser desenhado para ela, em vez de aparecer desativado.

### "…is now in use and can't be deleted"

De vez em quando o ✕ parece disponível, mas o clique é recusado com um aviso no topo do painel:

```
"WALLS" is now in use and can't be deleted
```

Não é contradição. Descobrir quais camadas estão em uso exige percorrer todas as entidades do desenho, então o resultado fica em cache e só é reconstruído quando a contagem de entidades muda — barato com centenas de entidades, não com centenas de milhares. Mover uma entidade existente para uma camada não altera essa contagem, então o estado desativado da linha pode ficar um instante desatualizado. O clique refaz a verificação do zero antes de excluir qualquer coisa, e é por isso que a recusa acontece no momento do clique em vez de a camada sumir enquanto algo ainda a referencia.

Feche o aviso pelo seu próprio **✕**. A camada fica intacta.

## O que você não pode fazer aqui

A tabela não indica qual é a camada *atual*; isso é definido pelo menu suspenso do painel de camadas ou por [LayerMakeCurrent](../layer-make-current/), não por esta caixa de diálogo. Os nomes das camadas também ficam fixos na criação: uma camada pode ser excluída e recriada, mas não renomeada.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` | Confirma o nome de uma nova camada (durante a adição) |
| `Escape` | Cancela a adição de uma camada, ou fecha o diálogo |

## Comandos relacionados

| Comando | O que faz |
|---------|-----------|
| [LayerMakeCurrent](../layer-make-current/) | Define a camada ativa para corresponder à camada da entidade clicada |
| [LayerMatch](../layer-match/) | Reatribui as entidades selecionadas à camada de uma entidade de origem |
| [LayerIsolate](../layer-isolate/) | Congela todas as camadas exceto as das entidades selecionadas |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Descongela todas as camadas de uma vez |
