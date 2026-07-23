---
title: Line-komento — Piirrä, Ketjuta, Leikkaa ja Jatka Viivoja
description: Line-komento piirtää yksittäisiä suoria viivasegmenttejä, jotka voidaan ketjuttaa päästä päähän. Viivat ovat ainoa entiteettityyppi, jolla Trim ja Extend toimivat. Täysi DXF-edestakainen matka LINE-entiteetteinä.
keywords: [CAD line-komento, piirrä suora viiva CAD, ketjuta viivasegmentit, leikkaa viiva CAD, jatka viivaa CAD, kulmalukitus CAD, DXF LINE-entiteetti, kulmanlab]
group: shapes
order: 1
---

# Line

Komento `line` piirtää yksittäisiä suoria viivasegmenttejä, jotka tallennetaan erillisinä `LINE`-entiteetteinä DXF-mallissa. Jokaisen segmentin jälkeen komento pysyy aktiivisena ja käyttää päätepistettä uudelleen uutena alkupisteenä, jotta voit rakentaa yhtenäisiä polkuja yksi segmentti kerrallaan. Toisin kuin [Polyline](../polyline/), ketjutetut viivat pysyvät itsenäisinä entiteetteinä — kutakin voidaan leikata, jatkaa tai poistaa vaikuttamatta naapureihin.

## Viivojen piirtäminen

1. Kirjoita `line` terminaaliin tai napsauta **Line**-painiketta työkalurivillä.
2. **Napsauta alkupistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta loppupistettä** — segmentti sijoitetaan ja päätepisteestä tulee seuraava alkupiste. Koordinaattien syöttö toimii myös täällä.
4. Jatka napsauttamista (tai kirjoittamista) ketjuttaaksesi lisää segmenttejä.
5. Paina **Enter** tai **Escape** lopettaaksesi.

```
  ●──────────●──────────●──────────●
 alku    2. napsautus  3. napsautus  Enter lopettaaksesi
            (muuttuu automaattisesti seuraavaksi alkupisteeksi)
```

Tarvitsetko vain yhden segmentin? Paina **Enter** tai **Escape** heti vaiheen 3 jälkeen.

## Koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin alulle tai mille tahansa seuraavalle pisteelle:

1. Kirjoita X-arvo (numerot, `.` tai `-`).
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi pisteen.

## Kulmalukitus ja tarkan pituuden syöttö

Kun siirrät kohdistinta pisteen sijoittamisen jälkeen, komento tarkkailee 45°:n tartunta-akselia (0°, 45°, 90°, 135° …). Kulma **lukittuu**, kun:

- kohdistin on vähintään **5 × kahvan koko** ankkurista, **ja**
- se on **1 kahvan koon** sisällä kohtisuorasta etäisyydestä lähimpään akseliin.

Kun se on lukittu, esikatselu tarttuu akseliin ja voit syöttää tarkan pituuden:

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero pituusarvoon |
| `-` | Negatiivinen pituus — kääntää suunnan akselia pitkin (vain ensimmäinen merkki) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sijoita päätepiste kirjoitetulle etäisyydelle |

Kertynyt arvo näytetään elävästi terminaalissa (esim. `click end point or enter length: 12.5`). Napsauta lukittuna, ja napsautus projisoidaan akselille, joten päätepiste on aina tarkalleen sillä.

Siirtyminen takaisin lähelle ankkuripistettä vapauttaa lukituksen.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö, tai etäisyys kulmalukittuna |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti tai pituus, tai viimeistele ketju jos mitään ei ole kirjoitettu |
| `Escape` | Viimeistele ketju ja poistu |

## Kahvamuokkaus — päätepisteiden venyttäminen

Valittu viiva näyttää kolme kahvaa:

| Kahva | Missä | Mitä se tekee |
|------|-------|--------------|
| **Alku** | Ensimmäinen päätepiste | Vedä sijoittaaksesi uudelleen — loppu pysyy kiinteänä |
| **Keskipiste** | Viivan keskus | Aktivoi **Move**-toiminnon koko viivalle |
| **Loppu** | Toinen päätepiste | Vedä sijoittaaksesi uudelleen — alku pysyy kiinteänä |

Yhden päätepisteen venyttäminen ei koskaan vaikuta toiseen. Tämä eroaa [Polyline](../polyline/)-kahvamuokkauksesta, jossa kärjen siirtäminen muotoilee koko polun uudelleen.

## Viivojen valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee viivan, jos napsautus on segmentin osumaetäisyyden sisällä |
| **Vedä oikealle** (tiukka) | Viiva valitaan vain, jos molemmat päätepisteet ovat laatikon sisällä |
| **Vedä vasemmalle** (risteys) | Viiva valitaan, jos mikä tahansa segmentin osa leikkaa laatikon rajan |

## Tuetut muokkauskomennot

Viivat ovat **ainoa** entiteetti, jolla [Trim](../trim/) ja [Extend](../extend/) toimivat. Kaikki standardit muunnoskomennot pätevät myös:

| Komento | Mitä viivalle tapahtuu |
|---------|------------------------|
| [Move](../move/) | Siirtää molempia päätepisteitä samalla siirtymällä |
| [Copy](../copy/) | Luo identtisen viivan uuteen sijaintiin |
| [Rotate](../rotate/) | Kiertää molempia päätepisteitä valitun perustepisteen ympäri |
| [Mirror](../mirror/) | Peilaa molemmat päätepisteet peiliakselin yli |
| [Scale](../scale/) | Skaalaa molempia päätepisteitä yhtenäisesti perustepisteestä |
| [Offset](../offset/) | Luo rinnakkaisen viivan kiinteällä kohtisuoralla etäisyydellä |
| [Trim](../trim/) | Leikkaa viivan leikkauspisteistä — **vain viivat** |
| [Extend](../extend/) | Venyttää lähimmän päätepisteen ulottumaan rajaan — **vain viivat** |
| [Delete](../delete/) | Poistaa viivan piirustuksesta |

## Ominaisuudet

Kun viiva on valittu, ominaisuuspaneeli näyttää jokaisen kentän, jonka DXF `LINE`-tietue sisältää:

**Yleiset**

| Ominaisuus | Oletus | Merkitys |
|----------|---------|---------|
| Väri | 256 (ByLayer) | ACI-väri-indeksi |
| Taso | `0` | Tason kohdistus |
| Linetype | ByLayer | Nimetty viivakuvio |
| Linetype Scale | 1 | Viivakuvion skaalauskerroin |
| Thickness | 0 | Suulakepuristuksen paksuus |

**Geometria**

| Ominaisuus | Merkitys |
|----------|---------|
| Start X / Start Y | Ensimmäisen päätepisteen koordinaatit |
| End X / End Y | Toisen päätepisteen koordinaatit |

Kaikkia kenttiä voidaan muokata suoraan paneelissa ajamatta komentoa uudelleen.

## Line vs Polyline — kumpaa käyttää

| | Line | Polyline |
|---|------|---------|
| Entiteettien määrä | Yksi `LINE` per segmentti | Yksi `LWPOLYLINE` koko polulle |
| Trim / Extend | Kyllä — segmentti kerrallaan | Ei |
| Suljettu muoto | Ei | Kyllä (close-lippu) |
| Kahvamuokkaus | Venytä yksittäisiä päätepisteitä | Siirrä mitä tahansa kärkeä polkua pitkin |
| Paras käyttö | Apuviivat, yksittäiset segmentit, geometria jota aiot leikata | Ääriviivat, muodot joita pidät kokonaisina |

## DXF — LINE-entiteetti

Viivat tallennetaan `LINE`-entiteetteinä DXF-tiedostossa. Jokainen ominaisuus — alku-/loppukoordinaatit, väri, taso, linetype, linetype-mittakaava ja paksuus — säilyy edestakaisessa matkassa ilman häviötä. Kun avaat DXF:n, joka sisältää `LINE`-entiteettejä, niistä tulee täysin muokattavia `Line`-objekteja editorissa.

Editorissa piirretyt viivat kirjoitetaan myös `LINE`-entiteetteinä tallennettaessa, joten ne ovat luettavissa LibreCADissa, FreeCADissa ja muissa DXF-yhteensopivissa sovelluksissa.
