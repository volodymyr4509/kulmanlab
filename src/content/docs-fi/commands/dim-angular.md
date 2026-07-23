---
title: Dimension Angular — Mittaa Kulmia Viivojen ja Kaarien Välillä
description: DimensionAngular-komento sijoittaa kulmamitan merkinnän viivoille, kaarille tai ympyröille. Tukee kahden viivan kulman, kaaren kulmavälin ja ympyrän sektorin tiloja.
keywords: [kulmamitta CAD, angle dimension, mittaa kulma viivojen välillä, DimensionAngular, kaarimitta, kulmamerkintä, CAD kulmamerkintä, kulmanlab kulmamitta]
group: markup
order: 9
---

# Dimension Angular

Komento `DimensionAngular` sijoittaa **kulmamitan** kaarimerkinnän piirustukseen. Se mittaa ja merkitsee kulman kahden viivan välillä, kaaren kulmavälin, tai ympyrän sektorin.

## Aktivointi

Napsauta **Dimension Angular**-painiketta työkalurivillä Markup-paneelissa, tai kirjoita `DimensionAngular` terminaaliin.

## Kolme syöttötilaa

Ensimmäinen napsautus määrää käytettävän tilan:

### Kaksi viivaa

1. **Napsauta ensimmäistä viivaa.** Kohdistimen sijainti määrää, kumpi puoli viivasta käytetään.
2. **Napsauta toista viivaa.** Kahden viivan on leikattava toisensa (leikkauspiste lasketaan automaattisesti; sen ei tarvitse olla näkyvissä näytöllä).
3. **Napsauta sijoittaaksesi** mittakaaren. Siirrä kohdistinta valitaksesi säteen ja mikä kulmasektori merkitään — merkintä seuraa kohdistinta kummalla tahansa puolella kärkeä olet.

Yhdensuuntaiset viivat eivät voi muodostaa kulmamittaa; komento ohittaa toisen napsautuksen, jos viivat eivät leikkaa toisiaan.

### Kaari

1. **Napsauta kaarta.** Mitta luodaan välittömästi kaaren alkukulmasta sen loppukulmaan, käyttäen kaaren keskipistettä kärkenä.
2. **Napsauta sijoittaaksesi** mittakaaren halutulla säteellä.

### Ympyrä

1. **Napsauta ympyrää.** Ensimmäinen kulman päätepiste tarttuu lähimpään pisteeseen ympyrällä.
2. **Napsauta toista pistettä** ympyrällä määrittääksesi toisen kulman päätepisteen.
3. **Napsauta sijoittaaksesi** mittakaaren.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Escape` | Peruuta ja palaa ensimmäiseen valintaan |

## Käyttäytymisen yksityiskohdat

- Mittakaari piirretään aina sillä puolella kärkeä, johon sen sijoitat — siirrä kohdistin kärjen yli vaihtaaksesi täydennyskulmaan.
- Mitattu kulma näytetään asteina ja päivittyy elävästi liikuttaessasi kohdistinta sijoituksen aikana.
- Tuloksena oleva merkintä on täysi `DimensionAngular`-entiteetti, joka tallennetaan nykyiselle tasolle. Sen ulkoasuominaisuuksia (nuolen koko, tekstin korkeus, apuviivan pituus) voidaan säätää Properties-paneelissa.
- Kulmamitat sisältyvät JSON-vientiin, mutta DXF-viejä ei tue niitä.

## Merkinnän muokkaaminen — yksinkertainen tila

**Kaksoisnapsauta** sijoitettua kulmamittaa avataksesi tekstieditorin **yksinkertaisessa** tilassa. Editori on esitäytetty nykyisellä renderöidyllä arvolla, jotta voit sijoittaa kohdistimen ja muokata sitä suoraan.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Fontti / Korkeus | Koskee **koko** merkintää kerralla |
| Merkkikohtainen muotoilu | Ei tuettu |
| `Enter` | Vahvistaa arvon ja sulkee editorin |
| Monirivinen | Ei tuettu |

Katso [Tekstieditori — yksinkertainen tila](../../interface/text-editor/#simple-mode) täydellistä referenssiä varten.

## Liittyvät komennot

- [Dimension Linear](../dim-linear/) — vaaka- tai pystysuora mitta
- [Dimension Aligned](../dim-aligned/) — kahteen pisteeseen kohdistettu mitta
- [Dimension Radius](../dim-radius/) — säteen mitta kaarille ja ympyröille
- [Dimension Diameter](../dim-diameter/) — halkaisijan mitta ympyröille
