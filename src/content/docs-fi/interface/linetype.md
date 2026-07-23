---
title: Linetype-valitsin — Hallitse Viivakuvioita KulmanLab CAD:issa
description: KulmanLab CAD -työkalurivin linetype-valitsin asettaa viivakuvion, jota käytetään kaikkiin uusiin piirrettyihin entiteetteihin. Tukee kaikkia nykyisestä DXF-tiedostosta ladattuja linetyyppejä sekä sisäänrakennettuja vaihtoehtoja ByLayer, ByBlock ja Continuous.
keywords: [CAD linetype, viivakuvio, katkoviiva, DXF linetype, ByLayer linetype, kulmanlab]
group: interface
order: 3
---

# Linetype

**Linetype**-merkki työkalurivillä hallitsee viivakuviota, joka määrätään jokaiselle uudelle piirtämällesi entiteetille. Napsauta sitä avataksesi valikon.

## Vaihtoehdot

| Arvo | Merkitys |
|-------|---------|
| **From Layer** | Entiteetti perii tasolle määritetyn linetyypin. Näkyy DXF:ssä muodossa `ByLayer`. |
| **ByBlock** | Entiteetti perii sen lohkon linetyypin, johon se kuuluu. Ei näkyvää vaikutusta lohkon ulkopuolella. |
| **Continuous** | Yhtenäinen katkeamaton viiva — ei viivakuviota. |
| **Nimetyt linetyypit** | Mikä tahansa nykyisestä DXF-tiedostosta ladattu linetyyppi (esim. `DASHED`, `CENTER`, `HIDDEN`, `PHANTOM` jne.). Valikko näyttää suoran esikatselun jokaisesta kuviosta ja sen määritysmerkkijonosta. |

## Miten se vaikuttaa

Valittu linetyyppi vaikuttaa jokaiseen muutoksen jälkeen luotuun entiteettiin. Se ei vaikuta olemassa oleviin entiteetteihin taannehtivasti.

Muuttaaksesi olemassa olevien entiteettien linetyyppiä, valitse ne ja muokkaa **Linetype**-kenttää ominaisuuspaneelissa, tai käytä [MatchProperties](../../commands/match-properties/)-komentoa kopioidaksesi sen toisesta entiteetistä.

## Linetype-mittakaava

Jokaisella entiteetillä on myös **Linetype Scale** -ominaisuus (oletus `1`). Viivakuvio kerrotaan tällä kertoimella. Arvo `2` tekee viivoista kaksinkertaisen pituisia; `0.5` tekee niistä puolet lyhyempiä. Muokkaa sitä ominaisuuspaneelissa valittuasi entiteetin.

## Käytettävissä olevat linetyypit

Valikossa näkyvät vain linetyypit, jotka ovat nykyisessä ladatussa DXF-tiedostossa. Vasta luotu tiedosto sisältää vain vaihtoehdot `ByLayer`, `ByBlock` ja `Continuous`. Kun tuot DXF-tiedoston, kaikki tiedoston `$LTYPE`-taulukossa määritellyt linetyypit tulevat käyttöön.

Jos tarvitset tietyn linetyypin (esim. `DASHED2`), joka ei ole listalla, tuo DXF-tiedosto, joka sisältää sen — linetyyppi näkyy silloin valitsimessa nykyisen istunnon ajan.

## DXF-yhteensopivuus

Linetype-nimet tallennetaan merkkijonoina entiteettitietueisiin. `ByLayer` ja `ByBlock` ovat standardeja DXF-erikoisarvoja. Kaikki nimetyt linetyypit ja niiden viivakuviot säilyvät tarkasti viennissä ja kestävät täyden edestakaisen matkan ilman häviötä LibreCADissa, FreeCADissa ja muissa DXF-yhteensopivissa sovelluksissa.
