---
title: Dimension Radius-kommando — Merk Bue- og Sirkelradier
description: Dimension Radius-kommandoen plasserer et R-prefikset radialt mål på en bue eller sirkel. Klikk entiteten, flytt deretter markøren for å orientere mållinjen fra senter til omkrets. Full DXF-rundtur som DIMENSION radius-entiteter.
keywords: [CAD radiusmål, dimradius, merk sirkelradius, buemål radius, R-prefiks mål, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Kommandoen `dimradius` plasserer et radiusmål på en bue eller sirkel. Mållinjen går fra senteret til et punkt på omkretsen i markørens retning, merket `R <verdi>`. For å måle en full diameter i stedet, bruk [Dimension Diameter](../dim-diameter/).

## Anatomien til et radiusmål

```
  ● (senter)
   \
    \  R 5.00
     \
      ●────── tekst (markørside)
   (buepunkt)
```

- **Mållinje** — fra senteret gjennom et buepunkt mot markøren, med en pilspiss ved buen.
- **Etikett** — `R` etterfulgt av radiusverdien.

## Plassere et radiusmål

1. Skriv `dimradius` i terminalen eller klikk på **Dimension Radius**-knappen i verktøylinjen.
2. **Klikk en bue eller sirkel** for å velge den.
3. **Flytt markøren** for å orientere mållinjen — buepunktet følger markørens retning fra senteret.
4. **Klikk** for å plassere målet.

Kun **Arc**- og **Circle**-entiteter kan markeres. Å klikke enhver annen entitetstype gjør ingenting.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` | Avbryt |

## Dimension Radius vs Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Måler | Radius (senter til kant) | Diameter (kant til kant gjennom senteret) |
| Mållinje | Senter → buepunkt | Buepunkt → buepunkt (gjennom senteret) |
| Etikettprefiks | `R` | `⌀` |
| Pilspisser | Én (ved buepunktet) | To (ved begge buepunkter) |
| Best til | Merking av én side av et buet element | Merking av fulle sirkulære mål |

## Redigere etiketten — enkel modus

**Dobbeltklikk** på et plassert radiusmål for å åpne teksteditoren i **enkel** modus. Editoren er forhåndsutfylt med gjeldende gjengitte verdi (f.eks. `R 5.00`), slik at du kan plassere markøren og redigere den direkte.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Skrift / Høyde | Gjelder **hele** etiketten samtidig |
| Per-tegn formatering | Støttes ikke |
| `Enter` | Bekrefter verdien og lukker editoren |
| Flerlinje | Støttes ikke |

Se [Tekstredigering — enkel modus](../../interface/text-editor/#simple-mode) for den fullstendige referansen.

## DXF — DIMENSION radius-entitet

Radiusmål lagres som `DIMENSION`-entiteter med radiustype-geometri, som lagrer senterkoordinatene, buepunktposisjonen og den målte radiusverdien. Alle egenskaper overlever en rundtur uten tap.
