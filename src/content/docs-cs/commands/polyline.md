---
title: Příkaz Polyline — kreslení vícesegmentových cest jako jednoho objektu
description: Příkaz Polyline nakreslí libovolný počet navazujících přímých nebo obloukových segmentů uložených jako jeden objekt LWPOLYLINE. Klávesou A přepnete režim Arc pro obloukové segmenty s tečným navázáním. Úchyty vrcholů a středů segmentů umožňují po vytvoření změnit tvar kterékoli části cesty, přímé i zakřivené.
keywords: [CAD příkaz polyline, kreslení polyline CAD, vícesegmentová cesta CAD, obloukový segment polyline, LWPOLYLINE bulge, LWPOLYLINE DXF, změna tvaru polyline, úchyt vrcholu CAD, odsazení polyline, kulmanlab]
group: shapes
order: 2
---

# Polyline

Příkaz `polyline` nakreslí navazující cestu s libovolným počtem přímých nebo obloukových segmentů, všechny uložené jako jediný objekt `LWPOLYLINE`. Protože je celá cesta jedním objektem, její výběr vybere všechny segmenty najednou — celý tvar můžete posunout, otočit nebo změnit v měřítku jedinou operací. To je klíčový rozdíl oproti řetězeným [Lines](../line/), kde je každý segment samostatný objekt.

Polyline může být také **uzavřená**: příkaz [Rectangle](../rectangle/) používá stejný objekt `LWPOLYLINE` s nastaveným příznakem uzavření.

## Kreslení polyline

1. Napište `polyline` do terminálu nebo klikněte na tlačítko **Polyline** v panelu nástrojů.
2. **Klikněte na první bod**, nebo napište `X,Y` a stiskněte **Enter** pro přesnou souřadnici.
3. **Klikněte na každý další bod** — každé kliknutí přidá segment. Zadávání souřadnic funguje v každém kroku.
4. Stisknutím **Enter** nebo **Space** dokončíte (vyžaduje aspoň 2 umístěné body).

```
  ●──────●
  1.     2.
          \
           \  segment 3 (rozpracovaný — kurzor zde)
            ●  ← kliknutím přidáte, Enter/Space dokončí
```

Stisknutím **Escape** kdykoli zahodíte všechny umístěné body a příkaz ukončíte.

## Kreslení obloukového segmentu

Stiskněte **A** kdykoli po prvním vrcholu, čímž přepnete režim Arc — stejný princip vložené volby, jaký používá volba `Copy` příkazu [Rotate](../rotate/). Výzva ukazuje aktuální stav jako `[Arc=true]` / `[Arc=false]` a dalším stisknutím **A** jej vrátíte zpět, takže můžete v jedné polyline libovolně střídat přímé a obloukové segmenty.

```
  ●──────●
  1.     2.  ← stiskněte A: [Arc=true]
          ╲
           ╲   obloukový segment (rozpracovaný)
            ●  ← kliknutím přidáte
```

Když je režim Arc zapnutý, každý nový segment je **oblouk s tečným navázáním** — výchozí chování oblouku, bez dalších voleb pro střed, poloměr nebo směr. Oblouk začíná tečně k tomu, co bylo bezprostředně před ním: tečně ke směru předchozího segmentu, pokud šlo o úsečku, nebo tečně ke konci předchozího oblouku, pokud šlo o oblouk. Úplně první segment polyline (bez předchozího segmentu, k němuž by mohl být tečný) míří výchozím směrem přesně na východ.

Přepnutím zpět na `[Arc=false]` se pokračuje přímými segmenty od místa, kde skončil poslední vrchol, a můžete znovu přepnout pro další oblouk — počet přepnutí v rámci jedné polyline není omezen.

## Zadávání souřadnic

Místo klikání napište přesnou polohu libovolného vrcholu:

1. Napište hodnotu X.
2. Stiskněte `,` — terminál zobrazí `[X], [Y{kurzor}]`.
3. Napište hodnotu Y.
4. Stisknutím **Enter** vrchol umístíte.

## Zamykání úhlu a přesná délka segmentu

Mezi libovolnými dvěma po sobě jdoucími body platí stejná logika přichycení po 45° jako u příkazu [Line](../line/#zámek-úhlu-a-zadání-přesné-délky). Při zamknutí k ose:

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.` | Připojí číslici k délce segmentu |
| `-` | Záporná délka — obrátí směr podél osy (pouze jako první znak) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Umístí další bod na napsanou vzdálenost |

Aktuální nashromážděná délka se zobrazuje ve výzvě terminálu v reálném čase. Kliknutí při zamknutí se promítne na osu, takže nový vrchol leží přesně na ní.

## Přehled kláves

| Klávesa | Akce |
|---------|------|
| `0`–`9`, `.`, `-` | Zahájí zadávání souřadnice X, nebo délky segmentu při zamknutém úhlu |
| `,` | Zamkne X a přejde na zadávání Y |
| `A` | Přepne režim Arc pro další segment (po prvním vrcholu, když neprobíhá žádné zadávání) |
| `Backspace` | Smaže poslední zadaný znak |
| `Enter` | Potvrdí napsanou souřadnici nebo délku, nebo dokončí polyline, pokud není nic napsáno a existují ≥ 2 body |
| `Space` | Dokončí polyline (stejné jako Enter, když neprobíhá žádné zadávání) |
| `Escape` | Zahodí všechny body a ukončí |

## Úprava úchyty — vrcholy a středy segmentů

Vybraná polyline zobrazuje dva typy úchytů:

| Úchyt | Poloha | Co dělá |
|-------|--------|---------|
| **Vrchol** | V každém umístěném bodě | Tažením přemístíte daný vrchol; všechny navazující segmenty se natáhnou, aby jej následovaly |
| **Střed segmentu** | Střed každého segmentu | Tažením posunete **oba** koncové body daného segmentu společně, při zachování délky a úhlu segmentu |

Úchyt středu segmentu je jedinečný pro polyline — umožňuje posunout jednotlivý segment do strany beze změny jeho délky. U [Line](../line/) naopak úchyt středu aktivuje příkaz Move pro celý objekt.

**Obloukový segment** se chytá stejně jako přímý — tažení kteréhokoli koncového vrcholu nebo úchytu středu segmentu změní tvar oblouku, přičemž jeho vybočení (úhel oblouku) zůstane konstantní a oblouk se přizpůsobí novou polohou, stejně jako u úchytů samostatného objektu [Arc](../arc/).

Neexistuje jediný úchyt „přesunout celou polyline". K přesunu celé cesty použijte příkaz [Move](../move/).

## Výběr polyline

| Metoda | Chování |
|--------|---------|
| **Klik** | Vybere polyline, pokud kliknutí padne v testovací vzdálenosti od kteréhokoli segmentu |
| **Tažení doprava** (přísný) | Všechny vrcholy musí ležet uvnitř rámečku |
| **Tažení doleva** (protínající) | Jakýkoli segment, který protíná hranici rámečku, vybere celou polyline |

Protože je polyline jeden objekt, protínající výběr, který se dotkne kteréhokoli segmentu, vybere všechny segmenty.

## Podporované editační příkazy

Polyline podporuje všechny obecné transformace, plus offset, trim, extend, fillet a chamfer — obloukové segmenty jsou plně podporovány všemi z nich kromě Chamfer, který vybírá vždy jen **přímý** segment (obloukový segment zkosit nelze — použijte místo toho [Fillet](../fillet/), nebo jej nejprve ořízněte):

| Příkaz | Co se s polyline stane |
|--------|------------------------|
| [Move](../move/) | Posune všechny vrcholy o stejné posunutí |
| [Copy](../copy/) | Vytvoří shodnou polyline na nové pozici |
| [Rotate](../rotate/) | Otočí všechny vrcholy kolem zvoleného základního bodu |
| [Mirror](../mirror/) | Zrcadlí všechny vrcholy podle osy zrcadlení |
| [Scale](../scale/) | Rovnoměrně změní měřítko všech vrcholů od základního bodu |
| [Offset](../offset/) | Vytvoří rovnoběžnou polyline v pevné kolmé vzdálenosti — obloukové segmenty se odsadí na nový poloměr, stejně jako samostatný [Arc](../arc/) |
| [Trim](../trim/) | Odstraní část polyline mezi dvěma průsečíky, přímé i obloukové segmenty stejně |
| [Extend](../extend/) | Natáhne první nebo poslední segment polyline k další hranici — koncový obloukový segment se rozšiřuje po vlastní kružnici |
| [Fillet](../fillet/) | Zaoblí roh mezi dvěma **sousedními** segmenty, přímými nebo obloukovými, tečným obloukem vloženým do polyline jako nový segment s vybočením |
| [Chamfer](../chamfer/) | Zkosí roh mezi dvěma **sousedními přímými** segmenty; obloukový segment v daném rohu se při výběru přeskočí |
| [Delete](../delete/) | Odstraní polyline z výkresu |
| [Explode](../explode/) | Rozloží polyline na samostatné objekty Line a Arc, jeden na segment |

Zaoblení jednoho ze segmentů polyline vůči něčemu jinému než jejímu vlastnímu sousednímu segmentu nezůstává jednoduchou úpravou na místě — viz [Fillet](../fillet/), co z toho vznikne (sloučení do jediné nové polyline, spojené obloukem zaoblení).

## Vlastnosti

Když je polyline vybrána, panel vlastností zobrazí:

**Obecné**

| Vlastnost | Výchozí | Význam |
|----------|---------|--------|
| Color | 256 (ByLayer) | Index barvy ACI |
| Layer | `0` | Přiřazení k hladině |
| Linetype | ByLayer | Pojmenovaný vzor typu čáry |
| Linetype Scale | 1 | Měřítko vzoru typu čáry |
| Thickness | 0 | Tloušťka vytažení |

**Geometrie**

| Vlastnost | Význam |
|----------|--------|
| Closed | Zda poslední vrchol navazuje zpět na první |
| Vertex Count | Celkový počet vrcholů |
| Vertices | Seznam souřadnic všech vrcholů |

## Polyline vs Line — kdy použít kterou

| | Polyline | Line |
|---|---------|------|
| Počet objektů | Jeden `LWPOLYLINE` pro celou cestu | Jeden `LINE` na segment |
| Uzavřený tvar | Ano (příznak uzavření) | Ne |
| Obloukové segmenty | Ano, po segmentech přes přepínač `Arc` | Ne — zakřivený segment vyžaduje samostatný objekt [Arc](../arc/) |
| Trim / Extend | Ano | Ano — po segmentech |
| Úchyt středu segmentu | Posune celý segment | Aktivuje Move pro objekt |
| Nejvhodnější pro | Obrysy, kontury, tvary, které držíte pohromadě | Konstrukční čáry, geometrie, kterou budete ořezávat |

## DXF — objekt LWPOLYLINE

Polyline se v souboru DXF ukládají jako objekty `LWPOLYLINE`. Všechny vlastnosti — souřadnice vrcholů, příznak uzavření, barva, hladina, typ čáry, měřítko typu čáry a tloušťka — se přenášejí beze ztráty. Obdélníky nakreslené příkazem [Rectangle](../rectangle/) se také ukládají jako `LWPOLYLINE` (uzavřená, čtyři vrcholy) a na úrovni DXF jsou od nich nerozeznatelné.

Každý vrchol nese také **vybočení (bulge)** (skupinový kód DXF 42) — 0 pro přímý segment k dalšímu vrcholu, nebo znaménkovou hodnotu vybočení odpovídající tangentě čtvrtiny úhlu pro zakřivený (kladné vybočení se stáčí proti směru hodinových ručiček, záporné po směru). Vybočení se přenášejí beze ztráty, takže polyline s obloukovými segmenty importovaná z DXF jiné CAD aplikace se vykresluje, vybírá, upravuje úchyty, ořezává, prodlužuje a šrafuje přesně jako ta, která byla nakreslena zde s volbou Arc.

Objekty `LWPOLYLINE` z libovolné aplikace kompatibilní s DXF (LibreCAD, FreeCAD apod.) se v editoru načítají zpět jako plně editovatelné polyline.
