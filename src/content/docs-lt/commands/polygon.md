---
title: "Polygon komanda — taisyklingų daugiakampių braižymas iš centro ar kraštinės KulmanLab CAD"
description: "Polygon komanda nubraižo taisyklingą daugiakampį su 3–1024 kraštinėmis iš centro ir spindulio arba iš vienos kraštinės. Rezultatas – uždara LWPOLYLINE, todėl galioja visos polilinijos redagavimo komandos."
keywords: ["CAD daugiakampio komanda", "taisyklingo daugiakampio braižymas CAD", "šešiakampis aštuonkampis penkiakampis CAD", "LWPOLYLINE DXF", "kulmanlab"]
group: shapes
order: 10
---

# Polygon

Komanda `Daugiakampis` nubraižo taisyklingą daugiakampį — visos kraštinės ir kampai lygūs — su 3–1024 kraštinėmis. Terminale įveskite `Daugiakampis`. Rezultatas – **uždara `LWPOLYLINE`**, todėl padėta ji elgiasi kaip bet kuri kita [Polyline](../polyline/) ir galioja visi polilinijos redagavimai.

## Daugiakampio braižymas

1. Terminale įveskite `Daugiakampis` ir įveskite **kraštinių skaičių** — sveikąjį skaičių nuo 3 iki 1024 — ir paspauskite **Enter** arba **Space**. Raginimas iš anksto užpildytas paskutiniu naudotu skaičiumi (pirmą kartą 4); pradėkite rašyti, kad jį pakeistumėte. Bet kas kita atmetama ir lieka raginime, kad ištaisytumėte.
2. **Spustelėkite centrą** arba įveskite `X,Y` ir paspauskite **Enter** tiksliai koordinatei. Norėdami pradėti nuo kraštinės, pirmiausia paspauskite `E` (žr. toliau).
3. **Spustelėkite spindulį** — daugiakampis rodomas gyvai — arba įveskite spindulį ir paspauskite **Enter** arba **Space**.
4. Daugiakampis padedamas ir komanda baigiama.

## Parinktys

| Parinktis | Klavišas | Poveikis |
|---|---|---|
| Edge | `E` | Pirmas taškas tampa vienu kraštinės galu vietoj centro. Pasirinkite antrą galą; likusios viršūnės sudaromos prieš laikrodžio rodyklę, kairėje kraštinės nuo pirmo iki antro galo. Dar kartą paspauskite `E`, kad grįžtumėte prie centro. |
| Inside | `I` | Pagal numatytuosius nustatymus įjungta ir išlieka nuo vieno daugiakampio iki kito. Įjungta: viršūnės yra ant nurodyto spindulio apskritimo. Išjungta: daugiakampis yra už to apskritimo, o kiekvienos kraštinės vidurys – ant jo. |

- Spustelėjimas padeda viršūnę (Inside įjungta) arba kraštinės vidurį (Inside išjungta) tiksliai ten, kur yra žymeklis, todėl žymeklis nustato ir pasukimą.
- Įvestas spindulys neturi krypties, į kurią taikyti, todėl daugiakampis padedamas su žemiausia kraštine horizontaliai — nebent įjungtas kampo užraktas, tada jis seka užrakintą kampą.
- Kiekviena parinktis siūloma savo žingsnyje ir ją galima perjungti net renkant skaičių.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|---|---|
| `0`–`9`, `.` | Įveskite kraštinių skaičių, spindulį, koordinatę ar ilgį |
| `E` | Edge įjungimas ar išjungimas (pirmojo taško žingsnis) |
| `I` | Inside įjungimas ar išjungimas (spindulio žingsnis) |
| `Enter` / `Space` | Kraštinių skaičiaus ar spindulio patvirtinimas |
| `Escape` | Atšaukti |

## DXF — LWPOLYLINE objektas

Daugiakampis išsaugomas kaip uždara `LWPOLYLINE` su viena viršūne kiekvienam kampui; DXF neturi atskiro daugiakampio tipo. Visos savybės — viršūnių koordinatės, spalva, sluoksnis, linijos tipas, linijos tipo mastelis ir storis — keliauja be praradimų, o bet kuri DXF peržiūros programa jį skaito kaip uždarą poliliniją.
