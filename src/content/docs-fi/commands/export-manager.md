---
title: Export Manager — Lataa piirustuksia DXF- tai JSON-muodossa
description: Lataa piirustus DXF- tai JSON-muodossa ja valitse objektityypeittäin, mitä mukaan tulee. Molemmat kantavat geometrian, tekstin, mitat, osoitusviivat ja rasteroinnit.
keywords: [vie DXF, vie CAD-tiedosto, lataa DXF selaimessa, tallenna DXF verkossa, vie JSON CAD, KulmanLab vienti, lataa CAD-tiedosto, DXF-vienti, tallenna piirustus tiedostoon, DXF-lataus]
group: file
order: 6
---

# Export Manager

Komento `exportmanager` lataa nykyisen piirustuksen tiedostojärjestelmääsi. Kaksi muotoa vierekkäin — **DXF** yhteensopivuuteen muiden CAD-työkalujen kanssa ja **JSON** täysin tarkkoihin tallennuksiin KulmanLab CAD:n sisällä — ja kummallakin on oma tarkistuslistansa siitä, mitä tiedostoon pannaan.

## Näin viet

1. Napsauta työkalurivin **Export**-painiketta (latauskuvake) tiedostopaneelissa, tai kirjoita `exportmanager` terminaaliin.
2. **Export Manager** -ikkuna avautuu kahtena sarakkeena, **JSON** ja **DXF**, joissa kummassakin luetellaan piirustuksen objektityypit valintaruudun ja lukumäärän kera.
3. Poista rasti siltä, minkä haluat jättää pois. Aluksi kaikki on rastitettu.
4. Napsauta **Export JSON** tai **Export DXF**. Tiedosto latautuu oletuskansioosi ja ikkuna sulkeutuu.

Paina `Escape` sulkeaksesi ponnahdusikkunan viemättä mitään.

## Vietävän sisällön valinta

Molemmat sarakkeet luettelevat samat objektityypit, kunkin kohdalla lukumäärä piirustuksessa:

Lines · Circles · Arcs · Ellipses · Polylines · Splines · Text · Radius Dimensions · Diameter Dimensions · Angular Dimensions · Linear Dimensions · Leaders · Hatches

Ikkunan avautuessa kaikki on rastitettu, joten heti vieminen antaa koko piirustuksen. Poista rasti tyypiltä, niin se jää pois juuri siitä tiedostosta.

- **Sarakkeet ovat toisistaan riippumattomat.** Hatches-rastin poisto DXF:n puolelta ei muuta sitä, mitä **Export JSON** tuottaa — kummallakin muodolla on oma valintansa.
- **Tyyppi jota sinulla ei ole, näkyy himmennettynä.** Riviä jonka lukumäärä on `0` ei voi rastittaa, joten lista toimii samalla piirustuksen pikainventaariona.
- **Lukumäärät ovat tilannekuva.** Ne otetaan ikkunan avautuessa eivätkä päivity, jos piirustus muuttuu taustalla. Päivitä sulkemalla ja avaamalla uudelleen.
- **Mitään ei poisteta.** Rastin poisto muovaa vain vietyä tiedostoa; itse piirustukseen ei kosketa.

**Linear Dimensions** kattaa lineaariset, kohdistetut ja jatketut mitat: yksi objektityyppi, jonka kolme eri komentoa luo. Säteellä, halkaisijalla ja kulmalla on kullakin oma rivinsä.

Leikkaustiedostoa varten poista rastit kohdista Text, neljä mittariviä, Leaders ja Hatches ja napsauta **Export DXF** — katso [DXF:n valmistelu laserleikkaukseen](/fi/blog/prepare-dxf-for-laser-cutting/).

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
- Mitat (lineaarinen, kohdistettu, jatkettu, säde, halkaisija, kulma)
- Leaders (multileaderit)
- Hatchit, mukaan lukien niiden kuvio, mittakaava, kulma ja origo
- Layers ja Linetypes

### DXF-vienti

Jokainen entiteettityyppi sisältyy:

- Lines, Circles, Arcs, Ellipses, Polylines (viety muodossa `LWPOLYLINE`), Splines
- Text
- Mitat (lineaarinen, kohdistettu, jatkettu, säde, halkaisija, kulma)
- Leaders (multileaderit)
- Hatchit, mukaan lukien niiden kuvio, mittakaava, kulma ja origo
- Layers ja Linetypes

Tiedosto kirjoitetaan AC1032-DXF-muodossa, joten KulmanLabista viety piirustus avautuu muissa DXF:ää tukevissa työkaluissa merkintöineen eikä saavu paljaana geometriana.

Se, mitä kukin vastaanottava sovellus sillä sitten tekee, vaihtelee yhä — DXF-tuki on erilainen eri työkaluissa, ja vanhempi voi ohittaa objekteja, jotka uudempi lukee. Jos piirustuksen on näytettävä kaikkialla samalta, [Print Manageria](../print-manager/) tallentaa sen sen sijaan PDF:nä tai kuvana.

## Viedyn tiedoston nimi

Ladattu tiedosto nimetään nykyisen piirustustiedoston mukaan (esim. `myplan.json`). Tiedostopääte muuttuu valitun muodon mukaan. Piirustus jota ei ole koskaan nimetty viedään nimellä `drawing.dxf` tai `drawing.json`.

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
