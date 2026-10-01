---
title: Dimension Radius komanda — lankų ir apskritimų spindulio žymėjimas
description: Dimension Radius komanda deda spindulio matmenį su priešdėliu R ant lanko ar apskritimo. Spustelėkite objektą, tada judinkite žymeklį, kad pasuktumėte matmens liniją nuo centro iki perimetro. Pilnas DXF keitimasis kaip spindulio DIMENSION objektai.
keywords: [CAD spindulio matmuo, dimradius, apskritimo spindulio žymėjimas, lanko spindulio matmuo, matmuo su priešdėliu R, kulmanlab]
group: markup
order: 7
---

# Dimension Radius

Komanda `dimradius` deda spindulio matmenį ant lanko ar apskritimo. Matmens linija eina nuo centro iki perimetro taško žymeklio kryptimi ir žymima `R <reikšmė>`. Jei vietoj to norite pažymėti visą skersmenį, naudokite [Dimension Diameter](../dim-diameter/).

## Spindulio matmens anatomija

```
  ● (centras)
   \
    \  R 5.00
     \
      ●────── tekstas (žymeklio pusė)
   (lanko taškas)
```

- **Matmens linija** — nuo centro per lanko tašką žymeklio kryptimi, su rodykle ant lanko.
- **Užrašas** — `R`, po kurio eina spindulio reikšmė.

## Spindulio matmens padėjimas

1. Terminale įveskite `dimradius` arba spustelėkite įrankių juostos mygtuką **Dimension Radius**.
2. **Spustelėkite lanką ar apskritimą**, kad jį pasirinktumėte.
3. **Perkelkite žymeklį**, kad pasuktumėte matmens liniją — lanko taškas seka žymeklio kryptį nuo centro.
4. **Spustelėkite**, kad padėtumėte matmenį.

Galima pasirinkti tik **Arc** ir **Circle** objektus. Spustelėjimas ant kito tipo objekto nieko nedaro.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Escape` | Atšaukia |

## Dimension Radius ir Dimension Diameter

| | Dimension Radius | Dimension Diameter |
|---|-----------------|-------------------|
| Matuoja | Spindulį (nuo centro iki krašto) | Skersmenį (nuo krašto iki krašto per centrą) |
| Matmens linija | Centras → lanko taškas | Lanko taškas → lanko taškas (per centrą) |
| Užrašo priešdėlis | `R` | `⌀` |
| Rodyklės | Viena (lanko taške) | Dvi (abiejuose lanko taškuose) |
| Geriausiai tinka | Vienos lenkto elemento pusės žymėjimui | Pilnų apvalių matmenų žymėjimui |

## Užrašo redagavimas — paprastasis režimas

**Dukart spustelėkite** padėtą spindulio matmenį, kad atvertumėte teksto redaktorių **paprastuoju** režimu. Redaktorius iš anksto užpildomas dabartine atvaizduota reikšme (pvz., `R 5.00`), todėl galite padėti žymeklį ir ją tiesiogiai redaguoti.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Font / Height | Taikoma **visam** užrašui iš karto |
| Formatavimas pagal simbolius | Nepalaikoma |
| `Enter` | Patvirtina reikšmę ir uždaro redaktorių |
| Daugiaeilis tekstas | Nepalaikoma |

Pilną nuorodą žr. [Teksto redaktorius — paprastasis režimas](../../interface/text-editor/#paprastasis-režimas).

## DXF — spindulio DIMENSION objektas

Spindulio matmenys saugomi kaip `DIMENSION` objektai su spindulio tipo geometrija, išsaugant centro koordinates, lanko taško padėtį ir išmatuotą spindulio reikšmę. Visos savybės keliauja be praradimų.


## Matmenų stilius

Nauji matmenys nukopijuoja dabartinį [matmenų stilių](../dimension-style/), įskaitant rodykles, iškeltines linijas, tekstą, tikslumą, lygiavimą, tarpą ir rėmelį. Reikšmės kopijuojamos kuriant; vėlesni stiliaus pakeitimai esamų matmenų nekeičia.
