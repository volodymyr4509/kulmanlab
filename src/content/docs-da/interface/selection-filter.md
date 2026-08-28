---
title: Markeringsfilter — Indsnævr en flermarkering efter egenskab
description: Når mange entiteter er markeret, åbner et filterikon i egenskabspanelets overskrift et vindue med levende afkrydsningslister for Type, Lag, Farve, Linjetykkelse og Linjetype, bygget ud fra det, der faktisk er i markeringen, så en stor blandet markering kan indsnævres før masseredigering.
keywords: [markeringsfilter, filtrere markering CAD, facetfilter, indsnævre markering, masseredigering CAD, filter i egenskabspanelet, kulmanlab]
group: interface
order: 7
---

# Markeringsfilter

At markere mange entiteter på én gang åbner egenskabspanelet i dets flermarkeringsvisning ("Selection (N)"). Et **filterikon** ved siden af lukkeknappen lader dig indsnævre den markering efter egenskab, før du redigerer den samlet.

## Åbning af filteret

1. Markér flere entiteter — træk en markeringsramme, Skift-klik eller tryk Ctrl+A.
2. Klik på **filterikonet** (tragten) i egenskabspanelets overskrift.
3. Under knappen åbnes et vindue med en afkrydsningsliste for hver egenskab, der rent faktisk varierer inden for markeringen.

## Facetter

Vinduet kan vise op til fem facetter, hver bygget direkte ud fra den aktuelle markering:

| Facet | Viste værdier |
|-------|---------------|
| **Type** | Entitetstypens navn (Line, Circle, Hatch, …) |
| **Lag** | Lagnavn med en farveprøve, der svarer til laget |
| **Farve** | ACI-farveindeks |
| **Linjetykkelse** | Værdien for linjetykkelse |
| **Linjetype** | Linjetypens navn |

En facet vises kun, hvis markeringen faktisk indeholder mere end én særskilt værdi for den — at markere ti linjer, der alle ligger på samme lag, giver ingen Lag-facet, da en afkrydsning dér ikke ville indsnævre noget. Entiteter, der slet ikke bærer en given egenskab (Hatch og Text har for eksempel hverken linjetykkelse eller linjetype), tælles ganske enkelt ikke med i den facet — og udelukkes heller aldrig af den.

## Indsnævring af markeringen

Sæt kryds ved en eller flere værdier i en vilkårlig facet for at indsnævre markeringen til entiteter, der opfylder **alle** afkrydsede facetter (en entitet skal ramme mindst én afkrydset værdi i *hver* facet, du har rørt, ikke kun i én). Hver facets egne felter og tællinger afspejler, hvad de *øvrige* afkrydsede facetter allerede har indsnævret til, så en facet skjuler aldrig sine egne allerede afkrydsede valg — den sædvanlige opførsel ved facetteret søgning.

Antallet af resultater opdateres løbende, mens du sætter og fjerner kryds, og selve markeringen på tegnefladen indsnævres med — dette er ikke blot et visningsfilter: de entiteter, der ikke længere passer, bliver reelt afmarkeret, klar til at du masseredigerer præcis den delmængde, du har filtreret frem.

## Rydning af filtrene

Brug vinduets nulstillingskontrol til at tømme alle felter og vende tilbage til hele den oprindelige markering, eller luk vinduet (det åbner med et friskt udgangspunkt, næste gang du klikker på filterikonet ved en anden markering).

## Relateret

- [Match Properties](../../commands/match-properties/) — kopiere egenskaber fra én entitet til andre, når du først har indsnævret hvilke
- [LayerIsolate](../../commands/layer-isolate/) — et alternativ på lagniveau, når du vil isolere alene efter lag, uafhængigt af hvad der er markeret
