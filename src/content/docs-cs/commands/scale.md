---
title: Příkaz Scale — rovnoměrná změna velikosti objektů kolem základního bodu
description: Příkaz Scale rovnoměrně změní velikost vybraných objektů napsaným činitelem kolem pevného základního bodu. Činitel se vždy zadává na klávesnici — nastavení měřítka kliknutím neexistuje. Činitel větší než 1 zvětšuje, menší než 1 zmenšuje. Podporován je každý typ objektu.
keywords: [CAD příkaz scale, změna velikosti objektů CAD, měřítko objektů CAD, rovnoměrné měřítko CAD, činitel měřítka CAD, zvětšení zmenšení CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Příkaz `scale` rovnoměrně změní velikost vybraných objektů kolem základního bodu. Všechny vzdálenosti od základního bodu se vynásobí činitelem měřítka — činitel `2` zdvojnásobí všechny rozměry, `0.5` je zmenší na polovinu. Činitel se vždy zadává psaním; nastavení měřítka kliknutím neexistuje.

## Dva způsoby spuštění

**Nejdřív vybrat, pak změnit měřítko** — nejprve vyberte objekty, poté příkaz aktivujte:

1. Vyberte na plátně jeden nebo více objektů.
2. Napište `scale` do terminálu nebo klikněte na tlačítko **Scale** v panelu nástrojů.
3. **Klikněte na základní bod** — pevný bod, který se při změně měřítka nepohybuje. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
4. **Napište činitel měřítka** a stiskněte **Enter**.

**Nejdřív aktivovat, pak vybrat** — spusťte příkaz, když není nic vybráno:

1. Napište `scale` nebo klikněte na tlačítko v panelu nástrojů.
2. **Vyberte objekty** — kliknutím přepínáte, nebo tažením vyberete oblastí.
3. Stiskněte **Enter** nebo **Space** pro potvrzení výběru.
4. **Klikněte na základní bod** (dostupné je zadávání souřadnic), poté napište činitel.

```
  Základ ●              Základ ●
        [objekt]   →          [větší objekt]
  činitel = 2 → vzdálenosti od ● se zdvojnásobí
```

## Zadání činitele měřítka

Po umístění základního bodu terminál zobrazí `enter scale factor:` a čeká na vstup z klávesnice:

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k činiteli |
| `-` | Záporný činitel (pouze jako první znak — nejprve převrátí, pak změní měřítko) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Použije měřítko s napsaným činitelem |

Činitel musí být nenulový. Běžné hodnoty:

| Činitel | Účinek |
|---------|--------|
| `2` | Zdvojnásobí všechny rozměry |
| `0.5` | Zmenší všechny rozměry na polovinu |
| `1.5` | Zvětší o 50 % |
| `-1` | Zrcadlí přes základní bod (odpovídá otočení o 180°) |

Při psaní není žádný živý náhled — výsledek se objeví až po stisknutí **Enter**.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `Enter` / `Space` | Potvrdí výběr |
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X (fáze základního bodu), nebo činitele měřítka (fáze činitele) |
| `,` | Zamkne X a přejde na zadávání Y (fáze základního bodu) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí souřadnici nebo použije měřítko |
| `Escape` | Zruší a resetuje |

## Výběr během příkazu

| Metoda | Chování |
|--------|---------|
| **Klik** | Přepne objekt pod kurzorem |
| **Tažení doprava** (přísný) | Přidá objekty zcela uvnitř rámečku |
| **Tažení doleva** (protínající) | Přidá objekty, které rámeček protínají |
| **Enter** / **Space** | Potvrdí výběr |

## Co se mění v měřítku

Podporovány jsou všechny typy objektů. Každý objekt změní měřítko své geometrie vzhledem k základnímu bodu:

| Objekt | Co se změní |
|--------|-------------|
| Line | Oba koncové body se oddálí od základního bodu |
| Circle | Střed se změní v měřítku od základního bodu; poloměr se vynásobí činitelem |
| Arc | Střed se změní v měřítku; poloměr se vynásobí činitelem; úhly beze změny |
| Ellipse | Střed se změní v měřítku; obě délky poloos se vynásobí činitelem |
| Polyline / Rectangle | Každý vrchol se změní v měřítku od základního bodu |
| Text | Kotevní bod se změní v měřítku; výška se vynásobí činitelem |
| Spline | Všechny řídicí vrcholy / proložené body se změní v měřítku |
