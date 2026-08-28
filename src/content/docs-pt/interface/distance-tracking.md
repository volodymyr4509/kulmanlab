---
title: Rastreamento de distância — Digitar um comprimento exato a partir de um ponto fixado
description: A chave Dist permite que o pino vetorial mais recente sirva de âncora a partir da qual o rastreamento angular mede, para que você digite um comprimento exato e coloque um ponto a uma distância e ângulo precisos de um ponto existente — inclusive o primeiro ponto de uma forma.
keywords: [entrada de distância CAD, digitar distância exata CAD, chave Dist, rastreamento de distância a partir de pinos, rastreamento polar CAD, entrada direta de distância, kulmanlab]
group: interface
order: 3
---

# Rastreamento de distância

**O rastreamento de distância** permite colocar um ponto digitando um comprimento exato em vez de clicar. É controlado pela chave **Dist** na barra de controle, ao lado de [Pins](../vector-pins/) e ANGL, e vem **ativado por padrão**, com a configuração persistindo entre sessões.

O que ele acrescenta é restrito, mas útil: deixa o **pino vetorial mais recente** servir de âncora a partir da qual o rastreamento angular mede. Sem ele, um comando só consegue medir a partir de um ponto que ele mesmo já coletou — o que significa que o *primeiro* ponto de uma forma não tem nada a partir do que medir.

## As três chaves trabalham juntas

O rastreamento de distância não se sustenta sozinho. Outras duas chaves precisam estar no estado certo antes que você possa digitar um comprimento:

| Chave | Papel |
|-------|-------|
| **Pins** | Fornece o ponto de referência. Passe o cursor sobre um ponto de precisão por 500 ms para fixá-lo — veja [Vector Pins](../vector-pins/). |
| **ANGL** | Fornece o ângulo. O rastreamento de distância só fica disponível quando o cursor está travado em ângulo, então ANGL precisa estar em um passo (10°, 20°, 30°, 45°, 90°) e não em Off. |
| **Dist** | Permite usar o pino como âncora em vez de apenas o ponto do próprio comando. |

Com Pins e Dist ligados mas ANGL em **Off**, nada acontece: não há direção travada ao longo da qual medir um comprimento.

## Como Pins e Dist se acoplam

O rastreamento de distância não faz sentido com os pinos desligados, então as duas chaves andam juntas:

- **Ligar Pins** liga também **Dist**.
- **Desligar Pins** desliga também **Dist**.
- **Ligar Dist** liga **Pins** se ainda não estiver ligado.
- **Desligar Dist** deixa **Pins ligado**.

Assim, Dist nunca fica ativo enquanto Pins está inativo, mas você pode manter o rastreamento por pinos para alinhamento e desligar o rastreamento de distância — útil quando quer linhas de referência sem que o cursor trave em um pino quando a intenção era travar no seu próprio último ponto.

## Colocar um ponto a uma distância exata

1. Ligue **Pins** e **Dist**, e ponha **ANGL** em um passo angular.
2. Inicie um comando que peça um ponto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) e assim por diante.
3. **Fixe um ponto de referência**: passe o cursor sobre um ponto de precisão existente até o marcador virar um quadrado preenchido.
4. Afaste o cursor do pino aproximadamente no ângulo desejado. Quando ele chegar perto de um dos passos de ANGL, a direção **trava** — aparece um indicador de rastreamento a partir do pino.
5. **Digite o comprimento** e pressione **Enter** ou **Space**. O ponto é colocado exatamente a essa distância do pino, ao longo do ângulo travado.

O prompt do terminal avisa quando você pode digitar. Enquanto travado, ele mostra:

```
pick start point or enter length: [ ]
```

e o valor digitado aparece entre os colchetes.

## Por que o primeiro ponto importa

Este é o caso que de outro modo seria impossível. Suponha que você queira começar uma linha exatamente 250 unidades à direita de um canto existente:

1. Inicie [Line](../../commands/line/).
2. Fixe o canto existente.
3. Mova para a direita até a direção travar em 0°.
4. Digite `250` e pressione **Enter**.

A linha agora começa a 250 unidades do canto, sem geometria auxiliar e sem contas. Sem Dist, o comando Line ainda não coletou nenhum ponto, então não há nada *a partir do que* medir um comprimento digitado — você só poderia clicar por aproximação, ou traçar uma linha auxiliar e apagá-la depois.

Para o **segundo ponto em diante**, o comando já tem a própria âncora (o ponto anterior) e é ela que é usada primeiro. O pino é consultado como alternativa apenas quando a sua âncora não está travada, de modo que fixar algo não sequestra um travamento que você já tem.

## Digitar congela o travamento

Assim que você começa a digitar dígitos, a âncora para de mudar. Qualquer ponto que estivesse travado quando o primeiro dígito chegou continua sendo a âncora até você confirmar ou limpar o campo — mexer o mouse no meio da digitação não troca silenciosamente a medição para outro pino nem para o ponto do próprio comando.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta ao comprimento |
| `-` | Comprimento negativo — inverte o sentido ao longo do ângulo travado (apenas como primeiro caractere) |
| `Backspace` | Apaga o último caractere |
| `Enter` / `Space` | Coloca o ponto no comprimento digitado |
| `Escape` | Cancela o comando; o travamento e o valor digitado são limpos |

Digitar um comprimento é opcional. Com a direção travada você ainda pode clicar, e o ponto é projetado sobre o ângulo travado.

## Onde funciona

O rastreamento de distância está disponível em todo comando que pede para escolher pontos:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) e [ViewportCopy](../../commands/viewport-copy/).

## Veja também

- [Vector Pins](../vector-pins/) — fixar pontos e rastrear ao longo de suas linhas de referência
- [Grid & Snap](../grid-snap/) — os demais recursos de precisão da barra de controle
- [Distance](../../commands/distance/) — medir uma distância existente em vez de digitar uma nova
