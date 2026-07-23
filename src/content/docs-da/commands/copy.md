---
title: Copy-kommando — Duplikér Entiteter på en Ny Position
description: Copy-kommandoen opretter flyttede duplikater af markerede entiteter mens originalerne forbliver på plads. Understøtter forhåndsmarkering, vinkellås og eksakt afstandsindtastning. Kopierne placeres, og kommandoen afsluttes; originalerne forbliver uændrede.
keywords: [CAD copy-kommando, duplikér entiteter CAD, kopiér objekter CAD, klon geometri CAD, vinkellås kopi, eksakt afstand kopi, kulmanlab]
group: edit
order: 2
---

# Copy

Kommandoen `copy` opretter flyttede duplikater af markerede entiteter og placerer dem forskudt fra et basispunkt til et mål — originalerne bliver liggende, præcis hvor de er. Dette er den ene centrale forskel fra [Move](../move/): Copy tilføjer nye entiteter til tegningen; Move flytter eksisterende.

## To måder at starte på

**Markér først, kopiér derefter** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `copy` i terminalen eller klik på **Copy**-knappen i værktøjslinjen.
3. **Klik basispunktet**, eller skriv `X,Y` og tryk **Enter** for en eksakt koordinat.
4. **Klik målet** — duplikater vises ved forskydningen fra basispunkt til mål. Koordinatindtastning fungerer også her.

**Aktivér, markér derefter** — start kommandoen uden noget markeret:

1. Skriv `copy` eller klik på værktøjslinjeknappen.
2. **Markér objekter** — klik for at slå enkeltentiteter til/fra, eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. **Klik basispunktet**, klik derefter **målet** (koordinatindtastning tilgængelig i begge trin).

```
  Før:                  Efter:
  [entitet A]            [entitet A]  ← originaler urørt
  [entitet B]            [entitet B]
                        [kopi af A] ← nye entiteter
                        [kopi af B]
```

En spøgelsesforhåndsvisning af kopierne følger markøren fra basispunktet til målet.

## Koordinatindtastning

Ved basispunkt- eller måltrinnet kan du indtaste en eksakt position i stedet for at klikke:

1. Skriv X-værdien.
2. Tryk `,` — terminalen viser `[X], [Y{markør}]`.
3. Skriv Y-værdien.
4. Tryk **Enter** for at bekræfte.

## Vinkellås og eksakt afstand

Efter at basispunktet er sat, fæstner kommandoen sig til 45°-akser (0°, 45°, 90°, 135° …), når markøren er langt nok væk og tæt på aksen. Mens låst, skriv en afstand og tryk **Enter** for at placere kopierne ved nøjagtigt den forskydning.

| Tast | Handling |
|-----|--------|
| `0`–`9`, `.` | Tilføj til afstandsværdien |
| `-` | Negativ afstand — omvender retningen langs aksen (kun første tegn) |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Placér kopier ved den indtastede afstand |

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering og gå videre til basispunkt-fasen |
| `0`–`9`, `.`, `-` | Start X-koordinatindtastning, eller afstand mens vinkellåst |
| `,` | Lås X og gå til Y-indtastning |
| `Backspace` | Slet sidst skrevne tegn |
| `Enter` | Bekræft koordinat eller anvend kopi ved indtastet afstand |
| `Escape` | Annullér og nulstil |

## Markering under kommandoen

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra i markeringen |
| **Træk mod højre** (streng) | Tilføjer entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Tilføjer entiteter der krydser boksens kant |
| **Enter** / **Space** | Bekræfter markeringen |

## Efter kopieringen

**Originalerne forbliver markeret** — de nye kopier tilføjes til tegningen, men markeringen fjernes, og kommandoen afsluttes. For at arbejde med kopierne straks, kør Copy igen på markeringen, eller start en ny kommando.

## Copy vs Move

| | Copy | Move |
|---|------|------|
| Originaler | Bliver på plads | Fjernes fra oprindelig position |
| Resultatantal | Øges med antallet af kopierede entiteter | Uændret |
| Efter operationen | Originaler stadig markeret | Flyttede entiteter markeret på ny position |
| Bedst til | Gentagelse af geometri, symmetriske layouts | Omplacering af geometri |

## Understøttede entiteter

Copy fungerer på alle entitetstyper. Alle entiteter implementerer `translate(dx, dy)` internt, så ingen udelukkes.
