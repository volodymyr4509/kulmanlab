---
title: Print Manager — Exportar o Desenho como PNG, JPEG, WebP ou PDF
description: O comando PrintManager abre o Print Manager — uma janela de exportação dedicada com prévia ao vivo que corresponde exatamente ao arquivo exportado, uma configuração de Qualidade/DPI, seletor de formato, um estilo de impressão Default/Monochrome/Blueprint e seleção de área opcional. Suporta PNG, JPEG, WebP e PDF.
keywords: [CAD exportar PNG, CAD exportar PDF, imprimir desenho CAD, print manager, qualidade de impressão DPI, exportar monocromático, estilo de impressão blueprint, kulmanlab export]
group: file
order: 4
---

# Print Manager

O comando `PrintManager` abre o **Print Manager** — uma janela de exportação dedicada com canvas de prévia ao vivo, seletor de formato (PNG / JPEG / WebP / PDF), um seletor de Style (Default / Monochrome / Blueprint) e recorte de área opcional. Nada é enviado a uma impressora física; a saída é baixada como um arquivo.

## Abrindo o Print Manager

Clique no botão **Print** na barra de ferramentas ou digite `PrintManager` no terminal. O Print Manager abre imediatamente mostrando uma prévia do viewport atual.

A prévia é renderizada exatamente pelo mesmo caminho de código, na mesma resolução de pixels exata, do arquivo que você acabará exportando — alterar Quality, Style ou a área de exportação renderiza a prévia novamente de imediato, então o que você vê é o que é baixado, não uma aproximação disso.

## Layout do Print Manager

A janela tem dois painéis:
- **Barra lateral esquerda** — todos os controles de exportação.
- **Painel direito** — canvas de prévia ao vivo que atualiza ao mudar as configurações.

### Controles da barra lateral

| Controle | Descrição |
|----------|-----------|
| **Mudar Área** | Recorte para um retângulo personalizado no canvas (veja abaixo) — recorta de fato a imagem exportada, inclusive em um layout com espaço de papel, não só a prévia na tela |
| Menu suspenso **Quality** | Define a resolução de exportação (veja abaixo) |
| Menu suspenso **Style** | Default, Monochrome ou Blueprint — veja *Estilos de impressão* abaixo. Monochrome por padrão para uma saída de impressão limpa |
| **Formato** (menu suspenso) | PNG, JPEG, WebP ou PDF |
| **Exportar** (botão) | Gera e baixa o arquivo |

## Estilos de impressão

O menu suspenso **Style** controla tanto a cor de tinta com que as entidades são desenhadas quanto o fundo da página:

| Estilo | Tinta | Fundo da página |
|--------|-------|------------------|
| **Default** | A cor própria de cada entidade | Branco |
| **Monochrome** *(padrão)* | Preto sólido, independentemente da cor da entidade/camada | Branco |
| **Blueprint** | Branco sólido, independentemente da cor da entidade/camada | Azul da Prússia profundo, com uma grade de referência sutil |

Blueprint reproduz o visual de uma impressão arquitetônica cianotípica tradicional — traços brancos sobre uma folha azul escura. Sua grade de referência é dimensionada em relação ao tamanho da página, não ao DPI, então aparece com a mesma densidade em qualquer configuração de Quality em vez de ficar mais densa conforme a resolução aumenta.

## Qualidade e resolução

O menu suspenso **Quality** define o DPI no qual a exportação é renderizada:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(padrão)* | 150 |
| Presentation | 300 |
| Max | 600 |

Uma Qualidade mais alta produz uma imagem maior e mais nítida no mesmo tamanho físico — as espessuras de linha aumentam junto com a resolução, então uma linha mantém a mesma espessura *física* no papel em qualquer configuração de Qualidade, em vez de parecer mais fina conforme o DPI aumenta. A única exceção é uma linha fina (espessura `0`), convencionalmente definida como "a linha mais fina que o dispositivo de saída pode desenhar" — permanece com largura fixa de 1 pixel em qualquer nível de Qualidade, exatamente como se comporta no canvas ao vivo.

Alterar a Qualidade renderiza novamente a visualização imediatamente, para que você veja a nitidez real (e o compromisso de tamanho de arquivo) antes de exportar.

## Selecionando uma área de exportação personalizada

Por padrão a prévia mostra exatamente o que estava visível no canvas quando você abriu o Print Manager. Para exportar uma região específica:

1. Clique em **Mudar Área** — o Print Manager se oculta e o canvas torna-se interativo.
2. **Clique no primeiro canto** do retângulo de exportação.
3. **Clique no canto oposto** — o Print Manager reabre com a área selecionada na prévia.

Pressione `Escape` durante a seleção de área para cancelar e restaurar a área anterior.

O canvas de prévia redimensiona dinamicamente para corresponder à **proporção exata** da área selecionada, de modo que a prévia é precisa ao pixel.

## Formatos de exportação

| Formato | Ideal para | Notas |
|---------|-----------|-------|
| **PNG** | Sem perda, linhas nítidas | Fundo da página do Style incorporado, sem transparência |
| **JPEG** | Arquivo menor para compartilhamento | Qualidade 95%, leve compressão |
| **WebP** | Arquivo menor para web | Mesma qualidade 95%, melhor compressão que JPEG |
| **PDF** | Documentos prontos para impressão | Imagem incorporada em um contêiner PDF no DPI da Quality selecionada, dimensionada para que a página seja impressa em escala física real |

O arquivo exportado é nomeado `kulman-<timestamp>.<ext>` e é baixado automaticamente.

## Resolução e fundo de exportação

- **Exportação de espaço de modelo / viewport**: limitada a 2000 × 2000 pixels na qualidade Normal padrão (150 DPI), escalada proporcionalmente à área selecionada; o limite também escala com a Quality — Draft tem um limite menor, Presentation e Max um limite maior (até 8000 × 8000 em Max/600 DPI).
- **Exportação de layout (espaço de papel)**: dimensionada diretamente a partir das dimensões de papel do layout no DPI selecionado — ex. uma folha A4 (210 × 297 mm) na qualidade Normal exporta a aproximadamente 1240 × 1754 px — portanto não está sujeita ao limite de 2000 px do viewport.
- O fundo segue o **Style** de impressão selecionado — branco para Default e Monochrome, azul da Prússia profundo para Blueprint (veja *Estilos de impressão* acima).
- Camadas marcadas como **não plotáveis** são excluídas da exportação.

## Referência de teclado

| Tecla | Ação |
|-------|------|
| `Escape` (durante seleção de área) | Cancela a seleção de área, restaura a área anterior |
| `Escape` (no Print Manager) | Fecha o Print Manager |
