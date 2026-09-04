---
title: "Slik forbereder du en DXF-fil for laserskjæring"
description: "Hvorfor skjæretjenester avviser DXF-filer og hvordan du fikser din — lukkede konturer, enheter, snittbredde og lag. Gratis i nettleseren."
keywords: [DXF laserskjæring, forberede DXF laser, laserskjæring filformat, DXF avvist laser, lukkede konturer DXF, snittbredde kerf laser, laserfil forberedelse, DXF enheter laser, lag skjære gravere, gratis DXF-editor]
date: 2026-09-02
author: KulmanLab
tag: Guide
---

En DXF for laserskjæring trenger fire ting: lukkede konturer, riktige enheter, kun skjæregeometri — ingen mål, notater eller skravering — og lag som skiller skjæring, rissing og gravering. Denne guiden går gjennom hver av dem, og hvordan du sjekker filen din før en tjeneste avviser den.

Alt dette kan du gjøre gratis i nettleseren på [app.kulmanlab.com](https://app.kulmanlab.com): ingenting å installere, ingen konto, og filen forlater aldri maskinen din. Det er nettopp denne arbeidsflyten vi opprinnelig bygde KulmanLab for, så begrensningene som gjelder andre CAD-oppgaver gjelder stort sett ikke her: laserskjæring er 2D, og DXF er det skjæretjenestene vil ha.

## Hvorfor filer blir avvist

Fem grunner dekker så godt som alt.

**Åpne konturer.** En form som ser lukket ut, men har en hårfin åpning i et hjørne, er ikke et område — det er en samling usammenhengende linjer. Skjæremaskiner må vite hva som er innenfor og hva som er utenfor, og en åpen kontur har ingen innside. Dette er med god margin den vanligste avvisningsgrunnen.

**Feil eller uklare enheter.** DXF registrerer ikke pålitelig hva tallene betyr. Den samme filen kan være i millimeter, centimeter, tommer eller fot, og ofte sier ikke filen hvilken. En del som kommer 25,4 ganger for stor eller for liten, er dette.

**Alt som ikke er geometri.** Mål, tittelfelt, notater, skravering, hjelpelinjer. Maskinen prøver gjerne å skjære notatene dine også.

**Dupliserte linjer.** To identiske linjer oppå hverandre betyr at laseren går samme bane to ganger: bortkastet tid, svidde kanter, og i tynt materiale brannfare.

**Alt på ett lag.** Er ikke skjæring, rissing og gravering skilt fra hverandre, kan ikke tjenesten skille dem og ber deg sende inn på nytt.

## Å forberede filen

Dra `.dxf`-filen inn på tegneflaten på [app.kulmanlab.com](https://app.kulmanlab.com), eller bruk **Import**-knappen i filpanelet. Tegningen lastes inn, og visningen tilpasses den.

**1. Se hva du faktisk har.** Skriv `fit` for å få alt i visningen. Zoom deretter inn på hvert hjørne på hver del — åpninger er usynlige i hele tegningens målestokk og åpenbare ved ti gangers forstørrelse. Det er denne sjekken som sparer deg for avvisningsmailen.

**2. Slett det som ikke skal skjæres.** Hjelpelinjer, notater, rammer, mål. `layer-isolate` viser ett lag om gangen, og slik finner man rester som gjemmer seg under den egentlige geometrien.

**3. Lukk åpningene.** `trim` kapper overhengende ender der to linjer krysser forbi hverandre. Der linjer kommer til kort, drar du et endepunktshåndtak bort på naboen — håndtakene fester seg, så endene møtes på ordentlig i stedet for nesten.

**4. Sjekk målene.** `distance` måler mellom to punkter, `area` måler et lukket område ut fra punkter du klikker. Mål noe du kjenner den virkelige størrelsen på. Avviker det med en faktor 25,4, ligger filen i feil enhetssystem.

**5. Skill skjæring, rissing og gravering.** Legg hver operasjon på sitt eget lag med et opplagt navn: `CUT`, `SCORE`, `ENGRAVE`. De fleste tjenester ber enten om dette eller om separate filer. `layer-manager` oppretter og tildeler dem.

Eksporter så: **Export** → **DXF**. KulmanLab skriver enkel AC1032-DXF, akkurat det skjæretjenester og maskinprogramvare forventer.

## Snittbredde

Laseren fjerner materiale mens den skjærer — omtrent 0,1 til 0,3 mm avhengig av maskin, materiale og tykkelse. Skjær en 50 mm firkant, og du får en litt mindre firkant, og delen som skulle presses ned i den, passer ikke.

To måter å håndtere det på:

**La tjenesten ta seg av det.** De fleste skjæretjenester kompenserer for snittbredden selv, og gjør de det, blir delene feil andre veien om du også kompenserer. Spør før du justerer noe.

**Gjør det selv.** `offset` lager en parallell kopi av en form i fast avstand — halve snittbredden, utover for deler som skal beholde målet, innover for hull. Det virker på linjer, sirkler, buer, ellipser og polylinjer. Det tar ett objekt om gangen, så det er praktisk for en håndfull kritiske mål, ikke for en plate med to hundre deler.

Betyr toleransen noe, skjær et prøvestykke før du binder opp materiale.

## Hva du bør sjekke ved DXF-eksport

Verdt å vite før du stoler på det:

- **Fjern haken ved påtegninger i stedet for å slette dem.** Tekst, mål, henvisninger og skravering eksporteres nå alle, så alt du lar bli igjen i tegningen havner i filen. Du trenger ikke slette det: Export Manager lister hver elementtype med sin egen avkryssingsboks, så når du fjerner haken ved Text, målradene, Leaders og Hatches, får du en DXF med skjæregeometri og ingenting annet — og selve tegningen røres ikke.
- **Tekst havner som `MTEXT`, som ikke er det samme som graverbar geometri.** Bokstavene eksporteres med formateringen i behold, men mye maskinprogramvare vil ha konturer framfor levende tekst på et graveringslag. Sjekk hva din godtar før du planlegger gravering ut fra det.
- **Blokkreferanser importeres ikke.** En tegning bygget av gjentatte blokksymboler kommer inn ufullstendig, så sjekk antall deler mot originalen.

Splines *blir* eksportert. Noen maskinprogrammer håndterer dem dårlig og foretrekker polylinjer — er ditt slik, tegn om kurvene som polylinjer eller buer.

## En advarsel om automatikk

KulmanLab har **ingen forhåndskontroll**. Ingenting leter etter åpne konturer, dupliserte linjer eller enhetsproblemer og melder fra. Sjekkene over er manuelle: zoom inn, mål, se etter.

Det går fint for en håndfull deler og er slitsomt for en fullt nestet plate. Produserer du plater jevnlig, er du bedre tjent med et verktøy som validerer automatisk — og for enkeltdeler, som er det de fleste gjør mesteparten av tiden, finner et grundig blikk de samme problemene.

## Før du sender

- Hver skjærekontur lukket — hjørner sjekket ved høy forstørrelse
- Ett kjent mål målt og korrekt
- Ingen mål, notater, rammer eller hjelpegeometri igjen
- Ingen dupliserte linjer oppå hverandre
- Skjæring, rissing og gravering på separate, tydelig navngitte lag
- Snittbredde: enten kompensert eller bevisst overlatt til tjenesten
- Eksportert som DXF og åpnet én gang til for å bekrefte at den ser riktig ut

Det siste punktet koster ti sekunder og fanger eksportoverraskelser før tjenesten gjør det.

---

*Relatert: [Import](/no/docs/commands/import/) for hva KulmanLab leser fra en DXF, [Export Manager](/no/docs/commands/export-manager/) for hva hvert eksportformat faktisk inneholder, [Offset](/no/docs/commands/offset/) for kompensasjon av snittbredde, og [LayerManager](/no/docs/commands/layer-manager/) for å sette opp skjære- og graveringslag.*
