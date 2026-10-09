---
title: ClipboardPaste-opdracht — Entiteiten vanaf het systeemklembord plakken
description: De opdracht ClipboardPaste leest entiteiten die eerder door ClipboardCopy zijn geschreven van het systeemklembord en plaatst ze op een gekozen invoegpunt, waarbij ontbrekende lagen en lijntypen aan de doeltekening worden toegevoegd.
keywords: [klembord plakken CAD, entiteiten tussen tekeningen plakken, CAD-objecten plakken, Ctrl+V CAD, plakken tussen tabbladen, lagen samenvoegen bij plakken, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

De opdracht `PlakkenUitKlembord` leest de entiteiten die [ClipboardCopy](../clipboard-copy/) naar het **systeemklembord** heeft geschreven en plaatst ze in de huidige tekening op een punt dat jij kiest. Omdat het klembord het echte systeemklembord is, kan de bron een andere tekening zijn, een ander browsertabblad of een sessie van eerder op de dag.

## Hoe je plakt

1. Druk op `Ctrl+V` (`Cmd+V` op macOS), of typ `PlakkenUitKlembord` in de terminal.
2. De prompt toont **reading clipboard…** terwijl de browser de klembordtekst overdraagt.
3. Zodra die geladen is verandert de prompt in **pick insertion point** en volgt een voorbeeld van de geometrie je cursor.
4. **Klik** om de entiteiten te plaatsen. Ze worden aan de tekening toegevoegd en blijven geselecteerd.

Het voorbeeld is verankerd aan het **referentiepunt** van de kopie — de linkeronderhoek van de gecombineerde begrenzing van de oorspronkelijke selectie. Die hoek zit onder je cursor, zodat de onderlinge ligging van de gekopieerde entiteiten exact behouden blijft.

## Wat er bij het plakken gebeurt

| Stap | Gedrag |
|------|--------|
| **Nieuwe identiteiten** | Elke geplakte entiteit krijgt een nieuwe id, dus twee keer plakken levert twee onafhankelijke sets op |
| **Verplaatsing** | Entiteiten worden verschoven met cursor − referentiepunt |
| **Lagen samenvoegen** | Elke verwezen laag die de doeltekening mist, wordt op naam toegevoegd |
| **Lijntypen samenvoegen** | Elk verwezen lijntype dat de doeltekening mist, wordt op naam toegevoegd |
| **Selectie** | De vorige selectie wordt gewist en de geplakte entiteiten worden de selectie |

### Lagen en lijntypen samenvoegen

Ontbrekende tabelvermeldingen worden toegevoegd; **bestaande blijven ongemoeid**. Draagt het klembord een laag `WALLS` in rood en heeft de doeltekening al een laag `WALLS` in blauw, dan wint de definitie van de doeltekening en sluiten de geplakte entiteiten zich daarbij aan — ze worden blauw. Plakken herdefinieert niets in de doeltekening.

Dat is van belang bij kopiëren tussen tekeningen met verschillende lagenafspraken: controleer na een plakactie tussen tekeningen de [Layer Manager](../layer-manager/) als de kleuren niet zijn wat je verwachtte.

## Als er niets te plakken valt

ClipboardPaste accepteert alleen inhoud die ClipboardCopy heeft gemaakt. Al het andere op het klembord — platte tekst, een URL, een afbeelding, JSON uit een andere toepassing — wordt geweigerd en de terminal meldt:

```
Clipboard has no copied entities
```

Weigert de browser de toegang tot het klembord helemaal, dan luidt het bericht **Blocked by the browser: allow clipboard in site settings, by the address bar**. Beide beëindigen de opdracht zonder de tekening te wijzigen.

## Toetsenbordoverzicht

| Toets | Actie |
|-------|-------|
| `Ctrl+V` / `Cmd+V` | ClipboardPaste activeren |
| `Escape` | Annuleren — de entiteiten worden verworpen en er wordt niets toegevoegd |

Annuleren tijdens de leesfase is veilig: reageert het klembord pas nadat je al geannuleerd of een andere opdracht gestart hebt, dan wordt het late resultaat verworpen in plaats van te verstoren wat dan actief is.

## Kopiëren tussen tabbladen

De gebruikelijke werkwijze tussen tekeningen:

1. Open de brontekening, selecteer de geometrie, druk op `Ctrl+C`.
2. Ga naar het andere tabblad — of open een tweede tabblad van de app en laad een ander bestand.
3. Druk op `Ctrl+V` en klik een invoegpunt aan.

Beide tabbladen hebben dezelfde oorsprong en delen het systeemklembord, dus er wordt niets geüpload en er komt geen server aan te pas. De inhoud blijft de hele tijd JSON-tekst op je eigen klembord.

## Ondersteunde entiteiten

Elk entiteitstype dat ClipboardCopy kan schrijven, kan ClipboardPaste teruglezen — met dezelfde serialisatie die het eigen `.json`-formaat gebruikt.

## Zie ook

- [ClipboardCopy](../clipboard-copy/) — de selectie naar het klembord schrijven
- [Copy](../copy/) — entiteiten binnen de huidige tekening dupliceren
- [Layer Manager](../layer-manager/) — de lagen bekijken die een plakactie heeft meegebracht
