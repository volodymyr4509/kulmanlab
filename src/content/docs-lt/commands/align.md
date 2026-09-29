---
title: Align — objektų perkėlimas, pasukimas ir mastelio keitimas taškų poromis
description: Align komanda perkelia pasirinktus objektus naudodama vieną ar dvi šaltinio/paskirties taškų poras, sujungdama perkėlimą, pasukimą ir pasirinktinį vienodą mastelio keitimą į vieną veiksmą. Veikia kaip sujungti Move + Rotate + Scale.
keywords: [CAD align komanda, objektų lygiavimas CAD, perkėlimas pasukimas mastelis, lygiavimas taškų poromis, kulmanlab]
group: edit
order: 6
---

# Align

Komanda `align` perkelia pasirinktus objektus naudodama vieną ar dvi šaltinio/paskirties taškų poras. Su viena pora ji elgiasi lygiai kaip [Move](../move/) (tik perkėlimas). Su dviem poromis ji taip pat pasuka pasirinkimą, kad šaltinio–šaltinio kryptis sutaptų su paskirties–paskirties kryptimi, ir pasirinktinai gali keisti mastelį, kad šaltinio atkarpos ilgis sutaptų su paskirties atkarpos ilgiu — perkėlimas, pasukimas ir mastelio keitimas vienu veiksmu.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada lygiuoti** — pirma pasirinkite objektus, tada aktyvuokite:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Terminale įveskite `align` arba spustelėkite įrankių juostos mygtuką **Align**.
3. **Spustelėkite pirmąjį šaltinio tašką (S1)**, tada **pirmąjį paskirties tašką (D1)**.
4. **Spustelėkite antrąjį šaltinio tašką (S2)** arba paspauskite **Enter** ar **Space**, kad iškart pritaikytumėte tik perkėlimo lygiavimą.
5. **Spustelėkite antrąjį paskirties tašką (D2)**.
6. Atsakykite į mastelio raginimą: paspauskite **Y**, kad keistumėte mastelį, arba **N** / **Enter**, kad išlaikytumėte pradinį dydį.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite komandą nieko nepasirinkę:

1. Įveskite `align` arba spustelėkite įrankių juostos mygtuką.
2. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte atskirus objektus, arba tempkite, kad pasirinktumėte sritimi.
3. Paspauskite **Enter** arba **Space**, kad patvirtintumėte pasirinkimą.
4. Tęskite S1 → D1 → S2 → D2 → mastelio raginimas, kaip aukščiau.

> Terminalui pakanka tiek raidžių, kad būtų nedviprasmiška — įvedus `al` ir paspaudus **Enter**, Align aktyvuojamas tiesiogiai, nes jokia kita komandos pavadinimo pradžia nesutampa su tomis dviem raidėmis.

## Lygiavimo anatomija

```
  Šaltinio taškai (ant objektų):       Paskirties taškai:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Rezultatas: pasirinkimas perkeliamas taip, kad S1 nukristų ant D1,
  tada pasukamas aplink D1, kad S1→S2 kryptis sutaptų su D1→D2
  kryptimi — o jei pasirinksite keisti mastelį, jis pakeičiamas taip,
  kad |S1S2| taptų |D1D2|.
```

Gyva šešėlinė peržiūra seka žymeklį kiekviename žingsnyje: perkėlimo peržiūra dedant D1, tada pasukta (brūkšninė) peržiūra, kai padedamas D2.

## Vieno taško lygiavimas (tik perkėlimas)

Padėjus D1, užuot spustelėję antrąjį šaltinio tašką, paspauskite **Enter** arba **Space**. Pasirinkimas perkeliamas S1→D1 vektoriumi — be pasukimo ir mastelio keitimo — tapatu [Move](../move/), naudojant S1 kaip bazinį tašką, o D1 kaip paskirtį.

## Dviejų taškų lygiavimas (perkėlimas + pasukimas + pasirinktinis mastelis)

Kai padedami ir S2, ir D2:

- **Pasukimo kampas** — skirtumas tarp paskirties krypties (`D1 → D2`) ir šaltinio krypties (`S1 → S2`).
- **Mastelio raginimas** — pasirodo `scale objects to alignment points? [Yes/No] <N>`, kur numatytoji reikšmė yra **No**:
  - Paspauskite **Y**, kad pasirinkimo mastelis taip pat būtų vienodai pakeistas aplink D1 ir `S1–S2` atstumas taptų `D1–D2` atstumu.
  - Paspauskite **N** arba **Enter**, kad išlaikytumėte pradinį dydį — taikomas tik perkėlimas ir pasukimas.

Paspaudus klavišą mastelio raginime, lygiavimas pritaikomas iškart — po Yes ar No pasirinkimo nėra atskiro patvirtinimo žingsnio.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Patvirtina pasirinkimą ir pereina į S1 fazę |
| `Enter` / `Space` (S2 žingsnyje) | Praleidžia pasukimą — pritaiko tik perkėlimo lygiavimą naudojant S1 ir D1 |
| `Y` | Pritaiko lygiavimą su mastelio keitimu |
| `N` / `Enter` (mastelio raginime) | Pritaiko lygiavimą be mastelio keitimo |
| `Escape` | Renkant taškus: atmeta juos ir grįžta į pasirinkimo fazę; nieko nepasirinkus: atšaukia komandą |

## Pasirinkimas komandos metu

Kai komanda prasideda pasirinkimo fazėje:

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą į pasirinkimą / iš jo |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelio ribą |
| **Enter** / **Space** | Patvirtina pasirinkimą ir pereina į S1 fazę |

## Po lygiavimo

Sulygiuoti objektai lieka pasirinkti naujoje vietoje, o komanda baigiasi automatiškai — vėl paleiskite **Align** arba pereikite prie [Move](../move/), [Rotate](../rotate/) ar [Scale](../scale/) nepasirinkdami iš naujo.

## Align ir Move

| | Align | Move |
|---|-------|------|
| Taškų poros | 1 (tik perkėlimas) arba 2 (perkėlimas + pasukimas + mastelis) | 1 (tik perkėlimas) |
| Pasukimas | Taip, su antra taškų pora | Ne |
| Mastelio keitimas | Pasirinktinai, su antra taškų pora | Ne |
| Geriausiai tinka | Vienos figūros priderinimui prie kitos pagal atskaitos taškus | Paprastam perkėlimui |

## Palaikomi objektai

Align veikia su kiekvienu objekto tipu, kurį palaiko Move, Rotate ir Scale — nuosekliai taikomos tos pačios `translate`, `rotate` ir `scale` operacijos, kurias naudoja tos komandos, todėl nieko neišskiriama.
