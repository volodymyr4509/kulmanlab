---
title: Kommandoen Ledelinjestil — Administrer ledelinjestile
description: Opret CAD-ledelinjestile med pilespids, tekstfastgørelse, afstand, rotation, skrifttype, højde og tekstramme.
keywords: [ledelinjestil CAD, multileader-stil, MLEADERSTYLE, pilespids CAD, tekstfastgørelse, DXF-stil, kulmanlab]
group: style
order: 7
---

# LeaderStyle

Kommandoen `Ledelinjestil` åbner administrationen af navngivne ledelinjestile. Hver ny [Henvisning](../leader/) kopierer indstillingerne fra den *aktuelle* stil, når den oprettes.

## Redigering af en stil

Skriv `Ledelinjestil`, eller klik på **Ledelinjestil** i annotationspanelet. ✓ markerer den aktuelle stil; brug blyanten ved navnet til at omdøbe den. Forhåndsvisningen opdateres straks med samme renderer som tegningen.

| Felt | Funktion |
|---|---|
| Tekstfastgørelse | Øverst, Midt, Nederst eller Understreget |
| Pilespids / Pilestørrelse | Symbol og størrelse ved enden af hver arm |
| Afsatsafstand | Afstand mellem afsats og tekst |
| Tekstrotation | Etikettens vinkel i grader |
| Tekststil | Kopierer skrifttype, højde, fed og kursiv én gang fra en [TextStyle](../text-style/) |
| Skrifttype / Teksthøjde | Etikettens skrifttype og højde |
| Fed / Kursiv | Uafhængig tekstformatering |
| Tekst i ramme | Rektangulær ramme omkring etiketten |

**Ny** kopierer den valgte stil. `Standard` kan ikke omdøbes eller slettes; den aktuelle stil kan heller ikke slettes. **Angiv som aktuel** påvirker kun henvisninger, der oprettes senere — eksisterende objekter ændres ikke. Et tomt, dubleret eller ugyldigt DXF-navn deaktiverer **OK**. Importerede annotative stile skjules, men bevares.

## Lagring og DXF

**OK** anvender alle ændringer; **Luk** eller `Escape` kasserer dem. KulmanLab læser og skriver `MLEADERSTYLE`-poster. Navn, pilespids og størrelse, afstand, højde, fastgørelse, ramme og annotativt flag gemmes som stilfelter. Rotation, skrifttype, fed og kursiv er KulmanLab-standardværdier, der kopieres til henvisningen ved oprettelsen.

Se også [Leader](../leader/), [LeaderAdd](../leader-add/) og [LeaderRemove](../leader-remove/).
