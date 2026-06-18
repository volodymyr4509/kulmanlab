---
sidebar_position: 3
title: Comando Copy — Duplicar Entidades numa Nova Posição no KulmanLab CAD
description: O comando Copy cria duplicatas transladadas de entidades selecionadas deixando os originais no lugar. Suporta pré-seleção, bloqueio de ângulo e entrada de distância exata. As cópias são posicionadas e o comando termina; os originais permanecem inalterados.
keywords: [comando copy CAD, duplicar entidades CAD, copiar objetos CAD, clonar geometria CAD, bloqueio ângulo cópia, distância exata cópia, kulmanlab]
---

# Copy

O comando `copy` cria duplicatas transladadas de entidades selecionadas e as posiciona deslocadas de um ponto base a um destino — os originais ficam exatamente onde estão. Essa é a diferença fundamental em relação ao [Move](./move): Copy adiciona novas entidades ao desenho; Move reposiciona as existentes.

## Duas formas de começar

**Pré-selecionar, depois copiar** — selecione as entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `copy` no terminal ou clique no botão **Copy** na barra de ferramentas.
3. **Clique no ponto base**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
4. **Clique no destino** — as duplicatas aparecem no deslocamento base→destino. A entrada de coordenadas também funciona aqui.

**Ativar, depois selecionar** — inicie o comando sem nada selecionado:

1. Digite `copy` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique para alternar entidades individuais, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. **Clique no ponto base**, depois **clique no destino** (entrada de coordenadas disponível em ambos os passos).

```
  Antes:                Depois:
  [entidade A]          [entidade A]  ← originais intactos
  [entidade B]          [entidade B]
                        [cópia de A] ← novas entidades
                        [cópia de B]
```

Uma pré-visualização fantasma das cópias acompanha o cursor do ponto base ao destino.

## Entrada de coordenadas

No passo do ponto base ou destino, digite uma posição exata em vez de clicar:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para confirmar.

## Bloqueio de ângulo e distância exata

Após o ponto base ser definido o comando encaixa em eixos a 45° (0°, 45°, 90°, 135°, …) quando o cursor está suficientemente longe e próximo do eixo. Enquanto bloqueado, digite uma distância e pressione **Enter** para posicionar as cópias exatamente nesse deslocamento.

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Acrescenta ao valor de distância |
| `-` | Distância negativa — inverte direção ao longo do eixo (apenas primeiro caractere) |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Posiciona cópias à distância digitada |

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma seleção e avança para a fase de ponto base |
| `0`–`9`, `.`, `-` | Inicia entrada de coordenada X, ou distância com bloqueio de ângulo ativo |
| `,` | Bloqueia X e passa para entrada Y |
| `Backspace` | Apaga o último caractere digitado |
| `Enter` | Confirma coordenada ou aplica cópia à distância digitada |
| `Escape` | Cancela e reinicia |

## Seleção durante o comando

| Método | Comportamento |
|--------|--------------|
| **Clique** | Alterna a entidade sob o cursor para dentro/fora da seleção |
| **Arrastar à direita** (estrito) | Adiciona entidades completamente dentro do retângulo |
| **Arrastar à esquerda** (cruzamento) | Adiciona entidades que cruzam o limite do retângulo |
| **Enter** / **Espaço** | Confirma a seleção |

## Após a cópia

Os **originais permanecem selecionados** — as novas cópias são adicionadas ao desenho mas a seleção é limpa e o comando termina. Para trabalhar imediatamente com as cópias, execute Copy novamente na seleção, ou inicie um novo comando.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originais | Permanecem no lugar | Removidos da posição original |
| Contagem resultante | Aumenta pelo número de entidades copiadas | Inalterada |
| Após a operação | Originais ainda selecionados | Entidades movidas selecionadas na nova posição |
| Ideal para | Geometria repetida, layouts simétricos | Reposicionamento de geometria |

## Entidades suportadas

Copy funciona em todos os tipos de entidade. Todas as entidades implementam `translate(dx, dy)` internamente, portanto nenhuma é excluída.
