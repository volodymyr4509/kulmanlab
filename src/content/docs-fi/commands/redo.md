---
title: Redo-komento — Tee Kumotut Toiminnot Uudelleen KulmanLab CAD:issa
description: Redo-komento soveltaa uudelleen viimeisimmän Undo-komennolla peruutetun toiminnon, liikkuen eteenpäin historiakasassa. Redo on käytettävissä vain Undo-komennon jälkeen ja tyhjennetään heti kun uusi piirtotoiminto suoritetaan.
keywords: [CAD redo-komento, redo-historia CAD, sovella toiminto uudelleen CAD, kumoa tee uudelleen CAD, selain pysyvä redo, kulmanlab]
group: edit
order: 14
---

# Redo

Komento `redo` liikkuu eteenpäin kumoushistoriassa, soveltaen uudelleen toimintoja, jotka [Undo](../undo/) on peruuttanut. Redo on käytettävissä vain, kun olet astunut taaksepäin Undo-komennolla etkä ole vielä tehnyt uutta muutosta.

## Näin teet uudelleen

- Kirjoita `redo` terminaaliin, tai
- Napsauta **Redo**-painiketta työkalurivillä.

Jokainen kutsu soveltaa uudelleen yhden aiemmin kumotun toiminnon. Kutsu sitä toistuvasti liikkuaksesi eteenpäin kaikkien käytettävissä olevien redo-merkintöjen läpi.

## Redo-kasan käyttäytyminen

| Yksityiskohta | Käyttäytyminen |
|--------|-----------|
| Käytettävissä | Yhden tai useamman [Undo](../undo/)-askeleen jälkeen |
| Tyhjennetään | **Minkä tahansa uuden piirtotoiminnon** yhteydessä — entiteetin lisääminen, muokkaaminen tai poistaminen |
| Tallennus | Selain, tiedostokohtainen — säilyy sivun uudelleenlatauksen yli (kunhan uutta toimintoa ei tehty ennen uudelleenlatausta) |
| Enimmäissyvyys | Enintään 20 merkintää (sama pooli kuin Undo) |

Kun uusi entiteetti piirretään, poistetaan tai muokataan, redo-kasa tyhjennetään, eikä niitä merkintöjä voida palauttaa. Vain kumotut toiminnot, joita ei ole korvattu uudella työllä, voidaan tehdä uudelleen.

## Redo vs Undo

| | Redo | Undo |
|---|------|------|
| Suunta | Liikkuu **eteenpäin** kumottujen merkintöjen läpi | Liikkuu **taaksepäin** historian läpi |
| Käytettävissä kun | Vähintään yhden Undon jälkeen, ilman uutta toimintoa | Vähintään yksi tallennettu toiminto on olemassa |
| Tyhjennetään | Minkä tahansa uuden piirtotoiminnon yhteydessä | Ei mitään |

Redo-painike työkalurivillä on harmaana, kun uudelleentehtäviä merkintöjä ei ole. Käytä [Undo](../undo/)-komentoa ensin luodaksesi redo-merkintöjä.
