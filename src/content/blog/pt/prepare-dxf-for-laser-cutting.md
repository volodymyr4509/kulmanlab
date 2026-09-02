---
title: "Como preparar um arquivo DXF para corte a laser"
description: "Por que serviços de corte recusam arquivos DXF e como consertar o seu — contornos fechados, unidades, kerf e camadas. De graça no navegador."
keywords: [DXF para corte a laser, preparar DXF laser, formato arquivo corte a laser, DXF recusado laser, contornos fechados DXF, kerf corte a laser, preparar arquivo laser, unidades DXF laser, camadas corte gravação, editor DXF grátis]
date: 2026-09-02
author: KulmanLab
tag: Guia
---

Um DXF para corte a laser precisa de quatro coisas: contornos fechados, unidades corretas, apenas a geometria de corte — sem cotas, notas ou hachuras — e camadas que separem cortar, marcar e gravar. Este guia cobre cada ponto e mostra como conferir o seu antes que um serviço o recuse.

Você pode fazer tudo isso de graça no navegador em [app.kulmanlab.com](https://app.kulmanlab.com): nada para instalar, sem conta, e o arquivo nunca sai do seu computador. Esse é o fluxo de trabalho para o qual construímos o KulmanLab originalmente, então as limitações que valem para outras tarefas de CAD em boa parte não valem aqui: corte a laser é 2D, e DXF é o que os serviços de corte querem.

## Por que arquivos são recusados

Cinco motivos respondem por quase tudo.

**Contornos abertos.** Uma forma que parece fechada mas tem uma fresta finíssima num canto não é uma região: é um conjunto de linhas soltas. As máquinas precisam saber o que está dentro e o que está fora, e um contorno aberto não tem dentro. É de longe o motivo de recusa mais comum.

**Unidades erradas ou ambíguas.** O DXF não registra de forma confiável o que seus números significam. O mesmo arquivo pode estar em milímetros, centímetros, polegadas ou pés, e muitas vezes não diz. Uma peça que chega 25,4 vezes maior ou menor é isso.

**Tudo que não é geometria.** Cotas, carimbos, notas, hachuras, linhas de construção. A máquina vai tentar cortar suas anotações sem hesitar.

**Linhas duplicadas.** Duas linhas idênticas sobrepostas significam que o laser percorre o mesmo traçado duas vezes: tempo perdido, bordas queimadas e, em material fino, risco de incêndio.

**Tudo numa camada só.** Se cortar, marcar e gravar não estiverem separados, o serviço não consegue distinguir e vai pedir que você reenvie.

## Preparando o arquivo

Arraste seu `.dxf` para a área de desenho em [app.kulmanlab.com](https://app.kulmanlab.com), ou use o botão **Import** no painel de arquivo. O desenho carrega e a visualização se ajusta a ele.

**1. Olhe o que você realmente tem.** Digite `fit` para trazer tudo à vista. Depois amplie cada canto de cada peça: as frestas são invisíveis na visão do desenho inteiro e evidentes a 10×. É essa conferência que evita o e-mail de recusa.

**2. Apague o que não deve ser cortado.** Linhas de construção, notas, bordas, cotas. `layer-isolate` mostra uma camada por vez, que é como se acham sobras escondidas debaixo da geometria de verdade.

**3. Feche as frestas.** `trim` apara as pontas que passam do ponto onde duas linhas se cruzam. Onde as linhas ficam curtas, arraste o grip da extremidade até a vizinha: os grips encaixam, então as pontas se encontram de fato em vez de quase se encontrarem.

**4. Confira as medidas.** `distance` mede entre dois pontos, `area` mede uma região fechada a partir de pontos clicados. Meça algo cuja dimensão real você conheça. Se der 25,4 vezes de diferença, seu arquivo está no sistema de unidades errado.

**5. Separe cortar, marcar e gravar.** Coloque cada operação na sua própria camada com nome óbvio: `CUT`, `SCORE`, `ENGRAVE`. A maioria dos serviços pede isso ou pede arquivos separados. `layer-manager` cria e atribui.

Então exporte: **Export** → **DXF**. O KulmanLab escreve DXF AC1032 simples, que é o que os serviços de corte e os softwares de máquina esperam.

## Kerf

O laser remove material ao cortar — algo entre 0,1 e 0,3 mm conforme a máquina, o material e a espessura. Corte um quadrado de 50 mm e você obtém um quadrado ligeiramente menor, e a peça que deveria encaixar sob pressão não vai entrar.

Duas formas de lidar com isso:

**Deixe o serviço resolver.** A maioria dos serviços de corte compensa o kerf por conta própria, e se eles fazem isso, compensar você também deixa as peças erradas na direção oposta. Pergunte antes de ajustar qualquer coisa.

**Faça você mesmo.** `offset` cria uma cópia paralela de uma forma a uma distância fixa: metade da largura do kerf, para fora nas peças que devem manter a medida, para dentro nos furos. Funciona com linhas, círculos, arcos, elipses e polilinhas. Age em uma entidade por vez, então é prático para um punhado de detalhes críticos, não para uma chapa com duzentas peças.

Se a tolerância importa, corte uma peça de teste antes de comprometer o material.

## O que não sobrevive à exportação DXF

Vale saber antes de contar com isso:

- **Texto não é exportado para DXF.** Se você planejava letras gravadas, elas não estarão no arquivo. Converta o texto em contornos em outra ferramenta, ou use um serviço que aceite SVG para a camada de gravação.
- **Hachuras e cotas também não são exportadas.** Para um arquivo de corte é exatamente o que se quer — mas não presuma que uma região hachurada virará um preenchimento gravado, porque ela não estará no arquivo de jeito nenhum.
- **Referências de bloco não são importadas.** Um desenho montado com símbolos de bloco repetidos chega incompleto, então confira a contagem de peças contra o original.

Splines *são* exportadas. Alguns softwares de máquina lidam mal com elas e preferem polilinhas — se for o seu caso, redesenhe as curvas como polilinhas ou arcos.

## Um alerta sobre automação

O KulmanLab **não tem verificação prévia**. Nada procura contornos abertos, linhas duplicadas ou problemas de unidade para avisar você. As conferências acima são manuais: ampliar, medir, olhar.

Isso está bem para um punhado de peças e é tedioso para uma chapa inteira aninhada. Se você produz chapas com regularidade, uma ferramenta com validador automático vai lhe servir melhor — e para peças avulsas, que é o que quase todo mundo faz quase sempre, olhar o arquivo com atenção pega os mesmos problemas.

## Antes de enviar

- Todos os contornos de corte fechados, cantos conferidos em alta ampliação
- Uma medida conhecida verificada e correta
- Sem cotas, notas, bordas ou geometria de construção sobrando
- Sem linhas duplicadas sobrepostas
- Cortar, marcar e gravar em camadas separadas e claramente nomeadas
- Kerf: aplicado, ou deliberadamente deixado para o serviço
- Exportado como DXF e reaberto uma vez para confirmar que está certo

Esse último ponto custa dez segundos e pega surpresas de exportação antes do serviço.

---

*Relacionados: [Import](/pt/docs/commands/import/) para o que o KulmanLab lê de um DXF, [Export Manager](/pt/docs/commands/export-manager/) para o que exatamente cada formato carrega, [Offset](/pt/docs/commands/offset/) para compensação de kerf, e [LayerManager](/pt/docs/commands/layer-manager/) para montar as camadas de corte e gravação.*
