---
title: "DXF vai DWG: mikä ero niillä on?"
description: "DWG on AutoCADin oma muoto, DXF avoin vaihtomuoto. Mikä todella eroaa, kumpaa tarvitset ja miten saat DXF:n, kun sinulle lähetettiin DWG."
keywords: [DXF vai DWG, DXF ja DWG ero, DWG vai DXF, mikä on DWG, mikä on DXF, DWG DXF muunnos, CAD-tiedostomuodot, avaa DWG-tiedosto, DXF-muoto, kumpi CAD-muoto]
date: 2026-09-02
author: KulmanLab
tag: Opas
---

DWG on AutoCADin oma tiedostomuoto: binäärinen, suljettu eikä Autodeskin dokumentoima. DXF puolestaan on vaihtomuoto, jonka Autodesk julkaisee, jotta muutkin ohjelmat voivat lukea samat piirustukset. Sama geometria, eri astia — ja vain toinen niistä on tarkoitettu tiedostojen luovuttamiseen ihmisille oman ohjelmistosi ulkopuolella.

Juuri tuo viimeinen kohta on koko käytännön ero, ja se ratkaisee, mitä sinun kannattaa pyytää.

## Lyhyesti

| | DXF | DWG |
|---|---|---|
| Lyhenne sanoista | Drawing Exchange Format | Drawing |
| Julkaistu määrittely | Kyllä, Autodeskilta | Ei |
| Koodaus | Teksti (myös binäärimuunnelma) | Binäärinen |
| Tarkoitus | Piirustusten siirto ohjelmien välillä | AutoCADin oma työmuoto |
| Tiedostokoko | Suurempi | Pienempi |
| Muiden ohjelmistojen lukema | Hyvin laajasti | Epätasaisesti, takaisinmallinnettujen kirjastojen kautta |
| Kantaa kaiken, mihin AutoCAD pystyy | Ei — dokumentoidun osajoukon | Kyllä |

## Miksi muotoja on ylipäätään kaksi

Autodesk julkaisi AutoCADin vuonna 1982 DWG työmuotonaan. Se on rakennettu yhden ohjelman mukavuutta varten: tiivis, binäärinen ja vapaasti muuttuva aina kun AutoCAD sitä tarvitsee.

Juuri siksi se on huono asia lähetettäväksi kenellekään. Niinpä Autodesk julkaisi myös DXF:n — saman piirustuksen kirjoitettuna dokumentoituun, luettavaan muotoon, jota vasten kuka tahansa kehittäjä voi toteuttaa. Avaa `.dxf` tekstieditorissa, niin näet ryhmäkoodit ja osioiden nimet tavallisena ASCII-tekstinä.

Näitä kahta versioidaan rinnakkain. Jokainen AutoCAD-julkaisu tuo DWG-revision ja sitä vastaavan DXF-revision; tiedoston otsakkeessa toisinaan näkyvä merkintä `AC1032` viittaa esimerkiksi AutoCAD 2018 -sukupolveen.

DXF ei siis ole vanhempi eikä vähäisempi muoto. Se on sama piirustus, tarkoituksella luettavaksi tehtynä.

## Mikä käytännössä eroaa

**Avoimuus.** Autodesk dokumentoi DXF:n eikä dokumentoi DWG:tä. DWG:tä lukevat ohjelmat — ja niitä on paljon — nojaavat kirjastoihin, jotka ovat syntyneet muodon takaisinmallinnuksesta. Se toimii hyvin ja on täysin laillista, mutta tarkoittaa, että DWG-tuki laahaa uusien versioiden perässä ja vaihtelee sovelluksittain, kun taas DXF-tuen voi kuka tahansa toteuttaa suoraan määrittelystä.

**Koko.** Binäärinen DWG on tavallisesti huomattavasti pienempi kuin sama piirustus ASCII-DXF:nä. Isossa projektissa sillä on väliä; yksittäisessä osassa ei.

**Uskollisuus.** DWG pitää sisällään kaiken, mitä AutoCAD osaa ilmaista, mukaan lukien oliotyypit, joista muilla ohjelmilla ei ole mitään käsitystä. DXF kattaa dokumentoidun osajoukon. Tavalliseen 2D-piirtämiseen — viivat, kaaret, ympyrät, murtoviivat, teksti, mitat, tasot — tuo osajoukko on kaikki mitä tarvitset. Malli, joka nojaa AutoCADin omiin olioihin, menettää osan niistä DXF:ään vietäessä.

**Tuen laajuus.** Käytännössä jokainen CAD-, CAM- ja vektorityökalu lukee DXF:ää. Harvempi lukee DWG:tä, ja nekin tukevat sitä usein vajavaisemmin.

## Kumpaa oikeasti tarvitset?

**Sinulle lähetettiin tiedosto, etkä saa sitä auki.** Tarkista ensin todellinen tiedostopääte. Useimmat sanovat kumpaakin "DWG":ksi, ja puolet kerroista latauskansiossasi on `.dxf`, jonka olisit voinut avata jo valmiiksi. Katso [DXF:n avaaminen ilman AutoCADia](/fi/blog/open-dxf-file-without-autocad/).

**Lähetät laserleikkaukseen, CNC-pajalle tai valmistajalle.** DXF, käytännössä aina. Koneohjelmistot ja leikkauspalvelut on rakennettu sen ympärille, ja kaksiulotteinen leikkausgeometria mahtuu mukavasti dokumentoituun osajoukkoon. Katso [DXF:n valmistelu laserleikkaukseen](/fi/blog/prepare-dxf-for-laser-cutting/).

**Lähetät arkkitehdille tai insinöörille, joka työskentelee AutoCADilla.** Kysy. Moni suosii DWG:tä, koska työnkulku olettaa sitä, ja ellei niin ole, he avaavat DXF:n vallan mainiosti.

**Arkistoit jotain pitkäksi aikaa.** DXF. Dokumentoitu tekstimuoto on kahdenkymmenen vuoden päästäkin luettavissa sille, jolla on määrittely ja tekstieditori. Juuri tästä syystä vaihtomuotoja on olemassa.

**Joku haluaa vain katsoa sitä.** Ei kumpaakaan — lähetä PDF. Katso [DXF:n muuntaminen PDF:ksi](/fi/blog/convert-dxf-to-pdf/).

## Miten saat DXF:n, kun sinulle lähetettiin DWG

Luotettava tapa on pyytää. Tiedoston lähettänyt avaa sen omassa CAD-ohjelmassaan ja tekee *Tallenna nimellä* tai *Vie* → DXF. Siihen menee kymmenkunta sekuntia, jokainen työpöydän CAD-sovellus osaa sen, ja tiedosto tulee siitä ohjelmistosta, joka sen loi, eikä kolmannen osapuolen arvauksesta sen suhteen.

Jos kysyminen ei onnistu, muuntimia on. Kaksi punnittavaa asiaa: juuri muunnoksessa uskollisuus menetetään, ja lataat toisen ihmisen piirustuksen palveluun, jota et hallitse. Harrasteprojektissa se käy. Asiakastyössä: kysy.

Kun pyydät, kannattaa mainita versio. **DXF R12 on turvallisin** — ikivanha, tuettu kaikkialla, ja jos piirustus on tavallista 2D-geometriaa, mitään olennaista ei katoa. Erityisesti vanhempi koneohjelmisto viihtyy sen kanssa paljon paremmin.

## Kaksi asiaa, jotka ymmärretään väärin

**"DXF on häviöllinen."** Vain siinä mielessä, ettei se kanna AutoCADin omia oliotyyppejä. Viivat, kaaret, ympyrät, murtoviivat, teksti, mitat ja tasot menevät läpi ehjinä. Kaksiulotteisessa piirustustyössä häviö on yleensä nolla.

**"DXF on se vanha muoto."** Sitä on versioitu DWG:n rinnalla vuodesta 1982 ja versioidaan yhä. Sekaannus johtuu siitä, että R12:ta käytetään yhteensopivuustavoitteena niin laajalti, että sen oletetaan olevan DXF:n päätepiste.

## Mihin tämä työkalu asettuu

[KulmanLab](https://kulmanlab.com/fi/) lukee **DXF:ää, ei DWG:tä** — ja syy kannattaa sanoa ääneen sen sijaan että sitä kohdeltaisiin puutteena: DXF on dokumentoitu, joten toteutus voi olla oikea pelkästään määrittelyä lukemalla. DWG tarkoittaisi nojaamista takaisinmallinnettuun kirjastoon, selaimen sisällä, muodolle joka muuttuu Autodeskin aikataulussa.

Jos sinulla on `.dwg`, tämä ei avaa sitä. Jos sinulla on `.dxf`, avaat sen selaimen välilehdessä ilman asennuksia: [app.kulmanlab.com](https://app.kulmanlab.com).

Ulos se kirjoittaa koko piirustuksen — viivat, ympyrät, kaaret, ellipsit, murtoviivat, splinit, tekstin muotoiluineen, mitat, osoitusviivat ja rasteroinnit sekä tasot ja viivatyypit. Täällä avattu ja uudelleen viety tiedosto lähtee merkintöineen, ei pelkäksi geometriaksi riisuttuna.

---

*Aiheeseen liittyvää: [Import](/fi/docs/commands/import/) siitä, mitä KulmanLab tarkalleen lukee DXF:stä, ja [Export Manager](/fi/docs/commands/export-manager/) siitä, mitä kukin vientimuoto sisältää.*
