---
title: Trim komanda — objekto atkarpų apkirpimas sankirtose
description: Trim komanda pašalina Line, Arc, Circle, Ellipse ar Polyline dalį tarp dviejų gretimų sankirtos taškų, artimiausių žymekliui. Peržiūra parodo tiksliai, kuri atkarpa bus nupjauta, prieš spustelint.
keywords: [CAD trim komanda, linijos apkirpimas CAD, apskritimo apkirpimas CAD, lanko apkirpimas CAD, elipsės apkirpimas CAD, polilinijos apkirpimas CAD, linijos perpjovimas sankirtoje, peržiūra užvedus žymeklį, kulmanlab]
group: edit
order: 8
---

# Trim

Komanda `trim` pašalina [Line](../line/), [Arc](../arc/), [Circle](../circle/), [Ellipse](../ellipse/) ar [Polyline](../polyline/) dalį, esančią tarp dviejų gretimų sankirtos taškų, suskaidydama objektą į vieną ar kelis likusius gabalus. Nupjaunama atkarpa nustatoma pagal žymeklio padėtį — užveskite ant dalies, kurią norite pašalinti, ir spustelėkite, kad ją apkirptumėte.

## Objekto apkirpimas

1. Terminale įveskite `trim` arba spustelėkite įrankių juostos mygtuką **Trim**.
2. **Užveskite žymeklį ant atkarpos**, kurią norite pašalinti — peržiūra paryškina tiksliai tą dalį, kuri bus nupjauta.
3. **Spustelėkite**, kad pašalintumėte tą atkarpą.

Komanda po kiekvieno apkirpimo lieka aktyvi, todėl galite toliau užvedinėti ir spustelėti, kad nupjautumėte daugiau atkarpų — to paties ar kito objekto. Paspauskite **Enter**, **Space** arba **Escape**, kad išeitumėte.

```
  Prieš:                      Po vidurinės atkarpos apkirpimo:

  ──────●──────●──────        ──────●          ●──────
      sankirta  sankirta        (kairė dalis)  (dešinė dalis)
                                (vidurinė atkarpa pašalinta)
```

## Kaip nustatoma apkirpimo atkarpa

Komanda projektuoja žymeklio padėtį ant užvesto objekto ir randa visus jo sankirtos taškus su kitais objektais. Tos sankirtos dalija objektą į atkarpas — Line, Arc ar atviros Polyline atveju paties objekto galai veikia kaip papildomos fiksuotos ribos. Pilnas Circle ar Ellipse, arba uždara Polyline (įskaitant Rectangle), savo galų neturi, todėl jiems apkirpti reikia bent dviejų sankirtos taškų. Atkarpa, kurios intervale yra žymeklio projekcija, paryškinama ir spustelėjus pašalinama.

- **Line, Arc ir atvira Polyline** — pašalinta atkarpa gali būti pradinė dalis (prieš pirmą sankirtą), vidurinė dalis (tarp dviejų sankirtų, suskaidant objektą į du gabalus) arba galinė dalis (po paskutinės sankirtos).
- **Circle, Ellipse ir uždara Polyline/Rectangle** — kadangi nėra fiksuotos pradžios ar galo, pašalinti galima tik lanką tarp dviejų *sankirtos taškų*. Turint mažiau nei dvi sankirtas, peržiūra nerodoma, o spustelėjimas nieko nedaro. Likusi figūros dalis tampa vienu likusiu gabalu.

## Ką apkirpimas sukuria

| Objektas | Rezultatas po apkirpimo |
|----------|-------------------------|
| Line | Iki dviejų trumpesnių Line objektų |
| Arc | Iki dviejų trumpesnių Arc objektų |
| Circle | Vienas [Arc](../arc/) objektas — apskritimo uždara forma dingo, todėl likęs gabalas saugomas kaip lankas |
| Ellipse | Vienas Ellipse objektas su pradžios ir galo kampu — likęs gabalas lieka elipse, dabar daline |
| Polyline (atvira) | Iki dviejų trumpesnių Polyline objektų |
| Polyline (uždara) / Rectangle | Vienas atviras Polyline objektas — uždara forma dingo, todėl likęs gabalas saugomas atviras |
| Spline | Iki dviejų trumpesnių Spline objektų — kiekvienas gabalas yra ta pati kreivė mažesniame ruože, saugoma valdymo viršūnėmis (Fit splaino apibrėžiantys taškai atmetami); uždaras splainas palieka vieną atvirą gabalą |

## Klavišų nuoroda

| Klavišas | Veiksmas |
|----------|----------|
| `Enter` / `Space` | Išeina iš trim režimo |
| `Escape` | Išeina iš trim režimo |

## Palaikomi objektai

| Objektas | Ar galima apkirpti? |
|----------|---------------------|
| Line | Taip |
| Arc | Taip |
| Circle | Taip — reikia 2 ar daugiau sankirtos taškų |
| Ellipse | Taip — reikia 2 ar daugiau sankirtos taškų |
| Polyline (atvira) | Taip |
| Polyline (uždara) / Rectangle | Taip — reikia 2 ar daugiau sankirtos taškų |
| Spline | Taip — uždaram splainui reikia 2 ar daugiau sankirtos taškų; splainas taip pat apkerpamas ten, kur jis kertasi pats su savimi |
| Text, Dimension, Leader | Ne |

Objektai, naudojami kaip **pjovimo ribos**, gali būti Line, Arc, Circle, Ellipse, Polyline arba Spline. Text, Dimension ir Leader objektai niekada neužregistruoja sankirtų, todėl jie taip pat negali būti ribomis.

[Polyline](../polyline/) **lankų atkarpos** (nubraižytos su Arc jungikliu arba importuotos iš kito CAD įrankio) apkarpomos lygiai kaip jos tiesios atkarpos — užveskite ant lankinės dalies tarp dviejų sankirtų ir spustelėkite. Apkirpta briauna išlaiko pradinį kreivumą; keičiasi tik jos ilgis.

## Trim ir Extend

| | Trim | Extend |
|---|------|--------|
| Ką daro | Pašalina objekto atkarpą | Ištempia linijos galą iki ribos |
| Aktyvatorius | Užvedimas ant nupjaunamos atkarpos | Užvedimas šalia pratęsiamo galo |
| Rezultatas | Objektas dalijasi arba sutrumpėja | Linijos galas juda iki ribos |
| Palaikomi objektai | Line, Arc, Circle, Ellipse, Polyline, Spline | Line, Arc, Ellipse, Polyline |
