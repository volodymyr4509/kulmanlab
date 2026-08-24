---
title: Export Manager — Baixar Desenhos como DXF ou JSON
description: O Export Manager baixa o desenho atual como um arquivo DXF ou JSON (nativo). Cada formato lista exatamente quais tipos de entidade ele carrega, lado a lado, para que você veja antes de baixar o que o DXF deixa de fora — atualmente hachuras, cotas, líderes e texto.
keywords: [exportar DXF, exportar arquivo CAD, baixar DXF navegador, salvar DXF online, exportar JSON CAD, exportação KulmanLab, baixar arquivo CAD, exportação DXF, salvar desenho em arquivo, download DXF]
group: file
order: 6
---

# Export Manager

O comando `exportmanager` baixa o desenho atual para o seu sistema de arquivos. Dois formatos estão disponíveis, mostrados como cartões lado a lado: **DXF** para compatibilidade com outras ferramentas CAD e **JSON** para salvamentos com fidelidade total dentro do KulmanLab CAD — cada cartão lista exatamente quais tipos de entidade aquele formato carrega.

## Como exportar

1. Clique no botão **Export** da barra de ferramentas (ícone de download) no painel de arquivos, ou digite `exportmanager` no terminal.
2. O popup **Export Manager** abre mostrando os cartões JSON e DXF lado a lado, cada um listando o que é exportado (e, para DXF, o que é deixado de fora).
3. Clique em um cartão para selecionar o formato — **JSON** ou **DXF**.
4. Clique no botão **Export \<FORMAT\>**. O arquivo é baixado automaticamente para sua pasta de downloads padrão.

Pressione `Escape` para fechar o popup sem exportar.

## Escolhendo um formato

| Formato | Extensão | Melhor para | Limitações |
|---------|----------|-------------|------------|
| **JSON** *(nativo)* | `.json` | Salvar o trabalho para reabrir no KulmanLab CAD | Não compatível com outras ferramentas CAD |
| **DXF** | `.dxf` | Compartilhar com FreeCAD, LibreCAD, etc. | Hachuras, cotas, líderes e texto não são exportados |

**Quando usar JSON:** sempre que quiser salvar uma cópia completa do seu trabalho. JSON é o formato nativo do KulmanLab e preserva cada entidade exatamente — incluindo cotas, líderes, hachuras e todos os dados de camada.

**Quando usar DXF:** quando você precisar entregar o desenho para alguém que usa outro aplicativo CAD. O arquivo exportado usa o formato DXF AC1032 e pode ser aberto na maioria das ferramentas compatíveis com DXF.

## O que é exportado por formato

### Exportação JSON

Cada tipo de entidade está incluído:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Cotas (linear, alinhada, contínua, raio, diâmetro)
- Leaders (multileaders)
- Hatches, incluindo seu padrão, escala, ângulo e origem
- Layers e Linetypes

### Exportação DXF

Apenas entidades geométricas estão incluídas:

- Lines, Circles, Arcs, Ellipses, Polylines (exportadas como `LWPOLYLINE`), Splines
- Layers e Linetypes

**Não exportado para DXF:** hachuras, cotas, leaders e texto. Cotas e leaders usam estruturas de dados específicas do KulmanLab que não podem ser representadas fielmente em DXF padrão; hachuras ainda não são exportadas para DXF de forma alguma, embora sejam importadas dele; a exportação de texto também ainda não foi implementada. Se o seu desenho tiver algum destes, use JSON ou o [Print Manager](../print-manager/) para capturá-los.

## Nome do arquivo exportado

O arquivo baixado recebe o nome do arquivo de desenho atual (ex. `myplan.json`). A extensão muda para corresponder ao formato escolhido.

## Diferença entre Export Manager e Print Manager

| Recurso | Export Manager | Print Manager |
|---------|-----------------|-----------------|
| Saída | Arquivo fonte vetorial (.dxf / .json) | Imagem raster (.png / .jpeg / .webp / .pdf) |
| Editável em outras ferramentas | Sim (DXF) | Não |
| Preserva layers e linetypes | Sim | Não (renderizado plano) |
| Captura cotas e leaders | Somente JSON | Sim |

Use o **Export Manager** quando precisar de um arquivo editável. Use o [Print Manager](../print-manager/) quando precisar de um instantâneo visual.

## Comandos relacionados

- [Import](../import/) — abrir um arquivo DXF ou JSON
- [Print Manager](../print-manager/) — exportar a tela como uma imagem PNG, JPEG, WebP ou PDF
- [File Manager](../file-manager/) — navegar por desenhos salvos no armazenamento do navegador
