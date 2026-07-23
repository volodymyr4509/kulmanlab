---
title: Dimension Radius-kommando — Angiv Bue- og Cirkelradier
description: Dimension Radius-kommandoen placerer et R-præfikset radialt mål på en bue eller cirkel. Klik entiteten, flyt derefter markøren for at orientere mållinjen fra centrum til omkreds. Fuld DXF-rundtur som DIMENSION radius-entiteter.
keywords: [CAD radiusmål, dimradius, angiv cirkelradius, buemål radius, R-præfiks mål, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Kommandoen `dimradius` placerer et radiusmål på en bue eller cirkel. Mållinjen løber fra centrum til et punkt på omkredsen i markørens retning, mærket `R <værdi>`. For at dimensionere en fuld diameter i stedet, brug [Dimension Diameter](../dim-diameter/).

## Anatomien af et radiusmål

```
  ● (centrum)
   \
    \  R 5.00
     \
      ●────── tekst (markørside)
   (buepunkt)
```

- **Mållinje** — fra centrum gennem et buepunkt mod markøren, med en pilespids ved buen.
- **Etiket** — `R` efterfulgt af radiusværdien.

## Placere et radiusmål

1. Skriv `dimradius` i terminalen eller klik på **Dimension Radius**-knappen i værktøjslinjen.
2. **Klik en bue eller cirkel** for at vælge den.
3. **Flyt markøren** for at orientere mållinjen — buepunktet følger markørens retning fra centrum.
4. **Klik** for at placere målet.

Kun **Arc**- og **Circle**-entiteter kan markeres. At klikke enhver anden entitetstype gør ingenting.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` | Annullér |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Måler | Radius (centrum til kant) | Diameter (kant til kant gennem centrum) |
| Mållinje | Centrum → buepunkt | Buepunkt → buepunkt (gennem centrum) |
| Etiketpræfiks | `R` | `⌀` |
| Pilespidser | Én (ved buepunktet) | To (ved begge buepunkter) |
| Bedst til | Angivelse af én side af et buet element | Angivelse af fulde cirkulære mål |

## Redigere etiketten — simpel tilstand

**Dobbeltklik** et placeret radiusmål for at åbne teksteditoren i **simpel** tilstand. Editoren er forudfyldt med den aktuelle gengivne værdi (f.eks. `R 5.00`), så du kan placere markøren og redigere den direkte.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Skrifttype / Højde | Gælder **hele** etiketten på én gang |
| Per-tegn formatering | Understøttes ikke |
| `Enter` | Bekræfter værdien og lukker editoren |
| Flerlinje | Understøttes ikke |

Se [Tekstredigering — simpel tilstand](../../interface/text-editor/#simple-mode) for den fulde reference.

## DXF — DIMENSION radius-entitet

Radiusmål gemmes som `DIMENSION`-entiteter med radiustype-geometri, der gemmer centerkoordinaterne, buepunktpositionen og den målte radiusværdi. Alle egenskaber overlever en rundtur uden tab.
