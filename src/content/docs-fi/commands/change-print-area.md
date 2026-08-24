---
title: ChangePrintArea — rajaa Print Managerin vienti suorakulmioon
description: ChangePrintArea-komento valitsee kaksi vastakkaista kulmaa piirtoalueelta määrittääkseen alueen, jonka Print Manager vie. Tukee kirjoitettuja X,Y-koordinaatteja ja tarttumista, ja muistaa alueen erikseen mallitilalle ja jokaiselle asettelulle.
keywords: [CAD tulostusalue, CAD-viennin rajaus, change print area komento, print manager rajaus, CAD vientialue, kulmanlab]
group: file
order: 5
---

# ChangePrintArea

`ChangePrintArea`-komento määrittää suorakulmaisen alueen, jonka [Print Manager](../print-manager/) vie. Se toimii tyhjällä piirtoalueella Print Managerin ollessa piilotettuna ja ottaa kaksi vastakkaista kulmaa — samat kaksi napsautusta kuin [Rectangle](../rectangle/), joten kirjoitetut koordinaatit ja tarttuminen toimivat täsmälleen samoin.

## Alueen valinta

1. Kirjoita `ChangePrintArea` terminaaliin tai napsauta **Change Area** Print Managerin sivupalkissa. Print Manager piiloutuu ja piirtoalue muuttuu vuorovaikutteiseksi.
2. **Napsauta ensimmäistä kulmaa** tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta vastakkaista kulmaa** tai kirjoita `X,Y` uudelleen.

Print Manager avautuu uudelleen uusi alue esikatselussa, joka mukautuu alueen tarkkaan kuvasuhteeseen.

Kulmat tarttuvat kahvoihin ja leikkauspisteisiin kuten mikä tahansa muu pisteen valinta, joten voit rajata piirrettyyn geometriaan silmämäärän sijaan. Kulmien järjestyksellä ei ole väliä: vastakkaiset kulmat määrittävät saman suorakulmion.

Peruuta painamalla `Escape`. Mitään ei kirjoiteta, joten Print Manager avautuu sillä alueella, joka sillä jo oli.

## Missä alue muistetaan

Valinta tallennetaan kontekstikohtaisesti, ei yleisesti:

| Konteksti | Paikka |
|---|---|
| Mallitila | Yksi jaettu paikka |
| Jokainen asettelu | Oma, erikseen säilytettävä paikka |

Print Managerin avaaminen uudelleen samassa asettelussa — tai mallitilassa — palauttaa sen kontekstin viimeisimmän rajauksen nollaamisen sijaan, ja asettelujen välillä vaihtaminen jättää kunkin alueen koskemattomaksi.

Tämä säilyy vain muistissa. Sivun lataaminen uudelleen tyhjentää kaikki tallennetut alueet, ja Print Manager palaa alla oleviin oletusarvoihin.

## Oletusalue

Jos nykyiselle kontekstille ei ole tallennettu mitään, Print Manager avautuu kohteeseen:

| Konteksti | Oletus |
|---|---|
| Mallitila | Kaikkien objektien rajaava suorakulmio — sama laajuus, johon [Fit](../fit/) zoomaa |
| Jokainen asettelu | Koko arkki |

## Liittyvät komennot

| Komento | Mitä se tekee |
|---|---|
| [Print Manager](../print-manager/) | Vienti-ikkuna, jota tämä alue koskee |
| [Rectangle](../rectangle/) | Sama kahden kulman valinta, mutta piirtää polylinen |
| [Fit](../fit/) | Zoomaa laajuuteen, jota mallitila käyttää oletuksena |
