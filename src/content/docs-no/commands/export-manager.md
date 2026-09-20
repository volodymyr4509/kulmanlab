---
title: Export Manager — Last ned tegninger som DXF eller JSON
description: Last ned tegningen som DXF eller JSON, og kryss av per elementtype for hva som blir med. Begge bærer geometri, tekst, mål, henvisninger og skravering.
keywords: [eksporter DXF, eksporter CAD-fil, last ned DXF nettleser, lagre DXF online, eksporter JSON CAD, KulmanLab eksport, last ned CAD-fil, DXF-eksport, lagre tegning som fil, DXF-nedlasting]
group: file
order: 6
---

# Export Manager

Kommandoen `Eksportbehandler` laster den gjeldende tegningen ned til filsystemet ditt. To formater står side om side — **DXF** for kompatibilitet med andre CAD-verktøy og **JSON** for helt tro lagringer inne i KulmanLab CAD — og hvert har sin egen sjekkliste over hva som skal i filen.

## Slik eksporterer du

1. Klikk på verktøylinjeknappen **Export** (nedlastingsikon) i filpanelet, eller skriv `Eksportbehandler` i terminalen.
2. Popup-vinduet **Export Manager** åpnes med to kolonner, **JSON** og **DXF**, som hver lister tegningens elementtyper med avkryssingsboks og antall.
3. Fjern haken ved det du vil utelate. Alt er avkrysset til å begynne med.
4. Klikk **Export JSON** eller **Export DXF**. Filen lastes ned til standardmappen din, og vinduet lukkes.

Trykk `Escape` for å lukke popup-vinduet uten å eksportere.

## Velge hva som eksporteres

Begge kolonner lister de samme elementtypene, hver med antallet i tegningen:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Alt er avkrysset når vinduet åpnes, så eksporterer du med én gang, får du hele tegningen. Fjern haken ved en type for å holde den utenfor akkurat den filen.

- **De to kolonnene er uavhengige.** Å fjerne haken ved Hatches under DXF endrer ikke hva **Export JSON** lager — hvert format beholder sitt eget valg.
- **En type du ikke har, er nedtonet.** En rad med antall `0` kan ikke krysses av, så lista fungerer også som en rask opptelling av tegningen.
- **Tallene er et øyeblikksbilde.** De tas når vinduet åpnes, og oppdateres ikke om tegningen endrer seg bak. Lukk og åpne på nytt for å friske dem opp.
- **Ingenting slettes.** Avkryssingen former bare den eksporterte filen; selve tegningen røres ikke.

**Linear Dimensions** dekker lineære, tilpassede og fortsatte mål: én elementtype laget av tre ulike kommandoer. Radius, diameter og vinkel har hver sin rad.

For en skjærefil fjerner du haken ved Text, de fire målradene, Leaders og Hatches og klikker **Export DXF** — se [å forberede en DXF for laserskjæring](/no/blog/prepare-dxf-for-laser-cutting/).

## Velge et format

| Format | Filtype | Best til | Begrensninger |
|--------|---------|----------|----------------|
| **JSON** *(innebygd)* | `.json` | Lagre arbeid for gjenåpning i KulmanLab CAD | Ikke kompatibel med andre CAD-verktøy |
| **DXF** | `.dxf` | Deling med FreeCAD, LibreCAD osv. | Hvor mye som overlever, avhenger av mottakerprogrammet |

**Når du bør bruke JSON:** når som helst du vil lagre en komplett kopi av arbeidet ditt. JSON er KulmanLabs innebygde format og bevarer hver entitet nøyaktig — inkludert mål, ledelinjer, hatcher og alle lagdata.

**Når du bør bruke DXF:** når du må overlevere tegningen til noen som bruker en annen CAD-applikasjon. Den eksporterte filen bruker AC1032 DXF-format og kan åpnes i de fleste DXF-kompatible verktøy.

## Hva som eksporteres per format

### JSON-eksport

Alle entitetstyper er inkludert:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Mål (lineær, justert, fortsatt, radius, diameter, vinkel)
- Leaders (multi-ledelinjer)
- Hatches, inkludert mønster, skalering, vinkel og origo
- Layers og Linetypes

### DXF-eksport

Alle entitetstyper er inkludert:

- Lines, Circles, Arcs, Ellipses, Polylines (eksportert som `LWPOLYLINE`), Splines
- Text
- Mål (lineær, justert, fortsatt, radius, diameter, vinkel)
- Leaders (multi-ledelinjer)
- Hatches, inkludert mønster, skalering, vinkel og origo
- Layers og Linetypes

Filen skrives som AC1032-DXF, så en tegning eksportert fra KulmanLab åpnes med påtegningene sine i behold i andre DXF-kyndige verktøy i stedet for å komme fram som ren geometri.

Hva hvert mottakerprogram så gjør med den, varierer fortsatt — DXF-støtten er ulik fra verktøy til verktøy, og et eldre kan overse elementer som et nyere leser. Må en tegning se lik ut overalt, fanger [Print Manager](../print-manager/) den heller som PDF eller bilde.

## Navn på eksportert fil

Den nedlastede filen får navn etter gjeldende tegningsfil (f.eks. `myplan.json`). Filtypen endres for å matche det valgte formatet. En tegning som aldri har fått navn, eksporteres som `drawing.dxf` eller `drawing.json`.

## Forskjell mellom Export Manager og Print Manager

| Funksjon | Export Manager | Print Manager |
|----------|-----------------|-----------------|
| Utdata | Vektorkildefil (.dxf / .json) | Rasterbilde (.png / .jpeg / .webp / .pdf) |
| Redigerbar i andre verktøy | Ja (DXF) | Nei |
| Bevarer layers & linetypes | Ja | Nei (rendret flatt) |
| Fanger mål & ledelinjer | Ja | Ja |

Bruk **Export Manager** når du trenger en redigerbar fil. Bruk [Print Manager](../print-manager/) når du trenger et visuelt øyeblikksbilde.

## Relaterte kommandoer

- [Import](../import/) — åpne en DXF- eller JSON-fil
- [Print Manager](../print-manager/) — eksporter lerretet som et PNG-, JPEG-, WebP- eller PDF-bilde
- [File Manager](../file-manager/) — bla gjennom tegninger lagret i nettleserlagring
