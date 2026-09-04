---
title: "Näin avaat DXF-tiedoston ilman AutoCADia"
description: "Sinulle lähetettiin .dxf-tiedosto, eikä AutoCADia ole? Avaa se ilmaiseksi selaimessa ilman asennusta — lisäksi työpöytävaihtoehdot ja apu tyhjiin piirustuksiin."
keywords: [avaa DXF-tiedosto, avaa DXF ilman AutoCADia, ilmainen DXF-katseluohjelma, katso DXF verkossa, avaa DXF selaimessa, DXF viewer ilmainen, miten avata DXF, lue DXF-tiedosto, DXF vai DWG, avaa DXF Macilla]
date: 2026-08-31
author: KulmanLab
tag: Opas
---

Avataksesi DXF-tiedoston ilman AutoCADia vedä se selaimessa toimivaan CAD-editoriin — mitään ei tarvitse asentaa eikä tiliä luoda. Myös ilmaiset työpöytäohjelmat, kuten LibreCAD ja QCAD, avaavat DXF-tiedostoja. Tämä opas käy läpi molemmat reitit sekä sen, mitä tehdä, kun piirustus avautuu tyhjänä, pienenpienenä tai ilman tekstejä.

Kehitämme yhtä alla mainituista työkaluista — [KulmanLab](https://kulmanlab.com/fi/) — joten pidä sitä osiota puolueellisena, ja siinä lueteltuja rajoituksia kohtana, jossa meidän oli pakko olla rehellisiä.

## Mikä DXF-tiedosto oikeastaan on

DXF tulee sanoista *Drawing Exchange Format* (piirustusten vaihtomuoto). Autodesk loi sen, jotta CAD-ohjelmat voisivat välittää piirustuksia toisilleen, ja se on tarkoituksella avoin ja tekstipohjainen — voit kirjaimellisesti avata `.dxf`-tiedoston tekstieditorissa ja lukea sen.

Juuri tämä avoimuus on syy siihen, että vaihtoehtoja on. DXF ei ole sidottu mihinkään yksittäiseen ohjelmaan, ja kymmenet työkalut osaavat lukea sitä.

Se on myös syy siihen, ettei DXF ole kuva. Se tallentaa geometriaa — viivoja, kaaria, ympyröitä, tasoja, mittoja — ei pikseleitä. Nimen muuttaminen muotoon `.jpg` ei saa sitä avautumaan kuvankatseluohjelmassa.

## Vaihtoehto 1: avaa se selaimessa

Nopein reitti, koska mitään ei tarvitse ladata eikä rekisteröityä.

1. Siirry osoitteeseen [app.kulmanlab.com](https://app.kulmanlab.com).
2. Vedä `.dxf`-tiedosto suoraan piirtoalueelle — tai käytä tiedostopaneelin **Import**-painiketta (kansiokuvake).
3. Piirustus latautuu ja näkymä sovitetaan siihen automaattisesti.

Tiedostosi ei poistu koneeltasi. KulmanLab toimii kokonaan selaimessa, joten piirustus jäsennetään paikallisesti eikä sitä ladata palvelimelle.

Sieltä voit panoroida ja zoomata, sytyttää ja sammuttaa tasoja, mitata etäisyyksiä ja kulmia, muokata geometriaa sekä viedä PDF-, PNG-, JPEG- tai WebP-muotoon, jos tarvitset vain jotain tulostuskelpoista lähetettäväksi eteenpäin.

**Mitä se lukee DXF-tiedostosta:** viivat, ympyrät, kaaret, ellipsit, murtoviivat, splinit, tekstit, mitat, moniosoitusviivat ja rasteroinnit sekä tiedoston taso- ja viivatyyppitaulut.

**Mitä se kirjoittaa takaisin:** saman listan. Muokkaa piirustusta ja vie se, niin geometria, teksti muotoiluineen, mitat, osoitusviivat ja rasteroinnit palaavat kaikki DXF-tiedostoon, taso- ja viivatyyppitaulukot ehjinä — tiedosto siis selviää edestakaisesta matkasta merkintöjään menettämättä.

**Missä se jää vajaaksi — lue tämä ennen kuin luotat siihen:**

- **Vain 2D.** DXF, jossa on 3D-kappaleita tai verkkoja, on väärä tiedosto tälle työkalulle.
- **Ei lohkoja.** Lohkoviittauksia (`INSERT`) ei jäsennetä, joten toistuvista lohkosymboleista rakennettu piirustus tulee sisään vaillinaisena.
- **DXF, ei DWG.** Katso alla oleva DWG-osio.
- **Vain työpöytäselaimet** — Chrome, Firefox, Safari ja Edge. Mobiiliversiota ei ole.

Jos jokin näistä on sinulle ratkaiseva este, jokin alla olevista työpöytätyökaluista palvelee sinua paremmin.

## Vaihtoehto 2: ilmaiset työpöytäohjelmat

Asennus kannattaa, jos teet tätä säännöllisesti tai jos tiedostosi käyttää ominaisuuksia, joita selaintyökalu ei käsittele.

**LibreCAD** — ilmainen ja avoimen lähdekoodin, pelkästään 2D, toimii Windowsilla, macOS:llä ja Linuxilla. Lähimpänä perinteistä 2D-piirtämistä ja vankka DXF-editori.

**QCAD** — moottori, josta LibreCAD kasvoi. Ilmainen yhteisöversio sekä maksullinen Pro-versio lisäominaisuuksineen.

**FreeCAD** — ilmainen ja avoimen lähdekoodin, suunnattu parametriseen 3D-mallinnukseen mutta osaa tuoda DXF:ää. Ylimitoitettu, jos haluat vain katsoa 2D-piirustusta, ja oppimiskäyrä on jyrkkä.

**Autodesk Viewer** — Autodeskin oma ilmainen verkkokatselin. Vain katseluun, ja se vaatii kirjautumisen Autodesk-tilillä.

**Inkscape** — ei ole CAD, mutta se tuo DXF:ää ja on järkevä valinta, jos tarvitset vain nähdä muodot tai muuntaa ne SVG:ksi.

## ”Se taitaa oikeasti olla DWG?”

Hyvin usein kyllä. DXF ja DWG ovat molemmat Autodeskin muotoja ja nimiä käytetään ristiin, mutta ne eivät ole sama asia:

| | DXF | DWG |
|---|---|---|
| Muoto | Avoin, tekstipohjainen | Suljettu, binäärinen |
| Tarkoitus | Vaihto ohjelmien välillä | AutoCADin oma muoto |
| Tuki muualla | Laaja | Rajallinen ja usein puutteellinen |

Tarkista tiedoston todellinen pääte ennen kuin lähdet etsimään katseluohjelmaa. Jos se on `.dwg`, yllä olevista työkaluista ei useimmiten ole apua — ei myöskään KulmanLabista, joka tukee vain DXF:ää.

Luotettava ratkaisu on hankkia sen sijaan DXF: tiedoston lähettänyt voi avata sen omassa CAD-ohjelmassaan ja viedä tai *Tallenna nimellä* DXF-muotoon. Lähes jokainen työpöydän CAD-sovellus osaa tämän, ja siihen menee kymmenkunta sekuntia. DWG:n muuntaminen itse kolmannen osapuolen muuntimella on mahdollista, mutta hävikki on suurempi — ja uskot toisen piirustuksen tuntemattomalle työkalulle.

## Kun piirustus avautuu mutta näyttää väärältä

**Piirtoalue on tyhjä.** Yleensä geometria sijaitsee kaukana origosta, joten näkymä osoittaa tyhjään tilaan. Käytä *sovita*- tai *zoomaa ääriin* -komentoa hypätäksesi piirustukseen. Tarkista myös, ovatko tasot pois päältä — piirustus voi saapua siten, että suurin osa tasoista on jäädytetty.

**Kaikki on mikroskooppisen pientä tai järjettömän suurta.** DXF ei tallenna yksiköitään luotettavasti. Sama piirustus on voitu tehdä millimetreissä, senttimetreissä, tuumissa tai jaloissa, eikä tiedosto usein kerro missä. Mittaa jotain, jonka todellisen koon tiedät, ja skaalaa sen perusteella.

**Teksti puuttuu tai on korvattu.** Fontteja ei upoteta DXF-tiedostoon. Jos piirustus käyttää fonttia, jota koneellasi ei ole, teksti korvautuu toisella tai katoaa. Alkuperäisen fontin lataaminen korjaa asian.

**Osa piirustuksesta ei tullut mukaan.** Jokin tiedostossa käyttää oliotyyppiä, jota työkalusi ei lue — tavallisimmin lohkoja, 3D-kappaleita tai sen luoneen ohjelman kirjoittamia omia laajennuksia. Kokeile toista työkalua ennen kuin päättelet tiedoston olevan rikki.

**Mitään ei avaudu lainkaan.** Varmista, että tiedosto todella on DXF: avaa se tavallisessa tekstieditorissa. Aito DXF alkaa luettavilla ASCII-ryhmäkoodeilla ja osioiden nimillä kuten `SECTION` ja `HEADER`. Jos näet binääristä kohinaa, kyseessä on DWG tai binäärinen DXF-muunnelma.

## Kumpi valita

**Tarvitseeko sitä vain katsoa, kerran?** Avaa selaimessa. CAD-paketin asentaminen yhden sähköpostitse saapuneen tiedoston lukemiseksi ei ole hyvä vaihtokauppa.

**Pitääkö mitata, merkitä tai tulostaa?** Selaintyökalut hoitavat tämän hyvin, ja tulostaminen PDF:ksi todellisessa mittakaavassa on yleensä juuri se, mitä halutaan.

**Oikeaa piirustustyötä, toistuvasti?** Asenna LibreCAD tai QCAD. Erikoistunut työpöytäohjelmisto palvelee sinua paremmin pitkällä aikavälillä.

**Onko sinulla DWG?** Pyydä lähettäjältä DXF. Se on nopeampaa ja turvallisempaa kuin mikään muunnosreitti.

---

*Aiheeseen liittyvää: [Import](/fi/docs/commands/import/) sisältää täyden listan siitä, mitä KulmanLab lukee DXF:stä, [Export Manager](/fi/docs/commands/export-manager/) kertoo mitä kukin vientimuoto sisältää, ja [Print Manager](/fi/docs/commands/print-manager/) tuottaa PDF:n todellisessa fyysisessä mittakaavassa.*
