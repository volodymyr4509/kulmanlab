---
title: "PointInterval-kommando — plasser punkter med fast avstand langs et objekt"
description: "PointInterval-kommandoen plasserer punkter med en innskrevet avstand langs en linje, polylinje, bue, sirkel, ellipse eller spline, fra enden du klikker nærmest, med forhåndsvisning mens du skriver lengden."
keywords: ["punkter med intervall CAD", "punkter med fast avstand langs linje CAD", "CAD mål langs objekt", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Kommandoen `PunkterMedIntervall` plasserer [punkter](../point/) med fast avstand langs et objekt, slik man merker stasjoner langs en trasé. Selve objektet endres ikke: punktene er nye entiteter på gjeldende lag og i gjeldende farge, nyttige å snappe til.

## Punkter med et intervall

1. Skriv `PunkterMedIntervall` i terminalen eller velg **Point Interval** i matrise-nedtrekksmenyen i panelet Edit.
2. **Klikk på objektet nær enden det skal startes fra** — en linje, polylinje, bue, sirkel, ellipse eller spline. Alt annet avvises, og du kan velge på nytt.
3. **Skriv intervallets lengde.** Punktene forhåndsvises på objektet mens du skriver.
4. Trykk **Enter** eller **Space** for å plassere dem. Kommandoen avsluttes.

## Hvor punktene havner

- Det første punktet kommer ett intervall inn fra starten, og resten følger med ett intervalls avstand, målt langs objektet, kurver inkludert. Det kommer ikke noe punkt på selve starten.
- På et åpent objekt — en linje, åpen polylinje, bue, delvis ellipse eller åpen spline — måles det fra enden du klikket nærmest. Det som blir til overs ved den fjerne enden, forblir umerket: den fjerne enden får et punkt bare når intervallet går nøyaktig opp.
- På et lukket objekt — en sirkel, lukket polylinje, hel ellipse eller lukket spline — måles det fra objektets egen start, uansett hvor du klikker: en sirkel fra vinkel 0 mot klokken, en lukket polylinje fra første knutepunkt. Punktene stopper før starten.
- En lengde på 0 eller mindre, en lengre enn objektet eller en som ville gi mer enn 32767 punkter, avvises: terminalen sier hvorfor og tømmer den, så du kan skrive på nytt.

Backspace sletter siste tegn. Escape starter på nytt, så du kan velge et annet objekt. Enter eller Space før et objekt er valgt, avslutter kommandoen.

---

*Relatert: [Point Divide](../point-divide/) for å dele et objekt i et antall like lengder og [Point](../point/) for enkeltpunkter.*
