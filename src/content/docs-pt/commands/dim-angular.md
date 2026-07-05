---
sidebar_position: 9
title: Dimension Angular — Medir Ângulos entre Linhas, Arcos e Círculos no KulmanLab CAD
description: O comando DimensionAngular posiciona uma cota angular em linhas, arcos ou círculos. Suporta modos de ângulo entre duas linhas, extensão de arco e setor de círculo.
keywords: [cota angular CAD, dimensão ângulo, medir ângulo entre linhas, DimensionAngular, cota arco, anotação ângulo, kulmanlab]
---

# Dimension Angular

O comando `DimensionAngular` posiciona uma **cota angular** em arco no desenho. Ele mede e etiqueta o ângulo entre duas linhas, a extensão de um arco, ou um setor de um círculo.

## Como ativar

Clique no botão **Dimension Angular** na barra de ferramentas no painel de Anotação, ou digite `DimensionAngular` no terminal.

## Três modos de entrada

O primeiro clique determina qual modo é usado:

### Duas linhas

1. **Clique na primeira linha.** A posição do cursor determina qual lado da linha é usado.
2. **Clique na segunda linha.** As duas linhas devem se cruzar (a interseção é calculada automaticamente; não precisa estar visível na tela).
3. **Clique para posicionar** o arco de cota. Mova o cursor para escolher o raio e qual setor angular é etiquetado — a anotação segue o cursor para qualquer lado do vértice onde você estiver.

Linhas paralelas não podem formar uma cota angular; o comando ignora o segundo clique se as linhas não se cruzarem.

### Arco

1. **Clique num arco.** A cota é criada imediatamente do ângulo inicial ao ângulo final do arco, usando o centro do arco como vértice.
2. **Clique para posicionar** o arco de cota no raio desejado.

### Círculo

1. **Clique num círculo.** O primeiro ponto angular encaixa no ponto mais próximo do círculo.
2. **Clique num segundo ponto** no círculo para definir o segundo ponto angular.
3. **Clique para posicionar** o arco de cota.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Escape` | Cancela e volta ao primeiro pick |

## Detalhes de comportamento

- O arco de cota é sempre desenhado no lado do vértice onde você o posiciona — mova o cursor pelo vértice para alternar para o ângulo suplementar.
- O ângulo medido é exibido em graus e atualiza ao vivo enquanto você move o cursor durante o posicionamento.
- A anotação resultante é uma entidade `DimensionAngular` completa armazenada na camada atual. As propriedades de aparência (tamanho da seta, altura do texto, comprimento da linha de extensão) podem ser ajustadas no painel Propriedades.
- As cotas angulares são incluídas na exportação JSON mas não são suportadas pelo exportador DXF.

## Editar a etiqueta — simple mode

**Duplo clique** numa cota angular posicionada para abrir o editor de texto em **simple** mode. O editor é pré-preenchido com o valor renderizado atual para que você possa posicionar o cursor e editá-lo diretamente.

| Feature | Comportamento |
|---------|--------------|
| Bold / Italic / Font / Height | Aplica-se à **etiqueta inteira** de uma vez |
| Formatação por caractere | Não suportada |
| `Enter` | Confirma o valor e fecha o editor |
| Multi-linha | Não suportado |

Consulte [Editor de Texto — simple mode](../../interface/text-editor/#simple-mode) para a referência completa.

## Comandos relacionados

- [Dimension Linear](../dim-linear/) — cota horizontal ou vertical
- [Dimension Aligned](../dim-aligned/) — cota alinhada a dois pontos
- [Dimension Radius](../dim-radius/) — cota de raio para arcos e círculos
- [Dimension Diameter](../dim-diameter/) — cota de diâmetro para círculos
