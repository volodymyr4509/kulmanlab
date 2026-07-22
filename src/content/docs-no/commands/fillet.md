---
title: Fillet-kommando — Avrund et Hjørne mellom To Linjer
description: Fillet-kommandoen forbinder to Line-entiteter med en tangentbue med en angitt radius, og trimmer hver linje tilbake til tangentpunktet. En stiplet bue-forhåndsvisning hjelper deg med å velge riktig hjørne før du klikker.
keywords: [CAD fillet-kommando, avrund hjørne CAD, fillet-bue, tangentbue to linjer, kulmanlab]
group: edit
order: 11
---

# Fillet

Kommandoen `fillet` avrunder hjørnet mellom to [Line](../line/)-entiteter ved å sette inn en tangentbue med en gitt radius og trimme hver linje tilbake til punktet der buen begynner. Resultatet er et jevnt, avrundet hjørne som forbinder begge linjene.

Fillet fungerer kun på **Line-entiteter**.

## Bruke fillet

1. Skriv `fillet` i terminalen eller klikk på **Fillet**-knappen i verktøylinjen.
2. **Skriv inn fillet-radiusen** og trykk **Enter**.
3. **Klikk den første linjen** — delen du klikker avgjør hvilken side av et eventuelt skjæringspunkt som beholdes.
4. **Hold markøren over den andre linjen** — en stiplet bue-forhåndsvisning viser den resulterende fileten. Flytt markøren til siden du vil beholde.
5. **Klikk** for å bruke. Begge linjer trimmes og buen settes inn.

```
  Før:                        Etter fillet (radius r):

  ──────────────              ──────────╮
                │                        ╰────
                │
```

## Sidevalg for krysende linjer

Når to linjer krysser hverandre, brukes fileten på hjørnet definert av klikkposisjonene — delen av hver linje på **samme side som markøren** beholdes.

- Klikk nær den ene enden av den første linjen for å velge den halvdelen.
- Flytt markøren til ønsket halvdel av den andre linjen — den stiplede forhåndsvisningen oppdateres live.

## Hva kommandoen oppretter

- Den første linjens endepunkt nærmest skjæringspunktet flyttes til tangentpunktet **T1**.
- Den andre linjens endepunkt nærmest skjæringspunktet flyttes til tangentpunktet **T2**.
- En ny Arc-entitet settes inn fra **T1** til **T2**, tangent til begge linjene.

Den innsatte buen arver gjeldende lineweight-, farge-, lag- og linetype-innstillinger.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i radiusverdien |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft den inntastede radiusen og gå videre til linjevalg |
| `Escape` | Avbryt og tilbakestill |

## Støttede entiteter

| Entitet | Støttet |
|--------|-----------|
| Line | Ja — som både første og andre entitet |
| Arc, Circle, Ellipse, Polyline | Nei |
| Text, Spline, Dimension, Leader | Nei |

## Fillet vs Chamfer

| | Fillet | Chamfer |
|---|--------|---------|
| Hjørnetype | Avrundet bue | Rett kutt |
| Inndata | Én radius | To avstander (d1, d2) |
| Innsatt entitet | Arc | Line |
| Støttede entiteter | Kun Lines | Lines og Polylines |
