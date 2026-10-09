---
title: Import — Abrir Arquivos DXF ou JSON no KulmanLab CAD
description: Use o comando Import para abrir arquivos DXF ou JSON do KulmanLab no KulmanLab CAD. Suporta linhas, círculos, arcos, polilinhas, splines, texto, cotas e leaders.
keywords: [importar arquivo DXF, abrir DXF no navegador, importar arquivo CAD online, abrir arquivo DXF, visualizador DXF navegador, importar JSON CAD, KulmanLab import, carregar desenho]
group: file
order: 1
---

# Import

O comando **Import** carrega um desenho existente do seu sistema de arquivos local no KulmanLab CAD. Tanto o formato **DXF** padrão quanto o formato **JSON** nativo do KulmanLab são suportados.

## Como importar um arquivo

1. Clique no botão **Import** na barra de ferramentas (ícone de pasta) no painel Arquivo no topo da tela.
2. O seletor de arquivos do navegador se abre. Navegue até o arquivo de desenho e selecione-o.
3. O desenho é carregado no canvas imediatamente. A viewport se ajusta automaticamente a todas as entidades.

Alternativamente, você pode arrastar e soltar um arquivo diretamente no canvas.

## Formatos de arquivo suportados

| Formato | Extensão | Quando usar |
|---------|----------|-------------|
| **DXF** | `.dxf` | Desenhos de FreeCAD, LibreCAD, ou outras ferramentas CAD |
| **JSON** *(nativo)* | `.json` | Desenhos previamente salvos do KulmanLab CAD — fidelidade completa |

## O que é importado do DXF

O KulmanLab analisa os seguintes tipos de entidade DXF:

| Tipo de entidade | Código DXF | Notas |
|-----------------|------------|-------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |
| Hatch | `HATCH` | O nome, a escala e o ângulo do padrão são lidos; um nome que não está na sua biblioteca de padrões recorre a ANSI31. Veja [Hatch](../hatch/) |

Definições de camada e tabelas de tipo de linha também são importadas do arquivo DXF quando presentes.

Entidades que usam tipos DXF não suportados são silenciosamente ignoradas — o restante do desenho ainda é carregado.

## Nomenclatura de arquivos e armazenamento

O arquivo importado mantém seu nome original. Se esse nome já estiver em uso por outro desenho salvo, um sufixo estilo Finder/Explorer é adicionado automaticamente (`meuplano (2)`, `meuplano (3)`, …) para que a entrada existente nunca seja sobrescrita. Você pode renomear o arquivo depois pelo [File Manager](../file-manager/#renomeando-um-arquivo).

O desenho é automaticamente salvo no armazenamento do navegador (IndexedDB) após a importação, então aparece no painel [File Manager](../file-manager/) e sobrevive a recarregamentos de página.

## O que acontece com o desenho atual

Importar substitui o canvas atual. Não há mesclagem ou acréscimo. Se você tiver alterações não salvas, [exporte](../export-manager/) o desenho atual primeiro.

## Na inicialização

O KulmanLab reabre automaticamente o arquivo editado mais recentemente quando a página carrega. Se não existirem arquivos salvos, um desenho de exemplo padrão é carregado.

## Solução de problemas

| Problema | Causa provável | Solução |
|----------|---------------|---------|
| Canvas vazio após importação | Entidades DXF usam tipos não suportados (ex.: INSERT) | As entidades foram ignoradas — o terminal lista cada tipo ignorado com uma contagem, por exemplo `Could not read INSERT: 12`. Um arquivo que não é um desenho válido informa `Could not read <file>: not a valid drawing file` |
| Botão Import não faz nada | Navegador bloqueou o seletor de arquivo | Clique no botão mais uma vez; alguns navegadores requerem um novo gesto do usuário |
| Cotas parecem erradas | DXF de uma ferramenta que escreve geometria de cota não padrão | Re-exporte do aplicativo fonte usando uma versão DXF atual |

## Comandos relacionados

- [Export Manager](../export-manager/) — baixar o desenho atual como DXF ou JSON
- [File Manager](../file-manager/) — navegar e restaurar desenhos salvos no navegador
- [New File](../new-file/) — iniciar um desenho em branco
