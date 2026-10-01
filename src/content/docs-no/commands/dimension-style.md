---
title: "Kommandoen Målstil — opprett og administrer navngitte målstiler"
description: "Opprett CAD-målstiler for piler, hjelpelinjer, sentermarkeringer, tekst, presisjon, justering og DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# Målstil

Kommandoen åpner en dialog for å opprette, redigere, forhåndsvise og velge navngitte målstiler. Nye lineære, justerte, radius-, diameter- og vinkelmål kopierer gjeldende stil når de opprettes; eksisterende mål er ikke direkte koblet.

## Åpne dialogen

Skriv den lokaliserte kommandoen i terminalen, eller klikk **Målstil** i **Annoter**-panelet. Listen til venstre viser synlige stiler; en hake angir den gjeldende og blyanten endrer navn.

## Linjer og piler

**Pil 1 / Pil 2 · Pilstørrelse · Avstand for hjelpelinjer · Forlengelse av hjelpelinjer · Sentrumsmerke · Størrelse på sentrumsmerke**

Angi de to pilspissene separat, pilstørrelse, hjelpelinjenes avstand og forlengelse samt sentermarkeringens type og størrelse (`Ingen`, `Markering` eller `Linjer`).

## Tekst

**Tekststil · Skrifttype · Teksthøyde · Tekstramme · Tekstavstand · Tekstfeste · Tekst justert · Presisjon · Vinkelpresisjon**

Tekstdelen styrer hurtigfylling fra tekststil, skrift, høyde, fet, kursiv, ramme, avstand, én av ni festeposisjoner, justering langs mållinjen og lineær/vinkelpresisjon. Tekststil kopierer verdier én gang og er ingen direkte kobling.

Forhåndsvisningen bruker samme gjengivelse som lerretet. Bytt mellom lineære, radius-, diameter- og vinkeleksempler for å kontrollere piler, sentrum, tekstplassering, presisjon og rammer.

## Opprette og administrere stiler

**Ny** dupliserer valgt stil. `Standard` kan ikke gis nytt navn eller slettes, og gjeldende stil kan heller ikke slettes. Navn må være unike, ikke tomme og gyldige for DXF. Importerte annotative stiler skjules, men bevares.

## Angi gjeldende stil

**Angi gjeldende** gjør valgt stil til mal for nye mål; listen i Annoter-panelet gir samme valg. Verdiene kopieres ved opprettelse. Dimension Continue arver i stedet hele utseendet fra basismålet.

## Lagre eller forkaste

**OK** bruker navneendringer, tillegg, sletting, egenskaper og gjeldende stil samlet. **Lukk**, klikk på bakgrunnen eller `Escape` forkaster endringene.

## DXF-kompatibilitet

KulmanLab importerer og eksporterer navngitte `DIMSTYLE`-poster med separate piler, hjelpelinjer, tekst, presisjon, sentermarkeringer, ramme, tekststilreferanse og annotativt flagg. Ved import prioriteres objektspesifikke `DSTYLE`-overstyringer.

Ved eksport bruker referert `STYLE` variabel høyde (`40 = 0`) og lagrer siste høyde i gruppe `42`. En fast tekststilhøyde kan dermed ikke overstyre målstilens egen teksthøyde.

## Relaterte kommandoer

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
