---
title: Line-kommando — Tegn, Kjed, Trim og Forleng Linjer
description: Line-kommandoen tegner enkeltstående rette linjesegmenter som kan kjedes ende-til-ende. Linjer er den eneste entitetstypen som Trim og Extend fungerer på. Full DXF-rundtur som LINE-entiteter.
keywords: [CAD line-kommando, tegn rett linje CAD, kjed linjesegmenter, trim linje CAD, forleng linje CAD, vinkellås CAD, DXF LINE-entitet, kulmanlab]
group: shapes
order: 1
---

# Line

Kommandoen `Linje` tegner enkeltstående rette linjesegmenter lagret som separate `LINE`-entiteter i DXF-modellen. Etter hvert segment forblir kommandoen aktiv og gjenbruker endepunktet som et nytt startpunkt, slik at du kan bygge sammenhengende baner ett segment om gangen. I motsetning til en [Polyline](../polyline/) forblir kjedede linjer uavhengige entiteter — hver kan trimmes, forlenges eller slettes uten å påvirke naboene.

## Tegne linjer

1. Skriv `Linje` i terminalen eller klikk på **Line**-knappen i verktøylinjen.
2. **Klikk startpunktet**, eller skriv `X,Y` og trykk **Enter** for en eksakt koordinat.
3. **Klikk sluttpunktet** — segmentet plasseres, og endepunktet blir det neste startpunktet. Koordinatinntasting fungerer også her.
4. Fortsett å klikke (eller skrive) for å kjede flere segmenter.
5. Trykk **Enter**, **Space** eller **Escape** for å stoppe.

```
  ●──────────●──────────●──────────●
 start    2. klikk    3. klikk    Enter/Space for å avslutte
            (blir automatisk neste start)
```

Trenger du bare ett enkelt segment? Trykk **Enter**, **Space** eller **Escape** rett etter steg 3.

## Koordinatinntasting

I stedet for å klikke kan du skrive inn en eksakt posisjon for starten eller et hvilket som helst påfølgende punkt:

1. Skriv X-verdien (sifre, `.` eller `-`).
2. Trykk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-verdien.
4. Trykk **Enter** for å plassere punktet.

## Vinkellås og eksakt lengdeinntasting

Mens du flytter markøren etter å ha plassert et punkt, ser kommandoen etter en 45°-festeakse (0°, 45°, 90°, 135° …). Vinkelen **låses** når:

- markøren er minst **5 × grepstørrelsen** fra ankeret, **og**
- den er innenfor **1 grepstørrelse** vinkelrett avstand fra den nærmeste aksen.

Når den er låst festes forhåndsvisningen til aksen, og du kan skrive inn en eksakt lengde:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Legg til siffer i lengdeverdien |
| `-` | Negativ lengde — reverserer retningen langs aksen (kun første tegn) |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Plasser endepunktet ved den inntastede avstanden |

Den akkumulerte verdien vises live i terminalen (f.eks. `click end point or enter length: 12.5`). Klikk mens låst, og klikket projiseres på aksen, slik at endepunktet alltid ligger nøyaktig på den.

Å flytte tilbake nær ankerpunktet løser opp låsen.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatinntasting, eller avstand mens vinkellåst |
| `,` | Lås X og gå til Y-inntasting |
| `Backspace` | Slett sist skrevne tegn |
| `Enter` | Bekreft inntastet koordinat eller lengde, eller avslutt kjeden hvis ingenting er skrevet |
| `Space` | Samme som `Enter` — avslutter kjeden, med mindre en lengde er under inntasting, i så fall bekrefter den lengden i stedet |
| `Escape` | Avslutt kjeden og gå ut |

## Grep-redigering — strekke endepunkter

En markert linje viser tre grep:

| Grep | Hvor | Hva den gjør |
|------|-------|--------------|
| **Start** | Første endepunkt | Dra for å omplassere — slutten forblir fast |
| **Midtpunkt** | Senter av linjen | Aktiverer **Move** for hele linjen |
| **Slutt** | Andre endepunkt | Dra for å omplassere — starten forblir fast |

Å strekke ett endepunkt påvirker aldri det andre. Dette skiller seg fra [Polyline](../polyline/)-grep-redigering, der å flytte et hjørne omformer hele banen.

## Markere linjer

| Metode | Oppførsel |
|--------|-----------|
| **Klikk** | Markerer linjen hvis klikket er innenfor treffavstand for segmentet |
| **Dra til høyre** (streng) | Linjen markeres kun hvis begge endepunkter faller inni boksen |
| **Dra til venstre** (krysning) | Linjen markeres hvis en hvilken som helst del av segmentet krysser boksens kant |

## Støttede redigeringskommandoer

Linjer er den **eneste** entiteten [Trim](../trim/) og [Extend](../extend/) fungerer på. Alle standard transformasjonskommandoer gjelder også:

| Kommando | Hva som skjer med en linje |
|---------|------------------------|
| [Move](../move/) | Flytter begge endepunktene med samme forskyvning |
| [Copy](../copy/) | Oppretter en identisk linje på en ny posisjon |
| [Rotate](../rotate/) | Roterer begge endepunktene rundt det valgte basispunktet |
| [Mirror](../mirror/) | Speilvender begge endepunktene over speilaksen |
| [Scale](../scale/) | Skalerer begge endepunktene jevnt fra basispunktet |
| [Offset](../offset/) | Oppretter en parallell linje i en fast vinkelrett avstand |
| [Trim](../trim/) | Kutter linjen ved skjæringspunkter — **kun linjer** |
| [Extend](../extend/) | Strekker det nærmeste endepunktet til å nå en grense — **kun linjer** |
| [Delete](../delete/) | Fjerner linjen fra tegningen |

## Egenskaper

Når en linje er markert, viser egenskapspanelet hvert felt DXF `LINE`-posten bærer:

**Generelt**

| Egenskap | Standard | Betydning |
|----------|---------|---------|
| Farge | 256 (ByLayer) | ACI-fargeindeks |
| Lag | `0` | Lagtilhørighet |
| Linetype | ByLayer | Navngitt strekmønster |
| Linetype Scale | 1 | Skaleringsfaktor for strekmønsteret |
| Thickness | 0 | Ekstruderingstykkelse |

**Geometri**

| Egenskap | Betydning |
|----------|---------|
| Start X / Start Y | Koordinater for det første endepunktet |
| End X / End Y | Koordinater for det andre endepunktet |

Alle felt kan redigeres direkte i panelet uten å kjøre kommandoen på nytt.

## Line vs Polyline — hva du bør bruke

| | Line | Polyline |
|---|------|---------|
| Antall entiteter | Én `LINE` per segment | Én `LWPOLYLINE` for hele banen |
| Trim / Extend | Ja — segment for segment | Nei |
| Lukket form | Nei | Ja (close-flagg) |
| Grep-redigering | Strekk individuelle endepunkter | Flytt et hvilket som helst hjørne langs banen |
| Best til | Hjelpelinjer, enkeltsegmenter, geometri du skal trimme | Konturer, omriss, former du beholder hele |

## DXF — LINE-entitet

Linjer lagres som `LINE`-entiteter i DXF-filen. Hver egenskap — start-/sluttkoordinater, farge, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uten tap. Når du åpner en DXF som inneholder `LINE`-entiteter, blir de fullt redigerbare `Line`-objekter i editoren.

Linjer tegnet i editoren skrives også som `LINE`-entiteter ved lagring, slik at de kan leses av LibreCAD, FreeCAD og enhver annen DXF-kompatibel applikasjon.
