---
title: Offset-komento — Luo Rinnakkaisia Kopioita Etäisyydellä
description: Offset-komento luo rinnakkaisen kopion Line-, Circle-, Arc-, Ellipse- tai Polyline-entiteetistä kirjoitetulla etäisyydellä. Etäisyys syötetään kerran ja käytetään uudelleen useille offset-toiminnoille. Sivunapsautus määrää, mihin suuntaan kopio ilmestyy. Viisi entiteettityyppiä tuettu.
keywords: [CAD offset-komento, rinnakkainen kopio CAD, offset viiva CAD, offset ympyrä CAD, offset polylinja CAD, samankeskinen offset, kulmanlab]
group: edit
order: 10
---

# Offset

Komento `offset` luo rinnakkaisen kopion entiteetistä kiinteällä kohtisuoralla etäisyydellä. Kirjoitat etäisyyden kerran, napsautat sitten entiteettejä ja valitset sivun — komento pysyy valmiina samalla etäisyydellä, jotta voit siirtää useita objekteja yhdessä istunnossa.

Tuetut entiteettityypit: **Line, Circle, Arc, Ellipse, Polyline** (mukaan lukien Rectangles).

## Offsetin käyttäminen

1. Kirjoita `offset` terminaaliin tai napsauta **Offset**-painiketta työkalurivillä.
2. **Kirjoita offset-etäisyys** ja paina **Enter** tai **Space**.
3. **Napsauta entiteettiä** siirtääksesi — jos entiteetti ei ole tuettu tyyppi, virheilmoitus ilmestyy ja voit napsauttaa toista entiteettiä.
4. **Siirrä kohdistinta** puolelle, jolla kopion pitäisi näkyä — elävä esikatselu seuraa mukana.
5. **Napsauta** sijoittaaksesi offset-kopion.

Jokaisen sijoituksen jälkeen komento palaa vaiheeseen 3 **samalla etäisyydellä**, valmiina seuraavaan offsettiin. Paina **Escape** nollataksesi takaisin etäisyyden syöttövaiheeseen.

```
  Etäisyys: 10

  ─────────────────    ← alkuperäinen viiva
  ─────────────────    ← offset-kopio (10 yksikköä alempana)
```

## Offset-käyttäytyminen entiteeteittäin

| Entiteetti | Miten offset lasketaan |
|--------|---------------------------|
| **Line** | Rinnakkainen viiva siirrettynä kohtisuoraan alkuperäiseen suuntaan nähden |
| **Circle** | Samankeskinen ympyrä; napsauta ulkopuolelta → suurempi säde, sisäpuolelta → pienempi säde |
| **Arc** | Samankeskinen kaari uudella säteellä; sama kulmaväli säilyy |
| **Ellipse** | Molempia puoliakseleja kasvatetaan tai pienennetään samalla etäisyydellä |
| **Polyline** | Jokainen segmentti siirretään itsenäisesti; vierekkäiset offset-segmentit viistetään kulmissa |

**Circle-, Arc- ja Ellipse**-entiteeteille: jos sisäänpäin suuntautuva offset pienentäisi minkä tahansa säteen tai puoliakselin nollaan tai alle, offsetia ei sovelleta.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero etäisyysarvoon |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` / `Space` | Vahvista kirjoitettu etäisyys ja siirry entiteetin valintaan |
| `Escape` | Nollaa takaisin etäisyyden syöttövaiheeseen |

## Työnkulun huomautus

Etäisyys pysyy asetettuna, kunnes painat **Escape**. Tämä tekee tehokkaaksi siirtää monia entiteettejä samalla välillä — kirjoita etäisyys kerran, napsauta sitten ja valitse sivu jokaiselle entiteetille vuorollaan.

## Offset vs Copy

| | Offset | Copy |
|---|--------|------|
| Siirtymä | Kohtisuorassa entiteetin geometriaan nähden | Mielivaltainen vektori (perusta → kohde) |
| Tuetut entiteetit | Line, Circle, Arc, Ellipse, Polyline | Kaikki entiteettityypit |
| Etäisyyden syöttö | Kirjoitettu ennen entiteetin valintaa | Kirjoitettu tai napsautettu valinnan jälkeen |
| Paras käyttö | Rinnakkaiset viivat, samankeskiset ympyrät, sisään-/ulospäin suuntautuvat polut | Kaksoiskappaleiden sijoittaminen mielivaltaisiin sijainteihin |
