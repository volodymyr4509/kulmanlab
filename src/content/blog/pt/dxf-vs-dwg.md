---
title: "DXF x DWG: qual é a diferença?"
description: "DWG é o formato nativo do AutoCAD; DXF é o formato aberto de intercâmbio. O que muda de fato, qual você precisa e como conseguir um DXF se te mandaram um DWG."
keywords: [DXF x DWG, diferença entre DXF e DWG, DWG ou DXF, o que é DWG, o que é DXF, DWG para DXF, formatos de arquivo CAD, abrir arquivo DWG, formato DXF, qual formato CAD]
date: 2026-09-02
author: KulmanLab
tag: Guia
---

DWG é o formato de arquivo nativo do AutoCAD: binário, proprietário e não documentado pela Autodesk. DXF é o formato de intercâmbio que a Autodesk publica para que outros programas consigam ler os mesmos desenhos. Mesma geometria, recipiente diferente, e só um dos dois foi feito para entregar arquivos a gente fora do seu próprio software.

Esse último ponto é toda a diferença prática, e é ele que decide o que você deveria pedir.

## A versão curta

| | DXF | DWG |
|---|---|---|
| Significa | Drawing Exchange Format | Drawing |
| Especificação publicada | Sim, pela Autodesk | Não |
| Codificação | Texto (também há variante binária) | Binário |
| Finalidade | Levar desenhos entre programas | O formato de trabalho do próprio AutoCAD |
| Tamanho do arquivo | Maior | Menor |
| Lido por outros programas | Muito amplamente | De forma irregular, via bibliotecas de engenharia reversa |
| Carrega tudo o que o AutoCAD faz | Não — um subconjunto documentado | Sim |

## Por que existem dois formatos

A Autodesk lançou o AutoCAD em 1982 com o DWG como formato de trabalho. Ele é feito para a conveniência de um único programa: compacto, binário e livre para mudar sempre que o AutoCAD precisar.

Isso o torna ruim para mandar a alguém. Então a Autodesk publicou também o DXF: o mesmo desenho escrito de forma documentada e legível, contra a qual qualquer desenvolvedor pode implementar. Abra um `.dxf` num editor de texto e você verá códigos de grupo e nomes de seção em ASCII simples.

Os dois são versionados juntos. Cada versão do AutoCAD traz uma revisão do DWG e uma revisão correspondente do DXF; a marca `AC1032` que às vezes aparece no cabeçalho de um arquivo identifica, por exemplo, a geração AutoCAD 2018.

Ou seja, DXF não é o formato mais antigo nem o menor. É o mesmo desenho, deliberadamente tornado legível.

## O que muda de fato na prática

**Abertura.** A Autodesk documenta o DXF e não documenta o DWG. Programas que leem DWG — e são muitos — se apoiam em bibliotecas construídas por engenharia reversa do formato. Funciona bem e é totalmente legítimo, mas significa que o suporte a DWG fica atrás das versões novas e varia entre aplicativos, enquanto o suporte a DXF qualquer um implementa direto da especificação.

**Tamanho.** Um DWG binário costuma ser bem menor que o mesmo desenho em DXF ASCII. Num projeto grande isso importa; numa peça avulsa, não.

**Fidelidade.** O DWG guarda tudo o que o AutoCAD consegue expressar, inclusive tipos de objeto que outros programas nem concebem. O DXF cobre um subconjunto documentado. Para desenho 2D comum — linhas, arcos, círculos, polilinhas, texto, cotas, camadas — esse subconjunto é tudo de que você precisa. Num modelo apoiado em objetos proprietários do AutoCAD, exportar para DXF perde parte disso.

**Alcance do suporte.** Praticamente toda ferramenta CAD, CAM e vetorial lê DXF. Menos leem DWG, e as que leem costumam suportá-lo de forma menos completa.

## Qual você realmente precisa?

**Te mandaram um arquivo e você não consegue abrir.** Confira primeiro a extensão de verdade. Quase todo mundo diz "DWG" para os dois, e metade das vezes o que está na sua pasta de downloads é um `.dxf` que você já podia abrir. Veja [como abrir um DXF sem AutoCAD](/pt/blog/open-dxf-file-without-autocad/).

**Você vai mandar para corte a laser, oficina CNC ou fabricante.** DXF, praticamente sempre. Softwares de máquina e serviços de corte são construídos em torno dele, e geometria de corte 2D cabe folgadamente no subconjunto documentado. Veja [preparar um DXF para corte a laser](/pt/blog/prepare-dxf-for-laser-cutting/).

**Você vai mandar para um arquiteto ou engenheiro que trabalha no AutoCAD.** Pergunte. Muitos preferem DWG porque é o que o fluxo deles espera, e abrem DXF sem problema caso contrário.

**Você está arquivando a longo prazo.** DXF. Um formato de texto documentado ainda será legível daqui a vinte anos por alguém com a especificação e um editor de texto. Esse argumento é a própria razão de existirem formatos de intercâmbio.

**Alguém só quer dar uma olhada.** Nenhum dos dois — mande um PDF. Veja [converter um DXF em PDF](/pt/blog/convert-dxf-to-pdf/).

## Como conseguir um DXF quando te mandaram um DWG

O caminho confiável é pedir. Quem enviou o arquivo abre no programa de CAD dele e faz *Salvar como* ou *Exportar* → DXF. Leva uns dez segundos, todo aplicativo CAD de desktop faz isso, e o arquivo sai do software que o criou em vez do palpite de um terceiro sobre ele.

Se pedir não for possível, conversores existem. Duas coisas a pesar: a conversão é onde a fidelidade se perde, e você está subindo o desenho de outra pessoa para um serviço que não controla. Para um projeto pessoal, tudo bem. Para trabalho de cliente, pergunte.

Ao pedir, vale citar uma versão. **DXF R12 é o mais seguro**: é antiquíssimo, tem suporte universal e, se o desenho for geometria 2D simples, não perde nada que importe. Softwares de máquina mais antigos, em especial, se dão muito melhor com ele.

## Duas coisas que as pessoas entendem errado

**"DXF perde informação."** Só no sentido de não carregar tipos de objeto proprietários do AutoCAD. Linhas, arcos, círculos, polilinhas, texto, cotas e camadas sobrevivem intactos. Para trabalho de desenho 2D a perda costuma ser zero.

**"DXF é o formato antigo."** Ele é versionado junto com o DWG desde 1982 e continua sendo. A confusão vem de o R12 ser tão usado como alvo de compatibilidade que as pessoas supõem que o DXF parou ali.

## Onde esta ferramenta se encaixa

O [KulmanLab](https://kulmanlab.com/pt/) lê **DXF, não DWG**, e vale dizer por quê em vez de tratar isso como descuido: o DXF é documentado, então uma implementação pode estar correta lendo a especificação. DWG significaria depender de uma biblioteca de engenharia reversa, dentro de um navegador, para um formato que muda no calendário da Autodesk.

Se você tem um `.dwg`, isto não vai abri-lo. Se você tem um `.dxf`, dá para abrir numa aba do navegador sem instalar nada: [app.kulmanlab.com](https://app.kulmanlab.com).

O que ele escreve de volta é geometria mais texto: linhas, círculos, arcos, elipses, polilinhas, splines e texto, junto com camadas e tipos de linha. Hachuras, cotas e diretrizes por enquanto não entram no DXF exportado.

---

*Relacionados: [Import](/pt/docs/commands/import/) para o que exatamente o KulmanLab lê de um DXF, e [Export Manager](/pt/docs/commands/export-manager/) para o que cada formato de exportação carrega.*
