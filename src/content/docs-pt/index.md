---
title: KulmanLab CAD — Referência de comandos
description: Referência de comandos KulmanLab CAD — guia completo de todos os comandos de desenho, edição, anotação, camadas, medição e arquivo no KulmanLab CAD.
keywords: [KulmanLab, KulmanLab CAD, comandos CAD, CAD gratuito navegador, editor DXF online, comandos de desenho, kulmanlab]
---

# KulmanLab CAD — Referência de comandos

Bem-vindo à referência de comandos do **KulmanLab CAD**. O [KulmanLab CAD](https://kulmanlab.com) é uma ferramenta CAD gratuita baseada em navegador para desenhar, editar e exportar arquivos DXF — sem instalação necessária. Use a barra lateral para navegar por todos os comandos disponíveis agrupados por painel.

## Formas

| Comando | O que faz |
|---------|-----------|
| [Line](./commands/line/) | Desenha um segmento de linha entre dois pontos |
| [Polyline](./commands/polyline/) | Desenha um caminho aberto com múltiplos segmentos |
| [Rectangle](./commands/rectangle/) | Desenha um retângulo alinhado aos eixos |
| [Circle](./commands/circle/) | Desenha um círculo pelo centro e raio |
| [Arc](./commands/arc/) | Desenha um arco por três pontos |
| [Ellipse](./commands/ellipse/) | Desenha uma elipse pelo centro e dois eixos |
| [Text](./commands/text/) | Coloca uma etiqueta de texto na tela |
| [Spline CV](./commands/spline-cv/) | Desenha uma spline posicionando vértices de controle |
| [Spline Fit](./commands/spline-fit/) | Desenha uma spline que passa pelos pontos clicados |

## Editar

| Comando | O que faz |
|---------|-----------|
| [Move](./commands/move/) | Move as entidades selecionadas para uma nova posição |
| [Copy](./commands/copy/) | Copia as entidades selecionadas para uma nova posição |
| [Rotate](./commands/rotate/) | Gira as entidades selecionadas em torno de um ponto base |
| [Mirror](./commands/mirror/) | Espelha as entidades selecionadas em relação a uma linha |
| [Scale](./commands/scale/) | Escala as entidades selecionadas em torno de um ponto base |
| [Align](./commands/align/) | Translada, roda e escala opcionalmente entidades usando pares de pontos |
| [Delete](./commands/delete/) | Exclui as entidades selecionadas do desenho |
| [Trim](./commands/trim/) | Apara um segmento de linha nas suas interseções |
| [Extend](./commands/extend/) | Estende uma linha até a interseção de limite mais próxima |
| [Offset](./commands/offset/) | Cria uma cópia paralela de uma entidade a uma distância definida |
| [Fillet](./commands/fillet/) | Arredonda um canto entre duas linhas com um arco tangente |
| [Chamfer](./commands/chamfer/) | Cria um chanfro diagonal entre duas linhas ou polilinhas |
| [Undo](./commands/undo/) | Desfaz a última ação |
| [Redo](./commands/redo/) | Refaz a última ação desfeita |

## Anotação

| Comando | O que faz |
|---------|-----------|
| [Leader](./commands/leader/) | Desenha uma anotação multileader com ponta de seta e texto |
| [Leader+](./commands/leader-add/) | Adiciona um braço extra a um multileader existente |
| [Leader−](./commands/leader-remove/) | Remove um braço de um multileader existente |
| [Dimension Linear](./commands/dim-linear/) | Adiciona uma cota horizontal ou vertical |
| [Dimension Aligned](./commands/dim-aligned/) | Adiciona uma cota alinhada a dois pontos |
| [Dimension Continue](./commands/dim-continue/) | Encadeia uma nova cota a partir da última |
| [Dimension Radius](./commands/dim-radius/) | Adiciona uma cota de raio a um círculo ou arco |
| [Dimension Diameter](./commands/dim-diameter/) | Adiciona uma cota de diâmetro a um círculo |
| [Dimension Angular](./commands/dim-angular/) | Adiciona uma cota angular a duas linhas, um arco ou um círculo |

## Camada

| Comando | O que faz |
|---------|-----------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Define a camada ativa para corresponder à camada da entidade clicada |
| [LayerMatch](./commands/layer-match/) | Reatribui as entidades selecionadas à camada de uma entidade de origem |
| [LayerIsolate](./commands/layer-isolate/) | Congela todas as camadas exceto as das entidades selecionadas |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Descongela todas as camadas de uma vez |

## Layouts

| Comando | O que faz |
|---------|-----------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Cria uma viewport em um layout papel selecionando dois cantos |
| [ViewportCopy](./commands/viewport-copy/) | Duplica uma viewport para uma nova posição |
| [PageManager](./commands/page-manager/) | Edita o formato de papel e a escala do layout ativo |

## Navegar

| Comando | O que faz |
|---------|-----------|
| [Pan](./commands/pan/) | Clique e arraste para mover a viewport |
| [Zoom In](./commands/zoom-in/) | Amplia a viewport |
| [Zoom Out](./commands/zoom-out/) | Reduz a viewport |
| [Fit](./commands/fit/) | Ajusta todas as entidades na viewport |

## Medir

| Comando | O que faz |
|---------|-----------|
| [Distance](./commands/distance/) | Mede a distância entre dois pontos |
| [Angle](./commands/angle/) | Mede o ângulo entre três pontos |
| [Area](./commands/area/) | Mede a área e o perímetro de um polígono |

## Estilo

| Comando | O que faz |
|---------|-----------|
| [Match Properties](./commands/match-properties/) | Copia cor, camada e outras propriedades de uma entidade para outras |
| [Font Manager](./commands/font-manager/) | Navegue, selecione e envie fontes TTF personalizadas |

## Arquivo

| Comando | O que faz |
|---------|-----------|
| [Import](./commands/import/) | Abre um arquivo de desenho DXF ou JSON |
| [New File](./commands/new-file/) | Inicia um novo desenho em branco |
| [Files](./commands/files/) | Navega e restaura desenhos recentes |
| [Print](./commands/print/) | Exporta uma área do desenho como imagem ou PDF |
| [Export](./commands/export/) | Baixa o desenho como DXF ou JSON |
| [Wipe Storage](./commands/wipestorage/) | Apaga todos os desenhos do armazenamento do navegador |

## Recuperação

Se o aplicativo travar a cada inicialização (por exemplo, após trabalhar com coordenadas extremamente grandes), você pode apagar todos os dados armazenados localmente adicionando `?reset` à URL:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Isso exclui tudo do banco de dados local do navegador e inicia um novo desenho em branco. O parâmetro `?reset` é removido automaticamente da URL. Use como último recurso quando [Wipe Storage](./commands/wipestorage/) não estiver acessível porque o aplicativo não carrega.

## Como os comandos funcionam

Cada comando segue o mesmo padrão:

1. **Ative** — clique no botão na barra de ferramentas ou digite o nome do comando no terminal na parte inferior da tela.
2. **Siga o prompt** — o terminal indica qual entrada é esperada a seguir.
3. **Conclua ou cancele** — a maioria dos comandos termina automaticamente após a última entrada. Pressione **Esc** a qualquer momento para cancelar.

## Selecionando objetos

Vários comandos de edição (Move, Copy, Rotate, Mirror, Scale, Delete) compartilham o mesmo comportamento de seleção:

- **Clique** em uma entidade para selecioná-la ou desmarcá-la.
- **Arraste para a direita** (esquerda para direita) para seleção de janela — seleciona apenas entidades completamente dentro da caixa.
- **Arraste para a esquerda** (direita para esquerda) para seleção de cruzamento — seleciona qualquer entidade que intercepte a caixa.
- Pressione **Enter** ou **Espaço** para confirmar a seleção e prosseguir para a próxima etapa.
