---
title: Text-kommandot — Placera MTEXT-etiketter i KulmanLab CAD
description: Text-kommandot placerar en flerradig, rikt formaterad MTEXT-etikett. Klicka på en position, skriv i popup-redigeraren och tryck på Escape för att bekräfta. Dubbelklicka på valfri befintlig etikett för att öppna redigeraren igen.
keywords: [CAD textkommando, MTEXT, placera textetikett CAD, textanteckning CAD, fetstil kursiv CAD, flerradig text CAD, kulmanlab]
group: markup
order: 0
---

# Text

`Text`-kommandot placerar en flerradig textetikett. Efter att du har klickat på en position på ritytan öppnas en popup-redigerare i **rich**-läge — du kan skriva innehåll, tillämpa fetstil/kursiv/understruken/genomstruken per tecken, ändra typsnitt och höjder samt infoga radbrytningar. Tryck på **Escape** för att bekräfta och stänga redigeraren.

Se sidan [Texteditor](../../interface/text-editor/) för den fullständiga editorreferensen, inklusive en jämförelse av **rich**- och **simple**-lägena.

## Placera en textetikett

1. Skriv `Text` i terminalen eller klicka på **Text**-knappen i verktygsfältet.
2. **Klicka på ankarpositionen** på ritytan. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
3. **Textredigerarens popup** öppnas ovanför den nya etiketten. Skriv ditt innehåll.
4. Tryck på **Escape** för att bekräfta etiketten och stänga redigeraren.

Ny text kopierar teckensnitt, höjd, fetstil, kursiv, radavstånd, vågrät justering och ram från aktuell [Textstil](../text-style/). Den inbyggda stilen `Standard` använder höjden **1 ritningsenhet** och vänsterjustering.

## Redigera en befintlig etikett

**Dubbelklicka** på valfri textetikett på ritytan för att öppna redigeraren för den etiketten igen.

## Koordinatinmatning för ankaret

Istället för att klicka kan du skriva en exakt position:

1. Skriv X-värdet.
2. Tryck på `,` — terminalen visar `[X], [Y{cursor}]`.
3. Skriv Y-värdet.
4. Tryck **Enter** för att placera ankaret och öppna redigeraren.

## Tangentbordsreferens

**Ankarfasen**

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta X-koordinatinmatning |
| `,` | Lås X och gå till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inmatad koordinat |

**Textredigerarfasen** (se [Texteditor](../../interface/text-editor/) för den fullständiga referensen)

| Tangent | Åtgärd |
|-----|--------|
| Valfritt skrivbart tecken | Infoga vid markören |
| `Backspace` / `Delete` | Ta bort intilliggande tecken eller markering |
| `Enter` | Infoga en radbrytning |
| `←` / `→` | Flytta markören |
| `Home` / `End` | Hoppa till början / slutet av den hårda raden |
| `Escape` | Bekräfta och stäng redigeraren |

## Redigera med grepp — ompositionering

En vald textetikett visar ett grepp vid ankarpunkten:

| Grepp | Position | Vad det gör |
|------|----------|--------------|
| **Anchor** | Nedre vänstra hörnet av texten | Dra för att ompositionera etiketten |

## Markera text

| Metod | Beteende |
|--------|-----------|
| **Klick** | Markerar om klicket landar inom textens roterade avgränsningsruta |
| **Dra höger** (strikt) | Alla fyra hörn av avgränsningsrutan måste ligga inom markeringsområdet |
| **Dra vänster** (korsande) | Varje överlappning mellan textens avgränsningsruta och markeringsområdet markerar den |

## Kompatibla redigeringskommandon

| Kommando | Vad som händer med texten |
|---------|--------------------------|
| [Move](../move/) | Flyttar ankarpunkten |
| [Copy](../copy/) | Skapar en identisk etikett på en ny position |
| [Rotate](../rotate/) | Roterar ankarpositionen och lägger till vinkeln till Rotation Degree |
| [Mirror](../mirror/) | Speglar ankarpunkten över spegelaxeln (textsträngen vänds inte) |
| [Scale](../scale/) | Skalar ankarpositionen och multiplicerar höjden med skalfaktorn |
| [Delete](../delete/) | Tar bort etiketten |

Text stöder inte **Offset**, **Trim** eller **Extend**.

## Egenskaper

När en textetikett är vald visar egenskapspanelen:

**Allmänt**

| Egenskap | Standard | Betydelse |
|----------|---------|---------|
| Color | 256 (ByLayer) | ACI-färgindex |
| Layer | `0` | Lagertilldelning |

**Geometri**

| Egenskap | Betydelse |
|----------|---------|
| Position X / Position Y | Ankarpunktens koordinater |
| Height | Grundhöjd i ritningsenheter, kopierad från aktuell Textstil när texten skapas |
| Rotation Degree | Rotation moturs i grader |

**Egenskaper**

| Egenskap | Betydelse |
|----------|---------|
| Content | Textsträngen (MTEXT-inline-koder bevaras) |
| Attachment Point | Justeringskod (1 = övre vänster … 9 = nedre höger) |

Text har inte egenskaperna Linetype, Linetype Scale eller Thickness.

Under **Egenskaper** visas även vågrät justering, referensbredd, radavstånd och ram.

## DXF — MTEXT-entitet

Textetiketter lagras som **MTEXT**. Fetstil och kursiv använder `\f`, understrykning `\L`/`\l`, genomstrykning `\K`/`\k` och teckenvisa höjder `\H`. Referensbredd, radavstånd, styckejustering, rotation och fästpunkt bevaras också. Ram exporteras med MTEXT-ramflaggan och en AutoCAD-kompatibel kantskala. Se [Textstil](../text-style/) och [Teckensnittshanteraren](../font-manager/).
