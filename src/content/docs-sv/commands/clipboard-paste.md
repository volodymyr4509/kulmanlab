---
title: ClipboardPaste-kommandot — Klistra in entiteter från systemets urklipp
description: Kommandot ClipboardPaste läser entiteter som tidigare skrivits av ClipboardCopy från systemets urklipp och placerar dem vid en vald insättningspunkt, och lägger till de lager och linjetyper som saknas i målritningen.
keywords: [klistra in urklipp CAD, klistra in entiteter mellan ritningar, klistra in CAD-objekt, Ctrl+V CAD, klistra in mellan flikar, sammanfoga lager vid inklistring, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Kommandot `KlistraInFrånUrklipp` läser de entiteter som [ClipboardCopy](../clipboard-copy/) skrev till **systemets urklipp** och placerar dem i den aktuella ritningen på en punkt du väljer. Eftersom urklippet är systemets riktiga kan källan vara en annan ritning, en annan webbläsarflik eller en session från tidigare på dagen.

## Så klistrar du in

1. Tryck `Ctrl+V` (`Cmd+V` på macOS), eller skriv `KlistraInFrånUrklipp` i terminalen.
2. Prompten visar **reading clipboard…** medan webbläsaren lämnar över urklippstexten.
3. När den har lästs in ändras prompten till **pick insertion point** och en förhandsvisning av geometrin följer markören.
4. **Klicka** för att placera entiteterna. De läggs till i ritningen och förblir markerade.

Förhandsvisningen är förankrad i kopians **referenspunkt** — nedre vänstra hörnet av den ursprungliga markeringens sammanlagda utsträckning. Det hörnet ligger under markören, så entiteternas inbördes placering bevaras exakt.

## Vad som händer vid inklistring

| Steg | Beteende |
|------|----------|
| **Nya identiteter** | Varje inklistrad entitet får ett nytt id, så två inklistringar ger två oberoende uppsättningar |
| **Förflyttning** | Entiteterna förskjuts med markör − referenspunkt |
| **Sammanfogning av lager** | Varje refererat lager som saknas i målritningen läggs till per namn |
| **Sammanfogning av linjetyper** | Varje refererad linjetyp som saknas i målritningen läggs till per namn |
| **Markering** | Den tidigare markeringen rensas och de inklistrade entiteterna blir markeringen |

### Sammanfogning av lager och linjetyper

Saknade tabellposter läggs till; **befintliga lämnas i fred**. Om urklippet bär ett lager som heter `WALLS` i rött och målritningen redan har ett `WALLS` i blått vinner målets definition och de inklistrade entiteterna ansluter sig till det — de blir blå. En inklistring omdefinierar ingenting i målritningen.

Det spelar roll när man kopierar mellan ritningar med olika lagerkonventioner: kontrollera [Layer Manager](../layer-manager/) efter en inklistring mellan ritningar om färgerna inte blev som du väntade dig.

## När urklippet inte har något att klistra in

ClipboardPaste accepterar bara innehåll som ClipboardCopy skapat. Allt annat i urklippet — ren text, en länk, en bild, JSON från ett annat program — avvisas och terminalen rapporterar:

```
Clipboard has no copied entities
```

Om webbläsaren nekar åtkomst till urklippet helt lyder meddelandet i stället **Blocked by the browser: allow clipboard in site settings, by the address bar**. Båda avslutar kommandot utan att ändra ritningen.

## Tangentbordsreferens

| Tangent | Åtgärd |
|---------|--------|
| `Ctrl+V` / `Cmd+V` | Aktivera ClipboardPaste |
| `Escape` | Avbryt — entiteterna kastas och inget läggs till |

Att avbryta under inläsningsfasen är ofarligt: om urklippet svarar först efter att du redan avbrutit eller startat ett annat kommando kastas det sena resultatet i stället för att störa det som då är aktivt.

## Kopiera mellan flikar

Det vanliga arbetsflödet mellan ritningar:

1. Öppna källritningen, markera geometrin, tryck `Ctrl+C`.
2. Byt till den andra fliken — eller öppna en andra flik med appen och läs in en annan fil.
3. Tryck `Ctrl+V` och klicka på en insättningspunkt.

Båda flikarna har samma ursprung och delar systemets urklipp, så inget laddas upp och ingen server är inblandad. Innehållet förblir JSON-text i ditt eget urklipp hela tiden.

## Entiteter som stöds

Varje entitetstyp som ClipboardCopy kan skriva kan ClipboardPaste läsa tillbaka — med samma serialisering som det inbyggda `.json`-formatet använder.

## Se även

- [ClipboardCopy](../clipboard-copy/) — skriva markeringen till urklippet
- [Copy](../copy/) — duplicera entiteter inom den aktuella ritningen
- [Layer Manager](../layer-manager/) — granska de lager en inklistring förde med sig
