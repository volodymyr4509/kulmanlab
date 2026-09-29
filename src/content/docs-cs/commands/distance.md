---
title: Distance — měření přímé vzdálenosti mezi dvěma body
description: Příkaz Distance měří euklidovskou vzdálenost mezi dvěma kliknutými body a zobrazí výsledek na 4 desetinná místa. Kliknutím po výsledku zřetězíte nové měření od posledního bodu.
keywords: [měření vzdálenosti CAD, příkaz distance, měření mezi dvěma body, přímá vzdálenost, měření kulmanlab CAD]
group: measure
order: 1
---

# Distance

Příkaz `distance` měří přímou (euklidovskou) vzdálenost mezi dvěma kliknutými body a vypíše výsledek do terminálu na 4 desetinná místa. Je jedním ze tří měřicích příkazů — [Angle](../angle/) měří úhlové rozevření ve vrcholu a [Area](../area/) měří uzavřenou plochu a obvod mnohoúhelníku.

## Anatomie měření vzdálenosti

```
  ● první bod
   \
    \  náhledová úsečka (živě)
     \
      ● druhý bod    →  terminál: "Distance: 12.3456"
```

- **První bod** — počátek měření.
- **Druhý bod** — koncový bod; jeho umístěním se výsledek okamžitě vypíše.
- **Výsledek** — zobrazí se v terminálu, nikoli na plátně.

## Měření vzdálenosti

1. Napište `distance` do terminálu nebo klikněte na tlačítko **Distance** v panelu nástrojů.
2. **Klikněte na první bod**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na druhý bod** — naměřená vzdálenost se objeví v terminálu. Zadávání souřadnic funguje i zde.
4. **Klikněte znovu** (volitelně) pro zahájení nového měření. Příkaz zůstává aktivní.

Stisknutím `Escape` se kdykoli vrátíte ke kroku 2.

## Řetězení měření

Po zobrazení výsledku kliknutí okamžitě zahájí další měření — kliknutý bod se stane novým prvním bodem. Tak můžete změřit posloupnost vzdáleností bez opětovné aktivace příkazu.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Co měří | Délku přímé spojnice | Vnitřní úhel ve vrcholu |
| Počet kliknutí | 2 | 3 |
| Formát výsledku | `12.3456` (jednotky) | `45.0000°` |
| Náhled na plátně | Úsečka od prvního bodu ke kurzoru | Dvě úsečky z vrcholu ke kurzoru |
| Nejvhodnější pro | Délku mezery nebo úseku | Otevírací úhel mezi dvěma prvky |

## Zadávání souřadnic

Místo klikání můžete napsat přesnou polohu kteréhokoli bodu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Potvrďte stisknutím **Enter**.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí zadanou souřadnici |
| `Escape` | Zruší a vrátí se ke kroku 2 |

## Poznámky

- Výsledky se zobrazují **pouze v terminálu** — do výkresu se nic nepřidává.
- Výsledek je vyjádřen ve stejných jednotkách jako souřadnice výkresu (bez převodu jednotek).
- Přesnost je vždy 4 desetinná místa.
