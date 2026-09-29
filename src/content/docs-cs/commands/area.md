---
title: Příkaz Area — měření plochy a obvodu mnohoúhelníku
description: Příkaz Area měří uzavřenou plochu a obvod mnohoúhelníku určeného 3 nebo více kliknutými body pomocí Gaussova vzorce pro plochu (shoelace). Podporuje zadávání směru se zamčeným úhlem a trvalé zvýraznění výsledku na plátně.
keywords: [měření plochy CAD, příkaz area, kalkulačka plochy mnohoúhelníku, měření obvodu, shoelace vzorec, měření kulmanlab CAD]
group: measure
order: 3
---

# Area

Příkaz `area` měří uzavřenou plochu a obvod mnohoúhelníku určeného třemi nebo více kliknutými body a vypíše oba výsledky do terminálu na 4 desetinná místa. Je třetím měřicím příkazem, vedle [Distance](../distance/) (délka přímé spojnice) a [Angle](../angle/) (vnitřní úhel ve vrcholu).

## Anatomie měření plochy

```
  ● první bod
   \
    \
     ● druhý bod
      \
       \             (čárkovaně) náhled uzavírací hrany
        ●───────────────┐
      třetí bod         │  (čárkovaně) náhled další hrany ke kurzoru
                         ✕ kurzor  →  terminál: "Area: 12.3456  Perimeter: 45.6789"
```

- **Vrcholy** — každý kliknutý (nebo zadaný) bod se stane vrcholem mnohoúhelníku; potvrzené hrany se kreslí plně a vnitřek se vyplní průsvitným zvýrazněním.
- **Náhledové hrany** — čárkované čáry ukazují čekající hranu z posledního vrcholu ke kurzoru a uzavírací hranu z kurzoru zpět k prvnímu vrcholu, takže tvar uvidíte ještě před potvrzením.
- **Uzavírací hrana** — na první bod už znovu neklikáte; stisknutím Enter se mnohoúhelník uzavře automaticky.

## Měření plochy

1. Napište `area` do terminálu nebo klikněte na tlačítko **Area** v panelu nástrojů (spodní řádek panelu Measure).
2. **Klikněte na první bod**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikejte na další vrcholy** postupně kolem tvaru. Zadávání souřadnic funguje v každém kroku.
4. Jakmile umístíte alespoň **3 body**, stiskněte **Enter** (bez rozepsané souřadnice nebo vzdálenosti) — mnohoúhelník se uzavře a vypočítá se výsledek.
5. Terminál vypíše `Area: <hodnota>  Perimeter: <hodnota>` a uzavřený mnohoúhelník — výplň, obrys i úchyty vrcholů — zůstane na plátně zvýrazněný.
6. **Klikněte kamkoli, stiskněte libovolnou klávesu nebo `Escape`** pro zavření výsledku a ukončení příkazu.

## Zámek úhlu a přesná vzdálenost

Po umístění prvního vrcholu zamkne pohyb směrem k jednomu z nastavených přírůstků sledování úhlu (10°, 15°, 20°, 30°, 45° nebo 90°, nastavených rozbalovací nabídkou v panelu nástrojů) další hranu do tohoto směru:

- Náhled hrany se přichytí k zamčenému směru a u kotevního vrcholu se vykreslí indikátor sledování úhlu.
- Napište délku a stiskněte **Enter** — další vrchol se umístí přesně v této vzdálenosti podél zamčeného směru.
- Kliknutí při zamčeném směru (bez zadané délky) umístí vrchol do průmětu kurzoru na zamčený směr.

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí k hodnotě délky hrany |
| `-` | Záporná délka (pouze první znak) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Umístí další vrchol v zadané délce |

## Uzavření mnohoúhelníku

- Enter tvar uzavře, až když je umístěno **3 a více** vrcholů — s menším počtem nemá žádný účinek.
- Hrana od posledního vrcholu zpět k prvnímu se přidá automaticky a započítá se do plochy i do obvodu.
- Body lze umístit v libovolném pořadí (po směru i proti směru hodinových ručiček) — výsledek je v obou případech stejný.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Co měří | Uzavřenou plochu a obvod mnohoúhelníku | Délku přímé spojnice | Vnitřní úhel ve vrcholu |
| Počet kliknutí | 3 nebo více, uzavřeno klávesou Enter | 2 | 3 |
| Formát výsledku | `12.3456  Perimeter: 45.6789` | `12.3456` (jednotky) | `45.0000°` |
| Náhled na plátně | Vyplněný mnohoúhelník s čárkovanou uzavírací hranou | Úsečka od prvního bodu ke kurzoru | Dvě úsečky z vrcholu k oběma koncům |
| Po výsledku | Zavře se jakýmkoli vstupem, poté se příkaz ukončí | Kliknutím zřetězíte nové měření | Kliknutím zřetězíte nové měření |
| Nejvhodnější pro | Uzavřené oblasti, plochu místnosti či panelu | Délku mezery nebo úseku | Otevírací úhel mezi dvěma prvky |

## Zadávání souřadnic

Místo klikání můžete napsat přesnou polohu kteréhokoli vrcholu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Potvrďte stisknutím **Enter**.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X, nebo zadání délky hrany při zamčeném úhlu |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` / `Space` | Potvrdí zadanou souřadnici nebo délku (pouze Enter); se 3+ vrcholy a bez rozepsaného zadání uzavře mnohoúhelník |
| `Escape` | Při výběru vrcholů je zahodí a začne znovu od prvního bodu; po zobrazení výsledku jej zavře a příkaz ukončí |

## Poznámky

- Plocha se počítá [Gaussovým vzorcem pro plochu (shoelace)](https://en.wikipedia.org/wiki/Shoelace_formula) a vždy se uvádí jako kladná hodnota, bez ohledu na pořadí kliknutí.
- Samoprotínající se mnohoúhelníky (hrany, které se kříží) také vrátí číselný výsledek, ale hodnota nemusí odpovídat opticky uzavřené oblasti — pro smysluplnou plochu zachovejte pořadí kliknutí bez křížení.
- Výsledky se zobrazují **pouze v terminálu a jako dočasné zvýraznění na plátně** — do výkresu se nepřidává žádný trvalý objekt.
- Na rozdíl od Distance a Angle se Area **nezřetězuje** automaticky do nového měření — po zavření výsledku spusťte `area` znovu pro změření dalšího mnohoúhelníku.
- Přesnost je vždy 4 desetinná místa pro plochu i obvod, ve stejných jednotkách jako souřadnice výkresu (bez převodu jednotek).
