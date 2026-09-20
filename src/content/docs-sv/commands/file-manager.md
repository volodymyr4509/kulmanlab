---
title: File Manager — Miniatyrrutnät, Byt Namn & Ta Bort
description: FileManager-kommandot öppnar ett miniatyrrutnät över varje sparad ritning — klicka på en miniatyr för att öppna den, byt namn direkt, eller ta bort med bekräftelse.
keywords: [filhanterare CAD, senaste filer CAD, byt namn på ritning, ta bort ritning, miniatyrrutnät CAD, återställ ritning, öppna DXF igen, webbläsarlagring CAD, KulmanLab filer, sparade ritningar, IndexedDB CAD, säkerhetskopiera CAD-ritning]
group: file
order: 3
---

# File Manager

`Filhanterare`-kommandot öppnar ett **miniatyrrutnät** över alla ritningar som har sparats i webbläsarens lokala lagring, sorterat efter när var och en senast sparades. Använd det för att återöppna en tidigare ritning, byta namn på den, eller ta bort den.

## Öppna File Manager

- Skriv `Filhanterare` i terminalen, **eller**
- Klicka på verktygsfältsknappen **File Manager** (historikikon) i File-panelen högst upp på skärmen.

Panelen öppnas på vänster sida av ritytan och stängs automatiskt så snart du startar ett annat kommando eller [importerar](../import/) en fil — så den aldrig ligger kvar över en ritning den ännu inte listar. Den öppnas igen med en ny lista varje gång.

## Miniatyrrutnätet

Varje sparad ritning är ett kort som visar en direktrenderad miniatyr, dess namn och när den senast uppdaterades. Miniatyrer genereras direkt varje gång panelen öppnas — inget är förrenderat eller lagrat — så ett kort visar en platshållarikon en kort stund medan dess miniatyr ritas. Samma platshållare visas också om genereringen misslyckas, eller om ritningen faktiskt inte har några entiteter ännu.

| Åtgärd | Hur |
|--------|-----|
| **Öppna** en ritning | Klicka på dess miniatyr — ersätter det aktuella innehållet på ritytan |
| **Byt namn** | Klicka på pennikonen, eller dubbelklicka på namnet |
| **Ta bort** | Klicka på papperskorgsikonen, bekräfta sedan |

Om inga filer har sparats ännu visar panelen "No files saved". Med fler filer än vad som får plats på en skärm visas kontrollerna **Page 1 of N** under rutnätet.

Kortet för filen som för närvarande är öppen i editorn är markerat med en accentfärgad ring och saknar knapp för att ta bort — att ta bort den öppna filen skulle radera dess lagrade data medan ritytan fortfarande visade den, och nästa ändring skulle bara spara tillbaka den direkt. Att byta namn på den går fortfarande bra.

## Ta bort en fil

Att klicka på papperskorgsikonen tar inte bort filen direkt — det aktiverar en bekräftelseöverlagring på det kortet ("Delete this file?" med knapparna **Delete** / **Cancel**), eftersom borttagning är permanent och inte kan ångras. Att klicka på **Cancel**, klicka på ett annat korts papperskorgsikon, eller klicka någon annanstans på kortet avbryter alla den väntande bekräftelsen utan att något tas bort.

## Byta namn på en fil

Klicka på pennikonen (eller dubbelklicka på filnamnet) för att redigera det direkt, tryck sedan på **Enter** för att bekräfta eller **Escape** för att avbryta. Ett namnbyte avvisas om det nya namnet är:

- tomt, eller längre än 100 tecken,
- redan används av en annan sparad fil (skiftlägesokänsligt),
- slutar med en punkt, eller
- ett Windows-reserverat enhetsnamn såsom `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, eller `LPT1`–`LPT9`.

Tecken som inte är giltiga i ett filnamn (`\ / : * ? " < > |`) tas bort automatiskt medan du skriver. Namnbyte ändrar bara etiketten — det påverkar inte ritningens position i rutnätet, eftersom det sorteras efter senaste sparandetid, inte efter namn.

## Säkerhetskopiera ditt arbete — webbläsarlagring är inte permanent

KulmanLab sparar ritningar i **IndexedDB**, en databas inbyggd i din webbläsare:

- Filer lagras **endast lokalt på din enhet** — inget laddas upp till en server.
- Varje webbläsare och enhet har sin egen oberoende lagring. En ritning som sparats i Chrome på en dator visas inte i Firefox, eller på en annan enhet.
- Denna lagring **kan raderas utan förvarning** — genom att rensa webbplatsdata eller webbhistorik, brist på diskutrymme, användning av ett privat/inkognitofönster, ominstallation av webbläsare eller operativsystem, eller byte av enhet. Ingen av dessa situationer ger dig en chans att återställa det som fanns där.

**Det enda tillförlitliga sättet att hålla en ritning säker är att [exportera](../export-manager/) den till din egen lagring.** Använd `.json` (KulmanLabs egna format) när det är möjligt — det bevarar varje entitet exakt; använd `.dxf` när du behöver kompatibilitet med andra CAD-verktyg. Gör detta för allt du skulle bli ledsen över att förlora, och innan du rensar webbläsardata, byter webbläsare eller enhet, eller lägger undan datorn för ett tag.

## Automatisk filinläsning vid uppstart

När du öppnar KulmanLab CAD laddar appen automatiskt den **senast ändrade filen** från lagringen. Du behöver inte manuellt öppna den från File Manager varje gång.

## Hantera lagring

Det finns ingen fast gräns för antalet ritningar du kan spara, men webbläsarens lagring är begränsad. Om du märker lagringsvarningar, ta bort äldre filer från File Manager — eller ännu bättre, exportera dem först så att inget går förlorat.

För att ta bort alla sparade ritningar på en gång, använd kommandot [WipeStorage](../wipestorage/).

## Filnamn

Nya och importerade filer får ett enkelt namn — ingen tidsstämpel bakas in. Om det namnet redan är taget läggs ett Finder/Explorer-liknande suffix till automatiskt (`plan (2)`, `plan (3)`, …) så att inget skrivs över. Du kan alltid ge en fil ett tydligare namn senare genom att använda [byt namn](#byta-namn-på-en-fil).

## Relaterade kommandon

- [Import](../import/) — ladda en ritning från ditt filsystem till webbläsarens lagring
- [Export Manager](../export-manager/) — ladda ner en ritning till ditt filsystem
- [New File](../new-file/) — starta en tom ritning (sparas också automatiskt)
- [WipeStorage](../wipestorage/) — rensa alla sparade filer från webbläsarens lagring
