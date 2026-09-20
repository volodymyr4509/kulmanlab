---
title: File Manager — Miniaturegitter, Omdøbning & Sletning
description: File Manager-kommandoen åbner et miniaturegitter med alle gemte tegninger — klik på en miniature for at åbne den, omdøb den direkte, eller slet den med bekræftelse.
keywords: [file manager CAD, nylige filer CAD, omdøb tegning, slet tegning, miniaturegitter CAD, gendan tegning, genåbn DXF, browserlagring CAD, KulmanLab filer, gemte tegninger, IndexedDB CAD, sikkerhedskopiér CAD-tegning]
group: file
order: 3
---

# File Manager

Kommandoen `Filstyring` åbner et **miniaturegitter** med alle tegninger, der er gemt i din browsers lokale lagring, sorteret efter hvornår hver af dem senest blev gemt. Brug det til at genåbne en tidligere tegning, omdøbe den eller slette den.

## Åbning af File Manager

- Skriv `Filstyring` i terminalen, **eller**
- Klik på **File Manager**-knappen (historikikon) i værktøjslinjen i File-panelet øverst på skærmen.

Panelet åbnes på venstre side af lærredet og lukker automatisk, så snart du starter en anden kommando eller [importerer](../import/) en fil — så det aldrig bliver hængende over en tegning, det endnu ikke lister. Det åbnes igen med en frisk liste hver gang.

## Miniaturegitteret

Hver gemt tegning er et kort, der viser en levende gengivet miniature, dens navn og hvornår den senest blev opdateret. Miniaturer genereres på stedet, hver gang panelet åbnes — intet forudgengives eller gemmes — så et kort viser et pladsholderikon et øjeblik, mens dets miniature tegnes. Den samme pladsholder vises også, hvis genereringen mislykkes, eller hvis tegningen reelt endnu ikke har nogen entiteter.

| Handling | Sådan |
|--------|-----|
| **Åbn** en tegning | Klik på dens miniature — erstatter det aktuelle indhold på lærredet |
| **Omdøb** | Klik på blyantikonet, eller dobbeltklik på navnet |
| **Slet** | Klik på papirkurvsikonet, og bekræft derefter |

Hvis ingen filer er gemt endnu, viser panelet "No files saved". Med flere filer, end der er plads til på én skærm, vises **Page 1 of N**-kontroller under gitteret.

Kortet for den fil, der aktuelt er åben i editoren, er markeret med en ring i accentfarve og har **ingen sletteknap** — at slette den åbne fil ville udslette dens gemte data, mens lærredet stadig viste den, og den næste redigering ville blot gemme den lige tilbage igen. Omdøbning er stadig muligt.

## Sletning af en fil

Et klik på papirkurvsikonet sletter ikke med det samme — det aktiverer et bekræftelseslag på det pågældende kort ("Delete this file?" med knapperne **Delete** / **Cancel**), da sletning er permanent og ikke kan fortrydes. Klik på **Cancel**, på et andet korts papirkurvsikon, eller andre steder på kortet fjerner den ventende bekræftelse uden at slette noget.

## Omdøbning af en fil

Klik på blyantikonet (eller dobbeltklik på filnavnet) for at redigere det direkte, og tryk derefter **Enter** for at bekræfte eller **Escape** for at annullere. En omdøbning afvises, hvis det nye navn:

- er tomt, eller længere end 100 tegn,
- allerede bruges af en anden gemt fil (uden forskel på store/små bogstaver),
- ender med et punktum, eller
- er et Windows-reserveret enhedsnavn såsom `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, eller `LPT1`–`LPT9`.

Tegn, der ikke er gyldige i et filnavn (`\ / : * ? " < > |`), fjernes automatisk, mens du skriver. Omdøbning ændrer kun etiketten — det påvirker ikke tegningens placering i gitteret, da den er sorteret efter tidspunktet for sidste lagring, ikke efter navn.

## Sikkerhedskopiér dit arbejde — browserlagring er ikke permanent

KulmanLab gemmer tegninger i **IndexedDB**, en database indbygget i din browser:

- Filer gemmes **kun lokalt på din enhed** — intet uploades til en server.
- Hver browser og enhed har sin egen uafhængige lagring. En tegning gemt i Chrome på én computer vises ikke i Firefox eller på en anden maskine.
- Denne lagring **kan blive ryddet uden varsel** — ved rydning af webstedsdata eller browserhistorik, ved lav diskplads, ved brug af et privat/inkognitovindue, ved geninstallation af browseren eller styresystemet, eller ved skift af enhed. Ingen af disse giver dig mulighed for at gendanne det, der var der.

**Den eneste pålidelige måde at holde en tegning sikker på er at [eksportere](../export-manager/) den** til din egen lagring. Brug `.json` (KulmanLabs eget format), når det er muligt — det bevarer hver entitet nøjagtigt; brug `.dxf`, når du har brug for kompatibilitet med andre CAD-værktøjer. Gør dette for alt, du ville blive ked af at miste, og før du rydder browserdata, skifter browser eller enhed, eller stiller maskinen væk i en periode.

## Automatisk filindlæsning ved opstart

Når du åbner KulmanLab CAD, indlæser appen automatisk den **senest ændrede fil** fra lagringen. Du behøver ikke manuelt åbne den fra File Manager hver gang.

## Administrere lagerplads

Der er ingen fast grænse for antallet af tegninger, du kan gemme, men browserlagring er begrænset. Hvis du bemærker lagringsadvarsler, slet ældre filer fra File Manager — eller endnu bedre, eksportér dem først, så intet går tabt.

For at fjerne alle gemte tegninger på én gang, brug kommandoen [WipeStorage](../wipestorage/).

## Filnavne

Nye og importerede filer får et enkelt navn — uden indlejret tidsstempel. Hvis navnet allerede er taget, tilføjes automatisk et suffiks i Finder/Explorer-stil (`plan (2)`, `plan (3)`, …), så intet overskrives. Du kan altid give en fil et tydeligere navn bagefter ved hjælp af [omdøbning](#omdøbning-af-en-fil).

## Relaterede kommandoer

- [Import](../import/) — indlæs en tegning fra dit filsystem i browserlagring
- [Export Manager](../export-manager/) — download en tegning til dit filsystem
- [New File](../new-file/) — start en tom tegning (gemmes også automatisk)
- [WipeStorage](../wipestorage/) — ryd alle gemte filer fra browserlagring
