---
title: "Point-komento — pisteiden sijoittaminen piirustukseen KulmanLab CADissa"
description: "Point-komento sijoittaa pisteen jokaisella napsautuksella, kirjoitetulla X,Y:llä tai etäisyydellä lukitun suunnan suuntaan, kunnes painat Enter, Space tai Escape. Pisteet piirretään pienenä pisteenä, ne kantavat nykyisen tason ja värin ja kulkevat mukana DXF POINT -entiteetteinä."
keywords: ["CAD pistekomento", "pisteen sijoittaminen CAD", "DXF POINT -entiteetti", "POINT DXF", "kulmanlab"]
group: shapes
order: 11
---

# Point

`Piste`-komento sijoittaa pisteen jokaisella valinnalla ja pysyy aktiivisena, kunnes painat Enter, Space tai Escape. Piste on koko vailla oleva sijainti: se piirretään pienenä pisteenä ja se kantaa nykyisen tason ja värin. Se tallennetaan `POINT`-entiteettinä.

## Pisteiden sijoittaminen

1. Kirjoita `Piste` terminaaliin tai napsauta **Point**, Shapes-paneelin viimeistä painiketta.
2. **Napsauta** pisteen paikkaa tai kirjoita `X,Y` ja paina **Enter** tarkkaa sijaintia varten. Jokainen valinta sijoittaa pisteen ja terminaali kirjaa sen koordinaatit; komento pysyy aktiivisena seuraavaa varten.
3. Tai lukitse suunta [vektorineulasta](../../interface/vector-pins/) ja kirjoita etäisyys — piste laskeutuu täsmälleen sen verran sitä pitkin.
4. Lopeta painamalla **Enter**, **Space** tai **Escape**. Enter ja Space lopettavat vain, kun mitään ei kirjoiteta.

## Miltä piste näyttää

Piste piirretään 1 px:n säteisenä pisteenä jokaisella zoomaustasolla, joten se pysyy näkyvissä loitonnettaessa eikä kasva lähennettäessä. Piirustuksen pistetyyliä (`$PDMODE` ja `$PDSIZE`) ei vielä lueta, joten jokainen piste on piste, mitä DXF sanookaan.

## Pisteiden muokkaaminen

Valitulla pisteellä on yksi kahva, joka siirtää sitä. Ikkunavalinta ottaa pisteen, kun se on ikkunan sisällä, kumpaan suuntaan tahansa vedettäessä.

[Move](../move/), [Copy](../copy/), [Rotate](../rotate/), [Mirror](../mirror/) ja [Scale](../scale/) toimivat pisteille kuten mille tahansa muulle entiteetille. Ominaisuusikkuna näyttää Position X ja Position Y sekä värin ja tason.

## DXF — POINT-entiteetti

Pisteet luetaan DXF:stä ja kirjoitetaan sinne `POINT`-entiteetteinä sijainnin, värin ja tason kanssa (ryhmäkoodit 10/20, 62 ja 8), ja ne kulkevat mukana myös tallennetussa JSONissa. Ennen ne ohitettiin tuonnissa. [Export Manager](../export-manager/) listaa Points omana rivinään, joten ne voi jättää viennistä pois.

---

*Aiheeseen liittyvää: [Line](../line/) samaan koordinaattisyöttöön ja [Vector Pins](../../interface/vector-pins/) pisteen sijoittamiseen tietylle etäisyydelle suuntaa pitkin.*
