---
title: Rectangle-komento — Piirrä Kohdistettuja Suorakulmioita
description: Rectangle-komento luo akseleihin kohdistetun suorakulmion kahdesta vastakkaisesta kulmasta. Tulos on suljettu LWPOLYLINE, jossa on neljä kärkeä — identtinen minkä tahansa muun polylinjan kanssa sijoituksen jälkeen, joten jokainen polylinjan muokkauskomento koskee sitä.
keywords: [CAD rectangle-komento, piirrä suorakulmio CAD, akseleihin kohdistettu suorakulmio, suljettu murtoviiva CAD, LWPOLYLINE DXF, suorakulmion kahvamuokkaus, kulmanlab]
group: shapes
order: 3
---

# Rectangle

Komento `rectangle` piirtää akseleihin kohdistetun suorakulmion, jonka määrittelee kaksi vastakkaista kulmanapsautusta. Tulos tallennetaan **suljettuna `LWPOLYLINE`**-entiteettinä, jossa on neljä kärkeä — yksi jokaisessa kulmassa. Ei ole omistettua suorakulmion entiteettityyppiä: luomisen jälkeen muoto käyttäytyy täsmälleen kuten mikä tahansa muu [Polyline](../polyline/), ja jokainen polylinjan muokkaus koskee sitä.

## Suorakulmion piirtäminen

1. Kirjoita `rectangle` terminaaliin tai napsauta **Rectangle**-painiketta työkalurivillä.
2. **Napsauta ensimmäistä kulmaa**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta vastakkaista kulmaa** — suorakulmio sijoitetaan välittömästi ja komento päättyy. Koordinaattien syöttö toimii myös täällä.

```
  ● (ensimmäinen napsautus)────────────┐
  |                          |
  |   elävä esikatselu seuraa  |
  |   kohdistinta vaiheen 2 jälkeen  |
  └──────────────────────────● (toinen napsautus)
```

Kaksi napsautusta voivat olla mikä tahansa diagonaalisesti vastakkaisten kulmien pari — ylävasen + alaoikea, tai alavasen + yläoikea jne. Järjestyksellä ei ole väliä.

## Koordinaattien syöttö

Kummassakin kulmavaiheessa voit kirjoittaa tarkan sijainnin:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi kulman.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Enter` | Vahvista kirjoitettu koordinaatti |
| `Escape` | Peruuta |

Sivut ovat aina vaaka- ja pystysuoria — rectangle-komennolle ei ole kulmalukitusta.

## Kahvamuokkaus — muotoilu uudelleen luomisen jälkeen

Valittu suorakulmio näyttää kahvat jokaisessa kulmassa ja jokaisen sivun keskipisteessä:

| Kahva | Sijainti | Mitä se tekee |
|------|----------|--------------|
| **Kulma** | Jokainen 4 kärjestä | Vedä siirtääksesi kyseisen kärjen; kaksi viereistä sivua venyy seuraamaan — vastakkainen kulma pysyy kiinteänä |
| **Sivun keskipiste** | Jokaisen 4 sivun keskus | Vedä siirtääksesi kyseisen sivun molempia päätepisteitä yhdessä, säilyttäen sivun pituuden ja kulman |

Kulmakahvan vetäminen muuttaa suorakulmion muuksi kuin suorakulmaiseksi nelikulmioksi. Jos tarvitset vain eri kokoisen suorakulmion, vedä kulmaa pitäen sivut suunnilleen ortogonaalisina, tai poista se ja piirrä uusi.

## Suorakulmioiden valitseminen

Koska suorakulmio on polylinja, valinta toimii samalla tavalla:

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee, jos napsautus osuu mille tahansa neljästä sivusta |
| **Vedä oikealle** (tiukka) | Kaikkien neljän kärjen on oltava valintalaatikon sisällä |
| **Vedä vasemmalle** (risteys) | Mikä tahansa sivu, joka leikkaa laatikon rajan, valitsee koko suorakulmion |

## Tuetut muokkauskomennot

Kaikki polylinjan muokkauskomennot pätevät. Trim ja Extend ovat vain [Line](../line/)-entiteeteille eivätkä toimi suorakulmioissa:

| Komento | Mitä suorakulmiolle tapahtuu |
|---------|-------------------------------|
| [Move](../move/) | Siirtää kaikkia neljää kärkeä samalla siirtymällä |
| [Copy](../copy/) | Luo identtisen suorakulmion uuteen sijaintiin |
| [Rotate](../rotate/) | Kiertää kaikkia neljää kärkeä valitun perustepisteen ympäri |
| [Mirror](../mirror/) | Peilaa kaikki neljä kärkeä peiliakselin yli |
| [Scale](../scale/) | Skaalaa kaikkia neljää kärkeä yhtenäisesti perustepisteestä |
| [Offset](../offset/) | Luo rinnakkaisen (sisään- tai ulospäin suuntautuvan) suorakulmion kiinteällä etäisyydellä |
| [Delete](../delete/) | Poistaa suorakulmion piirustuksesta |

## Ominaisuudet

Kun suorakulmio on valittu, ominaisuuspaneeli näyttää samat kentät kuin mikä tahansa polylinja:

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
| Closed | Aina `true` suorakulmiolle |
| Vertex Count | Aina `4` muokkaamattomalle suorakulmiolle |
| Vertices | Kaikkien neljän kulman koordinaatit |

## Rectangle vs Polyline vs Line

| | Rectangle | Polyline | Line |
|---|-----------|---------|------|
| Piirtotapa | 2 napsautusta (kulmat) | Napsauta jokainen kärki | Napsauta jokainen päätepiste |
| Entiteettityyppi | Suljettu `LWPOLYLINE` | Avoin tai suljettu `LWPOLYLINE` | `LINE` per segmentti |
| Sivut aina ortogonaaliset | Kyllä (luotaessa) | Ei | Ei |
| Trim / Extend | Ei | Ei | Kyllä |
| Paras käyttö | Laatikot, kehykset, suorakulmaiset alueet | Mielivaltaiset ääriviivat ja polut | Yksittäiset segmentit, apuviivat |

## DXF — LWPOLYLINE-entiteetti

Suorakulmiot tallennetaan suljettuina `LWPOLYLINE`-entiteetteinä, joissa on neljä kärkeä. Kaikki ominaisuudet — kärkien koordinaatit, väri, taso, linetype, linetype-mittakaava ja paksuus — säilyvät edestakaisessa matkassa ilman häviötä.

DXF:ssä ei ole omistettua `RECTANGLE`-tyyppiä. Kun tiedosto avataan uudelleen, muoto näkyy suljettuna neljän kärjen polylinjana suorakulmion sijaan. Mikä tahansa DXF-katselin tai -editori, joka tukee `LWPOLYLINE`-muotoa (LibreCAD, FreeCAD jne.), näyttää sen oikein.
