---
sidebar_position: 11
title: Comando Offset — Criar Cópias Paralelas a Distância Fixa no KulmanLab CAD
description: O comando Offset cria uma cópia paralela de uma Linha, Círculo, Arco, Elipse ou Polilinha a uma distância digitada. A distância é inserida uma vez e reutilizada para múltiplos offsets. Um clique no lado determina em qual direção a cópia aparece. Cinco tipos de entidade suportados.
keywords: [CAD comando offset, cópia paralela CAD, offset linha CAD, offset círculo CAD, offset polilinha CAD, offset concêntrico, kulmanlab]
---

# Offset

O comando `offset` cria uma cópia paralela de uma entidade a uma distância perpendicular fixa. Você digita a distância uma vez, depois clica nas entidades e escolhe um lado — o comando permanece pronto na mesma distância para que você possa deslocar múltiplos objetos em uma sessão.

Tipos de entidade suportados: **Linha, Círculo, Arco, Elipse, Polilinha** (incluindo Retângulos).

## Usando offset

1. Digite `offset` no terminal ou clique no botão **Offset** na barra de ferramentas.
2. **Digite a distância de offset** e pressione **Enter** ou **Espaço**.
3. **Clique em uma entidade** para deslocar — se a entidade não é um tipo suportado, uma mensagem de erro aparece e você pode clicar em uma entidade diferente.
4. **Mova o cursor** para o lado onde a cópia deve aparecer — uma prévia ao vivo segue.
5. **Clique** para posicionar a cópia em offset.

Após cada posicionamento o comando retorna à etapa 3 na **mesma distância**, pronto para o próximo offset. Pressione **Escape** para voltar à etapa de entrada de distância.

```
  Distância: 10

  ─────────────────    ← linha original
  ─────────────────    ← cópia em offset (10 unidades abaixo)
```

## Comportamento de offset por entidade

| Entidade | Como o offset é calculado |
|----------|--------------------------|
| **Linha** | Linha paralela deslocada perpendicularmente à direção original |
| **Círculo** | Círculo concêntrico; clic fora → raio maior, dentro → raio menor |
| **Arco** | Arco concêntrico em novo raio; mesma extensão angular preservada |
| **Elipse** | Ambos os semi-eixos aumentados ou diminuídos pela mesma distância |
| **Polilinha** | Cada segmento deslocado independentemente; segmentos de offset adjacentes são unidos nas esquinas |

Para **Círculo**, **Arco** e **Elipse**: se o offset interno reduziria qualquer raio ou semi-eixo a zero ou abaixo, o offset não é aplicado.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona dígito ao valor de distância |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` / `Espaço` | Confirma a distância digitada e avança para seleção de entidade |
| `Escape` | Reinicia para a etapa de entrada de distância |

## Nota sobre o fluxo de trabalho

A distância permanece definida até você pressionar **Escape**. Isso torna eficiente deslocar muitas entidades no mesmo espaçamento — digite a distância uma vez, depois clique e escolha o lado para cada entidade.

## Offset vs Copiar

| | Offset | Copiar |
|---|--------|--------|
| Deslocamento | Perpendicular à geometria da entidade | Vetor arbitrário (base → destino) |
| Entidades suportadas | Linha, Círculo, Arco, Elipse, Polilinha | Todos os tipos de entidade |
| Entrada de distância | Digitada antes de selecionar a entidade | Digitada ou clicada após selecionar |
| Ideal para | Linhas paralelas, círculos concêntricos, caminhos internos/externos | Posicionar duplicatas em posições arbitrárias |
