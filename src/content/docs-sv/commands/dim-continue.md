---
title: Dimension Continue — Kedja mått från en befintlig baslinje
description: Dimension Continue-kommandot förlänger en kedja av mått från den andra hjälplinjen i det senast placerade måttet. Det ärver automatiskt basmåttets vinkel, avstånd, pilstorlek och texthöjd. Fungerar med både linjära och inriktade baser.
keywords: [CAD dimension continue, dimcontinue, kedja mått CAD, baslinjemått, fortsätt måttserie, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

`dimcontinue`-kommandot kedjar nya mått från den **andra hjälplinjen** i ett befintligt mått. Varje nytt segment placeras längs samma mätaxel och med samma måttlinjeavstånd som basen. Alla stilegenskaper — pilstorlek, texthöjd, hjälplinjelängder — kopieras automatiskt från basen.

## Så ser kedjade mått ut

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (bas     p3           p4
           ext2 → ny start)
```

Varje rektangel är en separat `DIMENSION`-entitet. De delar samma måttlinjeposition och mätriktning.

## Starta en kedja

1. Skriv `dimcontinue` i terminalen eller klicka på **Dimension Continue**-knappen i verktygsfältet.
2. **Om ett mått nyss placerats** — kommandot hämtar det automatiskt som bas (inget klick behövs).
3. **Om inget nyligen skapat mått finns** — klicka på ett befintligt mått för att använda det som bas.
4. **Klicka på nästa hjälplinjeursprung** — en förhandsvisning visar det nya måttet medan du rör markören. Eller skriv `X,Y` och tryck **Enter** för en exakt koordinat.
5. Fortsätt klicka (eller skriva) för att förlänga kedjan. Varje placerat mått blir automatiskt den nya basen.
6. Tryck **Enter**, **Space** eller **Escape** för att avsluta kedjan.

## Vad som ärvs från basmåttet

| Egenskap | Ärvs från bas |
|----------|---------------------|
| Mätriktning / vinkel | Ja — låst för hela kedjan |
| Måttlinjeavstånd (avstånd från uppmätta punkter) | Ja |
| Pilstorlek | Ja |
| Texthöjd | Ja |
| Hjälplinjeavstånd och förlängning | Ja |
| Textjustering | Ja |
| Stilnamn | Ja |
| Färg, Lager | Ärvs inte — använder aktuellt lager |

## Låsning av mätriktning

Kedjans mätriktning är **låst till basmåttets vinkel**:

- Linjär bas (H) → alla fortsättningar mäter horisontellt avstånd (Δ X).
- Linjär bas (V) → alla fortsättningar mäter vertikalt avstånd (Δ Y).
- Inriktad bas i valfri vinkel → alla fortsättningar mäter längs samma vinkel.

Du kan inte ändra riktning mitt i kedjan. Starta ett nytt [Dimension Linear](../dim-linear/) eller [Dimension Aligned](../dim-aligned/) för att mäta i en annan riktning.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `0`–`9`, `.`, `-` | Starta inmatning av X-koordinat |
| `,` | Lås X och gå till Y-inmatning |
| `Backspace` | Ta bort senast skrivna tecken |
| `Enter` | Bekräfta inskriven koordinat, eller avsluta kedjan om ingen inmatning pågår |
| `Space` / `Escape` | Avsluta kedjan |

## Dimension Continue jämfört med att börja om

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Startpunkt | Fast vid senaste basens ext2 | Klicka var som helst |
| Vinkel | Låst till bas | Fri |
| Avstånd | Ärvs från bas | Sätts av markör eller inskriven |
| Stil | Ärvs från bas | Aktuell stil |
| Bäst för | Kumulativa mätningar längs en rad | Första måttet eller byte av riktning |

## Redigera etiketter efter placering — enkelt läge

**Dubbelklicka** på valfritt mått i kedjan för att öppna textredigeraren i **enkelt** läge. Varje segment är oberoende och kan redigeras individuellt.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Typsnitt / Höjd | Tillämpas på **hela** etiketten samtidigt |
| Teckenspecifik formatering | Stöds inte |
| `Enter` | Bekräftar värdet och stänger redigeraren |
| Flera rader | Stöds inte |

Se [Textredigerare — enkelt läge](../../interface/text-editor/#simple-mode) för fullständig referens.

## DXF — DIMENSION-entiteter

Varje segment i kedjan lagras som en oberoende `DIMENSION`-entitet i DXF-filen. De är inte länkade i filen — de delar egenskaper eftersom de skapades från samma bas, men var och en kan redigeras individuellt efter placering.
