---
title: Angle — měření vnitřního úhlu ve vrcholu pomocí tří bodů
description: Příkaz Angle měří vnitřní úhel (0°–180°) ve vrcholu určeném třemi kliknutými body. Klikněte na první konec, vrchol a druhý konec. Výsledek se zobrazí v terminálu na 4 desetinná místa.
keywords: [měření úhlu CAD, úhel ze tří bodů, vnitřní úhel CAD, příkaz měření úhlu, úhel ve vrcholu, kulmanlab]
group: measure
order: 2
---

# Angle

Příkaz `angle` měří vnitřní úhel ve vrcholu vytvořeném dvěma úsečkami procházejícími třemi kliknutými body. Výsledek — vždy mezi 0° a 180° — se zobrazí v terminálu na 4 desetinná místa. Je jedním ze tří měřicích příkazů — [Distance](../distance/) měří délku přímé spojnice a [Area](../area/) měří uzavřenou plochu a obvod mnohoúhelníku.

## Anatomie měření úhlu

```
  ● první bod (konec prvního ramene)
   \
    \  náhled prvního ramene
     \
      ● vrchol (krok 3)
     /
    /  náhled druhého ramene (ke kurzoru)
   /
  ● třetí bod  →  terminál: "Angle: 45.0000°"
```

- **První bod** — jeden konec úhlu (krok 2).
- **Vrchol** — roh, ve kterém se úhel měří (krok 3).
- **Třetí bod** — druhý konec úhlu (krok 4).

## Měření úhlu

1. Napište `angle` do terminálu nebo klikněte na tlačítko **Angle** v panelu nástrojů.
2. **Klikněte na první bod** — konec jednoho ramene úhlu. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na vrchol** — roh, kde se obě ramena setkávají. Zadávání souřadnic funguje i zde.
4. **Klikněte na třetí bod** — konec druhého ramene. Zadávání souřadnic funguje i zde. Umístěním tohoto bodu se vypíše výsledek.
5. **Klikněte znovu** (volitelně) pro zahájení nového měření, kde se toto kliknutí stane novým prvním bodem.

## Konvence vnitřního úhlu

Příkaz počítá úhel pomocí skalárního součinu dvou paprsků vycházejících z vrcholu:

- **Vždy vnitřní**: výsledkem je menší úhel, mezi 0° a 180°.
- Pořadí, v jakém klikáte na koncové body, výsledek neovlivňuje — záleží jen na poloze vrcholu.
- Kolineární body (všechny tři na jedné přímce) vrátí 0° nebo 180°.

## Řetězení měření

Po zobrazení výsledku kliknutí okamžitě zahájí další měření — kliknutý bod se stane novým prvním bodem. Příkaz se nikdy sám neukončí, dokud nestisknete `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Co měří | Vnitřní úhel ve vrcholu | Délku přímé spojnice |
| Počet kliknutí | 3 | 2 |
| Formát výsledku | `45.0000°` | `12.3456` (jednotky) |
| Náhled na plátně | Dvě úsečky z vrcholu k oběma koncům | Úsečka od prvního bodu ke kurzoru |
| Nejvhodnější pro | Otevírací úhel mezi dvěma prvky | Délku mezery nebo úseku |

## Zadávání souřadnic

Místo klikání můžete napsat přesnou polohu kteréhokoli ze tří bodů:

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
- Přesnost je vždy 4 desetinná místa ve stupních.
