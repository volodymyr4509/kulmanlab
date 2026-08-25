---
title: ClipboardPaste-kommandoen — Indsæt entiteter fra systemets udklipsholder
description: Kommandoen ClipboardPaste læser entiteter, som ClipboardCopy tidligere har skrevet, fra systemets udklipsholder og placerer dem på et valgt indsættelsespunkt, og tilføjer de lag og linjetyper, som måltegningen mangler.
keywords: [indsæt udklipsholder CAD, indsæt entiteter mellem tegninger, indsæt CAD-objekter, Ctrl+V CAD, indsæt mellem faner, sammenlægning af lag ved indsættelse, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Kommandoen `ClipboardPaste` læser de entiteter, som [ClipboardCopy](../clipboard-copy/) skrev til **systemets udklipsholder**, og placerer dem i den aktuelle tegning på et punkt, du vælger. Fordi udklipsholderen er systemets rigtige, kan kilden være en anden tegning, en anden browserfane eller en session fra tidligere på dagen.

## Sådan indsætter du

1. Tryk `Ctrl+V` (`Cmd+V` på macOS), eller skriv `ClipboardPaste` i terminalen.
2. Prompten viser **reading clipboard…**, mens browseren overdrager udklipsteksten.
3. Når den er indlæst, skifter prompten til **pick insertion point**, og en forhåndsvisning af geometrien følger markøren.
4. **Klik** for at placere entiteterne. De føjes til tegningen og forbliver markerede.

Forhåndsvisningen er forankret i kopiens **referencepunkt** — nederste venstre hjørne af den oprindelige markerings samlede udstrækning. Det hjørne ligger under markøren, så den indbyrdes placering af de kopierede entiteter bevares nøjagtigt.

## Hvad der sker ved indsættelse

| Trin | Adfærd |
|------|--------|
| **Nye identiteter** | Hver indsat entitet får et nyt id, så to indsættelser giver to uafhængige sæt |
| **Forskydning** | Entiteterne forskydes med markør − referencepunkt |
| **Sammenlægning af lag** | Hvert refereret lag, der mangler i måltegningen, tilføjes efter navn |
| **Sammenlægning af linjetyper** | Hver refereret linjetype, der mangler i måltegningen, tilføjes efter navn |
| **Markering** | Den tidligere markering ryddes, og de indsatte entiteter bliver markeringen |

### Sammenlægning af lag og linjetyper

Manglende tabelposter tilføjes; **eksisterende lades i fred**. Bærer udklipsholderen et lag ved navn `WALLS` i rødt, og måltegningen allerede har et `WALLS` i blåt, vinder måltegningens definition, og de indsatte entiteter slutter sig til det — de bliver blå. En indsættelse omdefinerer intet i måltegningen.

Det har betydning, når man kopierer mellem tegninger med forskellige lagkonventioner: tjek [Layer Manager](../layer-manager/) efter en indsættelse på tværs af tegninger, hvis farverne ikke blev som forventet.

## Når udklipsholderen ikke har noget at indsætte

ClipboardPaste accepterer kun indhold, som ClipboardCopy har lavet. Alt andet i udklipsholderen — ren tekst, et link, et billede, JSON fra et andet program — afvises, og terminalen melder:

```
Clipboard has no copied entities
```

Nægter browseren adgang til udklipsholderen helt, lyder beskeden i stedet **Clipboard access denied**. Begge afslutter kommandoen uden at ændre tegningen.

## Tastaturoversigt

| Tast | Handling |
|------|----------|
| `Ctrl+V` / `Cmd+V` | Aktivér ClipboardPaste |
| `Escape` | Annullér — entiteterne kasseres, og intet tilføjes |

At annullere under læsefasen er ufarligt: svarer udklipsholderen først, efter du allerede har annulleret eller startet en anden kommando, kasseres det sene resultat i stedet for at forstyrre det, der da er aktivt.

## Kopiering mellem faner

Det sædvanlige arbejdsforløb mellem tegninger:

1. Åbn kildetegningen, markér geometrien, tryk `Ctrl+C`.
2. Skift til den anden fane — eller åbn endnu en fane med appen og indlæs en anden fil.
3. Tryk `Ctrl+V` og klik på et indsættelsespunkt.

Begge faner har samme oprindelse og deler systemets udklipsholder, så intet uploades, og ingen server er indblandet. Indholdet forbliver JSON-tekst i din egen udklipsholder hele vejen.

## Understøttede entiteter

Enhver entitetstype, ClipboardCopy kan skrive, kan ClipboardPaste læse tilbage — med samme serialisering, som det indbyggede `.json`-format bruger.

## Se også

- [ClipboardCopy](../clipboard-copy/) — skrive markeringen til udklipsholderen
- [Copy](../copy/) — duplikere entiteter inden for den aktuelle tegning
- [Layer Manager](../layer-manager/) — se på de lag, en indsættelse bragte med sig
