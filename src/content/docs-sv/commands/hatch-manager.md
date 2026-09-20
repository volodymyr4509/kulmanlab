---
title: Hatch Manager-kommando — Bläddra och ladda upp .pat-mönster
description: Hatch Manager-kommandot öppnar en dialogruta för att bläddra bland hatch-mönster med en live swatch-förhandsvisning, och för att ladda upp dina egna .pat-mönsterfiler. Uppladdade filer sparas i webbläsaren och skuggar inbyggda mönster med samma namn.
keywords: [hatch manager, anpassat hatch-mönster CAD, ladda upp pat-fil, acad.pat, hatch-mönsterbibliotek, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

Kommandot `Skrafferingshanterare` öppnar en dialogruta för att bläddra bland hatch-mönster med en live swatch-förhandsvisning, och för att ladda upp dina egna `.pat`-mönsterfiler att använda med [Hatch](../hatch/).

## Öppna Hatch Manager

Skriv `Skrafferingshanterare` i terminalen. Detta är skilt från mönsterväljaren som öppnas när du klickar på **Pattern**-chippet på en hatch — väljaren väljer ett mönster för en hatch, Hatch Manager är där du lägger till eller tar bort `.pat`-filer.

## Mönstergrupper

| Grupp | Innehåll |
|-------|----------|
| **User** | Mönster från dina egna uppladdade `.pat`-filer, undergrupperade efter vilken fil varje mönster kom från (visas först efter att du laddat upp en) |
| **Standard** | `SOLID` plus denna rittings egen mönstertabell — varje ny ritning börjar med samma inbyggda bibliotek, precis som dess lager och linjetyper |

Klicka på vilket mönster som helst i listan (eller använd `↑`/`↓`) för att förhandsvisa det till höger — en swatch ritad med samma kod som ritytan fylls med, så det är exakt vad ritningen kommer att visa, plus mönstrets namn, beskrivning och linjeantal.

## Ladda upp en anpassad mönsterfil

1. Klicka på **Add .pat File** i dialogrutans sidfot.
2. Välj en `.pat`-fil — standardformatet för hatch-mönster. En enskild fil definierar ofta många namngivna mönster samtidigt; de visas alla som separata poster grupperade under den filens namn.
3. Uppladdade filer sparas permanent i webbläsaren (IndexedDB), sorterade med senast tillagda först, och laddas automatiskt om nästa gång du öppnar KulmanLab CAD.

Att ladda upp en fil som definierar ett mönster med samma namn som ett inbyggt **skuggar** standardvärdet — detta är det stödda sättet att få Autodesks officiella mönsterdefinitioner: ladda upp en riktig `acad.pat`, så tar dess versioner av ANSI31 och de andra standardnamnen över från KulmanLabs egna approximationer.

Om en ritning refererar till ett mönsternamn som inte finns i ditt bibliotek — importerat från en DXF som använde ett mönster från en `acad.pat` du inte laddat upp — renderas hatchen ändå, med `ANSI31` som ersättning, i stället för att falla tillbaka till en platt, mönsterlös fyllning.

## Ta bort en mönsterfil

Klicka på **×** bredvid ett filnamn i gruppen **User** för att ta bort den tillsammans med varje mönster den definierade. Varje hatch som redan använder ett av dessa mönster faller omedelbart tillbaka till `ANSI31`. Inbyggda **Standard**-mönster kan inte tas bort.

## Tangentbordsreferens

| Tangent | Åtgärd |
|---------|--------|
| `↑` / `↓` | Flytta markeringen upp eller ner i mönsterlistan |
| `Escape` | Stäng Hatch Manager |

## Relaterade kommandon

- [Hatch](../hatch/) — fyller ett klickat område med det för närvarande valda mönstret
- [Font Manager](../font-manager/) — samma uppladdnings-/bläddringsmönster, för anpassade typsnitt istället för hatch-mönster
