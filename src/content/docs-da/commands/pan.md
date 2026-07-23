---
title: Pan-kommando — Klik-og-Træk Viewport-navigation i KulmanLab CAD
description: Pan-kommandoen går ind i en vedvarende træk-for-at-panorere-tilstand. Klik og træk hvor som helst på lærredet for at forskyde visningen uden at ændre zoomniveauet. Midterklik-træk fungerer når som helst uden at aktivere Pan.
keywords: [CAD pan viewport, pan-kommando, træk for at navigere, lærredsrulning CAD, viewport-navigation, kulmanlab]
group: navigate
order: 1
---

# Pan

Kommandoen `pan` går ind i en vedvarende træk-for-at-panorere-tilstand — klik og træk hvor som helst på lærredet for at forskyde visningen. Zoomniveauet ændres ikke. Pan-tilstand forbliver aktiv, indtil du trykker `Escape`, så du kan trække flere gange i én aktivering.

## Panorere visningen

1. Skriv `pan` i terminalen eller klik på **Pan**-knappen i værktøjslinjen.
2. **Klik og træk** hvor som helst på lærredet for at forskyde visningen.
3. Slip og træk igen så mange gange som nødvendigt.
4. Tryk `Escape` for at afslutte pan-tilstand.

## Midterklik-træk — panorér uden at aktivere kommandoen

Den hurtigste måde at panorere på: **hold den midterste museknap nede og træk** når som helst, selv mens en anden kommando er aktiv. Ingen kommandoaktivering nødvendig. At slippe den midterste knap vender tilbage til uanset hvilken tilstand du var i.

## Pan vs zoom-kontroller

| Handling | Effekt | Kræver Pan-tilstand? |
|--------|--------|-------------------|
| Venstreklik-træk (Pan-tilstand) | Forskyder viewporten | Ja |
| Midterklik-træk | Forskyder viewporten | Nej — fungerer altid |
| Rullehjul | Zoomer mod markøren | Nej — fungerer altid |
| Dobbeltklik midterste knap | Tilpas alle entiteter | Nej — fungerer altid |
| [Zoom In](../zoom-in/) / [Zoom Out](../zoom-out/) | Trinvis zoom 1,5× | Nej |
| [Fit](../fit/) | Tilpasser alle entiteter i visningen | Nej |

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` | Afslut pan-tilstand |

## Tips

- Brug rullehjulet til at zoome mod et målområde, og panorér derefter for at finjustere positionen.
- **Dobbeltklik på midterste museknap** udløser [Fit](../fit/) øjeblikkeligt — den hurtigste måde at nulstille en tabt visning på.
- Hvis du er midt i en kommando (f.eks. placerer et linjeendepunkt), brug midterklik-træk for at panorere uden at annullere kommandoen.
