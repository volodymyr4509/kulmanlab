---
title: New File — Aloita Tyhjä Piirustus KulmanLab CAD:issa
description: New File -komento tyhjentää piirtoalueen ja avaa uuden, tyhjän piirustuksen. Aikaleimalla varustettu tiedostonimi luodaan automaattisesti ja tallennetaan selaimen tallennustilaan.
keywords: [uusi CAD-tiedosto, uusi piirustus, tyhjä piirtoalue CAD, luo uusi piirustus verkossa, aloita uusi DXF, KulmanLab uusi tiedosto, nollaa piirtoalue, tyhjennä piirustus]
group: file
order: 2
---

# New File

Komento **New File** tyhjentää piirtoalueen ja aloittaa uuden, tyhjän piirustuksen. Ainutlaatuinen tiedostonimi aikaleimalla luodaan automaattisesti.

## Näin luot uuden tiedoston

Napsauta **New File**-painiketta (uusi sivu -kuvake) File-paneelissa. Piirtoalue tyhjenee välittömästi — ei kehotteita tai vahvistusvalintaikkunoita.

## Mitä uusi tiedosto sisältää

Vasta luotu tiedosto alkaa seuraavilla:

- **Ei entiteettejä** piirtoalueella.
- **Yksi oletustaso** nimeltä `0` valkoisella värillä ja linetyypillä `Continuous`.
- **Luotu tiedostonimi** muodossa `kulman-Mon01_HH:MM:SS.dxf` (esim. `kulman-May22_14:30:00.dxf`).

Tiedosto tallennetaan automaattisesti selaimen tallennustilaan ja näkyy [Viimeisimmissä tiedostoissa](../files/).

## Varoitus — tallentamaton työ hylätään

**New File**-painikkeen napsauttaminen hylkää kaikki nykyisen piirtoalueen entiteetit ilman varoitusta. Jos haluat säilyttää nykyisen piirustuksen, [vie](../export/) se ensin.

## Milloin käyttää New Filea vs Importia

| Tilanne | Suositeltu toimenpide |
|-----------|-------------------|
| Piirustuksen aloittaminen alusta | **New File** |
| Olemassa olevan DXF- tai JSON-tiedoston avaaminen | [Import](../import/) |
| Piirustuksen kopioiminen variaation työstämiseksi | [Vie](../export/) nykyinen tiedosto, [tuo](../import/) sitten kopio |

## Liittyvät komennot

- [Import](../import/) — avaa olemassa oleva DXF- tai JSON-piirustus
- [Export](../export/) — lataa piirustus ennen alusta aloittamista
- [Files](../files/) — palauta aiempi piirustus selaimen tallennustilasta
