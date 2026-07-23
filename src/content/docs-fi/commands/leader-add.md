---
title: Leader+-komento — Lisää Haara Olemassa Olevaan Multileaderiin
description: Leader+-komento lisää uuden nuolenkärkihaaran olemassa olevaan multileaderiin. Uusi haara jakaa doglegin, tekstin ja kaiken tyylin valitun johtimen kanssa. Kaksi napsautusta — valitse johdin, sijoita uusi kärki.
keywords: [CAD lisää johtimen haara, leader+-komento, lisää nuoli johtimeen, multileader-haara, kulmanlab]
group: markup
order: 2
---

# Leader+

Komento `leader+` lisää uuden nuolenkärkihaaran olemassa olevaan multileaderiin. Uusi haara osoittaa johtimen olemassa olevasta doglegista uuteen nuolenkärkeen, jonka napsautat. Kaikki tyyli — doglegin sijainti, teksti, nuolenkärjen tyyppi ja koko — periytyy valitusta johtimesta.

## Haaran lisääminen

1. Kirjoita `leader+` terminaaliin.
2. **Napsauta olemassa olevaa multileaderia** valitaksesi sen.
3. **Napsauta uutta nuolenkärkeä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten. Esikatseluviiva näkyy kohdistimesta johtimen doglegiin.

Haara sijoitetaan ja komento pysyy aktiivisena — voit heti napsauttaa toista johdinta lisätäksesi lisää haaroja. Paina **Enter**, **Space** tai **Escape** viimeistelläksesi.

```
  Ennen:                          Jälkeen:
  ◄── haara 1                    ◄── haara 1
       \                               \
        ●──── dogleg ──── teksti          ●──── dogleg ──── teksti
                                       /
                                  haara 2 ──►  (uusi kärki jonka napsautit)
```

## Kärjen koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali vahvistaa, että X on lukittu.
3. Kirjoita Y-arvo.
4. Paina **Enter** sijoittaaksesi.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin kirjoittaminen |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Enter` | Vahvista kirjoitettu koordinaatti ja sijoita haara |
| `Enter` / `Space` | Viimeistele (kun syöte ei ole käynnissä) |
| `Escape` | Peruuta ja nollaa |

## Huomautuksia

- Vain **Multileader**-entiteetit voidaan valita — minkä tahansa muun entiteettityypin napsauttaminen ei tee mitään.
- Uusi haara lähtee olemassa olevasta doglegista; valitset vain, minne nuolenkärki menee.
- Multileaderin haarojen määrälle ei ole rajaa.

## Liittyvät komennot

| Komento | Mitä se tekee |
|---------|-------------|
| [Leader](../leader/) | Luo täysin uusi multileader alusta |
| [Leader−](../leader-remove/) | Poista haara multileaderista, jossa on kaksi tai useampi |
