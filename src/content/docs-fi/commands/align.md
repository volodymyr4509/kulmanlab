---
title: Align — Siirrä, Kierrä ja Skaalaa Entiteettejä Pisteparien Avulla
description: Align-komento sijoittaa valitut entiteetit uudelleen käyttäen yhtä tai kahta lähde-/kohdepistettä, yhdistäen siirron, kierron ja valinnaisen yhtenäisen skaalauksen yhdeksi toiminnoksi. Toimii kuin yhdistetty Move + Rotate + Scale.
keywords: [CAD align-komento, kohdista entiteetit CAD, siirrä kierrä skaalaa, pisteparikohdistus, vaihtoehto työpöytä-CAD:in ALIGN-komennolle, kulmanlab]
group: edit
order: 6
---

# Align

Komento `align` sijoittaa valitut entiteetit uudelleen käyttäen yhtä tai kahta lähde-/kohdepistettä. Yhdellä parilla se toimii täsmälleen kuten [Move](../move/) (vain siirto). Kahdella parilla se myös kiertää valintaa niin, että lähteestä-lähteeseen-suunta vastaa kohteesta-kohteeseen-suuntaa, ja voi valinnaisesti skaalata sitä niin, että lähdesegmentin pituus vastaa kohdesegmentin pituutta — siirto, kierto ja skaalaus yhdessä toiminnossa.

## Kaksi tapaa aloittaa

**Valitse ensin, kohdista sitten** — valitse entiteetit ensin, aktivoi sitten:

1. Valitse yksi tai useampi entiteetti piirtoalueella.
2. Kirjoita `align` terminaaliin tai napsauta **Align**-painiketta työkalurivillä.
3. **Napsauta ensimmäistä lähdepistettä (S1)**, napsauta sitten **ensimmäistä kohdepistettä (D1)**.
4. **Napsauta toista lähdepistettä (S2)**, tai paina **Enter** käyttääksesi vain siirtoa nyt.
5. **Napsauta toista kohdepistettä (D2)**.
6. Vastaa skaalauskysymykseen: paina **Y** skaalataksesi, tai **N** / **Enter** säilyttääksesi alkuperäisen koon.

**Aktivoi, valitse sitten** — aloita komento ilman mitään valittuna:

1. Kirjoita `align` tai napsauta työkalurivin painiketta.
2. **Valitse objektit** — napsauta vaihtaaksesi yksittäisiä entiteettejä, tai vedä valitaksesi alueen mukaan.
3. Paina **Enter** tai **Space** vahvistaaksesi valinnan.
4. Jatka S1 → D1 → S2 → D2 → skaalauskysymys kuten yllä.

> Terminaali tarvitsee vain tarpeeksi kirjaimia ollakseen yksiselitteinen — kirjoittamalla `al` ja painamalla **Enter** aktivoi Alignin suoraan, koska mikään muu komennon nimi ei ala näillä kahdella kirjaimella.

## Kohdistuksen anatomia

```
  Lähdepisteet (entiteeteillä):        Kohdepisteet:
  ● S1                                 ● D1
   \                                    \
    ● S2                                 ● D2

  Tulos: valinta siirretään niin, että S1 osuu D1:een, kierretään
  sitten D1:n ympäri niin, että suunta S1→S2 vastaa suuntaa
  D1→D2 — ja jos valitset skaalauksen, kokoa muutetaan niin,
  että |S1S2| muuttuu |D1D2|:ksi.
```

Live-esikatselu seuraa kohdistinta jokaisessa vaiheessa: siirron esikatselu D1:tä sijoitettaessa, sitten kierretty (katkoviivainen) esikatselu kun D2:ta sijoitetaan.

## Yhden pisteen kohdistus (vain siirto)

Kun D1 on sijoitettu, paina **Enter** napsauttamatta toista lähdepistettä. Valinta siirretään vektorilla S1→D1 — ei kiertoa tai skaalausta — identtinen [Move](../move/)-komennon kanssa, joka käyttää S1:tä perustepisteenä ja D1:tä kohteena.

## Kahden pisteen kohdistus (siirto + kierto + valinnainen skaalaus)

Kun sekä S2 että D2 on sijoitettu:

- **Kiertokulma** — ero kohdesuunnan (`D1 → D2`) ja lähdesuunnan (`S1 → S2`) välillä.
- **Skaalauskysymys** — `scale objects to alignment points? [Yes/No] <N>` ilmestyy, oletuksena **No**:
  - Paina **Y** skaalataksesi myös valinnan yhtenäisesti D1:n ympäri niin, että etäisyys `S1–S2` muuttuu etäisyydeksi `D1–D2`.
  - Paina **N** tai **Enter** säilyttääksesi alkuperäisen koon — vain siirto ja kierto sovelletaan.

Näppäimen painaminen skaalauskysymyksessä soveltaa kohdistuksen välittömästi — Yes- tai No-valinnan jälkeen ei ole erillistä vahvistusvaihetta.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `Enter` / `Space` | Vahvista valinta ja siirry S1-vaiheeseen |
| `Enter` (S2-vaiheessa) | Ohita kierto — sovella vain siirto käyttäen S1:tä ja D1:tä |
| `Y` | Sovella kohdistus skaalauksella |
| `N` / `Enter` (skaalauskysymyksessä) | Sovella kohdistus ilman skaalausta |
| `Escape` | Pisteitä valittaessa: hylkää ne ja palaa valintavaiheeseen; jos mitään ei ole valittu: peruuta komento |

## Valinta komennon aikana

Kun komento alkaa valintavaiheessa:

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Vaihtaa kohdistimen alla olevan entiteetin valinnan tilaa |
| **Vedä oikealle** (tiukka) | Lisää kokonaan laatikon sisällä olevat entiteetit |
| **Vedä vasemmalle** (risteys) | Lisää laatikon rajan leikkaavat entiteetit |
| **Enter** / **Space** | Vahvistaa valinnan ja siirtyy S1-vaiheeseen |

## Kohdistuksen jälkeen

Kohdistetut entiteetit pysyvät valittuina uudessa sijainnissaan, ja komento päättyy automaattisesti — aja **Align** uudelleen, tai vaihda [Move](../move/)-, [Rotate](../rotate/)- tai [Scale](../scale/)-komentoon valitsematta uudelleen.

## Align vs Move

| | Align | Move |
|---|-------|------|
| Pisteparit | 1 (vain siirto) tai 2 (siirto + kierto + skaalaus) | 1 (vain siirto) |
| Kierto | Kyllä, toisella pisteparilla | Ei |
| Skaalaus | Valinnainen, toisella pisteparilla | Ei |
| Paras käyttö | Yhden muodon sovittaminen toiseen referenssipisteitä käyttäen | Yksinkertainen uudelleensijoitus |

## Tuetut entiteetit

Align toimii kaikilla entiteettityypeillä, joita Move, Rotate ja Scale tukevat — samat toiminnot `translate`, `rotate` ja `scale`, joita nämä komennot käyttävät, sovelletaan järjestyksessä, joten mitään ei jätetä pois.
