---
title: Comando ViewportCopy — Duplicar uma Viewport no KulmanLab CAD
description: O comando ViewportCopy duplica uma viewport selecionada para uma nova posição no mesmo layout, preservando as configurações de escala e vista do modelo. Suporta entrada de coordenadas exata, travamento de ângulo e entrada de distância digitada.
keywords: [viewport copy, duplicar viewport, copiar viewport layout, travamento ângulo viewport, coordenada exata viewport, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

O comando `ViewportCopy` copia uma viewport para uma nova posição, preservando sua escala e centro do modelo. Disponível apenas no espaço de layout.

## Copiando uma viewport

1. Mude para uma aba de layout papel.
2. Opcionalmente clique em uma viewport para pré-selecioná-la.
3. Digite `ViewportCopy` no terminal ou clique no botão **Viewport Copy** na barra de ferramentas.
4. Se nenhuma viewport foi pré-selecionada, **clique na viewport** a copiar.
5. **Clique no ponto base** — a referência para o deslocamento. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
6. **Clique no destino** — a viewport é posicionada no offset base→destino. Ou use entrada de coordenadas / travamento de ângulo.

Após posicionar, o comando permanece ativo — clique em outro destino para posicionar outra cópia da mesma viewport. Pressione **Enter**, **Espaço** ou **Escape** para terminar.

## Entrada de coordenadas

Nas etapas do ponto base e destino você pode digitar uma coordenada exata em vez de clicar:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para confirmar.

## Travamento de ângulo e distância exata

Após o ponto base ser definido, o comando encaixa nos eixos de 45° (0°, 45°, 90°, 135°, …) quando o cursor se alinha. Enquanto travado:

- A prévia encaixa no eixo.
- Digite uma distância e pressione **Enter** para posicionar a cópia exatamente nesse offset na direção travada.

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona dígito ao valor de distância |
| `-` | Distância negativa (inverte a direção; apenas primeiro caractere) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Posiciona a cópia na distância digitada |

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X, ou distância com ângulo travado |
| `,` | Bloqueia X e move para entrada Y |
| `Enter` | Confirma a coordenada ou distância digitada |
| `Enter` / `Espaço` | Termina (quando nenhuma entrada está em andamento) |
| `Escape` | Cancela e reinicia |

## Notas

- ViewportCopy está disponível apenas quando uma aba de layout papel está ativa.
- A viewport copiada herda a mesma escala, centro do modelo, estado de bloqueio e dimensões do original.
- Para criar uma nova viewport do zero, use [ViewportRectangle](../viewport-rectangle/).
