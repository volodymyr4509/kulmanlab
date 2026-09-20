---
title: ClipboardCopy-kommandoen — Kopiér entiteter til systemets udklipsholder
description: Kommandoen ClipboardCopy skriver de markerede entiteter til systemets udklipsholder som JSON-tekst sammen med de lag og linjetyper, de refererer til, så de kan indsættes i en anden tegning eller en anden browserfane med ClipboardPaste.
keywords: [kopiér udklipsholder CAD, kopiér entiteter mellem tegninger, kopiér CAD-objekter til udklipsholder, Ctrl+C CAD, kopiér mellem faner, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Kommandoen `KopierTilUdklipsholder` skriver de markerede entiteter til din **systemudklipsholder** som JSON-tekst. Fordi den bruger den rigtige udklipsholder og ikke en buffer i hukommelsen, overlever den kopierede geometri uden for tegningen: indsæt den i en anden fil, en anden browserfane eller et vindue, du åbner senere, med [ClipboardPaste](../clipboard-paste/).

Det er forskellen fra [Copy](../copy/): Copy duplikerer entiteter inde i den aktuelle tegning i én bevægelse, mens ClipboardCopy lægger dem et sted, hvor de kan hentes fra en helt anden tegning.

## To måder at begynde på

**Markér først, kopiér så** — den hurtige vej:

1. Markér en eller flere entiteter på tegnefladen.
2. Tryk `Ctrl+C` (`Cmd+C` på macOS), eller skriv `KopierTilUdklipsholder` i terminalen.
3. Entiteterne skrives til udklipsholderen med det samme, og kommandoen slutter.

**Aktivér først, markér så** — begynd uden markering:

1. Tryk `Ctrl+C` eller skriv `KopierTilUdklipsholder` med tom markering.
2. Prompten viser **pick objects to copy — Enter or Space to confirm**.
3. **Markér objekter** — klik for at tage enkelte entiteter ind i eller ud af markeringen, eller træk for at markere efter område.
4. Tryk **Enter** eller **Space** for at kopiere markeringen og afslutte.

At trykke **Enter** eller **Space** uden markering afslutter blot kommandoen uden at røre udklipsholderen.

## Hvad der kopieres

Indholdet i udklipsholderen bærer mere end ren geometri, så en indsættelse i en fremmed tegning stadig ser rigtig ud:

| Del | Formål |
|-----|--------|
| **Entiteter** | Den fuldstændige serialiserede form af hver markeret entitet |
| **Referencepunkt** | Nederste venstre hjørne af markeringens samlede udstrækning — det, ClipboardPaste forankrer til markøren |
| **Lag** | Kun de lag, de kopierede entiteter faktisk refererer til, efter navn |
| **Linjetyper** | Kun de linjetyper, de kopierede entiteter faktisk refererer til, efter navn |

Kun *refererede* tabelposter følger med kopien — ikke kildetegningens fulde lag- og linjetypetabeller. Skraveringsmønstre pakkes slet ikke med og behøver det ikke: en tegnings mønstertabel er det indbyggede standardsæt, og de `.pat`-filer, du har uploadet, ligger i et lager pr. bruger, som allerede deles mellem faner, så en indsat skravering finder selv sit mønster.

## Bekræftelse

Ved vellykket kopiering melder terminalen, hvor mange entiteter der blev skrevet:

```
3 entities copied to clipboard
```

Nægter browseren adgang til udklipsholderen, viser terminalen **Copy failed: clipboard access denied**, og intet skrives. Det er en tilladelsesbeslutning fra browseren, ikke en tegningsfejl — se [Udklipsholdertilladelser](#udklipsholdertilladelser) nedenfor.

## Markering under kommandoen

| Metode | Adfærd |
|--------|--------|
| **Klik** | Tager entiteten under markøren ind i eller ud af markeringen |
| **Træk mod højre** (streng) | Tilføjer entiteter, der ligger helt inde i rammen |
| **Træk mod venstre** (krydsende) | Tilføjer entiteter, der skærer rammens kant |
| **Enter** / **Space** | Bekræfter markeringen og kopierer |

## Tastaturoversigt

| Tast | Handling |
|------|----------|
| `Ctrl+C` / `Cmd+C` | Aktivér ClipboardCopy |
| `Enter` / `Space` | Kopiér den aktuelle markering, eller afslut hvis intet er markeret |
| `Escape` | Annullér uden at kopiere |

## Udklipsholdertilladelser

At skrive til systemets udklipsholder kræver browserens tilladelse. I praksis gives en kopiering udløst af et tastetryk uden spørgsmål i nutidens skrivebordsbrowsere, men en side, der har mistet fokus, eller en browser med strenge udklipsindstillinger kan nægte. Dukker beskeden om nægtet adgang op, så klik én gang på tegnefladen for at give siden fokus og prøv igen.

Da indholdet er almindelig JSON-tekst, erstattes det af alt andet, du kopierer bagefter — en tekstlinje, et link. Kopiér igen, før du indsætter, hvis du har brugt udklipsholderen til noget andet i mellemtiden.

## Understøttede entiteter

ClipboardCopy virker med alle entitetstyper. Entiteter serialiseres med samme mekanisme, som den indbyggede `.json`-eksport bruger, så intet går tabt undervejs.

## Se også

- [ClipboardPaste](../clipboard-paste/) — læse udklipsholderen tilbage og placere entiteterne
- [Copy](../copy/) — duplikere entiteter inden for den aktuelle tegning
- [Export Manager](../export-manager/) — gemme en hel tegning som DXF eller JSON
