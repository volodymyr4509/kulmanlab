---
sidebar_position: 4
title: Comando Circle — Desenhar Círculos por Centro e Raio no KulmanLab CAD
description: O comando Circle posiciona um círculo clicando num ponto central e depois clicando ou digitando o raio. Quatro grips cardinais permitem redimensionar o raio arrastando sem precisar executar o comando novamente. Compatibilidade DXF completa como entidades CIRCLE.
keywords: [comando circle CAD, desenhar círculo CAD, entrada raio círculo, redimensionar círculo grip, entidade CIRCLE DXF, kulmanlab]
---

# Circle

O comando `circle` desenha um círculo definido por um ponto central e um raio. Após o centro ser clicado você pode definir o raio clicando num segundo ponto no canvas ou digitando um número exato — ambas as opções estão disponíveis simultaneamente.

## Desenhar um círculo

1. Digite `circle` no terminal ou clique no botão **Circle** na barra de ferramentas.
2. **Clique no ponto central**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. Defina o raio — escolha entre:
   - **Clique em qualquer ponto** no canvas — a distância do centro torna-se o raio, ou
   - **Digite o raio** e pressione **Enter** para um valor exato.

O círculo é posicionado imediatamente e o comando termina.

```
  centro ●
          \  pré-visualização da linha de raio
           \
            ● ← clique aqui, ou digite um número
```

Na fase do raio, a pré-visualização ao vivo mostra o círculo na distância atual do cursor e também desenha uma linha de raio do centro ao ponto atual.

## Entrada de coordenada para o centro

Em vez de clicar, você pode digitar a posição do centro:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para posicionar o centro e avançar para a entrada do raio.

## Entrada de raio digitado

Após o centro ser posicionado, digitar constrói imediatamente um valor de raio:

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta dígito ao valor do raio |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Posiciona o círculo no raio digitado |

O valor acumulado é mostrado no prompt do terminal (ex.: `enter radius of circle: 25`). A pré-visualização atualiza para mostrar o raio digitado enquanto o cursor controla a direção do marcador da linha de raio.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X (fase centro), ou dígito de raio (fase raio) |
| `,` | Bloqueia X e passa para entrada Y (fase centro) |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma coordenada ou raio digitado |
| `Escape` | Cancela e reinicia |

## Edição com grips — redimensionamento do raio

Um círculo selecionado expõe cinco grips:

| Grip | Posição | Função |
|------|---------|--------|
| **Centro** | Ponto central | Move o círculo inteiro; raio inalterado |
| **Esquerda** | Ponto mais à esquerda (centro − raio) | Arraste para definir novo raio = distância ao centro |
| **Direita** | Ponto mais à direita (centro + raio) | Arraste para definir novo raio = distância ao centro |
| **Cima** | Ponto mais acima | Arraste para definir novo raio = distância ao centro |
| **Baixo** | Ponto mais abaixo | Arraste para definir novo raio = distância ao centro |

Todos os quatro grips cardinais se comportam de forma idêntica — o novo raio é igual à distância do centro à posição de arraste. O centro permanece fixo.

## Selecionar círculos

| Método | Comportamento |
|--------|--------------|
| **Clique** | Seleciona se o clique estiver próximo da circunferência |
| **Arrastar à direita** (estrito) | O retângulo delimitador completo (centro ± raio) deve estar dentro do retângulo |
| **Arrastar à esquerda** (cruzamento) | Qualquer parte da circunferência que cruze ou toque o limite do retângulo seleciona o círculo |

## Comandos de edição suportados

| Comando | Efeito no círculo |
|---------|-----------------|
| [Move](../move/) | Translada o centro; raio inalterado |
| [Copy](../copy/) | Cria um círculo idêntico num novo centro |
| [Rotate](../rotate/) | Roda o centro em torno do ponto base; raio inalterado |
| [Mirror](../mirror/) | Reflete o centro em relação ao eixo especular; raio inalterado |
| [Scale](../scale/) | Escala a posição do centro e multiplica o raio pelo fator de escala |
| [Offset](../offset/) | Cria um círculo concêntrico a raio maior ou menor |
| [Delete](../delete/) | Remove o círculo |

## Propriedades

**Gerais**

| Propriedade | Padrão | Significado |
|-------------|--------|-------------|
| Cor | 256 (ByLayer) | Índice de cor ACI |
| Camada | `0` | Atribuição de camada |
| Tipo de linha | ByLayer | Padrão de tipo de linha com nome |
| Escala do tipo de linha | 1 | Fator de escala no padrão de tipo de linha |
| Espessura | 0 | Espessura de extrusão |

**Geometria**

| Propriedade | Significado |
|-------------|-------------|
| Centro X / Centro Y | Coordenadas do ponto central |
| Raio | Raio do círculo em unidades de desenho |

## Circle vs Arc — quando usar cada um

| | Circle | Arc |
|---|--------|-----|
| Extensão | 360° completo | Parcial — definido por ângulo inicial e final |
| Como desenhar | Centro + raio | Três pontos na curva |
| Entrada digitada | Valor do raio | Nenhuma — somente clique |
| Grip de redimensionamento | 4 pontos cardinais | Pontos de início e fim (ângulo + raio) |
| Cotagem | Raio: [Dim Radius](../dim-radius/) · Diâmetro: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Ideal para | Furos completos, círculos de parafusos, elementos redondos | Chanfros, curvas parciais, percursos curvos |

## DXF — entidade CIRCLE

Os círculos são salvos como entidades `CIRCLE` no arquivo DXF. Coordenadas do centro, raio, cor, camada, tipo de linha, escala do tipo de linha e espessura são todos mantidos sem perda. Qualquer aplicação compatível com DXF os lê como círculos padrão.
