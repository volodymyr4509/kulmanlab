---
title: Umarnin ClipboardCopy — Kwafe abubuwa zuwa allon kwafe na tsarin
description: Umarnin ClipboardCopy yana rubuta abubuwan da aka zaɓa a kan allon kwafe na tsarin a matsayin rubutun JSON, tare da yadudduka da nau'ikan layi da suke ambata, domin a manna su a wani zane ko wani shafin burauza da ClipboardPaste.
keywords: [kwafe allon kwafe CAD, kwafe abubuwa tsakanin zane-zane, kwafe abubuwan CAD, Ctrl+C CAD, kwafe tsakanin shafuka, kulmanlab]
group: edit
order: 17
---

# ClipboardCopy

Umarnin `ClipboardCopy` yana rubuta abubuwan da aka zaɓa a kan **allon kwafe na tsarinka** a matsayin rubutun JSON. Tunda yana amfani da allon kwafe na gaske ba wani ma'ajiyar wucin gadi ba, siffofin da aka kwafe suna rayuwa a wajen zanen: manna su a wani fayil, shafin burauza na biyu, ko taga da za ka buɗe daga baya ta amfani da [ClipboardPaste](../clipboard-paste/).

Wannan ita ce bambancin da [Copy](../copy/): Copy yana ninka abubuwa a cikin zanen da ake kai a mataki ɗaya, yayin da ClipboardCopy ke ajiye su inda za a iya ɗauko su daga wani zane dabam gaba ɗaya.

## Hanyoyi biyu na farawa

**Zaɓa da farko, sannan ka kwafe** — hanya mai sauri:

1. Zaɓi abu ɗaya ko fiye a kan filin zane.
2. Danna `Ctrl+C` (`Cmd+C` a macOS), ko ka rubuta `ClipboardCopy` a tashar umarni.
3. Ana rubuta abubuwan a allon kwafe nan take kuma umarnin ya ƙare.

**Kunna da farko, sannan ka zaɓa** — farawa ba tare da an zaɓi komai ba:

1. Danna `Ctrl+C` ko ka rubuta `ClipboardCopy` yayin da babu abin da aka zaɓa.
2. Umarnin yana nuna **pick objects to copy — Enter or Space to confirm**.
3. **Zaɓi abubuwa** — danna don shigar da abu ɗaya cikin zaɓi ko fitar da shi, ko ja don zaɓa ta yanki.
4. Danna **Enter** ko **Space** don kwafe zaɓin sannan ka fita.

Danna **Enter** ko **Space** ba tare da an zaɓi komai ba kawai yana ƙarasa umarnin ba tare da taɓa allon kwafe ba.

## Abin da ake kwafewa

Abin da ke kan allon kwafe yana ɗauke da fiye da siffofi kawai, domin mannawa a cikin zane baƙo ya ci gaba da kyau:

| Sashe | Manufa |
|-------|--------|
| **Abubuwa** | Cikakken tsarin da aka jera na kowane abu da aka zaɓa |
| **Wurin dubawa** | Kusurwar ƙasa ta hagu ta iyakar haɗaɗɗiya ta zaɓin — abin da ClipboardPaste ke haɗawa da alamar linzami |
| **Yadudduka** | Kawai yadudduka da abubuwan da aka kwafe suke ambata da gaske, bisa suna |
| **Nau'ikan layi** | Kawai nau'ikan layi da abubuwan da aka kwafe suke ambata da gaske, bisa suna |

Abubuwan da ke tafiya tare da kwafin su ne shigarwar tebur *da aka ambata* kawai — ba dukkan teburin yadudduka da nau'ikan layi na zanen tushe ba. Ba a haɗa zanukan cikawa ko kaɗan kuma ba a buƙatarsu: teburin zanuka na wani zane shi ne saitin asali da aka gina ciki, kuma duk fayilolin `.pat` da ka ɗora suna cikin ma'ajiyar kowane mai amfani wadda tuni ake raba ta tsakanin shafuka, don haka cikawar da aka manna tana samun zanenta da kanta.

## Tabbatarwa

Idan ya yi nasara, tashar umarni tana bayar da rahoton adadin abubuwan da aka rubuta:

```
3 entities copied to clipboard
```

Idan burauza ta ƙi ba da damar shiga allon kwafe, tashar umarni tana nuna **Copy failed: clipboard access denied** kuma ba a rubuta komai ba. Wannan shawarar izini ce ta burauza, ba kuskuren zane ba — duba [Izinin allon kwafe](#izinin-allon-kwafe) a ƙasa.

## Zaɓi yayin da umarnin ke gudana

| Hanya | Hali |
|-------|------|
| **Danna** | Yana shigar da abin da ke ƙarƙashin alamar linzami cikin zaɓi ko fitar da shi |
| **Ja zuwa dama** (tsauri) | Yana ƙara abubuwan da suke gaba ɗaya cikin akwatin |
| **Ja zuwa hagu** (mai ƙetarewa) | Yana ƙara abubuwan da suka ƙetare iyakar akwatin |
| **Enter** / **Space** | Yana tabbatar da zaɓin sannan ya kwafe |

## Jagorar madannai

| Maɓalli | Aiki |
|---------|------|
| `Ctrl+C` / `Cmd+C` | Kunna ClipboardCopy |
| `Enter` / `Space` | Kwafe zaɓin yanzu, ko fita idan babu abin da aka zaɓa |
| `Escape` | Soke ba tare da kwafewa ba |

## Izinin allon kwafe

Rubutawa a allon kwafe na tsarin yana buƙatar izinin burauza. A aikace, kwafen da aka fara ta hanyar danna maɓalli ana ba shi izini ba tare da tambaya ba a burauzoji na kwamfuta na yanzu, amma shafi da ya rasa mayar da hankali, ko burauza mai tsauraran saitunan allon kwafe, na iya ƙi. Idan ka ga saƙon ƙin shiga, danna sau ɗaya a filin zane don mayar da hankali ga shafin sannan ka sake gwadawa.

Tunda abin da ke ciki rubutun JSON ne na yau da kullum, duk abin da ka kwafe bayan haka yana maye gurbinsa — layin rubutu ko mahaɗi. Sake kwafe kafin ka manna idan ka yi amfani da allon kwafe don wani abu daban a tsakani.

## Abubuwan da ake goyon baya

ClipboardCopy yana aiki da kowane nau'in abu. Ana jera abubuwa da hanya ɗaya da fitarwar `.json` ta asali ke amfani da ita, don haka babu abin da ke ɓacewa a hanya.

## Duba kuma

- [ClipboardPaste](../clipboard-paste/) — karanta allon kwafe kuma ka ajiye abubuwan
- [Copy](../copy/) — ninka abubuwa a cikin zanen da ake kai
- [Export Manager](../export-manager/) — adana dukan zanen a matsayin DXF ko JSON
