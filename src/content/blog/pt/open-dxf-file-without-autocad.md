---
title: "Como abrir um arquivo DXF sem AutoCAD"
description: "Recebeu um arquivo .dxf e não tem AutoCAD? Abra-o de graça no navegador, sem instalar nada — além de alternativas para desktop e soluções para desenhos vazios."
keywords: [abrir arquivo DXF, abrir DXF sem AutoCAD, visualizador DXF grátis, ver DXF online, abrir DXF no navegador, visualizador DXF gratuito, abrir arquivo DXF grátis, ler arquivo DXF, DXF ou DWG, abrir DXF no Mac]
date: 2026-08-31
author: KulmanLab
tag: Guia
---

Para abrir um arquivo DXF sem AutoCAD, arraste-o para um editor CAD que roda no navegador: não há nada para instalar nem conta para criar. Programas de desktop gratuitos como LibreCAD e QCAD também abrem DXF. Este guia cobre os dois caminhos, e o que fazer quando o desenho abre vazio, minúsculo ou sem texto.

Nós desenvolvemos uma das ferramentas abaixo — [KulmanLab](https://kulmanlab.com/pt/) — então trate aquela seção como a parcial, e as limitações listadas nela como a parte em que tivemos de ser honestos.

## O que um arquivo DXF realmente é

DXF significa *Drawing Exchange Format* (formato de intercâmbio de desenhos). A Autodesk o criou para que programas de CAD pudessem passar desenhos uns aos outros, e ele é deliberadamente aberto e baseado em texto — você pode literalmente abrir um `.dxf` num editor de texto e lê-lo.

Essa abertura é o motivo de você ter opções. O DXF não está preso a nenhum programa específico, e dezenas de ferramentas sabem lê-lo.

É também o motivo de um DXF não ser uma imagem. Ele guarda geometria — linhas, arcos, círculos, camadas, cotas — não pixels. Renomeá-lo para `.jpg` não fará com que ele abra num visualizador de imagens.

## Opção 1: abrir no navegador

O caminho mais rápido, porque não há nada para baixar nem cadastro algum.

1. Acesse [app.kulmanlab.com](https://app.kulmanlab.com).
2. Arraste seu arquivo `.dxf` direto para a área de desenho — ou use o botão **Import** (ícone de pasta) no painel de arquivo.
3. O desenho carrega e a visualização se ajusta automaticamente a ele.

Seu arquivo nunca sai do seu computador. O KulmanLab roda inteiramente no navegador, então o desenho é processado localmente em vez de ser enviado a um servidor.

Dali você pode deslocar e dar zoom, ligar e desligar camadas, medir distâncias e ângulos, editar a geometria e exportar para PDF, PNG, JPEG ou WebP se só precisar de algo imprimível para repassar.

**O que ele lê de um DXF:** linhas, círculos, arcos, elipses, polilinhas, splines, texto, cotas, diretrizes múltiplas e hachuras, além das tabelas de camadas e tipos de linha do arquivo.

**Onde ele fica devendo — leia antes de contar com isso:**

- **Somente 2D.** Um DXF com sólidos ou malhas 3D é o arquivo errado para esta ferramenta.
- **Sem blocos.** Referências de bloco (`INSERT`) não são processadas, então um desenho montado com símbolos de bloco repetidos chegará incompleto.
- **DXF, não DWG.** Veja a seção sobre DWG mais abaixo.
- **Apenas navegadores de desktop** — Chrome, Firefox, Safari e Edge. Não existe versão para celular.
- **A exportação para DXF é só geometria.** Se você editar e exportar de volta para DXF, ficam de fora hachuras, cotas, diretrizes e texto. Exporte para o formato nativo JSON se precisar manter tudo, ou para PDF se só quiser compartilhar.

Se algum desses pontos for impeditivo, uma das ferramentas de desktop abaixo vai lhe servir melhor.

## Opção 2: programas de desktop gratuitos

Vale a instalação se você for fazer isso com regularidade, ou se o seu arquivo usar recursos que uma ferramenta de navegador não vai dar conta.

**LibreCAD** — gratuito e de código aberto, apenas 2D, roda em Windows, macOS e Linux. O mais próximo do desenho 2D clássico, e um editor DXF sólido.

**QCAD** — o motor de onde o LibreCAD surgiu. Uma edição comunitária gratuita mais uma versão Pro paga com recursos extras.

**FreeCAD** — gratuito e de código aberto, voltado à modelagem paramétrica 3D mas capaz de importar DXF. Exagerado se você só quer ver um desenho 2D, e com curva de aprendizado íngreme.

**Autodesk Viewer** — o visualizador web gratuito da própria Autodesk. Somente visualização, e exige entrar com uma conta Autodesk.

**Inkscape** — não é CAD, mas importa DXF e é uma escolha razoável se tudo o que você precisa é ver as formas ou convertê-las para SVG.

## "Na verdade é um DWG, não é?"

Muitas vezes, sim. DXF e DWG são ambos formatos da Autodesk e as pessoas usam os nomes como sinônimos, mas não são a mesma coisa:

| | DXF | DWG |
|---|---|---|
| Formato | Aberto, baseado em texto | Proprietário, binário |
| Finalidade | Intercâmbio entre programas | Formato nativo do AutoCAD |
| Suporte em outros lugares | Amplo | Limitado e muitas vezes imperfeito |

Confira a extensão real do arquivo antes de sair caçando um visualizador. Se for `.dwg`, as ferramentas acima em geral não vão ajudar — inclusive o KulmanLab, que suporta apenas DXF.

A solução confiável é conseguir um DXF: quem lhe enviou o arquivo pode abri-lo no programa de CAD dele e exportar ou fazer *Salvar como* DXF. Praticamente todo aplicativo de CAD para desktop faz isso, e leva uns dez segundos. Converter o DWG por conta própria com um conversor de terceiros é possível, mas perde mais informação — e você está confiando o desenho de outra pessoa a uma ferramenta desconhecida.

## Quando o desenho abre mas parece errado

**A área de desenho está vazia.** Normalmente a geometria está muito longe da origem, então a vista aponta para o vazio. Use um comando de *ajustar* ou *zoom extensão* para pular até o desenho. Verifique também se há camadas desligadas — um desenho pode chegar com a maioria das camadas congeladas.

**Está tudo microscópico, ou absurdamente grande.** O DXF não registra suas unidades de forma confiável. O mesmo desenho pode ter sido feito em milímetros, centímetros, polegadas ou pés, e muitas vezes o arquivo não diz qual. Meça algo cujo tamanho real você conheça e escale a partir dali.

**O texto sumiu ou foi substituído.** Fontes não ficam embutidas num DXF. Se o desenho usa uma fonte que sua máquina não tem, o texto cai para outra ou desaparece. Carregar a fonte original resolve.

**Partes do desenho não vieram.** Algo no arquivo usa um tipo de entidade que sua ferramenta não lê — comumente blocos, sólidos 3D ou extensões proprietárias escritas pelo programa que o gerou. Teste uma segunda ferramenta antes de concluir que o arquivo está corrompido.

**Não abre nada.** Confirme que o arquivo é mesmo um DXF: abra-o num editor de texto simples. Um DXF legítimo começa com códigos de grupo ASCII legíveis e nomes de seção como `SECTION` e `HEADER`. Se você vir ruído binário, é um DWG ou uma variante binária de DXF.

## Qual escolher

**Só precisa dar uma olhada, uma vez?** Abra no navegador. Instalar um pacote de CAD para ler um único arquivo que alguém mandou por e-mail não é uma boa troca.

**Precisa medir, marcar ou imprimir?** Ferramentas de navegador dão conta disso, e imprimir em PDF na escala real costuma ser exatamente o que se quer.

**Trabalho de desenho de verdade, repetidamente?** Instale o LibreCAD ou o QCAD. Software de desktop dedicado vai lhe servir melhor com o tempo.

**Tem um DWG?** Peça um DXF a quem enviou. É mais rápido e mais seguro do que qualquer rota de conversão.

---

*Relacionados: [Import](/pt/docs/commands/import/) para a lista completa do que o KulmanLab lê de um DXF, [Export Manager](/pt/docs/commands/export-manager/) para o que cada formato de exportação carrega, e [Print Manager](/pt/docs/commands/print-manager/) para saída em PDF na escala física real.*
