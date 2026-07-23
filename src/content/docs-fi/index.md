---
title: KulmanLab CAD — Komentoreferenssi
description: KulmanLab CAD -komentoreferenssi — kattava opas jokaiseen piirto-, muokkaus-, merkintä-, taso-, mittaus- ja tiedostokomentoon KulmanLab CAD:issa.
keywords: [KulmanLab, KulmanLab CAD, CAD-komennot, ilmainen selain-CAD, DXF-editori verkossa, piirtokomennot, kulmanlab-komennot]
group: overview
order: 1
---

# KulmanLab CAD — Komentoreferenssi

Tervetuloa **KulmanLab CAD**:in komentoreferenssiin. [KulmanLab CAD](https://kulmanlab.com) on ilmainen selainpohjainen CAD-työkalu DXF-tiedostojen piirtämiseen, muokkaamiseen ja vientiin — ei asennusta tarvita. Käytä sivupaneelia selataksesi kaikkia saatavilla olevia komentoja ryhmiteltynä paneelin mukaan.

## Muodot

| Komento | Mitä se tekee |
|---------|-------------|
| [Line](./commands/line/) | Piirrä suora viiva kahden pisteen välille |
| [Polyline](./commands/polyline/) | Piirrä avoin useasta segmentistä koostuva polku |
| [Rectangle](./commands/rectangle/) | Piirrä akseleihin kohdistettu suorakulmio |
| [Circle](./commands/circle/) | Piirrä ympyrä keskipisteen ja säteen avulla |
| [Arc](./commands/arc/) | Piirrä kaari kolmen pisteen kautta |
| [Ellipse](./commands/ellipse/) | Piirrä ellipsi keskipisteen ja kahden akselin avulla |
| [Text](./commands/text/) | Sijoita tekstimerkintä piirtoalueelle |
| [Spline CV](./commands/spline-cv/) | Piirrä spline sijoittamalla ohjauspisteitä |
| [Spline Fit](./commands/spline-fit/) | Piirrä spline joka kulkee napsautettujen pisteiden kautta |

## Muokkaa

| Komento | Mitä se tekee |
|---------|-------------|
| [Move](./commands/move/) | Siirrä valitut entiteetit uuteen sijaintiin |
| [Copy](./commands/copy/) | Kopioi valitut entiteetit uuteen sijaintiin |
| [Rotate](./commands/rotate/) | Kierrä valittuja entiteettejä perustepisteen ympäri |
| [Mirror](./commands/mirror/) | Peilaa valitut entiteetit linjan yli |
| [Scale](./commands/scale/) | Skaalaa valittuja entiteettejä perustepisteen ympäri |
| [Align](./commands/align/) | Siirrä, kierrä ja tarvittaessa skaalaa entiteettejä pistepareja käyttäen |
| [Array Grid](./commands/array-grid/) | Luo ruudukko kopioita valituista entiteeteistä |
| [Delete](./commands/delete/) | Poista valitut entiteetit piirustuksesta |
| [Trim](./commands/trim/) | Leikkaa viivasegmentti leikkauspisteistä |
| [Extend](./commands/extend/) | Jatka viivaa lähimpään rajaleikkaukseen |
| [Offset](./commands/offset/) | Luo rinnakkainen kopio entiteetistä annetulla etäisyydellä |
| [Fillet](./commands/fillet/) | Pyöristä kulma kahden viivan välillä tangenttikaarella |
| [Chamfer](./commands/chamfer/) | Leikkaa suora diagonaalikulma kahden viivan tai murtoviivan välille |
| [Undo](./commands/undo/) | Kumoa viimeisin toiminto |
| [Redo](./commands/redo/) | Tee viimeisin kumottu toiminto uudelleen |

## Merkinnät

| Komento | Mitä se tekee |
|---------|-------------|
| [Leader](./commands/leader/) | Piirrä monijohdinmerkintä nuolenkärjellä ja tekstillä |
| [Leader+](./commands/leader-add/) | Lisää ylimääräinen haara olemassa olevaan monijohtimeen |
| [Leader−](./commands/leader-remove/) | Poista haara olemassa olevasta monijohtimesta |
| [Dimension Linear](./commands/dim-linear/) | Lisää vaakasuora tai pystysuora mitta |
| [Dimension Aligned](./commands/dim-aligned/) | Lisää kahteen pisteeseen kohdistettu mitta |
| [Dimension Continue](./commands/dim-continue/) | Ketjuta uusi mitta edellisestä |
| [Dimension Radius](./commands/dim-radius/) | Lisää säteen mitta ympyrälle tai kaarelle |
| [Dimension Diameter](./commands/dim-diameter/) | Lisää halkaisijan mitta ympyrälle |
| [Dimension Angular](./commands/dim-angular/) | Lisää kulman mitta kahdelle viivalle, kaarelle tai ympyrälle |

## Tasot

| Komento | Mitä se tekee |
|---------|-------------|
| [LayerMakeCurrent](./commands/layer-make-current/) | Aseta nykyinen taso vastaamaan napsautetun entiteetin tasoa |
| [LayerMatch](./commands/layer-match/) | Kohdista valitut entiteetit uudelleen lähdeentiteetin tasolle |
| [LayerIsolate](./commands/layer-isolate/) | Jäädytä kaikki tasot paitsi valittujen entiteettien tasot |
| [LayerUnfreezeAll](./commands/layer-unfreeze-all/) | Poista kaikkien tasojen jäädytys yhdellä kertaa |

## Asettelut

| Komento | Mitä se tekee |
|---------|-------------|
| [ViewportRectangle](./commands/viewport-rectangle/) | Luo näkymäikkuna paperiasetteluun napsauttamalla kaksi kulmaa |
| [ViewportCopy](./commands/viewport-copy/) | Monista näkymäikkuna uuteen sijaintiin |
| [PageManager](./commands/page-manager/) | Muokkaa aktiivisen asettelun paperikokoa ja mittakaavaa |

## Navigointi

| Komento | Mitä se tekee |
|---------|-------------|
| [Pan](./commands/pan/) | Napsauta ja vedä siirtääksesi näkymäikkunaa |
| [Zoom In](./commands/zoom-in/) | Lähennä näkymäikkunaa |
| [Zoom Out](./commands/zoom-out/) | Loitonna näkymäikkunaa |
| [Fit](./commands/fit/) | Sovita kaikki entiteetit näkymäikkunaan |

## Mittaus

| Komento | Mitä se tekee |
|---------|-------------|
| [Distance](./commands/distance/) | Mittaa etäisyys kahden pisteen välillä |
| [Angle](./commands/angle/) | Mittaa kulma kolmen pisteen välillä |
| [Area](./commands/area/) | Mittaa monikulmion ala ja piiri |

## Tyyli

| Komento | Mitä se tekee |
|---------|-------------|
| [Match Properties](./commands/match-properties/) | Kopioi väri, taso ja muut ominaisuudet entiteetistä toisiin |
| [Font Manager](./commands/font-manager/) | Selaa, valitse ja lataa omia TTF-fontteja |

## Tiedosto

| Komento | Mitä se tekee |
|---------|-------------|
| [Import](./commands/import/) | Avaa DXF- tai JSON-piirustustiedosto |
| [New File](./commands/new-file/) | Aloita uusi, tyhjä piirustus |
| [Files](./commands/files/) | Selaa ja palauta viimeaikaisia piirustuksia |
| [Print](./commands/print/) | Vie piirustusalue kuvana tai PDF-tiedostona |
| [Export](./commands/export/) | Lataa piirustus DXF- tai JSON-muodossa |
| [WipeStorage](./commands/wipestorage/) | Poista kaikki piirustukset selaimen tallennustilasta |

## Palautuminen

Jos sovellus kaatuu joka käynnistyksellä (esimerkiksi erittäin suurten koordinaattien käsittelyn jälkeen), voit poistaa kaikki paikallisesti tallennetut tiedot lisäämällä parametrin URL-osoitteeseen:

```
https://kulmanlab.com/?resetKulmanLocalStorage
```

Tämä poistaa kaiken selaimen paikallisesta tietokannasta ja aloittaa uuden, tyhjän piirustuksen. Parametri poistaa itsensä URL-osoitteesta automaattisesti. Käytä tätä viimeisenä keinona, kun [WipeStorage](./commands/wipestorage/) ei ole käytettävissä, koska sovellus ei lataudu lainkaan.

## Näin komennot toimivat

Jokainen komento noudattaa samaa kaavaa:

1. **Aktivoi** — napsauta työkalurivin painiketta tai kirjoita komennon nimi näytön alareunan terminaaliin.
2. **Seuraa kehotetta** — terminaali näyttää, mitä syötettä seuraavaksi odotetaan.
3. **Viimeistele tai peruuta** — useimmat komennot viimeistyvät automaattisesti viimeisen syötteen jälkeen. Paina **Escape** milloin tahansa peruuttaaksesi.

## Objektien valitseminen

Useat muokkauskomennot (Move, Copy, Rotate, Mirror, Scale, Delete) jakavat saman valintakäyttäytymisen:

- **Napsauta** entiteettiä valitaksesi tai poistaaksesi valinnan.
- **Vedä oikealle** (vasemmalta oikealle) tiukkaa valintaa varten — vain kokonaan laatikon sisällä olevat entiteetit valitaan.
- **Vedä vasemmalle** (oikealta vasemmalle) risteysvalintaa varten — mikä tahansa laatikon leikkaava entiteetti valitaan.
- Paina **Enter** tai **Space** vahvistaaksesi valinnan ja siirtyäksesi seuraavaan vaiheeseen.
