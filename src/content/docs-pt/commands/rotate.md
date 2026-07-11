---
title: Comando Rotate — Girar Entidades em torno de um Ponto Base no KulmanLab CAD
description: O comando Rotate gira as entidades selecionadas em torno de um ponto base escolhido. O ângulo pode ser digitado com precisão ou definido clicando — a direção do cursor do ponto base ao clique determina o ângulo. Ângulos positivos são no sentido anti-horário nas coordenadas DXF.
keywords: [CAD comando rotate, girar entidades CAD, girar objetos ângulo, rotação anti-horária CAD, ângulo digitado rotate, kulmanlab]
group: edit
order: 3
---

# Rotate

O comando `rotate` gira as entidades selecionadas em torno de um ponto base. Você especifica o ângulo de rotação digitando um número em graus ou clicando — o ângulo é calculado a partir da direção entre o ponto base e a posição do clique.

## Duas formas de iniciar

**Pré-selecionar, depois girar** — selecione entidades primeiro, depois ative:

1. Selecione uma ou mais entidades no canvas.
2. Digite `rotate` no terminal ou clique no botão **Rotate** na barra de ferramentas.
3. **Clique no ponto base** — o centro de rotação. Ou digite `X,Y` e pressione **Enter** para uma coordenada exata.
4. **Digite um ângulo e pressione Enter**, ou **clique** para definir o ângulo pela direção do cursor.

**Ativar, depois selecionar** — inicie o comando sem nada selecionado:

1. Digite `rotate` ou clique no botão da barra de ferramentas.
2. **Selecione os objetos** — clique para alternar, ou arraste para selecionar por área.
3. Pressione **Enter** ou **Espaço** para confirmar a seleção.
4. **Clique no ponto base** (entrada de coordenadas disponível), depois defina o ângulo.

```
  Antes:             Depois (rotação 90° ao redor de ●):
                        ╔══╗
  ●  [entidade]  →   ● ║    ║
                        ╚══╝
```

Uma prévia fantasma ao vivo das entidades giradas segue o ângulo do cursor após o ponto base ser definido.

## Definindo o ângulo

**Ângulo digitado** — digite um número (em graus) a qualquer momento após o ponto base ser posicionado. A prévia encaixa no ângulo digitado enquanto você continua a ajustar antes de pressionar Enter.

**Ângulo clicado** — se nenhum valor digitado está presente, clicar define o ângulo igual a `atan2(cursorY − baseY, cursorX − baseX)` — a direção do ponto base ao clique, em graus.

| Tecla | Ação |
|-------|------|
| `0`–`9`, `.` | Adiciona dígito ao valor do ângulo |
| `-` | Ângulo negativo (apenas primeiro caractere) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Aplica a rotação no ângulo digitado |

## Direção do ângulo

Os ângulos seguem a **convenção DXF**:

- Valores **positivos** giram **no sentido anti-horário** nas coordenadas do desenho (Y para cima).
- Na tela, onde o eixo Y é invertido (Y para baixo), ângulos positivos aparecem **no sentido horário**.

Valores comuns: `90` = quarto de volta, `180` = meia volta, `-90` = quarto de volta oposto.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Enter` / `Espaço` | Confirma a seleção |
| `0`–`9`, `.`, `-` | Começa entrada de coordenada X (fase ponto base), ou valor de ângulo (fase ângulo) |
| `,` | Bloqueia X e move para entrada Y (fase ponto base) |
| `Backspace` | Exclui o último caractere digitado |
| `Enter` | Confirma coordenada ou aplica a rotação |
| `Escape` | Cancela e reinicia |

## Seleção durante o comando

| Método | Comportamento |
|--------|--------------|
| **Clique** | Alterna a entidade sob o cursor |
| **Arrastar direita** (estrita) | Adiciona entidades completamente dentro da caixa |
| **Arrastar esquerda** (cruzada) | Adiciona entidades que intersectam a caixa |
| **Enter** / **Espaço** | Confirma a seleção |

## Entidades suportadas

Rotate funciona em todos os tipos de entidade. A geometria de cada entidade é girada em torno do ponto base — por exemplo, um Círculo move seu centro enquanto o raio permanece o mesmo; um Arco move seu centro e ajusta seus ângulos de início e fim pela quantidade de rotação; uma entidade Texto move seu ponto de ancoragem e adiciona o ângulo à sua propriedade Grau de Rotação.
