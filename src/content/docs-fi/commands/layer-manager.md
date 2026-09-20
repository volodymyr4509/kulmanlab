---
title: LayerManager — Hallitse Kaikkia Tasoja Yhdessä Taulukossa
description: LayerManager-komento avaa taulukon piirustuksen kaikista tasoista, jossa voit lisätä tasoja, poistaa käyttämättömiä ja muokata kunkin tason jäädytystä, lukitusta, tulostusta, väriä, viivanpaksuutta ja viivatyyppiä suoraan rivillä.
keywords: [tasonhallinta, CAD tasotaulukko, tasojen hallinta CAD, tason lisääminen CAD, tason poistaminen CAD, käyttämättömän tason poisto, jäädytä lukitse tulosta taso, kulmanlab tasonhallinta]
group: layer
order: 1
---

# LayerManager

`Tasojenhallinta`-komento avaa taulukon, jossa on lueteltuna piirustuksen jokainen taso, ja jossa **Freeze**-, **Lock**-, **Plot**-, **väri**-, **viivanpaksuus**- ja **viivatyyppi**-asetuksia voi muokata suoraan rivillä. Se on keskeinen paikka lisätä tasoja, poistaa käyttämättömiä ja säätää olemassa olevien käyttäytymistä — muut tasokomennot ([LayerMakeCurrent](../layer-make-current/), [LayerMatch](../layer-match/), [LayerIsolate](../layer-isolate/), [LayerUnfreezeAll](../layer-unfreeze-all/)) tekevät kukin yhden rajatun asian avaamatta sitä.

## Layer Managerin avaaminen

- Kirjoita `Tasojenhallinta` terminaaliin, **tai**
- Napsauta **Layer Manager**-painiketta tasopaneelissa.

Valintaikkuna avautuu kelluvana paneelina; mitään ei tarvitse valita etukäteen.

## Tasotaulukko

| Sarake | Mitä se hallitsee |
|--------|----------------------|
| Name | Tason nimi, näytetään taulukossa vain luku -tilassa (asetetaan kerran, luontihetkellä) |
| Freeze | Piilottaa tason entiteetit ja sulkee ne pois valinnasta, kunnes jäädytys poistetaan |
| Lock | Estää tason entiteettien muokkaamisen piilottamatta niitä |
| Plot | Sisällytetäänkö tason entiteetit tulostukseen tai PDF-vientiin |
| Color | Tason ACI-väri — napsauta väriruutua avataksesi värivalitsimen |
| Lineweight | Tason viivanpaksuus — napsauta chipiä avataksesi viivanpaksuusvalitsimen |
| Linetype | Tason viivakuvio — napsauta chipiä avataksesi viivatyyppivalitsimen |
| ✕ | Poistaa tason, kun mikään ei käytä sitä — katso [Tason poistaminen](#tason-poistaminen) |

Freezen, Lockin tai Plotin vaihtaminen vaikuttaa välittömästi — erillistä tallennusvaihetta ei ole. Entiteetit, joiden väri, viivanpaksuus tai viivatyyppi on asetettu arvoon **ByLayer** (oletusarvo), noudattavat tässä asetettua; entiteetit, joilla on oma eksplisiittinen ohitus, eivät muutu.

## Tason lisääminen

1. Napsauta **+ Add Layer** taulukon alareunassa.
2. Kirjoita nimi ja paina **Enter** vahvistaaksesi, tai **Escape** peruuttaaksesi.

Tason nimet voivat sisältää kirjaimia, numeroita, välilyöntejä sekä merkkejä `_`, `-`, `$`. Tyhjä, jo käytössä oleva tai muita merkkejä sisältävä nimi hylätään rivin sisäisellä virheilmoituksella, ja rivi jää auki uutta yritystä varten.

Uudet tasot alkavat **jäädyttämättöminä, lukitsemattomina, tulostettavina**, värillä 7 (valkoinen/musta), viivanpaksuudella Default ja viivatyypillä Continuous — samat oletusarvot, jotka [Import](../import/) antaa tasolle `0` tyhjässä piirustuksessa.

## Tason poistaminen

Jokainen rivi päättyy **✕**-painikkeeseen, joka poistaa tason piirustuksesta. Poisto tapahtuu heti — vahvistusvaihetta ei ole — mutta sitä tarjotaan vain tasoille, joista mikään ei riipu:

| Tilanne | Painikkeen tila |
|---------|-----------------|
| Taso on tyhjä | Käytössä — *Delete layer* |
| Taso on määritetty vähintään yhdelle objektille | Poissa käytöstä — *Cannot delete: assigned to at least one entity* |
| Taso `0` | Ei painiketta lainkaan |

**"Käytössä" koskee koko piirustusta**, ei vain sitä mitä katsot. Asettelussa (paperitilassa) sijaitseva objekti lasketaan täsmälleen samoin kuin mallitilan objekti, joten taso voi näyttää näytöllä tyhjältä ja silti kieltäytyä poistumasta. Jäädytetyt tasot eivät ole poikkeus: jäädyttäminen piilottaa objektit mutta ei pura niiden määritystä, joten objekteja sisältävä jäädytetty taso pysyy poistokelvottomana.

Tasoa `0` ei voi koskaan poistaa. Se on varataso, joka jokaisella piirustuksella taatusti on, joten painiketta ei piirretä sille lainkaan sen sijaan että se näytettäisiin poissa käytöstä.

### ”…is now in use and can't be deleted”

Toisinaan ✕ näyttää käytettävissä olevalta, mutta napsautus torjutaan paneelin yläreunan palkilla:

```
"WALLS" is now in use and can't be deleted
```

Tämä ei ole ristiriita. Sen selvittäminen, mitkä tasot ovat käytössä, edellyttää piirustuksen jokaisen objektin läpikäymistä, joten tulos välimuistitetaan ja rakennetaan uudelleen vain objektien määrän muuttuessa — halpaa satojen objektien kohdalla, ei satojen tuhansien. Olemassa olevan objektin siirtäminen tasolle ei muuta tuota määrää, joten rivin poissa-käytöstä-tila voi olla hetken vanhentunut. Napsautus tarkistaa asian alusta ennen kuin mitään poistetaan — siksi torjunta tapahtuu napsautushetkellä eikä niin, että taso katoaisi vaikka johonkin jäisi vielä viittaus siihen.

Sulje palkki sen omalla **✕**-painikkeella. Taso jää koskemattomaksi.

## Mitä täällä ei voi tehdä

Taulukko ei osoita, mikä taso on *nykyinen*; se asetetaan tasopaneelin pudotusvalikosta tai [LayerMakeCurrent](../layer-make-current/)-komennolla, ei tästä valintaikkunasta. Myös tasojen nimet lyödään lukkoon luontihetkellä — tason voi poistaa ja luoda uudelleen, mutta ei nimetä uudelleen.

## Näppäinreferenssi

| Näppäin | Toiminto |
|---------|----------|
| `Enter` | Vahvista uuden tason nimi (lisäyksen aikana) |
| `Escape` | Peruuta tason lisääminen, tai sulje valintaikkuna |

## Liittyvät komennot

| Komento | Mitä se tekee |
|---------|-------------|
| [LayerMakeCurrent](../layer-make-current/) | Aseta nykyinen taso vastaamaan napsautetun entiteetin tasoa |
| [LayerMatch](../layer-match/) | Kohdista valitut entiteetit uudelleen lähdeentiteetin tasolle |
| [LayerIsolate](../layer-isolate/) | Jäädytä kaikki tasot paitsi valittujen entiteettien tasot |
| [LayerUnfreezeAll](../layer-unfreeze-all/) | Poista kaikkien tasojen jäädytys yhdellä kertaa |
