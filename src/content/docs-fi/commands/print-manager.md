---
title: Print Manager — Vie PNG-, JPEG-, WebP- tai PDF-muodossa
description: PrintManager-komento avaa Print Managerin — omistetun vientinäkymän elävällä esikatselulla, joka vastaa tarkalleen vietävää tiedostoa, Laatu/DPI-asetuksella, muotovalitsimella, Default/Monochrome/Blueprint-tulostustyylillä ja valinnaisella aluevalinnalla. Tukee PNG-, JPEG-, WebP- ja PDF-muotoja.
keywords: [CAD vie PNG, CAD vie PDF, tulosta CAD-piirustus, print manager, tulostuslaatu DPI, mustavalkoinen vienti, blueprint-tulostustyyli, kulmanlab vienti]
group: file
order: 4
---

# Print Manager

Komento `PrintManager` avaa **Print Managerin** — omistetun vientinäkymän elävällä esikatselupiirtoalueella, muotovalitsimella (PNG / JPEG / WebP / PDF), tyylivalitsimella (Default / Monochrome / Blueprint) ja valinnaisella alueen rajauksella. Mitään ei lähetetä fyysiselle tulostimelle — tulos ladataan tiedostona.

## Print Managerin avaaminen

Napsauta **Print**-painiketta työkalurivillä tai kirjoita `PrintManager` terminaaliin. Print Manager avautuu välittömästi näyttäen esikatselun nykyisestä näkymäikkunasta.

Esikatselu renderöidään täsmälleen samaa koodipolkua pitkin, täsmälleen samalla pikseliresoluutiolla, kuin lopulta vietävä tiedosto — Quality-, Style- tai vientialueen muuttaminen renderöi esikatselun heti uudelleen, joten se mitä näet, on se mikä ladataan, ei likiarvo siitä.

## Print Managerin asettelu

Ikkunassa on kaksi paneelia:
- **Vasen sivupalkki** — kaikki vientikontrollit.
- **Oikea paneeli** — elävä esikatselupiirtoalue, joka päivittyy asetuksia muuttaessasi.

### Sivupalkin kontrollit

| Kontrolli | Kuvaus |
|---------|-------------|
| **Change Area** | Rajaa piirtoalueen mukautettuun suorakulmioon (katso alla) — rajaa todella vietävän kuvan, myös paperitilallisella layoutilla, ei pelkkää näytön esikatselua |
| **Quality**-pudotusvalikko | Asettaa vientiresoluution (katso alla) |
| **Style**-pudotusvalikko | Default, Monochrome tai Blueprint — katso alta *Tulostustyylit*. Monochrome oletuksena siistiä tulostusjälkeä varten |
| **Format**-valikko | PNG, JPEG, WebP tai PDF |
| **Export**-painike | Luo ja lataa tiedosto |

## Tulostustyylit

**Style**-pudotusvalikko ohjaa sekä musteväriä, jolla entiteetit piirretään, että sivun taustaa:

| Tyyli | Muste | Sivun tausta |
|-------|-------|--------------|
| **Default** | Kunkin entiteetin oma väri | Valkoinen |
| **Monochrome** *(oletus)* | Yhtenäinen musta, riippumatta entiteetin/tason väristä | Valkoinen |
| **Blueprint** | Yhtenäinen valkoinen, riippumatta entiteetin/tason väristä | Syvä preussinsininen, himmeällä apuviivastolla |

Blueprint toistaa perinteisen syanotyyppisen arkkitehtuuritulosteen ilmeen — valkoiset viivat tummansinisellä arkilla. Sen apuviivasto mitoitetaan suhteessa sivukokoon, ei DPI:hin, joten se näyttää yhtä tiheältä millä tahansa Quality-asetuksella sen sijaan, että tihenisi resoluution kasvaessa.

## Laatu ja resoluutio

**Quality**-pudotusvalikko asettaa DPI:n, jolla vienti renderöidään:

| Quality | DPI |
|---------|-----|
| Draft | 72 |
| Normal *(oletus)* | 150 |
| Presentation | 300 |
| Max | 600 |

Korkeampi Quality tuottaa suuremman, terävämmän kuvan samassa fyysisessä koossa — viivanpaksuudet skaalautuvat resoluution mukana, joten viiva säilyttää saman *fyysisen* paksuuden paperilla millä tahansa Quality-asetuksella, sen sijaan että näyttäisi ohuemmalta DPI:n kasvaessa. Ainoa poikkeus on hiusviiva (viivanpaksuus `0`), joka määritellään perinteisesti "ohuimmaksi viivaksi, jonka tulostuslaite voi piirtää" — se pysyy kiinteänä 1 pikselin levyisenä jokaisella Quality-tasolla, aivan kuten se käyttäytyy elävällä piirtoalueella.

Quality-asetuksen muuttaminen renderöi esikatselun heti uudelleen, joten näet todellisen terävyyden (ja tiedostokoon kompromissin) ennen vientiä.

## Mukautetun vientialueen valitseminen

Oletuksena esikatselu näyttää mallitilan kaikkien objektien rajaavan suorakulmion — saman laajuuden, johon [Fit](../fit/) zoomaa — tai asettelussa koko arkin. Tietyn alueen viemiseksi:

1. Napsauta **Change Area** — Print Manager piiloutuu ja piirtoalue muuttuu interaktiiviseksi.
2. **Napsauta vientisuorakulmion ensimmäistä kulmaa**.
3. **Napsauta vastakkaista kulmaa** — Print Manager avautuu uudelleen valitun alueen kanssa esikatselussa.

Paina `Escape` alueen valinnan aikana peruuttaaksesi ja palauttaaksesi edellisen alueen.

Esikatselupiirtoalue muuttaa kokoaan dynaamisesti vastaamaan valitun alueen **tarkkaa kuvasuhdetta**, joten esikatselu on pikselintarkka.

Valittu alue muistetaan erikseen mallitilalle ja jokaiselle asettelulle, kunnes lataat sivun uudelleen — katso [ChangePrintArea](../change-print-area/).

## Vientimuodot

| Muoto | Paras käyttö | Huomautuksia |
|--------|----------|-------|
| **PNG** | Häviötön, terävät viivat | Tyylin sivutausta mukana, ei läpinäkyvyyttä |
| **JPEG** | Pienempi tiedosto jakamiseen | 95 % laatu, lievä pakkaus |
| **WebP** | Pienin tiedosto webiin | Sama 95 % laatu, parempi pakkaus kuin JPEG |
| **PDF** | Tulostusvalmiit asiakirjat | Kuva upotettu PDF-säiliöön valitun Quality-asetuksen DPI:llä, mitoitettuna niin että sivu tulostuu todellisessa fyysisessä mittakaavassa |

Viety tiedosto nimetään `kulman-<aikaleima>.<tiedostopääte>` ja latautuu automaattisesti.

## Vientiresoluutio ja tausta

- **Mallitila-/näkymäikkunavienti**: rajattu 2000 × 2000 pikseliin oletusarvoisella Normal (150 DPI) -laadulla, skaalattuna suhteessa valittuun alueeseen; myös yläraja skaalautuu Qualityn mukana — Draftilla matalampi, Presentationilla ja Maxilla korkeampi (jopa 8000 × 8000 Max/600 DPI:llä).
- **Layout-vienti (paperitila)**: mitoitettu suoraan layoutin paperimitoista valitulla DPI:llä — esim. A4-arkki (210 × 297 mm) viedään Normal-laadulla noin 1240 × 1754 px:nä — joten siihen ei sovelleta näkymäikkunan 2000 px:n rajaa.
- Tausta noudattaa valittua tulostus-**Styleä** — valkoinen Default- ja Monochrome-tyylillä, syvä preussinsininen Blueprintillä (katso *Tulostustyylit* yllä).
- Tasot, jotka on merkitty **ei-tulostettaviksi**, jätetään pois viennistä.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` (alueen valinnan aikana) | Peruuta alueen valinta, palauta edellinen alue |
| `Escape` (Print Managerissa) | Sulje Print Manager |
