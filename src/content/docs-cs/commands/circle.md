---
title: Příkaz Circle — kreslení kružnic podle středu a poloměru
description: Příkaz Circle umístí kružnici kliknutím na střed a poté kliknutím nebo zadáním poloměru. Čtyři kvadrantové úchyty umožňují měnit poloměr tažením bez opětovného spuštění příkazu. Plná výměna dat s DXF jako objekty CIRCLE.
keywords: [CAD příkaz kružnice, kreslení kružnice CAD, zadání poloměru kružnice, změna velikosti kružnice úchytem, objekt CIRCLE DXF, kóta poloměru kružnice, kulmanlab]
group: shapes
order: 4
---

# Circle

Příkaz `circle` kreslí kružnici určenou středem a poloměrem. Po kliknutí na střed můžete poloměr nastavit buď kliknutím na druhý bod na plátně, nebo zadáním přesného čísla — obě možnosti jsou aktivní současně.

## Kreslení kružnice

1. Napište `circle` do terminálu nebo klikněte na tlačítko **Circle** v panelu nástrojů.
2. **Klikněte na střed**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. Nastavte poloměr — buď:
   - **Klikněte na libovolný bod** na plátně — vzdálenost od středu se stane poloměrem, nebo
   - **Napište poloměr** a stiskněte **Enter** pro přesnou hodnotu.

Kružnice se umístí okamžitě a příkaz se ukončí.

```
  střed ●
         \  náhled úsečky poloměru
          \
           ● ← klikněte sem, nebo napište číslo
```

Ve fázi poloměru zobrazuje živý náhled kružnici při aktuální vzdálenosti kurzoru a kreslí také úsečku poloměru od středu k aktuálnímu bodu.

## Zadání souřadnic středu

Místo klikání můžete napsat polohu středu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** umístíte střed a přejdete k zadání poloměru.

## Zadání poloměru z klávesnice

Po umístění středu se psaním okamžitě sestavuje hodnota poloměru:

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k hodnotě poloměru |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Umístí kružnici se zadaným poloměrem |

Nashromážděná hodnota se zobrazuje ve výzvě terminálu (např. `enter radius of circle: 25`). Náhled se aktualizuje a ukazuje zadaný poloměr, zatímco kurzor řídí směr značky úsečky poloměru.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X (fáze středu), nebo číslici poloměru (fáze poloměru) |
| `,` | Zamkne X a přejde na zadávání Y (fáze středu) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí zadanou souřadnici nebo poloměr |
| `Escape` | Zruší a resetuje |

## Úpravy úchyty — změna poloměru

Vybraná kružnice zobrazuje pět úchytů:

| Úchyt | Poloha | Co dělá |
|-------|--------|---------|
| **Center** | Střed | Přesune celou kružnici; poloměr zůstane beze změny |
| **Left** | Nejlevější bod (střed − poloměr) | Přetažením nastavíte nový poloměr = vzdálenost ke středu |
| **Right** | Nejpravější bod (střed + poloměr) | Přetažením nastavíte nový poloměr = vzdálenost ke středu |
| **Top** | Nejhořejší bod | Přetažením nastavíte nový poloměr = vzdálenost ke středu |
| **Bottom** | Nejspodnější bod | Přetažením nastavíte nový poloměr = vzdálenost ke středu |

Všechny čtyři kvadrantové úchyty se chovají stejně — nový poloměr se rovná vzdálenosti od středu k místu tažení. Střed zůstává pevný.

## Výběr kružnic

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere, pokud klik dopadne blízko obvodu |
| **Tažení doprava** (přísný výběr) | Celý ohraničující čtverec (střed ± poloměr) musí ležet uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Kružnici vybere jakákoli část obvodu, která protíná nebo se dotýká hranice rámečku |

## Podporované editační příkazy

| Příkaz | Co se s kružnicí stane |
|--------|------------------------|
| [Move](../move/) | Posune střed; poloměr beze změny |
| [Copy](../copy/) | Vytvoří shodnou kružnici s novým středem |
| [Rotate](../rotate/) | Otočí střed kolem základního bodu; poloměr beze změny |
| [Mirror](../mirror/) | Zrcadlí střed podle osy zrcadlení; poloměr beze změny |
| [Scale](../scale/) | Změní polohu středu a vynásobí poloměr činitelem měřítka |
| [Offset](../offset/) | Vytvoří soustřednou kružnici s větším nebo menším poloměrem |
| [Delete](../delete/) | Odstraní kružnici |

## Vlastnosti

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
| Center X / Center Y | Souřadnice středu |
| Radius | Poloměr kružnice v jednotkách výkresu |

## Circle vs Arc — kdy použít který

| | Circle | Arc |
|---|--------|-----|
| Rozsah | Celých 360° | Částečný — určený počátečním a koncovým úhlem |
| Jak kreslit | Střed + poloměr | Tři body na křivce |
| Zadání z klávesnice | Hodnota poloměru | Žádné — pouze klikání |
| Úchyt pro změnu velikosti | 4 kvadrantové body | Počáteční a koncový bod (úhel + poloměr) |
| Kótování | Poloměr: [Dim Radius](../dim-radius/) · Průměr: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Nejvhodnější pro | Plné otvory, roztečné kružnice šroubů, kulaté prvky | Zaoblení, částečné křivky, klenuté trasy |

## DXF — objekt CIRCLE

Kružnice se do souboru DXF ukládají jako objekty `CIRCLE`. Souřadnice středu, poloměr, barva, hladina, typ čáry, měřítko typu čáry a tloušťka se přenášejí beze ztráty. Jakákoli aplikace kompatibilní s DXF je čte jako standardní kružnice.
