---
title: Hatch-komento — Täytä alue kuviolla
description: Hatch-komento täyttää klikatun pisteen ympäröivän alueen kuviolla — mikä tahansa viivojen, kaarien, ellipsien ja splinien yhdistelmä, joka sulkeutuu, ympäröi alueen, ja jokainen sen sisällä oleva suljettu muoto jää täyttämättömäksi saareksi.
keywords: [CAD hatch-komento, täytä alue CAD, hatch-kuvio CAD, ANSI31, SOLID-täyttö, rajaustäyttö CAD, DXF HATCH-entiteetti, kulmanlab]
group: shapes
order: 7
---

# Hatch

`Viivoitus`-komento täyttää klikatun pisteen ympäröivän alueen kuviolla. Rajaa ei piirretä ensin — se muodostuu siitä, mitä piirtoalueella jo on, joten neljä erillistä [Linea](../line/), jotka kohtaavat päästä päähän, ympäröivät alueen aivan kuten suljettu [Polyline](../polyline/) tekee, ja mikä tahansa suljettu muoto sisällä muuttuu saareksi, jonka täyttö jättää koskematta.

## Alueen täyttäminen

1. Kirjoita `Viivoitus` päätteeseen tai napsauta työkalurivin **Hatch**-painiketta (kuvion kuvake).
2. **Napsauta pistettä** täytettävän alueen sisällä.
3. Komento pysyy aktiivisena, joten jatka napsautusta täyttääksesi lisää alueita — jokainen napsautus luo oman `Hatch`-entiteettinsä.
4. Paina **Enter**, **Space** tai **Escape**, kun olet valmis.

```
  ┌─────────────┐        ┌─────────────┐
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│
  │   ○         │  --->  │▓▓▓( )▓▓▓▓▓▓▓│   napsauta ulomman
  │             │        │▓▓▓▓▓▓▓▓▓▓▓▓▓│   rajan sisällä; ympyrä
  └─────────────┘        └─────────────┘   jää saareksi
```

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Lopeta Hatch-komento |
| `Escape` | Lopeta Hatch-komento (sama kuin Enter/Space) |

## Mikä voi muodostaa rajan

Mikä tahansa näiden entiteettityyppien yhdistelmä voi muodostaa rajan, missä tahansa yhdistelmässä, kunhan ne yhdistyvät päästä päähän ilman aukkoa:

- [Line](../line/)
- [Arc](../arc/)
- [Circle](../circle/) (oma suljettu rajansa)
- [Ellipse](../ellipse/) (suljettu, tai avoin elliptinen kaari osana suurempaa silmukkaa)
- [Polyline](../polyline/) (avoin tai suljettu) ja [Rectangle](../rectangle/)
- [Spline CV / Spline Fit](../spline-cv/)

Text-, Multileader- ja Dimension-entiteettejä ei koskaan käsitellä rajoina.

## Saaret

Mikä tahansa täysin suljettu asia napsauttamasi alueen sisällä — ympyrä, suljettu polyline, toisen hatchin raja — muuttuu **saareksi**: täyttö pysähtyy sen reunaan, ja saari itse jää tyhjäksi. Aseta suljettu muoto toisen suljetun muodon sisään, ja täyttö vuorottelee, reikä täytön sisällä reiän sisällä, noudattaen samaa sisä-/ulkopuoli-sääntöä joka tasolla.

## Kun napsautus epäonnistuu

Jos napsauttamasi piste ei ole ympäröity tai rajassa on aukko, pääte selittää miksi sen sijaan, että se ei tekisi mitään hiljaa:

| Viesti | Merkitys |
|--------|----------|
| "no boundary found" | Mihinkään suuntaan napsautetusta pisteestä ei osunut mihinkään — lähellä ei ole lainkaan rajaa |
| "point is not enclosed" | Lähellä on raja, mutta sen muodostama muoto ei sisällä napsauttamaasi pistettä |
| "boundary is open" | Lähimmässä rajassa on aukko jossain — jäljitä se ja tarkista, että jokainen liitos on tarkka |
| "boundary too complex" | Rajasilmukkaa ei voitu sulkea kulkurajan puitteissa — yleensä päällekkäisten entiteettien sekamelska |

Komento pysyy aktiivisena epäonnistuneen napsautuksen jälkeen — lue viesti, korjaa piirustus tai napsauta jotain muuta, ja yritä uudelleen.

## Kuvion valitseminen

Jokainen uusi hatch alkaa täytettynä `ANSI31`-kuviolla (tai millä kuviolla tahansa, jota *viimeksi* muokkaamasi hatch käytti) — kuvion valitsinta ei ole ennen piirtämistä. Käyttääksesi toista kuviota:

1. Valitse olemassa oleva hatch ja avaa sen **Pattern**-kenttä ominaisuuspaneelissa — tämä avaa kuvionvalitsimen, ruudukon nimettyjä näytteitä ryhmiteltynä sen mukaan, mistä kukin kuvio on peräisin.
2. Napsauta kuviota ottaaksesi sen käyttöön — täyttö päivittyy heti.

Tästä valinnasta tulee myös oletus *seuraavalle* hatchille, jonka luot `Viivoitus`-komennolla, samalla tavalla kuin tason tai värin valinta siirtyy eteenpäin. Joten täyttääksesi useita uusia alueita tietyllä kuviolla: täytä yksi alue, aseta sen kuvio kerran, ja jatka hatchaamista — jokainen sen jälkeinen täyttö alkaa jo kyseisellä kuviolla käytössä.

Katso [Hatch Manager](../hatch-manager/) ladataksesi omia `.pat`-kuviotiedostojasi ja selataksesi koko kirjastoa.

**SOLID** on tavallinen merkintä kuvioluettelossa, ei erillinen valintaruutu tai tila — valitse se samalla tavalla kuin valitsisit ANSI31:n tai minkä tahansa muun nimetyn kuvion.

## Ominaisuudet

| Ominaisuus | Merkitys |
|------------|----------|
| Pattern | Kuvion nimi, jaetusta kuviosanastosta (katso [Hatch Manager](../hatch-manager/)) |
| Pattern Scale | Skaalaa kuvion viivojen väliä — suuremmat arvot levittävät kuvioviivat kauemmas toisistaan |
| Pattern Angle | Kiertää kuviota rajasta riippumatta |
| Origin X / Origin Y | Mihin kuvion oma toisto on ankkuroitu, piirustuksen koordinaateissa |

Hatchin siirtäminen, kiertäminen, peilaaminen tai skaalaaminen vie sen kuvion sijoittelun mukanaan, joten täyttö pysyy rajan kanssa kohdistettuna — sinun ei tarvitse asettaa skaalaa tai kulmaa uudelleen muunnoksen jälkeen.

## Rajan kahvamuokkaus

Valittu hatch tarttuu rajaansa samalla tavalla kuin Polyline tarttuu kärkipisteisiinsä — kahva jokaisessa kulmassa, jossa kaksi reunaa kohtaavat, ja yksi jokaisen reunan keskellä (suljettu silmukka, kuten ympyrän tai ellipsin hatch, tarttuu sen sijaan neljästä akselipisteestään).

| Kahva | Mitä se tekee |
|-------|----------------|
| **Kulma** | Siirtää tuota kulmaa. Suora reuna seuraa tarkasti; kaari sovitetaan uudelleen jatkaakseen kulkuaan molempien naapuriensa kautta; ellipsi- tai spline-reuna voi laskeutua vain jonnekin omalle käyrälleen, joten kulma napsahtaa sen lähimpään pisteeseen |
| **Reunan keskikohta — viiva-, ellipsi- tai spline-reuna** | Liu'uttaa koko reunan; molemmin puolin olevat reunat leikataan tai jatketaan pysymään yhdistettyinä siihen |
| **Reunan keskikohta — kaarireuna** | **Taivuttaa** kaaren kursorin läpi sen liu'uttamisen sijaan — molemmat päät pysyvät tarkalleen paikoillaan, eikä mikään muu rajassa liiku |
| **Keskipiste** (koko hatch) | Aktivoi [Move](../move/)-komennon koko hatchille |

Vetoesikatselu näyttää rajan katkoviivakonttuurina täytön sijaan kun vedät — alkuperäinen täyttö pysyy näkyvissä alla, kunnes päästät irti, koska esikatselu voi vain maalata sen päälle, mitä jo on, ei koskaan poistaa siitä mitään.

## DXF — HATCH-entiteetti

Hatchit **tuodaan** `HATCH`-entiteeteistä: KulmanLab lukee rajageometrian sekä kuvion nimen, skaalan ja kulman (DXF-ryhmäkoodit 70/41/52) — se **ei** lue kuvion omia viivamäärityksiä, jotka on upotettu tiedostoon. Sen sijaan kuvion nimi haetaan KulmanLabin omasta kuviokirjastosta (sisäänrakennetut oletukset plus mitä tahansa, mitä olet ladannut [Hatch Manager](../hatch-manager/)issa). Nimi, jota ei ole kirjastossasi, palautuu ANSI31:een, jotta piirustus näyttää edelleen hatchatulta, ja huomautus kirjataan kerran.

Muiden sovellusten kirjoittamia spline-rajattuja silmukoita (DXF-rajareunatyyppi 4) ei vielä lueta.

Rasteroinnit **viedään** DXF:ään `HATCH`-objekteina. Reunasilmukat lähtevät mukanaan kuvion nimi (ryhmäkoodi 2), täytelippu (70) sekä tämän rasteroinnin oma kulma ja mittakaava (52/41) — ja toisin kuin tuonnissa, myös kuvion ratkaistut viivamääritykset kirjoitetaan tiedostoon (78, mukana 53/43/44/45/46/79/49). Epäsymmetria on tarkoituksellinen: KulmanLab osaa etsiä nimen omasta kirjastostaan, mutta tiedoston vastaanottavalla sovelluksella ei ehkä ole kyseistä kuviota, joten viivat matkaavat mukana.

## Liittyvät komennot

- [Hatch Manager](../hatch-manager/) — selaa kuviokirjastoa ja lataa `.pat`-tiedostoja
- [Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/), [Scale](../scale/) — kaikki vievät hatchin kuvion sijoittelun mukanaan
- [Delete](../delete/) — poistaa hatchin vaikuttamatta entiteetteihin, jotka muodostivat sen rajan
