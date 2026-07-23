---
title: "Dimension Diameter — Angiv Fulde Cirkel- og Buediametre"
description: "Dimension Diameter-kommandoen placerer et diametermål (med diametersymbolet som præfiks) over en bue eller cirkel gennem centrum. Flyt markøren for at rotere mållinjen til en hvilken som helst vinkel. Fuld DXF-rundtur som DIMENSION diameter-entiteter."
keywords: [CAD diametermål, dimdiameter, angiv cirkeldiameter, buediametermål, diametersymbol CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Kommandoen `dimdiameter` placerer et diametermål på en bue eller cirkel. Mållinjen spænder over hele diameteren — går gennem centrum mellem to diametralt modsatte buepunkter — og mærkes `⌀ <værdi>`. For kun at angive radius fra centrum til én kant, brug [Dimension Radius](../dim-radius/).

## Anatomien af et diametermål

```
  ●──────────── ⌀ 10.00 ────────────●
  (fjernt buepunkt)              (nært buepunkt / tekstside)
```

- **Mållinje** — spænder over hele diameteren, med pilespidser ved begge buekrydsningspunkter.
- **Nært buepunkt** — omkredspunktet på markørsiden (hvor tekstetiketten sidder).
- **Fjernt buepunkt** — det diametralt modsatte punkt.
- **Etiket** — `⌀` efterfulgt af diameterværdien.

## Placere et diametermål

1. Skriv `dimdiameter` i terminalen eller klik på **Dimension Diameter**-knappen i værktøjslinjen.
2. **Klik en bue eller cirkel** for at vælge den.
3. **Flyt markøren** for at rotere mållinjen til den ønskede vinkel.
4. **Klik** for at placere målet.

Kun **Arc**- og **Circle**-entiteter kan markeres.

## Tastaturreference

| Tast | Handling |
|-----|--------|
| `Escape` | Annullér |

## Dimension Diameter vs Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Måler | Fuld diameter (2 × radius) | Radius (centrum til kant) |
| Mållinje | Kant → kant gennem centrum | Centrum → kant |
| Etiketpræfiks | `⌀` | `R` |
| Pilespidser | To (ved begge buepunkter) | Én (ved buepunktet) |
| Bedst til | Fulde cirkulære hul- eller akselmål | Angivelse af én side af et buet element |

## Redigere etiketten — simpel tilstand

**Dobbeltklik** et placeret diametermål for at åbne teksteditoren i **simpel** tilstand. Editoren er forudfyldt med den aktuelle gengivne værdi (f.eks. `⌀ 10.00`), så du kan placere markøren og redigere den direkte.

| Funktion | Adfærd |
|---------|-----------|
| Fed / Kursiv / Skrifttype / Højde | Gælder **hele** etiketten på én gang |
| Per-tegn formatering | Understøttes ikke |
| `Enter` | Bekræfter værdien og lukker editoren |
| Flerlinje | Understøttes ikke |

Se [Tekstredigering — simpel tilstand](../../interface/text-editor/#simple-mode) for den fulde reference.

## DXF — DIMENSION diameter-entitet

Diametermål gemmes som `DIMENSION`-entiteter med diametertype-geometri, der gemmer begge buepunktpositioner og den målte diameterværdi (2 × radius). Alle egenskaber overlever en rundtur uden tab.
