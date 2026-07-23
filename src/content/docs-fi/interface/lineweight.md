---
title: Lineweight-valitsin — Hallitse Viivanpaksuutta KulmanLab CAD:issa
description: KulmanLab CAD -työkalurivin lineweight-valitsin asettaa viivanpaksuuden, jota käytetään kaikkiin uusiin piirrettyihin entiteetteihin. Tukee DXF-standardin lineweight-arvoja välillä 0,00 mm - 2,11 mm sekä ByLayer- ja Default-tiloja.
keywords: [CAD lineweight, viivanpaksuus, linjan leveys, DXF lineweight, ByLayer lineweight, kulmanlab]
group: interface
order: 4
---

# Lineweight

**Lineweight**-merkki työkalurivillä hallitsee viivanpaksuutta, joka määrätään jokaiselle uudelle piirtämällesi entiteetille. Napsauta sitä avataksesi valikon.

## Vaihtoehdot

| Arvo | Merkitys |
|-------|---------|
| **From Layer** | Entiteetti perii tasolle määritetyn viivanpaksuuden. Näytetty todellinen leveys riippuu tason asetuksesta. |
| **Default** | Käyttää sovelluksen oletusleveyttä — näytetään ohuena viivana (1 px). Ei ohita tason asetusta DXF:ssä. |
| **0,00 mm – 2,11 mm** | Nimenomainen kiinteä leveys. Entiteetti kantaa tämän arvon riippumatta tasonsa viivanpaksuudesta. |

Käytettävissä ovat DXF-standardin mukaiset viivanpaksuusarvot: 0,00, 0,05, 0,09, 0,13, 0,15, 0,18, 0,20, 0,25, 0,30, 0,35, 0,40, 0,50, 0,53, 0,60, 0,70, 0,80, 0,90, 1,00, 1,06, 1,20, 1,40, 1,58, 2,00 ja 2,11 mm.

## Miten se vaikuttaa

Valittu viivanpaksuus vaikuttaa jokaiseen muutoksen jälkeen luotuun entiteettiin. Se ei vaikuta olemassa oleviin entiteetteihin taannehtivasti.

Muuttaaksesi olemassa olevien entiteettien viivanpaksuutta, valitse ne ja muokkaa **Lineweight**-kenttää ominaisuuspaneelissa, tai käytä [MatchProperties](../../commands/match-properties/)-komentoa kopioidaksesi sen toisesta entiteetistä.

## Renderöinti

Viivanpaksuudet renderöidään mittakaavassa **3,78 px per mm** (96 dpi). 0,25 mm:n viiva on noin 1 px leveä näytöllä; 1,00 mm:n viiva on noin 4 px. Hyvin ohuet arvot (0,00 mm ja negatiiviset) renderöidään aina vähintään 0,5 px leveinä, jotta ne pysyvät näkyvinä millä tahansa zoomtasolla.

## DXF-yhteensopivuus

Viivanpaksuusarvot tallennetaan kokonaislukuina sadasosina millimetriä (esim. 25 = 0,25 mm) DXF-tietueissa `LWPOLYLINE`, `LINE`, `CIRCLE` ja muissa entiteettitietueissa. **From Layer** tallennetaan arvona `-1` ja **Default** arvona `-3`, DXF-määrityksen mukaisesti. Tiedostot kestävät edestakaisen matkan ilman häviötä missä tahansa DXF-yhteensopivassa sovelluksessa.
