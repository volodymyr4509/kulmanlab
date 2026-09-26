---
title: Tekstityyli-komento — Tekstityylien hallinta
description: Luo CAD-tekstityylejä, joissa on fontti, korkeus, lihavointi, kursivointi, riviväli, tasaus ja kehys.
keywords: [CAD tekstityyli, CAD fontti, tekstikehys, tekstin tasaus, DXF tyyli, kulmanlab]
group: style
order: 6
---

# TextStyle

`Tekstityyli`-komento avaa tyylien hallinnan. Voit luoda nimettyjä tyylejä, muokata niiden oletusarvoja ja valita *nykyisen* tyylin. Uusi [Teksti](../text/) kopioi nykyisen tyylin asetukset luontihetkellä.

## Tyylien hallinnan käyttäminen

Kirjoita `Tekstityyli` tai napsauta huomautuspaneelin **Tekstityyli**-painiketta. ✓ merkitsee nykyistä tyyliä; kaksoisnapsautus asettaa rivin tyylin nykyiseksi.

| Kenttä | Toiminto |
|---|---|
| Nimi | Yksilöllinen nimi; `Standard`-tyyliä ei voi nimetä uudelleen |
| Fontti / Korkeus | Kirjasintyyppi ja kiinteä korkeus; `0` = määritetään tekstikohtaisesti |
| Lihavoitu / Kursiivi | Erikseen käyttöön otettavat muotoilut |
| Riviväli | Tekstirivien välinen tila |
| Vaakatasaus | Vasen, keskitetty, oikea tai tasattu |
| Kehys | Suorakulmainen kehys uuden tekstin ympärillä |

**Uusi** kopioi valitun tyylin. **Poista** ei voi poistaa `Standard`-tyyliä eikä nykyistä tyyliä. **Aseta nykyiseksi** vaikuttaa vain myöhemmin luotaviin teksteihin; olemassa olevat tekstit eivät muutu. Tyhjä, päällekkäinen tai DXF-muodossa virheellinen nimi poistaa **OK**-painikkeen käytöstä. Tuodut annotatiiviset tyylit piilotetaan, mutta niiden tiedot säilytetään.

## Tallentaminen ja DXF

**OK** tallentaa muutokset; **Sulje** tai `Escape` hylkää ne. Liiku luettelossa näppäimillä `↑` ja `↓`. Nimi, fonttitiedostot, korkeus, lihavointi, kursivointi ja annotatiivinen lippu kuuluvat DXF-tekstityyliin. Kehys, riviväli ja tasaus ovat KulmanLabin tekstikohtaisia oletusarvoja, eivät DXF:n STYLE-taulukon kenttiä.

Katso myös [Text](../text/), [FontManager](../font-manager/) ja [MatchProperties](../match-properties/).
