---
title: Příkaz Mirror — zrcadlení objektů podle osy zadané dvěma body
description: Příkaz Mirror zrcadlí vybrané objekty podle osy zrcadlení zadané dvěma kliknutími. Originály se vždy zachovají — Mirror vytváří nové zrcadlené kopie. Osa zrcadlení může mít libovolný úhel a přichytává se k násobkům 45°.
keywords: [CAD příkaz mirror, zrcadlení objektů CAD, souměrnost CAD, převrácení objektů CAD, osa zrcadlení CAD, kulmanlab]
group: edit
order: 4
---

# Mirror

Příkaz `mirror` vytvoří zrcadlené kopie vybraných objektů podle osy zadané dvěma body. Originály se **vždy zachovají** — na rozdíl od [Move](../move/) nebo [Rotate](../rotate/) Mirror nikdy neupravuje existující objekty; pouze přidává nové.

## Dva způsoby spuštění

**Nejdřív vybrat, pak zrcadlit** — nejprve vyberte objekty, poté příkaz aktivujte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `mirror` do terminálu nebo klikněte na tlačítko **Mirror** v panelu nástrojů.
3. **Klikněte na první bod** osy zrcadlení, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
4. **Klikněte na druhý bod** — zrcadlené kopie se umístí a příkaz skončí. Zadávání souřadnic funguje i zde.

**Nejdřív aktivovat, pak vybrat** — spusťte příkaz, když není nic vybráno:

1. Napište `mirror` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — kliknutím přepínáte, nebo tažením vyberete oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení výběru.
4. **Klikněte na první bod**, poté **na druhý bod** osy zrcadlení (v obou krocích je dostupné zadávání souřadnic).

```
  Originál:          Osa zrcadlení:      Výsledek:
                     |
  [objekt A]    →    |    →    [objekt A] + [zrcadlený A]
                     |
```

Živý náhled zrcadlených kopií sleduje kurzor, zatímco umísťujete druhý bod osy.

## Osa zrcadlení

Osa je nekonečná přímka procházející dvěma kliknutými body. Může mít libovolný úhel:

- Přesuňte kurzor blízko **osy přichycení po 45°** (0°, 45°, 90°, 135°, …) a osa se na tento úhel zamkne — užitečné pro čistá vodorovná, svislá nebo diagonální zrcadlení.
- Kliknutím mimo zónu přichycení získáte osu s libovolným úhlem.

## Zadávání souřadnic

V kterémkoli kroku zadání bodu osy můžete místo klikání napsat přesnou polohu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Potvrďte stisknutím **Enter**.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr |
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí napsanou souřadnici |
| `Escape` | Zruší a resetuje |

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepne objekt pod kurzorem |
| **Tažení doprava** (přísný) | Přidá objekty zcela uvnitř rámečku |
| **Tažení doleva** (protínající) | Přidá objekty, které rámeček protínají |
| **Enter** / **Space** | Potvrdí výběr |

## Co se zrcadlí

Podporován je každý typ objektu. Geometrie se zrcadlí podle osy matematicky:

| Objekt | Co se změní |
|--------|-------------|
| Line | Oba koncové body zrcadleny |
| Circle | Střed zrcadlen; poloměr beze změny |
| Arc | Střed zrcadlen; počáteční a koncový úhel přepočítány podle osy |
| Ellipse | Střed zrcadlen; směr hlavní osy převrácen podle osy |
| Polyline / Rectangle | Každý vrchol zrcadlen |
| Text | Zrcadlen kotevní bod; textový řetězec se **neobrací** |
| Spline | Všechny řídicí vrcholy / proložené body zrcadleny |

## Mirror vs Copy

| | Mirror | Copy |
|---|--------|------|
| Originály | Vždy zachovány | Vždy zachovány |
| Poloha nového objektu | Zrcadlená podle osy | Posunutá o vektor posunutí |
| Nejvhodnější pro | Souměrné návrhy, oboustranné prvky | Opakování geometrie v libovolném směru |
