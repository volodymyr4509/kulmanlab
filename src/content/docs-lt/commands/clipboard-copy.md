---
title: ClipboardCopy komanda — objektų kopijavimas į sistemos iškarpinę
description: ClipboardCopy komanda įrašo pasirinktus objektus į sistemos iškarpinę kaip JSON tekstą kartu su sluoksniais ir linijų tipais, į kuriuos jie nurodo, kad juos būtų galima įklijuoti į kitą brėžinį ar kitą naršyklės skirtuką su ClipboardPaste.
keywords: [CAD iškarpinės kopijavimas, objektų kopijavimas tarp brėžinių, CAD objektų kopijavimas į iškarpinę, Ctrl+C CAD, kopijavimas tarp skirtukų CAD, kopijavimas tarp naršyklės skirtukų, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Komanda `ClipboardCopy` įrašo pasirinktus objektus į jūsų **sistemos iškarpinę** kaip JSON tekstą. Kadangi ji naudoja tikrą iškarpinę, o ne atminties buferį, nukopijuota geometrija išlieka už brėžinio ribų: įklijuokite ją į kitą failą, antrą naršyklės skirtuką ar vėliau atidarytą langą su [ClipboardPaste](../clipboard-paste/).

Tuo ji skiriasi nuo [Copy](../copy/): Copy dubliuoja objektus dabartiniame brėžinyje vienu gestu, o ClipboardCopy padeda juos ten, iš kur juos galima gauti visiškai kitame brėžinyje.

## Du būdai pradėti

**Pirmiausia pasirinkti, tada kopijuoti** — greitas kelias:

1. Drobėje pasirinkite vieną ar kelis objektus.
2. Paspauskite `Ctrl+C` (`Cmd+C` macOS) arba terminale įveskite `ClipboardCopy`.
3. Objektai iškart įrašomi į iškarpinę ir komanda išeina.

**Pirmiausia aktyvuoti, tada pasirinkti** — pradėkite nieko nepasirinkę:

1. Paspauskite `Ctrl+C` arba įveskite `ClipboardCopy` su tuščiu pasirinkimu.
2. Raginimas skelbia **pick objects to copy — Enter or Space to confirm**.
3. **Pasirinkite objektus** — spustelėkite, kad perjungtumėte atskirus objektus, arba tempkite, kad pasirinktumėte sritimi.
4. Paspauskite **Enter** arba **Space**, kad nukopijuotumėte pasirinkimą ir išeitumėte.

Paspaudus **Enter** ar **Space**, kai nieko nepasirinkta, komanda tiesiog baigiasi neliesdama iškarpinės.

## Kas kopijuojama

Iškarpinės turinys neša daugiau nei gryną geometriją, todėl įklijavimas į nesusijusį brėžinį vis tiek atrodo teisingai:

| Dalis | Paskirtis |
|-------|-----------|
| **Entities** | Pilna serializuota kiekvieno pasirinkto objekto forma |
| **Reference point** | Pasirinkimo bendrų ribų apatinis kairysis kampas — tai, ką ClipboardPaste prijungia prie žymeklio |
| **Layers** | Tik sluoksniai, į kuriuos nukopijuoti objektai iš tikrųjų nurodo, pagal pavadinimą |
| **Linetypes** | Tik linijų tipai, į kuriuos nukopijuoti objektai iš tikrųjų nurodo, pagal pavadinimą |

Kartu su kopija keliauja tik *nurodyti* lentelių įrašai — ne visos šaltinio brėžinio sluoksnių ir linijų tipų lentelės. Brūkšniuočių raštai visai nepridedami ir nereikalingi: brėžinio raštų lentelė yra įtaisytasis numatytasis rinkinys, o visi jūsų įkelti `.pat` failai gyvena naudotojo saugykloje, kuri jau bendra tarp skirtukų, todėl įklijuota brūkšniuotė pati išsprendžia savo raštą.

## Patvirtinimas

Sėkmės atveju terminalas praneša, kiek objektų įrašyta:

```
3 entities copied to clipboard
```

Jei naršyklė atsisako suteikti prieigą prie iškarpinės, terminalas parodo **Copy failed: clipboard access denied** ir nieko neįrašoma. Tai naršyklės leidimo sprendimas, o ne brėžinio klaida — žr. [Iškarpinės leidimai](#iškarpinės-leidimai) žemiau.

## Pasirinkimas komandos metu

| Metodas | Elgsena |
|---------|---------|
| **Spustelėjimas** | Perjungia žymeklio nurodytą objektą į pasirinkimą / iš jo |
| **Tempimas į dešinę** (griežtas) | Prideda objektus, visiškai esančius rėmelyje |
| **Tempimas į kairę** (kertantis) | Prideda objektus, kertančius rėmelio ribą |
| **Enter** / **Space** | Patvirtina pasirinkimą ir kopijuoja |

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Ctrl+C` / `Cmd+C` | Aktyvuoja ClipboardCopy |
| `Enter` / `Space` | Nukopijuoja dabartinį pasirinkimą arba išeina, jei nieko nepasirinkta |
| `Escape` | Atšaukia nekopijuodamas |

## Iškarpinės leidimai

Rašymui į sistemos iškarpinę reikia naršyklės leidimo. Praktiškai klavišo paspaudimu iššauktas kopijavimas šiuolaikinėse darbalaukio naršyklėse suteikiamas be raginimo, tačiau puslapis, praradęs fokusą, ar naršyklė su griežtais iškarpinės nustatymais gali atsisakyti. Jei matote prieigos atmetimo pranešimą, vieną kartą spustelėkite drobę, kad puslapis gautų fokusą, ir bandykite dar kartą.

Kadangi turinys yra paprastas JSON tekstas, bet kas kita, ką vėliau nukopijuosite — teksto eilutė, URL — jį pakeičia. Nukopijuokite dar kartą prieš įklijuodami, jei tuo tarpu iškarpine naudojotės kitam tikslui.

## Palaikomi objektai

ClipboardCopy veikia su kiekvienu objekto tipu. Objektai serializuojami tuo pačiu mechanizmu, kurį naudoja vietinis `.json` eksportas, todėl nieko neprarandama.

## Taip pat žr.

- [ClipboardPaste](../clipboard-paste/) — perskaityti iškarpinę atgal ir padėti objektus
- [Copy](../copy/) — dubliuoti objektus dabartiniame brėžinyje
- [Export Manager](../export-manager/) — išsaugoti visą brėžinį į DXF ar JSON
