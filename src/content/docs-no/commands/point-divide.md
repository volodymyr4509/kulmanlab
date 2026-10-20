---
title: "PointDivide-kommando — plasser punkter med like lengder langs et objekt"
description: "PointDivide-kommandoen deler en linje, polylinje, bue, sirkel, ellipse eller spline i stykker med lik lengde og plasserer et punkt ved hver deling, med forhåndsvisning mens du skriver antall stykker."
keywords: ["CAD dele-kommando", "del linje i like deler CAD", "punkter langs objekt CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Kommandoen `InndelMedPunkter` plasserer [punkter](../point/) som deler et objekt i stykker med lik lengde. Selve objektet endres ikke: punktene er nye entiteter på gjeldende lag og i gjeldende farge, nyttige å snappe til.

## Dele et objekt

1. Skriv `InndelMedPunkter` i terminalen eller velg **Point Divide** i matrise-nedtrekksmenyen i panelet Edit.
2. **Klikk på objektet** — en linje, polylinje, bue, sirkel, ellipse eller spline. Alt annet avvises, og du kan velge på nytt.
3. **Skriv antall stykker**, et helt tall fra 2 til 32767. Punktene forhåndsvises på objektet mens du skriver.
4. Trykk **Enter** eller **Space** for å plassere dem. Kommandoen avsluttes.

## Hvor punktene havner

- Avstanden måles som lengde langs objektet, ikke som vinkel, så en ellipse eller spline deles i stykker med lik lengde. Buesegmenter i en polylinje følges langs kurven sin.
- På et åpent objekt — en linje, åpen polylinje, bue, delvis ellipse eller åpen spline — havner punktene mellom stykkene, aldri på endene: 5 stykker gir 4 punkter.
- På et lukket objekt — en sirkel, lukket polylinje, hel ellipse eller lukket spline — går punktene hele veien rundt fra starten, som også får et punkt: en sirkel starter ved vinkel 0, en lukket polylinje ved første knutepunkt. 5 stykker gir 5 punkter.
- Et tall utenfor 2–32767 avvises: terminalen sier hvorfor og tømmer det, så du kan skrive på nytt.

Backspace sletter siste siffer. Escape starter på nytt, så du kan velge et annet objekt. Enter eller Space før et objekt er valgt, avslutter kommandoen.

---

*Relatert: [Point Interval](../point-interval/) for punkter med fast avstand, [Point](../point/) for enkeltpunkter og [ArrayPolar](../array-polar/) for å gjenta objekter i stedet for punkter.*
