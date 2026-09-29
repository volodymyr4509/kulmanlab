---
title: Příkaz ViewportRectangle — vytvoření výřezu v rozvržení
description: Příkaz ViewportRectangle vytvoří výřez v papírovém rozvržení výběrem dvou protilehlých rohů. Výřez zobrazuje objekty modelového prostoru ve výchozím měřítku rozvržení.
keywords: [obdélníkový výřez, vytvoření výřezu, výřez rozvržení, výřez papírového prostoru, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Příkaz `ViewportRectangle` vytvoří nový výřez v aktivním papírovém rozvržení výběrem dvou protilehlých rohů. Dostupný pouze v prostoru rozvržení.

## Vytvoření výřezu

1. Přepněte na papírové rozvržení pomocí záložky ve spodní části obrazovky.
2. Napište `ViewportRectangle` do terminálu nebo klikněte na tlačítko **Viewport Rectangle** v panelu nástrojů.
3. **Klikněte na první roh**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
4. **Klikněte na protilehlý roh** — výřez se okamžitě umístí. Zadávání souřadnic funguje i zde.

Nový výřez zobrazuje celý model ve výchozím měřítku rozvržení. Kolečkem myši uvnitř výřezu přibližujete, tažením prostředním tlačítkem posouváte pohled na model.

## Zadávání souřadnic

V kterémkoli kroku rohu můžete napsat přesnou souřadnici:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** bod umístíte.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Enter` | Potvrdí napsanou souřadnici |
| `Escape` | Zruší |

## Úprava výřezu

Po umístění výřezu na něj kliknutím vyberete:

- **Tažením hran nebo rohů** změníte velikost.
- **Tažením středového úchytu** jej přesunete.
- Pomocí **výběru měřítka** v ovládací liště nastavíte přesné měřítko (např. 1:50). Chcete-li zadat měřítko, které v seznamu není, napište je přímo do vstupního pole ve spodní části rozbalovací nabídky — přijímá formát poměru (`1:200`, `5:1`) nebo prosté desetinné číslo (`0.005`), poté stiskněte **Enter**.
- Klikněte pravým tlačítkem na výřez a pomocí **Lock** zabráníte nechtěným změnám.

## Poznámky

- ViewportRectangle je dostupný pouze při aktivní záložce papírového rozvržení. Jeho spuštění v modelovém prostoru zobrazí chybovou zprávu a příkaz skončí.
- Existující výřez zkopírujete příkazem [ViewportCopy](../viewport-copy/).
