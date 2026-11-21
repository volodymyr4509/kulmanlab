---
title: "Comando ObjectSnapSettings — Configurações da barra de controle"
description: "O comando ObjectSnapSettings abre uma janela com todas as configurações da barra de controle — snap, tangente, rastreamento de ângulo, pinos, entrada digitada, laço e exibição —, cada uma explicada ao lado da lista com um pequeno desenho."
keywords: ["configurações de snap a objetos CAD", "snap tangente CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

O comando `ConfigAjusteObjeto` abre uma janela que reúne todas as configurações da barra de controle. Cada configuração é explicada ao lado da lista, com um pequeno desenho. Abra-a com o botão de engrenagem da barra de controle ou digite `ConfigAjusteObjeto`. Mudar uma configuração aqui equivale a alternar o botão dela na barra.

## As configurações

### Onde o cursor para

| Barra de controle | O que faz |
|---|---|
| `Snap` | O cursor salta para o ponto da grade mais próximo, então os pontos escolhidos caem em coordenadas redondas. Um ajuste a um objeto perto do cursor continua tendo prioridade. O passo da grade acompanha o zoom. |
| `TANG` | Enquanto uma linha é desenhada a partir de um ponto, leve o cursor para perto de onde ela tocaria um círculo, arco, elipse ou spline e ele se ajusta ali. Funciona em Linha, Polilinha e outros comandos, e ao arrastar a ponta de uma linha ou polilinha. |

### Guias ao desenhar

| Barra de controle | O que faz |
|---|---|
| `ANGL` | Quando o cursor se aproxima de um destes ângulos a partir do último ponto, ele trava nessa direção, mostrada como um raio tracejado. Enquanto travado, digite um comprimento e pressione Enter para colocar o ponto a essa distância. |
| `Pins` | Deixe o cursor um instante sobre um ponto de ajuste para fixá-lo. Um ponto fixado emite linhas-guia horizontais e verticais, e o cursor se ajusta a elas e aos seus cruzamentos. |
| `Dist` | O último ponto fixado serve como ponto de partida: quando o cursor trava em um ângulo a partir dele, digite um comprimento e pressione Enter para colocar o ponto a essa distância. Requer os pinos vetoriais. |

### Entrada e seleção

| Barra de controle | O que faz |
|---|---|
| `Rel` | Um ponto X,Y digitado é medido a partir do último ponto escolhido, como se começasse com @. Backspace remove o @ para um ponto nas coordenadas do desenho. Desligado, digite você mesmo o @ para um deslocamento. |
| `Lasso` | Pressione e arraste em um espaço vazio para traçar um laço livre ao redor do que quiser, em vez de um retângulo. O que o laço abrange é selecionado. |

### Exibição

| Barra de controle | O que faz |
|---|---|
| `Grid` | Mostra a grade de fundo. Seu espaçamento muda com o zoom. Desligá-la não impede o ajuste à grade. |
| `LWT` | Desenha as linhas com sua espessura, então as mais pesadas parecem mais grossas. Desligado, toda linha é desenhada fina, o que pode deixar um desenho denso mais legível. |

**ANGL** tem uma linha própria para o passo: escolha 10°, 20°, 30°, 45° ou 90°, ou escolha **Personalizado** e digite qualquer ângulo de 1° a 180°.

O snap tangente, a entrada relativa e o laço vêm desativados. **Restaurar padrões** devolve todas as configurações ao estado inicial.

---

*Relacionado: [Vector Pins](../../interface/vector-pins/), [Rastreamento de distância](../../interface/distance-tracking/), [Grade e Snap](../../interface/grid-snap/), [Entrada de coordenadas](../../interface/coordinate-entry/)*
