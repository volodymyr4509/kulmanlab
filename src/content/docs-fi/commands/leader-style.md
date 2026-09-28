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

KulmanLab tuo ja vie `MLEADERSTYLE`-tietueita. Nimi, nuolenkärki ja koko, laskeutumisväli, tekstikorkeus, tekstin kiinnitys, kehys ja annotatiivinen lippu säilyvät tyylikenttinä. Viennissä ryhmä `342` osoittaa Tekstityyliin, jonka fontti, lihavointi, kursivointi ja korkeus täsmäävät; muussa tapauksessa käytetään `Standard`-tyyliä. DXF-viite ei muuta sovelluksen kertakopiointia eläväksi linkiksi. Yksi kiinnitysarvo kirjoitetaan sekä vasempaan että oikeaan DXF-kenttään.

Katso myös [Leader](../leader/), [LeaderAdd](../leader-add/) ja [LeaderRemove](../leader-remove/).
