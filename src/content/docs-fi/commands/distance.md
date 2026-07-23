---
title: Distance — Mittaa Suoran Viivan Etäisyys Kahden Pisteen Välillä
description: Distance-komento mittaa euklidisen etäisyyden kahden napsautetun pisteen välillä ja näyttää tuloksen 4 desimaalin tarkkuudella. Napsauta uudelleen tuloksen jälkeen ketjuttaaksesi uuden mittauksen viimeisestä pisteestä.
keywords: [CAD mittaa etäisyys, distance-komento, pisteestä pisteeseen -mittaus, suoran viivan etäisyys, kulmanlab CAD-mittaus]
group: measure
order: 1
---

# Distance

Komento `distance` mittaa suoran (euklidisen) etäisyyden kahden napsautetun pisteen välillä ja tulostaa tuloksen terminaaliin 4 desimaalin tarkkuudella. Se on yksi kolmesta mittauskomennosta — [Angle](../angle/) mittaa kulman avautumisen kärkipisteessä, ja [Area](../area/) mittaa monikulmion sisäalueen ja piirin.

## Etäisyyden mittauksen anatomia

```
  ● ensimmäinen piste
   \
    \  esikatseluviiva (elävä)
     \
      ● toinen piste    →  terminaali: "Distance: 12.3456"
```

- **Ensimmäinen piste** — mittauksen alkuperä.
- **Toinen piste** — päätepiste; sen sijoittaminen tulostaa tuloksen välittömästi.
- **Tulos** — näytetään terminaalissa, ei sijoiteta piirtoalueelle.

## Etäisyyden mittaaminen

1. Kirjoita `distance` terminaaliin tai napsauta **Distance**-painiketta työkalurivillä.
2. **Napsauta ensimmäistä pistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta toista pistettä** — mitattu etäisyys ilmestyy terminaaliin. Koordinaattien syöttö toimii myös täällä.
4. **Napsauta uudelleen** (valinnaista) aloittaaksesi uuden mittauksen. Komento pysyy aktiivisena.

Paina `Escape` milloin tahansa nollataksesi vaiheeseen 2.

## Mittausten ketjuttaminen

Kun tulos näytetään, napsautus aloittaa heti seuraavan mittauksen — napsautetusta pisteestä tulee uusi ensimmäinen piste. Tämä antaa sinun mitata sarjan etäisyyksiä aktivoimatta komentoa uudelleen.

## Distance vs Angle

| | Distance | Angle |
|---|---------|-------|
| Mitä se mittaa | Suoran viivan pituus | Sisäkulma kärkipisteessä |
| Napsautusten määrä | 2 | 3 |
| Tuloksen muoto | `12.3456` (yksikköä) | `45.0000°` |
| Esikatselu piirtoalueella | Viiva ensimmäisestä pisteestä kohdistimeen | Kaksi viivaa kärkipisteestä kohdistimeen |
| Paras käyttö | Aukon tai segmentin pituus | Avautumiskulma kahden ominaisuuden välillä |

## Koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin jommallekummalle pisteelle:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** vahvistaaksesi.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti |
| `Escape` | Peruuta ja nollaa vaiheeseen 2 |

## Huomautuksia

- Tulokset näytetään **vain terminaalissa** — piirustukseen ei lisätä mitään.
- Tulos ilmaistaan samoissa yksiköissä kuin piirustuksen koordinaatit (ei yksikkömuunnosta).
- Tarkkuus on aina 4 desimaalia.
