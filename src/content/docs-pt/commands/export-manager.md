---
title: Export Manager — Baixar Desenhos como DXF ou JSON
description: Baixe o desenho como DXF ou JSON, marcando por tipo de entidade o que entra. Ambos levam geometria, texto, cotas, diretrizes e hachuras, além de camadas e tipos de linha.
keywords: [exportar DXF, exportar arquivo CAD, baixar DXF navegador, salvar DXF online, exportar JSON CAD, exportação KulmanLab, baixar arquivo CAD, exportação DXF, salvar desenho em arquivo, download DXF]
group: file
order: 6
---

# Export Manager

O comando `GerenciadorExportação` baixa o desenho atual para o seu sistema de arquivos. Dois formatos ficam lado a lado — **DXF** para compatibilidade com outras ferramentas CAD e **JSON** para salvamentos de fidelidade total dentro do KulmanLab CAD — e cada um tem sua própria lista do que colocar no arquivo.

## Como exportar

1. Clique no botão **Export** da barra de ferramentas (ícone de download) no painel de arquivos, ou digite `GerenciadorExportação` no terminal.
2. A janela **Export Manager** abre com duas colunas, **JSON** e **DXF**, cada uma listando os tipos de entidade do desenho com uma caixa de seleção e uma contagem.
3. Desmarque o que quiser deixar de fora. Tudo começa marcado.
4. Clique em **Export JSON** ou **Export DXF**. O arquivo baixa para sua pasta padrão e a janela fecha.

Pressione `Escape` para fechar o popup sem exportar.

## Escolher o que exportar

As duas colunas listam os mesmos tipos de entidade, cada um com quantos existem no desenho:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Tudo fica marcado quando a janela abre, então exportar de imediato entrega o desenho inteiro. Desmarque um tipo para deixá-lo fora daquele arquivo apenas.

- **As duas colunas são independentes.** Desmarcar Hatches no lado DXF não muda o que **Export JSON** produz — cada formato guarda sua própria seleção.
- **O que você não tem aparece esmaecido.** Uma linha com contagem `0` não pode ser marcada, então a lista serve também como inventário rápido do desenho.
- **As contagens são um instantâneo.** São tiradas quando a janela abre e não se atualizam se o desenho mudar por trás. Feche e reabra para renová-las.
- **Nada é apagado.** Desmarcar molda apenas o arquivo exportado; o desenho em si fica intacto.

**Linear Dimensions** cobre cotas lineares, alinhadas e contínuas: um mesmo tipo de entidade criado por três comandos diferentes. Raio, diâmetro e ângulo têm cada um sua linha.

Para um arquivo de corte, desmarque Text, as quatro linhas de cotas, Leaders e Hatches e clique em **Export DXF** — veja [preparar um DXF para corte a laser](/pt/blog/prepare-dxf-for-laser-cutting/).

## Escolhendo um formato

| Formato | Extensão | Melhor para | Limitações |
|---------|----------|-------------|------------|
| **JSON** *(nativo)* | `.json` | Salvar o trabalho para reabrir no KulmanLab CAD | Não compatível com outras ferramentas CAD |
| **DXF** | `.dxf` | Compartilhar com FreeCAD, LibreCAD, etc. | Quanto sobrevive depende da aplicação que recebe |

**Quando usar JSON:** sempre que quiser salvar uma cópia completa do seu trabalho. JSON é o formato nativo do KulmanLab e preserva cada entidade exatamente — incluindo cotas, líderes, hachuras e todos os dados de camada.

**Quando usar DXF:** quando você precisar entregar o desenho para alguém que usa outro aplicativo CAD. O arquivo exportado usa o formato DXF AC1032 e pode ser aberto na maioria das ferramentas compatíveis com DXF.

## O que é exportado por formato

### Exportação JSON

Cada tipo de entidade está incluído:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Cotas (linear, alinhada, contínua, raio, diâmetro, ângulo)
- Leaders (multileaders)
- Hatches, incluindo seu padrão, escala, ângulo e origem
- Layers e Linetypes

### Exportação DXF

Cada tipo de entidade está incluído:

- Lines, Circles, Arcs, Ellipses, Polylines (exportadas como `LWPOLYLINE`), Splines
- Text
- Cotas (linear, alinhada, contínua, raio, diâmetro, ângulo)
- Leaders (multileaders)
- Hatches, incluindo seu padrão, escala, ângulo e origem
- Layers e Linetypes

O arquivo é escrito como DXF AC1032, então um desenho exportado do KulmanLab abre com sua anotação intacta em outras ferramentas compatíveis com DXF, em vez de chegar como geometria nua.

O que cada aplicação receptora faz com ele depois ainda varia — o suporte a DXF difere entre ferramentas, e uma mais antiga pode ignorar entidades que uma mais nova lê. Se um desenho precisa parecer idêntico em todo lugar, o [Print Manager](../print-manager/) o captura como PDF ou imagem.

## Nome do arquivo exportado

O arquivo baixado recebe o nome do arquivo de desenho atual (ex. `myplan.json`). A extensão muda para corresponder ao formato escolhido. Um desenho que nunca recebeu nome é exportado como `drawing.dxf` ou `drawing.json`.

## Diferença entre Export Manager e Print Manager

| Recurso | Export Manager | Print Manager |
|---------|-----------------|-----------------|
| Saída | Arquivo fonte vetorial (.dxf / .json) | Imagem raster (.png / .jpeg / .webp / .pdf) |
| Editável em outras ferramentas | Sim (DXF) | Não |
| Preserva layers e linetypes | Sim | Não (renderizado plano) |
| Captura cotas e leaders | Sim | Sim |

Use o **Export Manager** quando precisar de um arquivo editável. Use o [Print Manager](../print-manager/) quando precisar de um instantâneo visual.

## Comandos relacionados

- [Import](../import/) — abrir um arquivo DXF ou JSON
- [Print Manager](../print-manager/) — exportar a tela como uma imagem PNG, JPEG, WebP ou PDF
- [File Manager](../file-manager/) — navegar por desenhos salvos no armazenamento do navegador
