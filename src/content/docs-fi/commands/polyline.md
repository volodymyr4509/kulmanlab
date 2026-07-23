---
title: Polyline-komento — Piirrä Monisegmenttisiä Polkuja
description: Polyline-komento piirtää minkä tahansa määrän yhdistettyjä segmenttejä tallennettuna yhtenä LWPOLYLINE-entiteettinä. Kärki- ja segmentin keskipistekahvat antavat muotoilla mitä tahansa polun osaa uudelleen luomisen jälkeen. Tukee offsetia; ei tue trimiä tai extendiä.
keywords: [CAD polyline-komento, piirrä murtoviiva CAD, monisegmenttinen polku CAD, LWPOLYLINE DXF, muotoile murtoviiva uudelleen, kärkikahva CAD, offset murtoviiva, kulmanlab]
group: shapes
order: 2
---

# Polyline

Komento `polyline` piirtää yhdistetyn polun, jossa on mikä tahansa määrä suoria segmenttejä, kaikki tallennettuna yhtenä `LWPOLYLINE`-entiteettinä. Koska koko polku on yksi objekti, sen valitseminen valitsee kaikki segmentit kerralla — siirrä, kierrä tai skaalaa koko muoto yhdessä toiminnossa. Tämä on keskeinen ero ketjutettuihin [Lines](../line/), joissa jokainen segmentti on itsenäinen entiteetti.

Polylinjat voivat olla myös **suljettuja**: [Rectangle](../rectangle/)-komento käyttää samaa `LWPOLYLINE`-entiteettiä close-lipulla asetettuna.

## Polylinjan piirtäminen

1. Kirjoita `polyline` terminaaliin tai napsauta **Polyline**-painiketta työkalurivillä.
2. **Napsauta ensimmäistä pistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta jokaista seuraavaa pistettä** — jokainen napsautus lisää segmentin. Koordinaattien syöttö toimii jokaisessa vaiheessa.
4. Paina **Enter** tai **Space** viimeistelläksesi (vaatii vähintään 2 sijoitettua pistettä).

```
  ●──────●
  1.     2.
          \
           \  segmentti 3 (käynnissä — kohdistin täällä)
            ●  ← napsauta lisätäksesi, Enter/Space viimeistelläksesi
```

**Escape**-näppäimen painaminen milloin tahansa hylkää kaikki sijoitetut pisteet ja poistuu komennosta.

## Koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin mille tahansa kärjelle:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi kärjen.

## Kulmalukitus ja tarkka segmentin pituus

Sama 45°:n tartuntalogiikka kuin [Line](../line/#angle-locking-and-exact-length-input)-komennossa pätee kahden peräkkäisen pisteen välillä. Kun lukittu akseliin:

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero segmentin pituuteen |
| `-` | Negatiivinen pituus — kääntää suunnan akselia pitkin (vain ensimmäinen merkki) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sijoita seuraava piste kirjoitetulle etäisyydelle |

Nykyinen kertynyt pituus näkyy terminaalin kehotteessa reaaliajassa. Napsauta lukittuna, ja napsautus projisoidaan akselille, joten uusi kärki osuu tarkalleen sille.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö, tai segmentin pituus kulmalukittuna |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti tai pituus, tai viimeistele polylinja jos mitään ei ole kirjoitettu ja ≥ 2 pistettä on olemassa |
| `Space` | Viimeistele polylinja (sama kuin Enter kun syöte ei ole käynnissä) |
| `Escape` | Hylkää kaikki pisteet ja poistu |

## Kahvamuokkaus — kärjet ja segmentin keskipisteet

Valittu polylinja näyttää kaksi kahvatyyppiä:

| Kahva | Sijainti | Mitä se tekee |
|------|----------|--------------|
| **Kärki** | Jokaisessa sijoitetussa pisteessä | Vedä sijoittaaksesi kyseisen kärjen uudelleen; kaikki yhdistetyt segmentit venyvät seuraamaan |
| **Segmentin keskipiste** | Jokaisen segmentin keskus | Vedä siirtääksesi kyseisen segmentin **molemmat** päätepisteet yhdessä, säilyttäen segmentin pituuden ja kulman |

Segmentin keskipistekahva on ainutlaatuinen polylinjoille — sen avulla voit liu'uttaa yksittäistä segmenttiä sivuttain muuttamatta sen pituutta. [Line](../line/)-entiteetillä keskipistekahva sen sijaan aktivoi Move-komennon koko entiteetille.

Yhtä "siirrä koko polylinja" -kahvaa ei ole. Siirtääksesi koko polun, käytä [Move](../move/)-komentoa.

## Polylinjojen valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee polylinjan, jos napsautus osuu minkä tahansa segmentin osumaetäisyyden sisään |
| **Vedä oikealle** (tiukka) | Kaikkien kärkien on oltava laatikon sisällä |
| **Vedä vasemmalle** (risteys) | Mikä tahansa segmentti, joka leikkaa laatikon rajan, valitsee koko polylinjan |

Koska polylinja on yksi entiteetti, risteysvalinta, joka koskettaa mitä tahansa segmenttiä, valitsee kaikki segmentit.

## Tuetut muokkauskomennot

Polylinjat tukevat kaikkia yleisiä muunnoksia ja offsetia, mutta **eivät** trimiä tai extendiä (nämä ovat vain [Line](../line/)-entiteeteille):

| Komento | Mitä polylinjalle tapahtuu |
|---------|------------------------------|
| [Move](../move/) | Siirtää kaikkia kärkiä samalla siirtymällä |
| [Copy](../copy/) | Luo identtisen polylinjan uuteen sijaintiin |
| [Rotate](../rotate/) | Kiertää kaikkia kärkiä valitun perustepisteen ympäri |
| [Mirror](../mirror/) | Peilaa kaikki kärjet peiliakselin yli |
| [Scale](../scale/) | Skaalaa kaikkia kärkiä yhtenäisesti perustepisteestä |
| [Offset](../offset/) | Luo rinnakkaisen polylinjan kiinteällä kohtisuoralla etäisyydellä |
| [Delete](../delete/) | Poistaa polylinjan piirustuksesta |

## Ominaisuudet

Kun polylinja on valittu, ominaisuuspaneeli näyttää:

**Yleiset**

| Ominaisuus | Oletus | Merkitys |
|----------|---------|---------|
| Väri | 256 (ByLayer) | ACI-väri-indeksi |
| Taso | `0` | Tason kohdistus |
| Linetype | ByLayer | Nimetty viivakuvio |
| Linetype Scale | 1 | Viivakuvion skaalauskerroin |
| Thickness | 0 | Suulakepuristuksen paksuus |

**Geometria**

| Ominaisuus | Merkitys |
|----------|---------|
| Closed | Yhdistyykö viimeinen kärki takaisin ensimmäiseen |
| Vertex Count | Kärkien kokonaismäärä |
| Vertices | Kaikkien kärkien koordinaattiluettelo |

## Polyline vs Line — kumpaa käyttää

| | Polyline | Line |
|---|---------|------|
| Entiteettien määrä | Yksi `LWPOLYLINE` koko polulle | Yksi `LINE` per segmentti |
| Suljettu muoto | Kyllä (close-lippu) | Ei |
| Trim / Extend | Ei | Kyllä — segmentti kerrallaan |
| Segmentin keskipistekahva | Siirtää koko segmentin | Aktivoi Moven entiteetille |
| Paras käyttö | Ääriviivat, muodot joita pidät kokonaisina | Apuviivat, geometria jota aiot leikata |

## DXF — LWPOLYLINE-entiteetti

Polylinjat tallennetaan `LWPOLYLINE`-entiteetteinä DXF-tiedostossa. Kaikki ominaisuudet — kärkien koordinaatit, close-lippu, väri, taso, linetype, linetype-mittakaava ja paksuus — säilyvät edestakaisessa matkassa ilman häviötä. [Rectangle](../rectangle/)-komennolla piirretyt suorakulmiot tallennetaan myös `LWPOLYLINE`-muodossa (suljettu, neljä kärkeä) eivätkä ole erotettavissa DXF-tasolla.

`LWPOLYLINE`-entiteetit mistä tahansa DXF-yhteensopivasta sovelluksesta (LibreCAD, FreeCAD jne.) luetaan takaisin täysin muokattavina polylinjoina editorissa.
