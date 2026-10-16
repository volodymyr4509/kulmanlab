---
title: "Slik tegner du en sekskant eller en hullsirkel i CAD (Polygon og polar matrise)"
description: "Tegn en regulær mangekant ut fra et sentrum og en radius eller ut fra en kant, og gjenta deretter hull på en hullsirkel med en polar matrise — gratis i nettleseren, med nøyaktig innskrevne verdier."
keywords: [tegne sekskant i CAD, regulær mangekant CAD, polar matrise CAD, hullsirkel tegning, hullmønster CAD, sirkulært mønster CAD, tegne sekskantmutter, tegne åttekant CAD, delesirkeldiameter PCD, gratis polygonverktøy CAD]
date: 2026-10-11
author: KulmanLab
tag: Guide
---

For å tegne en regulær mangekant i CAD oppgir du antall sider, velger sentrum og deretter en radius — eller du velger en kant, så følger resten. For å tegne en hullsirkel tegner du ett hull og gjentar det rundt sentrum med en polar matrise. Denne guiden gjør begge deler, med nøyaktige tall, i en nettleser på [app.kulmanlab.com](https://app.kulmanlab.com) — gratis, uten installasjon, og filen forlater aldri datamaskinen din.

Vi bygger [KulmanLab](https://kulmanlab.com), så trinnene nedenfor bruker kommandoene dets. Ideene — nøkkelvidde mot hjørnemål, delesirkeldiameter, om kopier dreier med rundt — er de samme i alle CAD-programmer.

## Tegne en regulær mangekant

En regulær mangekant har like sider og like vinkler: en sekskant for en mutter, en åttekant for et skilt, en femkant for et dekorativt utsnitt. I KulmanLab er det kommandoen **Polygon**.

1. Skriv `polygon` i terminalen, eller bruk Polygon-knappen i panelet Shapes.
2. Oppgi **antall sider** — et hvilket som helst helt tall fra 3 til 1024 — og trykk **Enter**. Forespørselen er forhåndsutfylt med antallet du brukte sist.
3. **Klikk på sentrum**, eller skriv `X,Y` for et nøyaktig punkt.
4. **Klikk på radius**, eller skriv den og trykk **Enter**.

Resultatet er én lukket polylinje, så alt du kan gjøre med en polylinje — flytte, rotere, offset, skalere — fungerer.

### Nøkkelvidde eller hjørnemål?

Her snubler mange. «Radius» kan bety to ulike avstander, og en sekskant oppgis med den ene eller den andre avhengig av hva du tegner:

| | Målt til | Typisk bruk |
|---|---|---|
| **Inside på** (standard) | Hjørnene | En form som må få plass inne i en gitt sirkel |
| **Inside av** | Midten av hver kant | En form med gitt nøkkelvidde — muttere, skruehoder, nøkkelstørrelser |

Trykk `I` ved radiusforespørselen for å bytte. En sekskantmutter selges etter nøkkelvidde, så bruk **Inside av** og skriv *halvparten*. For en M8-mutter med 13 mm nøkkelvidde:

1. `polygon`, deretter `6` for sidene, deretter klikk eller skriv sentrum.
2. Trykk `I` for å slå av Inside.
3. Skriv `6.5` og trykk **Enter**.

Flatene ligger nøyaktig 13 mm fra hverandre; hjørnene når 7,51 mm fra sentrum, omtrent 15 mm hjørnemål. Skriver du radius i stedet for å klikke, ligger mangekanten med laveste kant vannrett, flatt nedover. Klikker du, henter den retningen fra stedet du klikker.

### Fra én kant

Noen ganger kjenner du en sidelengde, ikke en radius — for eksempel en åttekantet bordplate med sider på 20 mm. Trykk `E` ved forespørselen om første punkt for å bytte til modusen **Edge**, og velg de to endene av én kant. De øvrige hjørnene bygges mot klokken, til venstre for den kanten. Skriver du `0,0` og deretter `20,0`, legges en kant på 20 mm langs X-aksen med mangekanten over.

## Tegne en hullsirkel

En hullsirkel — «PCD» på tegninger — er en ring av jevnt fordelte hull rundt et sentrum. Du tegner ett hull og gjentar det. I KulmanLab er det **ArrayPolar**.

Ta seks hull på 6,6 mm på en delesirkeldiameter på 50 mm, sentrert i origo:

1. **Tegn det første hullet.** Kjør `Sirkel`, skriv sentrum som `25` `,` `0` — halve PCD langs X-aksen —, trykk **Enter**, skriv deretter radius `3.3` og trykk **Enter**.
2. **Velg det** ved å klikke på sirkelen.
3. **Kjør den polare matrisen.** Skriv `Sirkelmønster`, eller bruk ArrayPolar-knappen i panelet Edit.
4. **Velg midten av mønsteret** — skriv `0,0`.
5. Terminalen viser matrisen slik den står — `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — og de fem kopiene forhåndsvises live. Trykk **Enter** for å godta.

Det er hele hullsirkelen. For et annet antall trykker du `I` før bekreftelsen og skriver antall elementer — originalen teller som ett, og vinkelen mellom dem regnes ut. Eller trykk `A` og skriv i stedet avstanden i grader; fyllvinkelen omformuleres for å stemme.

Noen detaljer som har betydning:

- **Fill** er vinkelen fra første til siste element. Standard 360° fordeler elementene over hele sirkelen; et mindre tall fordeler dem over en bue — en rad hull over en kvart omdreining, for eksempel. En negativ vinkel går med klokken.
- **Rotate** avgjør om hver kopi dreier med rundt. For runde hull spiller det ingen rolle. For et spor, en tann eller en vinkelbrakett gjør det det: på — hver kopi vender mot sentrum slik originalen gjorde; av — hver kopi beholder originalens retning og flyttes bare på plass. Trykk `R` for å bytte før bekreftelsen.
- Matrisen lager **kopier** — originalen blir der den er, og hvert element er en vanlig entitet du kan redigere etterpå.

## Alt samlet: en flens

Tegn en sekskant som kontur, en sirkel i midten til boringen og en hullsirkel til monteringshullene. Tre kommandoer, hvert mål skrevet nøyaktig, og ingenting å måle av på skjermen.

Skal delen til en laserskjærer, slett en hjelpesirkel du tegnet for å finne delesirkelen — den ville blitt skåret som alt annet — og sjekk filen mot guiden vår om å [klargjøre en DXF for laserskjæring](/no/blog/prepare-dxf-for-laser-cutting/). Mangekanten er en lukket bane av konstruksjon, som er den vanligste grunnen til at skjæretjenester avviser filer.

## Hva dette ikke gjør

- **Bare regulære mangekanter.** Alle sider er like. En uregelmessig kontur — en form med noen lengre sider — er en [polylinje](/no/docs/commands/polyline/) du tegner punkt for punkt.
- **Bare 2D.** Det tegner flate konturer. Du får verken en modellert mutter eller en gjenget bolt.
- **Bare nettlesere på datamaskin** — Chrome, Firefox, Safari og Edge. Det finnes ingen mobilversjon.

---

*Relatert: [Polygon](/no/docs/commands/polygon/) og [ArrayPolar](/no/docs/commands/array-polar/) for alle valg og taster, [Circle](/no/docs/commands/circle/) for å skrive nøyaktige radier og [ArrayGrid](/no/docs/commands/array-grid/) for å gjenta objekter i rader og kolonner i stedet for rundt et sentrum.*
