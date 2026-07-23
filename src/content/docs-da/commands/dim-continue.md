---
title: Dimension Continue — Kæd Mål fra en Eksisterende Baseline
description: Dimension Continue-kommandoen forlænger en kæde af mål fra den anden hjælpelinje til det senest placerede mål. Den arver automatisk basismålets vinkel, forskydning, pilstørrelse og teksthøjde. Fungerer med både lineære og justerede baser.
keywords: [CAD dimension continue, dimcontinue, kæd mål CAD, baseline-mål, fortsæt målserie, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Kommandoen `dimcontinue` kæder nye mål fra **den anden hjælpelinje** til et eksisterende mål. Hvert nye segment placeres langs samme måleakse og med samme mållinjeforskydning som basen. Alle stilegenskaber — pilstørrelse, teksthøjde, hjælpelinjelængder — kopieres automatisk fra basen.

## Sådan ser kædede mål ud

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (base    p3           p4
           hjælp2 → ny start)
```

Hvert rektangel er en separat `DIMENSION`-entitet. De deler samme mållinjeposition og måleretning.

## Starte en kæde

1. Skriv `dimcontinue` i terminalen eller klik på **Dimension Continue**-knappen i værktøjslinjen.
2. **Hvis et mål netop er blevet placeret** — kommandoen samler det automatisk op som base (intet klik nødvendigt).
3. **Hvis der ikke findes noget nyligt mål** — klik et eksisterende mål for at bruge det som base.
4. **Klik oprindelsen af den næste hjælpelinje** — en forhåndsvisning viser det nye mål, mens du flytter markøren. Eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
5. Fortsæt med at klikke (eller skrive) for at forlænge kæden. Hvert placeret mål bliver automatisk den nye base.
6. Tryk **Enter**, **Space** eller **Escape** for at afslutte kæden.

## Hvad der arves fra basismålet

| Egenskab | Arvet fra basen |
|----------|---------------------|
| Måleretning / vinkel | Ja — låst for hele kæden |
| Mållinjeforskydning (afstand fra målte punkter) | Ja |
| Pilstørrelse | Ja |
| Teksthøjde | Ja |
| Hjælpelinjeforskydning og -forlængelse | Ja |
| Tekstjustering | Ja |
| Stilnavn | Ja |
| Farve, Lag | Arves ikke — bruger det aktuelle lag |

## Låsning af måleretning

Kædens måleretning er **fast til basismålets vinkel**:

- Lineær base (H) → alle fortsættelser måler horisontal afstand (Δ X).
- Lineær base (V) → alle fortsættelser måler vertikal afstand (Δ Y).
- Justeret base i en hvilken som helst vinkel → alle fortsættelser måler langs samme vinkel.

Du kan ikke ændre retningen midt i kæden. Start et nyt [Dimension Linear](../dim-linear/) eller [Dimension Aligned](../dim-aligned/) for at dimensionere i en anden retning.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat, eller afslut kæden hvis ingen indtastning er i gang |
| `Space` / `Escape` | Afslut kæden |

## Dimension Continue vs at starte forfra

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Startpunkt | Fast ved sidste bases hjælp2 | Klik hvor som helst |
| Vinkel | Låst til basen | Fri |
| Forskydning | Arvet fra basen | Sat af markør eller indtastet |
| Stil | Arvet fra basen | Aktuel stil |
| Bedst til | Kumulative målinger langs en række | Første mål eller ændring af retning |

## Redigere etiketter efter placering — simpel tilstand

**Dobbeltklik** et hvilket som helst mål i kæden for at åbne teksteditoren i **simpel** tilstand. Hvert segment er uafhængigt og kan redigeres individuelt.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Skrifttype / Højde | Gælder **hele** etiketten på én gang |
| Per-tegn formatering | Understøttes ikke |
| `Enter` | Bekræfter værdien og lukker editoren |
| Flerlinje | Understøttes ikke |

Se [Tekstredigering — simpel tilstand](../../interface/text-editor/#simple-mode) for den fulde reference.

## DXF — DIMENSION-entiteter

Hvert segment i kæden gemmes som en uafhængig `DIMENSION`-entitet i DXF-filen. De er ikke koblet sammen i filen — de deler egenskaber, fordi de blev oprettet fra samme base, men hver kan redigeres individuelt efter placering.
