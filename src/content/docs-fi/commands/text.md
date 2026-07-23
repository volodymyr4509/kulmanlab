---
title: Text-komento — Sijoita MTEXT-merkintöjä KulmanLab CAD:issa
description: Text-komento sijoittaa monirivisen, rikkaasti muotoillun MTEXT-merkinnän. Napsauta sijaintia, kirjoita ponnahdusikkunan editorissa ja paina Escape vahvistaaksesi. Kaksoisnapsauta mitä tahansa olemassa olevaa merkintää avataksesi editorin uudelleen.
keywords: [CAD text-komento, MTEXT, sijoita tekstimerkintä CAD, tekstiannotaatio CAD, lihavointi kursivointi CAD, monirivinen teksti CAD, kulmanlab]
group: markup
order: 0
---

# Text

Komento `text` sijoittaa monirivisen tekstimerkinnän. Kun napsautat sijaintia piirtoalueella, ponnahdusikkunan editori avautuu **rikkaassa** tilassa — voit kirjoittaa sisältöä, soveltaa lihavointia/kursivointia/yliviivausta merkkikohtaisesti, vaihtaa fontteja ja korkeuksia, ja lisätä rivinvaihtoja. Paina **Escape** vahvistaaksesi ja sulkeaksesi editorin.

Katso [Tekstieditori](../../interface/text-editor/)-sivu täydellistä editorin referenssiä varten, mukaan lukien vertailu **rikkaan** ja **yksinkertaisen** tilan välillä.

## Tekstimerkinnän sijoittaminen

1. Kirjoita `text` terminaaliin tai napsauta **Text**-painiketta työkalurivillä.
2. **Napsauta ankkurin sijaintia** piirtoalueella. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Tekstieditorin ponnahdusikkuna** avautuu uuden merkinnän yläpuolelle. Kirjoita sisältösi.
4. Paina **Escape** vahvistaaksesi merkinnän ja sulkeaksesi editorin.

Oletuskorkeus on **12 piirustusyksikköä**.

## Olemassa olevan merkinnän muokkaaminen

**Kaksoisnapsauta** mitä tahansa tekstimerkintää piirtoalueella avataksesi editorin uudelleen kyseiselle merkinnälle.

## Ankkurin koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi ankkurin ja avataksesi editorin.

## Näppäinreferenssi

**Ankkurivaihe**

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti |

**Tekstieditorin vaihe** (katso [Tekstieditori](../../interface/text-editor/) täydellistä referenssiä varten)

| Näppäin | Toiminto |
|-----|--------|
| Mikä tahansa tulostettava merkki | Lisää kohdistimen kohdalle |
| `Backspace` / `Delete` | Poista viereinen merkki tai valinta |
| `Enter` | Lisää rivinvaihto |
| `←` / `→` | Siirrä kohdistinta |
| `Home` / `End` | Hyppää kovan rivin alkuun / loppuun |
| `Escape` | Vahvista ja sulje editori |

## Kahvamuokkaus — uudelleensijoittaminen

Valittu tekstimerkintä näyttää yhden kahvan ankkuripisteessä:

| Kahva | Sijainti | Mitä se tekee |
|------|----------|--------------|
| **Ankkuri** | Tekstin vasemmassa alakulmassa | Vedä sijoittaaksesi merkinnän uudelleen |

## Tekstin valitseminen

| Menetelmä | Käyttäytyminen |
|--------|-----------|
| **Napsauta** | Valitsee, jos napsautus osuu tekstin kierretyn rajauslaatikon sisään |
| **Vedä oikealle** (tiukka) | Kaikkien rajauslaatikon neljän kulman on oltava valinta-alueen sisällä |
| **Vedä vasemmalle** (risteys) | Mikä tahansa päällekkäisyys tekstin rajauslaatikon ja valinta-alueen välillä valitsee sen |

## Tuetut muokkauskomennot

| Komento | Mitä tekstille tapahtuu |
|---------|--------------------------|
| [Move](../move/) | Siirtää ankkuripistettä |
| [Copy](../copy/) | Luo identtisen merkinnän uuteen sijaintiin |
| [Rotate](../rotate/) | Kiertää ankkuripistettä ja lisää kulman Rotation Degree -ominaisuuteen |
| [Mirror](../mirror/) | Peilaa ankkuripisteen peiliakselin yli (tekstijonoa ei käännetä) |
| [Scale](../scale/) | Skaalaa ankkuripisteen sijainnin ja kertoo korkeuden skaalauskertoimella |
| [Delete](../delete/) | Poistaa merkinnän |

Text ei tue **Offset**-, **Trim**- tai **Extend**-toimintoja.

## Ominaisuudet

Kun tekstimerkintä on valittu, ominaisuuspaneeli näyttää:

**Yleiset**

| Ominaisuus | Oletus | Merkitys |
|----------|---------|---------|
| Väri | 256 (ByLayer) | ACI-väri-indeksi |
| Taso | `0` | Tason kohdistus |

**Geometria**

| Ominaisuus | Merkitys |
|----------|---------|
| Position X / Position Y | Ankkuripisteen koordinaatit |
| Height | Perustekstin korkeus piirustusyksikköinä (oletus: **12**) |
| Rotation Degree | Kierto vastapäivään asteina |

**Ominaisuudet**

| Ominaisuus | Merkitys |
|----------|---------|
| Content | Tekstijono (MTEXT-sisäänrakennetut koodit säilytetty) |
| Attachment Point | Tasauskoodi (1 = ylävasen … 9 = alaoikea) |

Text-entiteetillä ei ole Linetype-, Linetype Scale- tai Thickness-ominaisuuksia.

## DXF — MTEXT-entiteetti

Tekstimerkinnät tallennetaan **MTEXT**-entiteetteinä DXF-tiedostossa. Lihavointi ja kursivointi koodataan käyttäen merkkejä `\L`, `\K`, `\O` ja sisäänrakennettuja fonttivaihtoja (`\f`). Merkkikohtainen korkeus koodataan muodossa `\H`. Kaikki muotoilu säilyy viennissä ja on luettavissa LibreCADissa, FreeCADissa ja muissa DXF-yhteensopivissa sovelluksissa.
