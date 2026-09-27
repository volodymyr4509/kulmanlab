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

**OK** bruker alle endringene; **Lukk** eller `Escape` forkaster dem. KulmanLab leser og skriver `MLEADERSTYLE`-oppføringer. Navn, pilspiss og størrelse, avstand, høyde, feste, ramme og annotativt flagg lagres som stilfelt. Rotasjon, skrifttype, fet og kursiv er KulmanLab-standardverdier som kopieres til henvisningen når den opprettes.

Se også [Leader](../leader/), [LeaderAdd](../leader-add/) og [LeaderRemove](../leader-remove/).
