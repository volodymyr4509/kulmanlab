---
title: ClipboardPaste komanda — objektų įklijavimas iš sistemos iškarpinės
description: ClipboardPaste komanda perskaito iš sistemos iškarpinės objektus, anksčiau įrašytus ClipboardCopy, ir padeda juos pasirinktame įterpimo taške, pridėdama sluoksnius ir linijų tipus, kurių trūksta paskirties brėžinyje.
keywords: [CAD iškarpinės įklijavimas, objektų įklijavimas tarp brėžinių, CAD objektų įklijavimas, Ctrl+V CAD, kopijavimas tarp skirtukų CAD, įklijavimas tarp naršyklės skirtukų, sluoksnių sujungimas įklijuojant, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

Komanda `ClipboardPaste` perskaito objektus, kuriuos [ClipboardCopy](../clipboard-copy/) įrašė į **sistemos iškarpinę**, ir padeda juos dabartiniame brėžinyje jūsų pasirinktame taške. Kadangi iškarpinė yra tikroji sistemos, šaltinis gali būti kitas brėžinys, kitas naršyklės skirtukas ar sesija iš ankstesnės dienos dalies.

## Kaip įklijuoti

1. Paspauskite `Ctrl+V` (`Cmd+V` macOS) arba terminale įveskite `ClipboardPaste`.
2. Raginimas rodo **reading clipboard…**, kol naršyklė perduoda iškarpinės tekstą.
3. Įkėlus, raginimas pasikeičia į **pick insertion point**, o įklijuotos geometrijos peržiūra seka jūsų žymeklį.
4. **Spustelėkite**, kad padėtumėte objektus. Jie pridedami į brėžinį ir paliekami pasirinkti.

Peržiūra prijungiama prie kopijos **atskaitos taško** — pradinio pasirinkimo bendrų ribų apatinio kairiojo kampo. Tas kampas atsiduria po jūsų žymekliu, todėl nukopijuotų objektų santykinis išdėstymas išsaugomas tiksliai.

## Kas nutinka įklijuojant

| Žingsnis | Elgsena |
|----------|---------|
| **Nauji identitetai** | Kiekvienam įklijuotam objektui suteikiamas naujas id, todėl įklijavus du kartus gaunami du nepriklausomi rinkiniai |
| **Perkėlimas** | Objektai perkeliami žymeklio − atskaitos taško poslinkiu |
| **Sluoksnių sujungimas** | Bet koks nurodytas sluoksnis, kurio paskirties brėžinyje nėra, pridedamas pagal pavadinimą |
| **Linijų tipų sujungimas** | Bet koks nurodytas linijos tipas, kurio paskirties brėžinyje nėra, pridedamas pagal pavadinimą |
| **Pasirinkimas** | Ankstesnis pasirinkimas išvalomas, o įklijuoti objektai tampa pasirinkimu |

### Sluoksnių ir linijų tipų sujungimas

Trūkstami lentelių įrašai pridedami; **esami paliekami nepaliesti**. Jei iškarpinėje yra raudonas sluoksnis pavadinimu `WALLS`, o paskirties brėžinyje jau yra mėlynas `WALLS` sluoksnis, laimi paskirties apibrėžimas ir įklijuoti objektai prisijungia prie jo — jie bus mėlyni. Įklijavimas neperapibrėžia nieko paskirties brėžinyje.

Tai svarbu kopijuojant tarp brėžinių su skirtingomis sluoksnių konvencijomis: jei spalvos ne tokios, kokių tikėjotės, po įklijavimo tarp brėžinių patikrinkite [Layer Manager](../layer-manager/).

## Kai iškarpinėje nėra ko įklijuoti

ClipboardPaste priima tik turinį, kurį sukūrė ClipboardCopy. Viskas kita iškarpinėje — paprastas tekstas, URL, paveikslėlis, JSON iš kitos programos — atmetama ir terminalas praneša:

```
Clipboard has no copied entities
```

Jei naršyklė visiškai atsisako suteikti prieigą prie iškarpinės, pranešimas vietoj to yra **Blocked by the browser: allow clipboard in site settings, by the address bar**. Abu atvejai užbaigia komandą nepakeitę brėžinio.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Ctrl+V` / `Cmd+V` | Aktyvuoja ClipboardPaste |
| `Escape` | Atšaukia — objektai atmetami ir nieko nepridedama |

Atšaukti skaitymo fazėje saugu: jei iškarpinė atsakys jau po to, kai atšaukėte ar paleidote kitą komandą, vėlyvas rezultatas atmetamas, o ne pertraukia to, kas tuo metu aktyvu.

## Kopijavimas tarp skirtukų

Tipinis darbo tarp brėžinių procesas:

1. Atverkite šaltinio brėžinį, pasirinkite geometriją, paspauskite `Ctrl+C`.
2. Persijunkite į kitą skirtuką — arba atverkite antrą programos skirtuką ir įkelkite kitą failą.
3. Paspauskite `Ctrl+V` ir spustelėkite įterpimo tašką.

Abu skirtukai yra to paties šaltinio ir dalijasi sistemos iškarpine, todėl nieko neįkeliama ir serveris nedalyvauja. Visą laiką turinys yra JSON tekstas jūsų pačių iškarpinėje.

## Palaikomi objektai

Kiekvieną objekto tipą, kurį gali įrašyti ClipboardCopy, ClipboardPaste gali perskaityti atgal — ta pati serializacija, kurią naudoja vietinis `.json` formatas.

## Taip pat žr.

- [ClipboardCopy](../clipboard-copy/) — įrašyti pasirinkimą į iškarpinę
- [Copy](../copy/) — dubliuoti objektus dabartiniame brėžinyje
- [Layer Manager](../layer-manager/) — patikrinti sluoksnius, kuriuos atnešė įklijavimas
