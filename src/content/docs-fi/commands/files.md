---
title: Files — Viimeisimpien Tiedostojen Paneeli KulmanLab CAD:issa
description: Files-komento avaa Viimeisimmät tiedostot -paneelin — selaa kaikkia selaimeesi tallennettuja piirustuksia, palauta jokin niistä piirtoalueelle, tai poista ne, joita et enää tarvitse.
keywords: [viimeisimmät tiedostot CAD, tiedostohistoriaselain CAD, palauta piirustus, avaa DXF uudelleen, selaimen tallennustila CAD, KulmanLab tiedostot, tallennetut piirustukset, IndexedDB CAD, hallitse piirustuksia]
group: file
order: 3
---

# Files

Komento **Files** avaa **Viimeisimmät tiedostot** -paneelin — listan kaikista piirustuksista, jotka on tallennettu selaimesi paikalliseen tallennustilaan. Käytä sitä avataksesi aiemman piirustuksen uudelleen tai poistaaksesi tiedostoja, joita et enää tarvitse.

## Näin avaat Viimeisimmät tiedostot -paneelin

Napsauta **Files**-painiketta (historiakuvake) File-paneelissa näytön yläosassa. Paneeli avautuu piirtoalueen vasemmalle puolelle.

## Viimeisimmät tiedostot -paneeli

Jokainen listan kohta näyttää tiedostonimen ja kaksi toimintopainiketta:

| Painike | Toiminto |
|--------|--------|
| ✓ **Restore** | Lataa piirustus piirtoalueelle — korvaa nykyisen sisällön |
| ✕ **Delete** | Poista tiedosto selaimen tallennustilasta pysyvästi |

Jos tiedostoja ei ole vielä tallennettu, paneelissa näkyy "No files saved".

## Miten tiedostot tallennetaan

KulmanLab tallentaa piirustukset **IndexedDB**:hen — selaimen sisäiseen pysyvään tietokantaan. Tämä tarkoittaa:

- Tiedostot säilyvät sivun uudelleenlatausten ja selaimen uudelleenkäynnistysten yli.
- Tiedostot tallennetaan **paikallisesti laitteellesi** — mitään ei ladata palvelimelle.
- Jokaisella selaimella ja laitteella on oma itsenäinen tallennustila. Yhdellä tietokoneella Chromessa tallennettu piirustus ei ole saatavilla Firefoxissa tai toisella koneella.
- Selaimen sivustotietojen tyhjentäminen poistaa kaikki tallennetut tiedostot.

## Automaattinen tiedoston lataus käynnistyksessä

Kun avaat KulmanLab CAD:in, sovellus lataa automaattisesti **viimeksi muokatun tiedoston** tallennustilasta. Sinun ei tarvitse avata sitä manuaalisesti Files-paneelista joka kerta.

## Tallennustilan hallinta

Tallennettavien piirustusten määrälle ei ole kiinteää rajaa, mutta selaimen tallennustila on rajallinen. Jos huomaat tallennustilavaroituksia, poista vanhempia tiedostoja Files-paneelista.

Poistaaksesi kaikki tallennetut piirustukset kerralla, käytä [WipeStorage](../wipestorage/)-komentoa.

## Tiedostonimet ja versiointi

Jokaisella tiedostolla on aikaleima nimessään (esim. `myplan_May22_14:30:00.dxf`). Tämä aikaleima lisätään automaattisesti, kun [tuot](../import/) tiedoston, varmistaen että saman lähdetiedoston tuominen uudelleen luo uuden merkinnän edellisen version korvaamisen sijaan.

## Liittyvät komennot

- [Import](../import/) — lataa piirustus tiedostojärjestelmästäsi selaimen tallennustilaan
- [Export](../export/) — lataa piirustus tiedostojärjestelmääsi
- [New File](../new-file/) — aloita tyhjä piirustus (tallennetaan myös automaattisesti)
- [WipeStorage](../wipestorage/) — tyhjennä kaikki tallennetut tiedostot selaimen tallennustilasta
