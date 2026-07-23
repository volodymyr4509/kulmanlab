---
title: Area-komento — Mittaa Monikulmion Ala ja Piiri
description: Area-komento mittaa 3 tai useamman napsautetun pisteen määrittelemän monikulmion sisäalueen ja piirin, käyttäen shoelace-kaavaa. Tukee kulmalukittua suunnattua syöttöä ja tuloksen pysyvää korostusta piirtoalueella.
keywords: [CAD mittaa ala, area-komento, monikulmion alan laskin, piirin mittaus, shoelace-kaava, kulmanlab CAD-mittaus]
group: measure
order: 3
---

# Area

Komento `area` mittaa kolmen tai useamman napsautetun pisteen määrittelemän monikulmion sisäalueen ja piirin, ja tulostaa molemmat tulokset terminaaliin 4 desimaalin tarkkuudella. Se on kolmas mittauskomento, [Distance](../distance/)- (suoran viivan pituus) ja [Angle](../angle/)-komentojen (sisäkulma kärkipisteessä) rinnalla.

## Alan mittauksen anatomia

```
  ● ensimmäinen piste
   \
    \
     ● toinen piste
      \
       \             (katkoviiva) sulkevan reunan esikatselu
        ●───────────────┐
      kolmas piste       │  (katkoviiva) seuraavan reunan esikatselu kohdistimeen
                         ✕ kohdistin  →  terminaali: "Area: 12.3456  Perimeter: 45.6789"
```

- **Kärjet** — jokaisesta napsautetusta (tai kirjoitetusta) pisteestä tulee monikulmion kärki; vahvistetut reunat piirretään yhtenäisinä ja sisäpuoli täytetään läpikuultavalla korostuksella.
- **Esikatselureunat** — katkoviivat näyttävät odottavan reunan viimeisestä kärjestä kohdistimeen, ja sulkevan reunan kohdistimesta takaisin ensimmäiseen kärkeen, jotta näet muodon ennen sen vahvistamista.
- **Sulkeva reuna** — et koskaan napsauta ensimmäistä pistettä uudelleen; Enter-näppäimen painaminen sulkee monikulmion automaattisesti.

## Alan mittaaminen

1. Kirjoita `area` terminaaliin tai napsauta **Area**-painiketta työkalurivillä (Measure-paneelin alarivi).
2. **Napsauta ensimmäistä pistettä**, tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
3. **Napsauta jokaista lisäkärkeä** järjestyksessä muodon ympäri. Koordinaattien syöttö toimii jokaisessa vaiheessa.
4. Kun vähintään **3 pistettä** on sijoitettu, paina **Enter** (ilman odottavaa koordinaatti- tai etäisyyssyötettä) sulkeaksesi monikulmion ja laskeaksesi tuloksen.
5. Terminaali tulostaa `Area: <arvo>  Perimeter: <arvo>`, ja suljettu monikulmio — täyttö, ääriviiva ja kärkikahvat — pysyy korostettuna piirtoalueella.
6. **Napsauta mihin tahansa, paina mitä tahansa näppäintä, tai paina `Escape`** hylätäksesi tuloksen ja päättääksesi komennon.

## Kulmalukitus ja tarkka etäisyys

Kun ensimmäinen kärki on sijoitettu, seuraava reuna lukittuu suuntaan, kun liikut kohti jotakin määritettyä kulmanseurantalisäystä (10°, 15°, 20°, 30°, 45° tai 90°, asetettu työkalurivin valikosta):

- Reunan esikatselu tarttuu lukittuun suuntaan, ja kulmanseurannan ilmaisin piirretään ankkurikärkeen.
- Kirjoita pituus ja paina **Enter** sijoittaaksesi seuraavan kärjen tarkalleen kyseiselle etäisyydelle lukittua suuntaa pitkin.
- Napsauttaminen lukittuna (ilman kirjoitettua pituutta) sijoittaa kärjen kohdistimen projektioon lukittuun suuntaan.

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.` | Lisää reunan pituusarvoon |
| `-` | Negatiivinen pituus (vain ensimmäinen merkki) |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Sijoita seuraava kärki kirjoitetulle pituudelle |

## Monikulmion sulkeminen

- Enter sulkee muodon vain, kun **3 tai useampi** kärki on sijoitettu — vähemmällä sillä ei ole vaikutusta.
- Reuna viimeisestä kärjestä takaisin ensimmäiseen lisätään automaattisesti ja lasketaan mukaan sekä alaan että piiriin.
- Pisteitä voi sijoittaa missä tahansa järjestyksessä (myötä- tai vastapäivään) — tulos on identtinen joka tapauksessa.

## Area vs Distance vs Angle

| | Area | Distance | Angle |
|---|------|---------|-------|
| Mitä se mittaa | Monikulmion sisäalue ja piiri | Suoran viivan pituus | Sisäkulma kärkipisteessä |
| Napsautusten määrä | 3 tai useampi, suljettu Enterillä | 2 | 3 |
| Tuloksen muoto | `12.3456  Perimeter: 45.6789` | `12.3456` (yksikköä) | `45.0000°` |
| Esikatselu piirtoalueella | Täytetty monikulmio katkoviivaisella sulkevalla reunalla | Viiva ensimmäisestä pisteestä kohdistimeen | Kaksi viivaa kärkipisteestä molempiin päihin |
| Tuloksen jälkeen | Hylkää millä tahansa syötteellä, sitten komento päättyy | Napsauta ketjuttaaksesi uuden mittauksen | Napsauta ketjuttaaksesi uuden mittauksen |
| Paras käyttö | Suljetut alueet, huoneen tai paneelin ala | Aukon tai segmentin pituus | Avautumiskulma kahden ominaisuuden välillä |

## Koordinaattien syöttö

Napsauttamisen sijaan voit kirjoittaa tarkan sijainnin mille tahansa kärjelle:

1. Kirjoita X-arvo.
2. Paina `,` — terminaali näyttää `[X], [Y{kohdistin}]`.
3. Kirjoita Y-arvo.
4. Paina **Enter** vahvistaaksesi.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö, tai reunan pituuden syöttö kulmalukittuna |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti tai pituus; 3+ kärjellä ja ilman odottavaa syötettä sulkee monikulmion |
| `Escape` | Kärkiä valittaessa, hylkää ne ja aloita uudelleen ensimmäisestä pisteestä; kun tulos näytetään, hylkää se ja poistu |

## Huomautuksia

- Ala lasketaan [shoelace-kaavalla](https://en.wikipedia.org/wiki/Shoelace_formula) ja ilmoitetaan aina positiivisena arvona napsautusjärjestyksestä riippumatta.
- Itseään leikkaavat monikulmiot (toisiaan leikkaavat reunat) tuottavat silti numeerisen tuloksen, mutta arvo ei välttämättä vastaa visuaalisesti suljettua aluetta — pidä napsautusjärjestys ei-leikkaavana merkityksellistä alaa varten.
- Tulokset näytetään **vain terminaalissa ja väliaikaisena korostuksena piirtoalueella** — mitään ei lisätä piirustukseen pysyvänä entiteettinä.
- Toisin kuin Distance ja Angle, Area **ei** ketjutu automaattisesti uuteen mittaukseen — hylättyäsi tuloksen, aja `area` uudelleen mitataksesi toisen monikulmion.
- Tarkkuus on aina 4 desimaalia sekä alalle että piirille, samoissa yksiköissä kuin piirustuksen koordinaatit (ei yksikkömuunnosta).
