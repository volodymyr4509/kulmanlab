---
title: Arc-komento — Piirrä Kolmipisteisiä Kaaria KulmanLab CAD:issa
description: Arc-komento piirtää ympyrän kaaren kolmen napsautetun pisteen kautta käyttäen ympäri piirtävän ympyrän geometriaa. Alku- ja loppukahvat antavat vetää kaaren päätepisteitä uuteen kulmaan ja säteeseen sijoituksen jälkeen. Täysi DXF-edestakainen matka ARC-entiteetteinä.
keywords: [CAD arc-komento, kolmipisteinen kaari CAD, ympäri piirtävä ympyrä kaari, piirrä kaari CAD, ARC DXF-entiteetti, kaaren kahvamuokkaus, kulmanlab]
group: shapes
order: 5
---

# Arc

Komento `arc` piirtää ympyrän kaaren kolmen napsauttamasi pisteen kautta. Kaari lasketaan ainutlaatuisena kaikkien kolmen pisteen kautta kulkevana ympäri piirtävänä ympyränä — keskipistettä tai sädettä ei tarvitse määrittää suoraan. Kaari kulkee ensimmäisestä napsautuksesta kolmanteen napsautukseen, toisen kautta.

## Kaaren piirtäminen

1. Kirjoita `arc` terminaaliin tai napsauta **Arc**-painiketta työkalurivillä.
2. **Napsauta ensimmäistä pistettä** — kaaren toinen pää. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta toista pistettä** — piste, jonka kautta kaaren on kuljettava (ohjaa kaarevuutta ja suuntaa). Koordinaattien syöttö toimii myös täällä.
4. **Napsauta kolmatta pistettä** — kaaren toinen pää. Kaari sijoitetaan ja komento päättyy. Koordinaattien syöttö toimii myös täällä.

```
           ● (2. napsautus — käyrän keskipiste)
          / \
         /   \
        ●     ●
      1.        3.
```

Viivan esikatselu yhdistää kaksi ensimmäistä napsautusta, kun sijoitat kolmatta. Toisesta napsautuksesta eteenpäin live-kaaren esikatselu seuraa kohdistinta.

> **Kollineaariset pisteet**: jos kaikki kolme pistettä ovat suoralla viivalla, kaarta ei voida laskea eikä mitään entiteettiä sijoiteta. Siirrä toista pistettä pois viivalta ja yritä uudelleen.

## Koordinaattien syöttö

Missä tahansa kolmesta vaiheesta voit kirjoittaa tarkan sijainnin napsauttamisen sijaan:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi pisteen.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti |
| `Escape` | Hylkää kaikki sijoitetut pisteet ja poistu |

## Kahvamuokkaus — päätepisteiden ja säteen säätö

Valittu kaari näyttää kolme kahvaa:

| Kahva | Sijainti | Mitä se tekee |
|------|----------|--------------|
| **Keskipiste** | Ympäri piirtävän ympyrän geometrinen keskus | Siirtää koko kaarta; säde ja kulmat pysyvät muuttumattomina |
| **Alku** | Kaaren ensimmäinen päätepiste | Vedä siirtääksesi alkua ympäri piirtävää ympyrää pitkin — muuttaa sekä alkukulmaa että sädettä |
| **Loppu** | Kaaren viimeinen päätepiste | Vedä siirtääksesi loppua ympäri piirtävää ympyrää pitkin — muuttaa sekä loppukulmaa että sädettä |

Alku- tai loppukahvan vetäminen sijoittaa sen vetokohtaan ja laskee uudelleen sekä kulman että säteen tästä uudesta sijainnista suhteessa keskipisteeseen. Vastakkainen päätepiste pysyy kiinteänä.

## Kaarien valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee, jos napsautus osuu lähelle kaaren käyrää (ei jännettä) |
| **Vedä oikealle** (tiukka) | Kaaren varrelle jaettujen näytepisteiden on kaikkien oltava laatikon sisällä |
| **Vedä vasemmalle** (risteys) | Mikä tahansa kaaren näytepiste, joka osuu laatikon sisään, valitsee sen |

## Tuetut muokkauskomennot

| Komento | Mitä kaarelle tapahtuu |
|---------|------------------------|
| [Move](../move/) | Siirtää keskipisteen; säde ja kulmat pysyvät muuttumattomina |
| [Copy](../copy/) | Luo identtisen kaaren uuteen sijaintiin |
| [Rotate](../rotate/) | Kiertää keskipisteen ja siirtää alku-/loppukulmia kierron määrällä |
| [Mirror](../mirror/) | Peilaa keskipisteen ja kääntää alku-/loppukulmat peiliakselin yli |
| [Scale](../scale/) | Skaalaa keskipisteen sijainnin ja kertoo säteen skaalauskertoimella |
| [Offset](../offset/) | Luo samankeskisen kaaren suuremmalla tai pienemmällä säteellä, sama kulmaväli |
| [Delete](../delete/) | Poistaa kaaren |

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
| Center X / Center Y | Ympäri piirtävän ympyrän keskus |
| Radius | Ympäri piirtävän ympyrän säde |
| Start Angle | Kulma asteina, jossa kaari alkaa (mitattuna positiivisesta X-akselista) |
| End Angle | Kulma asteina, jossa kaari päättyy |

## Arc vs Circle — kumpaa käyttää

| | Arc | Circle |
|---|-----|--------|
| Kaari | Osittainen — ensimmäisestä kolmanteen napsautukseen | Täysi 360° |
| Syöttötapa | Kolme pistettä käyrällä | Keskipiste + säde (napsauta tai kirjoita) |
| Kirjoitettu syöte | X,Y-koordinaatti jokaiselle pisteelle | Sädearvo (keskipiste hyväksyy myös X,Y:n) |
| Koon muutos sijoituksen jälkeen | Vedä alku-/loppukahvoja | Vedä mitä tahansa pääsuunnan kahvaa |
| Paras käyttö | Pyöristykset, pyöristetyt kulmat, kaarevat polut | Täydet reiät, pyöreät ominaisuudet |

## DXF — ARC-entiteetti

Kaaret tallennetaan `ARC`-entiteetteinä DXF-tiedostossa, tallentaen keskipisteen koordinaatit, säteen, alkukulman ja loppukulman. Kaikki ominaisuudet — mukaan lukien väri, taso, linetype, linetype-mittakaava ja paksuus — säilyvät edestakaisessa matkassa ilman häviötä. Mikä tahansa DXF-yhteensopiva sovellus (LibreCAD, FreeCAD jne.) lukee nämä standardikaarina.
