---
title: Export — Last Ned Tegninger som DXF eller JSON i KulmanLab CAD
description: Export-kommandoen laster ned gjeldende tegning som en DXF- eller JSON (native) fil. JSON bevarer alle entiteter inkludert mål og ledere; DXF er kompatibel med andre CAD-verktøy.
keywords: [eksporter DXF, eksporter CAD-fil, last ned DXF nettleser, lagre DXF online, eksporter JSON CAD, KulmanLab eksport, CAD-fil nedlasting, DXF-eksport, lagre tegning til fil, DXF-nedlasting]
group: file
order: 5
---

# Export

Kommandoen **Export** laster ned gjeldende tegning til filsystemet ditt. To formater er tilgjengelige: **DXF** for kompatibilitet med andre CAD-verktøy og **JSON** for lagring med full nøyaktighet innenfor KulmanLab CAD.

## Slik eksporterer du

1. Klikk på **Export**-knappen (nedlastingsikon) i verktøylinjen i File-panelet.
2. **Export Manager**-vinduet åpnes.
3. Klikk et formatkort for å velge format — **JSON** eller **DXF**.
4. Klikk **Export**-knappen. Filen lastes automatisk ned til standard nedlastingsmappe.

## Velge et format

| Format | Filtype | Best til | Begrensninger |
|--------|-----------|----------|-------------|
| **JSON** *(native)* | `.json` | Lagre arbeid for å åpne på nytt i KulmanLab CAD | Ikke kompatibel med andre CAD-verktøy |
| **DXF** | `.dxf` | Dele med FreeCAD, LibreCAD osv. | Mål og ledere eksporteres ikke |

**Når du bør bruke JSON:** når som helst du vil lagre en fullstendig kopi av arbeidet ditt. JSON er KulmanLabs native format og bevarer hver entitet nøyaktig — inkludert mål, ledere og all lagdata.

**Når du bør bruke DXF:** når du trenger å overlevere tegningen til noen som bruker en annen CAD-applikasjon. Den eksporterte filen bruker AC1012 DXF-format og kan åpnes i de fleste DXF-kompatible verktøy.

## Hva som eksporteres per format

### JSON-eksport

Alle entitetstyper inkluderes:

- Linjer, sirkler, buer, ellipser, polylinjer, splines, tekst
- Mål (lineær, justert, kjedet, radius, diameter)
- Multileaders
- Lagdefinisjoner og linetype-tabeller

### DXF-eksport

Kun geometri-entiteter inkluderes:

- Linjer, sirkler, buer, ellipser, polylinjer (eksportert som `LWPOLYLINE`), splines, tekst
- Lagdefinisjoner og linetype-tabeller

**Ikke inkludert i DXF:** mål-entiteter og multileaders. Disse bruker KulmanLab-spesifikke datastrukturer som ikke kan gjengis nøyaktig i standard DXF. Hvis tegningen din har annotasjoner, bruk JSON eller [Print](../print/) for å fange dem visuelt.

## Navn på eksportert fil

Den nedlastede filen får navnet fra gjeldende tegnefil (f.eks. `myplan_May22_14:30:00.json`). Filtypen endres for å samsvare med det valgte formatet.

## Forskjellen mellom Export og Print

| Funksjon | Export | Print |
|---------|--------|-------|
| Utdata | Vektor-kildefil (.dxf / .json) | Rasterbilde (.png / .jpeg / .webp / .pdf) |
| Redigerbar i andre verktøy | Ja (DXF) | Nei |
| Bevarer lag og linetyper | Ja | Nei (gjengitt flatt) |
| Fanger mål og ledere | Kun JSON | Ja |

Bruk **Export** når du trenger en redigerbar fil. Bruk [Print](../print/) når du trenger et visuelt øyeblikksbilde.

## Relaterte kommandoer

- [Import](../import/) — åpne en DXF- eller JSON-fil
- [Print](../print/) — eksporter lerretet som et PNG-, JPEG-, WebP- eller PDF-bilde
- [Files](../files/) — bla gjennom tegninger lagret i nettleserlagring
