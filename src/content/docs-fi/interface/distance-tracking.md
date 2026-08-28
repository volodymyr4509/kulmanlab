---
title: Etäisyysseuranta — Kirjoita tarkka pituus kiinnitetystä pisteestä
description: Dist-kytkin antaa uusimman vektorinastan toimia ankkurina, josta kulmaseuranta mittaa, joten voit kirjoittaa tarkan pituuden ja sijoittaa pisteen täsmälliselle etäisyydelle ja kulmaan olemassa olevasta pisteestä — myös muodon ensimmäisen pisteen.
keywords: [etäisyyden syöttö CAD, tarkan pituuden kirjoittaminen CAD, Dist-kytkin, etäisyysseuranta nastoista, napaseuranta CAD, suora etäisyyden syöttö, kulmanlab]
group: interface
order: 3
---

# Etäisyysseuranta

**Etäisyysseurannan** avulla voit sijoittaa pisteen kirjoittamalla tarkan pituuden napsauttamisen sijaan. Sitä ohjaa ohjauspalkin **Dist**-kytkin, [Pins](../vector-pins/):n ja ANGL:n vieressä. Se on **oletuksena päällä**, ja asetus säilyy istuntojen välillä.

Se, mitä se tuo, on kapeaa mutta hyödyllistä: se antaa **uusimman vektorinastan** toimia ankkurina, josta kulmaseuranta mittaa. Ilman sitä komento voi mitata vain pisteestä, jonka se on itse jo kerännyt — eli muodon *ensimmäisellä* pisteellä ei ole lainkaan mitään, mistä mitata.

## Kolme kytkintä toimivat yhdessä

Etäisyysseuranta ei ole omavarainen. Kahden muun kytkimen on oltava oikeassa tilassa, ennen kuin voit kirjoittaa pituuden:

| Kytkin | Tehtävä |
|--------|---------|
| **Pins** | Antaa viitepisteen. Pidä osoitin tarttumispisteen päällä 500 ms kiinnittääksesi sen — katso [Vector Pins](../vector-pins/). |
| **ANGL** | Antaa kulman. Etäisyysseuranta tulee käytettäväksi vasta, kun osoitin on lukittu kulmaan, joten ANGL on asetettava askeleeseen (10°, 20°, 30°, 45°, 90°) eikä Off-tilaan. |
| **Dist** | Sallii nastan käytön ankkurina pelkän komennon oman pisteen sijaan. |

Jos Pins ja Dist ovat päällä mutta ANGL on **Off**, mitään ei tapahdu: ei ole lukittua suuntaa, jota pitkin pituutta mitattaisiin.

## Miten Pins ja Dist on kytketty toisiinsa

Etäisyysseuranta on merkityksetön, kun nastat ovat pois päältä, joten kytkimet pidetään tahdissa:

- **Pins päälle** kytkee myös **Dist päälle**.
- **Pins pois** kytkee myös **Dist pois**.
- **Dist päälle** kytkee **Pins päälle**, ellei se jo ollut.
- **Dist pois** jättää **Pins päälle**.

Dist ei siis voi koskaan olla aktiivinen Pins:n ollessa pois päältä, mutta voit säilyttää nastaseurannan kohdistusta varten ja kytkeä etäisyysseurannan pois — kätevää, kun haluat viivaimet ilman että osoitin lukittuu nastaan, vaikka tähtäsit omaan edelliseen pisteeseesi.

## Pisteen sijoittaminen tarkalle etäisyydelle

1. Kytke **Pins** ja **Dist** päälle ja aseta **ANGL** kulma-askeleeseen.
2. Käynnistä komento, joka pyytää pistettä — [Line](../../commands/line/), [Circle](../../commands/circle/), [Rectangle](../../commands/rectangle/) ja niin edelleen.
3. **Kiinnitä viitepiste**: pidä osoitin olemassa olevan tarttumispisteen päällä, kunnes merkki muuttuu täytetyksi neliöksi.
4. Siirrä osoitinta pois nastasta suunnilleen haluamaasi kulmaan. Kun se lähestyy jotakin ANGL-askelta, suunta **lukittuu** — nastasta ilmestyy seurantaosoitin.
5. **Kirjoita pituus** ja paina **Enter** tai **Space**. Piste sijoitetaan täsmälleen sen etäisyyden päähän nastasta, lukittua kulmaa pitkin.

Päätteen kehote kertoo, milloin voit kirjoittaa. Lukitussa tilassa se kuuluu:

```
pick start point or enter length: [ ]
```

ja kirjoittamasi arvo näkyy hakasulkeiden sisällä.

## Miksi ensimmäisellä pisteellä on väliä

Tämä on tapaus, joka muuten olisi mahdoton. Oletetaan, että viivan pitää alkaa täsmälleen 250 yksikköä olemassa olevasta kulmasta oikealle:

1. Käynnistä [Line](../../commands/line/).
2. Kiinnitä olemassa oleva kulma.
3. Liiku oikealle, kunnes suunta lukittuu 0°:een.
4. Kirjoita `250` ja paina **Enter**.

Viiva alkaa nyt pisteestä 250 yksikön päässä kulmasta — ilman apugeometriaa ja ilman päässälaskua. Ilman Distiä Line-komento ei ole vielä kerännyt yhtään pistettä, joten ei ole mitään, *mistä* kirjoitettu pituus mitattaisiin — voisit vain napsauttaa suunnilleen tai piirtää apuviivan ja poistaa sen jälkeenpäin.

**Toisesta pisteestä eteenpäin** komennolla on jo oma ankkurinsa (edellinen piste), ja sitä käytetään ensin. Nastaa käytetään vaihtoehtona vain silloin, kun oma ankkurisi ei ole lukittu, joten jonkin kiinnittäminen ei kaappaa jo saamaasi lukitusta.

## Kirjoittaminen jäädyttää lukituksen

Heti kun alat näppäillä numeroita, ankkuri lakkaa muuttumasta. Mikä piste olikaan lukittuna ensimmäisen numeron saapuessa, se pysyy ankkurina, kunnes vahvistat tai tyhjennät kentän — hiiren liikuttaminen kesken syötön ei siirrä mittausta hiljaisesti toiseen nastaan tai komennon omaan pisteeseen.

## Näppäimistöviite

| Näppäin | Toiminto |
|---------|----------|
| `0`–`9`, `.` | Lisää pituuteen |
| `-` | Negatiivinen pituus — kääntää suunnan lukittua kulmaa pitkin (vain ensimmäinen merkki) |
| `Backspace` | Poista viimeinen merkki |
| `Enter` / `Space` | Sijoita piste kirjoitettuun pituuteen |
| `Escape` | Peruuta komento; lukitus ja kirjoitettu arvo tyhjennetään |

Pituuden kirjoittaminen on valinnaista. Suunnan ollessa lukittuna voit yhä napsauttaa, ja piste projisoidaan lukitulle kulmalle.

## Missä se toimii

Etäisyysseuranta on käytettävissä jokaisessa komennossa, joka pyytää osoittamaan pisteitä:

[Line](../../commands/line/), [Polyline](../../commands/polyline/), [Arc](../../commands/arc/), [Circle](../../commands/circle/), [Ellipse](../../commands/ellipse/), [Rectangle](../../commands/rectangle/), [Spline Cv](../../commands/spline-cv/), [Spline Fit](../../commands/spline-fit/), [Leader](../../commands/leader/), [Area](../../commands/area/), [Move](../../commands/move/), [Copy](../../commands/copy/) ja [ViewportCopy](../../commands/viewport-copy/).

## Katso myös

- [Vector Pins](../vector-pins/) — pisteiden kiinnittäminen ja seuranta niiden viivaimia pitkin
- [Grid & Snap](../grid-snap/) — ohjauspalkin muut tarkkuusapuvälineet
- [Distance](../../commands/distance/) — olemassa olevan etäisyyden mittaaminen uuden kirjoittamisen sijaan
