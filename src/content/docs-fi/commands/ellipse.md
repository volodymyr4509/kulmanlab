---
title: Ellipse-komento — Piirrä Ellipsejä Kahdella Akselilla
description: Ellipse-komento piirtää ellipsin kolmella napsautuksella — keskipiste, ensimmäisen akselin päätepiste (mihin tahansa suuntaan), sitten toisen akselin pituus. Kaksi akselia ovat aina kohtisuorassa. Jokaisella puoliakselilla on oma kahvansa itsenäistä koon muuttamista varten sijoituksen jälkeen. Täysi DXF-edestakainen matka ELLIPSE-entiteetteinä.
keywords: [CAD ellipse-komento, piirrä ellipsi CAD, kierretty ellipsi CAD, ellipsin akselit, ELLIPSE DXF-entiteetti, ellipsin kahvamuokkaus, akselisuhde, kulmanlab]
group: shapes
order: 6
---

# Ellipse

Komento `ellipse` piirtää ellipsin käyttäen kolmea napsautusta: keskipisteen, ensimmäisen (suuremman) puoliakselin päätepisteen missä tahansa kulmassa, ja toisen (pienemmän) puoliakselin pituuden. Kaksi akselia ovat aina kohtisuorassa toisiinsa nähden — toisen akselin suunta johdetaan automaattisesti ensimmäisestä.

## Ellipsin piirtäminen

1. Kirjoita `ellipse` terminaaliin tai napsauta **Ellipse**-painiketta työkalurivillä.
2. **Napsauta keskipistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta ensimmäisen akselin päätepistettä** — asettaa sekä suunnan että pituuden ensimmäiselle puoliakselille. Koordinaattien syöttö toimii myös täällä.
4. **Aseta toisen akselin pituus** — siirrä kohdistinta kohtisuoraan ensimmäiseen akseliin nähden, napsauta sitten tai kirjoita pituus.

```
               ● ← ensimmäisen akselin päätepiste (vaihe 3)
              /
  keskipiste ●  /  ← ensimmäinen akseli (mikä tahansa kulma)
            |
            ● ← kohdistin täällä asettaa toisen akselin pituuden (vaihe 4)
```

Ellipsi sijoitetaan vaiheen 4 jälkeen ja komento päättyy.

## Akselien syöttö — napsauta, koordinaatti tai kirjoitettu pituus

**Keskipiste (vaihe 2):** napsauta tai kirjoita `X,Y` tarkkaa sijaintia varten.

**Ensimmäisen akselin päätepiste (vaihe 3):** napsauta, tai kirjoita `X,Y` tarkkaa koordinaattia varten. Kulmalukitus tarttuu myös 45°:n lisäyksiin — lukittuna, kirjoita pituus ja paina **Enter** sijoittaaksesi päätepisteen tarkalleen kyseiselle etäisyydelle.

**Toinen akseli (vaihe 4):** kirjoitettu pituus on aina käytettävissä — kulmalukitusta ei tarvita. Suunta on jo kiinnitetty kohtisuoraan ensimmäiseen akseliin nähden; kirjoittaminen asettaa vain pituuden.

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero akselin pituuteen (toisen akselin vaihe) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sijoita akselin päätepiste kirjoitetulle pituudelle |

## Koordinaattien syöttö (keskipiste ja ensimmäisen akselin päätepiste)

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** vahvistaaksesi.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö (keskipiste-/ensimmäinen akselivaihe), tai akselin pituus kulmalukittuna |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti tai pituus |
| `Escape` | Peruuta ja nollaa |

## Kahvamuokkaus — itsenäinen akselien koon muuttaminen

Valittu ellipsi näyttää viisi kahvaa:

| Kahva | Määrä | Mitä se tekee |
|------|-------|--------------|
| **Keskipiste** | 1 | Siirtää koko ellipsiä; molemmat akselit pysyvät muuttumattomina |
| **Pääakselin päätepisteet** | 2 (pidemmän akselin vastakkaiset päät) | Vedä muuttaaksesi pääpuoliakselin pituutta; pienemmän akselin absoluuttinen koko pysyy vakiona |
| **Sivuakselin päätepisteet** | 2 (lyhyemmän akselin vastakkaiset päät) | Vedä muuttaaksesi sivupuoliakselin pituutta; pääakseli pysyy muuttumattomana |

Pää- ja sivuakselin kahvat ovat itsenäisiä — voit muotoilla ellipsiä uudelleen ajamatta komentoa uudelleen.

## Ellipsien valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee, jos napsautus osuu lähelle ellipsin ääriviivaa |
| **Vedä oikealle** (tiukka) | Ellipsin akseleihin kohdistetun rajauslaatikon on sovittava kokonaan valintalaatikon sisään |
| **Vedä vasemmalle** (risteys) | Mikä tahansa ellipsin ääriviivan osa, joka leikkaa valintalaatikon rajan, valitsee sen |

## Tuetut muokkauskomennot

| Komento | Mitä ellipsille tapahtuu |
|---------|-----------------------------|
| [Move](../move/) | Siirtää keskipisteen; molemmat akselit pysyvät muuttumattomina |
| [Copy](../copy/) | Luo identtisen ellipsin uudella keskipisteellä |
| [Rotate](../rotate/) | Kiertää keskipisteen sijainnin ja pääakselivektorin samalla kulmalla |
| [Mirror](../mirror/) | Peilaa keskipisteen ja laskee uudelleen pääakselin suunnan peiliakselin yli |
| [Scale](../scale/) | Skaalaa keskipisteen sijainnin ja kertoo molempien puoliakselien pituudet kertoimella |
| [Offset](../offset/) | Luo samankeskisen ellipsin siirrettynä ulos- tai sisäänpäin kiinteällä etäisyydellä |
| [Delete](../delete/) | Poistaa ellipsin |

## Ominaisuudet

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
| Center X / Center Y | Ellipsin keskipiste |
| Major Axis X / Major Axis Y | Vektori keskipisteestä pääakselin päätepisteeseen (koodaa sekä suunnan että pituuden) |
| Axis Ratio | Sivupuoliakselin ja pääpuoliakselin suhde (0 < suhde ≤ 1) |
| Start Angle / End Angle | Parametriset kulmat asteina; molemmat ovat 0°/360° täydelle ellipsille |

## Ellipse vs Circle — kumpaa käyttää

| | Ellipse | Circle |
|---|---------|--------|
| Akselit | Kaksi itsenäistä puoliakselia missä tahansa kulmassa | Yksi säde, symmetrinen |
| Kierto | Voidaan sijoittaa missä tahansa kulmassa | Ei kiertoa |
| Kirjoitettu syöte | Pituus per akseli | Vain säde |
| Kahvan koon muutos | Pää- ja sivuakseli itsenäisesti | Kaikki neljä pääsuunnan pistettä yhtäläisesti |
| Paras käyttö | Vinot näkymät, soikeat ominaisuudet, perspektiivireiät | Symmetriset pyöreät ominaisuudet |

## DXF — ELLIPSE-entiteetti

Ellipsit tallennetaan `ELLIPSE`-entiteetteinä DXF-tiedostossa. Muoto tallentaa keskipisteen, koko pääakselivektorin (suunta + pituus) ja akselisuhteen. Kierto, muoto ja kaikki tyyliominaisuudet säilyvät edestakaisessa matkassa ilman häviötä. Ympyrää **ei** tallenneta degeneroituneena ellipsinä — nämä kaksi entiteettityyppiä pysyvät erillisinä DXF-mallissa.
