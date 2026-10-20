---
title: "Komanda PointDivide — taškai vienodais ilgiais išilgai objekto"
description: "Komanda PointDivide padalija liniją, poliliniją, lanką, apskritimą, elipsę ar splainą į vienodo ilgio atkarpas ir kiekvienoje dalybos vietoje padeda tašką; rašant atkarpų skaičių jie rodomi peržiūroje."
keywords: ["CAD dalijimo komanda", "linijos dalijimas į lygias dalis CAD", "taškai išilgai objekto CAD", "pointdivide", "kulmanlab"]
group: edit
order: 17
---

# Point Divide

Komanda `DalytiTaškais` padeda [taškus](../point/), kurie padalija objektą į vienodo ilgio atkarpas. Pats objektas nesikeičia: taškai yra nauji objektai dabartiniame sluoksnyje ir spalva, patogūs pritraukimui.

## Objekto dalijimas

1. Terminale įveskite `DalytiTaškais` arba skydelio Edit masyvų išskleidžiamajame meniu pasirinkite **Point Divide**.
2. **Spustelėkite objektą** — liniją, poliliniją, lanką, apskritimą, elipsę ar splainą. Kita atmetama, ir galite rinktis iš naujo.
3. **Įveskite atkarpų skaičių** — sveikąjį skaičių nuo 2 iki 32767. Rašant taškai rodomi objekte peržiūroje.
4. Paspauskite **Enter** arba **Space**, kad juos padėtumėte. Komanda baigiasi.

## Kur atsiduria taškai

- Tarpas matuojamas ilgiu išilgai objekto, ne kampu, todėl elipsė ar splainas padalijami į vienodo ilgio gabalus. Polilinijos lankų atkarpos sekamos išilgai jų kreivės.
- Atvirame objekte — linijoje, atviroje polilinijoje, lanke, dalinėje elipsėje ar atvirame splaine — taškai dedami tarp atkarpų, niekada ne galuose: 5 atkarpos duoda 4 taškus.
- Uždarame objekte — apskritime, uždaroje polilinijoje, pilnoje elipsėje ar uždarame splaine — taškai eina visu ratu nuo jo pradžios, kurioje irgi atsiranda taškas: apskritimas prasideda ties 0 kampu, uždara polilinija — ties pirmąja viršūne. 5 atkarpos duoda 5 taškus.
- Skaičius už 2–32767 ribų atmetamas: terminalas pasako kodėl ir jį išvalo, kad galėtumėte rašyti iš naujo.

Backspace ištrina paskutinį skaitmenį. Escape pradeda iš naujo, kad galėtumėte pasirinkti kitą objektą. Enter ar Space prieš pasirenkant objektą baigia komandą.

---

*Susiję: [Point Interval](../point-interval/) — taškai fiksuotu atstumu, [Point](../point/) — pavieniai taškai, ir [ArrayPolar](../array-polar/) — objektų, o ne taškų kartojimas.*
