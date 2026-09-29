---
title: Příkaz Move — posun vybraných objektů podle základního bodu
description: Příkaz Move posune jeden nebo více vybraných objektů podle základního bodu a cíle. Podporuje předběžný výběr, zamykání úhlu a zadání přesné vzdálenosti. Po přesunu zůstanou objekty vybrané na nové pozici. Podporován je každý typ objektu.
keywords: [CAD příkaz move, posun objektů CAD, přesun objektů CAD, zámek úhlu move, přesná vzdálenost move, přesun úchytem CAD, kulmanlab]
group: edit
order: 1
---

# Move

Příkaz `move` posune vybrané objekty ze základního bodu do cílového bodu. Posunutí použité na každý vybraný objekt je vektor od základu k cíli. Po přesunu zůstanou všechny objekty vybrané na nové pozici, připravené k dalším úpravám.

## Dva způsoby spuštění

**Nejdřív vybrat, pak přesunout** — nejprve vyberte objekty, poté příkaz aktivujte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `move` do terminálu nebo klikněte na tlačítko **Move** v panelu nástrojů.
3. **Klikněte na základní bod**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
4. **Klikněte na cíl** — všechny vybrané objekty se posunou o vektor základ→cíl. Zadávání souřadnic funguje i zde.

**Nejdřív aktivovat, pak vybrat** — spusťte příkaz, když není nic vybráno:

1. Napište `move` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — kliknutím přepínáte jednotlivé objekty, nebo tažením vyberete oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení výběru.
4. **Klikněte na základní bod**, poté **na cíl** (v obou krocích je dostupné zadávání souřadnic).

```
  Před:                      Po:
  ● základ                     → ● cíl
  [objekt A]                      [objekt A přesunut]
  [objekt B]                      [objekt B přesunut]
```

Náhled ve formě duchů všech vybraných objektů sleduje kurzor od základního bodu k cíli a ukazuje výsledek ještě před kliknutím.

## Zadávání souřadnic

V kroku základního bodu nebo cíle můžete místo klikání napsat přesnou polohu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Potvrďte stisknutím **Enter**.

## Zamykání úhlu a přesná vzdálenost

Po nastavení základního bodu příkaz sleduje osu přichycení po 45° (0°, 45°, 90°, 135°, …). Směr se **zamkne**, když je kurzor dostatečně daleko od základu a v rámci jedné šířky úchytu od osy. Při zamknutí:

- Náhled přiskočí k ose.
- Napište vzdálenost a stiskněte **Enter**, čímž posunete přesně o tolik podél zamčeného směru.
- Kliknutí se promítne na osu, takže cíl vždy leží přesně na ní.

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí k hodnotě vzdálenosti |
| `-` | Záporná vzdálenost — obrátí směr podél osy (pouze jako první znak) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Provede posun o napsanou vzdálenost |

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr a přejde do fáze základního bodu |
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X, nebo vzdálenosti při zamknutém úhlu |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí souřadnici nebo provede posun o napsanou vzdálenost |
| `Escape` | Zruší a resetuje |

## Spuštění Move z úchytu

Kliknutí na **středový úchyt** vybrané [Line](../line/) automaticky spustí Move, přičemž střed je už nastaven jako základní bod a fáze posunu je aktivní. Je to nejrychlejší způsob přemístění jedné úsečky bez kroku výběru.

## Výběr během příkazu

Když příkaz začíná ve fázi výběru:

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepne objekt pod kurzorem do/z výběru |
| **Tažení doprava** (přísný) | Přidá objekty zcela uvnitř rámečku |
| **Tažení doleva** (protínající) | Přidá objekty, které protínají hranici rámečku |
| **Enter** / **Space** | Potvrdí výběr a přejde do fáze základního bodu |

## Po přesunu

Přesunuté objekty zůstanou vybrané na nové pozici. To znamená, že můžete okamžitě:
- Spustit **Move** znovu a posunout je dál.
- Spustit [Copy](../copy/), [Rotate](../rotate/) nebo [Scale](../scale/) bez nového výběru.
- Stisknout **Delete** a odstranit je.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Původní pozice | Uvolněna — objekty tam už nejsou | Zachována — originály zůstávají na místě |
| Počet výsledků | Stejný počet objektů | Jedna další sada na operaci |
| Výběr potom | Přesunuté objekty vybrané na nové pozici | Zkopírované objekty vybrané na nové pozici |
| Nejvhodnější pro | Přemístění geometrie | Duplikování geometrie |

## Podporované objekty

Move funguje na každém typu objektu: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader a všech ostatních. Všechny objekty implementují `translate(dx, dy)`, takže žádný není vyloučen.
