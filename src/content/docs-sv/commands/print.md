---
title: Print — Exportera ritningen som PNG, JPEG, WebP eller PDF
description: Print-kommandot öppnar Print Manager — ett dedikerat exportfönster med en direktuppdaterad förhandsgranskning, formatväljare, monokrom-växling och valfri områdesmarkering. Exporterar upp till 2000×2000 px. Stöder PNG, JPEG, WebP och PDF.
keywords: [CAD exportera PNG, CAD exportera PDF, skriv ut CAD-ritning, print manager, monokrom export, kulmanlab export]
group: file
order: 4
---

# Print

`print`-kommandot öppnar **Print-hanteraren** — ett dedikerat exportfönster med en direktuppdaterad förhandsgranskningsyta, formatväljare (PNG / JPEG / WebP / PDF), monokrom-växling och valfri områdesbeskärning. Ingenting skickas till en fysisk skrivare — resultatet laddas ner som en fil.

## Öppna Print-hanteraren

Klicka på verktygsfältsknappen **Print** eller skriv `print` i terminalen. Print-hanteraren öppnas omedelbart och visar en förhandsgranskning av den aktuella vyporten.

## Print-hanterarens layout

Fönstret har två paneler:
- **Vänster sidofält** — alla exportkontroller.
- **Höger panel** — förhandsgranskningsyta som uppdateras i realtid när du ändrar inställningar.

### Kontroller i sidofältet

| Kontroll | Beskrivning |
|---------|-------------|
| **Change Area** | Beskär till en anpassad rektangel på ritytan (se nedan) |
| **Monochrome**-växling | Konvertera alla färgade linjer till svart — påslagen som standard för rent utskriftsresultat |
| **Format**-rullgardinsmeny | PNG, JPEG, WebP eller PDF |
| **Export**-knapp | Generera och ladda ner filen |

## Välja ett anpassat exportområde

Som standard visar förhandsgranskningen exakt det som var synligt på ritytan när du öppnade Print-hanteraren. För att exportera ett specifikt område:

1. Klicka på **Change Area** — Print-hanteraren döljs och ritytan blir interaktiv.
2. **Klicka på det första hörnet** av exportrektangeln.
3. **Klicka på det motsatta hörnet** — Print-hanteraren öppnas igen med det valda området i förhandsgranskningen.

Tryck `Escape` under områdesmarkering för att avbryta och återställa det föregående området.

Förhandsgranskningsytan ändrar storlek dynamiskt för att matcha det valda områdets **exakta bildförhållande**, så förhandsgranskningen är pixelexakt.

## Exportformat

| Format | Bäst för | Anteckningar |
|--------|----------|-------|
| **PNG** | Förlustfri, skarpa linjer | Vit bakgrund, ingen transparens |
| **JPEG** | Mindre fil för delning | 95 % kvalitet, lätt komprimering |
| **WebP** | Minsta filen för webben | Samma 95 % kvalitet, bättre komprimering än JPEG |
| **PDF** | Utskriftsklara dokument | Bild inbäddad vid 150 DPI inuti PDF-behållaren |

Den exporterade filen namnges `kulman-<tidsstämpel>.<filändelse>` och laddas ner automatiskt.

## Exportupplösning och bakgrund

- Maximal upplösning: **2000 × 2000 pixlar**, skalad proportionellt till det valda området.
- Bakgrunden är alltid **vit**.
- Lager markerade som **non-plotting** exkluderas från exporten.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Escape` (under områdesmarkering) | Avbryt områdesmarkering, återställ föregående område |
| `Escape` (i Print-hanteraren) | Stäng Print-hanteraren |
