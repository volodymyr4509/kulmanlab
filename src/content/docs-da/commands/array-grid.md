---
title: Array Grid — Gentag Entiteter i Rækker og Kolonner
description: Array Grid-kommandoen laver et gitter af kopier fra markerede entiteter — skriv antallet af rækker, kolonner og afstanden mellem dem direkte i terminalen, ingen punktklikning nødvendig.
keywords: [CAD array-kommando, arraygrid, rektangulært array CAD, gittermønster CAD, gentag entiteter CAD, kopiarray CAD, kulmanlab]
group: edit
order: 15
---

# Array Grid

Kommandoen `ArrayGrid` laver et gitter af kopier fra de markerede entiteter — angiv antallet af rækker, antallet af kolonner og afstanden mellem dem, alt skrevet i terminalen. Den oprindelige markering optager række-0, kolonne-0-cellen; hver anden celle er en flyttet kopi.

## To måder at starte på

**Markér først, opret derefter array** — markér entiteter først, aktivér derefter:

1. Markér én eller flere entiteter på lærredet.
2. Skriv `arraygrid` i terminalen (så lidt som `arr` er nok — det er entydigt) eller klik på **Array Grid**-knappen i værktøjslinjen.
3. Skriv antallet af **rækker** og tryk **Enter**.
4. Skriv antallet af **kolonner** og tryk **Enter**.
5. Skriv **afstanden mellem rækker** og tryk **Enter**.
6. Skriv **afstanden mellem kolonner** og tryk **Enter** — gitteret oprettes straks.

**Aktivér, markér derefter** — start kommandoen uden noget markeret:

1. Skriv `arraygrid` eller klik på værktøjslinjeknappen.
2. **Markér objekter** — klik for at slå enkeltentiteter til/fra, eller træk for at markere efter område.
3. Tryk **Enter** eller **Space** for at bekræfte markeringen.
4. Fortsæt med rækker → kolonner → rækkeafstand → kolonneafstand som ovenfor.

```
  2 rækker x 3 kolonner:

  [B] [B] [B]   <- række 1 (flyttede kopier)
  [A] [A] [A]   <- række 0: oprindelig markering, kopier til højre
```

> Terminalen har kun brug for nok bogstaver til at være entydig — at skrive `arr` og trykke **Enter** aktiverer Array Grid direkte, da ingen anden kommando starter med de tre bogstaver (Arc, Area, Align og Angle divergerer alle tidligere).

## Rækker, kolonner og afstand

| Prompt | Accepterer | Bemærkninger |
|--------|---------|-------|
| Rows | Positive hele tal (1, 2, 3…) | Kun cifre — intet decimaltegn eller fortegn |
| Columns | Positive hele tal (1, 2, 3…) | Kun cifre — intet decimaltegn eller fortegn |
| Row spacing | Signeret decimaltal (f.eks. `10`, `-5.5`) | Afstand mellem rækker; negativ omvender retningen |
| Column spacing | Signeret decimaltal (f.eks. `10`, `-5.5`) | Afstand mellem kolonner; negativ omvender retningen |

Med 1 række og 1 kolonne oprettes ingen kopier — kommandoen afsluttes uden at ændre tegningen.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Enter` / `Space` | Bekræft markering og gå videre til rows-prompten |
| `0`–`9` | Indtast cifre for rækker eller kolonner |
| `0`–`9`, `.`, `-` | Indtast cifre for række-/kolonneafstand (`-` kun som første tegn) |
| `Backspace` | Slet sidst skrevne tegn i den aktuelle prompt |
| `Enter` | Bekræft den aktuelle prompt og gå videre til den næste |
| `Escape` | Ryd de indtastede værdier for rækker/kolonner/afstand og vend tilbage til markeringsfasen |

## Markering under kommandoen

| Metode | Adfærd |
|--------|-----------|
| **Klik** | Slår entiteten under markøren til/fra i markeringen |
| **Træk mod højre** (streng) | Tilføjer entiteter helt inde i boksen |
| **Træk mod venstre** (krydsning) | Tilføjer entiteter der krydser boksens kant |
| **Enter** / **Space** | Bekræfter markeringen og går videre til rows-prompten |

## Efter array-operationen

De nye kopier tilføjes til tegningen, og kommandoen afsluttes — den oprindelige markering fjernes. Kør **Array Grid** igen, eller start en ny kommando.

## Array Grid vs Copy

| | Array Grid | Copy |
|---|-----------|------|
| Punktklikning | Ingen — rækker, kolonner og afstand indtastes | Basispunkt og mål klikkes (eller indtastes) |
| Oprettede kopier | Rækker × kolonner − 1 | Nøjagtigt 1 pr. kopieringsoperation |
| Layout | Regelmæssigt rektangulært gitter | Hvor som helst, i enhver afstand |
| Bedst til | Gentagelse af en enhed i et regelmæssigt mønster (huller, fliser, fastgørelseselementer) | En enkelt duplikat på en vilkårlig position |

## Understøttede entiteter

Array Grid fungerer på alle entitetstyper. Alle entiteter implementerer `translate(dx, dy)` internt, den samme operation [Copy](../copy/) og [Move](../move/) bruger, så ingen udelukkes.
