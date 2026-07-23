---
title: Circle-komento — Piirrä Ympyröitä Keskipisteen ja Säteen Avulla
description: Circle-komento sijoittaa ympyrän napsauttamalla keskipisteen ja sitten napsauttamalla tai kirjoittamalla säteen. Neljä pääsuunnan kahvaa antaa muuttaa sädettä vetämällä ilman komennon ajamista uudelleen. Täysi DXF-edestakainen matka CIRCLE-entiteetteinä.
keywords: [CAD circle-komento, piirrä ympyrä CAD, ympyrän säteen syöttö, muuta ympyrän kokoa kahva, CIRCLE DXF-entiteetti, dimradius ympyrä, kulmanlab]
group: shapes
order: 4
---

# Circle

Komento `circle` piirtää ympyrän, jonka määrittelee keskipiste ja säde. Kun keskipiste on napsautettu, voit asettaa säteen joko napsauttamalla toista pistettä piirtoalueella tai kirjoittamalla tarkan luvun — molemmat vaihtoehdot ovat käytössä samanaikaisesti.

## Ympyrän piirtäminen

1. Kirjoita `circle` terminaaliin tai napsauta **Circle**-painiketta työkalurivillä.
2. **Napsauta keskipistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. Aseta säde — joko:
   - **Napsauta mitä tahansa pistettä** piirtoalueella — etäisyydestä keskipisteestä tulee säde, tai
   - **Kirjoita säde** ja paina **Enter** tarkkaa arvoa varten.

Ympyrä sijoitetaan välittömästi ja komento päättyy.

```
  keskipiste ●
          \  säteen viivan esikatselu
           \
            ● ← napsauta tästä, tai kirjoita numero
```

Säteen vaiheessa live-esikatselu näyttää ympyrän nykyisellä kohdistimen etäisyydellä ja piirtää myös säteen viivan keskipisteestä nykyiseen pisteeseen.

## Keskipisteen koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa keskipisteen sijainnin:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi keskipisteen ja siirtyäksesi säteen syöttöön.

## Kirjoitettu säde

Kun keskipiste on sijoitettu, kirjoittaminen rakentaa välittömästi säteen arvoa:

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero säteen arvoon |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sijoita ympyrä kirjoitetulla säteellä |

Kertynyt arvo näytetään terminaalin kehotteessa (esim. `enter radius of circle: 25`). Esikatselu päivittyy näyttämään kirjoitetun säteen, kun kohdistin ohjaa säteen viivan merkin suuntaa.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö (keskipistevaihe), tai säteen numero (sädevaihe) |
| `,` | Lukitse X ja siirry Y:n syöttöön (keskipistevaihe) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti tai säde |
| `Escape` | Peruuta ja nollaa |

## Kahvamuokkaus — säteen koon muuttaminen

Valittu ympyrä näyttää viisi kahvaa:

| Kahva | Sijainti | Mitä se tekee |
|------|----------|--------------|
| **Keskipiste** | Keskipiste | Siirtää koko ympyrää; säde pysyy muuttumattomana |
| **Vasen** | Vasemmanpuoleisin piste (keskipiste − säde) | Vedä asettaaksesi uuden säteen = etäisyys keskipisteeseen |
| **Oikea** | Oikeanpuoleisin piste (keskipiste + säde) | Vedä asettaaksesi uuden säteen = etäisyys keskipisteeseen |
| **Ylä** | Ylin piste | Vedä asettaaksesi uuden säteen = etäisyys keskipisteeseen |
| **Ala** | Alin piste | Vedä asettaaksesi uuden säteen = etäisyys keskipisteeseen |

Kaikki neljä pääsuunnan kahvaa käyttäytyvät identtisesti — uusi säde vastaa etäisyyttä keskipisteestä vetokohtaan. Keskipiste pysyy kiinteänä.

## Ympyröiden valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee, jos napsautus osuu lähelle kehää |
| **Vedä oikealle** (tiukka) | Koko rajaavan neliön (keskipiste ± säde) on oltava laatikon sisällä |
| **Vedä vasemmalle** (risteys) | Mikä tahansa kehän osa, joka leikkaa tai koskettaa laatikon rajaa, valitsee ympyrän |

## Tuetut muokkauskomennot

| Komento | Mitä ympyrälle tapahtuu |
|---------|---------------------------|
| [Move](../move/) | Siirtää keskipisteen; säde pysyy muuttumattomana |
| [Copy](../copy/) | Luo identtisen ympyrän uudella keskipisteellä |
| [Rotate](../rotate/) | Kiertää keskipisteen perustepisteen ympäri; säde pysyy muuttumattomana |
| [Mirror](../mirror/) | Peilaa keskipisteen peiliakselin yli; säde pysyy muuttumattomana |
| [Scale](../scale/) | Skaalaa keskipisteen sijainnin ja kertoo säteen skaalauskertoimella |
| [Offset](../offset/) | Luo samankeskisen ympyrän suuremmalla tai pienemmällä säteellä |
| [Delete](../delete/) | Poistaa ympyrän |

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
| Center X / Center Y | Keskipisteen koordinaatit |
| Radius | Ympyrän säde piirustusyksikköinä |

## Circle vs Arc — kumpaa käyttää

| | Circle | Arc |
|---|--------|-----|
| Kaari | Täysi 360° | Osittainen — määritelty alku- ja loppukulmalla |
| Piirtotapa | Keskipiste + säde | Kolme pistettä käyrällä |
| Kirjoitettu syöte | Sädearvo | Ei mitään — vain napsautus |
| Koon muutoskahva | 4 pääsuunnan pistettä | Alku- ja loppupisteet (kulma + säde) |
| Mitoitus | Säde: [Dim Radius](../dim-radius/) · Halkaisija: [Dim Diameter](../dim-diameter/) | [Dim Radius](../dim-radius/) |
| Paras käyttö | Täydet reiät, pulttiympyrät, pyöreät ominaisuudet | Pyöristykset, osittaiset käyrät, kaarevat polut |

## DXF — CIRCLE-entiteetti

Ympyrät tallennetaan `CIRCLE`-entiteetteinä DXF-tiedostossa. Keskipisteen koordinaatit, säde, väri, taso, linetype, linetype-mittakaava ja paksuus säilyvät kaikki edestakaisessa matkassa ilman häviötä. Mikä tahansa DXF-yhteensopiva sovellus lukee nämä standardiympyröinä.
