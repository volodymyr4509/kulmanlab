---
title: Spline CV — Piirrä B-Splinejä Sijoittamalla Ohjauspisteitä
description: Spline CV -komento piirtää kuutiollisen B-splinen sijoittamalla ohjauspisteitä. Käyrä vetäytyy kohti pisteitä, mutta kulkee vain ensimmäisen ja viimeisen kautta (kiinnitetyt solmut). Jokaista CV-kahvaa voidaan vetää muotoillakseen käyrää uudelleen sijoituksen jälkeen. Täysi DXF-edestakainen matka SPLINE-entiteetteinä.
keywords: [CAD spline-komento, B-splinen ohjauspisteet, kiinnitetty spline CAD, piirrä spline CAD, SPLINE DXF-entiteetti, splinen kahvamuokkaus, kulmanlab]
group: shapes
order: 8
---

# Spline CV

Komento `splinecv` piirtää **kuutiollisen B-splinen** sijoittamalla ohjauspisteitä (CV:t). Tuloksena oleva käyrä vetäytyy kohti kutakin CV:tä, mutta ei kulje niiden kautta — paitsi aivan ensimmäisessä ja viimeisessä kärjessä, joissa **kiinnitetyt solmut** ankkuroivat käyrän tarkasti. Tämä antaa intuitiivisen muotokontrollin: vedä kärkeä työntääksesi käyrää sitä kohti pakottamatta sitä koskettamaan jokaista pistettä.

## Splinen piirtäminen ohjauspisteillä

1. Kirjoita `splinecv` terminaaliin tai napsauta **Spline CV**-painiketta työkalurivillä.
2. **Napsauta sijoittaaksesi ohjauspisteitä** — jokainen napsautus lisää kärjen. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. Paina **Enter** viimeistelläksesi (vähintään 2 kärkeä vaaditaan).

```
  CV ●         ● CV
      \       /
       \     /    ← käyrä vedetty kohti CV:tä
        \   /         mutta ei kulje niiden kautta
  CV ●   ●   ● CV (alku/loppu: käyrä koskettaa tässä)
```

Elävä esikatselu päivittyy, kun siirrät kohdistinta jokaisen kärjen jälkeen, näyttäen miltä spline näyttäisi seuraavalla pisteellä kohdistimen sijainnissa. Paina **Escape** hylätäksesi kaikki sijoitetut kärjet ja poistuaksesi.

## Koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin mille tahansa ohjauspisteelle:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi kärjen.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti, tai viimeistele spline jos syöte ei ole käynnissä ja ≥ 2 kärkeä on olemassa |
| `Escape` | Hylkää kaikki kärjet ja poistu |

## Kahvamuokkaus — muotoilu uudelleen ohjauspisteiden kautta

Valittu CV-spline näyttää yhden kahvan per ohjauspiste:

| Kahva | Sijainti | Mitä se tekee |
|------|----------|--------------|
| **Ohjauspiste** | Jokaisessa CV-sijainnissa | Vedä siirtääksesi kyseistä CV:tä — käyrä muotoillaan uudelleen kohti uutta sijaintia |

Yhtä "siirrä koko spline" -kahvaa ei ole. Siirtääksesi koko splinen, käytä [Move](../move/)-komentoa.

## CV-splinejen valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee, jos napsautus osuu lähelle mitä tahansa pistettä käyrällä |
| **Vedä oikealle** (tiukka) | Kaikkien käyrän varrelle jaettujen näytepisteiden on oltava valintalaatikon sisällä |
| **Vedä vasemmalle** (risteys) | Mikä tahansa käyrän osa, joka leikkaa valintalaatikon rajan, valitsee sen |

## Tuetut muokkauskomennot

| Komento | Mitä splinelle tapahtuu |
|---------|---------------------------|
| [Move](../move/) | Siirtää kaikkia ohjauspisteitä samalla siirtymällä |
| [Copy](../copy/) | Luo identtisen splinen uuteen sijaintiin |
| [Rotate](../rotate/) | Kiertää kaikkia CV:tä valitun perustepisteen ympäri |
| [Mirror](../mirror/) | Peilaa kaikki CV:t peiliakselin yli |
| [Scale](../scale/) | Skaalaa kaikkia CV:tä yhtenäisesti perustepisteestä |
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
| Control Vertices | Kaikkien CV:iden koordinaatit |
| Fit Points | Tyhjä CV-splineille; täytetty vain sovituspiste-splineille |

## Spline CV vs Spline Fit — kumpaa käyttää

| | Spline CV | Spline Fit |
|---|-----------|------------|
| Käyrä kulkee pisteiden kautta | Vain ensimmäinen ja viimeinen (kiinnitetty) | Tarkalleen jokaisen napsautetun pisteen kautta |
| Muotokontrolli | Vedä CV:tä kohti aluetta | Siirrä sovituspisteitä, joita käyrän on kosketettava |
| Kahvamuokkauksen vaikutus | CV siirtyy → käyrä vetäytyy | Sovituspiste siirtyy → käyrä sovitetaan uudelleen |
| Paras käyttö | Sileät esteettiset käyrät, vapaamuotoiset polut | Käyrät, joiden on osuttava tiettyihin koordinaatteihin |

## DXF — SPLINE-entiteetti (ohjauspistemuoto)

CV-splinet tallennetaan `SPLINE`-entiteetteinä DXF-tiedostossa, tallentaen asteen, solmuvektorin ja kaikkien ohjauspisteiden koordinaatit. Kaikki ominaisuudet — väri, taso, linetype, linetype-mittakaava ja paksuus — säilyvät edestakaisessa matkassa ilman häviötä. `splineFlag` asetetaan arvoon `9` (CV-spline), jotta muoto säilyy uudelleenlatauksessa. Mikä tahansa DXF-sovellus, joka tukee `SPLINE`-entiteettejä CV-datalla, lukee nämä oikein.
