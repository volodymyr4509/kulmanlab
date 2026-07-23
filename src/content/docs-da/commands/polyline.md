---
title: Polyline-kommando — Tegn Flersegment-baner som Én Enkelt Entitet
description: Polyline-kommandoen tegner et hvilket som helst antal forbundne segmenter gemt som én LWPOLYLINE-entitet. Hjørne- og segmentmidtpunktgreb lader dig omforme enhver del af banen efter oprettelse. Understøtter offset; understøtter ikke trim eller extend.
keywords: [CAD polyline-kommando, tegn polylinje CAD, flersegment-bane CAD, LWPOLYLINE DXF, omform polylinje, hjørnegreb CAD, offset polylinje, kulmanlab]
group: shapes
order: 2
---

# Polyline

Kommandoen `polyline` tegner en forbundet bane med et hvilket som helst antal lige segmenter, alle gemt som én enkelt `LWPOLYLINE`-entitet. Fordi hele banen er ét objekt, markerer det at vælge den alle segmenter på én gang — flyt, rotér eller skalér hele formen i én operation. Dette er den centrale forskel fra kædede [Lines](../line/), hvor hvert segment er en uafhængig entitet.

Polylinjer kan også være **lukkede**: [Rectangle](../rectangle/)-kommandoen bruger den samme `LWPOLYLINE`-entitet med et close-flag sat.

## Tegne en polylinje

1. Skriv `polyline` i terminalen eller klik på **Polyline**-knappen i værktøjslinjen.
2. **Klik det første punkt**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. **Klik hvert efterfølgende punkt** — hvert klik tilføjer et segment. Koordinatindtastning fungerer ved hvert trin.
4. Tryk **Enter** eller **Space** for at afslutte (kræver mindst 2 placerede punkter).

```
  ●──────●
  1.     2.
          \
           \  segment 3 (i gang — markøren her)
            ●  ← klik for at tilføje, Enter/Space for at afslutte
```

At trykke **Escape** når som helst kasserer alle placerede punkter og afslutter kommandoen.

## Koordinatindtastning

I stedet for at klikke kan du indtaste en eksakt position for et hvilket som helst hjørne:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere hjørnet.

## Vinkellås og eksakt segmentlængde

Den samme 45°-fæstelogik som [Line](../line/#angle-locking-and-exact-length-input)-kommandoen gælder mellem to på hinanden følgende punkter. Når låst til en akse:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til segmentlængden |
| `-` | Negativ længde — omvender retningen langs aksen (kun første tegn) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Placér det næste punkt ved den indtastede afstand |

Den aktuelle akkumulerede længde vises i terminalprompten i realtid. At klikke mens låst projicerer på aksen, så det nye hjørne lander nøjagtigt på den.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning, eller segmentlængde mens vinkellåst |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat eller længde, eller afslut polylinjen hvis intet er skrevet og ≥ 2 punkter findes |
| `Space` | Afslut polylinjen (samme som Enter når ingen indtastning er i gang) |
| `Escape` | Kassér alle punkter og gå ud |

## Grebredigering — hjørner og segmentmidtpunkter

En markeret polylinje viser to typer greb:

| Greb | Position | Hvad den gør |
|------|----------|--------------|
| **Hjørne** | Ved hvert placeret punkt | Træk for at genplacere det hjørne; alle forbundne segmenter strækker sig for at følge |
| **Segmentmidtpunkt** | Centrum af hvert segment | Træk for at forskyde **begge** endepunkter af det segment sammen, og bevare segmentets længde og vinkel |

Segmentmidtpunkt-grebet er unikt for polylinjer — det lader dig glide et enkelt segment sidelæns uden at ændre dets længde. På en [Line](../line/) aktiverer midtpunktgrebet i stedet Move-kommandoen for hele entiteten.

Der findes ikke noget enkelt "flyt hele polylinjen"-greb. For at flytte hele banen, brug [Move](../move/)-kommandoen.

## Markere polylinjer

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer polylinjen, hvis klikket lander inden for treffafstand af et hvilket som helst segment |
| **Træk mod højre** (streng) | Alle hjørner skal falde inde i boksen |
| **Træk mod venstre** (krydsning) | Ethvert segment der krydser boksens kant markerer hele polylinjen |

Fordi en polylinje er én entitet, markerer en krydsningsmarkering, der rører et hvilket som helst segment, alle segmenter.

## Understøttede redigeringskommandoer

Polylinjer understøtter alle generelle transformationer og offset, men **ikke** trim eller extend (de er kun for [Line](../line/)):

| Kommando | Hvad der sker med polylinjen |
|---------|------------------------------|
| [Move](../move/) | Flytter alle hjørner med samme forskydning |
| [Copy](../copy/) | Opretter en identisk polylinje på en ny position |
| [Rotate](../rotate/) | Roterer alle hjørner omkring det valgte basispunkt |
| [Mirror](../mirror/) | Spejler alle hjørner over spejlaksen |
| [Scale](../scale/) | Skalerer alle hjørner ensartet fra basispunktet |
| [Offset](../offset/) | Opretter en parallel polylinje i en fast vinkelret afstand |
| [Delete](../delete/) | Fjerner polylinjen fra tegningen |

## Egenskaber

Når en polylinje er markeret, viser egenskabspanelet:

**Generelt**

| Egenskab | Standard | Betydning |
|----------|---------|---------|
| Farve | 256 (ByLayer) | ACI-farveindeks |
| Lag | `0` | Lagtilhørsforhold |
| Linetype | ByLayer | Navngivet stregmønster |
| Linetype Scale | 1 | Skaleringsfaktor for stregmønsteret |
| Thickness | 0 | Ekstruderingstykkelse |

**Geometri**

| Egenskab | Betydning |
|----------|---------|
| Closed | Om det sidste hjørne forbindes tilbage til det første |
| Vertex Count | Samlet antal hjørner |
| Vertices | Koordinatliste for alle hjørner |

## Polyline vs Line — hvad du bør bruge

| | Polyline | Line |
|---|---------|------|
| Antal entiteter | Én `LWPOLYLINE` for hele banen | Én `LINE` pr. segment |
| Lukket form | Ja (close-flag) | Nej |
| Trim / Extend | Nej | Ja — segment for segment |
| Segmentmidtpunkt-greb | Forskyder hele segmentet | Aktiverer Move for entiteten |
| Bedst til | Omrids, konturer, former du beholder hele | Hjælpelinjer, geometri du skal trimme |

## DXF — LWPOLYLINE-entitet

Polylinjer gemmes som `LWPOLYLINE`-entiteter i DXF-filen. Alle egenskaber — hjørnekoordinater, close-flag, farve, lag, linetype, linetype-skala og tykkelse — overlever en rundtur uden tab. Rektangler tegnet med [Rectangle](../rectangle/)-kommandoen gemmes også som `LWPOLYLINE` (lukket, fire hjørner) og kan ikke skelnes på DXF-niveau.

`LWPOLYLINE`-entiteter fra enhver DXF-kompatibel applikation (LibreCAD, FreeCAD osv.) læses tilbage som fuldt redigerbare polylinjer i editoren.
