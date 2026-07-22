---
title: Chamfer-kommando — Skjær et Rett Hjørne mellom To Linjer
description: Chamfer-kommandoen forbinder to Line- eller Polyline-entiteter med et rett diagonalt kutt. Du angir to avstander — én langs hver entitet — og kommandoen trimmer begge tilbake til disse punktene og setter inn en forbindelseslinje.
keywords: [CAD chamfer-kommando, skjær linje CAD, diagonalt hjørnekutt, avfase hjørne CAD, kulmanlab]
group: edit
order: 12
---

# Chamfer

Kommandoen `chamfer` skjærer et rett diagonalt hjørne mellom to [Line](../line/)- eller [Polyline](../polyline/)-entiteter. Du angir hvor langt tilbake det skal kuttes langs hver entitet (d1 og d2), og kommandoen trimmer begge entitetene til disse punktene og setter inn en forbindelseslinje mellom dem.

Å bruke like avstander gir et symmetrisk 45°-kutt; forskjellige avstander gir en asymmetrisk fasing.

Chamfer fungerer på **Line- og Polyline**-entiteter.

## Bruke chamfer

1. Skriv `chamfer` i terminalen eller klikk på **Chamfer**-knappen i verktøylinjen.
2. **Skriv inn den første chamfer-avstanden** (d1 — avstand langs den første entiteten) og trykk **Enter**.
3. **Skriv inn den andre chamfer-avstanden** (d2 — avstand langs den andre entiteten) og trykk **Enter**.
4. **Klikk den første entiteten** — delen du klikker avgjør hvilken side av et eventuelt skjæringspunkt som beholdes.
5. **Hold markøren over den andre entiteten** — en stiplet linjeforhåndsvisning viser det resulterende chamfer-kuttet. Flytt markøren til siden du vil beholde.
6. **Klikk** for å bruke. Begge entiteter trimmes og chamfer-linjen settes inn.

```
  Før (d1=5, d2=8):           Etter:

  ──────────────              ──────────╲
                │                        ╲────
                │
```

## Sidevalg

Når to linjer krysser hverandre, brukes chamferen på hjørnet definert av klikkposisjonene — delen av hver entitet på **samme side som markøren** beholdes.

- Klikk nær den ene enden av den første entiteten for å velge den halvdelen.
- Flytt markøren til ønsket halvdel av den andre entiteten — den stiplede forhåndsvisningen oppdateres live.

For Polylines avgjør klikkposisjonen hvilket **segment** av polylinjen som deltar, og det nærmeste hjørnet på skjæringssiden er det som trimmes.

## Hva kommandoen oppretter

- Den første entitetens endepunkt (eller polylinje-hjørne) nærmest skjæringspunktet flyttes til punkt **T1**, plassert d1 langs den første entiteten fra skjæringspunktet.
- Den andre entitetens endepunkt (eller polylinje-hjørne) nærmest skjæringspunktet flyttes til punkt **T2**, plassert d2 langs den andre entiteten fra skjæringspunktet.
- En ny Line-entitet settes inn fra **T1** til **T2**.

Den innsatte linjen arver gjeldende lineweight-, farge-, lag- og linetype-innstillinger.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i gjeldende avstandsverdi |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft den inntastede avstanden og gå videre |
| `Escape` | Avbryt og tilbakestill |

## Støttede entiteter

| Entitet | Støttet |
|--------|-----------|
| Line | Ja |
| Polyline / Rectangle | Ja |
| Arc, Circle, Ellipse | Nei |
| Text, Spline, Dimension, Leader | Nei |

## Chamfer vs Fillet

| | Chamfer | Fillet |
|---|---------|--------|
| Hjørnetype | Rett kutt | Avrundet bue |
| Inndata | To avstander (d1, d2) | Én radius |
| Innsatt entitet | Line | Arc |
| Støttede entiteter | Lines og Polylines | Kun Lines |
