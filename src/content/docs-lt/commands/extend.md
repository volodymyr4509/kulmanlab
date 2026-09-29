---
title: Extend komanda — objekto pratęsimas iki artimiausios ribos
description: Extend komanda ištempia artimiausią žymekliu nurodyto Line, Arc, Ellipse ar atviros Polyline galą iki artimiausios sankirtos su kitu objektu. Gyva peržiūra parodo pratęstą objektą prieš spustelėjimą.
keywords: [CAD extend komanda, linijos pratęsimas CAD, lanko pratęsimas CAD, elipsės pratęsimas CAD, polilinijos pratęsimas CAD, objekto ištempimas iki ribos, peržiūra užvedus žymeklį, kulmanlab]
group: edit
order: 9
---

# Extend

Komanda `extend` ištempia artimiausią žymekliu nurodyto [Line](../line/), [Arc](../arc/), [Ellipse](../ellipse/) ar atviros [Polyline](../polyline/) galą iki artimiausios sankirtos, kurią jis sudarytų su kitu brėžinio objektu. Užveskite žymeklį šalia galo, kurį norite pratęsti — peržiūra parodo pratęstą objektą — tada spustelėkite, kad pritaikytumėte.

Pratęsti galima tik objektus su tikru galu. [Circle](../circle/) ir pilna (360°) Ellipse yra visada uždaros figūros be galo, todėl jų pratęsti negalima niekada — tas pats galioja uždarai Polyline ar Rectangle. Dalinė Ellipse (elipsinis lankas) ir Arc galus turi ir pratęsiami taip pat kaip Line.

## Objekto pratęsimas

1. Terminale įveskite `extend` arba spustelėkite įrankių juostos mygtuką **Extend**.
2. **Užveskite žymeklį šalia vieno objekto galo**, kurį norite pratęsti — peržiūra parodo jį pratęstą iki artimiausios ribos ta kryptimi.
3. **Spustelėkite**, kad pritaikytumėte pratęsimą.

Komanda po kiekvieno pratęsimo lieka aktyvi, todėl galite toliau užvedinėti ir spustelėti, kad pratęstumėte daugiau objektų. Paspauskite **Enter**, **Space** arba **Escape**, kad išeitumėte.

```
  Prieš:                       Po:

  ──────           |           ──────────────|
  (trumpa linija)  (riba)      (pratęsta iki ribos)
```

## Kaip pasirenkamas galas

Komanda žiūri, kuriam galui žymeklis arčiau:

- **Line ir atvira Polyline** — žymeklis arčiau galinio taško pratęsia galą pirmyn; žymeklis arčiau pradžios taško pratęsia pradžią atgal.
- **Arc ir dalinė Ellipse** — žymeklis arčiau vieno kampinio galo praplečia lanką ta kryptimi, sukant aplink tą patį centrą ir spindulį (ar tą pačią elipsės formą), kol pasiekia kitą ribą.

Iš pasirinkto galo paleidžiamas spindulys — Arc ir Ellipse atveju paties objekto pagrindinis apskritimas ar kreivė — ir **artimiausia sankirta** su bet kuriuo kitu objektu (išskyrus patį objektą ir ignoruojamus tipus) tampa nauju galiniu tašku.

Jei ta kryptimi sankirtos nerandama, peržiūra nerodoma, o spustelėjimas nieko nedaro.

## Ribų išimtys

Šie objektų tipai ignoruojami kaip ribos — objektas iki jų nepratęsiamas:

- Text / Mtext
- Multileader
- Spline

Visi kiti tipai (Line, Arc, Circle, Ellipse, Polyline, Dimension) tinka kaip ribos.

Jei [Polyline](../polyline/) **pirmoji ar paskutinė atkarpa** pati yra lanko atkarpa (nubraižyta su Arc jungikliu), ją pratęsiant lankas ilgėja išilgai savo apskritimo — taip pat kaip pratęsiant atskirą [Arc](../arc/) — o ne traktuojamas kaip tiesi atkarpa.

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Išeina iš extend režimo |
| `Escape` | Išeina iš extend režimo |

## Palaikomi objektai

| Objektas | Ar galima pratęsti? |
|----------|---------------------|
| Line | Taip |
| Arc | Taip |
| Ellipse | Taip — tik jei jau yra dalinis lankas; pilna elipsė galo neturi |
| Circle | Ne — visada uždara figūra be galo |
| Polyline (atvira) | Taip |
| Polyline (uždara) / Rectangle | Ne — visada uždara figūra be galo |
| Text, Spline, Dimension, Leader | Ne |

## Extend ir Trim

| | Extend | Trim |
|---|--------|------|
| Ką daro | Ištempia objekto galą iki ribos | Pašalina objekto atkarpą |
| Aktyvatorius | Užvedimas šalia ištempiamo galo | Užvedimas ant nupjaunamos atkarpos |
| Rezultatas | Galas juda į išorę | Objektas dalijasi arba sutrumpėja |
| Palaikomi objektai | Line, Arc, Ellipse, Polyline | Line, Arc, Circle, Ellipse, Polyline |
