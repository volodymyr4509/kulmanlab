---
title: Leader — Piirrä Multileader-merkintöjä Nuolella ja Tekstillä
description: "Leader-komento piirtää nelivaiheisen multileader-merkinnän: nuolenkärki, dogleg-kulma, tekstin sijainti ja kirjoitettu merkintä. Tekstin suunta säätyy automaattisesti doglegin sijainnin mukaan. Vain tuonti DXF:ssä — johtimia ei kirjoiteta tallennettaessa."
keywords: [CAD leader-komento, multileader-merkintä, leader CAD, nuoli-etikettimerkintä, dogleg-johdin, tekstin suunta CAD, kulmanlab]
group: markup
order: 1
---

# Leader

Komento `leader` piirtää multileader-merkinnän neljässä vaiheessa: nuolenkärki, joka koskettaa ominaisuutta, johdinlinja, joka taittuu doglegistä, tekstiankkuri ja kirjoitettu merkintä. Kaikista merkintäkomennoista Leader on ainoa, joka sisältää interaktiivisen tekstinsyöttövaiheen vilkkuvalla kohdistimen esikatselulla.

## Multileaderin anatomia

```
  ◄── nuolenkärki  (vaihe 2 — koskettaa ominaisuutta)
      \
       \  johdinlinja
        \
         ●──── dogleg (vaihe 3) ──── tekstiankkuri (vaihe 4)
                                    Merkintäteksti  (vaihe 5)
```

- **Nuolenkärki** — terävä pää, joka sijoitetaan merkittävään ominaisuuteen.
- **Dogleg** — kulma, jossa johdinlinja taittuu kohti tekstiä.
- **Tekstiankkuri** — missä merkintä sijoitetaan. Teksti tasautuu automaattisesti vasemmalle tai oikealle.

## Johtimen piirtäminen

1. Kirjoita `leader` terminaaliin tai napsauta **Leader**-painiketta työkalurivillä.
2. **Napsauta nuolenkärkeä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta doglegiä** — johdinlinjan taite. Kulma lukittuu 45°:n lisäyksiin; kirjoita pituus ja paina **Enter** tarkkaa sijoittelua varten. Tai kirjoita `X,Y` syöttääksesi absoluuttisen koordinaatin.
4. **Napsauta tekstin sijaintia** — missä merkintä ankkuroituu. Samat vaihtoehdot pätevät: napsauta, kulmalukitus + pituus, tai `X,Y`.
5. **Kirjoita merkinnän teksti** — piirtoalueen esikatselu päivittyy elävästi vilkkuvalla kohdistimella. Paina **Enter** sijoittaaksesi.

## Koordinaattien syöttö (kaikki pistevaiheet)

Missä tahansa pisteen sijoitusvaiheessa (kärki, dogleg, tekstin sijainti) voit kirjoittaa tarkan koordinaatin napsauttamisen sijaan:

1. Kirjoita X-arvo (numerot, `.` tai `-`).
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]` vahvistaen, että X on lukittu.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi pisteen.

## Kulmalukitus (vaiheet 3 ja 4)

Jokaisen sijoitetun pisteen jälkeen komento tarttuu 45°:n akseleihin, kun kohdistin on tarpeeksi kaukana. Lukittuna:
- Esikatselu tarttuu akseliin.
- Kirjoita pituus ja paina **Enter** sijoittaaksesi seuraavan pisteen tarkalleen kyseiselle etäisyydelle.

Kulmalukitus ja koordinaattien syöttö sulkevat toisensa pois — kun kirjoitat numeron ilman edeltävää pilkkua, komento tulkitsee sen etäisyydeksi (kulmalukituksen täytyy olla aktiivinen). Syöttääksesi absoluuttisen koordinaatin sen sijaan, aloita X-luvulla ja jatka pilkulla.

## Tekstimerkinnän muokkaaminen

Kirjoittaessasi merkintää vaiheessa 5, voit navigoida ja muokata tekstiä ennen sen sijoittamista:

| Näppäin | Toiminto |
|-----|--------|
| Mikä tahansa tulostettava merkki | Lisää kohdistimen kohdalle |
| `←` / `→` | Siirrä kohdistinta vasemmalle tai oikealle |
| `Backspace` | Poista kohdistimen vasemmalla puolella oleva merkki |
| `Delete` | Poista kohdistimen oikealla puolella oleva merkki |
| `Enter` | Sijoita johdin |

## Automaattinen tekstin suunta

Tekstin tasaus säätyy kohdistimen sijainnin mukaan suhteessa doglegiin:

| Kohdistimen sijainti | Tekstin suunta |
|-----------------|---------------|
| Doglegin **oikealla** puolella | Vasemmalta oikealle tekstiankkurista |
| Doglegin **vasemmalla** puolella | Oikealta vasemmalle (ankkuroitu oikealle puolelle) |

Manuaalista säätöä ei tarvita — siirrä kohdistin puolelle, jolla haluat merkinnän olevan, ja se tasautuu oikein.

## Näppäinreferenssi

**Pistevaiheet (kärki, dogleg, tekstin sijainti)**

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin kirjoittaminen (sitten `,` lukitaksesi X:n ja syöttääksesi Y:n) |
| `,` | Vahvista X ja siirry Y:n syöttöön |
| `0`–`9`, `.`, `-` | Rakenna etäisyys kulmalukittuna |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti tai etäisyys |

**Tekstinsyöttövaihe**

| Näppäin | Toiminto |
|-----|--------|
| Tulostettava merkki | Lisää kohdistimen kohdalle |
| `←` / `→` | Siirrä kohdistinta |
| `Backspace` | Poista vasemmalta |
| `Delete` | Poista oikealta |
| `Enter` | Sijoita johdin |

| Näppäin | Toiminto |
|-----|--------|
| `Escape` | Peruuta ja nollaa vaiheeseen 2 |

## Olemassa olevan johtimen muokkaaminen

**Kaksoisnapsauta** sijoitettua multileaderia avataksesi tekstieditorin uudelleen **rikkaassa** tilassa. Rikkaassa tilassa voit soveltaa lihavointia, kursivointia ja merkkikohtaisia fontti- tai korkeusohituksia, ja lisätä rivinvaihtoja `Enter`-näppäimellä. Paina **Escape** vahvistaaksesi ja sulkeaksesi.

Katso [Tekstieditori — rikas tila](../../interface/text-editor/#rich-mode) täydellistä referenssiä varten.

## Haarojen lisääminen ja poistaminen

- Lisätäksesi ylimääräisen nuolenkärkihaaran olemassa olevaan johtimeen: [Leader+](../leader-add/)
- Poistaaksesi haaran johtimesta, jossa on kaksi tai useampi: [Leader−](../leader-remove/)

## DXF — vain tuonti

**Johtimet ovat vain tuontia varten.** DXF-tiedostojen `MLEADER`-entiteetit luetaan ja näytetään oikein, mutta editorissa piirrettyjä johtimia **ei kirjoiteta** DXF-tiedostoa tallennettaessa. Käytä johtimia visuaaliseen merkintään; älä luota niihin edestakaisen matkan työnkuluissa.
