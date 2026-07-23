---
title: Rotate-komento — Kierrä Entiteettejä Perustepisteen Ympäri
description: Rotate-komento kiertää valittuja entiteettejä valitun perustepisteen ympäri. Kulma voidaan kirjoittaa tarkasti tai asettaa napsauttamalla — kohdistimen suunta perustepisteestä napsautukseen määrää kulman. Positiiviset kulmat ovat vastapäivään DXF-koordinaateissa.
keywords: [CAD rotate-komento, kierrä entiteettejä CAD, kierrä objekteja kulma, vastapäivään kierto CAD, kirjoitettu kulma kierto, kulmanlab]
group: edit
order: 3
---

# Rotate

Komento `rotate` kiertää valittuja entiteettejä perustepisteen ympäri. Määrität kiertokulman joko kirjoittamalla numeron asteina tai napsauttamalla — kulma lasketaan perustepisteen ja napsautuskohdan välisestä suunnasta.

## Kaksi tapaa aloittaa

**Valitse ensin, kierrä sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `rotate` terminaaliin tai napsauta **Rotate**-painiketta työkalurivillä.
3. **Napsauta perustepistettä** — kierron keskus. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
4. **Kirjoita kulma ja paina Enter**, tai **napsauta** asettaaksesi kulman kohdistimen suunnasta.

**Aktivoi, valitse sitten** — aloita komento ilman mitään valittuna:

1. Kirjoita `rotate` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta vaihtaaksesi, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. **Napsauta perustepistettä** (koordinaattien syöttö käytettävissä), aseta sitten kulma.

```
  Ennen:            Jälkeen (90°:n kierto ●:n ympäri):
                        ╔══╗
  ●  [entiteetti]  →  ● ║    ║
                        ╚══╝
```

Kierrettyjen entiteettien elävä haamuesikatselu seuraa kohdistimen kulmaa perustepisteen asettamisen jälkeen.

## Kulman asettaminen

**Kirjoitettu kulma** — kirjoita numero (asteina) milloin tahansa perustepisteen sijoittamisen jälkeen. Esikatselu tarttuu kirjoitettuun kulmaan, kun jatkat säätämistä ennen Enterin painamista.

**Napsautettu kulma** — jos kirjoitettua arvoa ei ole, napsautus asettaa kulman yhtä suureksi kuin `atan2(cursorY − baseY, cursorX − baseX)` — suunta perustepisteestä napsautukseen, asteina.

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero kulma-arvoon |
| `-` | Negatiivinen kulma (vain ensimmäinen merkki) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sovella kierto kirjoitetulle kulmalle |

## Kulman suunta

Kulmat noudattavat **DXF-käytäntöä**:

- **Positiiviset** arvot kiertävät **vastapäivään** piirustuskoordinaateissa (Y-ylös).
- Näytöllä, jossa Y-akseli on käänteinen (Y-alas), positiiviset kulmat näkyvät **myötäpäivään**.

Yleiset arvot: `90` = neljännesikierros, `180` = puolikierros, `-90` = vastakkainen neljännesikierros.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta |
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö (perustepistevaihe), tai kulma-arvo (kulmavaihe) |
| `,` | Lukitse X ja siirry Y:n syöttöön (perustepistevaihe) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista koordinaatti tai sovella kierto |
| `Escape` | Peruuta ja nollaa |

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin |
| **Vedä oikealle** (tiukka) | Lisää kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Lisää laatikon leikkaavat entiteetit |
| **Enter** / **Space** | Vahvistaa valinnan |

## Tuetut entiteetit

Rotate toimii kaikilla entiteettityypeillä. Jokaisen entiteetin geometria kierretään perustepisteen ympäri — esimerkiksi Circle siirtää keskipistettään säteen pysyessä samana; Arc siirtää keskipistettään ja siirtää alku- ja loppukulmiaan kierron määrällä; Text-entiteetti siirtää ankkuripistettään ja lisää kulman Rotation Degree -ominaisuuteensa.
