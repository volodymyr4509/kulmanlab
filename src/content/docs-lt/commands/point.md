---
title: "Komanda Point — taškų dėjimas į brėžinį KulmanLab CAD"
description: "Komanda Point deda tašką kiekvienu spustelėjimu, įvestu X,Y ar atstumu užrakinta kryptimi, kol paspausite Enter, Space ar Escape. Taškai braižomi kaip taškelis, turi dabartinį sluoksnį ir spalvą ir keliauja kaip DXF POINT objektai."
keywords: ["CAD taško komanda", "taško įdėjimas CAD", "DXF POINT objektas", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

Komanda `Taškas` deda tašką kiekvieno pasirinkimo metu ir lieka aktyvi, kol paspausite Enter, Space ar Escape. Taškas yra padėtis be dydžio: jis braižomas kaip mažas taškelis ir turi dabartinį sluoksnį bei spalvą. Jis saugomas kaip `POINT` objektas.

## Taškų dėjimas

1. Terminale įveskite `Taškas` arba spustelėkite **Point** — paskutinį skydelio Shapes mygtuką.
2. **Spustelėkite**, kur turi būti taškas, arba įveskite `X,Y` ir paspauskite **Enter** tiksliai padėčiai. Kiekvienas pasirinkimas deda tašką, o terminalas įrašo jo koordinates; komanda lieka aktyvi kitam taškui.
3. Arba užrakinkite kryptį nuo [vektorinio smeigtuko](../../interface/vector-pins/) ir įveskite atstumą — taškas nusileidžia lygiai tokiu atstumu išilgai jos.
4. Norėdami baigti, paspauskite **Enter**, **Space** arba **Escape**. Enter ir Space baigia tik tada, kai nieko neįvedama.

## Kaip atrodo taškas

Taškas braižomas kaip 1 px spindulio taškelis visais mastelio lygiais, todėl lieka matomas tolinant ir nedidėja artinant. Brėžinio taškų stilius (`$PDMODE` ir `$PDSIZE`) dar neskaitomas, todėl kiekvienas taškas yra taškelis, ką besakytų DXF.

## Taškų redagavimas

Pasirinktas taškas turi vieną rankenėlę, kuri jį perkelia. Langelio pasirinkimas paima tašką, kai jis yra langelio viduje, bet kuria tempimo kryptimi.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) ir [Scale](../scale/) veikia taškus kaip ir bet kurį kitą objektą. Savybių lange rodoma Position X ir Position Y, spalva ir sluoksnis.

## DXF — POINT objektas

Taškai skaitomi iš DXF ir rašomi į jį kaip `POINT` objektai su padėtimi, spalva ir sluoksniu (grupių kodai 10/20, 62 ir 8) ir keliauja per išsaugotą JSON. Anksčiau importuojant jie būdavo praleidžiami. [Export Manager](../export-manager/) Points rodo atskira eilute, todėl galite juos išskirti iš eksporto.

---

*Susiję: [Line](../line/) — tas pats koordinačių įvedimas, ir [Vector Pins](../../interface/vector-pins/) — taško dėjimas nustatytu atstumu išilgai krypties.*
