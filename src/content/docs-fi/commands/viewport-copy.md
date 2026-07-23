---
title: ViewportCopy-komento — Monista Näkymäikkuna KulmanLab CAD:issa
description: ViewportCopy-komento monistaa valitun näkymäikkunan uuteen sijaintiin samassa asettelussa, säilyttäen mittakaavan ja mallinäkymän asetukset. Tukee tarkkaa koordinaattien syöttöä, kulmalukitusta ja kirjoitettua etäisyyssyöttöä.
keywords: [viewport-kopio, monista näkymäikkuna, kopioi näkymäikkunan asettelu, kulmalukittu näkymäikkuna, tarkka koordinaatti näkymäikkuna, kulmanlab]
group: layouts
order: 2
---

# ViewportCopy

Komento `ViewportCopy` kopioi näkymäikkunan uuteen sijaintiin, säilyttäen sen mittakaavan ja mallikeskuksen. Käytettävissä vain asettelutilassa.

## Näkymäikkunan kopioiminen

1. Vaihda paperiasettelun välilehteen.
2. Napsauta valinnaisesti näkymäikkunaa esivalitaksesi sen.
3. Kirjoita `ViewportCopy` terminaaliin tai napsauta **Viewport Copy**-painiketta työkalurivillä.
4. Jos näkymäikkunaa ei esivalittu, **napsauta kopioitavaa näkymäikkunaa**.
5. **Napsauta perustepistettä** — siirtymän referenssi. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
6. **Napsauta kohdetta** — näkymäikkuna sijoitetaan perusta→kohde-siirtymälle. Tai käytä koordinaattien syöttöä / kulmalukitusta.

Sijoituksen jälkeen komento pysyy aktiivisena — napsauta toista kohdetta sijoittaaksesi toisen kopion samasta näkymäikkunasta. Paina **Enter**, **Space** tai **Escape** viimeistelläksesi.

## Koordinaattien syöttö

Perustepiste- ja kohdevaiheissa voit kirjoittaa tarkan koordinaatin napsauttamisen sijaan:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** vahvistaaksesi.

## Kulmalukitus ja tarkka etäisyys

Kun perustepiste on asetettu, komento tarttuu 45°:n akseleihin (0°, 45°, 90°, 135° …), kun kohdistin kohdistuu. Lukittuna:

- Esikatselu tarttuu akseliin.
- Kirjoita etäisyys ja paina **Enter** sijoittaaksesi kopion tarkalleen kyseiselle siirtymälle lukittua suuntaa pitkin.

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero etäisyysarvoon |
| `-` | Negatiivinen etäisyys (kääntää suunnan; vain ensimmäinen merkki) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sijoita kopio kirjoitetulle etäisyydelle |

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö, tai etäisyys kulmalukittuna |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Enter` | Vahvista kirjoitettu koordinaatti tai etäisyys |
| `Enter` / `Space` | Viimeistele (kun syöte ei ole käynnissä) |
| `Escape` | Peruuta ja nollaa |

## Huomautuksia

- ViewportCopy on käytettävissä vain, kun paperiasettelun välilehti on aktiivinen.
- Kopioitu näkymäikkuna perii saman mittakaavan, mallikeskuksen, lukitustilan ja mitat kuin alkuperäinen.
- Luodaksesi uuden näkymäikkunan alusta, käytä [ViewportRectangle](../viewport-rectangle/)-komentoa.
