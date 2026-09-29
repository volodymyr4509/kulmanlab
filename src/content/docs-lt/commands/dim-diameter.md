---
title: "Dimension Diameter — pilnų apskritimų ir lankų skersmens žymėjimas"
description: "Dimension Diameter komanda deda skersmens matmenį (su skersmens simbolio priešdėliu) per lanką ar apskritimą per centrą. Judinkite žymeklį, kad matmens liniją pasuktumėte bet kokiu kampu. Pilnas DXF keitimasis kaip skersmens DIMENSION objektai."
keywords: [CAD skersmens matmuo, dimdiameter, apskritimo skersmens žymėjimas, lanko skersmens matmuo, skersmens simbolis CAD, kulmanlab]
group: markup
order: 8
---

# Dimension Diameter

Komanda `dimdiameter` deda skersmens matmenį ant lanko ar apskritimo. Matmens linija apima visą skersmenį — eina per centrą tarp dviejų priešingų lanko taškų — ir žymima `⌀ <reikšmė>`. Jei norite pažymėti tik spindulį nuo centro iki vieno krašto, naudokite [Dimension Radius](../dim-radius/).

## Skersmens matmens anatomija

```
  ●──────────── ⌀ 10.00 ────────────●
  (tolimasis lanko taškas)   (artimasis lanko taškas / teksto pusė)
```

- **Matmens linija** — apima visą skersmenį, su rodyklėmis abiejose sankirtose su lanku.
- **Artimasis lanko taškas** — taškas ant perimetro žymeklio pusėje (kur sėdi teksto užrašas).
- **Tolimasis lanko taškas** — diametraliai priešingas taškas.
- **Užrašas** — `⌀`, po kurio eina skersmens reikšmė.

## Skersmens matmens padėjimas

1. Terminale įveskite `dimdiameter` arba spustelėkite įrankių juostos mygtuką **Dimension Diameter**.
2. **Spustelėkite lanką ar apskritimą**, kad jį pasirinktumėte.
3. **Perkelkite žymeklį**, kad matmens liniją pasuktumėte norimu kampu.
4. **Spustelėkite**, kad padėtumėte matmenį.

Galima pasirinkti tik **Arc** ir **Circle** objektus.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Escape` | Atšaukia |

## Dimension Diameter ir Dimension Radius

| | Dimension Diameter | Dimension Radius |
|---|-------------------|-----------------|
| Matuoja | Visą skersmenį (2 × spindulys) | Spindulį (nuo centro iki krašto) |
| Matmens linija | Kraštas → kraštas per centrą | Centras → kraštas |
| Užrašo priešdėlis | `⌀` | `R` |
| Rodyklės | Dvi (abiejuose lanko taškuose) | Viena (lanko taške) |
| Geriausiai tinka | Pilnų apvalių skylių ar velenų matmenims | Vienos lenkto elemento pusės žymėjimui |

## Užrašo redagavimas — paprastasis režimas

**Dukart spustelėkite** padėtą skersmens matmenį, kad atvertumėte teksto redaktorių **paprastuoju** režimu. Redaktorius iš anksto užpildomas dabartine atvaizduota reikšme (pvz., `⌀ 10.00`), todėl galite padėti žymeklį ir ją tiesiogiai redaguoti.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Font / Height | Taikoma **visam** užrašui iš karto |
| Formatavimas pagal simbolius | Nepalaikoma |
| `Enter` | Patvirtina reikšmę ir uždaro redaktorių |
| Daugiaeilis tekstas | Nepalaikoma |

Pilną nuorodą žr. [Teksto redaktorius — paprastasis režimas](../../interface/text-editor/#paprastasis-režimas).

## DXF — skersmens DIMENSION objektas

Skersmens matmenys saugomi kaip `DIMENSION` objektai su skersmens tipo geometrija, išsaugant abi lanko taškų padėtis ir išmatuotą skersmens reikšmę (2 × spindulys). Visos savybės keliauja be praradimų.
