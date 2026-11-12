---
title: "Koordinaattien syöttö — tarkat, suhteelliset ja napapisteet"
description: "Kun komento pyytää pistettä, kirjoita se napsauttamisen sijaan: X,Y tarkkaan sijaintiin, @X,Y mittaamiseen viimeisestä pisteestä ja etäisyys<kulma napakoordinaattipisteeseen. Rel-kytkin aloittaa jokaisen kirjoitetun pisteen suhteellisena."
keywords: ["koordinaattien syöttö CAD", "suhteelliset koordinaatit CAD", "napakoordinaatit CAD", "coordinate entry", "kulmanlab"]
group: interface
order: 8
---

# Koordinaattien syöttö

Kun komento pyytää pistettä — [Line](../../commands/line/)n alkua, [Rectangle](../../commands/rectangle/)n kulmaa, [Move](../../commands/move/)n peruspistettä tai kahvaa, jota vedät — voit kirjoittaa sen napsauttamisen sijaan. Aloita luvun kirjoittaminen, niin terminaali näyttää kirjoittamasi; sijoita piste painamalla **Enter** tai **Space**.

## Neljä tapaa kirjoittaa piste

| Kirjoitat | Piste on |
|---|---|
| `100,50` | Kohdassa X 100, Y 50 |
| `@100,50` | 100 X-suunnassa ja 50 Y-suunnassa viimeisestä pisteestä |
| `100<45` | 100 origosta, kulmassa 45° |
| `@100<45` | 100 viimeisestä pisteestä, kulmassa 45° |

Kulmat ovat asteina vastapäivään X-akselista, joten `@50<90` on 50 suoraan ylös ja `@50<180` 50 vasemmalle. Kumpi tahansa arvo voi olla negatiivinen.

## Viimeinen piste

`@` mittaa viimeisestä pisteestä, joka on napsautettu tai kirjoitettu missä tahansa komennossa — edellisen komennon viimeinen napsautus lasketaan, samoin juuri vetämäsi kahva. Jos viimeistä pistettä ei vielä ole, `@100,50` luetaan kuten `100,50`. Viimeinen piste unohdetaan, kun vaihdat mallitilan ja layoutin välillä ja kun piirustus avataan.

## Rel: oletuksena suhteellinen

Ohjauspalkin **Rel**-kytkin aloittaa jokaisen kirjoitetun pisteen suhteellisena: heti kun kirjoitat ensimmäisen numeron, sen eteen tulee `@`, jolloin `100,50` muuttuu muotoon `@100,50`. Paina **Backspace** `@`:n kohdalla tehdäksesi juuri siitä pisteestä absoluuttisen. Jos viimeistä pistettä ei vielä ole, `@`:ta ei lisätä. Rel on oletuksena pois päältä ja muistetaan muiden ohjauspalkin kytkinten kanssa.

## Näppäimet kirjoitettaessa

| Näppäin | Vaikutus |
|---|---|
| `0`–`9`, `.`, `-` | Kirjoita luku; `-` vain alkuun |
| `@` | Tee pisteestä suhteellinen, X:n alussa |
| `,` tai **Space** | Päätä X ja siirry Y:hyn |
| `<` | Päätä X etäisyytenä ja siirry sen kulmaan |
| **Enter** tai **Space** | Sijoita piste, kun Y:llä on arvo |
| **←** **→** **Home** **End** | Siirrä kohdistinta kirjoitettavan arvon sisällä |
| **Backspace** | Poista kohdistimen edestä; tyhjän Y:n alussa palaa X:ään |

Piste, jota ei voi lukea lukuina, jää terminaaliin korjattavaksi. Jokainen kirjoitettu piste jättää terminaalin historiaan rivin sellaisena kuin sen kirjoitit — `Syötetty @100<45` — ennen komennon riviä, josta näkyy, mihin se osui.

## Kirjoitetut pisteet ja kulmanseuranta

Kun kohdistin on lukittu kulmanseurannan säteeseen, kirjoitettu luku antaa etäisyyden säteen suuntaan X:n sijaan. Jos kirjoitat ensin `@`, alkaa kokonainen piste, joten `@100,50` toimii myös lukitulla säteellä.

---

*Aiheeseen liittyvää: [Etäisyysseuranta](../distance-tracking/) pituuden kirjoittamiseen lukittua suuntaa pitkin ja [Vector Pins](../vector-pins/) mittaamiseen kiinnitetystä pisteestä.*
