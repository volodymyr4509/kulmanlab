---
title: Příkaz Rotate — otočení objektů kolem základního bodu
description: Příkaz Rotate otočí vybrané objekty kolem zvoleného základního bodu. Úhel lze napsat přesně nebo nastavit kliknutím. Přepínač Copy (klávesa C) otočí místo originálů duplikáty. Kladné úhly jsou v souřadnicích DXF proti směru hodinových ručiček.
keywords: [CAD příkaz rotate, otočení objektů CAD, otočení objektů o úhel, otočení a kopie CAD, otočení proti směru hodinových ručiček CAD, otočení napsaným úhlem, kulmanlab]
group: edit
order: 3
---

# Rotate

Příkaz `rotate` otočí vybrané objekty kolem základního bodu. Úhel otočení zadáte buď napsáním čísla ve stupních, nebo kliknutím — úhel se vypočítá ze směru mezi základním bodem a místem kliknutí.

## Dva způsoby spuštění

**Nejdřív vybrat, pak otočit** — nejprve vyberte objekty, poté příkaz aktivujte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `rotate` do terminálu nebo klikněte na tlačítko **Rotate** v panelu nástrojů.
3. **Klikněte na základní bod** — střed otáčení. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
4. **Napište úhel a stiskněte Enter**, nebo **kliknutím** nastavte úhel podle směru kurzoru.

**Nejdřív aktivovat, pak vybrat** — spusťte příkaz, když není nic vybráno:

1. Napište `rotate` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — kliknutím přepínáte, nebo tažením vyberete oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení výběru.
4. **Klikněte na základní bod** (dostupné je zadávání souřadnic), poté nastavte úhel.

```
  Před:              Po (otočení o 90° kolem ●):
                        ╔══╗
  ●  [objekt]    →   ● ║    ║
                        ╚══╝
```

Živý náhled otočených objektů ve formě duchů sleduje úhel kurzoru po nastavení základního bodu.

## Nastavení úhlu

**Napsaný úhel** — napište číslo (ve stupních) kdykoli po umístění základního bodu. Náhled přiskočí k napsanému úhlu, zatímco můžete před stisknutím Enter dále upravovat.

**Úhel kliknutím** — pokud není napsána žádná hodnota, kliknutí nastaví úhel rovný `atan2(cursorY − baseY, cursorX − baseX)` — směr od základního bodu k místu kliknutí, ve stupních.

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k hodnotě úhlu |
| `-` | Záporný úhel (pouze jako první znak) |
| `C` | Přepne režim Copy (před psaním jakýchkoli číslic) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Použije otočení o napsaný úhel |

## Otočení kopie

Stiskněte **C** ve výzvě k zadání úhlu — před psaním jakýchkoli číslic — čímž přepnete režim **Copy**, stejný princip vložené volby, jaký používá přepínač `Arc` příkazu [Polyline](../polyline/). Výzva ukazuje aktuální stav jako `[Copy=true]` / `[Copy=false]` a dalším stisknutím **C** jej vrátíte zpět.

Při zapnutém Copy použití otočení ponechá původní výběr nedotčený na místě a místo toho přidá **nové, otočené kopie** každého vybraného objektu. Při vypnutém Copy (výchozí) se výběr otočí na místě jako obvykle.

## Směr úhlu

Úhly se řídí **konvencí DXF**:

- **Kladné** hodnoty otáčejí **proti směru hodinových ručiček** v souřadnicích výkresu (Y nahoru).
- Na obrazovce, kde je osa Y invertována (Y dolů), se kladné úhly zobrazují **po směru hodinových ručiček**.

Běžné hodnoty: `90` = čtvrtotáčka, `180` = půlotáčka, `-90` = opačná čtvrtotáčka.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr |
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X (fáze základního bodu), nebo hodnoty úhlu (fáze úhlu) |
| `,` | Zamkne X a přejde na zadávání Y (fáze základního bodu) |
| `C` | Přepne režim Copy (fáze úhlu, před psaním jakýchkoli číslic) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí souřadnici nebo použije otočení |
| `Escape` | Zruší a resetuje |

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepne objekt pod kurzorem |
| **Tažení doprava** (přísný) | Přidá objekty zcela uvnitř rámečku |
| **Tažení doleva** (protínající) | Přidá objekty, které rámeček protínají |
| **Enter** / **Space** | Potvrdí výběr |

## Podporované objekty

Rotate funguje na každém typu objektu. Geometrie každého objektu se otočí kolem základního bodu — například Circle přesune svůj střed, zatímco poloměr zůstane stejný; Arc přesune střed a posune počáteční a koncový úhel o velikost otočení; objekt Text přesune svůj kotevní bod a přičte úhel k vlastnosti Rotation Degree.
