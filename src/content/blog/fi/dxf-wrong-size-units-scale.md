---
title: "Miksi DXF aukesi väärän kokoisena (ja miten sen korjaat)"
description: "DXF joka aukeaa 25,4 kertaa liian pienenä tai 1000 kertaa liian suurena on yksikköjen sekaannus, ei rikkinäinen tiedosto. Näin tunnistat suhteen, skaalaat ja tarkistat."
keywords: [DXF väärä mittakaava, DXF väärä koko, DXF yksiköt, DXF millimetrit vai tuumat, DXF tuotu liian pienenä, DXF skaalauskerroin, DXF 25.4, korjaa DXF mittakaava, DXF yksiköt eivät täsmää, skaalaa DXF uudelleen]
date: 2026-09-04
author: KulmanLab
tag: Opas
---

DXF aukeaa, ja osa jonka pitäisi olla 40 mm leveä mittaa 1,575. Tai pohjapiirustus saapuu kokonaisen korttelin kokoisena. Tiedosto ei ole rikki eikä kukaan tehnyt mitään väärin — piirustus on oikein, ja matkalla katosi sen mukana kulkenut luku.

Tämä kannattaa ymmärtää ennen kuin skaalaat mitään, sillä korjaus vie kymmenen sekuntia heti kun tiedät minkä suhteen kanssa olet tekemisissä, ja arvailu on tapa leikata väärä mitta kahdesti.

## DXF tuskin kantaa yksiköitä lainkaan

DXF tallentaa koordinaatit paljaina lukuina. Viiva pisteestä `0,0` pisteeseen `40,0` on neljäkymmentä *jotakin* pitkä. Muoto ei liitä koordinaattiin yksikköä, eikä sille olisi paikkaakaan — luku *on* geometria.

Lähin vastine on otsikkomuuttuja nimeltä `$INSUNITS`, yksi koodi koko tiedostolle: `1` tuumille, `4` millimetreille, `6` metreille ja niin edelleen. Kaksi asiaa tekee siitä heikomman kuin miltä kuulostaa. Se on yksi arvo koko piirustukselle, joten se ei kykene kuvaamaan sekalaisista lähteistä koottua tiedostoa. Ja se on ohje, ei lupaus: monet sovellukset lukevat sen vain *lisätessään* yhden piirustuksen toiseen ja jättävät sen kokonaan huomiotta kun avaat tiedoston tavalliseen tapaan — sillä järkevällä perusteella, että piirustuksen avaaja yleensä tietää mitä on piirtänyt.

Niinpä "40" matkaa vahingoittumattomana ja "millimetri" ei. Jokainen väärän kokoinen DXF jonka koskaan saat, on juuri tuo lause.

## Tunnista ensin suhde

Mittaa jokin kohde jonka todellisen koon todella tiedät — reiän halkaisija, levyn reuna, standardin mukainen kiinnitysväli. Jaa koko joka sen pitäisi olla mitatulla koolla. Tulos on lähes aina jokin näistä:

| Suhde | Mitä on tapahtunut |
|---|---|
| **25,4** | Piirretty tuumina, luetaan millimetreinä |
| **0,03937** | Piirretty millimetreinä, luetaan tuumina |
| **1000** | Piirretty metreinä, luetaan millimetreinä |
| **0,001** | Piirretty millimetreinä, luetaan metreinä |
| **12** | Jalat luetaan tuumina |
| **304,8** | Jalat luetaan millimetreinä |

Jos lukusi on taulukossa, kyse on yksikköjen sekaannuksesta eikä mistään muusta, ja loppu vie minuutin.

Jos se ei ole — vaikkapa 1,37 tai 3,2 — pysähdy. Kyse ei ole yksiköistä, ja skaalaaminen tuottaa piirustuksen joka on väärässä paljon vaikeammin havaittavalla tavalla. Hyppää viimeiseen osioon.

## Korjaus

Tarvitset jotain jolla mitata ja jotain jolla skaalata. Mikä tahansa CAD-työkalu tekee sen; tässä se on [KulmanLabissa](https://kulmanlab.com/fi/), joka avaa DXF:n selaimen välilehdellä ilman asennuksia:

1. Avaa tiedosto — raahaa se sivulle tai käytä [Import](/fi/docs/commands/import/)-komentoa.
2. Aja [Distance](/fi/docs/commands/distance/) ja valitse tuntemasi kohteen kaksi päätä. Tarttuminen ratkaisee tässä: ota todelliset päätepisteet, älä jotain niiden läheltä, tai paistat oman virheesi kertoimeen.
3. Jaa. Tunnettu koko ÷ mitattu koko. 40 mm reikä joka näyttää 1,575 antaa 40 ÷ 1,575 ≈ **25,4**.
4. Valitse kaikki, aja [Scale](/fi/docs/commands/scale/), valitse peruspiste ja kirjoita kerroin.

Peruspiste pysyy paikallaan kun kaikki muu liikkuu, joten sijoita se paikkaan josta osaat päätellä — kappaleen kulmaan tai origoon. Piirustukselle joka on lähdössä leikattavaksi origo on yleensä järkevä valinta.

Tässä auttaa se, ettei KulmanLabilla ole omaa yksikköasetusta. Koordinaatit ovat pelkkiä lukuja, ja juuri siinä tilassa haluat piirustuksen olevan silloin kun selvität mitä sen luvut tarkoittavat. Mitään muunnosta ei tapahdu selkäsi takana eikä ole mitään mitä vastaan taistella.

## Tarkista korjaus ennen kuin luotat siihen

Mittaa *toinen* kohde muualta piirustuksesta, jonka todellisen koon myös tiedät. Ja tarkista se.

Tämän vaiheen ihmiset ohittavat, ja se on ainoa joka nappaa ikävän tapauksen. Jos toinen mittaus osuu nyt oikein, piirustus oli tasaisesti väärissä yksiköissä ja on nyt tasaisesti oikeissa. Valmis.

Jos toinen mittaus on *yhä* väärin, ja väärin eri määrällä, kyse ei ollut koskaan yksinkertaisesta yksikkösekaannuksesta. Skaalasit juuri piirustuksen joka on ristiriidassa itsensä kanssa, mikä on huonompi kuin lähtötilanne, koska virhe ei ole enää siisti suhde jonka joku voisi huomata.

[Area](/fi/docs/commands/area/) on tässä hyödyllinen toinen mielipide, erityisesti levytavaralla. Pinta-ala skaalautuu kertoimen *neliönä*, joten 25,4:n pituusvirhe ilmenee 645:n pinta-alavirheenä — ero josta on vaikea puhua itseään ulos.

## Näin vältät sen ensi kerralla

Yksiköt katoavat ihmisten välissä, joten ratkaisukin asuu siellä.

**Kerro yksikkö kun lähetät tiedoston.** Yksi rivi viestissä. "Kaikki mitat millimetreinä." Ei maksa mitään ja poistaa koko ongelman.

**Lähetä mukana vertailumitta.** Kerro yksi todellinen mitta — "ulompi levy on 300 mm leveä". Nyt vastaanottaja voi varmistaa tiedoston sen sijaan että olettaisi, ja jos jokin sittenkin meni pieleen, hän korjaa sen minuutissa palaamatta sinun luoksesi.

**Kysy, kun olet itse vastaanottaja.** Jos tiedosto saapuu ilman ilmoitettuja yksiköitä ja olet leikkaamassa materiaalia, yksi viesti on halvempi kuin yksi pilalle mennyt levy.

**Piirrä niissä yksiköissä joita tuotoksesi odottaa.** Laserleikkaus, CNC ja useimmat valmistusketjut odottavat millimetrejä. Jos tiedosto menee sinne, piirrä millimetreinä, eikä jäljelle jää muunnosta jonka voisi tehdä väärin. Katso [DXF:n valmistelu laserleikkaukseen](/fi/blog/prepare-dxf-for-laser-cutting/).

## Kun kyse ei ole yksiköistä

Jos suhteesi ei ollut siisti yksikkömuunnos, todennäköiset syyt ovat luonteeltaan toisenlaisia:

- **Piirustus sekoittaa mittakaavoja.** Joku piirsi osan mittakaavassa 1:1 ja liitti siihen yksityiskohdan 1:5, tai lohko lisättiin skaalauskertoimella eikä sitä koskaan korjattu. Korjaa se geometria joka on vialla, ei koko tiedostoa.
- **Mittasit paperitilan geometriaa.** Nimiö tai merkintäkehys piirretään arkin kokoisena, ei mallin kokoisena. Mittaa jotain joka kuuluu itse kohteeseen.
- **Mittasit väärää asiaa.** Nimellinen 40 mm reikä voi olla piirretty 39,8:aan sovitteen vuoksi, ja "300 mm" levy voi olla 300 sellaisen huullokseen ulkoreunaan asti jota et näe. Valitse kohde jonka reuna on yksiselitteinen.

Jokaisessa näistä vastaus on selvittää mikä piirustus todella on, ei skaalata sitä. Piirustus jonka osat ovat keskenään ristiriidassa jatkaa materiaalisi syömistä siihen asti kunnes joku avaa sen ja katsoo.

---

*Aiheeseen liittyvää: [Distance](/fi/docs/commands/distance/) mittaamiseen, [Scale](/fi/docs/commands/scale/) korjaukseen, [Area](/fi/docs/commands/area/) toiseksi mielipiteeksi ja [Export Manager](/fi/docs/commands/export-manager/) siihen mitä kukin muoto kantaa mukanaan kun lähetät tiedoston takaisin.*
