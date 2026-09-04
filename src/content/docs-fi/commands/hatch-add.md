---
title: HatchAdd-komento — lataa .pat-kuviotiedosto terminaalista
description: HatchAdd avaa tiedostovalitsimen .pat-kuviotiedoston lataamiseen avaamatta ensin Hatch Manageria. Kaikki tiedoston määrittelemät kuviot lisätään kerralla.
keywords: [hatch add komento, hatchadd komento, pat-tiedoston lataus terminaalista, oma rasterointikuvio CAD, acad.pat, kuviokirjasto, kulmanlab]
group: style
order: 5
---

# HatchAdd

Komento `HatchAdd` avaa järjestelmän tiedostovalitsimen `.pat`-rasterointikuviotiedoston lataamiseen avaamatta ensin [Hatch Manager](../hatch-manager/) -valintaikkunaa. Kyseessä on sama lataus, jonka Hatch Managerin **Add .pat File** -painike käynnistää — HatchAdd on vain suora reitti sinne terminaalista.

## Kuviotiedoston lataaminen

1. Kirjoita `HatchAdd` terminaaliin tai napsauta **Add .pat File** [Hatch Manager](../hatch-manager/) -valintaikkunan alalaidassa.
2. Valitse `.pat`-tiedosto järjestelmän valitsimessa. Vain vakiomuotoinen rasterointikuviotiedosto kelpaa.

Komento päättyy heti kun tiedostovalitsin avautuu — enempää kehotetta, napsautusta tai terminaalisyötettä ei tule. Kuviot rekisteröityvät ja ilmestyvät **User**-ryhmään heti kun tiedosto on valittu.

## Mitä latauksessa tapahtuu

- **`.pat`-tiedosto on säiliö, ei yksittäinen kuvio.** Yksi tiedosto määrittelee tavallisesti monta nimettyä kuviota, ja ne kaikki lisätään yhdessä. Tässä HatchAdd eroaa [FontAdd](../font-add/)-komennosta, jossa yksi `.ttf` on yksi fontti.
- **Itse tiedostoa ei säilytetä.** Se luetaan kerran, pilkotaan kuvioikseen, ja jokainen kuvio tallennetaan erikseen omalla nimellään. Siksi yhden kuvion voi myöhemmin poistaa koskematta niihin, jotka tulivat sen mukana — ja siksi **User**-ryhmä listaa kuviot aakkosjärjestyksessä nimen mukaan eikä sen mukaan, mistä tiedostosta ne tulivat.
- **Kuvio, jonka nimi vastaa olemassa olevaa, korvaa sen.** Näin on tarkoitus asettaa arvovaltaiset määritelmät KulmanLabin omien likiarvojen tilalle: lataa oikea `acad.pat`, niin sen versiot `ANSI31`:stä ja muista vakionimistä ottavat vallan.
- **Kuviot tallennetaan käyttäjäkohtaisesti, ei piirustuskohtaisesti.** Ne elävät selaimessa (IndexedDB), latautuvat automaattisesti seuraavalla KulmanLab CAD:n avauskerralla ja ovat käytettävissä jokaisessa piirustuksessa.
- **Tiedosto, jossa ei ole kelvollisia kuviomäärityksiä, ei lisää mitään.** Kirjasto jää täsmälleen ennalleen.

## Näppäinreferenssi

HatchAddilla ei ole omaa näppäimistötoimintoa — koko komento on selaimen oma tiedostonvalintaikkuna. Ikkunan peruuttaminen (tai tiedoston valitsematta jättäminen) jättää kuviokirjaston ennalleen.

## Liittyvät komennot

| Komento | Mitä se tekee |
|---------|-------------|
| [Hatch Manager](../hatch-manager/) | Selaa kuviokirjastoa elävän mallinäytteen kanssa ja poista ladattuja kuvioita |
| [Hatch](../hatch/) | Täyttää suljetun alueen kirjaston kuviolla |
| [FontAdd](../font-add/) | Sama suoran latauksen pikatie `.ttf`-fonteille |
