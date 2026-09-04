---
title: "Näin valmistelet DXF-tiedoston laserleikkaukseen"
description: "Miksi leikkauspalvelut hylkäävät DXF-tiedostoja ja miten korjaat omasi — suljetut ääriviivat, yksiköt, leikkausrako ja tasot. Ilmaiseksi selaimessa."
keywords: [DXF laserleikkaus, DXF valmistelu laser, laserleikkaus tiedostomuoto, DXF hylätty laser, suljetut ääriviivat DXF, leikkausrako kerf, laserleikkaus tiedosto, DXF yksiköt laser, tasot leikkaus kaiverrus, ilmainen DXF-editori]
date: 2026-09-02
author: KulmanLab
tag: Opas
---

Laserleikkaukseen tarkoitettu DXF tarvitsee neljä asiaa: suljetut ääriviivat, oikeat yksiköt, pelkän leikattavan geometrian — ei mittoja, muistiinpanoja tai rasterointeja — sekä tasot, jotka erottavat leikkauksen, uurtamisen ja kaiverruksen. Tämä opas käy läpi jokaisen ja kertoo, miten tarkistat tiedostosi ennen kuin palvelu hylkää sen.

Kaiken tämän voit tehdä ilmaiseksi selaimessa osoitteessa [app.kulmanlab.com](https://app.kulmanlab.com): mitään ei tarvitse asentaa, tiliä ei tarvita, eikä tiedosto poistu koneeltasi. Juuri tätä työnkulkua varten KulmanLab alun perin rakennettiin, joten muihin CAD-tehtäviin liittyvät rajoitukset eivät suurimmaksi osaksi päde tässä: laserleikkaus on kaksiulotteista, ja DXF on juuri se, mitä leikkauspalvelut haluavat.

## Miksi tiedostoja hylätään

Viisi syytä kattaa lähes kaiken.

**Avoimet ääriviivat.** Muoto, joka näyttää suljetulta mutta jossa on hiuksenhieno rako kulmassa, ei ole alue vaan joukko toisiinsa liittymättömiä viivoja. Leikkauskoneiden on tiedettävä, mikä on sisällä ja mikä ulkona, eikä avoimella ääriviivalla ole sisäpuolta. Tämä on ylivoimaisesti yleisin hylkäyksen syy.

**Väärät tai epäselvät yksiköt.** DXF ei kirjaa luotettavasti, mitä sen luvut tarkoittavat. Sama tiedosto voi olla millimetreinä, senttimetreinä, tuumina tai jalkoina, eikä tiedosto useinkaan kerro kumpaa. Osa, joka saapuu 25,4 kertaa liian suurena tai pienenä, johtuu tästä.

**Kaikki muu kuin geometria.** Mitat, otsikkotaulut, muistiinpanot, rasteroinnit, apuviivat. Kone yrittää mielellään leikata myös merkintäsi.

**Kaksinkertaiset viivat.** Kaksi identtistä viivaa päällekkäin tarkoittaa, että laser kulkee saman reitin kahdesti: hukattua aikaa, kärventyneitä reunoja ja ohuessa materiaalissa tulipalon vaara.

**Kaikki yhdellä tasolla.** Jos leikkausta, uurtamista ja kaiverrusta ei ole erotettu, palvelu ei osaa erottaa niitä ja pyytää lähettämään uudelleen.

## Tiedoston valmistelu

Vedä `.dxf`-tiedostosi piirtoalueelle osoitteessa [app.kulmanlab.com](https://app.kulmanlab.com) tai käytä tiedostopaneelin **Import**-painiketta. Piirustus latautuu ja näkymä sovitetaan siihen.

**1. Katso, mitä sinulla oikeasti on.** Kirjoita `fit`, niin kaikki tulee näkyviin. Suurenna sitten jokaisen osan jokainen kulma — raot eivät näy koko piirustuksen mittakaavassa ja ovat ilmiselviä kymmenkertaisella suurennoksella. Juuri tämä tarkistus säästää sinut hylkäyssähköpostilta.

**2. Poista se, mitä ei pidä leikata.** Apuviivat, muistiinpanot, kehykset, mitat. `layer-isolate` näyttää yhden tason kerrallaan, ja näin löytyvät oikean geometrian alle piiloutuneet jäänteet.

**3. Sulje raot.** `trim` katkaisee ylitse jäävät päät siellä, missä kaksi viivaa risteää yli. Siellä missä viivat jäävät vajaiksi, vedä päätepisteen kahva naapurin päälle — kahvat tarttuvat, joten päät todella kohtaavat eivätkä vain lähes kohtaa.

**4. Tarkista mitat.** `distance` mittaa kahden pisteen väliä, `area` mittaa napsautetuista pisteistä muodostuvan suljetun alueen. Mittaa jokin kohde, jonka todellisen mitan tiedät. Jos ero on 25,4-kertainen, tiedostosi on väärässä yksikköjärjestelmässä.

**5. Erota leikkaus, uurtaminen ja kaiverrus.** Sijoita jokainen työvaihe omalle, selvästi nimetylle tasolleen: `CUT`, `SCORE`, `ENGRAVE`. Useimmat palvelut pyytävät joko tätä tai erillisiä tiedostoja. `layer-manager` luo ja määrittää ne.

Vie sitten: **Export** → **DXF**. KulmanLab kirjoittaa tavallista AC1032-DXF:ää, juuri sitä mitä leikkauspalvelut ja koneohjelmistot odottavat.

## Leikkausrako

Laser poistaa materiaalia leikatessaan — karkeasti 0,1–0,3 mm koneesta, materiaalista ja paksuudesta riippuen. Leikkaa 50 mm:n neliö, ja saat hitusen pienemmän neliön, eikä siihen puristussovitteella tarkoitettu osa mahdu.

Kaksi tapaa käsitellä tämä:

**Anna palvelun hoitaa.** Useimmat leikkauspalvelut kompensoivat leikkausraon itse, ja jos ne tekevät niin, oma kompensointisi tekee osista vääriä toiseen suuntaan. Kysy ennen kuin muutat mitään.

**Tee se itse.** `offset` luo muodosta yhdensuuntaisen kopion kiinteälle etäisyydelle — puolet leikkausraon leveydestä, ulospäin osille jotka pitää säilyttää mitassaan, sisäänpäin rei'ille. Se toimii viivoille, ympyröille, kaarille, ellipseille ja murtoviivoille. Se käsittelee yhtä kohdetta kerrallaan, joten se on käytännöllinen kourallisessa kriittisiä kohtia, ei kahdensadan osan levylle.

Jos toleranssilla on merkitystä, leikkaa koekappale ennen kuin sidot materiaalia.

## Mitä DXF-viennistä kannattaa tarkistaa

Hyvä tietää ennen kuin luotat siihen:

- **Poista merkintöjen rasti sen sijaan että poistaisit ne.** Teksti, mitat, osoitusviivat ja rasteroinnit viedään nyt kaikki, joten kaikki piirustukseen jätetty päätyy tiedostoon. Poistaa ei tarvitse: Export Manager luettelee jokaisen objektityypin omalla valintaruudullaan, joten poistamalla rastit kohdista Text, mittarivit, Leaders ja Hatches saat DXF:n jossa on leikkausgeometria eikä muuta — piirustus itse pysyy koskemattomana.
- **Teksti tulee ulos `MTEXT`-muodossa, eikä se ole sama asia kuin kaiverrettava geometria.** Kirjaimet viedään muotoiluineen, mutta moni konesovellus haluaa kaiverrustasolle ääriviivat elävän tekstin sijaan. Tarkista, mitä omasi hyväksyy, ennen kuin suunnittelet kaiverrusta sen varaan.
- **Lohkoviittauksia ei tuoda.** Toistuvista lohkosymboleista rakennettu piirustus tulee sisään vaillinaisena, joten tarkista osamäärä alkuperäistä vasten.

Splinit sen sijaan *viedään*. Jotkin koneohjelmistot käsittelevät niitä huonosti ja suosivat murtoviivoja — jos omasi on sellainen, piirrä käyrät uudelleen murtoviivoina tai kaarina.

## Varoitus automatiikasta

KulmanLabissa **ei ole esitarkistusta**. Mikään ei etsi avoimia ääriviivoja, kaksinkertaisia viivoja tai yksikköongelmia ja ilmoita niistä. Yllä olevat tarkistukset ovat käsityötä: suurenna, mittaa, katso.

Se käy kourallisesta osia ja on uuvuttavaa täyteen aseteltuun levyyn. Jos tuotat levyjä säännöllisesti, automaattisella tarkistuksella varustettu työkalu palvelee sinua paremmin — ja yksittäisissä osissa, mikä on useimpien tilanne useimmiten, tiedoston huolellinen katsominen löytää samat ongelmat.

## Ennen lähettämistä

- Jokainen leikkausääriviiva suljettu — kulmat tarkistettu suurella suurennoksella
- Yksi tunnettu mitta mitattu ja oikein
- Ei jäljellä mittoja, muistiinpanoja, kehyksiä tai apugeometriaa
- Ei päällekkäisiä kaksoisviivoja
- Leikkaus, uurtaminen ja kaiverrus erillisillä, selvästi nimetyillä tasoilla
- Leikkausrako: joko huomioitu tai tietoisesti jätetty palvelun tehtäväksi
- Viety DXF:nä ja avattu kerran uudelleen sen varmistamiseksi, että kaikki näyttää oikealta

Viimeinen kohta vie kymmenen sekuntia ja löytää vientiyllätykset ennen palvelua.

---

*Aiheeseen liittyvää: [Import](/fi/docs/commands/import/) kertoo mitä KulmanLab lukee DXF:stä, [Export Manager](/fi/docs/commands/export-manager/) mitä kukin vientimuoto sisältää, [Offset](/fi/docs/commands/offset/) leikkausraon kompensointiin ja [LayerManager](/fi/docs/commands/layer-manager/) leikkaus- ja kaiverrustasojen luomiseen.*
