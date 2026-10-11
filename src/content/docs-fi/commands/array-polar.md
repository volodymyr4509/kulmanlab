---
title: "ArrayPolar-komento — kopioi kohteita keskipisteen ympäri KulmanLab CADissa"
description: "ArrayPolar-komento kopioi valitut kohteet keskipisteen ympäri — kiinteä määrä kohteita jaettuna koko kierrokselle tai sen osalle, kopioilla jotka kääntyvät kiertäessään tai säilyttävät oman suuntansa."
keywords: ["CAD polaarinen ruudukko", "ympyrämalli CAD", "kohteiden kopiointi pisteen ympäri CAD", "arraypolar", "kulmanlab"]
group: edit
order: 16
---

# Array Polar

`ArrayPolar`-komento tekee kopioita valituista kohteista keskipisteen ympärille, tasaisesti jaettuna koko kierrokselle tai sen osalle. Alkuperäinen on ensimmäinen kohde; jokainen muu on kopio, käännettynä keskipisteen ympäri — tai vain siirrettynä sen ympäri, jos Rotate on pois päältä.

## Polaarisen ruudukon luominen

1. Valitse kohteet ja kirjoita sitten `arraypolar` terminaaliin tai napsauta työkalupalkin **Array Polar** -painiketta. Jos komento aloitetaan ilman valintaa, se pyytää ensin valitsemaan ne — vahvista **Enter**illä tai **Space**lla.
2. **Napsauta keskipistettä**, jonka ympäri kopiot kiertävät, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. Tarkista ruudukko. Kaikki kopiot esikatsellaan livenä, ja terminaali näyttää `Change [Items=6] [Angle=60°] [Fill=360°] [Rotate=true]` — vaihda valinta painamalla sen kirjainta.
4. Luo kopiot painamalla **Enter** tai **Space**. Alkuperäiset pysyvät paikoillaan ja valinta tyhjennetään.

## Valinnat

| Valinta | Näppäin | Vaikutus |
|---|---|---|
| Items | `I` | Kuinka monta kohdetta on alkuperäinen mukaan lukien — kokonaisluku 2–1024. Alkuarvo 6. |
| Angle | `A` | Asteet kohteesta seuraavaan vastapäivään; negatiivinen kulma kulkee myötäpäivään. Enintään 180°. |
| Fill | `F` | Asteet ensimmäisestä kohteesta viimeiseen. 360 (oletus) on täysi kierros; pienempi luku jakaa kohteet sen osalle. Negatiivinen kulkee myötäpäivään. Enintään 360°. |
| Rotate | `R` | Päällä (oletus): jokainen kopio kääntyy kiertäessään. Pois: jokainen kopio siirretään paikalleen ja osoittaa samaan suuntaan kuin alkuperäinen. Vaihtuu heti — kirjoitettavaa lukua ei ole. |

- Angle ja Fill ovat kaksi tapaa sanoa sama asia, joten toisen muuttaminen muotoilee toisen uudelleen. Täydellä kierroksella viimeinen kohde pysähtyy askelen ennen ensimmäistä; kierroksen osalla se osuu täsmälleen täyttökulmaan.
- Vaihda lukua painamalla sen valinnan kirjainta. Kehote on esitäytetty nykyisellä arvolla — korvaa se kirjoittamalla ja paina **Enter** tai **Space**; muuttamattomana vahvistettuna ruudukko pysyy ennallaan.
- Items ottaa vain kokonaislukuja; Angle ja Fill ottavat desimaaleja ja alussa `-` myötäpäivään. Kulma tai täyttö 0 hylätään, samoin kulma yli 180° tai täyttö yli 360° — terminaali kertoo syyn.
- Liian pieni Angle, johon kaikki kohteet eivät mahdu, pudottaa ne, joille ei ole tilaa, ja terminaali ilmoittaa uuden määrän.
- Toimii kaikille kohdetyypeille: jokainen kopio on alkuperäinen käännettynä keskipisteen ympäri tai siirrettynä, täsmälleen kuten [Rotate](../rotate/) ja [Move](../move/) tekisivät.

## Näppäinopas

| Näppäin | Toiminto |
|---|---|
| `Enter` / `Space` | Vahvista valinta, ruudukko tai kirjoitettu luku |
| `I` `A` `F` `R` | Muuta Items, Angle tai Fill kirjoittamalla luku; vaihda Rotate |
| `0`–`9`, `.`, `-` | Kirjoita luku (`.` ja `-` vain Anglelle ja Fillille, `-` ensin) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Escape` | Peruuta |
