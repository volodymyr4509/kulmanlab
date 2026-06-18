---
sidebar_position: 6
title: Comando Ellipse — Desenhar Elipses Rotacionadas por Centro e Dois Eixos no KulmanLab CAD
description: O comando Ellipse desenha uma elipse em três cliques — centro, ponto final do primeiro eixo (em qualquer direção), depois comprimento do segundo eixo. Os dois eixos são sempre perpendiculares. Cada semieixo tem seu próprio grip para redimensionamento independente após o posicionamento. Compatibilidade DXF completa como entidades ELLIPSE.
keywords: [comando ellipse CAD, desenhar elipse CAD, elipse rotacionada CAD, eixos elipse, entidade ELLIPSE DXF, edição grip elipse, kulmanlab]
---

# Ellipse

O comando `ellipse` desenha uma elipse usando três cliques: um ponto central, o ponto final do primeiro semieixo (maior) em qualquer ângulo, e o comprimento do segundo semieixo (menor). Os dois eixos são sempre perpendiculares entre si — a direção do segundo eixo é derivada automaticamente do primeiro.

## Desenhar uma elipse

1. Digite `ellipse` no terminal ou clique no botão **Ellipse** na barra de ferramentas.
2. **Clique no ponto central**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
3. **Clique no ponto final do primeiro eixo** — define tanto a direção quanto o comprimento do primeiro semieixo. A entrada de coordenadas também funciona aqui.
4. **Defina o comprimento do segundo eixo** — mova o cursor perpendicularmente ao primeiro eixo, depois clique ou digite um comprimento.

```
               ● ← ponto final do primeiro eixo (passo 3)
              /
  centro ●  /  ← primeiro eixo (qualquer ângulo)
            |
            ● ← cursor aqui define o comprimento do segundo eixo (passo 4)
```

A elipse é posicionada após o passo 4 e o comando termina.

## Entrada de eixo — clique, coordenada ou comprimento digitado

**Centro (passo 2):** clique ou digite `X,Y` para uma posição exata.

**Ponto final do primeiro eixo (passo 3):** clique, ou digite `X,Y` para uma coordenada exata. O bloqueio de ângulo também encaixa em incrementos de 45° — enquanto bloqueado, digite um comprimento e pressione **Enter** para posicionar o ponto final a essa distância exata.

**Segundo eixo (passo 4):** o comprimento digitado está sempre disponível — sem necessidade de bloqueio de ângulo. A direção já está fixada perpendicular ao primeiro eixo; a digitação define apenas o comprimento.

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta dígito ao comprimento do eixo (fase segundo eixo) |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Posiciona o ponto final do eixo no comprimento digitado |

## Entrada de coordenadas (centro e ponto final do primeiro eixo)

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para confirmar.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X (fases centro/primeiro eixo), ou comprimento do eixo com bloqueio de ângulo ativo |
| `,` | Bloqueia X e passa para entrada Y |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma coordenada ou comprimento digitado |
| `Escape` | Cancela e reinicia |

## Edição com grips — redimensionamento independente dos eixos

Uma elipse selecionada expõe cinco grips:

| Grip | Contagem | Função |
|------|----------|--------|
| **Centro** | 1 | Move toda a elipse; ambos os eixos inalterados |
| **Pontos finais do eixo maior** | 2 (extremidades opostas do eixo mais longo) | Arraste para redimensionar o comprimento do semieixo maior; o tamanho absoluto do semieixo menor permanece constante |
| **Pontos finais do eixo menor** | 2 (extremidades opostas do eixo mais curto) | Arraste para redimensionar o comprimento do semieixo menor; eixo maior inalterado |

Os grips dos eixos maior e menor são independentes — você pode remodelar a elipse sem executar o comando novamente.

## Selecionar elipses

| Método | Comportamento |
|--------|--------------|
| **Clique** | Seleciona se o clique estiver próximo do contorno da elipse |
| **Arrastar à direita** (estrito) | O retângulo delimitador alinhado ao eixo da elipse deve caber completamente dentro do retângulo de seleção |
| **Arrastar à esquerda** (cruzamento) | Qualquer parte do contorno da elipse que cruze o limite do retângulo de seleção a seleciona |

## Comandos de edição suportados

| Comando | Efeito na elipse |
|---------|----------------|
| [Move](./move) | Translada o centro; ambos os eixos inalterados |
| [Copy](./copy) | Cria uma elipse idêntica num novo centro |
| [Rotate](./rotate) | Roda a posição do centro e o vetor do eixo maior pelo mesmo ângulo |
| [Mirror](./mirror) | Reflete o centro e recalcula a direção do eixo maior em relação ao eixo especular |
| [Scale](./scale) | Escala a posição do centro e multiplica os comprimentos de ambos os semieixos pelo fator |
| [Offset](./offset) | Cria uma elipse concêntrica deslocada para fora ou para dentro por uma distância fixa |
| [Delete](./delete) | Remove a elipse |

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
| Centro X / Centro Y | Centro da elipse |
| Eixo maior X / Eixo maior Y | Vetor do centro ao ponto final do eixo maior (codifica tanto direção quanto comprimento) |
| Proporção dos eixos | Razão do semieixo menor para o semieixo maior (0 < proporção ≤ 1) |
| Ângulo inicial / Ângulo final | Ângulos paramétricos em graus; ambos 0°/360° para uma elipse completa |

## Ellipse vs Circle — quando usar cada um

| | Ellipse | Circle |
|---|---------|--------|
| Eixos | Dois semieixos independentes em qualquer ângulo | Um raio, simétrico |
| Rotação | Pode ser posicionada em qualquer ângulo | Sem rotação |
| Entrada digitada | Por comprimento de cada eixo | Apenas raio |
| Redimensionamento por grip | Maior e menor independentemente | Todos os quatro pontos cardinais igualmente |
| Ideal para | Vistas oblíquas, elementos ovais, furos em perspectiva | Elementos redondos simétricos |

## DXF — entidade ELLIPSE

As elipses são salvas como entidades `ELLIPSE` no arquivo DXF. O formato armazena o ponto central, o vetor completo do eixo maior (direção + comprimento) e a proporção dos eixos. Rotação, forma e todas as propriedades de estilo são mantidas sem perda. Um círculo **não** é armazenado como uma elipse degenerada — os dois tipos de entidade permanecem distintos no modelo DXF.
