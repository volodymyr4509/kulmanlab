---
title: Scale-komento — Muuta Kokoa Yhtenäisesti Perustepisteen Ympäri
description: Scale-komento muuttaa valittujen entiteettien kokoa yhtenäisesti kirjoitetulla kertoimella kiinteän perustepisteen ympäri. Kerroin syötetään aina näppäimistöltä — napsauta-asettaaksesi-skaalan -toimintoa ei ole. Yli 1:n kerroin suurentaa; alle 1:n pienentää. Kaikki entiteettityypit tuetaan.
keywords: [CAD scale-komento, muuta entiteettien kokoa CAD, skaalaa objekteja CAD, yhtenäinen skaalaus CAD, skaalauskerroin CAD, suurenna pienennä CAD, kulmanlab]
group: edit
order: 5
---

# Scale

Komento `scale` muuttaa valittujen entiteettien kokoa yhtenäisesti perustepisteen ympäri. Kaikki etäisyydet perustepisteestä kerrotaan skaalauskertoimella — kerroin `2` kaksinkertaistaa kaikki mitat, `0.5` puolittaa ne. Kerroin syötetään aina kirjoittamalla; napsauta-asettaaksesi-skaalan -toimintoa ei ole.

## Kaksi tapaa aloittaa

**Valitse ensin, skaalaa sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `scale` terminaaliin tai napsauta **Scale**-painiketta työkalurivillä.
3. **Napsauta perustepistettä** — kiinteä piste, joka ei liiku skaalauksen aikana. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
4. **Kirjoita skaalauskerroin** ja paina **Enter**.

**Aktivoi, valitse sitten** — aloita komento ilman mitään valittuna:

1. Kirjoita `scale` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta vaihtaaksesi, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. **Napsauta perustepistettä** (koordinaattien syöttö käytettävissä), kirjoita sitten kerroin.

```
  Perusta ●                Perusta ●
        [entiteetti]  →          [suurempi entiteetti]
  kerroin = 2 → etäisyydet ●:stä kaksinkertaistuvat
```

## Skaalauskertoimen kirjoittaminen

Kun perustepiste on sijoitettu, terminaali näyttää `enter scale factor:` ja odottaa näppäimistösyötettä:

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää numero kertoimeen |
| `-` | Negatiivinen kerroin (vain ensimmäinen merkki — kääntää ja sitten skaalaa) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sovella skaalaus kirjoitetulle kertoimelle |

Kertoimen on oltava nollasta poikkeava. Yleiset arvot:

| Kerroin | Vaikutus |
|--------|--------|
| `2` | Kaksinkertaistaa kaikki mitat |
| `0.5` | Puolittaa kaikki mitat |
| `1.5` | Kasvattaa 50 %:lla |
| `-1` | Peilaa perustepisteen yli (vastaa 180°:n kiertoa) |

Kirjoitettaessa ei ole elävää esikatselua — skaalattu tulos ilmestyy vasta **Enter**-näppäimen painamisen jälkeen.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta |
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö (perustepistevaihe), tai skaalauskerroin (kertoimen vaihe) |
| `,` | Lukitse X ja siirry Y:n syöttöön (perustepistevaihe) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista koordinaatti tai sovella skaalaus |
| `Escape` | Peruuta ja nollaa |

## Valinta komennon aikana

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin |
| **Vedä oikealle** (tiukka) | Lisää kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Lisää laatikon leikkaavat entiteetit |
| **Enter** / **Space** | Vahvistaa valinnan |

## Mikä skaalataan

Kaikki entiteettityypit tuetaan. Jokainen entiteetti skaalaa geometriansa suhteessa perustepisteeseen:

| Entiteetti | Mikä muuttuu |
|--------|-------------|
| Line | Molemmat päätepisteet skaalataan pois perustepisteestä |
| Circle | Keskipiste skaalataan perustepisteestä; säde kerrotaan kertoimella |
| Arc | Keskipiste skaalataan; säde kerrotaan kertoimella; kulmat pysyvät muuttumattomina |
| Ellipse | Keskipiste skaalataan; molemmat puoliakselien pituudet kerrotaan kertoimella |
| Polyline / Rectangle | Jokainen kärki skaalataan perustepisteestä |
| Text | Ankkuripiste skaalataan; korkeus kerrotaan kertoimella |
| Spline | Kaikki ohjauspisteet / sovituspisteet skaalataan |
