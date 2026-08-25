---
title: ClipboardCopy-kommandot — Kopiera entiteter till systemets urklipp
description: Kommandot ClipboardCopy skriver de markerade entiteterna till systemets urklipp som JSON-text, tillsammans med de lager och linjetyper de refererar till, så att de kan klistras in i en annan ritning eller en annan webbläsarflik med ClipboardPaste.
keywords: [kopiera urklipp CAD, kopiera entiteter mellan ritningar, kopiera CAD-objekt till urklipp, Ctrl+C CAD, kopiera mellan flikar, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Kommandot `ClipboardCopy` skriver de markerade entiteterna till ditt **systemurklipp** som JSON-text. Eftersom det använder det riktiga urklippet och inte en buffert i minnet överlever den kopierade geometrin utanför ritningen: klistra in den i en annan fil, en andra webbläsarflik eller ett fönster du öppnar senare med [ClipboardPaste](../clipboard-paste/).

Det är skillnaden mot [Copy](../copy/): Copy duplicerar entiteter inuti den aktuella ritningen i ett enda grepp, medan ClipboardCopy lägger dem någonstans där de kan hämtas från en helt annan ritning.

## Två sätt att börja

**Markera först, kopiera sedan** — den snabba vägen:

1. Markera en eller flera entiteter på arbetsytan.
2. Tryck `Ctrl+C` (`Cmd+C` på macOS), eller skriv `ClipboardCopy` i terminalen.
3. Entiteterna skrivs till urklippet direkt och kommandot avslutas.

**Aktivera först, markera sedan** — börja utan markering:

1. Tryck `Ctrl+C` eller skriv `ClipboardCopy` med tom markering.
2. Prompten visar **pick objects to copy — Enter or Space to confirm**.
3. **Markera objekt** — klicka för att växla enskilda entiteter in i eller ut ur markeringen, eller dra för att markera efter område.
4. Tryck **Enter** eller **Space** för att kopiera markeringen och avsluta.

Att trycka **Enter** eller **Space** utan markering avslutar helt enkelt kommandot utan att röra urklippet.

## Vad som kopieras

Urklippets innehåll bär mer än ren geometri, så att en inklistring i en främmande ritning ändå ser rätt ut:

| Del | Syfte |
|-----|-------|
| **Entiteter** | Den fullständiga serialiserade formen av varje markerad entitet |
| **Referenspunkt** | Nedre vänstra hörnet av markeringens sammanlagda utsträckning — det ClipboardPaste förankrar vid markören |
| **Lager** | Endast de lager som de kopierade entiteterna faktiskt refererar till, per namn |
| **Linjetyper** | Endast de linjetyper som de kopierade entiteterna faktiskt refererar till, per namn |

Bara *refererade* tabellposter följer med kopian — inte källritningens hela lager- och linjetypstabeller. Skrafferingsmönster paketeras inte alls och behöver inte göra det: en ritnings mönstertabell är den inbyggda standarduppsättningen, och de `.pat`-filer du har laddat upp ligger i ett användarlager som redan delas mellan flikar, så en inklistrad skraffering hittar sitt eget mönster.

## Bekräftelse

Vid lyckad kopiering rapporterar terminalen hur många entiteter som skrevs:

```
3 entities copied to clipboard
```

Om webbläsaren nekar åtkomst till urklippet visar terminalen **Copy failed: clipboard access denied** och inget skrivs. Det är ett behörighetsbeslut från webbläsaren, inte ett ritningsfel — se [Urklippsbehörigheter](#urklippsbehörigheter) nedan.

## Markering under kommandot

| Metod | Beteende |
|-------|----------|
| **Klick** | Växlar entiteten under markören in i eller ut ur markeringen |
| **Dra åt höger** (strikt) | Lägger till entiteter helt inuti rutan |
| **Dra åt vänster** (korsande) | Lägger till entiteter som skär rutans kant |
| **Enter** / **Space** | Bekräftar markeringen och kopierar |

## Tangentbordsreferens

| Tangent | Åtgärd |
|---------|--------|
| `Ctrl+C` / `Cmd+C` | Aktivera ClipboardCopy |
| `Enter` / `Space` | Kopiera aktuell markering, eller avsluta om inget är markerat |
| `Escape` | Avbryt utan att kopiera |

## Urklippsbehörigheter

Att skriva till systemets urklipp kräver webbläsarens tillåtelse. I praktiken beviljas en kopiering som utlösts av en tangenttryckning utan fråga i dagens skrivbordswebbläsare, men en sida som tappat fokus, eller en webbläsare med strikta urklippsinställningar, kan neka. Om meddelandet om nekad åtkomst dyker upp, klicka en gång på arbetsytan för att ge sidan fokus och försök igen.

Eftersom innehållet är vanlig JSON-text ersätts det av allt annat du kopierar efteråt — en textrad, en länk. Kopiera om innan du klistrar in om du har använt urklippet till något annat under tiden.

## Entiteter som stöds

ClipboardCopy fungerar med alla entitetstyper. Entiteter serialiseras med samma mekanism som den inbyggda `.json`-exporten använder, så inget faller bort på vägen.

## Se även

- [ClipboardPaste](../clipboard-paste/) — läsa tillbaka urklippet och placera entiteterna
- [Copy](../copy/) — duplicera entiteter inom den aktuella ritningen
- [Export Manager](../export-manager/) — spara en hel ritning som DXF eller JSON
