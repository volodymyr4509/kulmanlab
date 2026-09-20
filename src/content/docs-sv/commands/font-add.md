---
title: FontAdd — Ladda upp ett anpassat TTF-typsnitt från terminalen
description: FontAdd-kommandot öppnar systemets filväljare för att ladda upp ett .ttf-typsnitt, utan att först öppna dialogrutan Font Manager. Det är samma uppladdning som knappen "Add Font" i Font Manager utlöser, tillgänglig här som ett eget terminalkommando.
keywords: [font add kommando, fontadd kommando, ladda upp ttf terminal, anpassat typsnitt CAD, kulmanlab]
group: style
order: 3
---

# FontAdd

Kommandot `LäggTillTeckensnitt` öppnar systemets filväljare för att ladda upp ett anpassat `.ttf`-typsnitt, utan att först öppna dialogrutan [Font Manager](../font-manager/). Det är samma uppladdning som knappen **Add Font** i Font Manager utlöser — FontAdd är bara en direkt väg dit från terminalen.

## Ladda upp ett typsnitt

1. Skriv `LäggTillTeckensnitt` i terminalen, eller klicka på **Add Font** i sidfoten på dialogrutan [Font Manager](../font-manager/).
2. Välj en `.ttf`-fil i systemets filväljare. Endast TrueType-typsnitt stöds — `.otf` och `.woff`/`.woff2` stöds inte.

Kommandot avslutas så snart filväljaren öppnas — det följs inte av något ytterligare klick eller terminalinmatning. Typsnittet registreras och visas i gruppen **User** så snart filen har valts.

## Vad som händer vid uppladdning

- Filnamnet (utan filändelsen) blir typsnittets namn. Att ladda upp `MyFont.ttf` lägger till ett typsnitt med namnet `MyFont`.
- Att ladda upp en fil vars namn matchar ett befintligt anpassat typsnitt **ersätter** det.
- Typsnittet sparas permanent i webbläsaren (IndexedDB) och laddas automatiskt igen nästa gång du öppnar KulmanLab CAD — det är inte kopplat till den aktuella ritningen.

## Tangentbordsreferens

FontAdd har ingen egen tangentbordsinteraktion — hela kommandot består av webbläsarens inbyggda filväljardialog. Att avbryta den dialogrutan (eller inte välja någon fil) lämnar typsnittslistan oförändrad.

## Relaterade kommandon

| Kommando | Vad det gör |
|---------|-------------|
| [Font Manager](../font-manager/) | Bläddra bland, förhandsgranska, välj och ta bort typsnitt, inklusive dina egna uppladdningar |
| [Text](../text/) | Placerar de textetiketter som typsnittsvalen tillämpas på |
