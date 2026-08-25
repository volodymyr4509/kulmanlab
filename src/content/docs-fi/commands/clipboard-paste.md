---
title: ClipboardPaste-komento — Liitä objektit järjestelmän leikepöydältä
description: ClipboardPaste-komento lukee järjestelmän leikepöydältä objektit, jotka ClipboardCopy on aiemmin kirjoittanut, ja sijoittaa ne valittuun lisäyspisteeseen lisäten kohdepiirustuksesta puuttuvat tasot ja viivatyypit.
keywords: [leikepöydältä liittäminen CAD, objektien liittäminen piirustusten välillä, CAD-objektien liittäminen, Ctrl+V CAD, liittäminen välilehtien välillä, tasojen yhdistäminen liitettäessä, kulmanlab]
group: edit
order: 18
---

# ClipboardPaste

`ClipboardPaste`-komento lukee objektit, jotka [ClipboardCopy](../clipboard-copy/) kirjoitti **järjestelmän leikepöydälle**, ja sijoittaa ne nykyiseen piirustukseen valitsemaasi pisteeseen. Koska leikepöytä on järjestelmän oikea leikepöytä, lähde voi olla toinen piirustus, toinen selaimen välilehti tai aiemmin samana päivänä avattu istunto.

## Näin liität

1. Paina `Ctrl+V` (macOS:ssä `Cmd+V`) tai kirjoita `ClipboardPaste` päätteeseen.
2. Kehote näyttää **reading clipboard…**, kun selain luovuttaa leikepöydän tekstin.
3. Latauksen jälkeen kehote vaihtuu muotoon **pick insertion point**, ja geometrian esikatselu seuraa osoitinta.
4. **Napsauta** sijoittaaksesi objektit. Ne lisätään piirustukseen ja jäävät valituiksi.

Esikatselu on ankkuroitu kopion **viitepisteeseen** — alkuperäisen valinnan yhteenlasketun rajauksen vasempaan alakulmaan. Se kulma on osoittimen alla, joten kopioitujen objektien keskinäinen asettelu säilyy täsmälleen.

## Mitä liitettäessä tapahtuu

| Vaihe | Toiminta |
|-------|----------|
| **Uudet tunnisteet** | Jokainen liitetty objekti saa uuden id:n, joten kahdesti liittäminen tuottaa kaksi toisistaan riippumatonta joukkoa |
| **Siirto** | Objekteja siirretään verran osoitin − viitepiste |
| **Tasojen yhdistäminen** | Jokainen viitattu taso, joka puuttuu kohdepiirustuksesta, lisätään nimen perusteella |
| **Viivatyyppien yhdistäminen** | Jokainen viitattu viivatyyppi, joka puuttuu kohdepiirustuksesta, lisätään nimen perusteella |
| **Valinta** | Aiempi valinta tyhjennetään ja liitetyistä objekteista tulee valinta |

### Tasojen ja viivatyyppien yhdistäminen

Puuttuvat taulukkomerkinnät lisätään; **olemassa olevat jätetään rauhaan**. Jos leikepöytä tuo mukanaan punaisen `WALLS`-nimisen tason ja kohdepiirustuksessa on jo sininen `WALLS`, kohteen määritelmä voittaa ja liitetyt objektit liittyvät siihen — niistä tulee sinisiä. Liittäminen ei määrittele mitään uudelleen kohdepiirustuksessa.

Tällä on merkitystä kopioitaessa piirustusten välillä, joissa on eri tasokäytännöt: tarkista [Layer Manager](../layer-manager/) piirustusten välisen liittämisen jälkeen, jos värit eivät ole odottamasi.

## Kun leikepöydällä ei ole mitään liitettävää

ClipboardPaste hyväksyy vain ClipboardCopyn tuottaman sisällön. Kaikki muu leikepöydällä — pelkkä teksti, linkki, kuva, toisen sovelluksen JSON — hylätään, ja pääte ilmoittaa:

```
Clipboard has no copied entities
```

Jos selain epää pääsyn leikepöydälle kokonaan, viesti on sen sijaan **Clipboard access denied**. Molemmat päättävät komennon muuttamatta piirustusta.

## Näppäimistöviite

| Näppäin | Toiminto |
|---------|----------|
| `Ctrl+V` / `Cmd+V` | Käynnistä ClipboardPaste |
| `Escape` | Peruuta — objektit hylätään eikä mitään lisätä |

Peruuttaminen lukuvaiheessa on turvallista: jos leikepöytä vastaa vasta sen jälkeen kun olet jo peruuttanut tai aloittanut toisen komennon, myöhässä tullut tulos hylätään sen sijaan että se häiritsisi sitä, mikä silloin on käynnissä.

## Kopiointi välilehtien välillä

Tavanomainen työnkulku piirustusten välillä:

1. Avaa lähdepiirustus, valitse geometria, paina `Ctrl+C`.
2. Vaihda toiseen välilehteen — tai avaa sovelluksen toinen välilehti ja lataa eri tiedosto.
3. Paina `Ctrl+V` ja napsauta lisäyspistettä.

Molemmilla välilehdillä on sama alkuperä ja ne jakavat järjestelmän leikepöydän, joten mitään ei ladata palvelimelle eikä yksikään palvelin ole mukana. Sisältö pysyy koko ajan JSON-tekstinä omalla leikepöydälläsi.

## Tuetut objektit

Jokaisen objektityypin, jonka ClipboardCopy osaa kirjoittaa, ClipboardPaste osaa lukea takaisin — samalla sarjallistuksella, jota natiivi `.json`-muoto käyttää.

## Katso myös

- [ClipboardCopy](../clipboard-copy/) — kirjoita valinta leikepöydälle
- [Copy](../copy/) — monista objektit nykyisen piirustuksen sisällä
- [Layer Manager](../layer-manager/) — tarkastele liittämisen mukanaan tuomia tasoja
