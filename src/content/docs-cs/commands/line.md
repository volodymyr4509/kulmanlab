---
title: Příkaz Line — kreslení, řetězení, ořezávání a prodlužování úseček
description: Příkaz Line kreslí jednotlivé přímé úsečky, které lze řetězit za sebou. Úsečky jsou jediným typem objektu, na kterém fungují Trim a Extend. Plná výměna dat s DXF jako objekty LINE.
keywords: [CAD příkaz úsečka, kreslení přímé čáry CAD, řetězení úseček, ořezání úsečky CAD, prodloužení úsečky CAD, zámek úhlu CAD, objekt LINE DXF, kulmanlab]
group: shapes
order: 1
---

# Line

Příkaz `line` kreslí jednotlivé přímé úsečky uložené jako samostatné objekty `LINE` v modelu DXF. Po každé úsečce zůstává příkaz aktivní a koncový bod znovu použije jako nový počáteční bod, takže můžete budovat spojené trasy po jednom segmentu. Na rozdíl od [Polyline](../polyline/) zůstávají zřetězené úsečky nezávislými objekty — každou z nich lze oříznout, prodloužit nebo smazat, aniž by to ovlivnilo sousední.

## Kreslení úseček

1. Napište `line` do terminálu nebo klikněte na tlačítko **Line** v panelu nástrojů.
2. **Klikněte na počáteční bod**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na koncový bod** — úsečka se umístí a koncový bod se stane dalším počátečním bodem. Zadávání souřadnic funguje i zde.
4. Dalším klikáním (nebo psaním) řetězíte další segmenty.
5. Zastavíte stisknutím **Enter**, **Space** nebo **Escape**.

```
  ●──────────●──────────●──────────●
 start     2. klik    3. klik    Enter/Space pro dokončení
            (automaticky se stane dalším začátkem)
```

Potřebujete jen jednu úsečku? Stiskněte **Enter**, **Space** nebo **Escape** hned po kroku 3.

## Zadávání souřadnic

Místo klikání můžete napsat přesnou polohu počátečního nebo libovolného dalšího bodu:

1. Napište hodnotu X (číslice, `.` nebo `-`).
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** bod umístíte.

## Zámek úhlu a zadání přesné délky

Když po umístění bodu pohybujete kurzorem, příkaz sleduje uchopovací osu po 45° (0°, 45°, 90°, 135°, …). Úhel se **zamkne**, když:

- je kurzor vzdálen od kotvy alespoň **5 × velikost úchytu**, **a zároveň**
- je ve kolmé vzdálenosti do **1 velikosti úchytu** od nejbližší osy.

Při zamčeném úhlu se náhled přichytí k ose a můžete zadat přesnou délku:

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k hodnotě délky |
| `-` | Záporná délka — obrátí směr podél osy (pouze jako první znak) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Umístí koncový bod na zadanou vzdálenost |

Nashromážděná hodnota se živě zobrazuje v terminálu (např. `click end point or enter length: 12.5`). Když kliknete při zamčeném úhlu, klik se promítne na osu, takže koncový bod vždy leží přesně na ní.

Návrat kurzoru blízko ke kotevnímu bodu zámek uvolní.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X, nebo vzdálenosti při zamčeném úhlu |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí zadanou souřadnici nebo délku, nebo ukončí řetěz, pokud nic není zadáno |
| `Space` | Totéž jako `Enter` — ukončí řetěz, pokud se právě nezadává délka; v takovém případě tuto délku potvrdí |
| `Escape` | Ukončí řetěz a opustí příkaz |

## Úpravy úchyty — natahování koncových bodů

Vybraná úsečka zobrazuje tři úchyty:

| Úchyt | Kde | Co dělá |
|-------|-----|---------|
| **Start** | První koncový bod | Přetažením změníte polohu — konec zůstane pevný |
| **Midpoint** | Střed úsečky | Aktivuje **Move** pro celou úsečku |
| **End** | Druhý koncový bod | Přetažením změníte polohu — začátek zůstane pevný |

Natažení jednoho koncového bodu nikdy neovlivní druhý. To se liší od úprav úchyty u [Polyline](../polyline/), kde přesunutí vrcholu mění tvar celé trasy.

## Výběr úseček

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere úsečku, pokud je klik v dosahu detekce zásahu segmentu |
| **Tažení doprava** (přísný výběr) | Úsečka se vybere, jen když oba koncové body leží uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Úsečka se vybere, pokud jakákoli část segmentu protíná hranici rámečku |

## Podporované editační příkazy

Úsečky jsou **jediným** objektem, na který působí [Trim](../trim/) a [Extend](../extend/). Platí pro ně i všechny standardní transformační příkazy:

| Příkaz | Co se s úsečkou stane |
|--------|------------------------|
| [Move](../move/) | Posune oba koncové body o stejné přemístění |
| [Copy](../copy/) | Vytvoří shodnou úsečku na nové pozici |
| [Rotate](../rotate/) | Otočí oba koncové body kolem zvoleného základního bodu |
| [Mirror](../mirror/) | Zrcadlí oba koncové body podle osy zrcadlení |
| [Scale](../scale/) | Rovnoměrně změní měřítko obou koncových bodů od základního bodu |
| [Offset](../offset/) | Vytvoří rovnoběžnou úsečku v pevné kolmé vzdálenosti |
| [Trim](../trim/) | Ořízne úsečku v průsečících — **pouze úsečky** |
| [Extend](../extend/) | Natáhne nejbližší koncový bod k hranici — **pouze úsečky** |
| [Delete](../delete/) | Odstraní úsečku z výkresu |

## Vlastnosti

Když je úsečka vybrána, panel vlastností zobrazí všechna pole, která nese záznam DXF `LINE`:

**Obecné**

| Vlastnost | Výchozí | Význam |
|-----------|---------|--------|
| Color | 256 (ByLayer) | Index barvy ACI |
| Layer | `0` | Přiřazení do hladiny |
| Linetype | ByLayer | Pojmenovaný vzor typu čáry |
| Linetype Scale | 1 | Činitel měřítka vzoru typu čáry |
| Thickness | 0 | Tloušťka vytažení |

**Geometrie**

| Vlastnost | Význam |
|-----------|--------|
| Start X / Start Y | Souřadnice prvního koncového bodu |
| End X / End Y | Souřadnice druhého koncového bodu |

Všechna pole lze upravovat přímo v panelu, aniž byste museli příkaz spouštět znovu.

## Line vs Polyline — kdy použít který

| | Line | Polyline |
|---|------|---------|
| Počet objektů | Jeden `LINE` na segment | Jedna `LWPOLYLINE` pro celou trasu |
| Trim / Extend | Ano — po segmentech | Ne |
| Uzavřený tvar | Ne | Ano (příznak uzavření) |
| Úpravy úchyty | Natahování jednotlivých koncových bodů | Přesun libovolného vrcholu podél trasy |
| Nejvhodnější pro | Pomocné čáry, jednotlivé segmenty, geometrii, kterou budete ořezávat | Obrysy, tvary, které chcete zachovat vcelku |

## DXF — objekt LINE

Úsečky se do souboru DXF ukládají jako objekty `LINE`. Každá vlastnost — souřadnice začátku/konce, barva, hladina, typ čáry, měřítko typu čáry a tloušťka — se přenáší beze ztráty. Když otevřete DXF obsahující objekty `LINE`, stanou se v editoru plně upravitelnými objekty `Line`.

Úsečky nakreslené v editoru se při uložení zapisují také jako objekty `LINE`, takže je přečtou LibreCAD, FreeCAD i jakákoli jiná aplikace kompatibilní s DXF.
