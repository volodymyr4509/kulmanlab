---
title: Extend — Estender uma Entidade até o Limite Próximo
description: O comando Extend estica o ponto final mais próximo de uma Line, Arc, Ellipse ou Polyline aberta sob hover até a primeira interseção com outra entidade. Uma pré-visualização ao vivo mostra a entidade estendida antes de clicar.
keywords: [comando extend CAD, estender linha CAD, estender arco CAD, estender elipse CAD, estender polilinha CAD, esticar entidade até limite, pré-visualização hover extend, kulmanlab]
group: edit
order: 9
---

# Extend

O comando `Estender` estica o ponto final mais próximo de uma [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) ou Polyline aberta sob hover até a primeira interseção que formaria com outra entidade no desenho. Passe o cursor próximo ao ponto final que deseja estender — uma pré-visualização mostra a entidade estendida — depois clique para aplicar.

Apenas entidades com um ponto final real podem ser estendidas. Um [Circle](../circle/) e uma Ellipse completa (360°) são sempre formas fechadas sem ponto final, então nunca podem ser estendidas — o mesmo vale para uma Polyline fechada ou um Retângulo. Uma Ellipse parcial (um arco elíptico) e um Arc têm pontos finais e se estendem da mesma forma que uma Line.

## Estendendo uma entidade

1. Digite `Estender` no terminal ou clique no botão **Extend** na barra de ferramentas.
2. **Passe o cursor próximo a uma extremidade** da entidade que deseja estender — a pré-visualização a mostra estendida até o limite mais próximo nessa direção.
3. **Clique** para aplicar a extensão.

O comando permanece ativo após cada extensão, então você pode continuar passando o cursor e clicando para estender mais entidades. Pressione **Enter**, **Espaço** ou **Escape** para sair.

```
  Antes:                        Depois:

  ──────           |           ──────────────|
  (linha curta)    (limite)    (estendida ao limite)
```

## Como o ponto final é escolhido

O comando verifica de qual extremidade o cursor está mais próximo:

- **Line e Polyline aberta** — cursor mais próximo do ponto final estende o final para frente; cursor mais próximo do ponto inicial estende o início para trás.
- **Arc e Ellipse parcial** — cursor mais próximo de uma das extremidades angulares faz o arco crescer nessa direção, seguindo o mesmo centro e raio (ou a mesma forma da elipse), até alcançar o próximo limite.

Um raio — ou, para Arc e Ellipse, a própria circunferência ou curva subjacente da entidade — é projetado a partir da extremidade escolhida, e a **interseção mais próxima** com qualquer outra entidade (excluindo a própria entidade e os tipos ignorados) torna-se o novo ponto final.

Se nenhuma interseção for encontrada nessa direção, nenhuma pré-visualização aparece e clicar não faz nada.

## Exclusões de limite

Os seguintes tipos de entidade são ignorados como limites — uma entidade não se estende para encontrá-los:

- Text / Mtext
- Multileader
- Spline

Todos os outros tipos (Line, Arc, Circle, Ellipse, Polyline, Dimension) servem como limites válidos.

Se o primeiro ou último segmento de uma Polyline for ele próprio um segmento de arco (desenhado com a opção Arc), estendê-lo faz o arco crescer ao longo do seu próprio círculo — da mesma forma que estender um Arc autônomo — em vez de tratá-lo como um segmento reto.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Sair do modo extend |
| `Escape` | Sair do modo extend |

## Entidades suportadas

| Entidade | Pode ser estendida? |
|----------|-------------------|
| Line | Sim |
| Arc | Sim |
| Ellipse | Sim — apenas se já for um arco parcial; uma elipse completa não tem ponto final |
| Circle | Não — sempre uma forma fechada sem ponto final |
| Polyline (aberta) | Sim |
| Polyline (fechada) / Retângulo | Não — sempre uma forma fechada sem ponto final |
| Text, Spline, Dimension, Leader | Não |

## Extend vs Trim

| | Extend | Trim |
|---|--------|------|
| O que faz | Estica o ponto final de uma entidade até um limite | Remove um segmento de uma entidade |
| Gatilho | Cursor próximo ao ponto final a esticar | Cursor sobre o segmento a cortar |
| Resultado | O ponto final se move para fora | A entidade se divide ou encurta |
| Entidades suportadas | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
