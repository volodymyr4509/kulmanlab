---
title: "Kommandoen Målstil — opret og administrer navngivne måltypografier"
description: "Opret CAD-måltypografier til pile, hjælpelinjer, centrummærker, tekst, præcision, justering og DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# Målstil

Kommandoen åbner en dialog til at oprette, redigere, forhåndsvise og vælge navngivne måltypografier. Nye lineære, justerede, radius-, diameter- og vinkelmål kopierer den aktuelle typografi, når de oprettes; eksisterende mål er ikke direkte forbundet.

## Åbn dialogen

Skriv den lokaliserede kommando i terminalen, eller klik **Målstil** i panelet **Annotér**. Listen til venstre viser synlige typografier; et flueben angiver den aktuelle, og blyanten omdøber.

## Linjer og pile

**Pil 1 / Pil 2 · Pilestørrelse · Hjælpelinjeforskydning · Hjælpelinjeforlængelse · Centermærke · Centermærkestørrelse**

Indstil de to pilespidser separat, pilestørrelse, hjælpelinjernes afstand og forlængelse samt centrummærkets type og størrelse (`Ingen`, `Mærke` eller `Linjer`).

## Tekst

**Tekststil · Skrifttype · Teksthøjde · Tekst i ramme · Tekstafstand · Tekstfastgørelse · Tekst justeret · Præcision · Vinkelpræcision**

Tekstdelen styrer hurtigudfyldning fra teksttypografi, skrifttype, højde, fed, kursiv, ramme, afstand, én af ni tilknytningspositioner, justering med mållinjen og lineær/vinkelpræcision. Teksttypografi kopierer værdier én gang og er ikke et aktivt link.

Forhåndsvisningen bruger samme gengivelse som lærredet. Skift mellem lineære, radius-, diameter- og vinkeleksempler for at kontrollere pile, centrum, tekstplacering, præcision og rammer.

## Opret og administrer typografier

**Ny** duplikerer den valgte typografi. `Standard` kan ikke omdøbes eller slettes, og den aktuelle typografi kan heller ikke slettes. Navne skal være unikke, ikke tomme og gyldige til DXF. Importerede annotative typografier skjules, men bevares.

## Angiv aktuel typografi

**Angiv aktuel** gør den valgte typografi til skabelon for nye mål; listen i Annotér-panelet tilbyder samme valg. Værdier kopieres ved oprettelse. Dimension Continue arver i stedet hele udseendet fra grundmålet.

## Gem eller kassér

**OK** anvender omdøbninger, tilføjelser, sletninger, egenskaber og aktuel typografi samlet. **Luk**, klik på baggrunden eller `Escape` kasserer ændringerne.

## DXF-kompatibilitet

KulmanLab importerer og eksporterer navngivne `DIMSTYLE`-poster med separate pile, hjælpelinjer, tekst, præcision, centrummærker, ramme, teksttypografireference og annotativt flag. Ved import har objektspecifikke `DSTYLE`-tilsidesættelser forrang.

Ved eksport bruger den refererede `STYLE` variabel højde (`40 = 0`) og gemmer seneste højde i gruppe `42`. En fast teksttypografihøjde kan derfor ikke tilsidesætte måltypografiens egen teksthøjde.

## Relaterede kommandoer

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
