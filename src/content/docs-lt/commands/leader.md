---
title: Leader — daugiašakių išnašų anotacijų braižymas su rodykle ir tekstu
description: "Leader komanda nubrėžia daugiašakės išnašos anotaciją su rodykle, lūžiu ir formatuoto teksto užrašu. Naujos išnašos naudoja dabartinį LeaderStyle ir keliauja per DXF."
keywords: [CAD leader komanda, daugiašakės išnašos anotacija, išnaša CAD, rodyklės užrašo anotacija, išnašos lūžis, teksto kryptis CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Komanda `leader` nubrėžia daugiašakės išnašos anotaciją keturiais žingsniais: rodyklė, liečianti elementą, išnašos linija, lūžtanti lūžyje, teksto inkaras ir įvestas užrašas. Iš visų anotacijų komandų Leader yra vienintelė, apimanti interaktyvią teksto įvedimo fazę su mirksinčio žymeklio peržiūra.

## Daugiašakės išnašos anatomija

```
  ◄── rodyklės smaigalys  (2 žingsnis — liečia elementą)
      \
       \  išnašos linija
        \
         ●──── lūžis (3 žingsnis) ──── teksto inkaras (4 žingsnis)
                                       Užrašo tekstas  (5 žingsnis)
```

- **Rodyklės smaigalys** — smailus galas, padedamas ant anotuojamo elemento.
- **Lūžis (dogleg)** — alkūnė, kur išnašos linija lūžta link teksto.
- **Teksto inkaras** — kur išdėstomas užrašas. Tekstas automatiškai lygiuojamas kairėn ar dešinėn.

## Išnašos braižymas

1. Terminale įveskite `leader` arba spustelėkite įrankių juostos mygtuką **Leader**.
2. **Spustelėkite rodyklės smaigalį** arba įveskite `X,Y` ir paspauskite **Enter**, kad gautumėte tikslią koordinatę.
3. **Spustelėkite lūžį** — išnašos alkūnę. Kampas užsirakina ties 45° žingsniais; įveskite ilgį ir paspauskite **Enter**, kad išdėstytumėte tiksliai. Arba įveskite `X,Y`, kad įvestumėte absoliučią koordinatę.
4. **Spustelėkite teksto padėtį** — kur ankeruojamas užrašas. Galioja tos pačios parinktys: spustelėjimas, kampo užraktas + ilgis arba `X,Y`.
5. **Įveskite užrašo tekstą** — peržiūra drobėje atsinaujina gyvai su mirksinčiu žymekliu. Paspauskite **Enter**, kad padėtumėte.

## Koordinačių įvedimas (visose taškų fazėse)

Bet kuriame taško pasirinkimo žingsnyje (smaigalys, lūžis, teksto padėtis) vietoj spustelėjimo galite įvesti tikslią koordinatę:

1. Įveskite X reikšmę (skaitmenys, `.` arba `-`).
2. Paspauskite `,` — terminalas parodo `[X], [Y{žymeklis}]`, patvirtindamas užrakintą X.
3. Įveskite Y reikšmę.
4. Paspauskite **Enter**, kad padėtumėte tašką.

## Kampo užrakinimas (3 ir 4 žingsniai)

Po kiekvieno padėto taško komanda prisitraukia prie 45° ašių, kai žymeklis pakankamai toli. Kai užrakinta:
- Peržiūra prisitraukia prie ašies.
- Įveskite ilgį ir paspauskite **Enter**, kad kitas taškas būtų padėtas tiksliai tokiu atstumu.

Kampo užrakinimas ir koordinačių įvedimas vienas kitą paneigia — kai įvedate skaitmenį be ankstesnio `,`, komanda jį aiškina kaip atstumą (kampo užraktas turi būti aktyvus). Norėdami vietoj to įvesti absoliučią koordinatę, pradėkite skaičiumi X, po kurio eina kablelis.

## Užrašo teksto redagavimas

Renkant užrašą 5 žingsnyje, prieš padedant galite tekstą naršyti ir redaguoti:

| Klavišas | Veiksmas |
|----------|----------|
| Bet kuris spausdinamas simbolis | Įterpia žymeklio vietoje |
| `←` / `→` | Perkelia žymeklį kairėn ar dešinėn |
| `Backspace` | Ištrina simbolį kairėje nuo žymeklio |
| `Delete` | Ištrina simbolį dešinėje nuo žymeklio |
| `Enter` | Padeda išnašą |

## Automatinė teksto kryptis

Teksto lygiavimas prisitaiko pagal žymeklio padėtį lūžio atžvilgiu:

| Žymeklio padėtis | Teksto kryptis |
|------------------|----------------|
| **Dešinėje** nuo lūžio | Iš kairės į dešinę nuo teksto inkaro |
| **Kairėje** nuo lūžio | Iš dešinės į kairę (ankeruota dešinėje pusėje) |

Rankinio koregavimo nereikia — perkelkite žymeklį į pusę, kurioje norite užrašo, ir jis išsilygiuoja teisingai.

## Klavišų nuoroda

**Taškų fazės (smaigalys, lūžis, teksto padėtis)**

| Klavišas | Veiksmas |
|----------|----------|
| `0`–`9`, `.`, `-` | Pradeda X koordinatės rinkimą (tada `,` užrakinti X ir įvesti Y) |
| `,` | Patvirtina X ir pereina prie Y įvedimo |
| `0`–`9`, `.`, `-` | Kaupia atstumą, kai kampas užrakintas |
| `Backspace` | Ištrina paskutinį įvestą simbolį |
| `Enter` | Patvirtina įvestą koordinatę ar atstumą |

**Teksto įvedimo fazė**

| Klavišas | Veiksmas |
|----------|----------|
| Spausdinamas simbolis | Įterpia žymeklio vietoje |
| `←` / `→` | Perkelia žymeklį |
| `Backspace` | Ištrina kairėje |
| `Delete` | Ištrina dešinėje |
| `Enter` | Padeda išnašą |

| Klavišas | Veiksmas |
|----------|----------|
| `Escape` | Atšaukia ir grįžta į 2 žingsnį |

## Esamos išnašos redagavimas

**Dukart spustelėkite** padėtą daugiašakę išnašą, kad vėl atvertumėte teksto redaktorių **išplėstiniu** režimu. Išplėstiniu režimu galite taikyti pusjuodį, kursyvą, pabraukimą ir perbraukimą kartu su atskirų simbolių šrifto ar aukščio pakeitimais bei įterpti eilučių lūžius klavišu `Enter`. Paspauskite **Escape**, kad patvirtintumėte ir uždarytumėte.

Pilną nuorodą žr. [Teksto redaktorius — išplėstinis režimas](../../interface/text-editor/#išplėstinis-režimas).

## Šakų pridėjimas ir šalinimas

- Papildomai rodyklės šakai pridėti prie esamos išnašos: [LeaderAdd](../leader-add/)
- Šakai pašalinti iš išnašos, turinčios dvi ar daugiau: [LeaderRemove](../leader-remove/)
- Rodyklės, lentynėlės, prijungimo ir teksto numatytosioms reikšmėms naujoms išnašoms pasirinkti: [LeaderStyle](../leader-style/)

## DXF suderinamumas

KulmanLab skaito ir rašo `MLEADER` objektus ir jų įvardytus `MLEADERSTYLE` įrašus. Rodyklės, šakos, lentynėlės geometrija, teksto turinys ir formatavimas, prijungimas, pasukimas, rėmelis ir susietas stilius išsaugomi ten, kur DXF tai palaiko.
