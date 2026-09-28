---
title: Kommandoen Ledelinjestil — Administrer ledelinjestiler
description: Opprett CAD-ledestiler med pilspiss, tekstfeste, avstand, rotasjon, skrifttype, høyde og tekstramme.
keywords: [ledelinjestil CAD, multileader-stil, MLEADERSTYLE, pilspiss CAD, tekstfeste, DXF-stil, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Kommandoen `Ledelinjestil` åpner behandleren for navngitte ledelinjestiler. Hver ny [Henvisning](../leader/) kopierer innstillingene fra *gjeldende* stil når den opprettes.

## Redigere en stil

Skriv `Ledelinjestil` eller klikk **Ledelinjestil** i merknadspanelet. ✓ markerer gjeldende stil; bruk blyanten ved navnet for å endre det. Forhåndsvisningen oppdateres umiddelbart med samme gjengiver som tegningen.

| Felt | Funksjon |
|---|---|
| Tekstfeste | Topp, Midt, Bunn eller Understreking |
| Pilspiss / Pilstørrelse | Symbol og størrelse ved enden av hver arm |
| Avstand til anslag | Mellomrom mellom anslag og tekst |
| Tekstrotasjon | Etikettens vinkel i grader |
| Tekststil | Kopierer skrifttype, høyde, fet og kursiv én gang fra en [TextStyle](../text-style/) |
| Skrifttype / Teksthøyde | Etikettens skrifttype og høyde |
| Fet / Kursiv | Uavhengig tekstformatering |
| Tekstramme | Rektangulær ramme rundt etiketten |

**Ny** kopierer den valgte stilen. `Standard` kan ikke gis nytt navn eller slettes; gjeldende stil kan heller ikke slettes. **Angi som gjeldende** påvirker bare henvisninger som opprettes senere — eksisterende objekter endres ikke. Et tomt, duplisert eller ugyldig DXF-navn deaktiverer **OK**. Importerte annotative stiler skjules, men bevares.

## Lagring og DXF

KulmanLab importerer og eksporterer `MLEADERSTYLE`-poster. Navn, pilspiss og størrelse, landingsavstand, teksthøyde, teksttilknytning, ramme og annotativt flagg bevares som stilfelt. Ved eksport peker gruppe `342` på Tekststilen med samsvarende skrifttype, fet, kursiv og høyde; uten treff brukes `Standard`. Denne DXF-referansen gjør ikke engangskopieringen i appen til en aktiv kobling. Den ene tilknytningsverdien skrives til både venstre og høyre DXF-felt.

Se også [Leader](../leader/), [LeaderAdd](../leader-add/) og [LeaderRemove](../leader-remove/).
