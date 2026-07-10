---
sidebar_position: 5
title: Vector Pins — Encaixar em Linhas de Referência de Pontos Fixados no KulmanLab CAD
description: Os Vector Pins permitem fixar um ponto de encaixe pairando sobre ele por meio segundo, e depois seguir o cursor ao longo de linhas de referência horizontais e verticais tracejadas que passam pelo ponto fixado — alinhe geometria nova com pontos existentes sem linhas de construção.
keywords: [vector pins, rastreio de encaixe a objetos, linhas de referência, rastreio de alinhamento, rastreio de encaixe CAD, linhas de construção, kulmanlab]
---

# Vector Pins

Os **Vector Pins** são um auxílio de desenho que permite alinhar geometria nova com pontos existentes sem desenhar linhas de construção. Paire sobre um ponto de encaixe durante meio segundo para o *fixar* — o pin projeta então linhas de referência horizontais e verticais invisíveis, e o cursor encaixa nelas sempre que se aproxima. É o equivalente no KulmanLab CAD ao rastreio de encaixe a objetos das aplicações CAD de desktop.

A funcionalidade é controlada pelo botão **Pins** na barra de controlo (ao lado de Grid, Snap e ANGL). Está **ativa por predefinição**, e a definição persiste entre sessões.

## Fixar um ponto

1. Inicie um comando que peça um ponto — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/), etc.
2. Mova o cursor sobre um ponto de encaixe da geometria existente — um marcador de extremidade, ponto médio ou centro.
3. **Mantenha o cursor parado durante 500 ms.** O marcador transforma-se num **quadrado** preenchido na cor de destaque — o ponto está agora fixado.
4. Repita para fixar quantos pontos precisar. Cada pin continua a projetar as suas linhas de referência.

A fixação também funciona fora de um comando: pairar sobre uma **alça** de uma entidade selecionada fixa-a da mesma forma.

## Rastreio ao longo das linhas de referência

Cada ponto fixado projeta duas linhas de referência invisíveis — uma **horizontal** e uma **vertical** — através das suas coordenadas exatas. Ao mover o cursor:

- A menos de **12 px** da linha vertical de um pin, o cursor encaixa nela: uma linha tracejada na cor de destaque é desenhada através do pin por toda a vista, e um **marcador X** mostra a posição encaixada. A sua coordenada X é agora *exatamente* o X do pin.
- O mesmo se aplica à linha horizontal para a coordenada Y do pin.
- Perto de uma linha de cada orientação — mesmo de **dois pins diferentes** — o cursor encaixa na sua **interseção**, e ambas as linhas tracejadas são mostradas. Isto coloca um ponto exatamente em (X do pin A, Y do pin B).

```
                    ┆ (tracejada, linha vertical do pin ■)
                    ┆
   ■ pin A ┄┄┄┄┄┄┄┄ ✕ ← cursor encaixado na interseção:
                    ┆    X do pin B, Y do pin A
                    ┆
                    ■ pin B
```

As coordenadas encaixadas são tiradas diretamente do pin, pelo que o alinhamento é exato — sem arredondamentos nem deriva de vírgula flutuante.

## Prioridade de encaixe

Os encaixes de geometria normais — extremidade, ponto médio, centro e interseção — **têm prioridade** sobre as linhas de referência dos pins. Se o cursor estiver mais perto de um encaixe de ponto do que de uma linha de referência, o encaixe de ponto ganha. O rastreio de pins preenche os espaços entre a geometria; nunca bloqueia o encaixe na própria geometria.

## Combinação com o bloqueio de ângulo

Os vector pins funcionam em conjunto com o rastreio de ângulo (o botão **ANGL** na barra de controlo). Quando um comando bloqueou o cursor num raio de rastreio de ângulo:

- O cursor permanece restrito à direção bloqueada.
- O encaixe de pins passa a apontar às **interseções do raio bloqueado com as linhas de referência dos pins** (apenas à frente da origem do raio).

Isto responde a perguntas como *"onde é que a direção de 45° a partir do meu último ponto cruza a altura do centro daquele círculo?"* — bloqueie o ângulo, e o cursor prende no ponto de cruzamento. O encaixe no raio funciona em todos os comandos com bloqueio de ângulo: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader e ViewportCopy.

## Ciclo de vida dos pins

Os pins destinam-se à operação em curso, não a marcadores permanentes. Todos os pins são limpos quando:

| Evento | Motivo |
|--------|--------|
| Um **novo comando** é iniciado | Cada operação começa com um conjunto limpo de referências |
| **Escape** é pressionado | Comportamento padrão de cancelar tudo |
| O botão **Pins** é desligado | Desligar a funcionalidade remove o seu estado |
| Mudança entre **espaço modelo e espaço papel** | As coordenadas dos pins são específicas de um espaço |

Dentro de um único comando pode fixar, desenhar, fixar de novo e continuar — os pins sobrevivem a cada clique de um comando multiponto como o Polyline.

## Fluxo de trabalho típico

Desenhar uma linha que comece diretamente abaixo do centro de um círculo:

1. Digite `line` (ou clique no botão Line).
2. Paire sobre o **marcador de centro** do círculo durante meio segundo — torna-se um quadrado na cor de destaque.
3. Mova o cursor para baixo: perto da vertical do círculo, o cursor prende na linha de referência tracejada.
4. Clique — a linha começa exatamente na coordenada X do círculo.
5. Continue a linha normalmente; o pin fica disponível para os pontos seguintes.

## Notas

- A espera de 500 ms funciona em qualquer marcador de encaixe que o cursor consiga alcançar — incluindo pontos de encaixe que aparecem a meio do comando.
- Pairar sobre um ponto já fixado não faz nada; não existe desfixar por hover. Limpe os pins com **Escape** ou desligando **Pins**.
- A distância de encaixe das linhas de referência é a mesma dos encaixes de ponto normais, 12 píxeis de ecrã, pelo que a sensação é consistente em qualquer nível de zoom.
- Os pontos fixados são desenhados como quadrados na cor de destaque no lugar dos seus marcadores de encaixe normais.
