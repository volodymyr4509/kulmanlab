---
title: "PointDivide-kommando — placér punkter med lige store længder langs et objekt"
description: "PointDivide-kommandoen deler en linje, polylinje, bue, cirkel, ellipse eller spline i stykker af samme længde og placerer et punkt ved hver deling, med forhåndsvisning, mens du skriver antallet af stykker."
keywords: ["CAD del-kommando", "del linje i lige store dele CAD", "punkter langs objekt CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Kommandoen `InddelMedPunkter` placerer [punkter](../point/), der deler et objekt i stykker af samme længde. Selve objektet ændres ikke: punkterne er nye entiteter på det aktuelle lag og i den aktuelle farve, nyttige at snappe til.

## Del et objekt

1. Skriv `InddelMedPunkter` i terminalen eller vælg **Point Divide** i array-rullemenuen i panelet Edit.
2. **Klik på objektet** — en linje, polylinje, bue, cirkel, ellipse eller spline. Alt andet afvises, og du kan vælge igen.
3. **Skriv antallet af stykker**, et helt tal fra 2 til 32767. Punkterne vises på objektet, mens du skriver.
4. Tryk **Enter** eller **Space** for at placere dem. Kommandoen afsluttes.

## Hvor punkterne havner

- Afstanden måles som længde langs objektet, ikke som vinkel, så en ellipse eller spline deles i stykker af samme længde. Polylinjens buesegmenter følges langs deres kurve.
- På et åbent objekt — en linje, åben polylinje, bue, delvis ellipse eller åben spline — havner punkterne mellem stykkerne, aldrig på enderne: 5 stykker giver 4 punkter.
- På et lukket objekt — en cirkel, lukket polylinje, hel ellipse eller lukket spline — går punkterne hele vejen rundt fra dets start, som også får et punkt: en cirkel starter ved vinkel 0, en lukket polylinje ved dens første knudepunkt. 5 stykker giver 5 punkter.
- Et tal uden for 2–32767 afvises: terminalen siger hvorfor og rydder det, så du kan skrive igen.

Backspace sletter det sidste ciffer. Escape starter forfra, så du kan vælge et andet objekt. Enter eller Space, før et objekt er valgt, afslutter kommandoen.

---

*Relateret: [Point Interval](../point-interval/) til punkter med fast afstand, [Point](../point/) til enkelte punkter og [ArrayPolar](../array-polar/) til at gentage objekter i stedet for punkter.*
