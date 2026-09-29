---
title: Příkaz LeaderAdd — přidání ramene se šipkou k existující vícenásobné odkazové čáře
description: Příkaz LeaderAdd přidá nové rameno se šipkou k existující vícenásobné odkazové čáře (multileader). Nové rameno sdílí zalomení, text a veškeré stylování vybrané odkazové čáry. Dvě kliknutí — vyberte odkazovou čáru a umístěte novou špičku.
keywords: [CAD přidání ramene odkazové čáry, příkaz leaderadd, přidání šipky k odkazové čáře, rameno multileaderu, kulmanlab]
group: markup
order: 2
---

# LeaderAdd

Příkaz `LeaderAdd` přidá nové rameno se šipkou k existující vícenásobné odkazové čáře (multileader). Nové rameno vede z existujícího zalomení odkazové čáry k nové špičce šipky, na kterou kliknete. Veškeré stylování — poloha zalomení, text, typ a velikost šipky — se zdědí z vybrané odkazové čáry.

## Přidání ramene

1. Napište `LeaderAdd` do terminálu.
2. **Kliknutím na existující multileader** jej vyberte.
3. **Klikněte na novou špičku šipky**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici. Náhledová úsečka vede od kurzoru k zalomení odkazové čáry.

Rameno se umístí a příkaz zůstane aktivní — můžete okamžitě kliknout na další odkazovou čáru a přidat další ramena. Dokončíte stisknutím **Enter**, **Space** nebo **Escape**.

```
  Před:                          Po:
  ◄── rameno 1                   ◄── rameno 1
       \                               \
        ●──── zalomení ──── text        ●──── zalomení ──── text
                                       /
                                  rameno 2 ──►  (nová špička, na kterou jste klikli)
```

## Zadání souřadnic špičky

Místo klikání můžete napsat přesnou polohu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál potvrdí, že X je zamčeno.
3. Napište hodnotu Y.
4. Stisknutím **Enter** umístíte.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí psaní souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Enter` | Potvrdí napsanou souřadnici a umístí rameno |
| `Enter` / `Space` | Dokončí (když neprobíhá žádné zadávání) |
| `Escape` | Zruší a resetuje |

## Poznámky

- Vybrat lze pouze objekty **Multileader** — kliknutí na jakýkoli jiný typ objektu nic neudělá.
- Nové rameno vychází z existujícího zalomení; vybíráte pouze to, kam se má umístit špička šipky.
- Počet ramen multileaderu není omezen.

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [Leader](../leader/) | Vytvoří zcela novou vícenásobnou odkazovou čáru od začátku |
| [LeaderRemove](../leader-remove/) | Odebere rameno z odkazové čáry, která má dvě nebo více ramen |
