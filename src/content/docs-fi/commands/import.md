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
| Hatch | `HATCH` | Kuvion nimi, skaala ja kulma luetaan; nimi, jota ei ole kuviokirjastossasi, palautuu ANSI31:een. Katso [Hatch](../hatch/) |

Tasomääritykset ja linetype-taulukot tuodaan myös DXF-tiedostosta, kun niitä on olemassa.

Entiteetit, jotka käyttävät tukemattomia DXF-tyyppejä, ohitetaan hiljaisesti — piirustuksen loppuosa latautuu silti.

## Tiedoston nimeäminen ja tallennus

Tuotu tiedosto säilyttää alkuperäisen nimensä. Jos nimi on jo käytössä toisella tallennetulla piirustuksella, Finder/Explorer-tyylinen liite lisätään automaattisesti (`myplan (2)`, `myplan (3)`, …), jotta olemassa olevaa merkintää ei koskaan ylikirjoiteta. Voit nimetä tiedoston uudelleen jälkikäteen [File Managerista](../file-manager/#tiedoston-uudelleennimeäminen).

Piirustus tallennetaan automaattisesti selaimen tallennustilaan (IndexedDB) tuonnin jälkeen, joten se näkyy [File Manager](../file-manager/)-paneelissa ja säilyy sivun uudelleenlatausten yli.

## Mitä nykyiselle piirustukselle tapahtuu

Tuominen korvaa nykyisen piirtoalueen. Yhdistämistä tai lisäämistä ei tapahdu. Jos sinulla on tallentamattomia muutoksia, [vie](../export-manager/) nykyinen piirustus ensin.

## Käynnistyksessä

KulmanLab avaa automaattisesti uudelleen viimeksi muokatun tiedoston sivun latautuessa. Jos tallennettuja tiedostoja ei ole, oletusnäytepiirustus ladataan.

## Vianmääritys

| Ongelma | Todennäköinen syy | Korjaus |
|---------|-------------|-----|
| Piirtoalue on tyhjä tuonnin jälkeen | DXF-entiteetit käyttävät tukemattomia tyyppejä (esim. INSERT) | Entiteetit ohitettiin — terminaali listaa jokaisen ohitetun tyypin määrineen, esimerkiksi `Could not read INSERT: 12`. Tiedosto, joka ei ole lainkaan kelvollinen piirustus, ilmoittaa `Could not read <file>: not a valid drawing file` |
| Import-painike ei tee mitään | Selain esti tiedostovalitsimen | Napsauta painiketta uudelleen; jotkin selaimet vaativat uuden käyttäjäeleen |
| Mitat näyttävät väärältä | DXF työkalusta, joka kirjoittaa epästandardia mittageometriaa | Vie uudelleen lähdesovelluksesta nykyisellä DXF-versiolla |

## Liittyvät komennot

- [Export Manager](../export-manager/) — lataa nykyinen piirustus DXF- tai JSON-muodossa
- [File Manager](../file-manager/) — selaa ja palauta selaimeen tallennettuja piirustuksia
- [New File](../new-file/) — aloita tyhjä piirustus
