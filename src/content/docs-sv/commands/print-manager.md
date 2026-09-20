---
title: Print Manager — Exportera ritningen som PNG, JPEG, WebP eller PDF
description: PrintManager-kommandot öppnar Print Manager — ett dedikerat exportfönster med en direktuppdaterad förhandsgranskning som exakt matchar den exporterade filen, en Kvalitet/DPI-inställning, formatväljare, en Default/Monochrome/Blueprint-utskriftsstil och valfri områdesmarkering. Stöder PNG, JPEG, WebP och PDF.
keywords: [CAD exportera PNG, CAD exportera PDF, skriv ut CAD-ritning, print manager, utskriftskvalitet DPI, monokrom export, blueprint utskriftsstil, kulmanlab export]
group: file
order: 4
---

# Print Manager

`Utskriftshanterare`-kommandot öppnar **Print Manager** — ett dedikerat exportfönster med en direktuppdaterad förhandsgranskningsyta, formatväljare (PNG / JPEG / WebP / PDF), en Style-väljare (Default / Monochrome / Blueprint) och valfri områdesbeskärning. Ingenting skickas till en fysisk skrivare — resultatet laddas ner som en fil.

## Öppna Print Manager

Klicka på verktygsfältsknappen **Print** eller skriv `Utskriftshanterare` i terminalen. Print Manager öppnas omedelbart och visar en förhandsgranskning av den aktuella vyporten.

Förhandsgranskningen renderas via exakt samma kodväg, i exakt samma pixelupplösning, som filen du så småningom exporterar — att ändra Quality, Style eller exportområdet renderar om förhandsgranskningen direkt, så det du ser är det som laddas ner, inte en approximation av det.

## Print Managers layout

Fönstret har två paneler:
- **Vänster sidofält** — alla exportkontroller.
- **Höger panel** — förhandsgranskningsyta som uppdateras i realtid när du ändrar inställningar.

### Kontroller i sidofältet

| Kontroll | Beskrivning |
|---------|-------------|
| **Change Area** | Beskär till en anpassad rektangel på ritytan (se nedan) — beskär faktiskt den exporterade bilden, även på en layout med pappersyta, inte bara förhandsgranskningen på skärmen |
| **Quality**-rullgardinsmeny | Ställer in exportupplösningen (se nedan) |
| **Style**-rullgardinsmeny | Default, Monochrome eller Blueprint — se *Utskriftsstilar* nedan. Monochrome som standard för rent utskriftsresultat |
| **Format**-rullgardinsmeny | PNG, JPEG, WebP eller PDF |
| **Export**-knapp | Generera och ladda ner filen |

## Utskriftsstilar

**Style**-rullgardinsmenyn styr både bläckfärgen entiteter ritas med och sidbakgrunden:

| Stil | Bläck | Sidbakgrund |
|------|-------|-------------|
| **Default** | Varje entitets egen färg | Vit |
| **Monochrome** *(standard)* | Enfärgad svart, oavsett entitets-/lagerfärg | Vit |
| **Blueprint** | Enfärgad vit, oavsett entitets-/lagerfärg | Djupt preussiskt blått, med ett svagt referensrutnät |

Blueprint återskapar utseendet hos ett traditionellt cyanotypi-arkitekturtryck — vita linjer på ett mörkblått ark. Dess referensrutnät är dimensionerat i förhållande till sidstorleken snarare än DPI, så det ser lika tätt ut vid vilken Quality-inställning som helst istället för att bli tätare med ökande upplösning.

## Kvalitet och upplösning

Rullgardinsmenyn **Quality** ställer in vilken DPI exporten renderas i:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(standard)* | 150 |
| Presentation | 300 |
| Max | 600 |

Högre Quality ger en större, skarpare bild i samma fysiska storlek — linjetjocklekar skalas tillsammans med upplösningen, så en linje behåller samma *fysiska* tjocklek på papper vid vilken Quality-inställning som helst, istället för att se tunnare ut när DPI ökar. Det enda undantaget är en hårlinje (linjetjocklek `0`), som traditionellt definieras som "den tunnaste linjen utenheten kan rita" — den förblir en fast bredd på 1 pixel på varje Quality-nivå, precis som den beter sig på ritytan live.

Att ändra Quality renderar om förhandsgranskningen omedelbart, så du ser den faktiska skärpan (och avvägningen i filstorlek) innan du exporterar.

## Välja ett anpassat exportområde

Som standard visar förhandsgranskningen den omslutande rektangeln för alla objekt i modellrymden — samma utsträckning som [Fit](../fit/) zoomar till — eller hela arket i en layout. För att exportera ett visst område:

1. Klicka på **Change Area** — Print Manager döljs och ritytan blir interaktiv.
2. **Klicka på det första hörnet** av exportrektangeln.
3. **Klicka på det motsatta hörnet** — Print Manager öppnas igen med det valda området i förhandsgranskningen.

Tryck `Escape` under områdesmarkering för att avbryta och återställa det föregående området.

Förhandsgranskningsytan ändrar storlek dynamiskt för att matcha det valda områdets **exakta bildförhållande**, så förhandsgranskningen är pixelexakt.

Det valda området kommer ihåg separat för modellrymden och för varje layout tills du laddar om sidan — se [ChangePrintArea](../change-print-area/).

## Exportformat

| Format | Bäst för | Anteckningar |
|--------|----------|-------|
| **PNG** | Förlustfri, skarpa linjer | Stilens sidbakgrund inbakad, ingen transparens |
| **JPEG** | Mindre fil för delning | 95 % kvalitet, lätt komprimering |
| **WebP** | Minsta filen för webben | Samma 95 % kvalitet, bättre komprimering än JPEG |
| **PDF** | Utskriftsklara dokument | Bild inbäddad i en PDF-behållare vid vald Quality's DPI, dimensionerad så att sidan skrivs ut i sann fysisk skala |

Den exporterade filen namnges `kulman-<tidsstämpel>.<filändelse>` och laddas ner automatiskt.

## Exportupplösning och bakgrund

- **Model space-/vyport-export**: begränsad till 2000 × 2000 pixlar vid standard Normal-kvalitet (150 DPI), skalad proportionellt till det valda området; gränsen skalas också med Quality — Draft har en lägre gräns, Presentation och Max en högre (upp till 8000 × 8000 vid Max/600 DPI).
- **Layout-export (pappersyta)**: dimensionerad direkt utifrån layoutens pappersmått vid vald DPI — t.ex. exporteras ett A4-ark (210 × 297 mm) vid Normal-kvalitet på cirka 1240 × 1754 px — och omfattas därmed inte av vyportens gräns på 2000 px.
- Bakgrunden följer den valda utskrifts-**Style** — vit för Default och Monochrome, djupt preussiskt blått för Blueprint (se *Utskriftsstilar* ovan).
- Lager markerade som **non-plotting** exkluderas från exporten.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Escape` (under områdesmarkering) | Avbryt områdesmarkering, återställ föregående område |
| `Escape` (i Print Manager) | Stäng Print Manager |
