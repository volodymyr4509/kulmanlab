---
title: Export Manager — Lataa piirustuksia DXF- tai JSON-muodossa
description: Lataa piirustus DXF- tai JSON-muodossa. Molemmat kantavat kaikki objektityypit — geometrian, tekstin, mitat, osoitusviivat, rasteroinnit — sekä tasot ja viivatyypit.
keywords: [vie DXF, vie CAD-tiedosto, lataa DXF selaimessa, tallenna DXF verkossa, vie JSON CAD, KulmanLab vienti, lataa CAD-tiedosto, DXF-vienti, tallenna piirustus tiedostoon, DXF-lataus]
group: file
order: 6
---

# Export Manager

Komento `exportmanager` lataa nykyisen piirustuksen tiedostojärjestelmääsi. Käytettävissä on kaksi muotoa, näytettynä rinnakkaisina kortteina: **DXF** yhteensopivuutta varten muiden CAD-työkalujen kanssa ja **JSON** täysin uskollista tallennusta varten KulmanLab CAD:n sisällä — kumpikin kortti listaa tarkasti, mitä entiteettityyppejä kyseinen muoto sisältää.

## Näin viet

1. Napsauta työkalurivin **Export**-painiketta (latauskuvake) tiedostopaneelissa, tai kirjoita `exportmanager` terminaaliin.
2. **Export Manager** -ponnahdusikkuna avautuu näyttäen JSON- ja DXF-kortit rinnakkain, kumpikin listaten mitä viedään.
3. Napsauta korttia valitaksesi muodon — **JSON** tai **DXF**.
4. Napsauta **Export \<FORMAT\>** -painiketta. Tiedosto ladataan automaattisesti oletuslatauskansioosi.

Paina `Escape` sulkeaksesi ponnahdusikkunan viemättä mitään.

## Muodon valitseminen

| Muoto | Tiedostopääte | Paras käyttö | Rajoitukset |
|-------|----------------|--------------|-------------|
| **JSON** *(natiivi)* | `.json` | Työn tallentaminen uudelleen avattavaksi KulmanLab CAD:ssa | Ei yhteensopiva muiden CAD-työkalujen kanssa |
| **DXF** | `.dxf` | Jakaminen FreeCAD:n, LibreCAD:n jne. kanssa | Kuinka paljon säilyy, riippuu vastaanottavasta ohjelmasta |

**Milloin käyttää JSON:ia:** aina kun haluat tallentaa täydellisen kopion työstäsi. JSON on KulmanLabin natiivi muoto ja säilyttää jokaisen entiteetin tarkasti — mukaan lukien mitat, viitejohtimet, hatchit ja kaikki tasotiedot.

**Milloin käyttää DXF:ää:** kun sinun täytyy luovuttaa piirustus jollekulle, joka käyttää toista CAD-sovellusta. Viety tiedosto käyttää AC1032 DXF-muotoa ja voidaan avata useimmissa DXF-yhteensopivissa työkaluissa.

## Mitä kukin muoto vie

### JSON-vienti

Jokainen entiteettityyppi sisältyy:

- Lines, Circles, Arcs, Ellipses, Polylines, Splines
- Text
- Mitat (lineaarinen, kohdistettu, jatkettu, säde, halkaisija)
- Leaders (multileaderit)
- Hatchit, mukaan lukien niiden kuvio, mittakaava, kulma ja origo
- Layers ja Linetypes

### DXF-vienti

Jokainen entiteettityyppi sisältyy:

- Lines, Circles, Arcs, Ellipses, Polylines (viety muodossa `LWPOLYLINE`), Splines
- Text
- Mitat (lineaarinen, kohdistettu, jatkettu, säde, halkaisija)
- Leaders (multileaderit)
- Hatchit, mukaan lukien niiden kuvio, mittakaava, kulma ja origo
- Layers ja Linetypes

Tiedosto kirjoitetaan AC1032-DXF-muodossa, joten KulmanLabista viety piirustus avautuu muissa DXF:ää tukevissa työkaluissa merkintöineen eikä saavu paljaana geometriana.

Se, mitä kukin vastaanottava sovellus sillä sitten tekee, vaihtelee yhä — DXF-tuki on erilainen eri työkaluissa, ja vanhempi voi ohittaa objekteja, jotka uudempi lukee. Jos piirustuksen on näytettävä kaikkialla samalta, [Print Manageria](../print-manager/) tallentaa sen sen sijaan PDF:nä tai kuvana.

## Viedyn tiedoston nimi

Ladattu tiedosto nimetään nykyisen piirustustiedoston mukaan (esim. `myplan.json`). Tiedostopääte muuttuu valitun muodon mukaan.

## Ero Export Managerin ja Print Managerin välillä

| Ominaisuus | Export Manager | Print Manager |
|------------|-----------------|-----------------|
| Tuloste | Vektorilähdetiedosto (.dxf / .json) | Rasterikuva (.png / .jpeg / .webp / .pdf) |
| Muokattavissa muissa työkaluissa | Kyllä (DXF) | Ei |
| Säilyttää layerit & linetypet | Kyllä | Ei (renderöity litteäksi) |
| Tallentaa mitat & leaderit | Kyllä | Kyllä |

Käytä **Export Manageria**, kun tarvitset muokattavan tiedoston. Käytä [Print Manageria](../print-manager/), kun tarvitset visuaalisen tilannekuvan.

## Liittyvät komennot

- [Import](../import/) — avaa DXF- tai JSON-tiedosto
- [Print Manager](../print-manager/) — vie kangas PNG-, JPEG-, WebP- tai PDF-kuvana
- [File Manager](../file-manager/) — selaa selaimen tallennustilaan tallennettuja piirustuksia
