---
title: LayerManager — visų sluoksnių valdymas vienoje lentelėje
description: LayerManager komanda atveria visų brėžinio sluoksnių lentelę, leidžiančią pridėti sluoksnius, ištrinti nenaudojamus ir redaguoti kiekvieno užšaldymą, užraktą, spausdinimą, spalvą, linijos storį ir linijos tipą vietoje.
keywords: [sluoksnių tvarkytuvė, CAD sluoksnių lentelė, sluoksnių valdymas CAD, sluoksnio pridėjimas CAD, sluoksnio ištrynimas CAD, nenaudojamo sluoksnio pašalinimas, sluoksnio užšaldymas užraktas spausdinimas, kulmanlab sluoksnių valdymas]
group: layer
order: 1
---

# LayerManager

Komanda `LayerManager` atveria lentelę, išvardijančią kiekvieną brėžinio sluoksnį, kurio **Freeze**, **Lock**, **Plot**, **Color**, **Lineweight** ir **Linetype** nustatymai redaguojami tiesiai eilutėje. Tai centrinė vieta sluoksniams pridėti, nenaudojamiems ištrinti ir esamų elgsenai koreguoti — kitos sluoksnių komandos ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) kiekviena atlieka vieną konkretų darbą jos neatidariusios.

## Layer Manager atvėrimas

- Terminale įveskite `LayerManager`, **arba**
- spustelėkite mygtuką **Layer Manager** sluoksnių skydelyje.

Dialogas atsidaro kaip plaukiojantis skydelis; iš anksto nieko pasirinkti nereikia.

## Sluoksnių lentelė

| Stulpelis | Ką valdo |
|-----------|----------|
| Name | Sluoksnio pavadinimas, lentelėje rodomas tik skaitymui (nustatomas vieną kartą, kuriant) |
| Freeze | Paslepia sluoksnio objektus ir pašalina juos iš pasirinkimo, kol atšildomi |
| Lock | Neleidžia redaguoti sluoksnio objektų jų neslėpdama |
| Plot | Ar sluoksnio objektai įtraukiami spausdinant ar eksportuojant į PDF |
| Color | Sluoksnio ACI spalva — spustelėkite pavyzdį, kad atvertumėte spalvų pasirinkiklį |
| Lineweight | Sluoksnio linijos storis — spustelėkite ženkliuką, kad atvertumėte linijos storio pasirinkiklį |
| Linetype | Sluoksnio brūkšnių raštas — spustelėkite ženkliuką, kad atvertumėte linijos tipo pasirinkiklį |
| ✕ | Ištrina sluoksnį, kai jo niekas nenaudoja — žr. [Sluoksnio ištrynimas](#sluoksnio-ištrynimas) |

Freeze, Lock ar Plot perjungimas įsigalioja iškart — atskiro išsaugojimo žingsnio nėra. Objektai, nustatyti į **ByLayer** spalvai, linijos storiui ar linijos tipui (numatytoji), perima tai, ką čia nustatote; objektai su savo aiškiu pakeitimu nepaveikiami.

## Sluoksnio pridėjimas

1. Spustelėkite **+ Add Layer** lentelės apačioje.
2. Įveskite pavadinimą ir paspauskite **Enter**, kad patvirtintumėte, arba **Escape**, kad atšauktumėte.

Sluoksnių pavadinimuose gali būti raidžių, skaičių, tarpų ir `_`, `-`, `$`. Pavadinimas, kuris tuščias, jau naudojamas ar turi bet kokį kitą simbolį, atmetamas su klaida eilutėje, o eilutė lieka atvira kitam bandymui.

Nauji sluoksniai prasideda **neužšaldyti, neužrakinti, spausdinami**, su spalva 7 (balta/juoda), linijos storiu Default ir linijos tipu Continuous — tomis pačiomis numatytosiomis reikšmėmis, kurias [Import](../import/) priskiria sluoksniui `0` tuščiame brėžinyje.

## Sluoksnio ištrynimas

Kiekviena eilutė baigiasi mygtuku **✕**, kuris pašalina sluoksnį iš brėžinio. Ištrynimas iškart — patvirtinimo žingsnio nėra — bet siūlomas tik sluoksniams, nuo kurių niekas nepriklauso:

| Situacija | Mygtuko būsena |
|-----------|----------------|
| Sluoksnis tuščias | Įjungtas — *Delete layer* |
| Sluoksnis priskirtas bent vienam objektui | Išjungtas — *Cannot delete: assigned to at least one entity* |
| Sluoksnis `0` | Mygtuko nėra išvis |

**„Naudojamas" apima visą brėžinį**, o ne tik tai, į ką šiuo metu žiūrite. Objektas makete (popieriaus erdvėje) skaičiuojamas lygiai taip pat, kaip modelio erdvėje, todėl sluoksnis ekrane gali atrodyti tuščias ir vis tiek atsisakyti trinti. Užšaldyti sluoksniai nėra išimtis: užšaldymas paslepia objektus, bet nenutraukia jų priskyrimo, todėl užšaldytas sluoksnis su objektais lieka netrinamas.

Sluoksnio `0` ištrinti negalima niekada. Tai atsarginis sluoksnis, kurį garantuotai turi kiekvienas brėžinys, todėl jam mygtukas visai nerodomas, užuot rodomas išjungtas.

### „…is now in use and can't be deleted"

Kartais ✕ atrodo prieinamas, bet spustelėjimas atmetamas su juosta skydelio viršuje:

```
"WALLS" is now in use and can't be deleted
```

Tai nėra prieštaravimas. Norint išsiaiškinti, kurie sluoksniai naudojami, reikia apeiti kiekvieną brėžinio objektą, todėl rezultatas talpinamas ir perkuriamas tik pasikeitus objektų skaičiui — pigu su šimtais objektų, bet ne su šimtais tūkstančių. Esamo objekto perkėlimas į sluoksnį skaičiaus nekeičia, todėl eilutės išjungimo būsena gali kuriam laikui pasenti. Spustelėjimas prieš ištrinant ką nors viską patikrina iš naujo, todėl atsisakoma spustelėjimo metu, ir sluoksnis neišnyksta, kol kažkas dar į jį nurodo.

Juostą atmeskite jos pačios **✕**. Sluoksnis lieka nepaliestas.

## Ko čia padaryti negalima

Lentelėje nėra rodiklio, kuris sluoksnis yra *dabartinis*; jis nustatomas pasirenkant iš sluoksnių skydelio išskleidžiamojo meniu arba per [LayerMakeCurrent](../layer-make-current/), o ne iš šio dialogo. Sluoksnių pavadinimai taip pat nekeičiami nuo sukūrimo — sluoksnį galima ištrinti ir sukurti iš naujo, bet ne pervadinti.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` | Patvirtina naujo sluoksnio pavadinimą (pridedant) |
| `Escape` | Atšaukia sluoksnio pridėjimą arba uždaro dialogą |

## Susijusios komandos

| Komanda | Ką daro |
|---------|---------|
| [LayerMakeCurrent](../layer-make-current/) | Nustato dabartinį sluoksnį pagal spustelėto objekto sluoksnį |
| [LayerMatch](../layer-match/) | Priskiria pasirinktus objektus šaltinio objekto sluoksniui |
| [LayerIsolate](../layer-isolate/) | Užšaldo visus sluoksnius, išskyrus pasirinktų objektų sluoksnius |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Atšildo visus sluoksnius vienu žingsniu |
