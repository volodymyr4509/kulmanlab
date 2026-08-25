---
title: ClipboardCopy-komento — Kopioi objektit järjestelmän leikepöydälle
description: ClipboardCopy-komento kirjoittaa valitut objektit järjestelmän leikepöydälle JSON-tekstinä yhdessä niiden viittaamien tasojen ja viivatyyppien kanssa, jotta ne voi liittää toiseen piirustukseen tai toiseen selaimen välilehteen ClipboardPaste-komennolla.
keywords: [leikepöydälle kopiointi CAD, objektien kopiointi piirustusten välillä, CAD-objektit leikepöydälle, Ctrl+C CAD, kopiointi välilehtien välillä, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

`ClipboardCopy`-komento kirjoittaa valitut objektit **järjestelmän leikepöydälle** JSON-tekstinä. Koska se käyttää oikeaa leikepöytää eikä muistissa olevaa puskuria, kopioitu geometria säilyy piirustuksen ulkopuolella: liitä se toiseen tiedostoon, toiseen selaimen välilehteen tai myöhemmin avaamaasi ikkunaan komennolla [ClipboardPaste](../clipboard-paste/).

Tässä on ero [Copy](../copy/)-komentoon: Copy monistaa objektit nykyisen piirustuksen sisällä yhdellä liikkeellä, kun taas ClipboardCopy vie ne paikkaan, josta ne voi noutaa aivan toisesta piirustuksesta.

## Kaksi tapaa aloittaa

**Valitse ensin, kopioi sitten** — nopea reitti:

1. Valitse yksi tai useampi objekti piirtoalueelta.
2. Paina `Ctrl+C` (macOS:ssä `Cmd+C`) tai kirjoita `ClipboardCopy` päätteeseen.
3. Objektit kirjoitetaan leikepöydälle heti, ja komento päättyy.

**Käynnistä ensin, valitse sitten** — aloitus ilman valintaa:

1. Paina `Ctrl+C` tai kirjoita `ClipboardCopy` valinnan ollessa tyhjä.
2. Kehote näyttää **pick objects to copy — Enter or Space to confirm**.
3. **Valitse objektit** — napsauta ottaaksesi yksittäisiä objekteja valintaan tai pois siitä, tai vedä valitaksesi alueella.
4. Paina **Enter** tai **Space** kopioidaksesi valinnan ja poistuaksesi.

**Enter**- tai **Space**-painallus ilman valintaa vain päättää komennon koskematta leikepöytään.

## Mitä kopioidaan

Leikepöydän sisältö kantaa muutakin kuin pelkkää geometriaa, jotta liittäminen vieraaseen piirustukseen näyttää silti oikealta:

| Osa | Tarkoitus |
|-----|-----------|
| **Objektit** | Jokaisen valitun objektin täysi sarjallistettu muoto |
| **Viitepiste** | Valinnan yhteenlasketun rajauksen vasen alakulma — se, minkä ClipboardPaste kiinnittää osoittimeen |
| **Tasot** | Vain ne tasot, joihin kopioidut objektit tosiasiassa viittaavat, nimen perusteella |
| **Viivatyypit** | Vain ne viivatyypit, joihin kopioidut objektit tosiasiassa viittaavat, nimen perusteella |

Kopion mukana kulkevat vain *viitatut* taulukkomerkinnät — ei lähdepiirustuksen koko taso- ja viivatyyppitaulukoita. Rasterointikuvioita ei pakata mukaan lainkaan, eikä tarvitsekaan: piirustuksen kuviotaulukko on sisäänrakennettu oletusjoukko, ja lataamasi `.pat`-tiedostot ovat käyttäjäkohtaisessa varastossa, joka on jo jaettu välilehtien kesken, joten liitetty rasterointi löytää oman kuvionsa itse.

## Vahvistus

Onnistuessaan pääte ilmoittaa, montako objektia kirjoitettiin:

```
3 entities copied to clipboard
```

Jos selain epää pääsyn leikepöydälle, pääte näyttää **Copy failed: clipboard access denied** eikä mitään kirjoiteta. Kyse on selaimen käyttöoikeuspäätöksestä, ei piirustuksen virheestä — katso [Leikepöydän käyttöoikeudet](#leikepöydän-käyttöoikeudet) alempaa.

## Valitseminen komennon aikana

| Tapa | Toiminta |
|------|----------|
| **Napsautus** | Ottaa osoittimen alla olevan objektin valintaan tai pois siitä |
| **Veto oikealle** (tiukka) | Lisää objektit, jotka ovat kokonaan laatikon sisällä |
| **Veto vasemmalle** (leikkaava) | Lisää objektit, jotka leikkaavat laatikon reunan |
| **Enter** / **Space** | Vahvistaa valinnan ja kopioi |

## Näppäimistöviite

| Näppäin | Toiminto |
|---------|----------|
| `Ctrl+C` / `Cmd+C` | Käynnistä ClipboardCopy |
| `Enter` / `Space` | Kopioi nykyinen valinta, tai poistu jos mitään ei ole valittuna |
| `Escape` | Peruuta kopioimatta |

## Leikepöydän käyttöoikeudet

Järjestelmän leikepöydälle kirjoittaminen vaatii selaimen luvan. Käytännössä näppäinpainalluksesta käynnistetty kopiointi sallitaan kysymättä nykyisissä työpöytäselaimissa, mutta kohdistuksensa menettänyt sivu tai tiukat leikepöytäasetukset omaava selain voi evätä sen. Jos näet epäysilmoituksen, napsauta kerran piirtoaluetta antaaksesi sivulle kohdistuksen ja yritä uudelleen.

Koska sisältö on tavallista JSON-tekstiä, kaikki mitä kopioit sen jälkeen korvaa sen — tekstirivi tai linkki. Kopioi uudelleen ennen liittämistä, jos olet välillä käyttänyt leikepöytää johonkin muuhun.

## Tuetut objektit

ClipboardCopy toimii kaikilla objektityypeillä. Objektit sarjallistetaan samalla mekanismilla kuin natiivi `.json`-vienti käyttää, joten matkalla ei häviä mitään.

## Katso myös

- [ClipboardPaste](../clipboard-paste/) — lue leikepöytä takaisin ja sijoita objektit
- [Copy](../copy/) — monista objektit nykyisen piirustuksen sisällä
- [Export Manager](../export-manager/) — tallenna koko piirustus DXF- tai JSON-muotoon
