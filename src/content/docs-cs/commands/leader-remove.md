---
title: "Příkaz LeaderRemove — odebrání ramene se šipkou z vícenásobné odkazové čáry"
description: "Příkaz LeaderRemove odebere jedno rameno se šipkou z vícenásobné odkazové čáry (multileader), která má dvě nebo více ramen. Najeďte kurzorem k ramenu, které chcete odebrat — nejbližší rameno se zvýrazní. Zalomení, text a zbývající ramena zůstanou zachovány."
keywords: [CAD odebrání ramene odkazové čáry, příkaz leaderremove, odebrání šipky z odkazové čáry, smazání ramene multileaderu, kulmanlab]
group: markup
order: 3
---

# LeaderRemove

Příkaz `LeaderRemove` odebere jedno rameno se šipkou z existující vícenásobné odkazové čáry (multileader). Textový popisek, zalomení i všechna zbývající ramena zůstanou zachovány — smaže se pouze vybrané rameno. U multileaderu s pouze jedním ramenem nelze rameno odebrat.

## Odebrání ramene

1. Napište `LeaderRemove` do terminálu.
2. **Klikněte na multileader**, který má dvě nebo více ramen. Pokud má vybraná odkazová čára jen jedno rameno, terminál zobrazí chybu a čeká na platný výběr.
3. **Přesuňte kurzor k ramenu**, které chcete odebrat — nejbližší rameno se zvýrazní značkou.
4. **Kliknutím** toto rameno odeberete.

Rameno se odebere a příkaz zůstane aktivní — můžete okamžitě kliknout na další odkazovou čáru (nebo tu samou) a odebrat další ramena. Dokončíte stisknutím **Enter**, **Space** nebo **Escape**.

```
  Před:                     Po:
  ◄── rameno 1              ◄── rameno 1
       \                          \
        ●──── zalomení ──── text   ●──── zalomení ──── text
       /
  rameno 2 ──►  ← toto rameno odebráno
```

## Jak se určuje nejbližší rameno

Příkaz měří kolmou vzdálenost od kurzoru ke každému úseku čar ramene (včetně úseku od posledního bodu ramene k zalomení). Rameno s nejmenší vzdáleností se zvýrazní a po kliknutí se odebere.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Dokončí odebírání ramen |
| `Escape` | Zruší a resetuje |

## Poznámky

- Odkazová čára s **jediným ramenem** je chráněna — před odebráním musíte nejprve rameno přidat.
- Poloha zalomení a obsah textu se vždy zachovají bez ohledu na to, které rameno se odebere.

## Související příkazy

| Příkaz | Co dělá |
|--------|---------|
| [Leader](../leader/) | Vytvoří novou vícenásobnou odkazovou čáru od začátku |
| [LeaderAdd](../leader-add/) | Přidá rameno k existující vícenásobné odkazové čáře |
