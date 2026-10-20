---
title: "Komanda PointInterval — taškai fiksuotu atstumu išilgai objekto"
description: "Komanda PointInterval padeda taškus įvestu atstumu išilgai linijos, polilinijos, lanko, apskritimo, elipsės ar splaino, pradedant nuo galo, prie kurio spustelite; rašant ilgį jie rodomi peržiūroje."
keywords: ["taškai intervalu CAD", "taškai fiksuotu atstumu linijoje CAD", "CAD matavimas išilgai objekto", "pointinterval", "kulmanlab"]
group: edit
order: 18
---

# Point Interval

Komanda `TaškaiIntervalais` padeda [taškus](../point/) fiksuotu atstumu išilgai objekto, kaip žymimi piketai trasoje. Pats objektas nesikeičia: taškai yra nauji objektai dabartiniame sluoksnyje ir spalva, patogūs pritraukimui.

## Taškai intervalu

1. Terminale įveskite `TaškaiIntervalais` arba skydelio Edit masyvų išskleidžiamajame meniu pasirinkite **Point Interval**.
2. **Spustelėkite objektą prie galo, nuo kurio pradėti** — liniją, poliliniją, lanką, apskritimą, elipsę ar splainą. Kita atmetama, ir galite rinktis iš naujo.
3. **Įveskite intervalo ilgį.** Rašant taškai rodomi objekte peržiūroje.
4. Paspauskite **Enter** arba **Space**, kad juos padėtumėte. Komanda baigiasi.

## Kur atsiduria taškai

- Pirmasis taškas dedamas vienu intervalu nuo pradžios, kiti — kas vieną intervalą, matuojant išilgai objekto, įskaitant kreives. Pačioje pradžioje taško nėra.
- Atvirame objekte — linijoje, atviroje polilinijoje, lanke, dalinėje elipsėje ar atvirame splaine — matuojama nuo galo, prie kurio spustelėjote. Likutis tolimajame gale lieka nepažymėtas: tolimasis galas gauna tašką tik tada, kai intervalas tilpsta tiksliai.
- Uždarame objekte — apskritime, uždaroje polilinijoje, pilnoje elipsėje ar uždarame splaine — matuojama nuo paties objekto pradžios, kad ir kur spustelėtumėte: apskritimas nuo 0 kampo prieš laikrodžio rodyklę, uždara polilinija nuo pirmosios viršūnės. Taškai baigiasi prieš pradžią.
- Ilgis 0 ar mažesnis, ilgesnis už objektą arba duodantis daugiau nei 32767 taškų atmetamas: terminalas pasako kodėl ir jį išvalo, kad galėtumėte rašyti iš naujo.

Backspace ištrina paskutinį simbolį. Escape pradeda iš naujo, kad galėtumėte pasirinkti kitą objektą. Enter ar Space prieš pasirenkant objektą baigia komandą.

---

*Susiję: [Point Divide](../point-divide/) — objekto dalijimas į nurodytą skaičių vienodų ilgių, ir [Point](../point/) — pavieniai taškai.*
