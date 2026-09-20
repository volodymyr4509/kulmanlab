---
title: File Manager — Miniatyrrutenett, Omdøping og Sletting i KulmanLab CAD
description: FileManager-kommandoen åpner et miniatyrrutenett over alle lagrede tegninger — klikk en miniatyr for å åpne den, omdøp direkte i rutenettet, eller slett med bekreftelse.
keywords: [file manager CAD, nylige filer CAD, omdøp tegning, slett tegning, miniatyrrutenett CAD, gjenopprett tegning, åpne DXF på nytt, nettleserlagring CAD, KulmanLab filer, lagrede tegninger, IndexedDB CAD, sikkerhetskopier CAD-tegning]
group: file
order: 3
---

# File Manager

Kommandoen `Filbehandler` åpner et **miniatyrrutenett** over alle tegninger som er lagret i nettleserens lokale lagring, sortert etter når hver av dem sist ble lagret. Bruk det til å åpne en tidligere tegning på nytt, omdøpe den eller slette den.

## Åpne File Manager

- Skriv `Filbehandler` i terminalen, **eller**
- Klikk på verktøylinjeknappen **File Manager** (historikkikon) i File-panelet øverst på skjermen.

Panelet åpnes på venstre side av lerretet, og lukkes automatisk så snart du starter en annen kommando eller [importerer](../import/) en fil — slik at det aldri blir liggende over en tegning det ikke har med i listen ennå. Det åpnes igjen med en fersk liste hver gang.

## Miniatyrrutenettet

Hver lagret tegning er et kort som viser en direkte gjengitt miniatyr, navnet sitt og når det sist ble oppdatert. Miniatyrene genereres på stedet hver gang panelet åpnes — ingenting er forhåndsgjengitt eller lagret — så et kort viser et plassholderikon et øyeblikk mens miniatyren tegnes. Den samme plassholderen vises også hvis genereringen mislykkes, eller hvis tegningen faktisk ikke har noen entiteter ennå.

| Handling | Slik gjør du det |
|--------|-----|
| **Åpne** en tegning | Klikk miniatyren — erstatter gjeldende innhold på lerretet |
| **Omdøp** | Klikk blyantikonet, eller dobbeltklikk navnet |
| **Slett** | Klikk søppelbøtteikonet, og bekreft deretter |

Hvis ingen filer er lagret ennå, viser panelet «No files saved». Med flere filer enn det er plass til på én skjerm vises kontrollene **Page 1 of N** under rutenettet.

Kortet for filen som for øyeblikket er åpen i editoren, er merket med en aksentfarget ring, og har **ingen sletteknapp** — å slette den åpne filen ville visket ut de lagrede dataene mens lerretet fortsatt viste den, og neste redigering ville bare lagret den rett tilbake. Å omdøpe den er fortsatt mulig.

## Slette en fil

Å klikke søppelbøtteikonet sletter ikke umiddelbart — det åpner et bekreftelsesoverlegg på kortet («Delete this file?» med knappene **Delete** / **Cancel**), siden sletting er permanent og ikke kan angres. Å klikke **Cancel**, klikke søppelbøtteikonet på et annet kort, eller klikke andre steder på kortet avbryter den ventende bekreftelsen uten at noe slettes.

## Omdøpe en fil

Klikk blyantikonet (eller dobbeltklikk filnavnet) for å redigere det direkte, og trykk deretter **Enter** for å bekrefte eller **Escape** for å avbryte. En omdøping avvises hvis det nye navnet er:

- tomt, eller lengre enn 100 tegn,
- allerede i bruk av en annen lagret fil (uavhengig av store/små bokstaver),
- avsluttet med et punktum, eller
- et Windows-reservert enhetsnavn som `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, eller `LPT1`–`LPT9`.

Tegn som ikke er gyldige i et filnavn (`\ / : * ? " < > |`) fjernes automatisk mens du skriver. Omdøping endrer kun etiketten — det påvirker ikke tegningens plassering i rutenettet, siden det er sortert etter sist lagret tidspunkt, ikke etter navn.

## Sikkerhetskopier arbeidet ditt — nettleserlagring er ikke permanent

KulmanLab lagrer tegninger i **IndexedDB**, en database innebygd i nettleseren din:

- Filer lagres **kun lokalt på enheten din** — ingenting lastes opp til en server.
- Hver nettleser og enhet har sin egen uavhengige lagring. En tegning lagret i Chrome på én datamaskin vises ikke i Firefox, eller på en annen maskin.
- Denne lagringen **kan tømmes uten forvarsel** — ved å tømme nettstedsdata eller nettleserhistorikk, ved lite ledig diskplass, ved bruk av et privat/inkognitovindu, ved ominstallering av nettleser eller operativsystem, eller ved bytte av enhet. Ingen av disse gir deg en sjanse til å gjenopprette det som var der.

**Den eneste pålitelige måten å holde en tegning trygg på, er å [eksportere](../export-manager/) den til din egen lagring.** Bruk `.json` (KulmanLabs native format) når det er mulig — det bevarer hver entitet nøyaktig; bruk `.dxf` når du trenger kompatibilitet med andre CAD-verktøy. Gjør dette for alt du ville blitt lei deg over å miste, og før du tømmer nettleserdata, bytter nettleser eller enhet, eller legger bort maskinen en stund.

## Automatisk filinnlasting ved oppstart

Når du åpner KulmanLab CAD, laster appen automatisk den **sist endrede filen** fra lagringen. Du trenger ikke å åpne den manuelt fra File Manager hver gang.

## Administrere lagringsplass

Det er ingen fast grense for antall tegninger du kan lagre, men nettleserlagringen er begrenset. Hvis du merker lagringsadvarsler, slett eldre filer fra File Manager — eller, enda bedre, eksporter dem først slik at ingenting går tapt.

For å fjerne alle lagrede tegninger på en gang, bruk kommandoen [WipeStorage](../wipestorage/).

## Filnavn

Nye og importerte filer får et enkelt navn — ingen tidsstempel bakes inn. Hvis det navnet allerede er i bruk, legges det automatisk til et Finder/Explorer-stil suffiks (`plan (2)`, `plan (3)`, …) slik at ingenting overskrives. Du kan alltid gi en fil et tydeligere navn i etterkant ved å bruke [omdøping](#omdøpe-en-fil).

## Relaterte kommandoer

- [Import](../import/) — last en tegning fra filsystemet ditt inn i nettleserlagring
- [Export Manager](../export-manager/) — last ned en tegning til filsystemet ditt
- [New File](../new-file/) — start en tom tegning (lagres også automatisk)
- [WipeStorage](../wipestorage/) — fjern alle lagrede filer fra nettleserlagring
