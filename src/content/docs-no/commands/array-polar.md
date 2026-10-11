---
title: "ArrayPolar-kommando — kopier objekter rundt et sentrum i KulmanLab CAD"
description: "ArrayPolar-kommandoen kopierer de valgte objektene rundt et sentrum — et bestemt antall elementer fordelt over en hel omdreining eller en del av den, med kopier som dreier seg med rundt eller beholder sin egen retning."
keywords: ["CAD polar matrise", "sirkulært mønster CAD", "kopier objekter rundt et punkt CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Kommandoen `ArrayPolar` lager kopier av de valgte objektene rundt et sentrum, jevnt fordelt over en hel omdreining eller en del av den. Originalen er det første elementet; alle andre er kopier, dreid om sentrum — eller bare flyttet rundt det, hvis du slår av Rotate.

## Lage en polar matrise

1. Velg objektene, og skriv deretter `arraypolar` i terminalen eller klikk på **Array Polar**-knappen i verktøylinjen. Startes den uten valg, ber den deg først velge dem — bekreft med **Enter** eller **Space**.
2. **Klikk på sentrum** som kopiene går rundt, eller skriv `X,Y` og trykk **Enter** for en nøyaktig koordinat.
3. Gjennomgå matrisen. Alle kopiene forhåndsvises live, og terminalen viser `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — trykk på et valgs bokstav for å endre det.
4. Trykk **Enter** eller **Space** for å lage kopiene. Originalene blir der de er, og valget tømmes.

## Valg

| Valg | Tast | Virkning |
|---|---|---|
| Items | `I` | Hvor mange elementer det er, originalen medregnet — et helt tall fra 2 til 1024. Starter på 6. |
| Angle | `A` | Grader fra ett element til det neste, mot klokken; en negativ vinkel går med klokken. Opptil 180°. |
| Fill | `F` | Grader fra første til siste element. 360 (standard) er en hel omdreining; et mindre tall fordeler elementene over en del av den. Negativ går med klokken. Opptil 360°. |
| Rotate | `R` | På (standard): hver kopi dreier seg med rundt. Av: hver kopi flyttes på plass og vender samme vei som originalen. Bytter på stedet — det er ikke noe tall å skrive. |

- Angle og Fill er to måter å si det samme på, så endrer du den ene, omformuleres den andre. Over en hel omdreining stopper det siste elementet ett steg før det første; over en del av en omdreining lander det nøyaktig på fyllvinkelen.
- For å endre et tall trykker du på valgets bokstav. Forespørselen er forhåndsutfylt med gjeldende verdi — skriv for å erstatte den, og trykk **Enter** eller **Space**; bekreftes den uendret, blir matrisen som den var.
- Items tar bare hele tall; Angle og Fill tar desimaler og en innledende `-` for med klokken. En vinkel eller fylling på 0 avvises, det samme gjelder en vinkel over 180° eller en fylling over 360° — terminalen sier hvorfor.
- En Angle som er for liten for alle elementene, fjerner de uten plass, og terminalen melder det nye antallet.
- Fungerer på alle entitetstyper: hver kopi er originalen dreid om sentrum eller flyttet, nøyaktig slik [Rotate](../rotate/) og [Move](../move/) ville gjort det.

## Tastaturoversikt

| Tast | Handling |
|---|---|
| `Enter` / `Space` | Bekreft valget, matrisen eller et skrevet tall |
| `I` `A` `F` `R` | Endre Items, Angle eller Fill ved å skrive et tall; veksle Rotate |
| `0`–`9`, `.`, `-` | Skriv tallet (`.` og `-` bare for Angle og Fill, `-` først) |
| `Backspace` | Slett det sist skrevne tegnet |
| `Escape` | Avbryt |
