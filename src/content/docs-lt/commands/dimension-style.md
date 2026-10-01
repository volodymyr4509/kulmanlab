---
title: "Komanda MatmenųStilius — įvardytų matmenų stilių kūrimas ir valdymas"
description: "Kurkite CAD matmenų stilius rodyklėms, iškeltinėms linijoms, centro žymoms, tekstui, tikslumui, lygiavimui ir DXF DIMSTYLE."
keywords: [DimensionStyle, DIMSTYLE, CAD, DXF, KulmanLab]
group: style
order: 8
---

# MatmenųStilius

Komanda atveria dialogą įvardytiems matmenų stiliams kurti, redaguoti, peržiūrėti ir pasirinkti. Nauji tiesiniai, lygiagretūs, spindulio, skersmens ir kampiniai matmenys sukūrimo metu nukopijuoja dabartinį stilių; esami matmenys su juo gyvai nesusiejami.

## Dialogo atvėrimas

Terminale įveskite lokalizuotą komandą arba Annotate skydelyje spustelėkite **Matmenų stilius**. Kairėje rodomi matomi stiliai; varnelė žymi dabartinį, o pieštukas leidžia pervadinti.

## Linijos ir rodyklės

**Rodyklė 1 / Rodyklė 2 · Rodyklės dydis · Iškeliamosios linijos atitraukimas · Iškeliamosios linijos iškyša · Centro žymė · Centro žymės dydis**

Atskirai nustatykite abi rodykles, rodyklės dydį, iškeltinių linijų poslinkį ir pratęsimą bei centro žymos tipą ir dydį (`Nėra`, `Žyma` arba `Linijos`).

## Tekstas

**Teksto stilius · Šriftas · Teksto aukštis · Tekstas rėmelyje · Teksto tarpas · Teksto prijungimas · Tekstas lygiagretus matmeniui · Tikslumas · Kampų tikslumas**

Teksto dalis valdo greitą užpildymą iš teksto stiliaus, šriftą, aukštį, pusjuodį, kursyvą, rėmelį, tarpą, vieną iš devynių prijungimo vietų, lygiavimą pagal matmens liniją ir tiesinį bei kampinį tikslumą. Teksto stilius reikšmes nukopijuoja vieną kartą, tai nėra gyva nuoroda.

Peržiūra naudoja tuos pačius atvaizdavimo įrankius kaip drobė. Perjunkite tiesinį, spindulio, skersmens ir kampinį pavyzdžius, kad patikrintumėte rodykles, centro žymas, teksto vietą, tikslumą ir rėmelius.

## Stilių kūrimas ir valdymas

**New** dubliuoja pasirinktą stilių. `Standard` negalima pervadinti ar ištrinti, taip pat negalima ištrinti dabartinio stiliaus. Pavadinimai turi būti unikalūs, netušti ir tinkami DXF. Importuoti anotatyvūs stiliai paslepiami, bet išsaugomi.

## Dabartinio stiliaus nustatymas

**Set Current** padaro pasirinktą stilių naujų matmenų šablonu; Annotate skydelio sąrašas siūlo tą patį pasirinkimą. Reikšmės nukopijuojamos kuriant. Dimension Continue paveldi visą pagrindinio matmens išvaizdą.

## Išsaugojimas arba atmetimas

**OK** kartu pritaiko pervadinimus, papildymus, ištrynimus, savybes ir dabartinį stilių. **Close**, fono spustelėjimas arba `Escape` atmeta pakeitimus.

## DXF suderinamumas

KulmanLab importuoja ir eksportuoja įvardytus `DIMSTYLE` įrašus, įskaitant atskiras rodykles, iškeltines linijas, tekstą, tikslumą, centro žymas, rėmelį, teksto stiliaus nuorodą ir anotatyvumo vėliavėlę. Importuojant pirmenybę turi konkretaus objekto `DSTYLE` perrašymai.

Eksportuojant nurodytas `STYLE` naudoja kintamą aukštį (`40 = 0`) ir paskutinį aukštį išsaugo grupėje `42`. Todėl fiksuotas teksto stiliaus aukštis neperrašo matmenų stiliaus teksto aukščio.

## Susijusios komandos

- [Dimension Linear](../dim-linear/)
- [Dimension Aligned](../dim-aligned/)
- [Dimension Continue](../dim-continue/)
- [Dimension Radius](../dim-radius/)
- [Dimension Diameter](../dim-diameter/)
- [Dimension Angular](../dim-angular/)
- [TextStyle](../text-style/)
