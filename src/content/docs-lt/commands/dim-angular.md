---
title: Dimension Angular — kampų tarp linijų, lankų ir apskritimų matavimas
description: DimensionAngular komanda deda kampinio matmens anotaciją ant linijų, lankų ar apskritimų. Palaiko dviejų linijų kampo, lanko apimties ir apskritimo išpjovos režimus.
keywords: [kampinis matmuo CAD, kampo matmuo, kampo tarp linijų matavimas, DimensionAngular, lanko matmuo, kampo anotacija, CAD kampo žymėjimas, kulmanlab kampinis matmuo]
group: markup
order: 9
---

# Dimension Angular

Komanda `DimensionAngular` padeda brėžinyje **kampinio matmens** lanko anotaciją. Ji išmatuoja ir pažymi kampą tarp dviejų linijų, lanko apimtį arba apskritimo išpjovą.

## Kaip aktyvuoti

Spustelėkite įrankių juostos mygtuką **Dimension Angular** Annotate skydelyje arba terminale įveskite `DimensionAngular`.

## Trys įvesties režimai

Pirmasis spustelėjimas nustato, kuris režimas naudojamas:

### Dvi linijos

1. **Spustelėkite pirmąją liniją.** Žymeklio padėtis nustato, kuri linijos pusė naudojama.
2. **Spustelėkite antrąją liniją.** Dvi linijos turi kirstis (sankirta apskaičiuojama automatiškai; jos nebūtina matyti ekrane).
3. **Spustelėkite**, kad padėtumėte matmens lanką. Perkelkite žymeklį, kad pasirinktumėte spindulį ir kuris kampinis sektorius pažymimas — anotacija seka žymeklį į bet kurią viršūnės pusę.

Lygiagrečios linijos negali sudaryti kampinio matmens; jei linijos nesikerta, komanda antrą spustelėjimą ignoruoja.

### Lankas

1. **Spustelėkite lanką.** Matmuo sukuriamas iškart nuo lanko pradžios kampo iki galo kampo, naudojant lanko centrą kaip viršūnę.
2. **Spustelėkite**, kad padėtumėte matmens lanką norimu spinduliu.

### Apskritimas

1. **Spustelėkite apskritimą.** Pirmasis kampo galas prisitraukia prie artimiausio apskritimo taško.
2. **Spustelėkite antrą tašką** ant apskritimo, kad apibrėžtumėte antrą kampo galą.
3. **Spustelėkite**, kad padėtumėte matmens lanką.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Escape` | Atšaukia ir grįžta prie pirmo pasirinkimo |

## Elgsenos detalės

- Matmens lankas visada braižomas toje viršūnės pusėje, kurioje jį padedate — perkelkite žymeklį per viršūnę, kad persijungtumėte į papildomą kampą.
- Išmatuotas kampas rodomas laipsniais ir atsinaujina gyvai judinant žymeklį padedant.
- Gauta anotacija yra pilnas `DimensionAngular` objektas, saugomas dabartiniame sluoksnyje. Jo išvaizdos savybes (rodyklės dydis, teksto aukštis, pratęsimo linijos ilgis) galima koreguoti Properties skydelyje.
- Kampiniai matmenys eksportuojami tiek į JSON, tiek į DXF, DXF rašomi kaip standartiniai `DIMENSION` objektai.

## Užrašo redagavimas — paprastasis režimas

**Dukart spustelėkite** padėtą kampinį matmenį, kad atvertumėte teksto redaktorių **paprastuoju** režimu. Redaktorius iš anksto užpildomas dabartine atvaizduota reikšme, todėl galite padėti žymeklį ir ją tiesiogiai redaguoti.

| Funkcija | Elgsena |
|----------|---------|
| Bold / Italic / Font / Height | Taikoma **visam** užrašui iš karto |
| Formatavimas pagal simbolius | Nepalaikoma |
| `Enter` | Patvirtina reikšmę ir uždaro redaktorių |
| Daugiaeilis tekstas | Nepalaikoma |

Pilną nuorodą žr. [Teksto redaktorius — paprastasis režimas](../../interface/text-editor/#paprastasis-režimas).

## Susijusios komandos

- [Dimension Linear](../dim-linear/) — horizontalus ar vertikalus matmuo
- [Dimension Aligned](../dim-aligned/) — matmuo, sulygiuotas pagal du taškus
- [Dimension Radius](../dim-radius/) — spindulio matmuo lankams ir apskritimams
- [Dimension Diameter](../dim-diameter/) — skersmens matmuo apskritimams
