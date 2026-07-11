---
title: Dimension Radius-kommandot — Ange radier för bågar och cirklar i KulmanLab CAD
description: Dimension Radius-kommandot placerar ett radiellt mått med R-prefix på en båge eller cirkel. Klicka på entiteten och flytta sedan markören för att rikta måttlinjen från centrum till periferin. Fullständig DXF-rundtur som DIMENSION-radieentiteter.
keywords: [CAD radiemått, dimradius, ange cirkelradie, bågradiemått, R-prefix mått, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

`dimradius`-kommandot placerar ett radiemått på en båge eller cirkel. Måttlinjen går från centrum till en punkt på periferin i markörens riktning, märkt `R <värde>`. För att mäta en hel diameter istället, använd [Dimension Diameter](../dim-diameter/).

## Anatomin hos ett radiemått

```
  ● (centrum)
   \
    \  R 5.00
     \
      ●────── text (markörsida)
   (bågpunkt)
```

- **Måttlinje** — från centrum genom en bågpunkt mot markören, med en pilspets vid bågen.
- **Etikett** — `R` följt av radievärdet.

## Placera ett radiemått

1. Skriv `dimradius` i terminalen eller klicka på **Dimension Radius**-knappen i verktygsfältet.
2. **Klicka på en båge eller cirkel** för att markera den.
3. **Flytta markören** för att rikta måttlinjen — bågpunkten följer markörens riktning från centrum.
4. **Klicka** för att placera måttet.

Endast **Arc**- och **Circle**-entiteter kan väljas. Att klicka på någon annan entitetstyp gör ingenting.

## Tangentbordsreferens

| Tangent | Åtgärd |
|-----|--------|
| `Escape` | Avbryt |

## Dimension Radius jämfört med Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Mäter | Radie (centrum till kant) | Diameter (kant till kant genom centrum) |
| Måttlinje | Centrum → bågpunkt | Bågpunkt → bågpunkt (genom centrum) |
| Etikettprefix | `R` | `⌀` |
| Pilspetsar | En (vid bågpunkten) | Två (vid båda bågpunkterna) |
| Bäst för | Att ange en sida av en böjd form | Att ange fullständiga cirkulära mått |

## Redigera etiketten — enkelt läge

**Dubbelklicka** på ett placerat radiemått för att öppna textredigeraren i **enkelt** läge. Redigeraren är förifylld med det aktuella visade värdet (t.ex. `R 5.00`) så att du kan placera markören och redigera det direkt.

| Funktion | Beteende |
|---------|-----------|
| Fet / Kursiv / Typsnitt / Höjd | Tillämpas på **hela** etiketten samtidigt |
| Teckenspecifik formatering | Stöds inte |
| `Enter` | Bekräftar värdet och stänger redigeraren |
| Flera rader | Stöds inte |

Se [Textredigerare — enkelt läge](../../interface/text-editor/#simple-mode) för fullständig referens.

## DXF — DIMENSION-radieentitet

Radiemått sparas som `DIMENSION`-entiteter med radietypsgeometri, som lagrar centrumkoordinaterna, bågpunktens position och det uppmätta radievärdet. Alla egenskaper bevaras vid rundtur utan förlust.
