---
title: "ArrayPolar komanda — objektų kopijavimas aplink centrą KulmanLab CAD"
description: "ArrayPolar komanda nukopijuoja pasirinktus objektus aplink centro tašką — nustatytą skaičių elementų, paskirstytų per visą apsisukimą ar jo dalį, su kopijomis, kurios sukasi apeidamos arba išlaiko savo orientaciją."
keywords: ["CAD polinis masyvas", "apskritas raštas CAD", "objektų kopijavimas aplink tašką CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

Komanda `ArrayPolar` sukuria pasirinktų objektų kopijas aplink centro tašką, tolygiai paskirstytas per visą apsisukimą ar jo dalį. Originalas yra pirmasis elementas; kiekvienas kitas yra kopija, pasukta apie centrą — arba tik perkelta aplink jį, jei išjungsite Rotate.

## Polinio masyvo kūrimas

1. Pasirinkite objektus, tada terminale įveskite `arraypolar` arba spustelėkite įrankių juostos mygtuką **Array Polar**. Paleista be pasirinkimo, komanda pirmiausia paprašo juos pasirinkti — patvirtinkite **Enter** arba **Space**.
2. **Spustelėkite centrą**, aplink kurį eis kopijos, arba įveskite `X,Y` ir paspauskite **Enter** tiksliai koordinatei.
3. Peržiūrėkite masyvą. Visos kopijos rodomos gyvai, o terminalas rodo `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — paspauskite parinkties raidę, kad ją pakeistumėte.
4. Paspauskite **Enter** arba **Space**, kad sukurtumėte kopijas. Originalai lieka savo vietose, o pasirinkimas išvalomas.

## Parinktys

| Parinktis | Klavišas | Poveikis |
|---|---|---|
| Items | `I` | Kiek yra elementų, įskaitant originalą — sveikasis skaičius nuo 2 iki 1024. Pradeda nuo 6. |
| Angle | `A` | Laipsniai nuo vieno elemento iki kito prieš laikrodžio rodyklę; neigiamas kampas eina pagal laikrodžio rodyklę. Iki 180°. |
| Fill | `F` | Laipsniai nuo pirmojo elemento iki paskutinio. 360 (numatytasis) yra visas apsisukimas; mažesnis skaičius paskirsto elementus per jo dalį. Neigiamas eina pagal laikrodžio rodyklę. Iki 360°. |
| Rotate | `R` | Įjungta (numatytoji): kiekviena kopija sukasi apeidama. Išjungta: kiekviena kopija perkeliama į savo vietą ir žiūri ta pačia kryptimi kaip originalas. Persijungia iškart — nėra skaičiaus, kurį reikėtų įvesti. |

- Angle ir Fill yra du to paties pasakymo būdai, todėl pakeitus vieną, kitas perrašomas. Per visą apsisukimą paskutinis elementas sustoja vienu žingsniu prieš pirmąjį; per apsisukimo dalį jis patenka tiksliai į užpildymo kampą.
- Norėdami pakeisti skaičių, paspauskite jo parinkties raidę. Raginimas iš anksto užpildytas dabartine reikšme — įveskite, kad ją pakeistumėte, ir paspauskite **Enter** arba **Space**; patvirtinus nepakeistą, masyvas lieka toks, koks buvo.
- Items priima tik sveikuosius skaičius; Angle ir Fill priima dešimtainius ir pradžioje `-` pagal laikrodžio rodyklę. 0 kampas ar užpildymas atmetamas, taip pat kampas virš 180° ar užpildymas virš 360° — terminalas pasako kodėl.
- Per mažas Angle, kuriame netelpa visi elementai, išmeta tuos, kuriems nėra vietos, o terminalas praneša naują skaičių.
- Veikia su visais objektų tipais: kiekviena kopija yra originalas, pasuktas apie centrą ar perkeltas, lygiai taip, kaip tai darytų [Rotate](../rotate/) ir [Move](../move/).

## Klavišų nuoroda

| Klavišas | Veiksmas |
|---|---|
| `Enter` / `Space` | Patvirtinti pasirinkimą, masyvą ar įvestą skaičių |
| `I` `A` `F` `R` | Pakeisti Items, Angle ar Fill įvedant skaičių; perjungti Rotate |
| `0`–`9`, `.`, `-` | Įvesti skaičių (`.` ir `-` tik Angle ir Fill, `-` pirmas) |
| `Backspace` | Ištrinti paskutinį įvestą simbolį |
| `Escape` | Atšaukti |
