---
title: Spline Fit — Piirrä Interpoloivia Splinejä Pisteiden Kautta
description: Spline Fit -komento piirtää kuutiollisen splinen, joka kulkee tarkalleen jokaisen napsautetun pisteen kautta. Sisäisesti käyrä tallennetaan sekä sovituspisteillä että lasketuilla ohjauspisteillä. Sovituspisteen kahvan vetäminen sovittaa koko käyrän uudelleen. Täysi DXF-edestakainen matka SPLINE-entiteetteinä.
keywords: [CAD spline fit -komento, interpoloiva spline CAD, spline pisteiden kautta, piirrä sileä käyrä CAD, SPLINE DXF sovituspisteet, splinen kahvamuokkaus, kulmanlab]
group: shapes
order: 9
---

# Spline Fit

Komento `splinefit` piirtää kuutiollisen splinen, joka kulkee jokaisen napsauttamasi pisteen kautta — interpoloivan käyrän. Toisin kuin [Spline CV](../spline-cv/), jossa käyrä vain vetäytyy kohti ohjauspisteitä, tässä käyrä pakotetaan osumaan jokaiseen napsautettuun koordinaattiin tarkasti. Sisäisesti editori sovittaa ohjauspisteitä tämän saavuttamiseksi, ja nämä CV:t tallennetaan sovituspisteiden ohella DXF-tiedostossa.

## Splinen piirtäminen sovituspisteiden kautta

1. Kirjoita `splinefit` terminaaliin tai napsauta **Spline Fit**-painiketta työkalurivillä.
2. **Napsauta sijoittaaksesi sovituspisteitä** — käyrä kulkee jokaisen kautta. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. Paina **Enter** viimeistelläksesi (vähintään 2 pistettä vaaditaan).

```
  ●──────●──────●──────●  ← käyrä kulkee tarkasti jokaisen napsautuksen kautta
  p1     p2     p3     p4
```

Elävä esikatselu näyttää nykyisen interpoloidun käyrän, kun siirrät kohdistinta, mukaan lukien mahdollisen seuraavan pisteen kohdistimen sijainnissa. Paina **Escape** hylätäksesi kaikki sijoitetut pisteet ja poistuaksesi.

## Koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin mille tahansa sovituspisteelle:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi sovituspisteen.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti, tai viimeistele spline jos syöte ei ole käynnissä ja ≥ 2 pistettä on olemassa |
| `Escape` | Hylkää kaikki pisteet ja poistu |

## Kahvamuokkaus — muotoilu uudelleen sovituspisteiden kautta

Valittu sovitusspline näyttää yhden kahvan per sovituspiste:

| Kahva | Sijainti | Mitä se tekee |
|------|----------|--------------|
| **Sovituspiste** | Jokaisessa napsautetussa sijainnissa | Vedä siirtääksesi kyseistä sovituspistettä — koko käyrä sovitetaan uudelleen kulkemaan uuden sijainnin kautta |

Yhden kahvan vetäminen sovittaa koko käyrän uudelleen, ei vain viereisiä segmenttejä. Tämä eroaa polylinjan kahvamuokkauksesta, jossa kärjen siirtäminen muotoilee uudelleen vain kaksi viereistä segmenttiä.

Yhtä "siirrä koko spline" -kahvaa ei ole. Siirtääksesi koko splinen, käytä [Move](../move/)-komentoa.

## Sovitussplinejen valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee, jos napsautus osuu lähelle mitä tahansa pistettä käyrällä |
| **Vedä oikealle** (tiukka) | Kaikkien käyrän varrelle jaettujen näytepisteiden on oltava valintalaatikon sisällä |
| **Vedä vasemmalle** (risteys) | Mikä tahansa käyrän osa, joka leikkaa valintalaatikon rajan, valitsee sen |

## Tuetut muokkauskomennot

| Komento | Mitä splinelle tapahtuu |
|---------|---------------------------|
| [Move](../move/) | Siirtää kaikkia sovituspisteitä ja uudelleen laskettuja CV:tä samalla siirtymällä |
| [Copy](../copy/) | Luo identtisen splinen uuteen sijaintiin |
| [Rotate](../rotate/) | Kiertää kaikkia sovituspisteitä valitun perustepisteen ympäri |
| [Mirror](../mirror/) | Peilaa kaikki sovituspisteet peiliakselin yli |
| [Scale](../scale/) | Skaalaa kaikkia sovituspisteitä yhtenäisesti perustepisteestä |
| [Delete](../delete/) | Poistaa splinen |

Splinet eivät tue **Offset**-, **Trim**- tai **Extend**-toimintoja.

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
| Degree | Polynomin aste — aina 3 (kuutiollinen) |
| Fit Points | Kaikkien napsautettujen läpikulkupisteiden koordinaatit |
| Control Vertices | Sisäisesti lasketut CV:t joita käytetään käyrän renderöintiin |

## Spline Fit vs Spline CV — kumpaa käyttää

| | Spline Fit | Spline CV |
|---|------------|-----------|
| Käyrä kulkee pisteiden kautta | Tarkalleen jokaisen napsautetun pisteen kautta | Vain ensimmäinen ja viimeinen (kiinnitetty) |
| Kahvamuokkauksen vaikutus | Sovituspiste siirtyy → koko käyrä sovitetaan uudelleen | CV siirtyy → käyrä vetäytyy kohti uutta sijaintia |
| Muodon ennustettavuus | Korkea — käyrä seuraa napsautuksia | Alempi — käyrä jää jälkeen CV:istä |
| Paras käyttö | Käyrät, joiden on osuttava tiettyihin koordinaatteihin | Sileät esteettiset käyrät, vapaamuotoiset polut |

## DXF — SPLINE-entiteetti (sovituspistemuoto)

Sovitussplinet tallennetaan `SPLINE`-entiteetteinä DXF-tiedostossa, tallentaen sekä sovituspisteiden koordinaatit että lasketut ohjauspisteet. `splineFlag` asetetaan arvoon `8` (fit-point-spline), jotta uudelleenlataava sovellus tietää, mikä pistejoukko näytetään muokattavina kahvoina. Kaikki ominaisuudet — väri, taso, linetype, linetype-mittakaava ja paksuus — säilyvät edestakaisessa matkassa ilman häviötä. DXF-sovellukset, jotka tukevat sovituspiste-splinejä (LibreCAD, FreeCAD), näyttävät sovituspisteet ensisijaisena muokattavana datana.
