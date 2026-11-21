---
title: "ObjectSnapSettings-komento — Ohjauspalkin kaikki asetukset"
description: "ObjectSnapSettings-komento avaa yhden ikkunan, jossa on ohjauspalkin kaikki asetukset — tartunta, tangenttitartunta, kulmanseuranta, nastat, kirjoitettu syöte, lasso ja näyttö — kukin selitettynä luettelon vieressä pienellä piirroksella."
keywords: ["kohdetartunnan asetukset CAD", "tangenttitartunta CAD", "object snap", "kulmanlab"]
group: interface
order: 9
---


# Object Snap Settings

`Tarttumisasetukset`-komento avaa yhden ikkunan, johon on koottu ohjauspalkin kaikki asetukset. Jokainen asetus selitetään luettelon vieressä pienellä piirroksella. Avaa se ohjauspalkin hammaspyöräpainikkeella tai kirjoita `Tarttumisasetukset`. Asetuksen muuttaminen täällä on sama kuin sen painikkeen kääntäminen palkissa.

## Asetukset

### Mihin kursori osuu

| Ohjauspalkki | Mitä se tekee |
|---|---|
| `Snap` | Kursori hyppää lähimpään ruudukon pisteeseen, joten valitsemasi pisteet osuvat tasakoordinaatteihin. Kohdetartunta kursorin lähellä menee yhä edelle. Ruudukon väli seuraa zoomausta. |
| `TANG` | Kun viivaa piirretään pisteestä, vie kursori kohtaan, jossa se juuri koskettaisi ympyrää, kaarta, ellipsiä tai splinikäyrää, niin se tarttuu siihen. Toimii Viivassa, Murtoviivassa ja muissa komennoissa sekä viivan tai murtoviivan päätä vedettäessä. |

### Apuviivat piirtäessä

| Ohjauspalkki | Mitä se tekee |
|---|---|
| `ANGL` | Kun kursori tulee lähelle jotakin näistä kulmista viimeisestä pisteestä, se lukittuu siihen suuntaan, joka näkyy katkoviivasäteenä. Lukittuna kirjoita pituus ja paina Enter, niin piste asettuu sille etäisyydelle. |
| `Pins` | Pidä kursoria hetki tartuntapisteen päällä kiinnittääksesi sen. Kiinnitetty piste lähettää vaaka- ja pystysuorat apuviivat, ja kursori tarttuu niihin ja niiden leikkauskohtiin. |
| `Dist` | Viimeksi kiinnitetty piste toimii aloituspisteenä: kun kursori lukittuu kulmaan nastasta, kirjoita pituus ja paina Enter, niin piste asettuu sille etäisyydelle siitä. Vaatii vektorinastat. |

### Syöttö ja valinta

| Ohjauspalkki | Mitä se tekee |
|---|---|
| `Rel` | Kirjoitettu X,Y-piste mitataan viimeksi valitusta pisteestä, kuin se alkaisi @-merkillä. Askelpalautin poistaa @:n piirustuksen omien koordinaattien pistettä varten. Pois päältä kirjoitat @:n itse siirtymää varten. |
| `Lasso` | Paina ja vedä tyhjässä kohdassa piirtääksesi vapaan silmukan haluamasi ympärille suorakulmion sijaan. Silmukan sisään jäävä valitaan. |

### Näyttö

| Ohjauspalkki | Mitä se tekee |
|---|---|
| `Grid` | Näyttää taustaruudukon. Sen väli muuttuu zoomatessa. Sen sammuttaminen ei lopeta ruudukkoon tarttumista. |
| `LWT` | Piirtää viivat niiden viivanpaksuudella, joten raskaammat viivat näyttävät paksummilta. Pois päältä jokainen viiva piirretään ohuena, mikä voi helpottaa tiheän piirustuksen lukemista. |

**ANGL**:llä on oma rivinsä askeleelle: valitse 10°, 20°, 30°, 45° tai 90° tai valitse **Mukautettu** ja kirjoita mikä tahansa kulma väliltä 1°–180°.

Tangenttitartunta, suhteellinen syöte ja lasso ovat oletuksena pois päältä. **Palauta oletukset** palauttaa kaikki asetukset alkutilaansa.

---

*Aiheeseen liittyvää: [Vector Pins](../../interface/vector-pins/), [Etäisyysseuranta](../../interface/distance-tracking/), [Ruudukko ja Tarttuminen](../../interface/grid-snap/), [Koordinaattien syöttö](../../interface/coordinate-entry/)*
