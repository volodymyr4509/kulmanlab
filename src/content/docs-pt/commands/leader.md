---
title: Comando Leader — Desenhar Anotações Multileader com Seta e Texto
description: "O comando Leader desenha uma anotação multileader em quatro etapas: ponta da seta, cotovelo dogleg, posição do texto e etiqueta digitada. A direção do texto ajusta automaticamente com base na posição do dogleg. Somente importação em DXF — leaders não são gravados ao salvar."
keywords: [CAD comando leader, anotação multileader, leader CAD, anotação com seta, dogleg leader, direção texto CAD, kulmanlab]
group: markup
order: 1
---

# Leader

O comando `leader` desenha uma anotação multileader em quatro etapas: uma seta que toca um elemento, uma linha guia que se dobra no dogleg, uma âncora de texto e uma etiqueta digitada. De todos os comandos de anotação, Leader é o único que inclui uma fase interativa de entrada de texto com prévia do cursor piscante.

## Anatomia de um multileader

```
  ◄── ponta da seta  (etapa 2 — toca o elemento)
      \
       \  linha guia
        \
         ●──── dogleg (etapa 3) ──── âncora do texto (etapa 4)
                                     Texto da etiqueta  (etapa 5)
```

- **Ponta da seta** — a extremidade pontiaguda posicionada no elemento a anotar.
- **Dogleg** — o cotovelo onde a linha guia se dobra em direção ao texto.
- **Âncora do texto** — onde a etiqueta é posicionada. O texto alinha à esquerda ou direita automaticamente.

## Desenhando um leader

1. Digite `leader` no terminal ou clique no botão **Leader** na barra de ferramentas.
2. **Clique na ponta da seta**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no dogleg** — a dobra no leader. O ângulo trava em incrementos de 45°; digite um comprimento e pressione **Enter** para posicionamento preciso. Ou digite `X,Y` para uma coordenada absoluta.
4. **Clique na posição do texto** — onde a etiqueta é ancorada. As mesmas opções se aplicam: clique, travamento de ângulo + comprimento, ou `X,Y`.
5. **Digite o texto da etiqueta** — a prévia no canvas atualiza em tempo real com um cursor piscante. Pressione **Enter** para posicionar.

## Entrada de coordenadas (todas as fases de posicionamento de ponto)

Em qualquer etapa de seleção de ponto (ponta, dogleg, posição do texto) você pode digitar uma coordenada exata em vez de clicar:

1. Digite o valor X (dígitos, `.` ou `-`).
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]` confirmando que X está bloqueado.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o ponto.

## Travamento de ângulo (etapas 3 e 4)

Após cada ponto posicionado, o comando encaixa nos eixos de 45° quando o cursor está suficientemente longe. Enquanto travado:
- A prévia encaixa no eixo.
- Digite um comprimento e pressione **Enter** para posicionar o próximo ponto nessa distância exata.

O travamento de ângulo e a entrada de coordenadas são mutuamente exclusivos — uma vez que você digita um dígito sem uma `,` anterior, o comando o interpreta como distância (o travamento de ângulo deve estar ativo). Para inserir uma coordenada absoluta, comece com o número X seguido de uma vírgula.

## Edição da etiqueta de texto

Enquanto digita a etiqueta na etapa 5, você pode navegar e editar o texto antes de posicioná-lo:

| Tecla | Ação |
|-------|------|
| Qualquer caractere imprimível | Insere na posição do cursor |
| `←` / `→` | Move o cursor para esquerda ou direita |
| `Backspace` | Exclui o caractere à esquerda do cursor |
| `Delete` | Exclui o caractere à direita do cursor |
| `Enter` | Posiciona o leader |

## Direção automática do texto

O alinhamento do texto ajusta com base na posição do cursor em relação ao dogleg:

| Posição do cursor | Direção do texto |
|------------------|-----------------|
| À **direita** do dogleg | Da esquerda para direita a partir da âncora do texto |
| À **esquerda** do dogleg | Da direita para esquerda (ancorado no lado direito) |

Nenhum ajuste manual necessário — mova o cursor para o lado onde deseja a etiqueta e ela alinha corretamente.

## Referência de teclado

**Fases de posicionamento de ponto (ponta, dogleg, posição do texto)**

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a digitar a coordenada X (depois `,` para bloquear X e digitar Y) |
| `,` | Confirma X e move para entrada Y |
| `0`–`9`, `.`, `-` | Acumula distância quando travado por ângulo |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada ou distância digitada |

**Fase de entrada de texto**

| Tecla | Ação |
|-------|------|
| Caractere imprimível | Insere no cursor |
| `←` / `→` | Move o cursor |
| `Backspace` | Exclui à esquerda |
| `Delete` | Exclui à direita |
| `Enter` | Posiciona o leader |

| Tecla | Ação |
|-------|------|
| `Escape` | Cancela e reinicia para a etapa 2 |

## Editar um leader existente

**Duplo clique** num multileader posicionado para reabrir o editor de texto em **rich** mode. Em rich mode você pode aplicar negrito, itálico e substituições de fonte ou altura por caractere, e inserir quebras de linha com `Enter`. Pressione **Escape** para confirmar e fechar.

Consulte [Editor de Texto — rich mode](../../interface/text-editor/#rich-mode) para a referência completa.

## Adicionando e removendo braços

- Para adicionar um braço com seta extra a um leader existente: [Leader+](../leader-add/)
- Para remover um braço de um leader com dois ou mais: [Leader−](../leader-remove/)

## DXF — somente importação

**Leaders são somente importação.** Entidades `MLEADER` de arquivos DXF são lidas e exibidas corretamente, mas leaders desenhados no editor **não são gravados** ao salvar um arquivo DXF. Use leaders para anotação visual; evite depender deles para fluxos de trabalho de ida e volta.
