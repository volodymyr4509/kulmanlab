---
title: Vector Pins — Tartu Viitelinjoja KulmanLab CAD:issa
description: Vector Pins antaa sinun kiinnittää tarttumapisteen pitämällä kohdistinta sen päällä puoli sekuntia, ja seurata sitten kohdistinta katkoviivaisia vaaka- ja pystysuoria viitelinjoja pitkin kiinnitetyn pisteen kautta — kohdista uutta geometriaa olemassa oleviin pisteisiin ilman apuviivoja.
keywords: [vector pins, object snap tracking, viitelinjat, kohdistuksen seuranta, snap tracking CAD, apuviivat, kulmanlab]
group: interface
order: 2
---

# Vector Pins

**Vector Pins** on piirtoapuväline, jonka avulla voit kohdistaa uutta geometriaa olemassa oleviin pisteisiin ilman apuviivojen piirtämistä. Pidä kohdistinta tarttumapisteen päällä puoli sekuntia *kiinnittääksesi* sen — kiinnitys projisoi sitten näkymättömiä vaaka- ja pystysuoria viitelinjoja, ja kohdistin tarttuu niihin, kun se tulee lähelle. Se on KulmanLab CAD:in vastine object snap trackingille työpöytä-CAD-ohjelmistoissa.

Ominaisuutta ohjaa **Pins**-kytkin ohjauspalkissa (Grid-, Snap- ja ANGL-kytkinten vieressä). Se on **oletuksena päällä**, ja asetus säilyy istuntojen välillä.

## Pisteen kiinnittäminen

1. Aloita komento, joka pyytää pistettä — [Line](../../commands/line/), [Circle](../../commands/circle/), [Move](../../commands/move/) ja niin edelleen.
2. Siirrä kohdistin olemassa olevan geometrian tarttumapisteen päälle — päätepisteen, keskipisteen tai keskusmerkin.
3. **Pidä kohdistin paikallaan 500 ms.** Merkki muuttuu täytetyksi korostusväriseksi **neliöksi** — piste on nyt kiinnitetty.
4. Toista kiinnittääksesi niin monta pistettä kuin tarvitset. Jokainen kiinnitys jatkaa viitelinjojensa projisointia.

Kiinnittäminen toimii myös komennon ulkopuolella: valitun entiteetin **kahvan** päällä hovering kiinnittää sen samalla tavalla.

## Seuraaminen viitelinjoja pitkin

Jokainen kiinnitetty piste projisoi kaksi näkymätöntä viitelinjaa — yhden **vaakasuoran** ja yhden **pystysuoran** — sen tarkkojen koordinaattien kautta. Liikuttaessasi kohdistinta:

- Kiinnityksen pystysuoran linjan **12 px:n** sisällä kohdistin tarttuu siihen: katkoviivainen korostuslinja piirretään kiinnityksen kautta koko näkymän yli, ja **X-merkki** näyttää tarttuneen sijainnin. X-koordinaattisi on nyt *tarkalleen* kiinnityksen X.
- Sama pätee vaakasuoraan linjaan kiinnityksen Y-koordinaatille.
- Yhden linjan lähellä kummastakin suunnasta — jopa **kahdesta eri kiinnityksestä** — kohdistin tarttuu niiden **leikkauspisteeseen**, ja molemmat katkoviivalinjat näytetään. Tämä sijoittaa pisteen tarkalleen kohtaan (kiinnityksen A X, kiinnityksen B Y).

```
                    ┆ (katkoviiva, kiinnityksen ■ pystysuora linja)
                    ┆
   ■ kiinnitys A ┄┄┄┄┄┄┄┄ ✕ ← kohdistin tarttunut leikkauspisteeseen:
                    ┆    X kiinnityksestä B, Y kiinnityksestä A
                    ┆
                    ■ kiinnitys B
```

Tarttuneet koordinaatit otetaan suoraan kiinnityksestä, joten kohdistus on tarkka — ei pyöristystä tai liukulukujen ajautumista.

## Tarttumisen prioriteetti

Tavalliset geometriset tarttumat — päätepiste, keskipiste, keskus ja leikkauspiste — **ovat etusijalla** kiinnityksen viitelinjoihin nähden. Jos kohdistin on lähempänä pistetarttumaa kuin viitelinjaa, pistetarttuma voittaa. Kiinnityksen seuranta täyttää aukot geometrian välillä, se ei koskaan estä tarttumista itse geometriaan.

## Yhdistäminen kulmalukitukseen

Vector pins toimivat yhdessä kulman seurannan kanssa (**ANGL**-kytkin ohjauspalkissa). Kun komento on lukinnut kohdistimen kulmanseurantasäteeseen:

- Kohdistin pysyy rajoitettuna lukittuun suuntaan.
- Kiinnityksen tarttuminen vaihtaa kohdistumaan **lukitun säteen ja kiinnityksen viitelinjojen leikkauspisteisiin** (vain säteen lähtöpisteen edessä).

Tämä vastaa kysymyksiin kuten *"missä 45°:n suunta viimeisestä pisteestäni leikkaa tuon ympyrän keskipisteen korkeuden?"* — lukitse kulma, ja kohdistin napsahtaa leikkauspisteeseen. Säteen tarttuminen toimii jokaisessa kulmalukituksen sisältävässä komennossa: Line, Polyline, Arc, Circle, Move, Copy, Area, Leader ja ViewportCopy.

## Kiinnitysten elinkaari

Kiinnitykset on tarkoitettu käynnissä olevaan toimintoon, ei pysyviksi merkeiksi. Kaikki kiinnitykset tyhjennetään, kun:

| Tapahtuma | Miksi |
|-------|-----|
| **Uusi komento** käynnistyy | Jokainen toiminto alkaa puhtaalla viitejoukolla |
| **Escape**-näppäintä painetaan | Standardi peruuta-kaikki-käyttäytyminen |
| **Pins**-kytkin kytketään pois | Ominaisuuden pois kytkeminen poistaa sen tilan |
| Vaihdetaan **malli- ja paperitilan** välillä | Kiinnityksen koordinaatit ovat tilakohtaisia |

Yhden komennon sisällä voit kiinnittää, piirtää, kiinnittää uudelleen ja jatkaa — kiinnitykset säilyvät jokaisen napsautuksen läpi monipisteisessä komennossa kuten Polyline.

## Tyypillinen työnkulku

Piirrä viiva, joka alkaa suoraan ympyrän keskipisteen alapuolelta:

1. Kirjoita `line` (tai napsauta Line-painiketta).
2. Pidä kohdistin ympyrän **keskusmerkin** päällä puoli sekuntia — se muuttuu korostusväriseksi neliöksi.
3. Siirrä kohdistinta alaspäin: ympyrän pystysuoran linjan lähellä kohdistin lukittuu katkoviivaiseen viitelinjaan.
4. Napsauta — viiva alkaa tarkalleen ympyrän X-koordinaatista.
5. Jatka viivaa normaalisti; kiinnitys pysyy käytettävissä seuraaville pisteille.

## Huomautuksia

- 500 ms:n hovering toimii millä tahansa tarttumamerkillä, johon kohdistin voi ulottua — mukaan lukien komennon aikana ilmestyvät tarttumapisteet.
- Jo kiinnitetyn pisteen päällä hovering ei tee mitään; kiinnitystä ei voi poistaa hoveringilla. Poista kiinnitykset **Escape**-näppäimellä tai kytkemällä **Pins** pois.
- Viitelinjojen tarttumisetäisyys on sama 12 näyttöpikseliä, jota tavallinen pistetarttuminen käyttää, joten tuntuma on johdonmukainen millä tahansa zoomtasolla.
- Kiinnitetyt pisteet renderöityvät korostusvärisinä neliöinä tavallisten tarttumamerkkiensä sijaan.
