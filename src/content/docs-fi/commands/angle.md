---
title: Angle — Mittaa Sisäkulma Kärkipisteessä Kolmen Pisteen Avulla
description: Angle-komento mittaa sisäkulman (0°–180°) kärkipisteessä, jonka määrittelee kolme napsautettua pistettä. Napsauta ensimmäinen pää, kärkipiste, toinen pää. Tulos näytetään terminaalissa 4 desimaalin tarkkuudella.
keywords: [CAD kulman mittaus, kolmen pisteen kulma, sisäkulma CAD, mittaa kulma -komento, kärkipisteen kulma, kulmanlab]
group: measure
order: 2
---

# Angle

Komento `angle` mittaa sisäkulman kärkipisteessä, jonka muodostavat kaksi viivasegmenttiä kolmen napsautetun pisteen kautta. Tulos — aina 0° ja 180° välillä — näytetään terminaalissa 4 desimaalin tarkkuudella. Se on yksi kolmesta mittauskomennosta — [Distance](../distance/) mittaa suoran viivan pituuden, ja [Area](../area/) mittaa monikulmion sisäalueen ja piirin.

## Kulman mittauksen anatomia

```
  ● ensimmäinen piste (ensimmäisen säteen pää)
   \
    \  ensimmäisen säteen esikatselu
     \
      ● kärkipiste (vaihe 3)
     /
    /  toisen säteen esikatselu (kohdistimeen)
   /
  ● kolmas piste  →  terminaali: "Angle: 45.0000°"
```

- **Ensimmäinen piste** — kulman toinen pää (vaihe 2).
- **Kärkipiste** — kulman kärki, jossa kulma mitataan (vaihe 3).
- **Kolmas piste** — kulman toinen pää (vaihe 4).

## Kulman mittaaminen

1. Kirjoita `angle` terminaaliin tai napsauta **Angle**-painiketta työkalurivillä.
2. **Napsauta ensimmäistä pistettä** — kulman toinen käsivarren pää. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta kärkipistettä** — kulma, jossa kaksi käsivartta kohtaavat. Koordinaattien syöttö toimii myös täällä.
4. **Napsauta kolmatta pistettä** — toinen käsivarren pää. Koordinaattien syöttö toimii myös täällä. Tämän pisteen sijoittaminen tulostaa tuloksen.
5. **Napsauta uudelleen** (valinnaista) aloittaaksesi uuden mittauksen kyseisestä napsautuksesta uutena ensimmäisenä pisteenä.

## Sisäkulman käytäntö

Komento laskee kulman käyttäen kärkipisteestä lähtevien kahden säteen pistetuloa:

- **Aina sisäinen**: tulos on pienempi kulma, 0° ja 180° välillä.
- Päätepisteiden napsautusjärjestys ei vaikuta tulokseen — vain kärkipisteen sijainti on merkittävä.
- Kollineaariset pisteet (kaikki kolme samalla viivalla) palauttavat 0° tai 180°.

## Mittausten ketjuttaminen

Kun tulos ilmestyy, napsautus aloittaa heti seuraavan mittauksen — napsautetusta pisteestä tulee uusi ensimmäinen piste. Komento ei koskaan poistu automaattisesti ennen kuin painat `Escape`.

## Angle vs Distance

| | Angle | Distance |
|---|-------|---------|
| Mitä se mittaa | Sisäkulma kärkipisteessä | Suoran viivan pituus |
| Napsautusten määrä | 3 | 2 |
| Tuloksen muoto | `45.0000°` | `12.3456` (yksikköä) |
| Esikatselu piirtoalueella | Kaksi viivaa kärkipisteestä molempiin päihin | Viiva ensimmäisestä pisteestä kohdistimeen |
| Paras käyttö | Avautumiskulma kahden ominaisuuden välillä | Aukon tai segmentin pituus |

## Koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin jollekin kolmesta pisteestä:

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
| `Escape` | Peruuta ja palaa vaiheeseen 2 |

## Huomautuksia

- Tulokset näytetään **vain terminaalissa** — piirustukseen ei lisätä mitään.
- Tarkkuus on aina 4 desimaalia asteina.
