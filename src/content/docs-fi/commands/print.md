---
title: Print-komento — Vie PNG-, JPEG-, WebP- tai PDF-muodossa
description: Print-komento avaa Print Managerin — omistetun vientinäkymän elävällä esikatselulla, muotovalitsimella, mustavalkoiskytkimellä ja valinnaisella aluevalinnalla. Vie enintään 2000×2000 px. Tukee PNG-, JPEG-, WebP- ja PDF-muotoja.
keywords: [CAD vie PNG, CAD vie PDF, tulosta CAD-piirustus, print manager, mustavalkoinen vienti, kulmanlab vienti]
group: file
order: 4
---

# Print

Komento `print` avaa **Print Managerin** — omistetun vientinäkymän elävällä esikatselupiirtoalueella, muotovalitsimella (PNG / JPEG / WebP / PDF), mustavalkoiskytkimellä ja valinnaisella alueen rajauksella. Mitään ei lähetetä fyysiselle tulostimelle — tulos ladataan tiedostona.

## Print Managerin avaaminen

Napsauta **Print**-painiketta työkalurivillä tai kirjoita `print` terminaaliin. Print Manager avautuu välittömästi näyttäen esikatselun nykyisestä näkymäikkunasta.

## Print Managerin asettelu

Ikkunassa on kaksi paneelia:
- **Vasen sivupalkki** — kaikki vientikontrollit.
- **Oikea paneeli** — elävä esikatselupiirtoalue, joka päivittyy asetuksia muuttaessasi.

### Sivupalkin kontrollit

| Kontrolli | Kuvaus |
|---------|-------------|
| **Change Area** | Rajaa piirtoalueen mukautettuun suorakulmioon (katso alla) |
| **Monochrome**-kytkin | Muunna kaikki väriviivat mustiksi — päällä oletuksena puhdasta viivatulostusta varten |
| **Format**-valikko | PNG, JPEG, WebP tai PDF |
| **Export**-painike | Luo ja lataa tiedosto |

## Mukautetun vientialueen valitseminen

Oletuksena esikatselu näyttää tarkalleen sen, mikä oli näkyvissä piirtoalueella, kun avasit Print Managerin. Vieäksesi tietyn alueen:

1. Napsauta **Change Area** — Print Manager piiloutuu ja piirtoalue muuttuu interaktiiviseksi.
2. **Napsauta vientisuorakulmion ensimmäistä kulmaa**.
3. **Napsauta vastakkaista kulmaa** — Print Manager avautuu uudelleen valittu alue esikatselussa.

Paina `Escape` alueen valinnan aikana peruuttaaksesi ja palauttaaksesi edellisen alueen.

Esikatselupiirtoalue muuttaa kokoaan dynaamisesti vastaamaan valitun alueen **tarkkaa kuvasuhdetta**, joten esikatselu on pikselintarkka.

## Vientimuodot

| Muoto | Paras käyttö | Huomautuksia |
|--------|----------|-------|
| **PNG** | Häviötön, terävät viivat | Valkoinen tausta, ei läpinäkyvyyttä |
| **JPEG** | Pienempi tiedosto jakamiseen | 95 % laatu, lievä pakkaus |
| **WebP** | Pienin tiedosto webiin | Sama 95 % laatu, parempi pakkaus kuin JPEG |
| **PDF** | Tulostusvalmiit asiakirjat | Kuva upotettu 150 DPI:llä PDF-säiliön sisällä |

Viety tiedosto nimetään `kulman-<aikaleima>.<tiedostopääte>` ja latautuu automaattisesti.

## Vientiresoluutio ja tausta

- Maksimiresoluutio: **2000 × 2000 pikseliä**, skaalattuna suhteessa valittuun alueeseen.
- Tausta on aina **valkoinen**.
- Tasot, jotka on merkitty **ei-tulostettaviksi**, jätetään pois viennistä.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` (alueen valinnan aikana) | Peruuta alueen valinta, palauta edellinen alue |
| `Escape` (Print Managerissa) | Sulje Print Manager |
