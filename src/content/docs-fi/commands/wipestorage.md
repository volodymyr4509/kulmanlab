---
title: Wipe Storage — Tyhjennä Kaikki Selaimen Tiedot KulmanLab CAD:issa
description: wipestorage-komento poistaa pysyvästi kaikki selaimeen tallennetut tiedostot, tasot, linetyypit ja kumoushistorian. Vaatii YES-tekstin kirjoittamista vahvistukseksi. Käytä nollataksesi vioittuneen tai ylitäyden paikallisen tietokannan.
keywords: [CAD tyhjennä tallennustila, tyhjennä selaimen tiedot CAD, nollaa CAD-sovellus, poista paikalliset tiedostot CAD, kulmanlab wipestorage]
group: file
order: 6
---

# Wipe Storage

Komento `wipestorage` poistaa pysyvästi **kaikki KulmanLab CAD:in selaimeen tallentamat tiedot** — jokaisen tallennetun tiedoston, taso- ja linetype-taulukon, sekä kumoushistorian. Sivu latautuu automaattisesti uudelleen tämän jälkeen.

:::danger Peruuttamaton
Tätä toimintoa ei voi kumota. Kaikki selaimeen tallennetut tiedostot poistetaan. Vie kaikki säilytettävät piirustukset `.json`- tai `.dxf`-tiedostoina ennen tämän komennon ajamista.
:::

## Milloin käyttää sitä

- Selaimen tallennustila on vioittunut, eikä sovellus onnistu lataamaan tai tallentamaan tiedostoja.
- Haluat nollata sovelluksen täysin puhtaaseen tilaan.
- Vaihdat selainta tai laitetta etkä enää tarvitse paikallista kopiota.

## Näin ajat sen

1. Kirjoita `wipestorage` terminaaliin ja paina **Enter**.
2. Terminaali kysyy: *Wipe all browser local storage? Type YES to confirm*
3. Kirjoita `YES` (mikä tahansa kirjainkoko) ja paina **Enter**.

Sovellus poistaa tietokannan ja lataa sivun uudelleen. Jos kirjoitat jotain muuta kuin `YES` ja painat **Enter**, tai painat **Escape**, komento peruutetaan eikä mitään poisteta.

## Mitä poistetaan

| Data | Poistettu |
|------|---------|
| Kaikki selaimeen tallennetut tiedostot | Kyllä |
| Taso- ja linetype-taulukot jokaiselle tiedostolle | Kyllä |
| Kumoushistoria jokaiselle tiedostolle | Kyllä |

Vain **tässä selaimessa** paikallisesti tallennettuun dataan vaikutetaan. Tiedostoja, jotka on jo viety `.json`- tai `.dxf`-muodossa, ei kosketa.
