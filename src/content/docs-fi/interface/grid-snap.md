---
title: Ruudukko ja Tarttuminen KulmanLab CAD:issa
description: KulmanLab CAD:in Ruudukko- ja Tarttuminen-kytkimet asettavat viitegridin piirtoalueelle ja lukitsevat kohdistimen liikkeen ruudukon pisteisiin. Ruudukon väli mukautuu automaattisesti nykyiseen zoomtasoon, joten se näyttää aina pyöreitä mallin arvoja.
keywords: [CAD-ruudukko, tartu ruudukkoon, ruudukon väli, piirtoapuvälineet, kulmanlab, ruudukon pisteet, ortogonaalinen tarttuminen]
group: interface
order: 1
---

# Ruudukko ja Tarttuminen

Kaksi kytkintä ohjauspalkissa antavat sinun asettaa viiteruudukon piirtoalueelle ja lukita kohdistimen sen leikkauspisteisiin piirtäessäsi.

| Painike | Mitä se tekee |
|--------|-------------|
| **Grid** | Näyttää visuaalisen piste- tai viivaruudukon piirtoalueella |
| **Snap** | Lukitsee kohdistimen lähimpään ruudukon pisteeseen, kun mikään geometrinen tarttumakohde ei ole lähempänä |

Kaksi kytkintä ovat riippumattomia toisistaan — voit näyttää ruudukon tarttumatta siihen, tarttua ilman ruudukon näyttämistä, tai käyttää molempia yhdessä.

## Ruudukon ja tarttumisen ottaminen käyttöön

Napsauta **Grid**- tai **Snap**-painiketta työkalurivillä. Aktiivinen tila korostetaan. Asetukset säilyvät istuntojen välillä.

Kun **Snap** on käytössä, ruudukko vaihtaa automaattisesti näytön viivoista **pisteiksi** — pisteet merkitsevät tarkat kohdat, joihin kohdistin tarttuu.

## Mukautuva ruudukon väli

Ruudukon väli säätyy automaattisesti zoomatessasi, jotta ruudukon viivat ovat aina miellyttävällä etäisyydellä toisistaan näytöllä (~40 px). Askel on aina "siisti" luku — 1:n, 2:n tai 5:n monikerta millä tahansa kymmenen potenssilla:

| Esimerkki zoom / mallin mittakaava | Ruudukon askel |
|---------------------------|-----------|
| Loitonnettu (suuri alue) | 100, 500, 1000 … |
| Keskitason zoom | 10, 20, 50 … |
| Lähennetty (hieno yksityiskohta) | 1, 2, 5 … |
| Erittäin lähellä | 0.1, 0.2, 0.5 … |

Tämä tarkoittaa, että jokainen tarttumapiste osuu pyöreään koordinaattiin mallitilassa — liukulukujen poikkeamia ei kerry.

## Tarttumisen prioriteetti

**Päätepiste- ja leikkauspistetarttuminen ovat aina ruudukkoa tärkeämpiä.** Kohdistin tarttuu ruudukon pisteeseen vain, kun se ei ole minkään geometrisen tarttumaehdokkaan (päätepiste, keskipiste, keskus tai leikkauspiste) lähellä.

Tämä tarkoittaa, että voit piirtää ruudukkoon tarttuminen käytössä ja silti tarttua tarkasti olemassa olevaan geometriaan, kun kohdistin kulkee tarpeeksi lähellä sitä. Ruudukko on varajärjestely, ei ohitusta.

## Asettelutila

- **Mallitila** — pisteet tai viivat täyttävät koko näkyvän piirtoalueen.
- **Asettelu (paperi)tila** — pisteet rajataan paperisuorakulmion sisään eivätkä ulotu sen ulkopuolelle.
- **Näkymäikkunan sisällä** — ruudukko seuraa mallin koordinaatistoa näkymäikkunan mittakaavassa, joten pisteet kohdistuvat samoihin malliyksiköihin näkymäikkunan suurennuksesta riippumatta.

## Tyypillinen työnkulku

1. Kytke **Grid** ja **Snap** päälle ennen säännöllistä väliä vaativan piirustuksen aloittamista.
2. Zoomaa tasolle, jossa ruudukon askel vastaa haluamaasi lisäystä (esim. zoomaa kunnes pisteet ovat 10 yksikön päässä toisistaan).
3. Piirrä — kohdistin tarttuu automaattisesti ruudukon pisteisiin. Olemassa oleva geometria tarttuu edelleen normaalisti, kun olet lähellä sitä.
4. Kytke **Snap** pois päältä, kun tarvitset vapaan kohdistimen liikkeen tai haluat tarttua vain geometriaan.
