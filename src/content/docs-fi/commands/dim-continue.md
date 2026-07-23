---
title: Dimension Continue — Ketjuta Mittoja Perusviivasta
description: Dimension Continue -komento jatkaa mittojen ketjua viimeksi sijoitetun mitan toisesta apuviivasta. Se perii automaattisesti perusmitan kulman, siirtymän, nuolen koon ja tekstin korkeuden. Toimii sekä lineaaristen että kohdistettujen perustojen kanssa.
keywords: [CAD dimension continue, dimcontinue, ketjuta mittoja CAD, perusviivamitta, jatka mittasarjaa, kulmanlab]
group: markup
order: 6
---

# Dimension Continue

Komento `dimcontinue` ketjuttaa uusia mittoja olemassa olevan mitan **toisesta apuviivasta**. Jokainen uusi segmentti sijoitetaan samalle mitta-akselille ja samalla mittaviivan siirtymällä kuin perusta. Kaikki tyyliominaisuudet — nuolen koko, tekstin korkeus, apuviivojen pituudet — kopioidaan automaattisesti perustasta.

## Miltä ketjutetut mitat näyttävät

```
  |←— 3.00 —→|←— 2.50 —→|←— 4.00 —→|
  |           |           |           |
  ●           ●           ●           ●
  p1        p2 (perusta  p3           p4
           apu2 → uusi alku)
```

Jokainen suorakulmio on erillinen `DIMENSION`-entiteetti. Ne jakavat saman mittaviivan sijainnin ja mittaussuunnan.

## Ketjun aloittaminen

1. Kirjoita `dimcontinue` terminaaliin tai napsauta **Dimension Continue**-painiketta työkalurivillä.
2. **Jos mitta on juuri sijoitettu** — komento poimii sen automaattisesti perustaksi (napsautusta ei tarvita).
3. **Jos viimeaikaista mittaa ei ole** — napsauta mitä tahansa olemassa olevaa mittaa käyttääksesi sitä perustana.
4. **Napsauta seuraavan apuviivan lähtöpistettä** — esikatselu näyttää uuden mitan liikuttaessasi kohdistinta. Tai kirjoita `X,Y` ja paina **Enter** tarkkaa koordinaattia varten.
5. Jatka napsauttamista (tai kirjoittamista) laajentaaksesi ketjua. Jokaisesta sijoitetusta mitasta tulee automaattisesti uusi perusta.
6. Paina **Enter**, **Space** tai **Escape** viimeistelläksesi ketjun.

## Mitä perii perusmitasta

| Ominaisuus | Peritty perustasta |
|----------|---------------------|
| Mittaussuunta / kulma | Kyllä — lukittu koko ketjulle |
| Mittaviivan siirtymä (etäisyys mitatuista pisteistä) | Kyllä |
| Nuolen koko | Kyllä |
| Tekstin korkeus | Kyllä |
| Apuviivan siirtymä ja pidennys | Kyllä |
| Tekstin tasaus | Kyllä |
| Tyylin nimi | Kyllä |
| Väri, Taso | Ei peritä — käyttää nykyistä tasoa |

## Mittaussuunnan lukitus

Ketjun mittaussuunta on **kiinnitetty perusmitan kulmaan**:

- Lineaarinen perusta (H) → kaikki jatkeet mittaavat vaakasuoraa etäisyyttä (Δ X).
- Lineaarinen perusta (V) → kaikki jatkeet mittaavat pystysuoraa etäisyyttä (Δ Y).
- Kohdistettu perusta missä tahansa kulmassa → kaikki jatkeet mittaavat samaa kulmaa pitkin.

Suuntaa ei voi vaihtaa kesken ketjun. Aloita uusi [Dimension Linear](../dim-linear/) tai [Dimension Aligned](../dim-aligned/) mitoittaaksesi eri suuntaan.

## Näppäinreferenssi

| Näppäin | Toiminto |
|-----|--------|
| `0`–`9`, `.`, `-` | Aloita X-koordinaatin syöttö |
| `,` | Lukitse X ja siirry Y:n syöttöön |
| `Backspace` | Poista viimeksi kirjoitettu merkki |
| `Enter` | Vahvista kirjoitettu koordinaatti, tai viimeistele ketju jos syöte ei ole käynnissä |
| `Space` / `Escape` | Viimeistele ketju |

## Dimension Continue vs alusta aloittaminen

| | Dimension Continue | Dimension Linear / Aligned |
|---|-------------------|--------------------------|
| Aloituspiste | Kiinnitetty viimeisen perustan apu2:een | Napsauta missä tahansa |
| Kulma | Lukittu perustaan | Vapaa |
| Siirtymä | Peritty perustasta | Asetettu kohdistimella tai kirjoitettu |
| Tyyli | Peritty perustasta | Nykyinen tyyli |
| Paras käyttö | Kumulatiiviset mittaukset rivillä | Ensimmäinen mitta tai suunnan vaihto |

## Merkintöjen muokkaaminen sijoituksen jälkeen — yksinkertainen tila

**Kaksoisnapsauta** mitä tahansa ketjun mittaa avataksesi tekstieditorin **yksinkertaisessa** tilassa. Jokainen segmentti on itsenäinen ja voidaan muokata erikseen.

| Ominaisuus | Käyttäytyminen |
|---------|-----------|
| Lihavointi / Kursivointi / Fontti / Korkeus | Koskee **koko** merkintää kerralla |
| Merkkikohtainen muotoilu | Ei tuettu |
| `Enter` | Vahvistaa arvon ja sulkee editorin |
| Monirivinen | Ei tuettu |

Katso [Tekstieditori — yksinkertainen tila](../../interface/text-editor/#simple-mode) täydellistä referenssiä varten.

## DXF — DIMENSION-entiteetit

Jokainen ketjun segmentti tallennetaan itsenäisenä `DIMENSION`-entiteettinä DXF-tiedostossa. Niitä ei linkitetä tiedostossa — ne jakavat ominaisuuksia, koska ne luotiin samasta perustasta, mutta jokaista voidaan muokata erikseen sijoituksen jälkeen.
