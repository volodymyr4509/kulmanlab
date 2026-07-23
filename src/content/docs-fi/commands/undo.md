---
title: Undo-komento — Askella Taaksepäin Piirustushistoriassa
description: Undo-komento peruuttaa viimeisimmän piirtotoiminnon yksi askel kerrallaan. Enintään 20 askelta tallennetaan tiedostoa kohden ja säilyy selaimessa sivun uudelleenlatausten yli. Uuden toiminnon suorittaminen kumoamisen jälkeen tyhjentää redo-kasan.
keywords: [CAD undo-komento, kumoushistoria CAD, peruuta toiminto CAD, kumoa-askeleet CAD, selain pysyvä kumoaminen, kulmanlab]
group: edit
order: 13
---

# Undo

Komento `undo` peruuttaa viimeisimmän piirustuksen muutoksen — yksi askel per kutsu. Jokainen entiteettien lisäys, poisto tai muokkaus tallennetaan erillisenä historiamerkintänä. Undo askeltaa taaksepäin näiden merkintöjen läpi käänteisessä järjestyksessä.

## Näin kumoat

- Kirjoita `undo` terminaaliin, tai
- Napsauta **Undo**-painiketta työkalurivillä.

Jokainen kutsu peruuttaa yhden tallennetun toiminnon. Kutsu sitä toistuvasti askeltaaksesi kauemmas taaksepäin.

## Historian käyttäytyminen

| Yksityiskohta | Arvo |
|--------|-------|
| Askeleita tiedostoa kohden | Enintään **20** |
| Tallennus | Selain (IndexedDB / localStorage), tiedostonimen mukaan |
| Säilyy sivun uudelleenlatauksessa | Kyllä — historia palautetaan, kun avaat tiedoston uudelleen |
| Uusi toiminto kumoamisen jälkeen | Tyhjentää kaikki nykyisen sijainnin edessä olevat redo-merkinnät |
| Vanhin merkintä kun täynnä | Poistetaan tehdäkseen tilaa uusimmalle muutokselle |

Jokainen entiteetin muutos tallennetaan: uusien entiteettien piirtäminen, entiteettien poistaminen, päätepisteiden kahvamuokkaus, Move-, Rotate-, Scale-, Mirror-, Trim-, Extend- ja Offset-komentojen soveltaminen luovat kaikki historiamerkintöjä.

## Undo vs Redo

| | Undo | Redo |
|---|------|------|
| Suunta | Askeltaa **taaksepäin** historian läpi | Askeltaa **eteenpäin** kumottujen merkintöjen läpi |
| Käytettävissä kun | Vähintään yksi tallennettu toiminto on olemassa | Vähintään yksi Undo on suoritettu eikä uutta toimintoa ole tehty |
| Tyhjennetään | Ei mitään — historia kertyy 20 askeleen rajaan asti | Minkä tahansa uuden piirtotoiminnon yhteydessä |

Käytä [Redo](../redo/)-komentoa soveltaaksesi kumotun toiminnon uudelleen. Työkalurivin painikkeet ovat harmaana, kun vastaava suunta ei ole käytettävissä.
