---
sidebar_position: 1
title: Comando Move — Transladar Entidades Selecionadas por Ponto Base no KulmanLab CAD
description: O comando Move translada uma ou mais entidades selecionadas por um ponto base e destino. Suporta pré-seleção, travamento de ângulo e entrada de distância exata. Após o movimento as entidades permanecem selecionadas na nova posição. Todos os tipos de entidade são suportados.
keywords: [CAD comando move, transladar entidades CAD, mover objetos CAD, travamento ângulo move, distância exata move, grip move CAD, kulmanlab]
---

# Move

O comando `move` translada as entidades selecionadas de um ponto base para um ponto de destino. O deslocamento aplicado a cada entidade selecionada é o vetor de base para destino. Após o movimento todas as entidades permanecem selecionadas na nova posição, prontas para edições adicionais.

## Duas formas de iniciar

**Pré-selecionar, depois mover** — selecione entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `move` no terminal ou clique no botão **Move** na barra de ferramentas.
3. **Clique no ponto base**, ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
4. **Clique no destino** — todas as entidades selecionadas deslocam pelo vetor base→destino. A entrada de coordenadas também funciona aqui.

**Ativar, depois selecionar** — inicie o comando sem nada selecionado:

1. Digite `move` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique para alternar entidades individuais, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. **Clique no ponto base**, depois **clique no destino** (entrada de coordenadas disponível em ambas as etapas).

```
  Antes:                     Depois:
  ● base                       → ● destino
  [entidade A]                    [entidade A movida]
  [entidade B]                    [entidade B movida]
```

Uma prévia fantasma de todas as entidades selecionadas segue o cursor do ponto base ao destino, mostrando o resultado antes de clicar.

## Entrada de coordenadas

Na etapa do ponto base ou destino, digite uma posição exata em vez de clicar:

1. Digite o valor X.
2. Pressione `,` — o terminal mostra `[X], [Y{cursor}]`.
3. Digite o valor Y.
4. Pressione **Enter** para confirmar.

## Travamento de ângulo e distância exata

Após o ponto base ser definido, o comando procura um eixo de encaixe de 45° (0°, 45°, 90°, 135°, …). A direção **trava** quando o cursor está suficientemente longe da base e dentro de uma largura de grip do eixo. Enquanto travado:

- A prévia fantasma encaixa no eixo.
- Digite uma distância e pressione **Enter** para mover exatamente essa distância na direção travada.
- Clicar projeta no eixo, então o destino sempre fica exatamente nele.

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona ao valor de distância |
| `-` | Distância negativa — inverte a direção ao longo do eixo (apenas primeiro caractere) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Aplica o movimento na distância digitada |

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção e avança para a fase do ponto base |
| `0`–`9`, `.`, `-` | Começa a entrada de coordenada X, ou distância com ângulo travado |
| `,` | Bloqueia X e move para entrada Y |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma a coordenada ou aplica o movimento na distância digitada |
| `Escape` | Cancela e reinicia |

## Ativando Move a partir de um grip

Clicar no **grip do ponto médio** de uma [Linha](./line) selecionada ativa Move automaticamente, com o ponto médio já definido como ponto base e a fase de movimento ativa. Esta é a forma mais rápida de reposicionar uma única linha sem passar pela etapa de seleção.

## Seleção durante o comando

Quando o comando começa na fase de seleção:

| Método | Comportamento |
|--------|--------------|
| **Clique** | Alterna a entidade sob o cursor dentro/fora da seleção |
| **Arrastar direita** (estrita) | Adiciona entidades completamente dentro da caixa |
| **Arrastar esquerda** (cruzada) | Adiciona entidades que intersectam a borda da caixa |
| **Enter** / **Espaço** | Confirma a seleção e avança para a fase do ponto base |

## Após o movimento

As entidades movidas permanecem selecionadas na nova posição. Isso significa que você pode imediatamente:
- Executar **Move** novamente para ajustá-las.
- Executar [Copy](./copy), [Rotate](./rotate) ou [Scale](./scale) sem re-selecionar.
- Pressionar **Delete** para removê-las.

## Move vs Copiar

| | Move | Copiar |
|---|------|--------|
| Posição original | Esvaziada — as entidades não estão mais lá | Mantida — os originais permanecem no lugar |
| Contagem de resultado | Mesmo número de entidades | Um conjunto adicional por operação |
| Seleção após | Entidades movidas selecionadas na nova posição | Entidades copiadas selecionadas na nova posição |
| Ideal para | Reposicionar geometria | Duplicar geometria |

## Entidades suportadas

Move funciona em todos os tipos de entidade: Linha, Polilinha, Retângulo, Círculo, Arco, Elipse, Texto, Spline, Cota, Leader e todos os outros.
