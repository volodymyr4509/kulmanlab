---
title: Export — Lataa Piirustuksia DXF- tai JSON-muodossa
description: Export-komento lataa nykyisen piirustuksen DXF- tai JSON (natiivi) -tiedostona. JSON säilyttää kaikki entiteetit mukaan lukien mitat ja johtimet; DXF on yhteensopiva muiden CAD-työkalujen kanssa.
keywords: [vie DXF, vie CAD-tiedosto, lataa DXF selain, tallenna DXF verkossa, vie JSON CAD, KulmanLab vienti, CAD-tiedoston lataus, DXF-vienti, tallenna piirustus tiedostoon, DXF-lataus]
group: file
order: 5
---

# Export

Komento **Export** lataa nykyisen piirustuksen tiedostojärjestelmääsi. Kaksi muotoa on käytettävissä: **DXF** yhteensopivuutta varten muiden CAD-työkalujen kanssa ja **JSON** täydellisen tarkkuuden tallennuksiin KulmanLab CAD:issa.

## Näin viet tiedoston

1. Napsauta **Export**-painiketta (latauskuvake) File-paneelissa työkalurivillä.
2. **Export Manager** -ponnahdusikkuna avautuu.
3. Napsauta muotokorttia valitaksesi muodon — **JSON** tai **DXF**.
4. Napsauta **Export**-painiketta. Tiedosto latautuu automaattisesti oletuslatauskansioosi.

## Muodon valitseminen

| Muoto | Tiedostopääte | Paras käyttö | Rajoitukset |
|--------|-----------|----------|-------------|
| **JSON** *(natiivi)* | `.json` | Työn tallentaminen uudelleenavaamista varten KulmanLab CAD:issa | Ei yhteensopiva muiden CAD-työkalujen kanssa |
| **DXF** | `.dxf` | Jakaminen FreeCADin, LibreCADin jne. kanssa | Mittoja ja johtimia ei viedä |

**Milloin käyttää JSON-muotoa:** aina kun haluat tallentaa täydellisen kopion työstäsi. JSON on KulmanLabin natiivi muoto ja säilyttää jokaisen entiteetin tarkasti — mukaan lukien mitat, johtimet ja kaikki tasotiedot.

**Milloin käyttää DXF-muotoa:** kun sinun täytyy luovuttaa piirustus jollekin, joka käyttää toista CAD-sovellusta. Viety tiedosto käyttää AC1012 DXF -muotoa ja voidaan avata useimmissa DXF-yhteensopivissa työkaluissa.

## Mitä viedään muodoittain

### JSON-vienti

Kaikki entiteettityypit sisältyvät:

- Viivat, ympyrät, kaaret, ellipsit, murtoviivat, splinit, teksti
- Mitat (lineaarinen, kohdistettu, jatkettu, säde, halkaisija)
- Multileaderit
- Tasomääritykset ja linetype-taulukot

### DXF-vienti

Vain geometriaentiteetit sisältyvät:

- Viivat, ympyrät, kaaret, ellipsit, murtoviivat (viety `LWPOLYLINE`-muodossa), splinit, teksti
- Tasomääritykset ja linetype-taulukot

**Ei sisälly DXF:ään:** mitta-entiteetit ja multileaderit. Nämä käyttävät KulmanLab-kohtaisia tietorakenteita, joita ei voida esittää tarkasti standardissa DXF:ssä. Jos piirustuksessasi on merkintöjä, käytä JSON:ia tai [Print](../print/)-komentoa taltioidaksesi ne visuaalisesti.

## Viedyn tiedoston nimi

Ladattu tiedosto nimetään nykyisen piirustustiedoston mukaan (esim. `myplan_May22_14:30:00.json`). Tiedostopääte vaihtuu valitun muodon mukaan.

## Ero Export- ja Print-komentojen välillä

| Ominaisuus | Export | Print |
|---------|--------|-------|
| Tulos | Vektorimuotoinen lähdetiedosto (.dxf / .json) | Rasterikuva (.png / .jpeg / .webp / .pdf) |
| Muokattavissa muissa työkaluissa | Kyllä (DXF) | Ei |
| Säilyttää tasot ja linetyypit | Kyllä | Ei (renderöity tasaisesti) |
| Taltioi mitat ja johtimet | Vain JSON | Kyllä |

Käytä **Export**-komentoa, kun tarvitset muokattavan tiedoston. Käytä [Print](../print/)-komentoa, kun tarvitset visuaalisen tilannekuvan.

## Liittyvät komennot

- [Import](../import/) — avaa DXF- tai JSON-tiedosto
- [Print](../print/) — vie piirtoalue PNG-, JPEG-, WebP- tai PDF-kuvana
- [Files](../files/) — selaa selaimen tallennustilaan tallennettuja piirustuksia
