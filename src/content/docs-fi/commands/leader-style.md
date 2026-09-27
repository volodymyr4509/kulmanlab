---
title: OsoitinTyyli-komento — Osoitinviivatyylien hallinta
description: Luo CAD-osoitintyylejä, joissa on nuolenkärki, tekstin kiinnitys, väli, kierto, fontti, korkeus ja tekstikehys.
keywords: [CAD osoitintyyli, multileader tyyli, MLEADERSTYLE, CAD nuolenkärki, tekstin kiinnitys, DXF tyyli, kulmanlab]
group: style
order: 7
---

# LeaderStyle

`OsoitinTyyli`-komento avaa nimettyjen osoitinviivatyylien hallinnan. Jokainen uusi [Viitenuoli](../leader/) kopioi *nykyisen* tyylin asetukset luontihetkellä.

## Tyylin muokkaaminen

Kirjoita `OsoitinTyyli` tai napsauta huomautuspaneelin **Osoitinviivan tyyli** -painiketta. ✓ merkitsee nykyistä tyyliä; muuta nimeä sen vieressä olevalla kynällä. Esikatselu päivittyy heti samalla renderöijällä kuin piirros.

| Kenttä | Toiminto |
|---|---|
| Tekstin kiinnitys | Ylä, Keski, Ala tai Alleviivaus |
| Nuolenkärki / Nuolen koko | Tunnus ja koko jokaisen haaran päässä |
| Hyllyn väli | Hyllyn ja tekstin välinen tila |
| Tekstin kierto | Selitteen kulma asteina |
| Tekstityyli | Kopioi kerran fontin, korkeuden, lihavoinnin ja kursivoinnin [TextStyle](../text-style/)-tyylistä |
| Fontti / Tekstin korkeus | Selitteen fontti ja korkeus |
| Lihavoitu / Kursiivi | Riippumaton tekstimuotoilu |
| Tekstin kehys | Suorakulmainen kehys selitteen ympärillä |

**Uusi** kopioi valitun tyylin. `Standard`-tyyliä ei voi nimetä uudelleen eikä poistaa; myöskään nykyistä tyyliä ei voi poistaa. **Aseta nykyiseksi** vaikuttaa vain myöhemmin luotaviin viitenuoliin — olemassa olevat objektit eivät muutu. Tyhjä, päällekkäinen tai DXF-muodossa virheellinen nimi poistaa **OK**-painikkeen käytöstä. Tuodut annotatiiviset tyylit piilotetaan, mutta säilytetään.

## Tallentaminen ja DXF

**OK** ottaa kaikki muutokset käyttöön; **Sulje** tai `Escape` hylkää ne. KulmanLab lukee ja kirjoittaa `MLEADERSTYLE`-tietueita. Nimi, nuolenkärki ja koko, väli, korkeus, kiinnitys, kehys ja annotatiivinen lippu tallennetaan tyylikenttinä. Kierto, fontti, lihavointi ja kursivointi ovat KulmanLabin oletusarvoja, jotka kopioidaan viitenuoleen sitä luotaessa.

Katso myös [Leader](../leader/), [LeaderAdd](../leader-add/) ja [LeaderRemove](../leader-remove/).
