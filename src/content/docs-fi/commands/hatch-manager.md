---
title: Hatch Manager -komento — Selaa ja lataa .pat-kuvioita
description: Hatch Manager -komento avaa valintaikkunan hatch-kuvioiden selaamiseen suoralla näyteesikatselulla, ja omien .pat-kuviotiedostojen lataamiseen. Ladatut tiedostot tallennetaan selaimeen ja ne peittävät samannimiset sisäänrakennetut kuviot.
keywords: [hatch manager, mukautettu hatch-kuvio CAD, lataa pat-tiedosto, acad.pat, hatch-kuviokirjasto, ANSI31, kulmanlab]
group: style
order: 4
---

# Hatch Manager

`Viivoitustenhallinta`-komento avaa valintaikkunan hatch-kuvioiden selaamiseen suoralla näyteesikatselulla, ja omien `.pat`-kuviotiedostojen lataamiseen [Hatch](../hatch/)-komennon kanssa käytettäväksi.

## Hatch Managerin avaaminen

Kirjoita `Viivoitustenhallinta` päätteeseen. Tämä on eri asia kuin kuvionvalitsin, joka avautuu, kun napsautat hatchin **Pattern**-sirua — valitsin valitsee kuvion yhdelle hatchille, Hatch Manager on paikka, jossa lisäät tai poistat `.pat`-tiedostoja.

## Kuvioryhmät

| Ryhmä | Sisältö |
|-------|---------|
| **User** | Kuvioita omista ladatuista `.pat`-tiedostoistasi, alaryhmiteltynä sen mukaan, mistä tiedostosta kukin kuvio on peräisin (näytetään vasta kun olet ladannut yhden) |
| **Standard** | `SOLID` sekä tämän piirustuksen oma kuviotaulukko — jokainen uusi piirustus alkaa samasta sisäänrakennetusta kirjastosta, aivan kuten sen tasot ja viivatyypit |

Napsauta mitä tahansa kuviota luettelossa (tai käytä `↑`/`↓`) esikatsellaksesi sitä oikealla — näyte, joka on piirretty samalla koodilla, jolla piirtoalue täytetään, joten se on tarkalleen se, mitä piirustus näyttää, sekä kuvion nimi, kuvaus ja viivojen määrä.

## Mukautetun kuviotiedoston lataaminen

1. Napsauta **Add .pat File** valintaikkunan alatunnisteessa.
2. Valitse `.pat`-tiedosto — tavallinen hatch-kuviomuoto. Yksi tiedosto määrittää usein monta nimettyä kuviota kerralla; ne kaikki näkyvät erillisinä merkintöinä ryhmiteltynä kyseisen tiedoston nimen alle.
3. Ladatut tiedostot tallennetaan pysyvästi selaimeen (IndexedDB), lajiteltuna viimeksi lisätty ensin, ja ne ladataan automaattisesti uudelleen seuraavalla kerralla, kun avaat KulmanLab CAD:n.

Tiedoston lataaminen, joka määrittää saman nimisen kuvion kuin sisäänrakennettu, **peittää** oletuksen — tämä on tuettu tapa saada Autodeskin viralliset kuviomääritykset: lataa oikea `acad.pat`, ja sen versiot ANSI31:stä ja muista vakionimistä ottavat paikan KulmanLabin omilta likiarvoilta.

Jos piirustus viittaa kuvion nimeen, jota ei ole kirjastossasi — tuotu DXF:stä, joka käytti kuviota `acad.pat`-tiedostosta, jota et ole ladannut — hatch renderöityy silti, käyttäen `ANSI31`-kuviota sijaisena, sen sijaan että palautuisi litteään, kuviottomaan täyttöön.

## Kuviotiedoston poistaminen

Napsauta **×**-merkkiä tiedoston nimen vieressä **User**-ryhmässä poistaaksesi sen ja jokaisen sen määrittämän kuvion. Mikä tahansa hatch, joka jo käyttää jotain näistä kuvioista, palautuu heti `ANSI31`-kuvioon. Sisäänrakennettuja **Standard**-kuvioita ei voi poistaa.

## Näppäinviitteet

| Näppäin | Toiminto |
|---------|----------|
| `↑` / `↓` | Siirrä valintaa ylös tai alas kuvioluettelossa |
| `Escape` | Sulje Hatch Manager |

## Liittyvät komennot

- [Hatch](../hatch/) — täyttää napsautetun alueen käyttäen tällä hetkellä valittua kuviota
- [Font Manager](../font-manager/) — sama lataus-/selauskuvio, mukautetuille fonteille hatch-kuvioiden sijaan
