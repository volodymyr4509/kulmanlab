---
title: Tekstieditori — Rikas ja Yksinkertainen Tila KulmanLab CAD:issa
description: KulmanLab CAD -tekstieditorissa on kaksi tilaa — rikas (merkkikohtainen muotoilu, monirivinen, tekstin rivitys Text- ja Multileader-entiteeteille) ja yksinkertainen (yhtenäinen tyyli, yksirivinen mitta-entiteeteille). Tilamerkki otsikossa näyttää, kumpi tila on aktiivinen.
keywords: [CAD tekstieditori, MTEXT, lihavointi kursivointi CAD, tekstin muotoilu CAD, monirivinen teksti CAD, tekstin rivitys CAD, rikas tekstieditori, yksinkertainen tekstieditori, mitan tekstieditori, oma fontti CAD, lataa ttf CAD, kulmanlab]
group: interface
order: 5
---

# Tekstieditori

Tekstieditori avautuu, kun sijoitat tai kaksoisnapsautat muokattavaa entiteettiä. Pieni **tilamerkki** otsikossa — **rikas** (korostusväri) tai **yksinkertainen** (himmennetty) — näyttää, kumpi tila on aktiivinen nykyiselle entiteetille.

## Editorin tilat

### Rikas tila

Käytössä: **Text** (MTEXT-merkinnät) ja **Multileader**-annotaatiot.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Yliviivaus | Merkkikohtainen (koskee valintaa, tai koko entiteettiä jos ei valintaa) |
| Fontti ja Korkeus | Merkkikohtainen ohitus, tai koko entiteetin oletus |
| Tasaus (Vasen / Keskitetty / Oikea / Tasattu) | **Vain Text** — ei käytettävissä Multileaderille |
| `Enter` | Lisää kovan rivinvaihdon |
| `Shift+←/→` | Laajentaa tai kutistaa tekstivalintaa |
| `Home` / `End` | Hyppää nykyisen kovan rivin alkuun / loppuun |
| Tekstin rivitys | Tuettu referenssileveyden muutoskahvoilla |

### Yksinkertainen tila

Käytössä: **Dimension Linear**, **Dimension Aligned**, **Dimension Angular**, **Dimension Radius**, **Dimension Diameter**.

Editori on esitäytetty mitan nykyisellä renderöidyllä merkinnällä, jotta voit sijoittaa kohdistimen ja muokata arvoa suoraan.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Fontti / Korkeus | Käytettävissä — koskee **koko** merkintää kerralla |
| Merkkikohtainen muotoilu | Ei tuettu |
| `Enter` | **Vahvistaa** arvon ja sulkee editorin (ei rivinvaihtoa) |
| Monirivinen | Ei tuettu |
| Tekstin rivitys | Ei tuettu |

## Editorin avaaminen

| Toiminto | Tulos |
|--------|--------|
| `text`-komento → napsauta sijainti | Luo uuden tekstientiteetin ja avaa editorin (**rikas**) |
| Kaksoisnapsauta olemassa olevaa **Text**-entiteettiä | Avaa editorin uudelleen **rikkaassa** tilassa |
| Kaksoisnapsauta olemassa olevaa **Multileaderia** | Avaa editorin **rikkaassa** tilassa |
| Kaksoisnapsauta **mitta**-entiteettiä | Avaa editorin **yksinkertaisessa** tilassa |
| `Escape` editorin sisällä | Sulkee editorin ja säilyttää kaikki muutokset |

## Työkalurivi

Työkalurivi kelluu tekstin rajauslaatikon yläpuolella ja pysyy kiinnitettynä entiteettiin panoroidessasi tai zoomatessasi.

### Lihavointi · Kursivointi · Yliviivaus

| Painike | Pikanäppäin | Mitä se tekee |
|--------|----------|--------------|
| **B** | — | Vaihda lihavointi |
| *I* | — | Vaihda kursivointi |
| ~~S~~ | — | Vaihda yliviivaus |

**Miten vaihtaminen toimii:**

- **Tekstivalinnan kanssa** — tyyli koskee vain tarkalleen valittuja merkkejä.
- **Ei valintaa, kohdistin olemassa olevassa tekstissä** — vaihtaa tyylin koko entiteetille (kaikki segmentit).
- **Tyhjä teksti tai uusi entiteetti** — tyyli tallennetaan tyhjään segmenttiin ja koskee jokaista siitä eteenpäin kirjoittamaasi merkkiä.

Painike näkyy korostettuna (aktiivisena), kun jokaisella nykyisen valinnan merkillä — tai kohdistimen vasemmalla puolella olevalla merkillä — on kyseinen tyyli asetettuna.

### Fontti

Valikko ryhmittelee käytettävissä olevat fontit ryhmiin **Default** (sisäänrakennettu groteski-fontti), **User** (omat ladatut fonttisi, jos niitä on), **Free** (joukko mukana tulevia Google Fontseja) ja **System** (yleiset käyttöjärjestelmän fontit kuten Helvetica, Times New Roman, Georgia, Courier New, Verdana, Tahoma, Trebuchet MS, Lucida Console ja Impact).

- **Valinnan kanssa** — ohittaa fontin vain valituille merkeille.
- **Ei valintaa** — soveltaa fontin koko entiteettiin.

Valikko heijastaa kohdistimen vasemmalla puolella olevan merkin fonttia, kun valintaa ei ole.

Ei rajoitu sisäänrakennettuun listaan — napsauta **Font Manager**-painiketta työkalurivillä ladataksesi oman `.ttf`-tiedostosi ja lisätäksesi sen **User**-ryhmään. Katso [Font Manager](../../commands/font-manager/) lisätietoja varten.

### Korkeus

Numerokenttä asettaa **versaalikorkeuden** (ison kirjaimen korkeuden) piirustusyksiköissä.

- **Valinnan kanssa** — ohittaa korkeuden valituille merkeille, riippumatta entiteetin peruskorkeudesta.
- **Ei valintaa** — muuttaa entiteetin peruskorkeutta (koskee kaikkia merkkejä, joilla ei ole yksilöllistä korkeuden ohitusta).

Kenttä heijastaa kohdistimen vasemmalla puolella olevan merkin korkeutta. Jätä tyhjäksi käyttääksesi entiteetin oletusta.

### Tasaus

Neljä painiketta — **Align Left**, **Align Center**, **Align Right**, **Justify** — asettavat kappaleen tasauksen. Käytettävissä vain **Text**-entiteeteille; Multileader ja mittamerkinnät eivät näytä näitä painikkeita.

- Painikkeen napsauttaminen tasaa uudelleen jokaisen rivin entiteetin olemassa olevan rajauslaatikon sisällä — se ei siirrä lisäyspistettä tai muuta laatikon kokoa.
- Jo aktiivisen painikkeen napsauttaminen poistaa ohituksen ja palaa entiteetin kiinnityspisteen sarakkeeseen.
- **Justify** venyttää sanojen välejä niin, että jokainen rivi täyttää koko rivin leveyden.

## Kohdistin ja navigointi

| Näppäin | Toiminto |
|-----|--------|
| `←` / `→` | Siirrä kohdistinta yksi merkki vasemmalle tai oikealle |
| `Home` | Hyppää nykyisen kovan rivin alkuun |
| `End` | Hyppää nykyisen kovan rivin loppuun |
| `Shift` + `←` / `→` | Laajenna tai kutista valintaa |
| `Backspace` | Poista vasemmalla oleva merkki (tai valinta) |
| `Delete` | Poista oikealla oleva merkki (tai valinta) |
| `Enter` | Lisää rivinvaihto |
| `Escape` | Sulje editori |

Kohdistimen korkeus vastaa automaattisesti viereisen merkin versaalikorkeutta, mukaan lukien ala- ja yläindeksissä käytetty pienempi koko.

## Kopiointi, leikkaaminen ja liittäminen

| Näppäin | Toiminto |
|-----|--------|
| `Ctrl+C` / `Cmd+C` | Kopioi valittu teksti |
| `Ctrl+X` / `Cmd+X` | Leikkaa valittu teksti |
| `Ctrl+V` / `Cmd+V` | Liitä kohdistimen kohdalle |

Kopiointi ja leikkaaminen vaativat aktiivisen tekstivalinnan. Liitetty teksti on aina puhdasta — se saa kohdistimessa jo olevan muotoilun (lihavointi, kursivointi, fontti, korkeus) sen sijaan, että säilyttäisi kopioidessa olleen muotoilun.

**Rikkaassa tilassa** liitetyn tekstin rivinvaihdot säilyvät. **Yksinkertaisessa tilassa** rivinvaihdot poistetaan, koska mittamerkinnät ovat yksirivisiä.

## Tekstin rivitys

Kun tekstientiteetillä on asetettu **referenssileveys**, pitkät rivit rivittyvät pehmeästi sanarajoihin sopiakseen kyseiseen leveyteen.

Asettaaksesi tai muuttaaksesi referenssileveyttä entiteetin ollessa valittuna, vedä **muutoskahvoista** — ohuista suorakulmioista katkoviivaisen rajauslaatikon vasemmalla ja oikealla reunalla. Sisältö rivittyy uudelleen reaaliajassa vetäessäsi.

Referenssileveyden asettaminen nollaksi (vedä kahvat yhteen tai poista arvo ominaisuuspaneelissa) poistaa tekstin rivityksen ja antaa rivien kasvaa vapaasti.

## Monirivinen teksti

Paina `Enter` lisätäksesi kovan rivinvaihdon. Jokainen kova rivi on itsenäinen — `Home` ja `End` navigoivat vain nykyisen kovan rivin sisällä.

Kovat rivinvaihdot ja merkkikohtainen muotoilu tallennetaan MTEXT-muodossa ja säilyvät täydessä DXF-edestakaisessa matkassa.

## DXF-yhteensopivuus

Tekstientiteetit tallennetaan **MTEXT**-muodossa DXF-tiedostoissa. Lihavointi ja kursivointi koodataan käyttäen merkkejä `\L`, `\K`, `\O` ja sisäänrakennettuja fonttivaihtoja (`\f`). Merkkikohtainen korkeus koodataan muodossa `\H`. Kaikki muotoilu säilyy viennissä ja on luettavissa LibreCADissa, FreeCADissa ja muissa DXF-yhteensopivissa sovelluksissa.
