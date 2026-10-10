---
title: Příkaz Arc — kreslení tříbodových oblouků metodou opsané kružnice
description: Příkaz Arc kreslí kruhový oblouk přesně třemi kliknutými body pomocí geometrie opsané kružnice. Úchyty začátku a konce umožňují po umístění přetáhnout koncové body oblouku na nový úhel a poloměr. Plná výměna dat s DXF jako objekty ARC.
keywords: [CAD příkaz oblouk, tříbodový oblouk CAD, oblouk opsanou kružnicí, kreslení oblouku CAD, objekt ARC DXF, úpravy oblouku úchyty, kulmanlab]
group: shapes
order: 5
---

# Arc

Příkaz `arc` kreslí kruhový oblouk procházející třemi body, na které kliknete. Oblouk se vypočítá jako jediná opsaná kružnice procházející všemi třemi body — nemusíte přímo zadávat střed ani poloměr. Oblouk vede od prvního kliknutí ke třetímu a prochází druhým.

## Kreslení oblouku

1. Napište `arc` do terminálu nebo klikněte na tlačítko **Arc** v panelu nástrojů.
2. **Klikněte na první bod** — jeden konec oblouku. Nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na druhý bod** — bod, kterým musí oblouk projít (určuje zakřivení a směr). Zadávání souřadnic funguje i zde.
4. **Klikněte na třetí bod** — druhý konec oblouku. Oblouk se umístí a příkaz se ukončí. Zadávání souřadnic funguje i zde.

```
           ● (2. klik — bod na křivce)
          / \
         /   \
        ●     ●
     1.         3.
```

Úsečkový náhled spojuje první dvě kliknutí, zatímco umísťujete třetí. Od druhého kliknutí dál sleduje kurzor živý náhled oblouku.

> **Kolineární body**: pokud všechny tři body leží na přímce, oblouk nelze vypočítat a žádný objekt se neumístí. Posuňte druhý bod mimo přímku a zkuste to znovu.

## Další způsoby kreslení oblouku

Výchozí jsou tři body. U některých výzev terminál nabízí volby v hranatých závorkách, například `[Center=false]` — napsáním písmene volby ji zapnete (`[Center=true]`) a dalším napsáním vypnete. Jejich kombinací lze oblouk nakreslit šesti dalšími způsoby:

| Způsob | Zapnout | Poslední krok |
|---|---|---|
| Start, Center, End | `C` | koncový bod |
| Start, Center, Angle | `C`, `A` | úhel |
| Start, Center, Length | `C`, `L` | délka tětivy |
| Start, End, Angle | `E` | úhel |
| Start, End, Direction | `E`, `D` | směr tečny |
| Start, End, Radius | `E`, `R` | poloměr |

- V posledním kroku každého způsobu kromě Start, Center, End buď napište číslo a stiskněte **Enter** nebo **Space**, nebo pohněte kurzorem a klikněte — kurzor se přečte jako toto číslo (směr u úhlu nebo směru tečny, vzdálenost u délky tětivy nebo poloměru).
- Kladný úhel jde od začátku proti směru hodinových ručiček, záporný po směru. Úhel 0° nebo celé otáčky oblouk nevytvoří a terminál to oznámí.
- Kladná délka tětivy nebo poloměr vezme kratší cestu, záporná delší. Tětiva delší než průměr nebo poloměr menší než polovina tětivy se odmítne a terminál uvede mez.
- Start, Center, End používá jen směr koncového bodu od středu: oblouk jde od začátku proti směru hodinových ručiček tam, kde tento směr protne kružnici. Směr tečny je úhel ve stupních od osy X, kterým oblouk opouští svůj začátek.
- Chcete-li zvolit střed před počátečním bodem, napište `C` hned u první výzvy.
- Písmena voleb se řídí jazykem rozhraní; zde jsou uvedena anglická.

## Zadávání souřadnic

V kterémkoli ze tří kroků můžete místo klikání napsat přesnou polohu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** bod umístíte.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X |
| `,` | Zamkne X a přejde na zadávání Y |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí zadanou souřadnici |
| `C` `E` `A` `L` `D` `R` | Zapnutí nebo vypnutí volby: `C` Center, `E` End, `A` Angle, `L` Length, `D` Direction, `R` Radius |
| `Escape` | Zahodí všechny umístěné body a ukončí příkaz |

## Úpravy úchyty — úprava koncových bodů a poloměru

Vybraný oblouk zobrazuje tři úchyty:

| Úchyt | Poloha | Co dělá |
|-------|--------|---------|
| **Center** | Geometrický střed opsané kružnice | Přesune celý oblouk; poloměr a úhly zůstanou beze změny |
| **Start** | První koncový bod na oblouku | Přetažením posunete začátek po opsané kružnici — mění počáteční úhel i poloměr |
| **End** | Poslední koncový bod na oblouku | Přetažením posunete konec po opsané kružnici — mění koncový úhel i poloměr |

Přetažení úchytu začátku nebo konce jej přemístí na místo tažení a znovu vypočítá úhel i poloměr z této nové polohy vzhledem ke středu. Protilehlý koncový bod zůstane pevný.

## Výběr oblouků

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere, pokud klik dopadne blízko křivky oblouku (nikoli tětivy) |
| **Tažení doprava** (přísný výběr) | Všechny vzorkovací body rozmístěné podél oblouku musí ležet uvnitř rámečku |
| **Tažení doleva** (výběr křížením) | Oblouk vybere jakýkoli vzorkovací bod, který padne dovnitř rámečku |

## Podporované editační příkazy

| Příkaz | Co se s obloukem stane |
|--------|------------------------|
| [Move](../move/) | Posune střed; poloměr a úhly zůstanou beze změny |
| [Copy](../copy/) | Vytvoří shodný oblouk na nové pozici |
| [Rotate](../rotate/) | Otočí střed a posune počáteční/koncový úhel o velikost otočení |
| [Mirror](../mirror/) | Zrcadlí střed a převrátí počáteční/koncový úhel podle osy zrcadlení |
| [Scale](../scale/) | Změní polohu středu a vynásobí poloměr činitelem měřítka |
| [Offset](../offset/) | Vytvoří soustřednou obloukovou čáru s větším nebo menším poloměrem, se stejným rozsahem úhlu |
| [Delete](../delete/) | Odstraní oblouk |

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
| Center X / Center Y | Střed opsané kružnice |
| Radius | Poloměr opsané kružnice |
| Start Angle | Úhel ve stupních, kde oblouk začíná (měřeno od kladné osy X) |
| End Angle | Úhel ve stupních, kde oblouk končí |

## Arc vs Circle — kdy použít který

| | Arc | Circle |
|---|-----|--------|
| Rozsah | Částečný — od prvního ke třetímu kliknutí | Celých 360° |
| Způsob zadání | Tři body na křivce | Střed + poloměr (kliknutím nebo zadáním) |
| Zadání z klávesnice | Souřadnice X,Y pro každý bod | Hodnota poloměru (střed rovněž přijímá X,Y) |
| Změna velikosti po umístění | Přetažení úchytů začátku/konce | Přetažení libovolného kvadrantového úchytu |
| Nejvhodnější pro | Zaoblení, zaoblené rohy, klenuté trasy | Plné otvory, kulaté prvky |

## DXF — objekt ARC

Oblouky se do souboru DXF ukládají jako objekty `ARC` se souřadnicemi středu, poloměrem, počátečním a koncovým úhlem. Všechny vlastnosti — včetně barvy, hladiny, typu čáry, měřítka typu čáry a tloušťky — se přenášejí beze ztráty. Jakákoli aplikace kompatibilní s DXF (LibreCAD, FreeCAD atd.) je čte jako standardní oblouky.
