---
title: Move-kommando — Flyt Markerede Entiteter via Basispunkt
description: Move-kommandoen flytter én eller flere markerede entiteter via et basispunkt og et mål. Understøtter forhåndsmarkering, vinkellås og eksakt afstandsindtastning. Efter flytningen forbliver entiteterne markeret på deres nye position. Alle entitetstyper understøttes.
keywords: [CAD move-kommando, flyt entiteter CAD, flyt objekter CAD, vinkellås flytning, eksakt afstand flytning, grebflytning CAD, kulmanlab]
group: edit
order: 1
---

# Move

Kommandoen `move` flytter markerede entiteter fra et basispunkt til et målpunkt. Forskydningen anvendt på hver markerede entitet er vektoren fra basis til mål. Efter flytningen forbliver alle entiteter markeret på deres nye position, klar til yderligere redigering.

## To måder at starte på

**Markér først, flyt derefter** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `move` i terminalen eller klik på **Move**-knappen i værktøjslinjen.
3. **Klik basispunktet**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
4. **Klik målet** — alle markerede entiteter forskydes med vektoren basis→mål. Koordinatindtastning fungerer også her.

**Aktivér, markér derefter** — start kommandoen uden noget markeret:

1. Skriv `move` eller klik på værktøjslinjeknappen.
2. **Markér objekter** — klik for at slå enkeltentiteter til/fra, eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. **Klik basispunktet**, klik derefter **målet** (koordinatindtastning tilgængelig ved begge trin).

```
  Før:                       Efter:
  ● basis                       → ● mål
  [entitet A]                      [entitet A flyttet]
  [entitet B]                      [entitet B flyttet]
```

En spøgelsesforhåndsvisning af alle markerede entiteter følger markøren fra basispunktet til målet, og viser resultatet, før du klikker.

## Koordinatindtastning

Ved basispunkt- eller måltrinnet kan du indtaste en eksakt position i stedet for at klikke:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at bekræfte.

## Vinkellås og eksakt afstand

Efter at basispunktet er sat, holder kommandoen øje med en 45°-fæsteakse (0°, 45°, 90°, 135° …). Retningen **låses**, når markøren er langt nok fra basen og inden for én grebbredde fra aksen. Mens låst:

- Spøgelsesforhåndsvisningen fæstner sig til aksen.
- Skriv en afstand og tryk **Enter** for at flytte nøjagtigt så langt langs den låste retning.
- At klikke projicerer på aksen, så målet altid ligger nøjagtigt på den.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj til afstandsværdien |
| `-` | Negativ afstand — omvender retningen langs aksen (kun første tegn) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Anvend flytningen ved den indtastede afstand |

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering og gå videre til basispunkt-fasen |
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning, eller afstand mens vinkellåst |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft koordinat eller anvend flytning ved indtastet afstand |
| `Escape` | Annullér og nulstil |

## Aktivere Move fra et greb

At klikke **midtpunktgrebet** på en markeret [Line](../line/) starter Move automatisk, med midtpunktet allerede sat som basispunkt og flyttefasen aktiv. Dette er den hurtigste måde at omplacere en enkelt linje på uden at gå gennem markeringstrinnet.

## Markering under kommandoen

Når kommandoen starter i markeringsfasen:

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra i markeringen |
| **Træk mod højre** (streng) | Tilføjer entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Tilføjer entiteter der krydser boksens kant |
| **Enter** / **Space** | Bekræfter markeringen og går videre til basispunkt-fasen |

## Efter flytningen

De flyttede entiteter forbliver markeret på deres nye position. Det betyder, at du straks kan:
- Køre **Move** igen for at flytte dem videre.
- Køre [Copy](../copy/), [Rotate](../rotate/) eller [Scale](../scale/) uden at markere igen.
- Trykke **Delete** for at fjerne dem.

## Move vs Copy

| | Move | Copy |
|---|------|------|
| Oprindelig position | Forladt — entiteterne er ikke længere der | Bevaret — originalerne bliver på plads |
| Resultatantal | Samme antal entiteter | Ét ekstra sæt pr. operation |
| Markering efterfølgende | Flyttede entiteter markeret på ny position | Kopierede entiteter markeret på ny position |
| Bedst til | Omplacering af geometri | Duplikering af geometri |

## Understøttede entiteter

Move fungerer på alle entitetstyper: Line, Polyline, Rectangle, Circle, Arc, Ellipse, Text, Spline, Dimension, Leader og alle andre. Alle entiteter implementerer `translate(dx, dy)`, så ingen udelukkes.
