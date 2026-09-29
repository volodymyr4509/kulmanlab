---
title: Selection Filter — daugybinio pasirinkimo susiaurinimas pagal savybę
description: Kai pasirinkta daug objektų, filtro piktograma savybių skydelio antraštėje atveria langą su gyvais Type, Layer, Color, Lineweight ir Linetype sąrašais, sudarytais pagal tai, kas iš tikrųjų yra pasirinkime, todėl didelį mišrų pasirinkimą galima susiaurinti prieš masinį redagavimą.
keywords: [pasirinkimo filtras, pasirinkimo filtravimas CAD, fasetinis filtras, pasirinkimo susiaurinimas, masinis redagavimas CAD, savybių skydelio filtras, kulmanlab]
group: interface
order: 7
---

# Selection Filter

Vienu metu pasirinkus daug objektų, savybių skydelis atsidaro savo daugybinio pasirinkimo rodinyje („Selection (N)"). **Filtro piktograma** šalia uždarymo mygtuko leidžia prieš redaguojant masiškai susiaurinti tą pasirinkimą pagal savybę.

## Filtro atvėrimas

1. Pasirinkite kelis objektus — nutempkite pasirinkimo rėmelį, spustelėkite su Shift arba paspauskite Ctrl+A.
2. Spustelėkite **filtro piktogramą** (piltuvėlį) savybių skydelio antraštėje.
3. Po mygtuku atsidaro langas su sąrašu kiekvienai savybei, kuri iš tikrųjų skiriasi visame pasirinkime.

## Fasetai

Lange gali būti rodoma iki penkių fasetų, kiekvienas sudarytas gyvai iš dabartinio pasirinkimo:

| Fasetas | Rodomos reikšmės |
|---------|------------------|
| **Type** | Objekto tipo pavadinimas (Line, Circle, Hatch, …) |
| **Layer** | Sluoksnio pavadinimas su spalvos pavyzdžiu, atitinkančiu tą sluoksnį |
| **Color** | ACI spalvos indeksas |
| **Lineweight** | Linijos storio reikšmė |
| **Linetype** | Linijos tipo pavadinimas |

Fasetas pasirodo tik jei pasirinkime iš tikrųjų yra daugiau nei viena skirtinga tos savybės reikšmė — dešimties linijų pasirinkimas tame pačiame sluoksnyje nerodys Layer faseto, nes jo pažymėjimas nieko negalėtų susiaurinti. Objektai, kurie tos savybės išvis neturi (Hatch ir Text, pavyzdžiui, neturi linijos storio ar linijos tipo), tiesiog neįskaičiuojami į tą fasetą — ir niekada nėra juo išskiriami.

## Pasirinkimo susiaurinimas

Pažymėkite vieną ar kelias reikšmes bet kuriame fasete, kad susiaurintumėte pasirinkimą iki objektų, atitinkančių **visus** pažymėtus fasetus (objektas turi atitikti bent vieną pažymėtą reikšmę *kiekviename* fasete, kurio palietėte, o ne tik viename). Kiekvieno faseto žymimieji langeliai ir kiekiai atspindi tai, iki ko jau susiaurino *kiti* pažymėti fasetai, todėl fasetas niekada neslepia savo paties jau pažymėtų parinkčių — standartinė fasetinės paieškos elgsena.

Rezultatų skaičius atsinaujina gyvai žymint ir nuimant žymėjimą, o pats pasirinkimas drobėje susiaurinamas atitinkamai — tai ne tik rodymo filtras, objektai, kurie nebeatitinka, iš tikrųjų atžymimi, paruošti masiškai redaguoti tiksliai tą poaibį, iki kurio filtravote.

## Filtrų išvalymas

Naudokite lango atstatymo valdiklį, kad išvalytumėte visus pažymėtus langelius ir grįžtumėte prie pilno pradinio pasirinkimo, arba uždarykite langą (jis vėl atsidaro su nauja pradžia, kai kitą kartą spustelėsite filtro piktogramą su nauju pasirinkimu).

## Susiję

- [Match Properties](../../commands/match-properties/) — kopijuoti savybes iš vieno objekto kitiems, kai jau susiaurinote, kurie tai turi būti
- [LayerIsolate](../../commands/layer-isolate/) — sluoksnio lygio alternatyva, kai norite izoliuoti tik pagal sluoksnį, nepriklausomai nuo to, kas šiuo metu pasirinkta
