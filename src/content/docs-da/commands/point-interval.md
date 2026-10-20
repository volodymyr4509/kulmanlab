---
title: "PointInterval-kommando — placér punkter med fast afstand langs et objekt"
description: "PointInterval-kommandoen placerer punkter med en indtastet afstand langs en linje, polylinje, bue, cirkel, ellipse eller spline, fra den ende du klikker nærmest, med forhåndsvisning, mens du skriver længden."
keywords: ["punkter med interval CAD", "punkter med fast afstand langs linje CAD", "CAD mål langs objekt", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Kommandoen `PunkterMedInterval` placerer [punkter](../point/) med fast afstand langs et objekt, som når man markerer stationer langs en rute. Selve objektet ændres ikke: punkterne er nye entiteter på det aktuelle lag og i den aktuelle farve, nyttige at snappe til.

## Punkter med et interval

1. Skriv `PunkterMedInterval` i terminalen eller vælg **Point Interval** i array-rullemenuen i panelet Edit.
2. **Klik på objektet nær den ende, der skal startes fra** — en linje, polylinje, bue, cirkel, ellipse eller spline. Alt andet afvises, og du kan vælge igen.
3. **Skriv intervallets længde.** Punkterne vises på objektet, mens du skriver.
4. Tryk **Enter** eller **Space** for at placere dem. Kommandoen afsluttes.

## Hvor punkterne havner

- Det første punkt kommer ét interval inde fra starten, og resten følger med ét intervals afstand, målt langs objektet, kurver medregnet. Der kommer intet punkt på selve starten.
- På et åbent objekt — en linje, åben polylinje, bue, delvis ellipse eller åben spline — måles der fra den ende, du klikkede nærmest. Det, der er tilbage ved den fjerne ende, forbliver umarkeret: den fjerne ende får kun et punkt, når intervallet går præcis op.
- På et lukket objekt — en cirkel, lukket polylinje, hel ellipse eller lukket spline — måles der fra objektets egen start, uanset hvor du klikker: en cirkel fra vinkel 0 mod uret, en lukket polylinje fra dens første knudepunkt. Punkterne stopper før starten.
- En længde på 0 eller mindre, en længere end objektet eller en, der ville give mere end 32767 punkter, afvises: terminalen siger hvorfor og rydder den, så du kan skrive igen.

Backspace sletter det sidste tegn. Escape starter forfra, så du kan vælge et andet objekt. Enter eller Space, før et objekt er valgt, afslutter kommandoen.

---

*Relateret: [Point Divide](../point-divide/) til at dele et objekt i et antal lige store længder og [Point](../point/) til enkelte punkter.*
