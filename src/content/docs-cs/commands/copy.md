---
title: Příkaz Copy — duplikace objektů na novou pozici
description: Příkaz Copy vytvoří posunuté duplikáty vybraných objektů a originály ponechá na místě. Podporuje předchozí výběr, zámek úhlu a zadání přesné vzdálenosti. Kopie se umístí a příkaz se ukončí; originály zůstanou beze změny.
keywords: [CAD příkaz copy, duplikace objektů CAD, kopírování objektů CAD, klonování geometrie CAD, zámek úhlu kopírování, kopírování na přesnou vzdálenost, kulmanlab]
group: edit
order: 2
---

# Copy

Příkaz `copy` vytvoří posunuté duplikáty vybraných objektů a umístí je s odsazením od základního bodu k cíli — originály zůstanou přesně tam, kde jsou. To je jediný klíčový rozdíl oproti [Move](../move/): Copy přidává do výkresu nové objekty; Move přemísťuje existující.

## Dva způsoby spuštění

**Nejdřív vybrat, pak kopírovat** — nejprve vyberte objekty a potom příkaz spusťte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `copy` do terminálu nebo klikněte na tlačítko **Copy** v panelu nástrojů.
3. **Klikněte na základní bod**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
4. **Klikněte na cíl** — duplikáty se objeví s odsazením základní bod→cíl. Zadávání souřadnic funguje i zde.

**Nejdřív spustit, pak vybrat** — příkaz spusťte bez výběru:

1. Napište `copy` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — kliknutím přepínáte jednotlivé objekty, tažením vybíráte podle oblasti.
3. Výběr potvrďte stisknutím **Enter** nebo **Space**.
4. **Klikněte na základní bod**, poté **na cíl** (v obou krocích je k dispozici zadávání souřadnic).

```
  Před:                 Po:
  [objekt A]            [objekt A]  ← originály nedotčeny
  [objekt B]            [objekt B]
                        [kopie A]   ← nové objekty
                        [kopie B]
```

Duchový náhled kopií sleduje kurzor od základního bodu k cíli.

## Zadávání souřadnic

V kroku základního bodu nebo cíle můžete místo klikání napsat přesnou polohu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Potvrďte stisknutím **Enter**.

## Zámek úhlu a přesná vzdálenost

Po nastavení základního bodu se příkaz přichytává k osám po 45° (0°, 45°, 90°, 135°, …), když je kurzor dostatečně daleko a blízko osy. Při zamčeném úhlu napište vzdálenost a stiskněte **Enter** — kopie se umístí přesně s tímto odsazením.

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí k hodnotě vzdálenosti |
| `-` | Záporná vzdálenost — obrátí směr podél osy (pouze první znak) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Umístí kopie na zadanou vzdálenost |

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr a přejde do fáze základního bodu |
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X, nebo vzdálenosti při zamčeném úhlu |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí souřadnici nebo provede kopii na zadanou vzdálenost |
| `Escape` | Zruší a resetuje |

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepíná objekt pod kurzorem do výběru / z výběru |
| **Tažení doprava** (přísný výběr) | Přidá objekty, které leží celé uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Přidá objekty, které protínají hranici rámečku |
| **Enter** / **Space** | Potvrdí výběr |

## Po zkopírování

**Originály zůstanou vybrané** — nové kopie se přidají do výkresu, ale výběr se zruší a příkaz se ukončí. Chcete-li s kopiemi ihned pracovat, spusťte Copy znovu na výběru, nebo zahajte nový příkaz.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originály | Zůstanou na místě | Odstraní se z původní pozice |
| Počet výsledků | Zvýší se o počet zkopírovaných objektů | Beze změny |
| Po operaci | Originály stále vybrané | Přesunuté objekty vybrané na nové pozici |
| Nejvhodnější pro | Opakování geometrie, souměrná rozvržení | Přemístění geometrie |

## Podporované objekty

Copy funguje na všech typech objektů. Všechny objekty interně implementují `translate(dx, dy)`, takže žádný není vyloučen.
