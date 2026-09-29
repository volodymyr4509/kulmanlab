---
title: Fit komanda — visų objektų parodymas lange vienu spustelėjimu
description: Fit komanda apskaičiuoja visų objektų apribojantį stačiakampį ir sureguliuoja mastelį bei slinkimą, kad visi objektai matytųsi su nedideliu užlaida. Dukart spustelėjus vidurinį pelės klavišą Fit paleidžiamas neaktyvavus komandos.
keywords: [CAD rodyti viską, priartinti iki viso, visų objektų parodymas, fit komanda CAD, mastelis pagal apribojantį stačiakampį, kulmanlab]
group: navigate
order: 4
---

# Fit

Komanda `fit` apskaičiuoja visų brėžinio objektų apribojantį stačiakampį ir sureguliuoja tiek mastelį, tiek slinkimo padėtį, kad visi objektai matytųsi su nedideliu užlaida. Tai greičiausias būdas atgauti pamestą vaizdą ar susiorientuoti importavus DXF failą.

## Vaizdo pritaikymas

Spustelėkite įrankių juostos mygtuką **Fit** arba terminale įveskite `fit`. Vaizdas sureguliuojamas iškart ir komanda išeina — jokios papildomos sąveikos nereikia.

**Dukart spustelėjus vidurinį pelės klavišą** kiekvienu metu paleidžiama ta pati Fit operacija neaktyvuojant jokios komandos — greičiausias spartusis klavišas atkurti pamestą vaizdą braižymo viduryje.

## Kaip veikia pritaikymas apribojančiam stačiakampiui

1. Fit suranda ašims lygiagretų apribojantį stačiakampį, apimantį visus objektus (min X, maks X, min Y, maks Y).
2. Mastelis nustatomas taip, kad aukštesnis ar platesnis matmuo užpildytų drobę su užlaida.
3. Vaizdas centruojamas pagal apribojančio stačiakampio vidurio tašką.

| Brėžinio būsena | Rezultatas |
|-----------------|------------|
| Platesnis nei aukštesnis | Mastelį riboja plotis |
| Aukštesnis nei platesnis | Mastelį riboja aukštis |
| Vienas objektas | Pritaikoma tik aplink jį |
| Tuščias brėžinys | Vaizdas nesikeičia |

## Fit ir rankinis mastelio valdymas

| | Fit | Zoom In / Zoom Out | Pelės ratukas |
|---|-----|--------------------|---------------|
| Centruoja pagal | Visus objektus | Lango vidurio tašką | Žymeklį |
| Žingsnio dydis | Automatinis (vienkartinis) | 1,5× kiekvienam žingsniui | ~1,1× kiekvienam spragtelėjimui |
| Geriausiai tinka | Pamesto vaizdo atkūrimui, orientacijai po importo | Artinimui/tolinimui nuo centro | Tiksliam priartinimui žymeklio vietoje |

## Klavišų nuoroda

Šiai komandai spartaus klavišo nėra. Vietoj to naudokite **dvigubo vidurinio pelės klavišo spustelėjimo** spartųjį klavišą.

## Susijusios vaizdo komandos

| Komanda | Ką daro |
|---------|---------|
| [Pan](../pan/) | Perstumia langą nekeisdama mastelio |
| [Zoom In](../zoom-in/) | Padaugina mastelį iš 1,5× kiekvienam žingsniui |
| [Zoom Out](../zoom-out/) | Padalija mastelį iš 1,5× kiekvienam žingsniui |
