---
title: Export — Baixar Desenhos como DXF ou JSON no KulmanLab CAD
description: O comando Export baixa o desenho atual como arquivo DXF () ou JSON (nativo). JSON preserva todas as entidades incluindo cotas e linhas de chamada; DXF é compatível com e outras ferramentas CAD.
keywords: [exportar DXF, exportar arquivo CAD, baixar DXF navegador, salvar DXF online, exportar JSON CAD, KulmanLab export, baixar arquivo CAD, download DXF, salvar desenho em arquivo]
group: file
order: 5
---

# Export

O comando **Export** baixa o desenho atual para o seu sistema de arquivos. Dois formatos estão disponíveis: **DXF** para compatibilidade com outras ferramentas CAD e **JSON** para salvamentos com fidelidade completa dentro do KulmanLab CAD.

## Como exportar

1. Clique no botão **Export** na barra de ferramentas (ícone de download) no painel Arquivo.
2. O popup **Gerenciador de exportação** se abre.
3. Clique num cartão de formato para selecionar o formato — **JSON** ou **DXF**.
4. Clique no botão **Export**. O arquivo é baixado automaticamente para a pasta de downloads padrão.

## Escolhendo um formato

| Formato | Extensão | Ideal para | Limitações |
|---------|----------|------------|------------|
| **JSON** *(nativo)* | `.json` | Salvar trabalho para reabrir no KulmanLab CAD | Não compatível com outras ferramentas CAD |
| **DXF** | `.dxf` | Compartilhar com , FreeCAD, LibreCAD, etc. | Cotas e linhas de chamada não são exportadas |

**Quando usar JSON:** sempre que quiser salvar uma cópia completa do seu trabalho. JSON é o formato nativo do KulmanLab e preserva cada entidade exatamente — incluindo cotas, líderes e todos os dados de camada.

**Quando usar DXF:** quando precisar entregar o desenho a alguém que usa outro aplicativo CAD. O arquivo exportado usa o formato DXF AC1012 e pode ser aberto na maioria das ferramentas compatíveis com DXF.

## O que é exportado por formato

### Exportação JSON

Todos os tipos de entidade são incluídos:

- Linhas, círculos, arcos, elipses, polilinhas, splines, texto
- Cotas (linear, alinhada, contínua, raio, diâmetro)
- Multileaders
- Definições de camada e tabelas de tipo de linha

### Exportação DXF

Apenas entidades geométricas são incluídas:

- Linhas, círculos, arcos, elipses, polilinhas (exportadas como `LWPOLYLINE`), splines, texto
- Definições de camada e tabelas de tipo de linha

**Não incluídos no DXF:** entidades de cota e multileaders. Eles usam estruturas de dados específicas do KulmanLab que não podem ser representadas fielmente no DXF padrão. Se o seu desenho tem anotações, use JSON ou [Print](../print/) para capturá-las visualmente.

## Nome do arquivo exportado

O arquivo baixado é nomeado após o arquivo de desenho atual (ex.: `meuplano_Mai22_14:30:00.json`). A extensão muda para corresponder ao formato escolhido.

## Diferença entre Export e Print

| Recurso | Export | Print |
|---------|--------|-------|
| Saída | Arquivo fonte vetorial (.dxf / .json) | Imagem raster (.png / .jpeg / .webp / .pdf) |
| Editável em outras ferramentas | Sim (DXF) | Não |
| Preserva camadas e tipos de linha | Sim | Não (renderizado plano) |
| Captura cotas e líderes | Apenas JSON | Sim |

Use **Export** quando precisar de um arquivo editável. Use [Print](../print/) quando precisar de um instantâneo visual.

## Comandos relacionados

- [Import](../import/) — abrir um arquivo DXF ou JSON
- [Print](../print/) — exportar o canvas como imagem PNG, JPEG, WebP ou PDF
- [Files](../files/) — navegar desenhos salvos no armazenamento do navegador
