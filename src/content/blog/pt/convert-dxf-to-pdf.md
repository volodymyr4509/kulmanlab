---
title: "Como converter um DXF em PDF (na escala certa)"
description: "Converta DXF em PDF grátis no navegador — inclusive em escala exata como 1:50 em A3, o que os conversores online não fazem. Sem instalar nada."
keywords: [converter DXF em PDF, DXF para PDF grátis, DXF PDF online, DXF PDF escala, imprimir DXF em escala, conversor DXF PDF, desenho CAD em PDF, DXF PDF A3, escala 1:50 PDF, DXF PDF sem AutoCAD]
date: 2026-09-03
author: KulmanLab
tag: Guia
---

Para converter um DXF em PDF, abra-o num editor CAD que roda no navegador e exporte: nada para instalar, sem conta, e o arquivo fica no seu computador. Se o PDF precisar medir corretamente quando impresso, você vai precisar de um layout de papel e de uma escala exata — justamente a parte que os conversores pulam.

Essa distinção é a razão deste guia. Um conversor de arquivos genérico devolve uma imagem do seu desenho. Um PDF em escala devolve um desenho no qual alguém pode encostar uma régua.

## O jeito rápido: só gerar um PDF

Quando você só precisa de algo legível para enviar:

1. Acesse [app.kulmanlab.com](https://app.kulmanlab.com) e arraste seu `.dxf` para a área de desenho, ou use o botão **Import** no painel de arquivo.
2. Clique no botão **Print**, ou digite `printmanager`.
3. Ajuste **Format** para **PDF**.
4. Clique em **Export**. O arquivo é baixado.

Pronto. A pré-visualização é renderizada pelo mesmo caminho de código e na mesma resolução do arquivo exportado, então o que você vê é o que sai, não uma aproximação.

Uma coisa que vale saber: diferente da exportação em DXF, **o PDF preserva tudo que está na tela** — cotas, texto, hachuras, diretrizes. Se o desenho estiver anotado, o PDF é o formato que leva a anotação junto.

## O jeito certo: converter em escala exata

Se alguém for medir ou construir a partir disso, "cabe na página" não serve. Escala 1:50 quer dizer que 1 mm no papel são 50 mm na realidade, e isso só vale se você definir de propósito.

1. **Vá para um layout de papel.** Clique numa aba de layout na parte de baixo; o botão **+** adiciona uma. Layouts são espaço papel; o espaço modelo não tem página sobre a qual escalar.
2. **Defina a folha.** Digite `pagemanager`, ou clique com o botão direito na aba do layout e escolha **Page Manager**. Escolha o formato de papel (A4, A3, A2, Letter…) e a orientação.
3. **Coloque uma viewport.** Digite `viewportrectangle` e marque dois cantos opostos. A viewport é uma janela para o seu modelo.
4. **Defina a escala.** Com a viewport ativa, use o **seletor de escala** na barra de controle. Escolha uma proporção padrão ou digite a sua: aceita formato de razão (`1:200`, `5:1`) ou um decimal (`0.005`), e então Enter.
5. **Exporte.** Print Manager → PDF → Export.

O PDF é dimensionado para que a página imprima em escala física real. Imprima a 100% — nunca com "ajustar à página", que reescala silenciosamente e joga fora todo o trabalho — e as medidas no papel vão bater.

Se depois você mudar o tamanho do papel ou a escala, as viewports existentes são reescaladas proporcionalmente, então o layout não desanda.

## Escolhendo a qualidade

O menu **Quality** define os DPI em que o PDF é renderizado:

| Quality | DPI | Para quê |
|---|---|---|
| Draft | 72 | Conferência rápida, arquivo menor |
| Normal | 150 | Padrão — suficiente para anexos em A4 |
| Presentation | 300 | Quando vão olhar de perto |
| Max | 600 | Grande formato, detalhe fino |

As espessuras de linha escalam junto com a resolução, então uma linha mantém a mesma espessura *física* no papel em qualquer ajuste: mais qualidade dá uma linha mais nítida, não mais fina. A exceção é a linha capilar (espessura `0`), que por convenção continua com um pixel em todos os níveis.

## Estilos de impressão

O menu **Style** muda a tinta e a página:

- **Monochrome** — preto sólido sobre branco, e é o padrão. É o que você quer para papel: camadas coloridas que se leem bem na tela viram cinzas embolados numa impressora laser.
- **Default** — cada entidade com sua própria cor, página branca.
- **Blueprint** — linhas brancas sobre azul da Prússia profundo, no estilo da cianotipia clássica. Para apresentar, não para a oficina.

## Converter só uma parte do desenho

**Change Area** recorta a exportação a um retângulo que você marca na área de desenho. Recorta o arquivo exportado de verdade, não só a pré-visualização, e funciona tanto num layout quanto no espaço modelo.

Os cantos encaixam em grips e interseções como qualquer outro ponto, então dá para recortar pela geometria desenhada em vez de no olho — útil quando uma folha tem quatro detalhes e você quer só o terceiro.

## O que isso não faz

Limitações honestas, antes de você contar com isso:

- **O PDF é uma imagem rasterizada dentro de um contêiner PDF, não vetorial.** Em A4 e qualidade Normal isso é invisível. Em A1, ou se alguém der muito zoom num detalhe, um PDF vetorial de um pacote CAD de desktop será mais nítido. Suba Quality para Presentation ou Max em grande formato — mas ele não vira vetorial.
- **Nada vai para uma impressora física.** Você recebe um arquivo; imprimir é tarefa da sua impressora.
- **Só navegadores de desktop** — Chrome, Firefox, Safari, Edge. Não há versão para celular.
- **Só 2D, DXF e não DWG.** Se seu arquivo for `.dwg`, peça ao remetente para exportar DXF.

## Quando usar outra coisa

**Um conversor genérico** (CloudConvert, Zamzar e afins) serve se você realmente só precisa de uma imagem e não se importa com o tamanho impresso. São rápidos e lidam com formatos que ninguém mais lê. Não vão te dar 1:50 em A3.

**CAD de desktop** — LibreCAD, QCAD, ou AutoCAD se você tiver — produz PDFs vetoriais e é a resposta certa para desenhos técnicos de grande formato que serão impressos direito e examinados a fundo.

**Isto**, para a ampla faixa do meio: um DXF que você precisa hoje como PDF anotado e corretamente escalado, sem instalar nada.

## Antes de enviar

- Escala definida de propósito na viewport, não deixada no que coube
- Formato de papel de acordo com o que o destinatário vai realmente imprimir
- Quality acima de Normal se for em algo maior que A4
- Estilo Monochrome, a não ser que você queira cor de propósito
- PDF aberto uma vez para conferir antes de anexar
- Destinatário avisado de imprimir a 100%, e não "ajustar à página"

Essa última linha salva mais desenhos em escala do que todo o resto desta lista.

---

*Relacionados: [Print Manager](/pt/docs/commands/print-manager/) para todos os ajustes de exportação, [Page Manager](/pt/docs/commands/page-manager/) para tamanho de papel e escala do layout, [ViewportRectangle](/pt/docs/commands/viewport-rectangle/) para posicionar e escalar viewports, e [Import](/pt/docs/commands/import/) para o que o KulmanLab lê de um DXF.*
