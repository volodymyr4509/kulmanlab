---
title: "Dimension Diameter — Merk Fulle Sirkel- og Buediametre"
description: "Dimension Diameter-kommandoen plasserer et diametermål (med diametersymbolet som prefiks) over en bue eller sirkel gjennom senteret. Flytt markøren for å rotere mållinjen til en hvilken som helst vinkel. Full DXF-rundtur som DIMENSION diameter-entiteter."
keywords: [CAD diametermål, dimdiameter, merk sirkeldiameter, buediametermål, diametersymbol CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Kommandoen `dimdiameter` plasserer et diametermål på en bue eller sirkel. Mållinjen spenner over hele diameteren — går gjennom senteret mellom to diametralt motsatte buepunkter — og merkes `⌀ <verdi>`. For å merke kun radiusen fra senter til én kant, bruk [Dimension Radius](../dim-radius/).

## Anatomien til et diametermål

```
  ●──────────── ⌀ 10.00 ────────────●
  (fjernt buepunkt)              (nært buepunkt / tekstside)
```

- **Mållinje** — spenner over hele diameteren, med pilspisser ved begge buekryssingspunkter.
- **Nært buepunkt** — omkretspunktet på markørsiden (der teksten plasseres).
- **Fjernt buepunkt** — det diametralt motsatte punktet.
- **Etikett** — `⌀` etterfulgt av diameterverdien.

## Plassere et diametermål

1. Skriv `dimdiameter` i terminalen eller klikk på **Dimension Diameter**-knappen i verktøylinjen.
2. **Klikk en bue eller sirkel** for å velge den.
3. **Flytt markøren** for å rotere mållinjen til ønsket vinkel.
4. **Klikk** for å plassere målet.

Kun **Arc**- og **Circle**-entiteter kan markeres.

## Tastaturreferanse

| Tast | Handling |
|-----|--------|
| `Escape` | Avbryt |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Måler | Full diameter (2 × radius) | Radius (senter til kant) |
| Mållinje | Kant → kant gjennom senteret | Senter → kant |
| Etikettprefiks | `⌀` | `R` |
| Pilspisser | To (ved begge buepunkter) | Én (ved buepunktet) |
| Best til | Fulle sirkulære hull- eller akselmål | Merking av én side av et buet element |

## Redigere etiketten — enkel modus

**Dobbeltklikk** på et plassert diametermål for å åpne teksteditoren i **enkel** modus. Editoren er forhåndsutfylt med gjeldende gjengitte verdi (f.eks. `⌀ 10.00`), slik at du kan plassere markøren og redigere den direkte.

| Funksjon | Oppførsel |
|---------|-----------|
| Fet / Kursiv / Skrift / Høyde | Gjelder **hele** etiketten samtidig |
| Per-tegn formatering | Støttes ikke |
| `Enter` | Bekrefter verdien og lukker editoren |
| Flerlinje | Støttes ikke |

Se [Tekstredigering — enkel modus](../../interface/text-editor/#simple-mode) for den fullstendige referansen.

## DXF — DIMENSION diameter-entitet

Diametermål lagres som `DIMENSION`-entiteter med diametertype-geometri, som lagrer begge buepunktposisjonene og den målte diameterverdien (2 × radius). Alle egenskaper overlever en rundtur uten tap.
