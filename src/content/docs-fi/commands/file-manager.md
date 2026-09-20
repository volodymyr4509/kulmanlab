---
title: File Manager — Pienoiskuvaruudukko, uudelleennimeäminen ja poisto
description: FileManager-komento avaa pienoiskuvaruudukon jokaisesta tallennetusta piirustuksesta — avaa napsauttamalla pienoiskuvaa, nimeä uudelleen paikan päällä, tai poista vahvistuksella.
keywords: [tiedostonhallinta CAD, viimeisimmät tiedostot CAD, nimeä piirustus uudelleen, poista piirustus, pienoiskuvaruudukko CAD, palauta piirustus, avaa DXF uudelleen, selaimen tallennustila CAD, KulmanLab tiedostot, tallennetut piirustukset, IndexedDB CAD, varmuuskopioi CAD-piirustus]
group: file
order: 3
---

# File Manager

Komento `Tiedostonhallinta` avaa **pienoiskuvaruudukon** jokaisesta piirustuksesta, joka on tallennettu selaimesi paikalliseen tallennustilaan, järjestettynä viimeisimmän tallennusajan mukaan. Käytä sitä avataksesi aiemman piirustuksen uudelleen, nimeämään sen uudelleen, tai poistamaan sen.

## File Managerin avaaminen

- Kirjoita `Tiedostonhallinta` terminaaliin, **tai**
- Napsauta **File Manager** -työkalurivin painiketta (historiakuvake) File-paneelissa näytön yläosassa.

Paneeli avautuu piirtoalueen vasemmalle puolelle ja sulkeutuu automaattisesti heti kun aloitat toisen komennon tai [tuot](../import/) tiedoston — joten se ei koskaan jää roikkumaan piirustuksen päälle, jota se ei vielä listaa. Se avautuu joka kerta tuoreella listalla.

## Pienoiskuvaruudukko

Jokainen tallennettu piirustus näkyy korttina, jossa on suoraan renderöity pienoiskuva, sen nimi ja viimeisin päivitysaika. Pienoiskuvat luodaan välittömästi joka kerta, kun paneeli avataan — mitään ei renderöidä etukäteen tai tallenneta — joten kortissa näkyy hetken ajan paikkamerkki-ikoni, kun pienoiskuvaa piirretään. Sama paikkamerkki näkyy myös, jos luonti epäonnistuu tai jos piirustuksessa ei todella ole vielä yhtään entiteettiä.

| Toiminto | Kuinka |
|--------|-----|
| **Avaa** piirustus | Napsauta sen pienoiskuvaa — korvaa piirtoalueen nykyisen sisällön |
| **Nimeä uudelleen** | Napsauta kynäkuvaketta, tai kaksoisnapsauta nimeä |
| **Poista** | Napsauta roskakorikuvaketta ja vahvista |

Jos tiedostoja ei ole vielä tallennettu, paneelissa näkyy "No files saved". Jos tiedostoja on enemmän kuin mahtuu yhdelle näytölle, ruudukon alle ilmestyy **Page 1 of N** -ohjaimet.

Tiedoston, joka on parhaillaan avoinna editorissa, kortti on merkitty korostusvärisellä renkaalla, eikä siinä ole **poistopainiketta** — avoinna olevan tiedoston poistaminen tyhjentäisi sen tallennetut tiedot, vaikka piirtoalue näyttäisi sitä edelleen, ja seuraava muokkaus vain tallentaisi sen heti takaisin. Uudelleennimeäminen on edelleen käytettävissä.

## Tiedoston poistaminen

Roskakorikuvakkeen napsauttaminen ei poista tiedostoa heti — se aktivoi vahvistuspeitteen kyseiselle kortille ("Delete this file?" sekä **Delete**- ja **Cancel**-painikkeet), koska poistaminen on pysyvää eikä sitä voi peruuttaa. **Cancel**-painikkeen napsauttaminen, toisen kortin roskakorikuvakkeen napsauttaminen tai napsauttaminen muualle kortilla peruuttaa odottavan vahvistuksen poistamatta mitään.

## Tiedoston uudelleennimeäminen

Napsauta kynäkuvaketta (tai kaksoisnapsauta tiedostonimeä) muokataksesi sitä paikan päällä, ja paina sitten **Enter** vahvistaaksesi tai **Escape** peruuttaaksesi. Uudelleennimeäminen hylätään, jos uusi nimi on:

- tyhjä, tai pidempi kuin 100 merkkiä,
- jo käytössä toisella tallennetulla tiedostolla (kirjainkoosta riippumatta),
- päättyy pisteeseen, tai
- Windowsin varaama laitenimi, kuten `CON`, `PRN`, `AUX`, `NUL`, `COM1`–`COM9`, tai `LPT1`–`LPT9`.

Merkit, jotka eivät kelpaa tiedostonimessä (`\ / : * ? " < > |`), poistetaan automaattisesti kirjoittaessasi. Uudelleennimeäminen muuttaa vain nimikkeen — se ei vaikuta piirustuksen sijaintiin ruudukossa, koska se on järjestetty viimeisimmän tallennusajan, ei nimen, mukaan.

## Varmuuskopioi työsi — selaimen tallennustila ei ole pysyvä

KulmanLab tallentaa piirustukset **IndexedDB**:hen, selaimeesi sisäänrakennettuun tietokantaan:

- Tiedostot tallennetaan **vain paikallisesti laitteellesi** — mitään ei ladata palvelimelle.
- Jokaisella selaimella ja laitteella on oma itsenäinen tallennustila. Yhdellä tietokoneella Chromessa tallennettu piirustus ei näy Firefoxissa tai toisella laitteella.
- Tämä tallennustila **voi tyhjentyä ilman varoitusta** — sivustotietojen tai selaushistorian tyhjentämisen, levytilan vähyyden, yksityisen/incognito-ikkunan käytön, selaimen tai käyttöjärjestelmän uudelleenasennuksen, tai laitteen vaihtamisen vuoksi. Mikään näistä ei anna sinulle mahdollisuutta palauttaa sitä, mitä siellä oli.

**Ainoa luotettava tapa pitää piirustus turvassa on [viedä](../export-manager/) se omaan tallennustilaasi.** Käytä `.json`-muotoa (KulmanLabin natiivi muoto), kun mahdollista — se säilyttää jokaisen entiteetin täsmälleen; käytä `.dxf`-muotoa, kun tarvitset yhteensopivuutta muiden CAD-työkalujen kanssa. Tee näin kaikelle, minkä menettämisestä harmittelisit, sekä ennen selaintietojen tyhjentämistä, selaimen tai laitteen vaihtamista, tai koneen pitkäaikaista säilytykseen laittamista.

## Automaattinen tiedoston lataus käynnistyksessä

Kun avaat KulmanLab CAD:in, sovellus lataa automaattisesti **viimeksi muokatun tiedoston** tallennustilasta. Sinun ei tarvitse avata sitä manuaalisesti File Managerista joka kerta.

## Tallennustilan hallinta

Tallennettavien piirustusten määrälle ei ole kiinteää rajaa, mutta selaimen tallennustila on rajallinen. Jos huomaat tallennustilavaroituksia, poista vanhempia tiedostoja File Managerista — tai vielä parempi, vie ne ensin, ettei mitään katoa.

Poistaaksesi kaikki tallennetut piirustukset kerralla, käytä [WipeStorage](../wipestorage/)-komentoa.

## Tiedostonimet

Uudet ja tuodut tiedostot saavat yksinkertaisen nimen — aikaleimaa ei enää liitetä. Jos nimi on jo käytössä, Finder/Explorer-tyylinen liite lisätään automaattisesti (`plan (2)`, `plan (3)`, …), jotta mitään ei ylikirjoiteta. Voit aina antaa tiedostolle selkeämmän nimen jälkikäteen käyttämällä [uudelleennimeämistä](#tiedoston-uudelleennimeäminen).

## Liittyvät komennot

- [Import](../import/) — lataa piirustus tiedostojärjestelmästäsi selaimen tallennustilaan
- [Export Manager](../export-manager/) — lataa piirustus tiedostojärjestelmääsi
- [New File](../new-file/) — aloita tyhjä piirustus (tallennetaan myös automaattisesti)
- [WipeStorage](../wipestorage/) — tyhjennä kaikki tallennetut tiedostot selaimen tallennustilasta
