---
title: "Näin muunnat DXF:n PDF:ksi (oikeassa mittakaavassa)"
description: "Muunna DXF PDF:ksi ilmaiseksi selaimessa — myös tarkassa mittakaavassa kuten 1:50 A3-arkille, mihin muunnossivustot eivät pysty. Ei asennusta, ei tiliä."
keywords: [muunna DXF PDF:ksi, DXF PDF ilmainen, DXF PDF verkossa, DXF PDF mittakaava, DXF tulostus mittakaavassa, DXF PDF muunnin, CAD-piirustus PDF:ksi, DXF PDF A3, mittakaava 1:50 PDF, DXF PDF ilman AutoCADia]
date: 2026-09-03
author: KulmanLab
tag: Opas
---

DXF:n muuntaminen PDF:ksi onnistuu avaamalla se selaimessa toimivassa CAD-editorissa ja viemällä: mitään ei tarvitse asentaa, tiliä ei tarvita, ja tiedosto pysyy koneellasi. Jos PDF:stä pitää voida mitata oikein tulostettuna, tarvitset paperiasettelun ja tarkan mittakaavan — ja juuri tämän vaiheen muunnospalvelut ohittavat kokonaan.

Tämä ero on koko oppaan ydin. Yleiskäyttöinen tiedostomuunnin antaa sinulle kuvan piirustuksestasi. Mittakaavaan tehty PDF antaa piirustuksen, jonka päälle joku voi asettaa viivaimen.

## Nopea tie: tee vain PDF

Kun tarvitset vain jotain luettavaa lähetettäväksi:

1. Avaa [app.kulmanlab.com](https://app.kulmanlab.com) ja vedä `.dxf` piirtoalueelle, tai käytä tiedostopaneelin **Import**-painiketta.
2. Napsauta **Print**-painiketta tai kirjoita `printmanager`.
3. Aseta **Format** arvoon **PDF**.
4. Napsauta **Export**. Tiedosto latautuu.

Siinä kaikki. Esikatselu piirretään samaa koodipolkua pitkin ja samalla tarkkuudella kuin vietävä tiedosto, joten näkemäsi on lopputulos eikä arvio siitä.

Yksi asia kannattaa tietää: **PDF säilyttää kaiken ruudulla näkyvän** — mitat, tekstit, rasteroinnit, osoitusviivat — täsmälleen siinä asettelussa kuin ne on piirretty. Myös DXF-vienti vie kaiken tämän mukanaan, joten valinta niiden välillä ei koske sitä, mikä säilyy. Se koskee sitä, mitä vastaanottaja tarvitsee: PDF, jos hänen pitää vain lukea tai tulostaa se, DXF, jos hänen pitää muokata sitä.

## Oikea tie: muunna tarkassa mittakaavassa

Jos joku mittaa tästä tai rakentaa tämän mukaan, "mahtuu sivulle" ei riitä. Mittakaava 1:50 tarkoittaa, että 1 mm paperilla on 50 mm todellisuudessa, ja se pitää paikkansa vain jos asetat sen tietoisesti.

1. **Vaihda paperiasetteluun.** Napsauta asettelun välilehteä näytön alalaidassa; **+**-painike lisää uuden. Asettelut ovat paperitilaa; mallitilassa ei ole sivua, johon skaalata.
2. **Määritä arkki.** Kirjoita `pagemanager`, tai napsauta asettelun välilehteä hiiren oikealla ja valitse **Page Manager**. Valitse paperikoko (A4, A3, A2, Letter…) ja suunta.
3. **Sijoita näyttöikkuna.** Kirjoita `viewportrectangle` ja osoita kaksi vastakkaista kulmaa. Näyttöikkuna on ikkuna malliisi.
4. **Aseta mittakaava.** Näyttöikkunan ollessa aktiivinen käytä ohjauspalkin **mittakaavavalitsinta**. Valitse vakiosuhde tai kirjoita omasi — se hyväksyy suhdemuodon (`1:200`, `5:1`) tai pelkän desimaaliluvun (`0.005`), sitten Enter.
5. **Vie.** Print Manager → PDF → Export.

PDF mitoitetaan niin, että sivu tulostuu todellisessa fyysisessä mittakaavassa. Tulosta se 100 %:lla — älä koskaan "sovita sivulle" -asetuksella, joka skaalaa kaiken hiljaisesti uudelleen ja tekee työn turhaksi — jolloin paperilla olevat mitat pitävät paikkansa.

Jos vaihdat myöhemmin paperikokoa tai mittakaavaa, olemassa olevat näyttöikkunat skaalautuvat suhteellisesti mukana, joten asettelu ei hajoa.

## Laadun valinta

**Quality**-valikko määrää, millä DPI:llä PDF piirretään:

| Quality | DPI | Mihin |
|---|---|---|
| Draft | 72 | Nopea tarkistus, pienin tiedosto |
| Normal | 150 | Oletus — riittää A4-liitteisiin |
| Presentation | 300 | Kun sitä katsotaan läheltä |
| Max | 600 | Suuret koot, hienot yksityiskohdat |

Viivanleveydet skaalautuvat tarkkuuden mukana, joten viiva säilyttää saman *fyysisen* paksuuden paperilla kaikilla asetuksilla — korkeampi laatu antaa terävämmän viivan, ei ohuemman. Poikkeus on hiusviiva (viivanleveys `0`), joka pysyy vakiintuneen käytännön mukaan yhden pikselin levyisenä kaikilla tasoilla.

## Tulostustyylit

**Style**-valikko vaihtaa sekä musteen että sivun:

- **Monochrome** — täysi musta valkoisella, ja tämä on oletus. Tätä haluat kaikkeen paperille menevään: värilliset tasot, jotka erottuvat hyvin näytöllä, muuttuvat lasertulostimessa mutaisiksi harmaiksi.
- **Default** — jokainen kohde omalla värillään, valkoinen sivu.
- **Blueprint** — valkoiset viivat syvällä preussinsinisellä, perinteisen sinikopion tapaan. Esittelyyn, ei verstaalle.

## Vain osan muuntaminen piirustuksesta

**Change Area** rajaa viennin suorakulmioon, jonka vedät piirtoalueelle. Se rajaa todellisen vietävän tiedoston, ei pelkkää esikatselua, ja toimii sekä asettelussa että mallitilassa.

Kulmat tarttuvat kahvoihin ja leikkauspisteisiin kuten mikä tahansa muu pisteen osoitus, joten voit rajata piirretyn geometrian mukaan silmämäärän sijaan — kätevää, kun arkilla on neljä detaljia ja haluat vain kolmannen.

## Mitä tämä ei tee

Rehelliset rajoitukset, ennen kuin luotat tähän:

- **PDF on rasterikuva PDF-säiliön sisällä, ei vektori.** A4-koossa ja Normal-laadulla sitä ei huomaa. A1-koossa, tai kun joku zoomaa syvälle yksityiskohtaan, työpöytä-CAD:n tuottama vektori-PDF on terävämpi. Nosta Quality Presentation- tai Max-asetukseen suuria kokoja varten — vektoriksi se ei silti muutu.
- **Mitään ei lähetetä fyysiselle tulostimelle.** Saat tiedoston; tulostaminen on tulostimesi tehtävä.
- **Vain työpöytäselaimet** — Chrome, Firefox, Safari, Edge. Mobiiliversiota ei ole.
- **Vain 2D, DXF eikä DWG.** Jos tiedostosi on `.dwg`, pyydä lähettäjää viemään DXF.

## Milloin kannattaa käyttää jotain muuta

**Yleinen tiedostomuunnin** (CloudConvert, Zamzar ja vastaavat) käy, jos tarvitset todella vain kuvan etkä välitä siitä, minkä kokoisena se tulostuu. Ne ovat nopeita ja käsittelevät muotoja, joita kukaan muu ei lue. Ne eivät anna sinulle 1:50:tä A3-arkille.

**Työpöydän CAD** — LibreCAD, QCAD tai AutoCAD jos sinulla on — tuottaa vektori-PDF:iä ja on oikea vastaus suurikokoisiin teknisiin piirustuksiin, jotka tulostetaan kunnolla ja tutkitaan tarkkaan.

**Tämä** taas on laajaa keskikenttää varten: DXF, jonka tarvitset tänään oikein mitoitettuna ja merkinnöin varustettuna PDF:nä, mitään asentamatta.

## Ennen lähettämistä

- Mittakaava asetettu tietoisesti näyttöikkunassa, ei jätetty siihen mikä sattui mahtumaan
- Paperikoko vastaa sitä, mille vastaanottaja oikeasti tulostaa
- Quality nostettu yli Normalin, jos menee A4:ää suuremmalle
- Tyyliksi Monochrome, ellet nimenomaan halua väriä
- PDF avattu kerran tarkistettavaksi ennen liittämistä
- Vastaanottajalle kerrottu, että tulostetaan 100 %:lla eikä "sovita sivulle"

Tuo viimeinen rivi pelastaa enemmän mittakaavapiirustuksia kuin mikään muu tällä listalla.

---

*Aiheeseen liittyvää: [Print Manager](/fi/docs/commands/print-manager/) kaikkiin vientiasetuksiin, [Page Manager](/fi/docs/commands/page-manager/) paperikokoon ja asettelun mittakaavaan, [ViewportRectangle](/fi/docs/commands/viewport-rectangle/) näyttöikkunoiden sijoittamiseen ja skaalaamiseen, sekä [Import](/fi/docs/commands/import/) siihen, mitä KulmanLab lukee DXF:stä.*
