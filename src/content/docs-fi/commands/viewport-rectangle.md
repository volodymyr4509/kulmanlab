---
title: ViewportRectangle-komento — Luo Näkymäikkuna Asetteluun
description: ViewportRectangle-komento luo näkymäikkunan paperiasetteluun napsauttamalla kaksi vastakkaista kulmaa. Näkymäikkuna näyttää mallitilan entiteetit asettelun oletusmittakaavassa.
keywords: [viewport-suorakulmio, luo näkymäikkuna, asettelun näkymäikkuna, paperitilan näkymäikkuna, kulmanlab]
group: layouts
order: 1
---

# ViewportRectangle

Komento `ViewportRectangle` luo uuden näkymäikkunan aktiiviseen paperiasetteluun napsauttamalla kaksi vastakkaista kulmaa. Käytettävissä vain asettelutilassa.

## Näkymäikkunan luominen

1. Vaihda paperiasetteluun näytön alareunan välilehden avulla.
2. Kirjoita `ViewportRectangle` terminaaliin tai napsauta **Viewport Rectangle**-painiketta työkalurivillä.
3. **Napsauta ensimmäistä kulmaa**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
4. **Napsauta vastakkaista kulmaa** — näkymäikkuna sijoitetaan välittömästi. Koordinaattien syöttö toimii myös täällä.

Uusi näkymäikkuna näyttää koko mallin asettelun oletusmittakaavassa. Käytä rullan pyöritystä näkymäikkunan sisällä zoomataksesi, tai keskiklikkaa-vedä panoroidaksesi mallinäkymää.

## Koordinaattien syöttö

Kummassakin kulmavaiheessa voit kirjoittaa tarkan koordinaatin:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi pisteen.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Enter` | Vahvista kirjoitettu koordinaatti |
| `Escape` | Peruuta |

## Näkymäikkunan muokkaaminen

Sijoitettuasi näkymäikkunan, napsauta sitä valitaksesi sen:

- **Vedä reunoja tai kulmia** muuttaaksesi kokoa.
- **Vedä keskipistekahvaa** siirtääksesi sitä.
- Käytä **mittakaavavalitsinta** kontrollipalkissa asettaaksesi tarkan mittakaavan (esim. 1:50). Syöttääksesi mittakaavan, joka ei ole listalla, kirjoita se suoraan syöttökenttään valikon alaosassa — hyväksyy suhdemuodon (`1:200`, `5:1`) tai pelkän desimaaliluvun (`0.005`), paina sitten **Enter**.
- Napsauta hiiren oikealla painikkeella näkymäikkunaa ja käytä **Lock**-toimintoa estääksesi vahingossa tapahtuvat muutokset.

## Huomautuksia

- ViewportRectangle on käytettävissä vain, kun paperiasettelun välilehti on aktiivinen. Sen ajaminen mallitilassa näyttää virheilmoituksen ja poistuu.
- Kopioidaksesi olemassa olevan näkymäikkunan, käytä [ViewportCopy](../viewport-copy/)-komentoa.
