---
title: Circle-kommando — Tegn Cirkler med Centrum og Radius
description: Circle-kommandoen placerer en cirkel ved at klikke et centerpunkt og derefter klikke eller indtaste radius. Fire kardinalgreb lader dig ændre radius ved at trække uden at køre kommandoen igen. Fuld DXF-rundtur som CIRCLE-entiteter.
keywords: [CAD circle-kommando, tegn cirkel CAD, cirkelradius-indtastning, ændr størrelse cirkel-greb, CIRCLE DXF-entitet, dimradius cirkel, kulmanlab]
group: shapes
order: 4
---

# Circle

Kommandoen `circle` tegner en cirkel defineret af et centerpunkt og en radius. Efter at centrum er klikket, kan du sætte radius enten ved at klikke et andet punkt på lærredet eller ved at indtaste et eksakt tal — begge muligheder er aktive samtidig.

## Tegne en cirkel

1. Skriv `circle` i terminalen eller klik på **Circle**-knappen i værktøjslinjen.
2. **Klik centerpunktet**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
3. Sæt radius — enten:
   - **Klik et hvilket som helst punkt** på lærredet — afstanden fra centrum bliver radius, eller
   - **Indtast radius** og tryk **Enter** for en eksakt værdi.

Cirklen placeres straks, og kommandoen afsluttes.

```
  centrum ●
          \  forhåndsvisning af radiuslinje
           \
            ● ← klik her, eller skriv et tal
```

Mens du er i radiusfasen, viser den levende forhåndsvisning cirklen ved den aktuelle markørafstand og tegner også en radiuslinje fra centrum til det aktuelle punkt.

## Koordinatindtastning for centrum

I stedet for at klikke kan du indtaste centerpositionen:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at placere centrum og gå videre til radiusindtastning.

## Indtastet radius

Efter at centrum er placeret, opbygger indtastning straks en radiusværdi:

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj ciffer til radiusværdien |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Placér cirklen ved den indtastede radius |

Den akkumulerede værdi vises i terminalprompten (f.eks. `enter radius of circle: 25`). Forhåndsvisningen opdateres for at vise den indtastede radius, mens markøren styrer retningen af radiuslinjemarkøren.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning (centerfase), eller radius-ciffer (radiusfase) |
| `,` | Lås X og gå til Y-indtastning (centerfase) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft indtastet koordinat eller radius |
| `Escape` | Annullér og nulstil |

## Grebredigering — ændre radius

En markeret cirkel viser fem greb:

| Greb | Position | Hvad den gør |
|------|----------|--------------|
| **Centrum** | Centerpunkt | Flytter hele cirklen; radius forbliver uændret |
| **Venstre** | Venstreste punkt (centrum − radius) | Træk for at sætte en ny radius = afstand til centrum |
| **Højre** | Højreste punkt (centrum + radius) | Træk for at sætte en ny radius = afstand til centrum |
| **Top** | Øverste punkt | Træk for at sætte en ny radius = afstand til centrum |
| **Bund** | Nederste punkt | Træk for at sætte en ny radius = afstand til centrum |

Alle fire kardinalgreb opfører sig identisk — den nye radius svarer til afstanden fra centrum til trækpositionen. Centrum forbliver fast.

## Markere cirkler

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Markerer, hvis klikket lander tæt på omkredsen |
| **Træk mod højre** (streng) | Hele det afgrænsende kvadrat (centrum ± radius) skal ligge inde i boksen |
| **Træk mod venstre** (krydsning) | Enhver del af omkredsen, der krydser eller berører boksens kant, markerer cirklen |

## Understøttede redigeringskommandoer

| Kommando | Hvad der sker med cirklen |
|---------|---------------------------|
| [Move](../move/) | Flytter centrum; radius forbliver uændret |
| [Copy](../copy/) | Opretter en identisk cirkel med et nyt centrum |
| [Rotate](../rotate/) | Roterer centrum omkring basispunktet; radius forbliver uændret |
| [Mirror](../mirror/) | Spejler centrum over spejlaksen; radius forbliver uændret |
| [Scale](../scale/) | Skalerer centerpositionen og multiplicerer radius med skaleringsfaktoren |
| [Offset](../offset/) | Opretter en koncentrisk cirkel med større eller mindre radius |
| [Delete](../delete/) | Fjerner cirklen |

## Egenskaber

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
| Center X / Center Y | Koordinater for centerpunktet |
| Radius | Cirkelradius i tegneenheder |

## Circle vs Arc — hvad du bør bruge

| | Circle | Arc |
|---|--------|-----|
| Spænd | Fuld 360° | Delvist — defineret af start- og slutvinkel |
| Sådan tegner du | Centrum + radius | Tre punkter på kurven |
| Indtastet input | Radiusværdi | Ingen — kun klik |
| Størrelsesgreb | 4 kardinalpunkter | Start- og slutpunkter (vinkel + radius) |
| Dimensionering | Radius: [Dim Radius](../dim-radius/) · Diameter: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Bedst til | Fulde huller, boltcirkler, runde elementer | Afrundinger, delvise kurver, buede baner |

## DXF — CIRCLE-entitet

Cirkler gemmes som `CIRCLE`-entiteter i DXF-filen. Centerkoordinater, radius, farve, lag, linetype, linetype-skala og tykkelse overlever alle en rundtur uden tab. Enhver DXF-kompatibel applikation læser disse som standardcirkler.
