---
title: "Dimension Diameter-kommandot — Ange fullständiga diametrar för cirklar och bågar i KulmanLab CAD"
description: "Dimension Diameter-kommandot placerar ett diametermått (med diametersymbolen som prefix) tvärs över en båge eller cirkel genom centrum. Flytta markören för att rotera måttlinjen till valfri vinkel. Fullständig DXF-rundtur som DIMENSION-diameterentiteter."
keywords: [CAD diametermått, dimdiameter, ange cirkeldiameter, bågdiametermått, diametersymbol CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

`dimdiameter`-kommandot placerar ett diametermått på en båge eller cirkel. Måttlinjen sträcker sig över hela diametern — och passerar genom centrum mellan två diametralt motsatta bågpunkter — och märks `⌀ <värde>`. För att bara ange radien från centrum till en kant, använd [Dimension Radius](../dim-radius/).

## Anatomin hos ett diametermått

```
  ●──────────── ⌀ 10.00 ────────────●
  (bortre bågpunkt)              (närmaste bågpunkt / textsida)
```

- **Måttlinje** — sträcker sig över hela diametern, med pilspetsar vid båda bågskärningspunkterna.
- **Närmaste bågpunkt** — periferipunkten på markörsidan (där textetiketten sitter).
- **Bortre bågpunkt** — den diametralt motsatta punkten.
- **Etikett** — `⌀` följt av diametervärdet.

## Placera ett diametermått

1. Skriv `dimdiameter` i terminalen eller klicka på **Dimension Diameter**-knappen i verktygsfältet.
2. **Klicka på en båge eller cirkel** för att markera den.
3. **Flytta markören** för att rotera måttlinjen till önskad vinkel.
4. **Klicka** för att placera måttet.

Endast **Arc**- och **Circle**-entiteter kan väljas.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Escape` | Avbryt |

## Dimension Diameter jämfört med Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Mäter | Full diameter (2 × radie) | Radie (centrum till kant) |
| Måttlinje | Kant → kant genom centrum | Centrum → kant |
| Etikettprefix | `⌀` | `R` |
| Pilspetsar | Två (vid båda bågpunkterna) | En (vid bågpunkten) |
| Bäst för | Fullständiga cirkulära hål- eller axelmått | Att ange en sida av en böjd form |

## Redigera etiketten — enkelt läge

**Dubbelklicka** på ett placerat diametermått för att öppna textredigeraren i **enkelt** läge. Redigeraren är förifylld med det aktuella visade värdet (t.ex. `⌀ 10.00`) så att du kan placera markören och redigera det direkt.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Typsnitt / Höjd | Tillämpas på **hela** etiketten samtidigt |
| Teckenspecifik formatering | Stöds inte |
| `Enter` | Bekräftar värdet och stänger redigeraren |
| Flera rader | Stöds inte |

Se [Textredigerare — enkelt läge](../../interface/text-editor/#simple-mode) för fullständig referens.

## DXF — DIMENSION-diameterentitet

Diametermått sparas som `DIMENSION`-entiteter med diametertypsgeometri, som lagrar båda bågpunktspositionerna och det uppmätta diametervärdet (2 × radie). Alla egenskaper bevaras vid rundtur utan förlust.
