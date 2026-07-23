---
title: Import — Avaa DXF- tai JSON-tiedostoja KulmanLab CAD:issa
description: Käytä Import-komentoa avataksesi DXF- tai KulmanLab JSON-tiedostoja KulmanLab CAD:issa. Tukee viivoja, ympyröitä, kaaria, murtoviivoja, spline-käyriä, tekstiä, mittoja ja johtimia.
keywords: [tuo DXF-tiedosto, avaa DXF selaimessa, tuo CAD-tiedosto verkossa, avaa DXF-tiedosto, DXF-katselin selaimessa, tuo JSON CAD, KulmanLab tuonti, ilmainen CAD DXF-katselin, lataa piirustus, DXF selaimeen]
group: file
order: 1
---

# Import

Komento **Import** lataa olemassa olevan piirustuksen paikallisesta tiedostojärjestelmästäsi KulmanLab CAD:iin. Sekä standardi **DXF**-muoto että KulmanLabin oma **JSON**-muoto tuetaan.

## Näin tuot tiedoston

1. Napsauta **Import**-painiketta (kansiokuvake) File-paneelissa näytön yläosassa.
2. Selaimesi tiedostovalitsin avautuu. Siirry piirustustiedostoosi ja valitse se.
3. Piirustus latautuu välittömästi piirtoalueelle. Näkymäikkuna sovittaa kaikki entiteetit automaattisesti.

Vaihtoehtoisesti voit vetää ja pudottaa tiedoston suoraan piirtoalueelle.

## Tuetut tiedostomuodot

| Muoto | Tiedostopääte | Milloin käyttää |
|--------|-----------|-------------|
| **DXF** | `.dxf` | Piirustukset FreeCADista, LibreCADista tai muista CAD-työkaluista |
| **JSON** *(natiivi)* | `.json` | Aiemmin KulmanLab CAD:ista tallennetut piirustukset — täysi tarkkuus |

## Mitä tuodaan DXF:stä

KulmanLab jäsentää seuraavat DXF-entiteettityypit:

| Entiteettityyppi | DXF-koodi | Huomautuksia |
|-------------|----------|-------|
| Line | `LINE` | |
| Circle | `CIRCLE` | |
| Arc | `ARC` | |
| Ellipse | `ELLIPSE` | |
| Polyline | `LWPOLYLINE` | |
| Spline | `SPLINE` | |
| Text | `TEXT`, `MTEXT` | |
| Dimension | `DIMENSION` | |
| Multileader | `MULTILEADER` | |

Tasomääritykset ja linetype-taulukot tuodaan myös DXF-tiedostosta, kun niitä on olemassa.

Entiteetit, jotka käyttävät tukemattomia DXF-tyyppejä, ohitetaan hiljaisesti — piirustuksen loppuosa latautuu silti.

## Tiedoston nimeäminen ja tallennus

Kun tuot tiedoston, aikaleima lisätään tiedostonimeen (esimerkiksi `myplan_May22_14:30:00.dxf`). Tämä antaa sinun pitää useita versioita samasta piirustuksesta [Viimeisimmissä tiedostoissa](../files/) ilman nimiristiriitoja. Jos tiedostonimi jo sisältää aikaleiman, sitä käytetään sellaisenaan.

Piirustus tallennetaan automaattisesti selaimen tallennustilaan (IndexedDB) tuonnin jälkeen, joten se näkyy [Files](../files/)-paneelissa ja säilyy sivun uudelleenlatausten yli.

## Mitä nykyiselle piirustukselle tapahtuu

Tuominen korvaa nykyisen piirtoalueen. Yhdistämistä tai lisäämistä ei tapahdu. Jos sinulla on tallentamattomia muutoksia, [vie](../export/) nykyinen piirustus ensin.

## Käynnistyksessä

KulmanLab avaa automaattisesti uudelleen viimeksi muokatun tiedoston sivun latautuessa. Jos tallennettuja tiedostoja ei ole, oletusnäytepiirustus ladataan.

## Vianmääritys

| Ongelma | Todennäköinen syy | Korjaus |
|---------|-------------|-----|
| Piirtoalue on tyhjä tuonnin jälkeen | DXF-entiteetit käyttävät tukemattomia tyyppejä (esim. HATCH, INSERT) | Entiteetit ohitettiin — tarkista "no entities found" -viesti terminaalissa |
| Import-painike ei tee mitään | Selain esti tiedostovalitsimen | Napsauta painiketta uudelleen; jotkin selaimet vaativat uuden käyttäjäeleen |
| Mitat näyttävät väärältä | DXF työkalusta, joka kirjoittaa epästandardia mittageometriaa | Vie uudelleen lähdesovelluksesta nykyisellä DXF-versiolla |

## Liittyvät komennot

- [Export](../export/) — lataa nykyinen piirustus DXF- tai JSON-muodossa
- [Files](../files/) — selaa ja palauta selaimeen tallennettuja piirustuksia
- [New File](../new-file/) — aloita tyhjä piirustus
