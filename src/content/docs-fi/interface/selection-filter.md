---
title: Valintasuodatin — Monivalinnan rajaaminen ominaisuuden mukaan
description: Kun useita objekteja on valittuna, ominaisuuspaneelin otsikon suodatinkuvake avaa ikkunan, jossa on elävät valintaruutuluettelot tyypille, tasolle, värille, viivanpaksuudelle ja viivatyypille. Luettelot rakentuvat siitä, mitä valinnassa oikeasti on, joten suuri sekalainen valinta voidaan rajata ennen joukkomuokkausta.
keywords: [valintasuodatin, valinnan suodatus CAD, fasettisuodatin, valinnan rajaaminen, joukkomuokkaus CAD, ominaisuuspaneelin suodatin, kulmanlab]
group: interface
order: 7
---

# Valintasuodatin

Kun valitset monta objektia kerralla, ominaisuuspaneeli avautuu monivalintanäkymässä (”Selection (N)”). Sulkupainikkeen vieressä oleva **suodatinkuvake** antaa rajata tuota valintaa ominaisuuden mukaan ennen joukkomuokkausta.

## Suodattimen avaaminen

1. Valitse useita objekteja — vedä valintakehys, napsauta Shift pohjassa tai paina Ctrl+A.
2. Napsauta ominaisuuspaneelin otsikossa olevaa **suodatinkuvaketta** (suppilo).
3. Painikkeen alle avautuu ikkuna, jossa on valintaruutuluettelo jokaiselle ominaisuudelle, joka valinnan sisällä oikeasti vaihtelee.

## Fasetit

Ikkuna voi näyttää enintään viisi fasettia, joista jokainen rakentuu elävästi nykyisestä valinnasta:

| Fasetti | Näytettävät arvot |
|---------|-------------------|
| **Tyyppi** | Objektityypin nimi (Line, Circle, Hatch, …) |
| **Taso** | Tason nimi ja kyseistä tasoa vastaava värinäyte |
| **Väri** | ACI-väri-indeksi |
| **Viivanpaksuus** | Viivanpaksuuden arvo |
| **Viivatyyppi** | Viivatyypin nimi |

Fasetti ilmestyy vain, jos valinnassa on sitä varten oikeasti useampi kuin yksi eri arvo — kymmenen samalla tasolla olevan viivan valitseminen ei tuo Taso-fasettia näkyviin, koska sen rastittaminen ei rajaisi mitään. Objektit, joilla ei ole kyseistä ominaisuutta lainkaan (esimerkiksi Hatch ja Text eivät kanna viivanpaksuutta eivätkä viivatyyppiä), eivät yksinkertaisesti lasketa mukaan siihen fasettiin — eikä se koskaan myöskään sulje niitä pois.

## Valinnan rajaaminen

Rastita yksi tai useampi arvo missä tahansa fasetissa rajataksesi valinnan objekteihin, jotka täyttävät **kaikki** rastitetut fasetit (objektin on osuttava vähintään yhteen rastitettuun arvoon *jokaisessa* koskemassasi fasetissa, ei vain yhdessä). Kunkin fasetin omat ruudut ja lukumäärät heijastavat sitä, mihin *muut* rastitetut fasetit ovat jo rajanneet, joten fasetti ei koskaan piilota omia jo rastitettuja vaihtoehtojaan — fasettihaun tavanomainen toiminta.

Tulosten määrä päivittyy elävästi, kun rastitat ja poistat rasteja, ja piirtoalueen valinta rajautuu mukana — tämä ei ole pelkkä näyttösuodatin: objektit, jotka eivät enää täsmää, poistetaan oikeasti valinnasta, valmiina siihen että muokkaat joukkona täsmälleen sitä osajoukkoa, johon suodatit.

## Suodattimien tyhjentäminen

Käytä ikkunan nollaustoimintoa tyhjentääksesi kaikki rastit ja palataksesi koko alkuperäiseen valintaan, tai sulje ikkuna (se avautuu tuoreelta pohjalta, kun seuraavan kerran napsautat suodatinkuvaketta toisen valinnan kohdalla).

## Liittyvät

- [Match Properties](../../commands/match-properties/) — kopioi ominaisuudet yhdestä objektista muihin, kun olet rajannut mistä on kyse
- [LayerIsolate](../../commands/layer-isolate/) — tasotason vaihtoehto, kun haluat eristää pelkän tason perusteella riippumatta siitä mitä on valittuna
